import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { login as loginService, getProfile } from '@/services/auth-service';

interface AuthContextType {
  user: {
    username: string;
    email: string;
    phone_number: string;
    role: string;
  } | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const profileResponse = await getProfile(storedToken);
          if (profileResponse.data) {
            setUser(profileResponse.data);
            setToken(storedToken);
          } else {
            localStorage.removeItem('token');
          }
        } catch {
          localStorage.removeItem('token');
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await loginService(email, password);
    if (response.error) {
      throw new Error(response.error);
    }

    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);

      const profileResponse = await getProfile(response.data.token);
      if (profileResponse.data) {
        setUser(profileResponse.data);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
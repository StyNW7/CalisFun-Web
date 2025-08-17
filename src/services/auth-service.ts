import apiRequest from './api';

interface LoginResponse {
  token: string;
}

interface UserProfile {
  username: string;
  email: string;
  phone_number: string;
  role: string;
}

export const login = async (email: string, password: string) => {
  return apiRequest<LoginResponse>('/auth/login', 'POST', { email, password });
};

export const getProfile = async (token: string) => {
  return apiRequest<UserProfile>('/user/profile', 'GET', undefined, {
    Authorization: `Bearer ${token}`,
  });
};

export const changePassword = async (
  userId: string,
  currentPassword: string,
  newPassword: string,
  token: string
) => {
  return apiRequest(
    `/auth/change-password/${userId}`,
    'PUT',
    { currentPassword, newPassword },
    { Authorization: `Bearer ${token}` }
  );
};
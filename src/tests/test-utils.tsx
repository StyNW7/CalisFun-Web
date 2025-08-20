import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext' // Import your AuthProvider

type Options = {
  router?: Partial<MemoryRouterProps>
  wrapper?: (p: { children: ReactNode }) => JSX.Element
}

export function renderWithProviders(
  ui: React.ReactElement,
  { router, wrapper }: Options = {},
) {
  const All: React.FC<{ children: ReactNode }> = ({ children }) => {
    const Root = wrapper ?? ((p: { children: ReactNode }) => <>{p.children}</>)
    return (
      <MemoryRouter initialEntries={router?.initialEntries || ['/']}>
        <AuthProvider> {/* Wrap with AuthProvider */}
          <Root>{children}</Root>
        </AuthProvider>
      </MemoryRouter>
    )
  }

  return render(ui, { wrapper: All })
}
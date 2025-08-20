import type { ReactElement, PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '@/context/AuthContext'
import App from '@/App'

type Options = {
  router?: { initialEntries?: string[] }
  path?: string
}

function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )
}

/** Render <App/> dalam MemoryRouter + semua provider penting */
export function renderApp(
  ui: ReactElement = <App />,
  { router = { initialEntries: ['/'] }, path = '/*' }: Options = {}
) {
  return render(
    <Providers>
      <MemoryRouter initialEntries={router.initialEntries}>
        <Routes>
          <Route path={path} element={ui} />
        </Routes>
      </MemoryRouter>
    </Providers>
  )
}
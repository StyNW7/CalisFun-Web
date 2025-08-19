import type { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom'

type Options = {
  router?: Partial<MemoryRouterProps>
  wrapper?: (p: { children: ReactNode }) => JSX.Element
}

/** Render dengan MemoryRouter dan wrapper opsional (misal AuthProvider mock) */
export function renderWithProviders(
  ui: React.ReactElement,
  { router, wrapper }: Options = {},
) {
  const All: React.FC<{ children: ReactNode }> = ({ children }) => {
    const Root = wrapper ?? ((p: { children: ReactNode }) => <>{p.children}</>)
    return (
      <MemoryRouter initialEntries={router?.initialEntries}>
        <Root>{children}</Root>
      </MemoryRouter>
    )
  }

  return render(ui, { wrapper: All })
}

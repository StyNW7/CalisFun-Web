import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/tests/test-utils'

// Import App milikmu:
import App from '@/App'

describe('App routing (integration)', () => {
  it('bisa navigasi antar halaman', async () => {
    const { container } = renderWithProviders(<App />, {
      router: { initialEntries: ['/'] },
    })

    // Contoh: ada link ke /about
    const aboutLink = await screen.findByRole('link', { name: /about/i })
    await userEvent.click(aboutLink)

    // Halaman about punya heading “About”
    expect(await screen.findByRole('heading', { name: /about/i })).toBeInTheDocument()

    // Snapshot kecil struktur (optional)
    expect(container).toMatchSnapshot()
  })
})

import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/tests/test-utils'

// Ubah path sesuai projectmu:
import { Button } from '@/components/ui/button'

describe('<Button />', () => {
  it('render dan bisa di-klik', async () => {
    const onClick = vi.fn()
    renderWithProviders(<Button onClick={onClick}>Simpan</Button>)
    const btn = await screen.findByRole('button', { name: /simpan/i })
    await userEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('mendukung variant tailwind (className)', () => {
    renderWithProviders(<Button className="bg-primary">OK</Button>)
    const btn = screen.getByRole('button', { name: /ok/i })
    expect(btn).toHaveClass('bg-primary')
  })
})

import { describe, it, expect } from 'vitest'
import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/tests/test-utils'
import App from '@/App'

describe('Questions Page (integration)', () => {
  it('menampilkan daftar dan bisa edit & delete (mock server)', async () => {
    renderWithProviders(<App />, {
      router: { initialEntries: ['/questions'] }, // sesuaikan route-mu
    })

    // Daftar muncul dari MSW handler
    const list = await screen.findByRole('list', { name: /reading-questions/i })
    const items = within(list).getAllByRole('listitem')
    expect(items.length).toBeGreaterThan(0)

    // Klik Edit item pertama (anggap ada tombol bernama "Edit")
    const editBtn = within(items[0]).getByRole('button', { name: /edit/i })
    await userEvent.click(editBtn)

    // Dialog shadcn muncul → input terisi lalu update
    const dialog = await screen.findByRole('dialog')
    const input = within(dialog).getByRole('textbox')
    await userEvent.clear(input)
    await userEvent.type(input, 'Updated by test')
    await userEvent.click(within(dialog).getByRole('button', { name: /save|update/i }))

    // Item pertama sekarang menampilkan teks baru
    expect(await within(items[0]).findByText(/updated by test/i)).toBeInTheDocument()

    // Hapus item kedua
    const delBtn = within(items[1]).getByRole('button', { name: /delete/i })
    await userEvent.click(delBtn)
    // Setelah delete, jumlah berkurang
    // (Cari ulang list untuk mendapatkan state terbaru)
    const newList = await screen.findByRole('list', { name: /reading-questions/i })
    expect(within(newList).getAllByRole('listitem').length).toBe(items.length - 1)
  })
})

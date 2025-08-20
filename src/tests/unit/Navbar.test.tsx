import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import { AuthProvider } from '@/context/AuthContext'

describe('Navbar', () => {
  it('renders navbar with logo and links', () => {
    render(
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    )

    expect(screen.getByText(/calisfun/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /beranda/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tentang/i })).toBeInTheDocument()
  })
})
import { render, screen } from '@testing-library/react'
import { Button } from '../../components/ui/button'
import { describe, expect, it } from 'vitest'

describe('Button Component', () => {
  it('renders with text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })
})

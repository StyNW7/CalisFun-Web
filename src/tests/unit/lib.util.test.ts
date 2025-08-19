/* eslint-disable no-constant-binary-expression */
import { describe, it, expect } from 'vitest'

// Jika util kamu di tempat lain, ubah path berikut:
import { cn } from '@/lib/utils'

describe('cn (classNames helper)', () => {
  it('menggabungkan string dan conditional dengan benar', () => {
    expect(cn('btn', false && 'hidden', 'px-2', { 'text-sm': true, 'text-lg': false }))
      .toBe('btn px-2 text-sm')
  })

  it('menghilangkan falsy values', () => {
    expect(cn(null, undefined, 0, '', 'card')).toBe('card')
  })
})

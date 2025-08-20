import { describe, it, expect, vi } from 'vitest'

// Mock axios
vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: [{ id: 'r1', type: 'reading', question: 'Q' }] })),
    post: vi.fn(() => Promise.resolve({ data: { ok: true } })),
    patch: vi.fn(() => Promise.resolve({ data: { ok: true } })),
    delete: vi.fn(() => Promise.resolve({ data: { ok: true } })),
  }
}))

describe('question-service (unit)', () => {
  it('getAllReadingQuestions mengembalikan array', async () => {
    // Import after mock
    const { getAllReadingQuestions } = await import('../../services/question-service')
    const data = await getAllReadingQuestions('fake-token')
    expect(Array.isArray(data)).toBe(true)
    expect(data[0]).toHaveProperty('id')
  })
})
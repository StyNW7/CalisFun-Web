/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'

// Mock AuthContext
vi.mock('../../context/AuthContext', () => ({
  useAuth: () => ({ token: 'fake-token', user: { id: 'u1', name: 'Tester' } }),
}))

// Mock service layer
const reading = [
  { id: 'r1', type: 'reading', question: 'What is React?' },
  { id: 'r2', type: 'reading', question: 'Explain Vite.' },
]
const updateSpy = vi.fn()
const delSpy = vi.fn()

vi.mock('../../services/question-service', () => ({
  getAllReadingQuestions: async () => reading,
  getAllWritingQuestions: async () => [],
  updateReadingQuestion: async (id: string, payload: any) => {
    updateSpy(id, payload)
    return { ...reading[0], ...payload }
  },
  deleteReadingQuestion: async (id: string) => {
    delSpy(id)
    return { ok: true }
  },
}))

// Import hook
import useQuestions from '../../hooks/useQuestion'

const Wrapper = ({ children }: { children: ReactNode }) => <>{children}</>

describe('useQuestions (unit)', () => {
  it('memuat pertanyaan reading di awal', async () => {
    const { result } = renderHook(() => useQuestions(), { wrapper: Wrapper })
    await waitFor(() => expect(result.current.readingQuestions.length).toBe(2))
  })
})
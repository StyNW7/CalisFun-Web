// import { describe, it, expect, vi } from 'vitest'
// import { renderHook, waitFor } from '@testing-library/react'
// import type { ReactNode } from 'react'

// // Mock AuthContext bila hook-mu tergantung auth
// vi.mock('@/context/AuthContext', () => ({
//   useAuth: () => ({ token: 'fake-token', user: { id: 'u1', name: 'Tester' } }),
// }))

// // Mock service layer
// const reading = [
//   { id: 'r1', type: 'reading', question: 'What is React?' },
//   { id: 'r2', type: 'reading', question: 'Explain Vite.' },
// ]
// const updateSpy = vi.fn()
// const delSpy = vi.fn()

// vi.mock('@/services/question-service', () => ({
//   getAllReadingQuestions: async () => reading,
//   getAllWritingQuestions: async () => [],
//   updateReadingQuestion: async (id: string, payload: any) => {
//     updateSpy(id, payload)
//     return { ...reading[0], ...payload }
//   },
//   deleteReadingQuestion: async (id: string) => {
//     delSpy(id)
//     return { ok: true }
//   },
// }))

// // Ubah path berikut sesuai hook-mu:
// import useQuestions from '@/hooks/useQuestion'

// const Wrapper = ({ children }: { children: ReactNode }) => <>{children}</>

// describe('useQuestions (unit)', () => {
//   it('memuat pertanyaan reading di awal', async () => {
//     const { result } = renderHook(() => useQuestions(), { wrapper: Wrapper })
//     await waitFor(() => expect(result.current.reading.length).toBe(2))
//   })

//   it('update dan delete memanggil service yang benar', async () => {
//     const { result } = renderHook(() => useQuestions(), { wrapper: Wrapper })
//     await waitFor(() => expect(result.current.reading.length).toBe(2))
//     await result.current.updateReading('r1', { question: 'Updated?' })
//     expect(updateSpy).toHaveBeenCalledWith('r1', { question: 'Updated?' })

//     await result.current.deleteReading('r2')
//     expect(delSpy).toHaveBeenCalledWith('r2')
//   })
// })

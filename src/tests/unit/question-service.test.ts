// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { describe, it, expect, vi } from 'vitest'

// // Jika service-mu pakai fetch:
// import * as svc from '@/services/question-service'

// // Mock fetch supaya unit test service tidak tergantung MSW
// global.fetch = vi.fn(async (url: RequestInfo, init?: RequestInit) => {
//   if (url.toString().includes('/api/reading-questions') && (!init || init.method === 'GET')) {
//     return new Response(JSON.stringify([{ id: 'r1', type: 'reading', question: 'Q' }]), { status: 200 })
//   }
//   return new Response(JSON.stringify({ ok: true }), { status: 200 })
// }) as any

// describe('question-service (unit)', () => {
//   it('getAllReadingQuestions mengembalikan array', async () => {
//     const data = await svc.getAllReadingQuestions()
//     expect(Array.isArray(data)).toBe(true)
//     expect(data[0]).toHaveProperty('id')
//   })
// })

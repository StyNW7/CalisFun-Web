/* eslint-disable prefer-const */
import { http, HttpResponse, delay } from 'msw'

type Q = { id: string; type: 'reading' | 'writing'; question: string }

let reading: Q[] = [
  { id: 'r1', type: 'reading', question: 'What is React?' },
  { id: 'r2', type: 'reading', question: 'Explain Vite dev server.' },
]
let writing: Q[] = [
  { id: 'w1', type: 'writing', question: 'Write a hook example.' },
]

export const handlers = [
  http.get('/api/reading-questions', async () => {
    await delay(80)
    return HttpResponse.json(reading, { status: 200 })
  }),
  http.get('/api/writing-questions', async () => {
    await delay(80)
    return HttpResponse.json(writing, { status: 200 })
  }),
  http.patch('/api/reading-questions/:id', async ({ params, request }) => {
    const body = (await request.json()) as Partial<Q>
    reading = reading.map(q => (q.id === params.id ? { ...q, ...body } as Q : q))
    return HttpResponse.json(reading.find(q => q.id === params.id), { status: 200 })
  }),
  http.delete('/api/reading-questions/:id', async ({ params }) => {
    reading = reading.filter(q => q.id !== params.id)
    return HttpResponse.json({ ok: true }, { status: 200 })
  }),
  // health check generic
  http.get('/api/health', () => HttpResponse.json({ ok: true })),
]

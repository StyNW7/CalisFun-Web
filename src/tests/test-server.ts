import { setupServer } from 'msw/node'
import { handlers } from '@/tests/test-handlers'

export const server = setupServer(...handlers)

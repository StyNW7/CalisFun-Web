import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { server } from '@/tests/test-server'

// MSW: start untuk integration test yang memukul endpoint asli (fetch/axios)
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// Polyfill kecil yang kadang dibutuhkan komponen shadcn/radix
if (typeof window.matchMedia !== 'function') {
  window.matchMedia = () => ({
    matches: false,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    media: '',
    onchange: null,
  })
}

class ResizeObserverMock {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

global.ResizeObserver = ResizeObserverMock

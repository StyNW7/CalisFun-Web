import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { server } from '../test-server'

// MSW: start untuk integration test
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

// Polyfill untuk jsdom
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
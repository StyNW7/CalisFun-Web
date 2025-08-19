/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom'

// Optional polyfills for jsdom
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
;(global as any).ResizeObserver = ResizeObserver
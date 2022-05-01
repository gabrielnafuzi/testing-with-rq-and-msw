import '@testing-library/jest-dom'
import { setupServer } from 'msw/node'
import { beforeAll, afterEach, afterAll } from 'vitest'

import { handlers } from './msw'

export const server = setupServer(...handlers)

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

import '@testing-library/jest-dom'
import { server } from './mocks/server'

import { afterEach, beforeAll, afterAll } from 'vitest'
import { cleanup } from '@testing-library/react'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  cleanup();
  server.resetHandlers();
})
afterAll(() => server.close());
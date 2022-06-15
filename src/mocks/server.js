import { setupServer } from 'msw/node'
import { Loginhandlers } from './handlers'

// Setup requests interception using the given handlers.
export const server = setupServer(...Loginhandlers)
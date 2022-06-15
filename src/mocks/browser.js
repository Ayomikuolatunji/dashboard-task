import { setupWorker} from 'msw'
import { Loginhandlers } from './handlers'
// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...Loginhandlers)


worker.start()
import { setupWorker} from 'msw'
import { Loginhandlers,signupHandlers } from './handlers'
// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...Loginhandlers,...signupHandlers)


worker.start()
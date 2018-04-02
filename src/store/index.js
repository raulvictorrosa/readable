import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'
// import Raven from 'raven-js'
import Thunk from 'redux-thunk'
import Reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 * @description Logs all actions and states after they are dispatched.
 */
const logger = createLogger()

/**
 * @description Sends crash reports as state is updated and listeners are notified.
 */
// const crashReporter = store => next => action => {
//   try {
//     return next(action)
//   } catch (err) {
//     console.error('Caught an exception!', err)
//     Raven.captureException(err, {
//       extra: {
//         action,
//         state: store.getState()
//       }
//     })
//     throw err
//   }
// }

const store = createStore(
  Reducers,
  composeEnhancers(
    applyMiddleware(
      Thunk,
      logger,
      // crashReporter,
    )
  )
)

export default store

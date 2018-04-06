import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'
import Thunk from 'redux-thunk'
import Reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 * @description Logs all actions and states after they are dispatched.
 */
const logger = createLogger()

const store = createStore(
  Reducers,
  composeEnhancers(
    applyMiddleware(
      Thunk,
      logger
    )
  )
)

export default store

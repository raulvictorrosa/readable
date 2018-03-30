import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js'
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk'
import Reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import Index from './components';
import 'normalize.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 * @description Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

/**
 * @description Sends crash reports as state is updated and listeners are notified.
 */
const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}

const store = createStore(
  Reducers,
  composeEnhancers(
    applyMiddleware(
      Thunk,
      logger,
      crashReporter,
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

import Index from './components';
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const logger = store => next => action => {
//   console.group(action.type)
//   console.info('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   console.groupEnd(action.type)
//   return result
// }


const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // applyMiddleware(logger, thunk)
  )
)

// console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

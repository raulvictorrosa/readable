import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';

import Index from './components';
import registerServiceWorker from './registerServiceWorker';

// const logger = store => next => action => {
//   console.group(action.type)
//   console.info('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   console.groupEnd(action.type)
//   return result
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(logger)
//   )
// )

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

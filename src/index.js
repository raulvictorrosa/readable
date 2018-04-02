import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom';
import Index from './components';
import 'typeface-roboto'
import CssBaseline from 'material-ui/CssBaseline';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <CssBaseline />
        <Index />
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

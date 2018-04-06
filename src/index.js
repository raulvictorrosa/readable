import CssBaseline from 'material-ui/CssBaseline';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';
import Index from './components';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

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

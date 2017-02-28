import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from './store';
import { NotFound } from './pages/404';
import { App } from './pages/app';

export function init() {
  const store = configureStore({ counter: 0 }, thunk);
  const history = syncHistoryWithStore(browserHistory, store);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  , document.getElementById('app'));
}

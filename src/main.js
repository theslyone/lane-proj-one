import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './pages/app';

export function init() {
  const store = configureStore(undefined, thunk);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('app'));
}

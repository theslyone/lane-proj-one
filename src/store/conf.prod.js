import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

export function configureStore(initialState, ...middlewares) {
  return applyMiddleware(...middlewares)(createStore)(reducers, initialState);
}

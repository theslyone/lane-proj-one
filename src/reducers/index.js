import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { image } from './image';

export default combineReducers({
  image,
  routing: routerReducer,
});

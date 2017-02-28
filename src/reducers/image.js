import {Record} from 'immutable'
import { ROTATE, TRANSLATE, SCALE, OPACITY, RESET_ALL } from '../actions/image';

let ImageInitialState = Record({
  rotation: 0,
  translation: 0,
  scale: 1,
  opacity: 1
})

const imageInitialState = new ImageInitialState()


/**
 * ## image reducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function image(state = imageInitialState, action) {
  switch (action.type) {
    case ROTATE:
      return state.set('rotation', /*state.rotation + */action.payload)
    case TRANSLATE:
      return state.set('translation', /*state.translation + */action.payload)
    case SCALE:
      return state.set('scale', /*state.scale + */action.payload)
    case OPACITY:
      return state.set('opacity', action.payload)
    case RESET_ALL:
      return imageInitialState
    default:
      return state;
  }
}

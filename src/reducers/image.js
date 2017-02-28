import {Record, Map, OrderedSet} from 'immutable'
import { SET_SOURCE, ROTATE, TRANSLATE, SCALE, OPACITY, FILTER, RESET, RESET_ALL } from '../actions/image';

let ImageInitialState = Record({
  source: '',
  props: (new Record({
    rotation: 0,
    translation: 0,
    scale: 0.5,
    opacity: 1,
    grayScale: 0,
    blur: 0,
    brightness: 1,
    contrast: 1,
    hueRotation: 0,
    invert: 0,
    saturation: 1,
    sepia: 0,
    appliedActions: Map()
  }))(),
  appliedActions: OrderedSet()
})

const imageInitialState = new ImageInitialState()


/**
 * ## image reducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function image(state = imageInitialState, action) {
  switch (action.type) {
    case SET_SOURCE:
      return state.set('source', action.payload)
    case ROTATE:
      return state.setIn(['props', 'rotation'], action.payload)
      .update('appliedActions', appliedActions => appliedActions.add('rotation'))
    case TRANSLATE:
      return state.setIn(['props', 'translation'], action.payload)
      .update('appliedActions', appliedActions => appliedActions.add('translation'))
    case SCALE:
      return state.setIn(['props', 'scale'], action.payload)
      .update('appliedActions', appliedActions => appliedActions.add('scale'))
    case OPACITY:
      return state.setIn(['props', 'opacity'], action.payload)
      .update('appliedActions', appliedActions => appliedActions.add('opacity'))
    case FILTER:
      return state.setIn(['props', action.payload.prop], action.payload.value)
      .update('appliedActions', appliedActions => appliedActions.add(action.payload.prop))
      case RESET:
      return state.setIn(['props', action.payload], imageInitialState.props.get(action.payload))
      .update('appliedActions', appliedActions => appliedActions.delete(action.payload))
    case RESET_ALL:
      return imageInitialState
    default:
      return state;
  }
}

export const SET_SOURCE = 'SET_SOURCE'
export const ROTATE = 'ROTATE'
export const TRANSLATE = 'TRANSLATE'
export const SCALE = 'SCALE'
export const OPACITY = 'OPACITY'
export const FILTER = 'FILTER'
export const RESET_ALL = 'RESET_ALL'
export const RESET = 'RESET'

const imageActions = {
  setSource: (src) => {
    return {
      type: SET_SOURCE,
      payload: src
    }
  },

  rotate: (angle=45) => {
    return {
      type: ROTATE,
      payload: angle
    }
  },

  translate: (value=-40) => {
    return {
      type: TRANSLATE,
      payload: value
    }
  },

  scale: (value=0.5) => {
    return {
      type: SCALE,
      payload: value
    }
  },

  opacity: (value=0.5) => {
    return {
      type: OPACITY,
      payload: value
    }
  },

  filter: (prop, value) => {
    return {
      type: FILTER,
      payload: {prop, value}
    }
  },

  reset: (prop='') => {
    return {
      type: RESET,
      payload: prop
    }
  },

  reset_all: () => {
    return {
      type: RESET_ALL
    }
  }
}

export default imageActions

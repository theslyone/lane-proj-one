export const ROTATE = 'ROTATE'
export const TRANSLATE = 'TRANSLATE'
export const SCALE = 'SCALE'
export const OPACITY = 'OPACITY'
export const RESET_ALL = 'RESET_ALL'

export const rotate = (angle=45) => {
  return {
    type: ROTATE,
    payload: angle
  }
}

export const translate = (value=-40) => {
  return {
    type: TRANSLATE,
    payload: value
  }
}

export const scale = (value=0.5) => {
  return {
    type: SCALE,
    payload: value
  }
}

export const opacity = (value=0.5) => {
  return {
    type: OPACITY,
    payload: value
  }
}

export const reset_all = () => {
  return {
    type: RESET_ALL
  }
}

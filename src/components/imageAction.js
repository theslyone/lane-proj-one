import React, {PropTypes} from 'react'
import toPascalCase from 'to-pascal-case'

const ImageAction = ({name, min=0, max=1, step=1, value=0, onChange}) => (
  <p>
    <label htmlFor={name}>{toPascalCase(name)}</label>
    <input id={name} name={name} type="range" min={min} max={max} step={step} value={value}
    onChange={(event) => onChange(event.target.value)} />
  </p>
)

ImageAction.PropTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default ImageAction

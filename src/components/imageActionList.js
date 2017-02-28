import React, {Component} from 'react'
import { connect } from 'react-redux';
import ImageAction from './ImageAction'

const ImageActionList = ({image, rotate, translate, scale, opacity, filter, reset_all}) => {
  let grayScale = (value) => (filter('grayScale', value))
  let blur = (value) => (filter('blur', value))
  let brightness = (value) => (filter('brightness', value))
  let contrast = (value) => (filter('contrast', value))
  let hueRotation = (value) => (filter('hueRotation', value))
  let invert = (value) => (filter('invert', value))
  let saturation = (value) => (filter('saturation', value))
  let sepia = (value) => (filter('sepia', value))
  return  (
    <div id="imageEditor">
      <ImageAction name='rotate' min={0} max={360} value={image.props.rotation} onChange={rotate}/>
      <ImageAction name='translateX' min={-100} max={100} value={image.props.translation} onChange={translate}/>
      <ImageAction name='scale' min={0.1} step={0.1} max={1} value={image.props.scale} onChange={scale}/>
      <ImageAction name='opacity' min={0} step={0.2} max={1} value={image.props.opacity} onChange={opacity}/>
      <ImageAction name='grayscale' min={0} step={0.1} max={1} value={image.props.grayScale} onChange={grayScale}/>
      <ImageAction name='blur' min={0} max={10} value={image.props.blur} onChange={blur}/>
      <ImageAction name='brightness' min={0} step={0.1} max={2} value={image.props.brightness} onChange={brightness}/>
      <ImageAction name='contrast' min={0} step={0.5} max={10} value={image.props.contrast} onChange={contrast}/>
      <ImageAction name='hueRotate' min={0} max={360} value={image.props.hueRotation} onChange={hueRotation}/>
      <ImageAction name='invert' min={0} max={100} value={image.props.invert} onChange={invert}/>
      <ImageAction name='saturate' min={0} step={0.5} max={10} value={image.props.saturation} onChange={saturation}/>
      <ImageAction name='sepia' min={0} max={100} value={image.props.sepia} onChange={sepia}/>

      <button id="reset" onClick={reset_all}>Reset</button>
    </div>
  )
}

export default ImageActionList

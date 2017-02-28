import React, {Component} from 'react'
import { connect } from 'react-redux';
import ImageAction from './ImageAction'

const ImageActionList = ({image,
  rotate, translate, scale, opacity, grayScale, blur, brightness, contrast,
    hueRotate, invert, saturate, sepia, reset_all}) => {
    return  (
      <div id="imageEditor">
        <ImageAction name='rotate' min={0} max={360} value={image.props.rotation} onChange={rotate}/>
        <ImageAction name='translate' min={-10} max={10} value={image.props.translation} onChange={translate}/>
        <ImageAction name='scale' min={-1} step={0.5} max={1} value={image.props.scale} onChange={scale}/>
        <ImageAction name='opacity' min={0} step={0.2} max={1} value={image.props.opacity} onChange={opacity}/>
        <ImageAction name='grayscale' min={0} max={100} value={image.props.grayScale} onChange={grayScale}/>
        <ImageAction name='blur' min={0} max={10} value={image.props.blur} onChange={blur}/>
        <ImageAction name='brightness' min={0} max={200} value={image.props.brightness} onChange={brightness}/>
        <ImageAction name='contrast' min={0} max={200} value={image.props.contrast} onChange={contrast}/>
        <ImageAction name='hueRotate' min={0} max={360} value={image.props.hueRotation} onChange={hueRotate}/>
        <ImageAction name='invert' min={0} max={100} value={image.props.invert} onChange={invert}/>
        <ImageAction name='saturate' min={0} max={500} value={image.props.saturation} onChange={saturate}/>
        <ImageAction name='sepia' min={0} max={100} value={image.props.sepia} onChange={sepia}/>

        <button id="reset" onClick={reset_all}>Reset</button>
      </div>
    )
}

export default ImageActionList

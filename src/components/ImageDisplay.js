import React from 'react'

const getImageStyle = (prop) => {
  let transform =
    `rotate(${prop.rotation}deg)
    translateX(${prop.translation}px)
    scale(${prop.scale})`

  let filter =
    `grayscale(${prop.grayScale})
    blur(${prop.blur})
    brightness(${prop.brightness})
    contrast(${prop.contrast})
    hue-rotate(${prop.hueRotation})
    opacity(${prop.opacity})
    invert(${prop.invert})
    saturate(${prop.saturation})
    sepia(${prop.sepia})`

  let style = {
    filter: filter,
    WebkitFilter: filter,
    OFilter: filter,
    msFilter: filter,
    transform: transform,
    MozTransform: transform,
    WebkitTransform: transform,
    OTransform: transform,
    msTransform: transform
  }
  console.log(style);
  return style
}

const ImageDisplay = ({source, imageProps}) => {
  let imageSource = !source
  ? require("file-loader!../../public/images/puppies.jpg")
  : source
  return  (
    <div>
      <img src={imageSource} style={getImageStyle(imageProps)}/>
    </div>
  )
}

export default ImageDisplay

import React from 'react'

const ImageDisplay = ({source}) => {
  let imageSource = !source
  ? require("file-loader!../../public/images/puppies.jpg")
  : source
  return  (
    <div>
      <img src={imageSource}/>
    </div>
  )
}

export default ImageDisplay

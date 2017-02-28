import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux';
import ImageAction from './ImageAction'

export default class ImageSelector extends Component {
  static propTypes = {
    onSelected: PropTypes.func.isRequired
  }

  setSource (event) {
    var input = event.target
    var reader = new FileReader()
    reader.onload = () => {
      var dataURL = reader.result
      this.props.onSelected(dataURL)
    }
    reader.readAsDataURL(input.files[0])
  }
  render () {
    return  (
      <div>
      <input className="file-box" type="file" id="imgFile" placeholder="Select Image"
        onChange={this.setSource.bind(this)}/>
      </div>
    )
  }
}

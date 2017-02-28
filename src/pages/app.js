import React, {Component} from 'react';
import { DevTools } from '../components/devtools';
import ImageActionList from '../components/imageActionList'
import ImageSelector from '../components/imageSelector'
import ImageDisplay from '../components/imageDisplay'
import AppliedActionList from '../components/appliedActionList'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="wrapper">
    			<h1>Image Editor</h1>
          <ImageSelector onSelected={this.props.setSource} />

    			<div className="sliders">
    				<ImageActionList {...this.props} />
    			</div>

          <div id="rightContainer">
    			   <div id="imageContainer" className="center">
    				     <ImageDisplay source={this.props.image.source} />
    			   </div>
             <div id="appliedActionsContainer" className="center">
    				     <AppliedActionList actions={this.props.image.appliedActions}
                  onReset={this.props.reset} />
    			   </div>
          </div>
    		</div>
        {/*<DevTools />*/}
      </div>
    );
  }
}

import { connect } from 'react-redux';
import imageActions from '../actions/image'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return {
    image: state.image,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(imageActions, dispatch);
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

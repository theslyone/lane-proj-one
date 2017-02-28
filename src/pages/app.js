import React, {Component} from 'react';
import { Link } from 'react-router';
import { Clicker } from '../components/clicker';
import { SimpleClicker } from '../components/simpleclicker';
import { DevTools } from '../components/devtools';
import { connect } from 'react-redux';

export class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Clicker />
        <SimpleClicker />
        <DevTools />
      </div>
    );
  }
}

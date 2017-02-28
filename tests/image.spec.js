import React from 'react'
import chai, { expect } from 'chai'
import testReducer from 'redux-test-reducer'

import image, {ROTATE,TRANSLATE,SCALE,OPACITY,RESET,RESET_ALL} from '../src/actions/image'
import imageReducer from '../src/reducers/image'

describe('Image action test', () => {
  it('should return rotate action', () => {
    let action = { type: ROTATE, payload: 45 }
    expect(image.rotate()).to.eql(action)

    action = {type: ROTATE, payload: 90}
    expect(image.rotate(90)).to.eql(action)

  })

  it('should return translate action', () => {
    let action = { type: TRANSLATE, payload: -40 }
    expect(image.translate()).to.eql(action)

    action = {type: TRANSLATE, payload: 120}
    expect(image.translate(120)).to.eql(action)
  })

  it('should return scale action', () => {
    let action = { type: SCALE, payload: 0.5 }
    expect(image.scale()).to.eql(action)

    action = {type: SCALE, payload: -0.5}
    expect(image.scale(-0.5)).to.eql(action)
  })

  it('should return opacity action', () => {
    let action = { type: OPACITY, payload: 0.5 }
    expect(image.opacity()).to.eql(action)

    action = {type: OPACITY, payload: 0.8}
    expect(image.opacity(0.8)).to.eql(action)
  })

  it('should return reset action', () => {
    let action = { type: RESET, payload: 'opacity' }
    expect(image.reset('opacity')).to.eql(action)
  })

  it('should return reset all action', () => {
    let action = { type: RESET_ALL }
    expect(image.reset_all()).to.eql(action)
  })
})

describe('Image reducer test', () => {
  let state = undefined
  beforeEach(() => {
    state = imageReducer(state, {type: RESET_ALL})
    expect(state.props.rotation).to.equal(0)
    expect(state.props.translation).to.equal(0)
    expect(state.props.scale).to.equal(1)
    expect(state.props.opacity).to.equal(1)
  })

  it('should reset all image props', () => {
    state = imageReducer(state, {type: RESET_ALL})
    expect(state.props.rotation).to.equal(0)
    expect(state.props.translation).to.equal(0)
    expect(state.props.scale).to.equal(1)
    expect(state.props.opacity).to.equal(1)
  })

  it('should reset image prop', () => {
    state = imageReducer(state, {type: ROTATE, payload: 45})
    state = imageReducer(state, {type: SCALE, payload: 2})
    expect(state.props.rotation).to.equal(45)
    expect(state.appliedActions.get('rotation')).to.be.defined
    expect(state.props.translation).to.equal(0)
    expect(state.props.scale).to.equal(2)
    expect(state.appliedActions.get('scale')).to.be.defined
    expect(state.props.opacity).to.equal(1)

    state = imageReducer(state, {type: RESET, payload: 'rotation'})
    expect(state.props.rotation).to.equal(0)
    expect(state.props.scale).to.equal(2)
    expect(state.appliedActions.get('rotation')).to.not.be.defined
    expect(state.appliedActions.get('scale')).to.be.defined

  })

  it('should rotate image', () => {
    state = imageReducer(state, {type: ROTATE, payload: 45})
    expect(state.props.rotation).to.equal(45)
    state = imageReducer(state, {type: ROTATE, payload: 1})
    expect(state.props.rotation).to.equal(1)
  })

  it('should translate image', () => {
    state = imageReducer(state, {type: TRANSLATE, payload: 120})
    expect(state.props.translation).to.equal(120)
    state = imageReducer(state, {type: TRANSLATE, payload: 20})
    expect(state.props.translation).to.equal(20)
  })

  it('should scale image', () => {
    state = imageReducer(state, {type: SCALE, payload: 1.5})
    expect(state.props.scale).to.equal(1.5)
    state = imageReducer(state, {type: SCALE, payload: 0.2})
    expect(state.props.scale).to.equal(0.2)
  })

  it('should change image opacity', () => {
    state = imageReducer(state, {type: OPACITY, payload: 0.2})
    expect(state.props.opacity).to.equal(0.2)
    state = imageReducer(state, {type: OPACITY, payload: 0.9})
    expect(state.props.opacity).to.equal(0.9)
  })
})

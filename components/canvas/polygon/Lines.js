import React, { Component } from 'react';
import { Canvas } from '../Canvas.js';
import { getDrawBorderSequence } from './actions';
import { repeatAction } from '../helpers';

const RESIZE_DELAY = 500;
const REDRAW_TM = 100;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 0, height: 0, redraw: REDRAW_TM };

    this.handleResize = this.handleResize.bind(this);
    this.toggleRedraw = this.toggleRedraw.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    let delay = 0;
    if (this.resizeTm) {
      clearTimeout(this.resizeTm);
      delay = RESIZE_DELAY;
    }
    const fn = () => {
      this.setState({
        width: this.getWindowWidth(),
        height: this.getWindowHeight()
      });
    }
    this.resizeTm = setTimeout(fn, delay);
  }

  getWindowWidth() {
    return typeof window != 'undefined'
      ? window.innerWidth
      : 0;
  }

  getWindowHeight() {
    return typeof window != 'undefined'
      ? window.innerHeight
      : 0;
  }

  toggleRedraw() {
    const redraw = this.state.redraw ? null : REDRAW_TM;
    this.setState({redraw});
  }

  render() {
    const actions = [
      ...repeatAction(getDrawBorderSequence, 1)
    ];
    const { width, height, redraw } = this.state;

    return (
      <div className="Canvas-wrapper">
        <Canvas 
          actions={actions}
          handle={['mouseMove']}
          onClick={this.toggleRedraw}
          redraw={redraw}
          width={width}
          height={height}
        />
        <style jsx>{`
          .Canvas-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
          }
          .Canvas-wrapper canvas {
            position: relative;
          }
        `}</style>
      </div>
    );
  }
}

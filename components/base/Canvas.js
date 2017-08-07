import React, { Component } from 'react';

let cache = {};

const getFromCoords = id => {
  const lastCoords = cache[id];
  if (lastCoords) {
    return {
      x: lastCoords.x,
      y: lastCoords.y
    };
  }
  return null;
};

const processAction = (ctx, { type, color, width, height, id, coords: { x, y } }) => {
  const fromCoords = getFromCoords(id);
  switch (type) {
    case 'line':
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      const [xFrom, yFrom] = fromCoords
        ? [fromCoords.x, fromCoords.y]
        : [x, y];
      ctx.moveTo(xFrom, yFrom);
      ctx.lineTo(x, y);
    break;
  }
  cache[id] = {x, y};
}

export class Canvas extends Component {
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d", {alpha: true});
    const { width, height, redraw, actions } = this.props;
    const opts = {
      width,
      height,
      action: {
        type: 'init'
      }
    };
    this.runActions = this.runActions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.initRatio();
    this.drawActions(actions, opts);
    if (redraw) {
      this.initRedraw(redraw);
    }
  }
  componentDidUpdate(oldProps) {
    const { width, height, redraw } = this.props;
    if (oldProps.width !== width || oldProps.height !== height) {
      this.initRatio();
    }
    if (oldProps.redraw !== this.props.redraw) {
      clearInterval(this.redrawInterval);
      if (redraw) {
        this.initRedraw(redraw);
      }
    }
    this.runActions();
  }
  initRedraw(redraw) {
    clearInterval(this.redrawInterval);
    if (redraw) {
      this.redrawInterval = setInterval(this.runActions, redraw);
    }
  }
  runActions() {
    const { actions, width, height } = this.props;
    const opts = {
      width,
      height,
      action: {
        type: 'update',
        targ: 'resize'
      }
    };
    this.drawActions(actions, opts);
  }
  drawActions(actions, opts) {
    this.clear();
    actions.forEach(getSequence => {
      const sequence = getSequence(this.ctx, opts);
      this.ctx.beginPath();
      sequence.forEach(sequenceOpts => {
        // console.log(coords)
        processAction(this.ctx, sequenceOpts);
      });
      this.ctx.stroke();
      this.ctx.closePath();
    });
  }
  initRatio() {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio = this.getBackingRatio();
    const ratio = this.getRatio();

    if (devicePixelRatio !== backingStoreRatio) {
      this.ctx.scale(ratio, ratio);
    }
  }
  clear() {
    cache = {};
    const { width, height } = this.props;
    this.ctx.clearRect(0, 0, width, height);
  }
  getBackingRatio() {
    if (!this.ctx) return 1;
    return this.ctx.webkitBackingStorePixelRatio ||
      this.ctx.mozBackingStorePixelRatio ||
      this.ctx.msBackingStorePixelRatio ||
      this.ctx.oBackingStorePixelRatio ||
      this.ctx.backingStorePixelRatio || 1;
  }
  getRatio() {
    const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

    return devicePixelRatio / this.getBackingRatio();
  }
  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    const { width, height } = this.props;
    const deviceWidth = this.getRatio() * width;
    const deviceHeight = this.getRatio() * height;

    return <canvas
      className="Canvas"
      width={deviceWidth}
      height={deviceHeight}
      style={{
        width, height
      }}
      onClick={this.handleClick}
      ref="canvas"
    />;
  }
}

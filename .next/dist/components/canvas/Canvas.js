'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aqson/Development/yavorsky/ya2/components/canvas/Canvas.js';


var cache = {};

var getFromCoords = function getFromCoords(id) {
  var lastCoords = cache[id];
  if (lastCoords) {
    return {
      x: lastCoords.x,
      y: lastCoords.y
    };
  }
  return null;
};

var processAction = function processAction(ctx, _ref) {
  var type = _ref.type,
      color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      id = _ref.id,
      _ref$coords = _ref.coords,
      x = _ref$coords.x,
      y = _ref$coords.y;

  var fromCoords = getFromCoords(id);
  switch (type) {
    case 'line':
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;

      var _ref2 = fromCoords ? [fromCoords.x, fromCoords.y] : [x, y],
          _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
          xFrom = _ref3[0],
          yFrom = _ref3[1];

      ctx.moveTo(xFrom, yFrom);
      ctx.lineTo(x, y);
      break;
  }
  cache[id] = { x: x, y: y };
};

var Canvas = exports.Canvas = function (_Component) {
  (0, _inherits3.default)(Canvas, _Component);

  function Canvas() {
    (0, _classCallCheck3.default)(this, Canvas);

    return (0, _possibleConstructorReturn3.default)(this, (Canvas.__proto__ || (0, _getPrototypeOf2.default)(Canvas)).apply(this, arguments));
  }

  (0, _createClass3.default)(Canvas, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ctx = this.refs.canvas.getContext("2d", { alpha: true });
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          redraw = _props.redraw,
          actions = _props.actions;

      var opts = {
        width: width,
        height: height,
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
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(oldProps) {
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          redraw = _props2.redraw;

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
  }, {
    key: 'initRedraw',
    value: function initRedraw(redraw) {
      clearInterval(this.redrawInterval);
      if (redraw) {
        this.redrawInterval = setInterval(this.runActions, redraw);
      }
    }
  }, {
    key: 'runActions',
    value: function runActions() {
      var _props3 = this.props,
          actions = _props3.actions,
          width = _props3.width,
          height = _props3.height;

      var opts = {
        width: width,
        height: height,
        action: {
          type: 'update',
          targ: 'resize'
        }
      };
      this.drawActions(actions, opts);
    }
  }, {
    key: 'drawActions',
    value: function drawActions(actions, opts) {
      var _this2 = this;

      this.clear();
      actions.forEach(function (getSequence) {
        var sequence = getSequence(_this2.ctx, opts);
        _this2.ctx.beginPath();
        sequence.forEach(function (opts) {
          // console.log(coords)
          processAction(_this2.ctx, opts);
        });
        _this2.ctx.stroke();
        _this2.ctx.closePath();
      });
    }
  }, {
    key: 'initRatio',
    value: function initRatio() {
      var devicePixelRatio = window.devicePixelRatio || 1;
      var backingStoreRatio = this.getBackingRatio();
      var ratio = this.getRatio();

      if (devicePixelRatio !== backingStoreRatio) {
        this.ctx.scale(ratio, ratio);
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _props4 = this.props,
          width = _props4.width,
          height = _props4.height;

      this.ctx.clearRect(0, 0, width, height);
    }
  }, {
    key: 'getBackingRatio',
    value: function getBackingRatio() {
      if (!this.ctx) return 1;
      return this.ctx.webkitBackingStorePixelRatio || this.ctx.mozBackingStorePixelRatio || this.ctx.msBackingStorePixelRatio || this.ctx.oBackingStorePixelRatio || this.ctx.backingStorePixelRatio || 1;
    }
  }, {
    key: 'getRatio',
    value: function getRatio() {
      var devicePixelRatio = typeof window != 'undefined' ? window.devicePixelRatio : 1;

      return devicePixelRatio / this.getBackingRatio();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          width = _props5.width,
          height = _props5.height;

      var deviceWidth = this.getRatio() * width;
      var deviceHeight = this.getRatio() * height;

      return _react2.default.createElement('canvas', {
        className: 'Canvas',
        width: deviceWidth,
        height: deviceHeight,
        style: {
          width: width, height: height
        },
        onClick: this.handleClick,
        ref: 'canvas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      });
    }
  }]);

  return Canvas;
}(_react.Component);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Canvas = require('../../base/Canvas.js');

var _actions = require('./actions');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aqson/Development/yavorsky/ya2/components/canvas/polygon/Lines.js';


var RESIZE_DELAY = 500;
var REDRAW_TM = 100;

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { width: 0, height: 0, redraw: REDRAW_TM };

    _this.handleResize = _this.handleResize.bind(_this);
    _this.toggleRedraw = _this.toggleRedraw.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _this2 = this;

      var delay = 0;
      if (this.resizeTm) {
        clearTimeout(this.resizeTm);
        delay = RESIZE_DELAY;
      }
      var fn = function fn() {
        _this2.setState({
          width: _this2.getWindowWidth(),
          height: _this2.getWindowHeight()
        });
      };
      this.resizeTm = setTimeout(fn, delay);
    }
  }, {
    key: 'getWindowWidth',
    value: function getWindowWidth() {
      return typeof window != 'undefined' ? window.innerWidth : 0;
    }
  }, {
    key: 'getWindowHeight',
    value: function getWindowHeight() {
      return typeof window != 'undefined' ? window.innerHeight : 0;
    }
  }, {
    key: 'toggleRedraw',
    value: function toggleRedraw() {
      var redraw = this.state.redraw ? null : REDRAW_TM;
      this.setState({ redraw: redraw });
    }
  }, {
    key: 'render',
    value: function render() {
      var actions = [].concat((0, _toConsumableArray3.default)((0, _helpers.repeatAction)(_actions.getDrawBorderSequence, 1)));
      var _state = this.state,
          width = _state.width,
          height = _state.height,
          redraw = _state.redraw;

      return _react2.default.createElement('div', { className: 'Canvas-wrapper', 'data-jsx': 1883512987,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_Canvas.Canvas, {
        actions: actions,
        handle: ['mouseMove'],
        onClick: this.toggleRedraw,
        redraw: redraw,
        width: width,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1883512987,
        css: '.Canvas-wrapper[data-jsx="1883512987"] {position: absolute;left: 0;top: 0;right: 0;bottom: 0;}.Canvas-wrapper[data-jsx="1883512987"] canvas[data-jsx="1883512987"] {position: relative;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FudmFzL3BvbHlnb24vTGluZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVvQixBQUNPLHdDQUNJLG1CQUNYLFFBQ0QsT0FDRSxTQUNDLFVBQ1gsQ0FDdUIsc0VBQ0gsbUJBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FudmFzL3BvbHlnb24vTGluZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fxc29uL0RldmVsb3BtZW50L3lhdm9yc2t5L3lhMiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tICcuLi8uLi9iYXNlL0NhbnZhcy5qcyc7XG5pbXBvcnQgeyBnZXREcmF3Qm9yZGVyU2VxdWVuY2UgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgcmVwZWF0QWN0aW9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IFJFU0laRV9ERUxBWSA9IDUwMDtcbmNvbnN0IFJFRFJBV19UTSA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAsIHJlZHJhdzogUkVEUkFXX1RNIH07XG5cbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVSZWRyYXcgPSB0aGlzLnRvZ2dsZVJlZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICBsZXQgZGVsYXkgPSAwO1xuICAgIGlmICh0aGlzLnJlc2l6ZVRtKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUbSk7XG4gICAgICBkZWxheSA9IFJFU0laRV9ERUxBWTtcbiAgICB9XG4gICAgY29uc3QgZm4gPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2luZG93V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdldFdpbmRvd0hlaWdodCgpXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemVUbSA9IHNldFRpbWVvdXQoZm4sIGRlbGF5KTtcbiAgfVxuXG4gIGdldFdpbmRvd1dpZHRoKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnXG4gICAgICA/IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICA6IDA7XG4gIH1cblxuICBnZXRXaW5kb3dIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICA6IDA7XG4gIH1cblxuICB0b2dnbGVSZWRyYXcoKSB7XG4gICAgY29uc3QgcmVkcmF3ID0gdGhpcy5zdGF0ZS5yZWRyYXcgPyBudWxsIDogUkVEUkFXX1RNO1xuICAgIHRoaXMuc2V0U3RhdGUoe3JlZHJhd30pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXG4gICAgICAuLi5yZXBlYXRBY3Rpb24oZ2V0RHJhd0JvcmRlclNlcXVlbmNlLCAxKVxuICAgIF07XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCByZWRyYXcgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYW52YXMtd3JhcHBlclwiPlxuICAgICAgICA8Q2FudmFzIFxuICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgICAgaGFuZGxlPXtbJ21vdXNlTW92ZSddfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUmVkcmF3fVxuICAgICAgICAgIHJlZHJhdz17cmVkcmF3fVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5DYW52YXMtd3JhcHBlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5DYW52YXMtd3JhcHBlciBjYW52YXMge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/canvas/polygon/Lines.js */'
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
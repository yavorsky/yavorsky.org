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

var _Canvas = require('../Canvas.js');

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
        css: '.Canvas-wrapper[data-jsx="1883512987"] {position: absolute;left: 0;top: 0;right: 0;bottom: 0;}.Canvas-wrapper[data-jsx="1883512987"] canvas[data-jsx="1883512987"] {position: relative;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FudmFzL3BvbHlnb24vTGluZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVvQixBQUNPLHdDQUNJLG1CQUNYLFFBQ0QsT0FDRSxTQUNDLFVBQ1gsQ0FDdUIsc0VBQ0gsbUJBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FudmFzL3BvbHlnb24vTGluZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fxc29uL0RldmVsb3BtZW50L3lhdm9yc2t5L3lhMiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tICcuLi9DYW52YXMuanMnO1xuaW1wb3J0IHsgZ2V0RHJhd0JvcmRlclNlcXVlbmNlIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IHJlcGVhdEFjdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCBSRVNJWkVfREVMQVkgPSA1MDA7XG5jb25zdCBSRURSQVdfVE0gPSAxMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwLCByZWRyYXc6IFJFRFJBV19UTSB9O1xuXG4gICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlUmVkcmF3ID0gdGhpcy50b2dnbGVSZWRyYXcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBoYW5kbGVSZXNpemUoKSB7XG4gICAgbGV0IGRlbGF5ID0gMDtcbiAgICBpZiAodGhpcy5yZXNpemVUbSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVG0pO1xuICAgICAgZGVsYXkgPSBSRVNJWkVfREVMQVk7XG4gICAgfVxuICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB0aGlzLmdldFdpbmRvd1dpZHRoKCksXG4gICAgICAgIGhlaWdodDogdGhpcy5nZXRXaW5kb3dIZWlnaHQoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucmVzaXplVG0gPSBzZXRUaW1lb3V0KGZuLCBkZWxheSk7XG4gIH1cblxuICBnZXRXaW5kb3dXaWR0aCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJ1xuICAgICAgPyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgOiAwO1xuICB9XG5cbiAgZ2V0V2luZG93SGVpZ2h0KCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnXG4gICAgICA/IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgOiAwO1xuICB9XG5cbiAgdG9nZ2xlUmVkcmF3KCkge1xuICAgIGNvbnN0IHJlZHJhdyA9IHRoaXMuc3RhdGUucmVkcmF3ID8gbnVsbCA6IFJFRFJBV19UTTtcbiAgICB0aGlzLnNldFN0YXRlKHtyZWRyYXd9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgLi4ucmVwZWF0QWN0aW9uKGdldERyYXdCb3JkZXJTZXF1ZW5jZSwgMSlcbiAgICBdO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgcmVkcmF3IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FudmFzLXdyYXBwZXJcIj5cbiAgICAgICAgPENhbnZhcyBcbiAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICAgIGhhbmRsZT17Wydtb3VzZU1vdmUnXX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJlZHJhd31cbiAgICAgICAgICByZWRyYXc9e3JlZHJhd31cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuQ2FudmFzLXdyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2FudmFzLXdyYXBwZXIgY2FudmFzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/canvas/polygon/Lines.js */'
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _ListPost = require('./ListPost');

var _ListPost2 = _interopRequireDefault(_ListPost);

var _posts = require('../../posts');

var _posts2 = _interopRequireDefault(_posts);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aqson/Development/yavorsky/ya2/components/blog/ListPost.js';


var formatDate = function formatDate(str) {
  var date = new Date(str);
  return (0, _format2.default)(date, 'DD MMM YYYY');
};

exports.default = function (props) {
  var _props$data = props.data,
      date = _props$data.date,
      title = _props$data.title,
      id = _props$data.id,
      keywords = _props$data.keywords;

  return _react2.default.createElement('li', { className: 'Post', 'data-jsx': 2937934045,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_link2.default, { title: keywords.join(' '), href: { pathname: 'post', query: { name: id } }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, title), _react2.default.createElement('i', {
    'data-jsx': 2937934045,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, formatDate(date)), _react2.default.createElement(_style2.default, {
    styleId: 2937934045,
    css: 'a[data-jsx="2937934045"]{color:#333}i[data-jsx="2937934045"]{color:#ccc}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmxvZy9MaXN0UG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlZ0IsQUFHb0IsQUFFQSxZQUZPLEFBRUEiLCJmaWxlIjoiY29tcG9uZW50cy9ibG9nL0xpc3RQb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcXNvbi9EZXZlbG9wbWVudC95YXZvcnNreS95YTIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGlzdFBvc3QgZnJvbSAnLi9MaXN0UG9zdCc7XG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vLi4vcG9zdHMnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuXG5jb25zdCBmb3JtYXREYXRlID0gKHN0cikgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RyKTtcbiAgcmV0dXJuIGZvcm1hdChkYXRlLCAnREQgTU1NIFlZWVknKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0ZSwgdGl0bGUsIGlkLCBrZXl3b3JkcyB9ID0gcHJvcHMuZGF0YTtcbiAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJQb3N0XCI+XG4gICAgPExpbmsgdGl0bGU9e2tleXdvcmRzLmpvaW4oJyAnKX0gaHJlZj17e3BhdGhuYW1lOiAncG9zdCcsIHF1ZXJ5OiB7IG5hbWU6IGlkIH0gfX0+e3RpdGxlfTwvTGluaz5cbiAgICA8aT57Zm9ybWF0RGF0ZShkYXRlKX08L2k+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG59Il19 */\n/*@ sourceURL=components/blog/ListPost.js */'
  }));
};
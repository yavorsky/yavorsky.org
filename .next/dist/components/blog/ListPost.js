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

exports.default = function (_ref) {
  var date = _ref.date,
      title = _ref.title,
      id = _ref.id,
      keywords = _ref.keywords;
  return _react2.default.createElement('li', { className: 'Post', 'data-jsx': 2937934045,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { title: keywords.join(' '), href: 'posts/' + id, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, title), _react2.default.createElement('i', {
    'data-jsx': 2937934045,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, formatDate(date)), _react2.default.createElement(_style2.default, {
    styleId: 2937934045,
    css: 'a[data-jsx="2937934045"] {color: #333;}i[data-jsx="2937934045"] {color: #ccc;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmxvZy9MaXN0UG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFDUCwwQkFDVyxZQUNiLENBRUUsMEJBQ1csWUFDYiIsImZpbGUiOiJjb21wb25lbnRzL2Jsb2cvTGlzdFBvc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fxc29uL0RldmVsb3BtZW50L3lhdm9yc2t5L3lhMiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMaXN0UG9zdCBmcm9tICcuL0xpc3RQb3N0JztcbmltcG9ydCBwb3N0cyBmcm9tICcuLi8uLi9wb3N0cyc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5cbmNvbnN0IGZvcm1hdERhdGUgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdHIpO1xuICByZXR1cm4gZm9ybWF0KGRhdGUsICdERCBNTU0gWVlZWScpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBkYXRlLCB0aXRsZSwgaWQsIGtleXdvcmRzIH0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cIlBvc3RcIj5cbiAgICA8TGluayB0aXRsZT17a2V5d29yZHMuam9pbignICcpfSBocmVmPXtgcG9zdHMvJHtpZH1gfT57dGl0bGV9PC9MaW5rPlxuICAgIDxpPntmb3JtYXREYXRlKGRhdGUpfTwvaT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7Il19 */\n/*@ sourceURL=components/blog/ListPost.js */'
  }));
};
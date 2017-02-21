'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aqson/Development/yavorsky/ya2/components/blog/Post.js';


var formatDate = function formatDate(str) {
  var date = new Date(str);
  return (0, _format2.default)(date, 'DD MMM YYYY');
};

exports.default = function (_ref) {
  var id = _ref.id;

  var input = require('../../posts/' + id);
  console.log(input);

  return _react2.default.createElement('div', { className: 'Post', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  });
};
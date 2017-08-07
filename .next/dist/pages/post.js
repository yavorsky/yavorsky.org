'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('../layouts/Page');

var _Page2 = _interopRequireDefault(_Page);

var _Posts = require('../components/blog/Posts');

var _Posts2 = _interopRequireDefault(_Posts);

var _posts = require('../posts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aqson/Development/yavorsky/ya2/pages/post.js?entry';
// import dynamic from 'next/dynamic'

exports.default = function (props) {
  var url = props.url;

  var Post = _posts.elements[url.query.name];
  // const data = dynamic(`../posts/jsx/${query}.js`);
  return _react2.default.createElement(_Page2.default, { className: 'Post', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 3652024705,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(Post, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 3652024705,
    css: '.Posts[data-jsx="3652024705"]{padding:20px;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBR3NCLGNBQXVCLHlEQUEyQixtQkFBc0IsOEVBQStCLGlGQUFnQyx1R0FBNEIsaUdBQU8iLCJmaWxlIjoicGFnZXMvcG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXFzb24vRGV2ZWxvcG1lbnQveWF2b3Jza3kveWEyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvUGFnZSc7XG5pbXBvcnQgUG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9ibG9nL1Bvc3RzJztcbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnLi4vcG9zdHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHVybCB9ID0gcHJvcHM7XG4gXG4gIGNvbnN0IFBvc3QgPSBlbGVtZW50c1t1cmwucXVlcnkubmFtZV07XG4gIC8vIGNvbnN0IGRhdGEgPSBkeW5hbWljKGAuLi9wb3N0cy9qc3gvJHtxdWVyeX0uanNgKTtcbiAgcmV0dXJuIDxQYWdlIGNsYXNzTmFtZT0nUG9zdCc+XG4gICAgPGRpdj48UG9zdCAvPjwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5Qb3N0cyB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9QYWdlPjtcbn0iXX0= */\n/*@ sourceURL=pages/post.js?entry */'
  }));
};
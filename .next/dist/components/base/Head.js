'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aqson/Development/yavorsky/ya2/components/base/Head.js';


var defaultTitle = 'Artem Yavorsky - Frontend, Backend Development';

exports.default = function (_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? defaultTitle : _ref$title;
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Oswald|Cabin+Condensed|Didact+Gothic|Fira+Sans+Condensed|Kanit|Mukta+Vaani|Nunito+Sans|Open+Sans', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('link', { href: '/static/icons.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, title), _react2.default.createElement('meta', { name: 'description', content: 'Freelance Web Consultant and Developer. HTML, CSS and JavaScript. Available for hire.', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'keywords', content: 'HTML, CSS, JavaScript, HTML5, CSS3, JS, React, Node.js, Frontend Development, Web Development, Web Design, Development, Frontend', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', { name: 'author', content: 'Artem Yavorsky', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('meta', { property: 'og:title', content: 'Artem Yavorsky - Freelance Web Consultant and Developer', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('meta', { property: 'og:description', content: 'Artem Yavorsky - Freelance Web Consultant and Developer. Available for hire.', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('meta', { property: 'og:image', content: 'https://avatars2.githubusercontent.com/u/1521229?v=3&s=460', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('meta', { name: 'twitter:site', content: '@yavorsky_', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('meta', { name: 'twitter:creator', content: '@yavorsky_', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('meta', { name: 'twitter:url', content: 'http://yavorsky.org', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('meta', { name: 'twitter:title', content: 'Artem Yavorsky - Freelance Web Consultant and Developer', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('meta', { name: 'twitter:description', content: 'Artem Yavorsky - Freelance Web Consultant and Developer. Available for hire.', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement('meta', { name: 'twitter:image', content: 'https://avatars2.githubusercontent.com/u/1521229?v=3&s=460', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement('style', { global: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, '\n      html, body {\n        margin: 0;\n      }\n\n      body a {\n        text-decoration: none;\n        color: #CCCCCC;\n        font-family: BlinkMacSystemFont, monospace;\n      }\n\n      body a:hover {\n        color: #333;\n      }\n\n      body ul {\n        list-style: none;\n        margin: 0;\n      }\n\n      .Menu > a {\n        text-transform: uppercase;\n        font-weight: 400;\n      }\n    '));
};
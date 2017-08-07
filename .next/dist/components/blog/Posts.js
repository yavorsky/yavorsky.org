'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListPost = require('./ListPost');

var _ListPost2 = _interopRequireDefault(_ListPost);

var _posts = require('../../posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/aqson/Development/yavorsky/ya2/components/blog/Posts.js';

exports.default = function () {
  return _react2.default.createElement('div', { className: 'Posts-list', 'data-jsx': 851136734,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _posts2.default.map(function (post) {
    return _react2.default.createElement(_ListPost2.default, { key: post.id, data: post, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    });
  }), _react2.default.createElement(_style2.default, {
    styleId: 851136734,
    css: '.Posts-list[data-jsx="851136734"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;right:0;left:0;top:0;bottom:0;background:#FFF;background-size:cover}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmxvZy9Qb3N0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRZ0IsQUFHc0IsOEVBQXdCLGdCQUFpQixTQUFnQixRQUFlLE9BQWtCLFVBQXlCLGlCQUErQix1QkFBTyIsImZpbGUiOiJjb21wb25lbnRzL2Jsb2cvUG9zdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fxc29uL0RldmVsb3BtZW50L3lhdm9yc2t5L3lhMiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXN0UG9zdCBmcm9tICcuL0xpc3RQb3N0JztcbmltcG9ydCBwb3N0cyBmcm9tICcuLi8uLi9wb3N0cyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJQb3N0cy1saXN0XCI+XG4gICAge3Bvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgIHJldHVybiA8TGlzdFBvc3Qga2V5PXtwb3N0LmlkfSBkYXRhPXtwb3N0fS8+O1xuICAgIH0pfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5Qb3N0cy1saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=components/blog/Posts.js */'
  }));
};
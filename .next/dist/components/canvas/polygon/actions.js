'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDrawBorderSequence = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDrawBorderSequence = exports.getDrawBorderSequence = function getDrawBorderSequence(ctx, _ref) {
  var width = _ref.width,
      height = _ref.height;

  if (!width) return [];
  var y = height / 2;
  var initialAction = {
    coords: {
      width: 1,
      x: 0,
      y: y
    },
    id: Math.random(),
    color: '#ECECEC',
    type: 'line'
  };
  var sequence = [initialAction];
  var heightRange = [y - 300, y + 300];
  var widthRange = [40, 80];
  var x = 0;
  while (x < width) {
    y = _utils.randomBetween.apply(undefined, heightRange);
    var nextX = x + _utils.randomBetween.apply(undefined, widthRange);
    x = nextX > width ? width : nextX;
    // x += 20
    var coords = (0, _extends3.default)({}, initialAction.coords, { x: x, y: y
    });
    sequence.push((0, _extends3.default)({}, initialAction, { coords: coords
    }));
  }
  return sequence;
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var repeatAction = exports.repeatAction = function repeatAction(action, times) {
  var actions = [];
  for (var i = 0; i <= times; i++) {
    actions.push(action);
  }
  return actions;
};
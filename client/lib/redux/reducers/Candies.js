"use strict";

var _interopRequireWildcard = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Candies;

var _objectSpread2 = _interopRequireDefault(require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/objectSpread2"));

var ActionTypes = _interopRequireWildcard(require("../ActionTypes"));

function Candies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isLoading: true,
    errmes: null,
    candies: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionTypes.ADD_CANDIES:
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
        candies: action.payload,
        isLoading: false,
        errmes: null
      });

    default:
      return state;
  }
}
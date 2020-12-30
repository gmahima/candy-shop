"use strict";

var _interopRequireWildcard = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCandies = exports.addCandies = void 0;

var ActionTypes = _interopRequireWildcard(require("./ActionTypes"));

var addCandies = function addCandies(candies) {
  return {
    type: ActionTypes.ADD_CANDIES,
    payload: candies
  };
};

exports.addCandies = addCandies;

var loadCandies = function loadCandies() {
  return function (dispatch) {
    setTimeout(function () {
      return dispatch(addCandies(['dark chocolate bar', 'white chocolate bar', 'milk chocolate bar', 'frozen fruit', 'caramel apple']));
    }, 3000);
  };
};

exports.loadCandies = loadCandies;
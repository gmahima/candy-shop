"use strict";

var _interopRequireDefault = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _Candies = _interopRequireDefault(require("./reducers/Candies"));

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  candies: _Candies.default
}), (0, _redux.applyMiddleware)(_reduxThunk.default));
var _default = store;
exports.default = _default;

"use strict";

var _interopRequireDefault = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ActionCreators = require("../redux/ActionCreators");

// import {Link, withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'
var mapStateToProps = function mapStateToProps(state) {
  return {
    candies: state.candies
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadCandies: function loadCandies() {
      dispatch((0, _ActionCreators.loadCandies)());
    }
  };
};

function Home(_ref) {
  var candies = _ref.candies,
      loadCandies = _ref.loadCandies;
  // useEffect(() => {
  //     loadCandies()
  // }, [])
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Buy Some Candy please work"));
} // export default connect(mapStateToProps, mapDispatchToProps)(Home)
// https://medium.com/@zhirzh/making-cra-apps-work-with-ssr-part-1-1e23d6b1603d

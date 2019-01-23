"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContainer = undefined;

var _react = require("react");

var React = _interopRequireWildcard(_react);

require("./app-container.css");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _appContainerModule = require("./app-container.module.css");

var styles = _interopRequireWildcard(_appContainerModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var AppContainer = exports.AppContainer = function AppContainer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: (0, _classnames2.default)(styles.appContainer, className)
  }, children);
};
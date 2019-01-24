"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListWrapper = undefined;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _listWrapperModule = require("./list-wrapper.module.css");

var styles = _interopRequireWildcard(_listWrapperModule);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ListWrapper = exports.ListWrapper = function ListWrapper(_ref) {
  var children = _ref.children,
      fadeFrom = _ref.fadeFrom,
      fadeTo = _ref.fadeTo;
  return React.createElement("div", {
    className: styles.listContainer
  }, React.createElement("div", {
    style: {
      backgroundImage: "linear-gradient(".concat(fadeFrom, ", ").concat(fadeTo, ")")
    },
    className: styles.topOverlay
  }), React.createElement("div", {
    className: styles.list
  }, children), React.createElement("div", {
    style: {
      backgroundImage: "linear-gradient(".concat(fadeTo, ", ").concat(fadeFrom, ")")
    },
    className: styles.bottomOverlay
  }));
};
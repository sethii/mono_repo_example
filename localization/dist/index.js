"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _translatedMessage = require("./translated-message/translated-message");

Object.keys(_translatedMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _translatedMessage[key];
    }
  });
});

var _localizationProvider = require("./localization-provider/localization-provider");

Object.keys(_localizationProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _localizationProvider[key];
    }
  });
});
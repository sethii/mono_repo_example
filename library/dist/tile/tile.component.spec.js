"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _tile = require("./tile.component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('tile', function () {
  it('renders properly', function () {
    var onClick = jest.fn();
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_tile.Tile, {
      name: 'test-name',
      url: 'test-url.com',
      className: 'test-class',
      onClick: onClick
    })).find('div');
    expect(component.props().className).toBe('test-class');
    expect(component.text()).toBe('test-name');
  });
  it('calls on onclick with passed url', function () {
    var onClick = jest.fn();
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_tile.Tile, {
      name: 'test-name',
      url: 'test-url.com',
      className: 'test-class',
      onClick: onClick
    }));
    component.simulate('click');
    expect(onClick).toBeCalledWith('test-url.com');
  });
});
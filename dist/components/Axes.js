"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Axes;

var _react = _interopRequireDefault(require("react"));

var _three = require("three");

var _drei = require("@react-three/drei");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Functional component for 3D axes
function Axes(props) {
  let min_x = props.limits[0][0];
  let max_x = props.limits[0][1];
  let min_y = props.limits[1][0];
  let max_y = props.limits[1][1];
  let min_z = props.limits[2][0];
  let max_z = props.limits[2][1];
  let labelColor = props.labelColor;
  const inf = Math.pow(10, 10);
  const origin = new _three.Vector3(0, 0, 0);
  const x_axis = new THREE.Vector3(1, 0, 0);
  const y_axis = new THREE.Vector3(0, 1, 0);
  const z_axis = new THREE.Vector3(0, 0, 1);
  const x_axis_n = new THREE.Vector3(-1, 0, 0);
  const y_axis_n = new THREE.Vector3(0, -1, 0);
  const z_axis_n = new THREE.Vector3(0, 0, -1);
  var position = new THREE.Vector3(0, 0, 10);
  var scale = new THREE.Vector3(10, 50, 1);
  return /*#__PURE__*/_react.default.createElement("mesh", null, Array.from({
    length: max_x - min_x + 1
  }, (v, k) => k + min_x).map(e => /*#__PURE__*/_react.default.createElement(_drei.Html, {
    scaleFactor: 7,
    position: [e, 0, 0]
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: labelColor
    }
  }, e))), Array.from({
    length: max_y - min_y + 1
  }, (v, k) => k + min_y).map(e => /*#__PURE__*/_react.default.createElement(_drei.Html, {
    scaleFactor: 7,
    position: [0, e, 0]
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: labelColor
    }
  }, e))), Array.from({
    length: max_z - min_z + 1
  }, (v, k) => k + min_z).map(e => /*#__PURE__*/_react.default.createElement(_drei.Html, {
    scaleFactor: 7,
    position: [0, 0, e]
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: labelColor
    }
  }, e))), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [x_axis, origin, inf, '#f00']
  }), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [y_axis, origin, inf, '#0f0']
  }), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [z_axis, origin, inf, '#00f']
  }), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [x_axis_n, origin, inf, '#f00']
  }), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [y_axis_n, origin, inf, '#0f0']
  }), /*#__PURE__*/_react.default.createElement("arrowHelper", {
    args: [z_axis_n, origin, inf, '#00f']
  }));
}
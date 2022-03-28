"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 500px;\n  height: 500px;\n  border-radius: 30px;\n  background-color: rgb(200, 200, 200);\n  padding: 30px;\n  font-family: sans-serif;\n"])));

var CookieConsent = function CookieConsent(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Container, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      children: "We are using cookies on this site to improve your user experience"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: "blablabla"
    })]
  });
};

var _default = CookieConsent;
exports.default = _default;
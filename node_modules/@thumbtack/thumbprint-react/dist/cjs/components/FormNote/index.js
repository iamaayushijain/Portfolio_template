'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var styles = _interopDefault(require('./index.module.scss'));

function FormNote(_ref) {
  var _ref$hasError = _ref.hasError,
      hasError = _ref$hasError === void 0 ? false : _ref$hasError,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children;
  return React__default.createElement("div", {
    className: classNames(styles.root, _rollupPluginBabelHelpers.defineProperty({}, styles.rootError, hasError))
  }, children);
}

exports.default = FormNote;
//# sourceMappingURL=index.js.map

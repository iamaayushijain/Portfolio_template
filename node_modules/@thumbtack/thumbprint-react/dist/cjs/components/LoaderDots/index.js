'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var styles = _interopDefault(require('./index.module.scss'));

function LoaderDots(_ref) {
  var _classNames;

  var _ref$assistiveText = _ref.assistiveText,
      assistiveText = _ref$assistiveText === void 0 ? 'Loading' : _ref$assistiveText,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'brand' : _ref$theme;
  var dotClasses = classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.dot, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.dotThemeBrand, theme === 'brand'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.dotThemeInverse, theme === 'inverse'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.dotThemeMuted, theme === 'muted'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.dotSizeSmall, size === 'small'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.dotSizeMedium, size === 'medium'), _classNames));
  return React__default.createElement("ul", {
    className: styles.root,
    role: "status"
  }, React__default.createElement("li", {
    className: dotClasses
  }), React__default.createElement("li", {
    className: dotClasses
  }), React__default.createElement("li", {
    className: dotClasses
  }), React__default.createElement("li", {
    className: styles.hiddenText
  }, assistiveText));
}

exports.default = LoaderDots;
//# sourceMappingURL=index.js.map

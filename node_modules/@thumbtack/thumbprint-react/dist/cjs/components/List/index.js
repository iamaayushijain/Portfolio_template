'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var styles = _interopDefault(require('./index.module.scss'));

function List(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'bullet' : _ref$theme;
  var props = {
    className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.bullet, theme === 'bullet'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.decimal, theme === 'decimal'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.alpha, theme === 'alpha'), _classNames))
  };
  var elementName = theme === 'bullet' ? 'ul' : 'ol';
  return React__default.createElement(elementName, props, children);
}
function ListItem(_ref2) {
  var children = _ref2.children;
  return React__default.createElement("li", {
    className: styles.item
  }, children);
}

exports.List = List;
exports.ListItem = ListItem;
//# sourceMappingURL=index.js.map

import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

function List(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'bullet' : _ref$theme;
  var props = {
    className: classNames((_classNames = {}, _defineProperty(_classNames, styles.root, true), _defineProperty(_classNames, styles.bullet, theme === 'bullet'), _defineProperty(_classNames, styles.decimal, theme === 'decimal'), _defineProperty(_classNames, styles.alpha, theme === 'alpha'), _classNames))
  };
  var elementName = theme === 'bullet' ? 'ul' : 'ol';
  return React.createElement(elementName, props, children);
}
function ListItem(_ref2) {
  var children = _ref2.children;
  return React.createElement("li", {
    className: styles.item
  }, children);
}

export { List, ListItem };
//# sourceMappingURL=index.js.map

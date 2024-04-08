import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

function LoaderDots(_ref) {
  var _classNames;

  var _ref$assistiveText = _ref.assistiveText,
      assistiveText = _ref$assistiveText === void 0 ? 'Loading' : _ref$assistiveText,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'brand' : _ref$theme;
  var dotClasses = classNames((_classNames = {}, _defineProperty(_classNames, styles.dot, true), _defineProperty(_classNames, styles.dotThemeBrand, theme === 'brand'), _defineProperty(_classNames, styles.dotThemeInverse, theme === 'inverse'), _defineProperty(_classNames, styles.dotThemeMuted, theme === 'muted'), _defineProperty(_classNames, styles.dotSizeSmall, size === 'small'), _defineProperty(_classNames, styles.dotSizeMedium, size === 'medium'), _classNames));
  return React.createElement("ul", {
    className: styles.root,
    role: "status"
  }, React.createElement("li", {
    className: dotClasses
  }), React.createElement("li", {
    className: dotClasses
  }), React.createElement("li", {
    className: dotClasses
  }), React.createElement("li", {
    className: styles.hiddenText
  }, assistiveText));
}

export default LoaderDots;
//# sourceMappingURL=index.js.map

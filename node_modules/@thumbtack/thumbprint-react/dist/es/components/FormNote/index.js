import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

function FormNote(_ref) {
  var _ref$hasError = _ref.hasError,
      hasError = _ref$hasError === void 0 ? false : _ref$hasError,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children;
  return React.createElement("div", {
    className: classNames(styles.root, _defineProperty({}, styles.rootError, hasError))
  }, children);
}

export default FormNote;
//# sourceMappingURL=index.js.map

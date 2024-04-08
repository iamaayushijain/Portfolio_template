import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import noScroll from 'no-scroll';

var NoScroll =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NoScroll, _React$Component);

  function NoScroll() {
    _classCallCheck(this, NoScroll);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoScroll).apply(this, arguments));
  }

  _createClass(NoScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      noScroll.on();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      noScroll.off();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return NoScroll;
}(React.Component);

export default NoScroll;
//# sourceMappingURL=no-scroll.js.map

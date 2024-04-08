'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var noScroll = _interopDefault(require('no-scroll'));

var NoScroll =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers.inherits(NoScroll, _React$Component);

  function NoScroll() {
    _rollupPluginBabelHelpers.classCallCheck(this, NoScroll);

    return _rollupPluginBabelHelpers.possibleConstructorReturn(this, _rollupPluginBabelHelpers.getPrototypeOf(NoScroll).apply(this, arguments));
  }

  _rollupPluginBabelHelpers.createClass(NoScroll, [{
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
}(React__default.Component);

exports.default = NoScroll;
//# sourceMappingURL=no-scroll.js.map

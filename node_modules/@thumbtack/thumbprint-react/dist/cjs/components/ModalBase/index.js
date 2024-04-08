'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var displace = _interopDefault(require('react-displace'));
var index = require('./subcomponents/modal-structure/index.js');

var DisplacedModalStructure = displace(index.default);
/**
 * We need to make sure we don't mount the DisplacedModalStructure (which uses portals) before
 * componentDidMount because it'll cause warnings (and actual bugs) with server-side rendering.
 * Pattern taken from react docs and solutions to issues:
 * https://reactjs.org/docs/react-dom.html#hydrate
 * https://github.com/facebook/react/issues/11169
 */

var ModalBase =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers.inherits(ModalBase, _React$Component);

  function ModalBase(props) {
    var _this;

    _rollupPluginBabelHelpers.classCallCheck(this, ModalBase);

    _this = _rollupPluginBabelHelpers.possibleConstructorReturn(this, _rollupPluginBabelHelpers.getPrototypeOf(ModalBase).call(this, props));
    _this.state = {
      isClient: false
    };
    return _this;
  }

  _rollupPluginBabelHelpers.createClass(ModalBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isClient: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isClient = this.state.isClient;
      if (!isClient) return null;
      return React__default.createElement(DisplacedModalStructure, this.props);
    }
  }]);

  return ModalBase;
}(React__default.Component);

exports.default = ModalBase;
//# sourceMappingURL=index.js.map

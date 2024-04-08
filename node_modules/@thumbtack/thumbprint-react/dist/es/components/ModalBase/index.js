import { inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import displace from 'react-displace';
import ModalStructure from './subcomponents/modal-structure/index.js';

var DisplacedModalStructure = displace(ModalStructure);
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
  _inherits(ModalBase, _React$Component);

  function ModalBase(props) {
    var _this;

    _classCallCheck(this, ModalBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalBase).call(this, props));
    _this.state = {
      isClient: false
    };
    return _this;
  }

  _createClass(ModalBase, [{
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
      return React.createElement(DisplacedModalStructure, this.props);
    }
  }]);

  return ModalBase;
}(React.Component);

export default ModalBase;
//# sourceMappingURL=index.js.map

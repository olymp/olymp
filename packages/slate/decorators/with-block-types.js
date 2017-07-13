var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from 'react';
import PropTypes from 'prop-types';
export default function (WrappedComponent) { return _a = (function (_super) {
        __extends(WithBlockTypes, _super);
        function WithBlockTypes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WithBlockTypes.prototype.render = function () {
            return blockTypes = { this: .context.blockTypes };
            {
                this.props;
            }
            />;
            ;
        };
        return WithBlockTypes;
    }(Component)),
    _a.contextTypes = {
        blockTypes: PropTypes.object,
    },
    _a; var _a; };
//# sourceMappingURL=with-block-types.js.map
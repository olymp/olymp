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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
var getStyle = function (align) {
    if (align === 'left') {
        return {
            float: 'left',
            marginRight: '10px',
        };
    }
    else if (align === 'right') {
        return {
            float: 'right',
            marginLeft: '10px',
        };
    }
    return {
        float: 'initial',
        display: 'block',
        margin: '0px auto',
    };
};
export default function (options) {
    if (options === void 0) { options = {}; }
    return function (Block) {
        var _a = options.actions, actions = _a === void 0 ? true : _a, enable = options.enable;
        return _b = (function (_super) {
                __extends(AlignmentDecorator, _super);
                function AlignmentDecorator() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.setAlignment = function (align) {
                        var setData = _this.props.setData;
                        if (align === 'left') {
                            setData({ align: align });
                        }
                        else if (align === 'right') {
                            setData({ align: align });
                        }
                        else {
                            setData({ align: null });
                        }
                    };
                    return _this;
                }
                AlignmentDecorator.prototype.render = function () {
                    var _this = this;
                    if (enable === false) {
                        return React.createElement(Block, __assign({}, this.props));
                    }
                    var getData = this.props.getData;
                    var alignment = getData('align');
                    var style = __assign({}, this.props.style, getStyle(alignment));
                    var alignActions = actions === false
                        ? []
                        : [
                            {
                                type: 'align.left',
                                icon: 'align-left',
                                label: 'Linksbündig',
                                toggle: function () { return _this.setAlignment('left'); },
                                active: alignment === 'left',
                            },
                            {
                                type: 'align.center',
                                icon: 'align-center',
                                label: 'Zentriert',
                                toggle: function () { return _this.setAlignment(); },
                                active: !alignment,
                            },
                            {
                                type: 'align.right',
                                icon: 'align-right',
                                label: 'Rechtsbündig',
                                toggle: function () { return _this.setAlignment('right'); },
                                active: alignment === 'right',
                            },
                        ];
                    return (React.createElement(Block, __assign({}, this.props, { actions: alignActions, style: style, alignment: alignment, setAlignment: this.setAlignment })));
                };
                return AlignmentDecorator;
            }(Component)),
            _b.slate = Block.slate,
            _b.propTypes = {
                getData: PropTypes.func,
                setData: PropTypes.func,
                editor: PropTypes.object,
                style: PropTypes.object,
            },
            _b;
        var _b;
    };
};
//# sourceMappingURL=align.js.map
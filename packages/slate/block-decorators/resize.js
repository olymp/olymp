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
import { throttleInput } from 'olymp-utils';
import { findDOMNode } from 'react-dom';
import { DraggableCore } from 'react-draggable';
import cn from 'classnames';
var Cover = function (_a) {
    var children = _a.children, style = _a.style;
    return (React.createElement("div", { style: {
            backgroundColor: 'black',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
        } }, children));
};
export default function (options) {
    if (options === void 0) { options = {}; }
    return function (Block) {
        var coverOnResize = options.coverOnResize, enable = options.enable, resizeX = options.resizeX, resizeY = options.resizeY, initialWidth = options.width, initialHeight = options.height;
        return _a = (function (_super) {
                __extends(ResizeableDecorator, _super);
                function ResizeableDecorator(props) {
                    var _this = _super.call(this, props) || this;
                    _this.throttle = throttleInput();
                    _this.onResizeStart = function () {
                        _this.setState({ resize: true });
                    };
                    _this.onResizeStop = function (event, _a) {
                        var deltaX = _a.deltaX, deltaY = _a.deltaY;
                        var setData = _this.props.setData;
                        var newState = {};
                        if (_this.state.width) {
                            newState.width = _this.state.width;
                        }
                        if (_this.state.height) {
                            newState.height = _this.state.height;
                        }
                        setData(newState);
                        _this.setState({ resize: false });
                    };
                    _this.onResize = function (event, _a) {
                        var deltaX = _a.deltaX, deltaY = _a.deltaY, x = _a.x, y = _a.y;
                        var _b = _this.props, getData = _b.getData, alignment = _b.alignment;
                        var elementDimensions = _this.element.getBoundingClientRect();
                        var newState = {};
                        if (resizeX !== false) {
                            var width = x
                                ? alignment === 'right' ? elementDimensions.width - x : x
                                : getData('width', initialWidth);
                            var relWidth = Math.round(12 / elementDimensions.width * width);
                            if (relWidth >= 0) {
                                newState.width = relWidth;
                            }
                        }
                        if (resizeY !== false) {
                            var height = y || getData('width', initialWidth);
                            if (height >= 0) {
                                newState.height = height;
                            }
                        }
                        if (newState.height !== _this.state.height ||
                            newState.width !== _this.state.width) {
                            _this.setState(newState);
                        }
                    };
                    var getData = props.getData;
                    _this.state = {
                        resize: false,
                        width: getData('width', initialWidth),
                        height: getData('height', initialHeight),
                    };
                    return _this;
                }
                ResizeableDecorator.prototype.componentDidMount = function () {
                    this.element = findDOMNode(this.block);
                };
                ResizeableDecorator.prototype.render = function () {
                    var _this = this;
                    if (enable === false) {
                        return React.createElement(Block, __assign({}, this.props));
                    }
                    var _a = this.props, editor = _a.editor, alignment = _a.alignment, style = _a.style, className = _a.className;
                    var _b = this.state, resize = _b.resize, height = _b.height, width = _b.width;
                    var children = editor.props.readOnly
                        ? this.props.children
                        : this.props.children.concat([
                            resize && coverOnResize ? React.createElement(Cover, { key: "resizableCover" }) : null,
                            React.createElement(DraggableCore, { key: "resizableHandle", onStop: this.onResizeStop, onStart: this.onResizeStart, onDrag: this.onResize },
                                React.createElement("span", { className: cn('react-resizable-handle', alignment === 'right' ? 'handle-left' : 'handle-right') })),
                        ]);
                    var blockStyle = __assign({}, style);
                    if (height) {
                        blockStyle.height = height + "px";
                    }
                    return (React.createElement(Block, __assign({}, this.props, { style: blockStyle, className: cn(width && "p-0 col-sm-" + width, className), ref: function (e) { return (_this.block = e); } }), children));
                };
                return ResizeableDecorator;
            }(Component)),
            _a.slate = Block.slate,
            _a.propTypes = {
                getData: PropTypes.func,
                setData: PropTypes.func,
                editor: PropTypes.object,
                style: PropTypes.object,
            },
            _a.defaultProps = {
                style: {},
            },
            _a;
        var _a;
    };
};
//# sourceMappingURL=resize.js.map
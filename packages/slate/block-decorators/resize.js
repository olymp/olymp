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
var _this = this;
import { Component } from 'react';
import PropTypes from 'prop-types';
import { throttleInput } from 'olymp-utils';
import { findDOMNode } from 'react-dom';
var Cover = function (_a) {
    var children = _a.children, style = _a.style;
    return style = {};
}, _a = void 0, _b = _a.backgroundColor,  = _b === void 0 ? 'black' : _b, _c = _a.position,  = _c === void 0 ? 'absolute' : _c, _d = _a.top,  = _d === void 0 ? 0 : _d, _e = _a.left,  = _e === void 0 ? 0 : _e, _f = _a.width,  = _f === void 0 ? '100%' : _f, _g = _a.height,  = _g === void 0 ? '100%' : _g, _h = _a.zIndex,  = _h === void 0 ? 3 : _h;
    >
        { children: children }
    < /div>);;
export default function (options) {
    if (options === void 0) { options = {}; }
    return function (Block) {
        var coverOnResize = options.coverOnResize, enable = options.enable, resizeX = options.resizeX, resizeY = options.resizeY, initialWidth = options.width, initialHeight = options.height;
        return (_a = (function (_super) {
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
                    if (enable === false) {
                        return __assign({}, this.props) /  > ;
                    }
                    var _a = this.props, editor = _a.editor, alignment = _a.alignment, style = _a.style, className = _a.className;
                    var _b = this.state, resize = _b.resize, height = _b.height, width = _b.width;
                    var children = editor.props.readOnly
                        ? this.props.children
                        : this.props.children.concat([
                            resize && coverOnResize ? key :  = "resizableCover" /  > , null,
                            key, "resizableHandle",
                            onStop = { this: .onResizeStop },
                            onStart = { this: .onResizeStart },
                            onDrag = { this: .onResize }
                                >
                                    className, {
                                'react-resizable-handle': ,
                                alignment:  === 'right' ? 'handle-left' : 'handle-right' }
                        ]);
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
            _a) /  >
            /DraggableCore>,;
        ;
        var blockStyle = __assign({}, style);
        if (height) {
            blockStyle.height = height + "px";
        }
        return __assign({}, _this.props);
        style = { blockStyle: blockStyle };
        className = {};
        ref = { e: function () { return (_this.block = e); } }
            >
                { children: children }
            < /Block>;
        ;
        var _a;
    };
};
;
;
//# sourceMappingURL=resize.js.map
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { add, remove } from 'eventlistener';
import { debounce } from 'lodash';
import { throttle } from 'lodash';
import parentScroll from './parent-scroll';
import inViewport from './in-viewport';
var LazyLoad = (function (_super) {
    __extends(LazyLoad, _super);
    function LazyLoad(props) {
        var _this = _super.call(this, props) || this;
        _this.lazyLoadHandler = _this.lazyLoadHandler.bind(_this);
        if (props.throttle > 0) {
            if (props.debounce) {
                _this.lazyLoadHandler = debounce(_this.lazyLoadHandler, props.throttle);
            }
            else {
                _this.lazyLoadHandler = throttle(_this.lazyLoadHandler, props.throttle);
            }
        }
        _this.state = { visible: false };
        return _this;
    }
    LazyLoad.prototype.componentDidMount = function () {
        this._mounted = true;
        var eventNode = this.getEventNode();
        this.lazyLoadHandler();
        if (this.lazyLoadHandler.flush) {
            this.lazyLoadHandler.flush();
        }
        add(window, 'resize', this.lazyLoadHandler);
        add(eventNode, 'scroll', this.lazyLoadHandler);
    };
    LazyLoad.prototype.componentWillReceiveProps = function () {
        if (!this.state.visible) {
            this.lazyLoadHandler();
        }
    };
    LazyLoad.prototype.shouldComponentUpdate = function (_nextProps, nextState) {
        return nextState.visible;
    };
    LazyLoad.prototype.componentWillUnmount = function () {
        this._mounted = false;
        if (this.lazyLoadHandler.cancel) {
            this.lazyLoadHandler.cancel();
        }
        this.detachListeners();
    };
    LazyLoad.prototype.getEventNode = function () {
        return parentScroll(findDOMNode(this));
    };
    LazyLoad.prototype.getOffset = function () {
        var _a = this.props, offset = _a.offset, offsetVertical = _a.offsetVertical, offsetHorizontal = _a.offsetHorizontal, offsetTop = _a.offsetTop, offsetBottom = _a.offsetBottom, offsetLeft = _a.offsetLeft, offsetRight = _a.offsetRight, threshold = _a.threshold;
        var _offsetAll = threshold || offset;
        var _offsetVertical = offsetVertical || _offsetAll;
        var _offsetHorizontal = offsetHorizontal || _offsetAll;
        return {
            top: offsetTop || _offsetVertical,
            bottom: offsetBottom || _offsetVertical,
            left: offsetLeft || _offsetHorizontal,
            right: offsetRight || _offsetHorizontal,
        };
    };
    LazyLoad.prototype.lazyLoadHandler = function () {
        if (!this._mounted) {
            return;
        }
        var offset = this.getOffset();
        var node = findDOMNode(this);
        var eventNode = this.getEventNode();
        if (inViewport(node, eventNode, offset)) {
            var onContentVisible_1 = this.props.onContentVisible;
            this.setState({ visible: true }, function () {
                if (onContentVisible_1) {
                    onContentVisible_1();
                }
            });
            this.detachListeners();
        }
    };
    LazyLoad.prototype.detachListeners = function () {
        var eventNode = this.getEventNode();
        remove(window, 'resize', this.lazyLoadHandler);
        remove(eventNode, 'scroll', this.lazyLoadHandler);
    };
    LazyLoad.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, height = _a.height, width = _a.width;
        var visible = this.state.visible;
        var elStyles = { height: height, width: width };
        var elClasses = ('LazyLoad' +
            (visible ? ' is-visible' : '') +
            (className ? " " + className : ''));
        return React.createElement(this.props.elementType, {
            className: elClasses,
            style: elStyles,
        }, visible && children);
    };
    return LazyLoad;
}(Component));
export default LazyLoad;
LazyLoad.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    debounce: PropTypes.bool,
    elementType: PropTypes.string,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    offset: PropTypes.number,
    offsetBottom: PropTypes.number,
    offsetHorizontal: PropTypes.number,
    offsetLeft: PropTypes.number,
    offsetRight: PropTypes.number,
    offsetTop: PropTypes.number,
    offsetVertical: PropTypes.number,
    threshold: PropTypes.number,
    throttle: PropTypes.number,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onContentVisible: PropTypes.func,
};
LazyLoad.defaultProps = {
    elementType: 'div',
    debounce: true,
    offset: 0,
    offsetBottom: 0,
    offsetHorizontal: 0,
    offsetLeft: 0,
    offsetRight: 0,
    offsetTop: 0,
    offsetVertical: 0,
    throttle: 250,
};
//# sourceMappingURL=index.js.map
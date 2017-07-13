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
import { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { cn } from 'olymp-utils';
import { GatewayRegistry } from 'react-gateway';
var delay = function (t) { return new Promise(function (yay) { return setTimeout(yay, t); }); };
var state = function (t, args) { return new Promise(function (yay) { return t.setState(args, yay); }); };
var FirstChild = function (props) { return Children.toArray(props.children)[0] || null; };
var withTransition = function (Transition, _a) {
    var delayLeave = (_a === void 0 ? {} : _a).delayLeave;
    var TransitionManager = (function (_super) {
        __extends(TransitionManager, _super);
        function TransitionManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = { animation: null };
            _this.delay = function () {
                var speed = _this.props.speed;
                return delayLeave &&
                    Object.keys(_this.context.gatewayRegistry._children.modal).find(function (key) {
                        var isOpen = _this.context.gatewayRegistry._children.modal[key].props.isOpen;
                        return isOpen !== false;
                    })
                    ? speed * 2
                    : speed;
            };
            return _this;
        }
        TransitionManager.prototype.componentWillAppear = function (callback) {
            var _this = this;
            var _a = this.props, speed = _a.speed, enter = _a.enter, appear = _a.appear;
            if (enter === false || appear === false) {
                return callback();
            }
            state(this, { animation: 'enter', active: false })
                .then(function () { return delay(1); })
                .then(function () { return state(_this, { active: true, delay: _this.delay() }); })
                .then(function () { return delay(_this.state.delay); })
                .then(function () { return state(_this, { animation: null }); })
                .then(callback);
        };
        TransitionManager.prototype.componentWillEnter = function (callback) {
            var _this = this;
            var _a = this.props, speed = _a.speed, enter = _a.enter;
            if (enter === false) {
                return callback();
            }
            state(this, { animation: 'enter', active: false })
                .then(function () { return delay(1); })
                .then(function () { return state(_this, { active: true, delay: _this.delay() }); })
                .then(function () { return delay(_this.state.delay); })
                .then(function () { return state(_this, { animation: null }); })
                .then(callback);
        };
        TransitionManager.prototype.componentWillLeave = function (callback) {
            var _this = this;
            var _a = this.props, speed = _a.speed, leave = _a.leave;
            if (leave === false) {
                return callback();
            }
            state(this, { animation: 'leave', active: false })
                .then(function () { return delay(1); })
                .then(function () { return state(_this, { active: true, delay: _this.delay() }); })
                .then(function () { return delay(_this.state.delay); })
                .then(callback);
        };
        TransitionManager.prototype.render = function () {
            var speed = this.props.speed;
            var _a = this.state, animation = _a.animation, active = _a.active, delay = _a.delay;
            var type = "" + animation + (active ? '-active' : '');
            return __assign({}, this.props);
            type = { type: type };
            phase = { animation: animation };
            state = { active: active };
            delay = { this: .props.delay === false ? 0 : (delay || speed) - speed }
                /  >
            ;
        };
        TransitionManager.contextTypes = {
            gatewayRegistry: PropTypes.instanceOf(GatewayRegistry).isRequired,
        };
        TransitionManager.defaultProps = {
            speed: 300,
            appear: false,
            enter: true,
            leave: true,
        };
        return TransitionManager;
    }(Component));
};
;
return function (props) {
    var isOpen = props.isOpen;
    var opened = isOpen === undefined ? true : !!isOpen;
    return component = { FirstChild: FirstChild } >
        __assign({ opened: function () { } }, props) /  > ;
    null;
};
/TransitionGroup>;
;
;
;
export var createTransition = function (fn, options) {
    var Inner = withTransition(createComponent(fn, function (_a) {
        var className = _a.className, children = _a.children;
        var child = Children.only(children);
        return cloneElement(child, {
            className: cn(child.props.className, className),
        });
    }, function (p) { return Object.keys(p); }), options);
    var component = function (props, _a) {
        var theme = _a.theme;
        if (!theme.transition) {
            var isOpen = props.isOpen;
            var opened = isOpen === undefined ? true : !!isOpen;
            return opened ? Children.only(props.children) : null;
        }
        return __assign({}, props) /  > ;
    };
    component.contextTypes = { theme: PropTypes.object };
    return component;
};
export var TransitionFade = createTransition(function (_a) {
    var type = _a.type, delay = _a.delay, speed = _a.speed;
    if (type === 'enter') {
        return {
            opacity: 0,
            zIndex: 99999,
        };
    }
    else if (type === 'enter-active') {
        return {
            opacity: 1,
            zIndex: 99999,
            transition: "opacity " + speed + "ms ease-in-out",
            willChange: 'transform',
        };
    }
    else if (type === 'leave') {
        return {
            opacity: 1,
            position: 'absolute',
            width: '100%',
            pointerEvents: 'none',
        };
    }
    else if (type === 'leave-active') {
        return {
            opacity: 0,
            pointerEvents: 'none',
            position: 'absolute',
            width: '100%',
            transition: "opacity " + speed + "ms ease-in-out",
            transitionDelay: delay + "ms",
            willChange: 'transform',
        };
    }
}, { delayLeave: true });
export var TransitionSlide = createTransition(function (_a) {
    var type = _a.type, delay = _a.delay, speed = _a.speed;
    if (type === 'enter') {
        return {
            transform: 'translateX(100%)',
            zIndex: 99999,
        };
    }
    else if (type === 'enter-active') {
        return {
            transform: 'translateX(0%)',
            transition: "transform " + speed + "ms ease-in-out, opacity " + speed + "ms ease-in-out",
            willChange: 'transform',
            zIndex: 99999,
        };
    }
    else if (type === 'leave') {
        return {
            pointerEvents: 'none',
            position: 'absolute',
            width: '100%',
            transform: 'translateX(0%)',
        };
    }
    else if (type === 'leave-active') {
        return {
            transform: 'translateX(-100%)',
            position: 'absolute',
            width: '100%',
            pointerEvents: 'none',
            transition: "transform " + speed + "ms ease-in-out, opacity " + speed + "ms ease-in-out",
            willChange: 'transform',
        };
    }
});
export var Transition = function (props, _a) {
    var theme = _a.theme;
    if (!theme.transition) {
        theme.transition = 'fade';
    }
    if (theme.transition === 'fade') {
        return __assign({}, props);
        speed = { theme: .transitionSpeed || 250 } /  > ;
    }
    if (theme.transition === 'slide') {
        return __assign({}, props);
        speed = { theme: .transitionSpeed || 500 } /  > ;
    }
    var isOpen = props.isOpen;
    var opened = isOpen === undefined ? true : !!isOpen;
    return opened ? Children.only(props.children) : null;
};
Transition.contextTypes = { theme: PropTypes.object };
export default Transition;
//# sourceMappingURL=transitions.js.map
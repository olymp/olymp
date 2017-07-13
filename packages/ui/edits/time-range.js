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
import { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Slider from 'multirangeslider';
import { createComponent } from 'olymp-fela';
var Elessar = (function (_super) {
    __extends(Elessar, _super);
    function Elessar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (e) {
            if (_this.dontChange) {
                return;
            }
            var onChange = _this.props.onChange;
            var keys = Object.keys(e.data);
            var array = keys.map(function (key) { return [e.data[key].val[0], e.data[key].val[1]]; });
            onChange(array);
        };
        return _this;
    }
    Elessar.prototype.resetValues = function (newProps) {
        var _this = this;
        if (newProps === void 0) { newProps = this.props; }
        this.dontChange = true;
        this.slider.removeAll();
        var value = newProps.value;
        if (!value) {
            value = [];
        }
        else if (!Array.isArray(value)) {
            value = [];
        }
        value.filter(function (item) { return Array.isArray(item); }).forEach(function (item) {
            _this.slider.add(item);
        });
        this.dontChange = false;
    };
    Elessar.prototype.componentDidMount = function () {
        this.slider = new Slider({
            min: 7 * 60,
            max: 19 * 60,
            minWidth: 60,
            step: 30,
            label: function (value) {
                var start = moment().startOf('day').add(value[0], 'minutes');
                var end = moment().startOf('day').add(value[1], 'minutes');
                return start.format('HH:mm') + "-" + end.format('HH:mm');
            },
        });
        this.slider.on('change', this.onChange);
        ReactDOM.findDOMNode(this).appendChild(this.slider.el);
        this.resetValues();
    };
    Elessar.prototype.componentWillReceiveProps = function (newProps) {
        if (this.dontChange) {
            return;
        }
        this.resetValues(newProps);
    };
    Elessar.prototype.render = function () {
        var _this = this;
        var className = this.props.className;
        return className;
        {
            className;
        }
        ref = { x: function () { return (_this.dev = x); } } /  > ;
    };
    return Elessar;
}(Component));
export default createComponent(function (_a) {
    var theme = _a.theme;
    var height = 32;
    return {
        '> .multirangeslider-slider': {
            display: 'block',
            userSelect: 'none',
            '> .multirangeslider-allowChangeFalse': {
                '> .multirangeslider-range': {
                    cursor: 'default',
                    '> .multirangeslider-left-handler': {
                        cursor: 'default',
                    },
                    '> .multirangeslider-right-handler': {
                        cursor: 'default',
                    },
                },
            },
            '> .multirangeslider-bar': {
                height: height,
                border: '1px solid #d9d9d9',
                borderRadius: 4,
                width: '100%',
                display: 'block',
                background: theme.light,
                position: 'relative',
                boxSizing: 'border-box',
                '> .multirangeslider-ghost': {
                    position: 'absolute',
                    height: '100%',
                    textAlign: 'center',
                    lineHeight: height + "px",
                    top: 0,
                    color: theme.color,
                    background: 'rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer',
                },
                '> .multirangeslider-pressed': {
                    background: theme.light2,
                },
                '> .multirangeslider-zero-width.multirangeslider-pressed-right': {
                    '> .multirangeslider-right-handler': {
                        left: -8,
                    },
                },
                '> .multirangeslider-zero-width.multirangeslider-pressed-left': {
                    '> .multirangeslider-left-handler': {
                        left: -8,
                    },
                },
                '> .multirangeslider-zero-width.multirangeslider-remove-popup': {
                    left: -12,
                },
                '> .multirangeslider-range': {
                    position: 'absolute',
                    height: '100%',
                    top: 0,
                    cursor: 'move',
                    '-webkit-user-drag': 'none',
                    color: theme.light,
                    backgroundColor: theme.color,
                    '> .multirangeslider-label': {
                        position: 'absolute',
                        textAlign: 'center',
                        lineHeight: height + "px",
                        width: '100%',
                        display: 'inline',
                    },
                    '> .multirangeslider-left-handler': {
                        position: 'absolute',
                        width: 8,
                        background: theme.light2,
                        height: '100%',
                        cursor: 'ew-resize',
                        '-webkit-user-drag': 'none',
                        left: 0,
                    },
                    '> .multirangeslider-right-handler': {
                        position: 'absolute',
                        width: 8,
                        background: theme.light2,
                        height: '100%',
                        cursor: 'ew-resize',
                        '-webkit-user-drag': 'none',
                        right: 0,
                    },
                    '> .multirangeslider-remove-popup': {
                        transition: '0.5s',
                        position: 'absolute',
                        top: -30,
                        textAlign: 'center',
                        width: '100%',
                        '> .multirangeslider-remove-label': {
                            width: 20,
                            height: 20,
                            lineHeight: '20px',
                            background: theme.color,
                            color: theme.light,
                            opacity: '0.5',
                            display: 'inline-block',
                        },
                    },
                },
            },
        },
    };
}, function (x) { return (__assign({}, x) /  > ); }, function (x) { return Object.keys(x); });
//# sourceMappingURL=time-range.js.map
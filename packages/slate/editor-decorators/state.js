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
import { Raw, Plain, resetKeyGenerator } from 'slate';
import { batch } from '../utils/batch';
import { getHeaders } from '../utils/get-text';
var parseValue = function (v, initialState, terse) {
    resetKeyGenerator();
    if (!v) {
        return Plain.deserialize('');
    }
    var value = JSON.parse(JSON.stringify(v));
    try {
        return Raw.deserialize(value, { terse: terse });
    }
    catch (err1) {
        try {
            return Raw.deserialize(value, { terse: !terse });
        }
        catch (err2) {
            console.error('Couldnt parse value in slate', err1, err2);
            return initialState
                ? parseValue(initialState, undefined, { terse: terse })
                : Plain.deserialize('');
        }
    }
};
var defaultGetValue = function (_a) {
    var value = _a.value;
    return value;
};
var defaultChangeValue = function (_a, value, raw) {
    var onChange = _a.onChange;
    return onChange ? onChange(value, raw) : null;
};
export default function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.getValue, getValue = _c === void 0 ? defaultGetValue : _c, _d = _b.changeValue, changeValue = _d === void 0 ? defaultChangeValue : _d, initialState = _b.initialState, terse = _b.terse;
    return function (Editor) { return _a = (function (_super) {
            __extends(SlateStateDecorator, _super);
            function SlateStateDecorator(props) {
                var _this = _super.call(this) || this;
                _this.isFocused = false;
                _this.batch = batch(300);
                _this.rawValue = null;
                _this.changeValue = function (value) {
                    var onChangeHeadings = _this.props.onChangeHeadings;
                    _this.value = value;
                    _this.forceUpdate();
                    if (changeValue) {
                        var rawValue_1 = Raw.serialize(value, { terse: terse });
                        if (JSON.stringify(_this.rawValue) !== JSON.stringify(rawValue_1)) {
                            _this.rawValue = rawValue_1;
                            _this.batch(function () {
                                var flattenNodes = function (nodes, level) {
                                    if (level === void 0) { level = 0; }
                                    return nodes.reduce(function (arr, node) {
                                        var type = node.type, kind = node.kind, text = node.text;
                                        var newArr = arr.slice();
                                        var newNode = __assign({}, node);
                                        if (newNode.nodes) {
                                            newArr = arr.concat(flattenNodes(newNode.nodes, level + 1));
                                            delete newNode.nodes;
                                        }
                                        if (!(type === 'paragraph') &&
                                            !(type === 'paragraph') &&
                                            !(kind === 'text' && text === '')) {
                                            newArr.push(newNode);
                                        }
                                        return newArr;
                                    }, []);
                                };
                                if (rawValue_1 && flattenNodes(rawValue_1.nodes).length) {
                                    if (onChangeHeadings) {
                                        onChangeHeadings(getHeaders(rawValue_1.nodes));
                                    }
                                    changeValue(_this.props, rawValue_1, value);
                                }
                                else {
                                    if (onChangeHeadings) {
                                        onChangeHeadings(null);
                                    }
                                    changeValue(_this.props, null, value);
                                }
                            });
                        }
                    }
                };
                _this.rawValue = getValue(props);
                _this.value = parseValue(_this.rawValue, initialState, terse);
                return _this;
            }
            SlateStateDecorator.prototype.shouldComponentUpdate = function (props) {
                var newValue = getValue(props);
                var oldValue = getValue(this.props);
                if (newValue !== oldValue && this.rawValue !== newValue) {
                    this.value = parseValue(newValue, undefined, terse);
                    this.rawValue = newValue;
                    return true;
                }
                else if (props.readOnly !== this.props.readOnly) {
                    return true;
                }
                return false;
            };
            SlateStateDecorator.prototype.render = function () {
                return __assign({}, this.props);
                value = { this: .value };
                onChange = { this: .changeValue }
                    /  >
                ;
                ;
            };
            return SlateStateDecorator;
        }(Component)),
        _a.propTypes = {},
        _a; var _a; };
};
//# sourceMappingURL=state.js.map
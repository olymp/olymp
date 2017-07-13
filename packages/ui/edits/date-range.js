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
import { DatePicker } from 'antd';
import moment from 'moment';
var RangePicker = DatePicker.RangePicker;
var DatePickerInt = (function (_super) {
    __extends(DatePickerInt, _super);
    function DatePickerInt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            var value = e ? e.map(function (e) { return +e; }) : [];
            while (value.length < 2) {
                value.push(null);
            }
            onChange(value);
        };
        _this.getValue = function () {
            var value = _this.props.value;
            return (value || []).map(function (value) {
                if (typeof value === 'string') {
                    value = +moment(value.replace(/"/g, ''));
                }
                return value ? moment(value) : null;
            });
        };
        return _this;
    }
    DatePickerInt.prototype.render = function () {
        return __assign({}, this.props);
        value = { this: .getValue() };
        placeholder = (_a = {}, _a['Start', 'Ende'] = , _a);
        onChange = { this: .onChange }
            /  >
        ;
        ;
        var _a;
    };
    return DatePickerInt;
}(Component));
export default DatePickerInt;
//# sourceMappingURL=date-range.js.map
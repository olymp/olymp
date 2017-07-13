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
import TimeRange from './time-range';
import { Grid } from 'olymp-fela';
import moment from 'moment';
var TimeRanges = (function (_super) {
    __extends(TimeRanges, _super);
    function TimeRanges() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (i) { return function (v) {
            var value = _this.props.value || [];
            var onChange = _this.props.onChange;
            var newValue = value.slice();
            while (newValue.length < 7) {
                newValue.push([]);
            }
            onChange(newValue.map(function (x, index) { return (index === i ? v : x); }));
        }; };
        return _this;
    }
    TimeRanges.prototype.render = function () {
        var _this = this;
        var value = this.props.value || [];
        var newValue = value.slice();
        while (newValue.length < 7) {
            newValue.push([]);
        }
        var days = moment.weekdaysMin();
        days.push(days.splice(0, 1)[0]);
        return (React.createElement("div", null, newValue.map(function (v, i) {
            return (React.createElement(Grid, { style: { marginBottom: '10px' }, key: i },
                React.createElement(Grid.Item, { medium: 1 },
                    "\u00A0\u00A0",
                    days[i],
                    "."),
                React.createElement(Grid.Item, { medium: 11 },
                    React.createElement(TimeRange, { value: v, onChange: _this.onChange(i) }))));
        })));
    };
    return TimeRanges;
}(Component));
export default TimeRanges;
//# sourceMappingURL=time-ranges.js.map
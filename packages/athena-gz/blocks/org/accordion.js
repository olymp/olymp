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
import { createComponent, border } from 'olymp-fela';
import { FaAngleRight, FaAngleLeft } from 'olymp-icons';
import { SlateMate } from 'olymp-slate';
var Icon = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'right',
    });
}, function (_a) {
    var className = _a.className, children = _a.children;
    return React.createElement("span", { className: className }, children);
}, function (p) { return Object.keys(p); });
var Link = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color, active = _a.active;
    return ({
        paddingTop: theme.space1,
        cursor: 'pointer',
        display: 'block',
        borderBottom: active ? border(theme, color) : border(theme, 'transparent'),
        onHover: {
            backgroundColor: theme.dark5,
            borderRadius: theme.borderRadius,
            paddingX: theme.space2,
            marginX: "-" + theme.space2,
        },
    });
}, function (_a) {
    var className = _a.className, children = _a.children, color = _a.color, active = _a.active, onClick = _a.onClick;
    return React.createElement("div", { className: className, onClick: onClick },
        children,
        React.createElement(Icon, null, !active
            ? React.createElement(FaAngleRight, { size: 14, color: color })
            : React.createElement(FaAngleLeft, { size: 14, color: color })));
}, function (p) { return Object.keys(p); });
var Text = createComponent(function (_a) {
    var theme = _a.theme, active = _a.active;
    return ({
        display: active ? 'block' : 'none',
        padding: theme.space2,
        color: theme.dark2,
        hyphens: 'auto',
        textAlign: 'justify',
    });
}, function (_a) {
    var className = _a.className, children = _a.children;
    return React.createElement("div", { className: className },
        React.createElement(SlateMate, { value: children, readOnly: true }));
}, function (p) { return Object.keys(p); });
var Container = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        marginY: 0,
    });
}, function (_a) {
    var className = _a.className, name = _a.name, color = _a.color, text = _a.text, active = _a.active, onClick = _a.onClick;
    return React.createElement("div", { className: className },
        React.createElement(Link, { onClick: onClick, color: color, active: active }, name),
        React.createElement(Text, { active: active }, text));
}, function (p) { return Object.keys(p); });
var Accordion = (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { active: false };
        return _this;
    }
    Accordion.prototype.render = function () {
        var _this = this;
        var active = this.state.active;
        return (React.createElement(Container, __assign({}, this.props, { active: active, onClick: function () { return _this.setState({ active: !active }); } })));
    };
    return Accordion;
}(Component));
export default Accordion;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS1nei9ibG9ja3Mvb3JnL2FjY29yZGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4QyxJQUFNLElBQUksR0FBRyxlQUFlLENBQzFCLFVBQUMsRUFBUztRQUFQLGdCQUFLO0lBQU8sT0FBQSxDQUFDO1FBQ2QsS0FBSyxFQUFFLE9BQU87S0FDZixDQUFDO0FBRmEsQ0FFYixFQUNGLFVBQUMsRUFBdUI7UUFBckIsd0JBQVMsRUFBRSxzQkFBUTtJQUNwQixPQUFBLDhCQUFNLFNBQVMsRUFBRSxTQUFTLElBQ3ZCLFFBQVEsQ0FDSjtBQUZQLENBRU8sRUFDVCxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDO0FBRUYsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUMxQixVQUFDLEVBQXdCO1FBQXRCLGdCQUFLLEVBQUUsZ0JBQUssRUFBRSxrQkFBTTtJQUFPLE9BQUEsQ0FBQztRQUM3QixVQUFVLEVBQUUsS0FBSyxDQUFDLE1BQU07UUFDeEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLE9BQU87UUFDaEIsWUFBWSxFQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDO1FBQzFFLE9BQU8sRUFBRTtZQUNQLGVBQWUsRUFBRSxLQUFLLENBQUMsS0FBSztZQUM1QixZQUFZLEVB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Y2thZ2VzL2F0aGVuYS1nei9ibG9ja3Mvb3JnL2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIGJvcmRlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRmFBbmdsZVJpZ2h0LCBGYUFuZ2xlTGVmdCB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IFNsYXRlTWF0ZSB9IGZyb20gJ29seW1wLXNsYXRlJztcblxuY29uc3QgSWNvbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT5cbiAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9zcGFuPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgTGluayA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGNvbG9yLCBhY3RpdmUgfSkgPT4gKHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjZTEsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBib3JkZXJCb3R0b206IGFjdGl2ZSA/IGJvcmRlcih0aGVtZSwgY29sb3IpIDogYm9yZGVyKHRoZW1lLCAndHJhbnNwYXJlbnQnKSxcbiAgICBvbkhvdmVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms1LFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBwYWRkaW5nWDogdGhlbWUuc3BhY2UyLFxuICAgICAgbWFyZ2luWDogYC0ke3RoZW1lLnNwYWNlMn1gLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBjb2xvciwgYWN0aXZlLCBvbkNsaWNrIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja30+XG4gICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIDxJY29uPlxuICAgICAgICB7IWFjdGl2ZVxuICAgICAgICAgID8gPEZhQW5nbGVSaWdodCBzaXplPXsxNH0gY29sb3I9e2NvbG9yfSAvPlxuICAgICAgICAgIDogPEZhQW5nbGVMZWZ0IHNpemU9ezE0fSBjb2xvcj17Y29sb3J9IC8+fVxuICAgICAgPC9JY29uPlxuICAgIDwvZGl2PixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgVGV4dCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGFjdGl2ZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6IGFjdGl2ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2UyLFxuICAgIGNvbG9yOiB0aGVtZS5kYXJrMixcbiAgICBoeXBoZW5zOiAnYXV0bycsXG4gICAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8U2xhdGVNYXRlIHZhbHVlPXtjaGlsZHJlbn0gcmVhZE9ubHkgLz5cbiAgICA8L2Rpdj4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW5ZOiAwLFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBuYW1lLCBjb2xvciwgdGV4dCwgYWN0aXZlLCBvbkNsaWNrIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGluayBvbkNsaWNrPXtvbkNsaWNrfSBjb2xvcj17Y29sb3J9IGFjdGl2ZT17YWN0aXZlfT5cbiAgICAgICAge25hbWV9XG4gICAgICA8L0xpbms+XG4gICAgICA8VGV4dCBhY3RpdmU9e2FjdGl2ZX0+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9UZXh0PlxuICAgIDwvZGl2PixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGFjdGl2ZTogZmFsc2UgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lclxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6ICFhY3RpdmUgfSl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

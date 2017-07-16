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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { throttle, interpolate } from './utils';
import { textToAst, astToReact } from './processors';
import connect from './connect';
export default function (options) {
    var createTemplate = function (text) {
        var ast = textToAst(text);
        var component = function (_a) {
            var children = _a.children, value = _a.value, props = __rest(_a, ["children", "value"]);
            return (React.createElement("div", null, ast.map(toReact(__assign({}, props, { value: value, arg0: value, content: children })))));
        };
        component.propTypes = {};
        interpolate(text, function (v) { return (component.propTypes[v] = PropTypes.string); });
        return component;
    };
    var components = options.components
        ? Object.keys(options.components).reduce(function (store, key) {
            store[key] =
                typeof options.components[key] === 'string'
                    ? connect(createTemplate(options.components[key]))
                    : connect(options.components[key]);
            return store;
        }, {})
        : {};
    var decorators = options.decorators || {};
    var fallback = options.fallback;
    var toReact = astToReact({ components: components, decorators: decorators, fallback: fallback });
    var Hashtax = (function (_super) {
        __extends(Hashtax, _super);
        function Hashtax() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Hashtax.prototype.shouldComponentUpdate = function (newProps) {
            var _this = this;
            var newThrottle = newProps.throttle;
            var oldThrottle = this.props.throttle;
            if (newThrottle) {
                if (!this.throttler || newThrottle !== oldThrottle) {
                    this.throttler = throttle(newThrottle);
                }
                this.throttler(function () {
                    if (_this.unmounting)
                        return;
                    _this.forceUpdate();
                });
                return false;
            }
            delete this.throttler;
            return true;
        };
        Hashtax.prototype.componentWillUnmount = function () {
            this.unmounting = true;
        };
        Hashtax.prototype.render = function () {
            var _a = this.props, value = _a.value, className = _a.className, style = _a.style, type = _a.type, context = __rest(_a, ["value", "className", "style", "type"]);
            if (!value)
                return null;
            var ast = textToAst(value);
            return createElement(type, { className: className, style: style }, ast.map(toReact(context)));
        };
        Hashtax.propTypes = {
            type: PropTypes.string,
            throttle: PropTypes.number,
            value: PropTypes.string,
        };
        Hashtax.defaultProps = {
            type: 'div',
            throttle: null,
            value: '',
        };
        return Hashtax;
    }(Component));
    Hashtax.render = function (value, context) { return textToAst(value).map(toReact(context)); };
    Hashtax.components = components;
    Hashtax.decorators = decorators;
    Hashtax.addComponent = function (key, component) {
        components[key] =
            typeof component === 'string'
                ? connect(createTemplate(component))
                : connect(component);
        toReact = astToReact({ components: components, decorators: decorators, templates: templates, fallback: fallback });
    };
    Hashtax.addDecorator = function (key, decorator) {
        decorators[key] = decorator;
        toReact = astToReact({ components: components, decorators: decorators, templates: templates, fallback: fallback });
    };
    return Hashtax;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2hhc2h0YXgvc3JjL2hhc2h0YXguMS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3hELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRCxPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFFaEMsZUFBZSxVQUFBLE9BQU87SUFDcEIsSUFBTSxjQUFjLEdBQUcsVUFBQSxJQUFJO1FBQ3pCLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFNLFNBQVMsR0FBRyxVQUFDLEVBQTZCO1lBQTNCLElBQUEsc0JBQVEsRUFBRSxnQkFBSyxFQUFFLHlDQUFRO1lBQzVDLE1BQU0sQ0FBQyxDQUNMLGlDQUNHLEdBQUcsQ0FBQyxHQUFHLENBQ04sT0FBTyxjQUFNLEtBQUssSUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLElBQUcsQ0FDN0QsQ0FDRyxDQUNQLENBQUM7UUFDSixDQUFDLENBQUM7UUFDRixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN6QixXQUFXLENBQUMsSUFBSSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBRUYsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVB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TSxHQUFHLFVBQUMsS0FBSyxFQUFFLE9BQU8sSUFBSyxPQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQUM7SUFDNUUsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDaEMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDaEMsT0FBTyxDQUFDLFlBQVksR0FBRyxVQUFDLEdBQUcsRUFBRSxTQUFTO1FBQ3BDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDYixPQUFPLFNBQVMsS0FBSyxRQUFRO2tCQUN6QixPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2tCQUNsQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxFQUFFLFVBQVUsWUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDLENBQUM7SUFDRixPQUFPLENBQUMsWUFBWSxHQUFHLFVBQUMsR0FBRyxFQUFFLFNBQVM7UUFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUM1QixPQUFPLEdBQUcsVUFBVSxDQUFDLEVBQUUsVUFBVSxZQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUMsQ0FBQztJQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2hhc2h0YXgvc3JjL2hhc2h0YXguMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdGhyb3R0bGUsIGludGVycG9sYXRlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyB0ZXh0VG9Bc3QsIGFzdFRvUmVhY3QgfSBmcm9tICcuL3Byb2Nlc3NvcnMnO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi9jb25uZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgb3B0aW9ucyA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRlbXBsYXRlID0gdGV4dCA9PiB7XG4gICAgY29uc3QgYXN0ID0gdGV4dFRvQXN0KHRleHQpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9ICh7IGNoaWxkcmVuLCB2YWx1ZSwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7YXN0Lm1hcChcbiAgICAgICAgICAgIHRvUmVhY3QoeyAuLi5wcm9wcywgdmFsdWUsIGFyZzA6IHZhbHVlLCBjb250ZW50OiBjaGlsZHJlbiB9KVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuICAgIGNvbXBvbmVudC5wcm9wVHlwZXMgPSB7fTtcbiAgICBpbnRlcnBvbGF0ZSh0ZXh0LCB2ID0+IChjb21wb25lbnQucHJvcFR5cGVzW3ZdID0gUHJvcFR5cGVzLnN0cmluZykpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH07XG5cbiAgY29uc3QgY29tcG9uZW50cyA9IG9wdGlvbnMuY29tcG9uZW50c1xuICAgID8gT2JqZWN0LmtleXMob3B0aW9ucy5jb21wb25lbnRzKS5yZWR1Y2UoKHN0b3JlLCBrZXkpID0+IHtcbiAgICAgICAgc3RvcmVba2V5XSA9XG4gICAgICAgICAgdHlwZW9mIG9wdGlvbnMuY29tcG9uZW50c1trZXldID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBjb25uZWN0KGNyZWF0ZVRlbXBsYXRlKG9wdGlvbnMuY29tcG9uZW50c1trZXldKSlcbiAgICAgICAgICAgIDogY29ubmVjdChvcHRpb25zLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0sIHt9KVxuICAgIDoge307XG4gIGNvbnN0IGRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnMgfHwge307XG4gIGNvbnN0IGZhbGxiYWNrID0gb3B0aW9ucy5mYWxsYmFjaztcbiAgbGV0IHRvUmVhY3QgPSBhc3RUb1JlYWN0KHsgY29tcG9uZW50cywgZGVjb3JhdG9ycywgZmFsbGJhY2sgfSk7XG5cbiAgY2xhc3MgSGFzaHRheCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB0aHJvdHRsZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgdGhyb3R0bGU6IG51bGwsXG4gICAgICB2YWx1ZTogJycsXG4gICAgfTtcbiAgICAvLyBBbGxvdyB0aHJvdHRsaW5nIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV3UHJvcHMpIHtcbiAgICAgIGNvbnN0IG5ld1Rocm90dGxlID0gbmV3UHJvcHMudGhyb3R0bGU7XG4gICAgICBjb25zdCBvbGRUaHJvdHRsZSA9IHRoaXMucHJvcHMudGhyb3R0bGU7XG4gICAgICBpZiAobmV3VGhyb3R0bGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRocm90dGxlciB8fCBuZXdUaHJvdHRsZSAhPT0gb2xkVGhyb3R0bGUpIHtcbiAgICAgICAgICB0aGlzLnRocm90dGxlciA9IHRocm90dGxlKG5ld1Rocm90dGxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm90dGxlcigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudW5tb3VudGluZykgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLnRocm90dGxlcjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bm1vdW50aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgY2xhc3NOYW1lLCBzdHlsZSwgdHlwZSwgLi4uY29udGV4dCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuXG4gICAgICAvLyB2YWx1ZSB0byBBU1RcbiAgICAgIGNvbnN0IGFzdCA9IHRleHRUb0FzdCh2YWx1ZSk7XG4gICAgICAvLyBBU1QgdG8gUmVhY3QgY29tcG9uZW50c1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHsgY2xhc3NOYW1lLCBzdHlsZSB9LFxuICAgICAgICBhc3QubWFwKHRvUmVhY3QoY29udGV4dCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBIYXNodGF4LnJlbmRlciA9ICh2YWx1ZSwgY29udGV4dCkgPT4gdGV4dFRvQXN0KHZhbHVlKS5tYXAodG9SZWFjdChjb250ZXh0KSk7XG4gIEhhc2h0YXguY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gIEhhc2h0YXguZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG4gIEhhc2h0YXguYWRkQ29tcG9uZW50ID0gKGtleSwgY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50c1trZXldID1cbiAgICAgIHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gY29ubmVjdChjcmVhdGVUZW1wbGF0ZShjb21wb25lbnQpKVxuICAgICAgICA6IGNvbm5lY3QoY29tcG9uZW50KTtcbiAgICB0b1JlYWN0ID0gYXN0VG9SZWFjdCh7IGNvbXBvbmVudHMsIGRlY29yYXRvcnMsIHRlbXBsYXRlcywgZmFsbGJhY2sgfSk7XG4gIH07XG4gIEhhc2h0YXguYWRkRGVjb3JhdG9yID0gKGtleSwgZGVjb3JhdG9yKSA9PiB7XG4gICAgZGVjb3JhdG9yc1trZXldID0gZGVjb3JhdG9yO1xuICAgIHRvUmVhY3QgPSBhc3RUb1JlYWN0KHsgY29tcG9uZW50cywgZGVjb3JhdG9ycywgdGVtcGxhdGVzLCBmYWxsYmFjayB9KTtcbiAgfTtcbiAgcmV0dXJuIEhhc2h0YXg7XG59O1xuIl19

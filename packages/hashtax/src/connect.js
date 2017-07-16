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
import { interpolate } from './utils';
import Hashtax from './hashtax-provided';
import { get } from 'lodash';
export default function (WrappedComponent) { return _a = (function (_super) {
        __extends(DataConnector, _super);
        function DataConnector() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DataConnector.prototype.render = function () {
            var _this = this;
            var hashtaxData = this.context.hashtaxData || {};
            var all = __assign({}, hashtaxData, this.props);
            var props = Object.keys(this.props).reduce(function (store, key) {
                var value = _this.props[key];
                if (value && typeof value === 'string' && value.indexOf('{{') !== -1) {
                    var text = interpolate(value, all);
                    if (text)
                        store[key] = React.createElement(Hashtax, { value: text });
                }
                else if (value &&
                    typeof value === 'string' &&
                    value.indexOf('{:') !== -1) {
                    var k_1;
                    interpolate(value, function (v) { return (k_1 = v); });
                    store[key] = get(all, k_1);
                }
                else if (value &&
                    typeof value === 'string' &&
                    value.indexOf('{') !== -1) {
                    store[key] = interpolate(value, all);
                }
                else {
                    store[key] = all[key];
                }
                return store;
            }, {});
            return React.createElement(WrappedComponent, __assign({}, hashtaxData, props));
        };
        return DataConnector;
    }(Component)),
    _a.contextTypes = {
        hashtaxData: PropTypes.object,
    },
    _a.propTypes = WrappedComponent ? WrappedComponent.propTypes : {},
    _a; var _a; };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2hhc2h0YXgvc3JjL2Nvbm5lY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3RDLE9BQU8sT0FBTyxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHN0IsZUFBZSxVQUFBLGdCQUFnQjtRQUNELGlDQUFTO1FBQXJDOztRQXFDQSxDQUFDO1FBaENDLDhCQUFNLEdBQU47WUFBQSxpQkErQkM7WUE5QkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQU0sR0FBRyxnQkFBUSxXQUFXLEVBQUssSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO1lBQzlDLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO2dCQUN0RCxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVyRSxJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLG9CQUFDLE9BQU8sSUFBQyxLQUFLLEVBQUUsSUFBSSxHQUFJLENBQUM7Z0JBQ2xELENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNSLEtBQUs7b0JBQ0wsT0FBTyxLQUFLLEtBQUssUUFBUTtvQkFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQzNCLENBQUMsQ0FBQyxDQUFDO29CQUVELElBQUksR0FBQyxDQUFDO29CQUNOLFdBQVcsQ0FBQyxLQUFLLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsRUFBUCxDQUFPLENBQUMsQ0FBQztvQkFDakMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBQyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNSLEtBQUs7b0JBQ0wsT0FBTyxLQUFLLEtBQUssUUFBUTtvQkFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzFCLENBQUMsQ0FBQyxDQUFDO29CQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxvQkFBQyxnQkFBZ0IsZUFBSyxXQUFXLEVBQU0sS0FBSyxFQUFJLENBQUM7UUFDMUQsQ0FBQztRQUNILG9CQUFDO0lBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQzJCLFNBQVM7SUFDNUIsZUFBWSxHQUFHO1FBQ3BCLFdBQVcsRUFBRSxTQUFTLENBQUMsTUFBTTtLQUM3QjtJQUNLLFlBQVMsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsRUFBRztpQkFpQ3ZFLENBQUMiLCJmaWxlIjoicGFja2FnZXMvaGFzaHRheC9zcmMvY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaW50ZXJwb2xhdGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBIYXNodGF4IGZyb20gJy4vaGFzaHRheC1wcm92aWRlZCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG4vLyBjb25uZWN0OiBEZWNvcmF0b3IgdG8gZ2V0IHByb3BzIGZyb20gY29udGV4dCBhbmQgaW50ZXJwb2xhdGUgcHJvcHNcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgRGF0YUNvbm5lY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgIGhhc2h0YXhEYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIH07XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IFdyYXBwZWRDb21wb25lbnQgPyBXcmFwcGVkQ29tcG9uZW50LnByb3BUeXBlcyA6IHt9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGhhc2h0YXhEYXRhID0gdGhpcy5jb250ZXh0Lmhhc2h0YXhEYXRhIHx8IHt9O1xuICAgICAgY29uc3QgYWxsID0geyAuLi5oYXNodGF4RGF0YSwgLi4udGhpcy5wcm9wcyB9O1xuICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5yZWR1Y2UoKHN0b3JlLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ3t7JykgIT09IC0xKSB7XG4gICAgICAgICAgLy8gaW50ZXJwb2xhdGUgaGFzaHRheCB0ZXh0XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGludGVycG9sYXRlKHZhbHVlLCBhbGwpO1xuICAgICAgICAgIGlmICh0ZXh0KSBzdG9yZVtrZXldID0gPEhhc2h0YXggdmFsdWU9e3RleHR9IC8+O1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHZhbHVlLmluZGV4T2YoJ3s6JykgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGludGVycG9sYXRlIHJlYWN0IGVsZW1lbnRcbiAgICAgICAgICBsZXQgaztcbiAgICAgICAgICBpbnRlcnBvbGF0ZSh2YWx1ZSwgdiA9PiAoayA9IHYpKTtcbiAgICAgICAgICBzdG9yZVtrZXldID0gZ2V0KGFsbCwgayk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdmFsdWUuaW5kZXhPZigneycpICE9PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBpbnRlcnBvbGF0ZSBzdHJpbmdcbiAgICAgICAgICBzdG9yZVtrZXldID0gaW50ZXJwb2xhdGUodmFsdWUsIGFsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmVba2V5XSA9IGFsbFtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4uaGFzaHRheERhdGF9IHsuLi5wcm9wc30gLz47XG4gICAgfVxuICB9O1xuIl19

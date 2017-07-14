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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';
var Skeletor = (function (_super) {
    __extends(Skeletor, _super);
    function Skeletor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skeletor.prototype.render = function () {
        var _a = this.props, component = _a.component, data = _a.data, dummy = _a.dummy, count = _a.count, props = __rest(_a, ["component", "data", "dummy", "count"]);
        var skeletorLoading = this.context.skeletorLoading;
        if (!skeletorLoading) {
            return (React.createElement("div", null, (data || []).map(function (item) { return component(item); })));
        }
        return (React.createElement("div", null, range(count).map(function (i) { return component(dummy()); })));
    };
    Skeletor.contextTypes = {
        skeletorLoading: PropTypes.bool,
    };
    return Skeletor;
}(Component));
export default function (component, data, dummy, count) {
    return (React.createElement(Skeletor, { component: component, data: data, dummy: dummy, count: count || 1 }));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2tlbGV0b3Ivc2tlbGV0b3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxPQUFPLENBQUM7QUFDdkQsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFL0I7SUFBdUIsNEJBQVM7SUFBaEM7O0lBdUJBLENBQUM7SUFsQkMseUJBQU0sR0FBTjtRQUNFLElBQU0sZUFBd0QsRUFBdEQsd0JBQVMsRUFBRSxjQUFJLEVBQUUsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLDJEQUF1QixDQUFDO1FBQ3ZELElBQUEsOENBQWUsQ0FBa0I7UUFFekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxDQUNMLGlDQUNHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBZixDQUFlLENBQUMsQ0FDdEMsQ0FDUCxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sQ0FBQyxDQUNMLGlDQUNHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUN0QyxDQUNQLENBQUM7SUFDSixDQUFDO0lBckJNLHFCQUFZLEdBQUc7UUFDcEIsZUFBZSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0tBQ2hDLENBQUM7SUFvQkosZUFBQztDQXZCRCxBQXVCQyxDQXZCc0IsU0FBUyxHQXVCL0I7QUFFRCxlQUFlLFVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSztJQUMzQyxPQUFBLENBQUMsb0JBQUMsUUFBUSxJQUNSLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FDakIsQ0FBQztBQUxILENBS0csQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3NrZWxldG9yL3NrZWxldG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnbG9kYXNoJztcblxuY2xhc3MgU2tlbGV0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHNrZWxldG9yTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50LCBkYXRhLCBkdW1teSwgY291bnQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2tlbGV0b3JMb2FkaW5nIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIXNrZWxldG9yTG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KGRhdGEgfHwgW10pLm1hcChpdGVtID0+IGNvbXBvbmVudChpdGVtKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3JhbmdlKGNvdW50KS5tYXAoaSA9PiBjb21wb25lbnQoZHVtbXkoKSkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoY29tcG9uZW50LCBkYXRhLCBkdW1teSwgY291bnQpID0+XG4gICg8U2tlbGV0b3JcbiAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cbiAgICBkYXRhPXtkYXRhfVxuICAgIGR1bW15PXtkdW1teX1cbiAgICBjb3VudD17Y291bnQgfHwgMX1cbiAgLz4pO1xuIl19

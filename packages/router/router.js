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
import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { attachHistory } from './history';
var Router = (function (_super) {
    __extends(Router, _super);
    function Router(props) {
        var _this = _super.call(this, props) || this;
        if (props.store && props.history) {
            attachHistory(props.history, props.store);
        }
        return _this;
    }
    Router.prototype.getChildContext = function () {
        var history = this.props.history;
        return {
            history: history,
        };
    };
    Router.prototype.render = function () {
        return Children.only(this.props.children);
    };
    Router.childContextTypes = {
        history: PropTypes.object,
    };
    return Router;
}(Component));
export default Router;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9yb3V0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFjLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNuRCxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUxQztJQUFvQywwQkFBUztJQUkzQyxnQkFBWSxLQUFLO1FBQWpCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBSWI7UUFIQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDOztJQUNILENBQUM7SUFDRCxnQ0FBZSxHQUFmO1FBQ1UsSUFBQSw0QkFBTyxDQUFnQjtRQUMvQixNQUFNLENBQUM7WUFDTCxPQUFPLFNBQUE7U0FDUixDQUFDO0lBQ0osQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFsQk0sd0JBQWlCLEdBQUc7UUFDekIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNO0tBQzFCLENBQUM7SUFpQkosYUFBQztDQXBCRCxBQW9CQyxDQXBCbUMsU0FBUyxHQW9CNUM7ZUFwQm9CLE1BQU0iLCJmaWxlIjoicGFja2FnZXMvcm91dGVyL3JvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGF0dGFjaEhpc3RvcnkgfSBmcm9tICcuL2hpc3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgaWYgKHByb3BzLnN0b3JlICYmIHByb3BzLmhpc3RvcnkpIHtcbiAgICAgIGF0dGFjaEhpc3RvcnkocHJvcHMuaGlzdG9yeSwgcHJvcHMuc3RvcmUpO1xuICAgIH1cbiAgfVxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICBoaXN0b3J5LFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn1cbiJdfQ==

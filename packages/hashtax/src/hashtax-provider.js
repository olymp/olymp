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
import hashtax from './hashtax';
import PropTypes from 'prop-types';
var HashtaxProvider = (function (_super) {
    __extends(HashtaxProvider, _super);
    function HashtaxProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.Hashtax = hashtax(props);
        return _this;
    }
    HashtaxProvider.prototype.shouldComponentUpdate = function (newProps) {
        this.Hashtax = hashtax(newProps);
        return true;
    };
    HashtaxProvider.prototype.getChildContext = function () {
        return {
            Hashtax: this.Hashtax,
        };
    };
    HashtaxProvider.prototype.render = function () {
        var children = this.props.children;
        return Children.only(children);
    };
    HashtaxProvider.childContextTypes = {
        Hashtax: PropTypes.func.isRequired,
    };
    return HashtaxProvider;
}(Component));
export default HashtaxProvider;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2hhc2h0YXgvc3JjL2hhc2h0YXgtcHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFjLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFDaEMsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBR25DO0lBQThCLG1DQUFTO0lBS3JDLHlCQUFZLEtBQUs7UUFBakIsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FFYjtRQURDLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUNoQyxDQUFDO0lBRUQsK0NBQXFCLEdBQXJCLFVBQXNCLFFBQVE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNVLElBQUEsOEJBQVEsQ0FBZ0I7UUFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQXZCTSxpQ0FBaUIsR0FBRztRQUN6QixPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVO0tBQ25DLENBQUM7SUFzQkosc0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QjZCLFNBQVMsR0F5QnRDO0FBQ0QsZUFBZSxlQUFlLENBQUMiLCJmaWxlIjoicGFja2FnZXMvaGFzaHRheC9zcmMvaGFzaHRheC1wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGhhc2h0YXggZnJvbSAnLi9oYXNodGF4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIEhhc2h0YXhQcm92aWRlclxuY2xhc3MgSGFzaHRheFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIEhhc2h0YXg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5IYXNodGF4ID0gaGFzaHRheChwcm9wcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV3UHJvcHMpIHtcbiAgICB0aGlzLkhhc2h0YXggPSBoYXNodGF4KG5ld1Byb3BzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgSGFzaHRheDogdGhpcy5IYXNodGF4LFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhhc2h0YXhQcm92aWRlcjtcbiJdfQ==

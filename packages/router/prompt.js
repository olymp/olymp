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
import React from 'react';
import PropTypes from 'prop-types';
var Prompt = (function (_super) {
    __extends(Prompt, _super);
    function Prompt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Prompt.prototype.enable = function (message) {
        if (this.unblock)
            this.unblock();
        this.unblock = this.context.history.block(message);
    };
    Prompt.prototype.disable = function () {
        if (this.unblock) {
            this.unblock();
            this.unblock = null;
        }
    };
    Prompt.prototype.componentWillMount = function () {
        if (this.props.when)
            this.enable(this.props.message);
    };
    Prompt.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.when) {
            if (!this.props.when || this.props.message !== nextProps.message)
                this.enable(nextProps.message);
        }
        else {
            this.disable();
        }
    };
    Prompt.prototype.componentWillUnmount = function () {
        this.disable();
    };
    Prompt.prototype.render = function () {
        return null;
    };
    Prompt.propTypes = {
        when: PropTypes.bool,
        message: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    };
    Prompt.defaultProps = {
        when: true,
    };
    Prompt.contextTypes = {
        history: PropTypes.object,
    };
    return Prompt;
}(React.Component));
export default Prompt;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9wcm9tcHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBR25DO0lBQXFCLDBCQUFlO0lBQXBDOztJQStDQSxDQUFDO0lBakNDLHVCQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsbUNBQWtCLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDBDQUF5QixHQUF6QixVQUEwQixTQUFTO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQztnQkFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUE3Q00sZ0JBQVMsR0FBRztRQUNqQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDcEIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVU7S0FDNUUsQ0FBQztJQUVLLG1CQUFZLEdBQUc7UUFDcEIsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDO0lBRUssbUJBQVksR0FBRztRQUNwQixPQUFPLEVBQUUsU0FBUyxDQUFDLE1BQU07S0FDMUIsQ0FBQztJQW1DSixhQUFDO0NBL0NELEFBK0NDLENBL0NvQixLQUFLLENBQUMsU0FBUyxHQStDbkM7QUFFRCxlQUFlLE1BQU0sQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9yb3V0ZXIvcHJvbXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5cbmNsYXNzIFByb21wdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgd2hlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgd2hlbjogdHJ1ZSxcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXG4gIH07XG5cbiAgZW5hYmxlKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy51bmJsb2NrKSB0aGlzLnVuYmxvY2soKTtcblxuICAgIHRoaXMudW5ibG9jayA9IHRoaXMuY29udGV4dC5oaXN0b3J5LmJsb2NrKG1lc3NhZ2UpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy51bmJsb2NrKSB7XG4gICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICAgIHRoaXMudW5ibG9jayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLndoZW4pIHRoaXMuZW5hYmxlKHRoaXMucHJvcHMubWVzc2FnZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMud2hlbikge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLndoZW4gfHwgdGhpcy5wcm9wcy5tZXNzYWdlICE9PSBuZXh0UHJvcHMubWVzc2FnZSlcbiAgICAgICAgdGhpcy5lbmFibGUobmV4dFByb3BzLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9tcHQ7XG4iXX0=

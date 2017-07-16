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
var HashtaxProvided = (function (_super) {
    __extends(HashtaxProvided, _super);
    function HashtaxProvided() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HashtaxProvided.prototype.render = function () {
        var Hashtax = this.context.Hashtax;
        return React.createElement(Hashtax, __assign({}, this.props));
    };
    HashtaxProvided.contextTypes = {
        Hashtax: PropTypes.func.isRequired,
    };
    return HashtaxProvided;
}(Component));
export default HashtaxProvided;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2hhc2h0YXgvc3JjL2hhc2h0YXgtcHJvdmlkZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUduQztJQUE2QyxtQ0FBUztJQUF0RDs7SUFRQSxDQUFDO0lBSkMsZ0NBQU0sR0FBTjtRQUNFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxvQkFBQyxPQUFPLGVBQUssSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFOTSw0QkFBWSxHQUFHO1FBQ3BCLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7S0FDbkMsQ0FBQztJQUtKLHNCQUFDO0NBUkQsQUFRQyxDQVI0QyxTQUFTLEdBUXJEO2VBUm9CLGVBQWUiLCJmaWxlIjoicGFja2FnZXMvaGFzaHRheC9zcmMvaGFzaHRheC1wcm92aWRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBjb25uZWN0OiBEZWNvcmF0b3IgdG8gZ2V0IHByb3BzIGZyb20gY29udGV4dCBhbmQgaW50ZXJwb2xhdGUgcHJvcHNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc2h0YXhQcm92aWRlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgSGFzaHRheDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IEhhc2h0YXggPSB0aGlzLmNvbnRleHQuSGFzaHRheDtcbiAgICByZXR1cm4gPEhhc2h0YXggey4uLnRoaXMucHJvcHN9IC8+O1xuICB9XG59XG4iXX0=

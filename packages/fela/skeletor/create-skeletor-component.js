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
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
var animation = {
    userSelect: 'none',
    animationName: {
        '0%': {
            opacity: 0.67,
        },
        '50%': {
            opacity: 0.33,
        },
        '100%': {
            opacity: 0.67,
        },
    },
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    '& *': {
        animationName: 'none',
    },
};
var fill = function (color) { return ({
    color: color + " !important",
    backgroundColor: color + " !important",
    background: color + " !important",
}); };
var createSkeletorComponent = function (styles, component, propKeys) {
    var SkeletorComponent = (function (_super) {
        __extends(SkeletorComponent, _super);
        function SkeletorComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = _this.context.skeletorColor || _this.context.theme.dark;
            _this.background = __assign({}, fill(_this.color), animation);
            _this.overlay = {
                position: 'relative',
                onBefore: __assign({ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }, fill(_this.color), animation),
            };
            _this.text = __assign({ '& h1': __assign({}, fill(_this.color)), '& h2': __assign({}, fill(_this.color)), '& h3': __assign({}, fill(_this.color)), '& h4': __assign({}, fill(_this.color)), '& h5': __assign({}, fill(_this.color)), '& h6': __assign({}, fill(_this.color)), '& p': __assign({}, fill(_this.color)), '& span': __assign({}, fill(_this.color)), '& a': __assign({}, fill(_this.color)) }, animation);
            return _this;
        }
        SkeletorComponent.prototype.render = function () {
            var _this = this;
            var _a = this.context, skeletorLoading = _a.skeletorLoading, theme = _a.theme, renderer = _a.renderer;
            return createComponent(function (p) {
                return styles(__assign({}, p, { skeletor: skeletorLoading
                        ? {
                            background: _this.background,
                            overlay: _this.overlay,
                            text: _this.text,
                            isLoading: true,
                        }
                        : {
                            background: function () { return ({}); },
                            overlay: function () { return ({}); },
                            text: function () { return ({}); },
                            isLoading: false,
                        } }));
            }, component, propKeys)(this.props, { theme: theme, renderer: renderer });
        };
        return SkeletorComponent;
    }(Component));
    SkeletorComponent.contextTypes = {
        renderer: PropTypes.object,
        theme: PropTypes.object,
        skeletorLoading: PropTypes.bool,
    };
    return SkeletorComponent;
};
export default createSkeletorComponent;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2tlbGV0b3IvY3JlYXRlLXNrZWxldG9yLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTdDLElBQU0sU0FBUyxHQUFHO0lBQ2hCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7UUFDRCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsSUFBSTtTQUNkO1FBQ0QsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLElBQUk7U0FDZDtLQUNGO0lBQ0QsaUJBQWlCLEVBQUUsTUFBTTtJQUN6Qix1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLHVCQUF1QixFQUFFLFFBQVE7SUFDakMsS0FBSyxFQUFFO1FBQ0wsYUFBYSxFQUFFLE1BQU07S0FDdEI7Q0FDRixDQUFDO0FBRUYsSUFBTSxJQUFJLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDO0lBQ3JCLEtBQUssRUFBSyxLQUFLLGdCQUFhO0lBQzVCLGVBQWUsRUFBSyxLQUFLLGdCQUFhO0lBQ3RDLFVBQVUsRUFBSyxLQUFLLGdCQUFhO0NBQ2xDLENBQUMsRUFKb0IsQ0FJcEIsQ0FBQztBQUVILElBQU0sdUJBQXVCLEdBQUcsVUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVE7SUFDMUQ7UUFBZ0MscUNBQVM7UUFBekM7WUFBQSxxRUE2RUM7WUE1RUMsV0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUU5RCxnQkFBVSxnQkFDTCxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUNoQixTQUFTLEVBQ1o7WUFFRixhQUFPLEdBQUc7Z0JBQ1IsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsYUFDTixRQUFRLEVBQUUsVUFBVSxFQUNwQixHQUFHLEVBQUUsQ0FBQyxFQUNOLEtBQUssRUFBRSxDQUFDLEVBQ1IsTUFBTSxFQUFFLENBQUMsRUFDVCxJQUFJLEVBQUUsQ0FBQyxJQUNKLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQ2hCLFNBQVMsQ0FDYjthQUNGLENBQUM7WUFFRixVQUFJLGNBQ0YsTUFBTSxlQUNELElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBRXJCLE1BQU0sZUFDRCxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUVyQixNQUFNLGVBQ0QsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FFckIsTUFBTSxlQUNELElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBRXJCLE1BQU0sZUFDRCxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUVyQixNQUFNLGVBQ0QsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FFckIsS0FBSyxlQUNBLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBRXJCLFFBQVEsZUFDSCxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUVyQixLQUFLLGVBQ0EsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FFbEIsU0FBUyxFQUNaOztRQTJCSixDQUFDO1FBekJDLGtDQUFNLEdBQU47WUFBQSxpQkF3QkM7WUF2Qk8sSUFBQSxpQkFBbUQsRUFBakQsb0NBQWUsRUFBRSxnQkFBSyxFQUFFLHNCQUFRLENBQWtCO1lBRTFELE1BQU0sQ0FBQyxlQUFlLENBQ3BCLFVBQUEsQ0FBQztnQkFDQyxPQUFBLE1BQU0sY0FDRCxDQUFDLElBQ0osUUFBUSxFQUFFLGVBQWU7MEJBQ3JCOzRCQUNFLFVBQVUsRUFBRSxLQUFJLENBQUMsVUFBVTs0QkFDM0IsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPOzRCQUNyQixJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUk7NEJBQ2YsU0FBUyxFQUFFLElBQUk7eUJBQ2hCOzBCQUNEOzRCQUNFLFVBQVUsRUFBRSxjQUFNLE9BQUEsQ0FBQyxFQUFFLENBQUMsRUFBSixDQUFJOzRCQUN0QixPQUFPLEVBQUUsY0FBTSxPQUFBLENBQUMsRUFBRSxDQUFDLEVBQUosQ0FBSTs0QkFDbkIsSUFBSSxFQUFFLGNBQU0sT0FBQSxDQUFDLEVBQUUsQ0FBQyxFQUFKLENBQUk7NEJBQ2hCLFNBQVMsRUFBRSxLQUFLO3lCQUNqQixJQUNMO1lBZkYsQ0FlRSxFQUNKLFNBQVMsRUFDVCxRQUFRLENBQ1QsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDSCx3QkFBQztJQUFELENBN0VBLEFBNkVDLENBN0UrQixTQUFTLEdBNkV4QztJQUNELGlCQUFpQixDQUFDLFlBQVksR0FBRztRQUMvQixRQUFRLEVBQUUsU0FBUyxDQUFDLE1BQU07UUFDMUIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3ZCLGVBQWUsRUFBRSxTQUFTLENBQUMsSUFBSTtLQUNoQyxDQUFDO0lBRUYsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUNGLGVBQWUsdUJBQXVCLENBQUMiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9za2VsZXRvci9jcmVhdGUtc2tlbGV0b3ItY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuY29uc3QgYW5pbWF0aW9uID0ge1xuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAnMCUnOiB7XG4gICAgICBvcGFjaXR5OiAwLjY3LFxuICAgIH0sXG4gICAgJzUwJSc6IHtcbiAgICAgIG9wYWNpdHk6IDAuMzMsXG4gICAgfSxcbiAgICAnMTAwJSc6IHtcbiAgICAgIG9wYWNpdHk6IDAuNjcsXG4gICAgfSxcbiAgfSxcbiAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjVzJyxcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgJyYgKic6IHtcbiAgICBhbmltYXRpb25OYW1lOiAnbm9uZScsIC8vIHByZXZlbnQgbmVzdGVkIGFuaW1hdGlvbnNcbiAgfSxcbn07XG5cbmNvbnN0IGZpbGwgPSBjb2xvciA9PiAoe1xuICBjb2xvcjogYCR7Y29sb3J9ICFpbXBvcnRhbnRgLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9yfSAhaW1wb3J0YW50YCxcbiAgYmFja2dyb3VuZDogYCR7Y29sb3J9ICFpbXBvcnRhbnRgLFxufSk7XG5cbmNvbnN0IGNyZWF0ZVNrZWxldG9yQ29tcG9uZW50ID0gKHN0eWxlcywgY29tcG9uZW50LCBwcm9wS2V5cykgPT4ge1xuICBjbGFzcyBTa2VsZXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29sb3IgPSB0aGlzLmNvbnRleHQuc2tlbGV0b3JDb2xvciB8fCB0aGlzLmNvbnRleHQudGhlbWUuZGFyaztcblxuICAgIGJhY2tncm91bmQgPSB7XG4gICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgLi4uYW5pbWF0aW9uLFxuICAgIH07XG5cbiAgICBvdmVybGF5ID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvbkJlZm9yZToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgICAuLi5hbmltYXRpb24sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0ZXh0ID0ge1xuICAgICAgJyYgaDEnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDInOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDMnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDQnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDUnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDYnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgcCc6IHtcbiAgICAgICAgLi4uZmlsbCh0aGlzLmNvbG9yKSxcbiAgICAgIH0sXG4gICAgICAnJiBzcGFuJzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgICcmIGEnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgLi4uYW5pbWF0aW9uLFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHNrZWxldG9yTG9hZGluZywgdGhlbWUsIHJlbmRlcmVyIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHJldHVybiBjcmVhdGVDb21wb25lbnQoXG4gICAgICAgIHAgPT5cbiAgICAgICAgICBzdHlsZXMoe1xuICAgICAgICAgICAgLi4ucCxcbiAgICAgICAgICAgIHNrZWxldG9yOiBza2VsZXRvckxvYWRpbmdcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgICBvdmVybGF5OiB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICgpID0+ICh7fSksXG4gICAgICAgICAgICAgICAgICBvdmVybGF5OiAoKSA9PiAoe30pLFxuICAgICAgICAgICAgICAgICAgdGV4dDogKCkgPT4gKHt9KSxcbiAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICBwcm9wS2V5c1xuICAgICAgKSh0aGlzLnByb3BzLCB7IHRoZW1lLCByZW5kZXJlciB9KTtcbiAgICB9XG4gIH1cbiAgU2tlbGV0b3JDb21wb25lbnQuY29udGV4dFR5cGVzID0ge1xuICAgIHJlbmRlcmVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNrZWxldG9yTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgcmV0dXJuIFNrZWxldG9yQ29tcG9uZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNrZWxldG9yQ29tcG9uZW50O1xuIl19

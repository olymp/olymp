import { createComponent } from 'react-fela';
export default createComponent(function () { return ({
    position: 'relative',
    '> .page-transition-enter': {
        opacity: 0.01,
    },
    '> .page-transition-enter-active': {
        opacity: 1,
        transition: 'opacity 600ms ease-out, transform 100ms ease-out',
    },
    '> .page-transition-appear': {
        opacity: 0.01,
    },
    '> .page-transition-appear-active': {
        opacity: 1,
        transition: 'opacity 600ms ease-out, transform 100ms ease-out',
    },
}); }, function (_a) {
    var children = _a.children, className = _a.className;
    return children;
}, []);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvcGFnZS10cmFuc2l0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTdDLGVBQWUsZUFBZSxDQUM1QixjQUFNLE9BQUEsQ0FBQztJQUNMLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLDBCQUEwQixFQUFFO1FBQzFCLE9BQU8sRUFBRSxJQUFJO0tBRWQ7SUFDRCxpQ0FBaUMsRUFBRTtRQUNqQyxPQUFPLEVBQUUsQ0FBQztRQUVWLFVBQVUsRUFBRSxrREFBa0Q7S0FDL0Q7SUFDRCwyQkFBMkIsRUFBRTtRQUMzQixPQUFPLEVBQUUsSUFBSTtLQUVkO0lBQ0Qsa0NBQWtDLEVBQUU7UUFDbEMsT0FBTyxFQUFFLENBQUM7UUFFVixVQUFVLEVBQUUsa0RBQWtEO0tBQy9EO0NBQ0YsQ0FBQyxFQXBCSSxDQW9CSixFQUNGLFVBQUMsRUFBdUI7UUFBckIsc0JBQVEsRUFBRSx3QkFBUztJQUFPLE9BQUEsUUFBUTtBQUFSLENBQVEsRUFDckMsRUFBRSxDQUNILENBQUMiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9wYWdlLXRyYW5zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICc+IC5wYWdlLXRyYW5zaXRpb24tZW50ZXInOiB7XG4gICAgICBvcGFjaXR5OiAwLjAxLFxuICAgICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LCA0MHB4LCAwcHgpJyxcbiAgICB9LFxuICAgICc+IC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlJzoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSA2MDBtcyBlYXNlLW91dCwgdHJhbnNmb3JtIDEwMG1zIGVhc2Utb3V0JyxcbiAgICB9LFxuICAgICc+IC5wYWdlLXRyYW5zaXRpb24tYXBwZWFyJzoge1xuICAgICAgb3BhY2l0eTogMC4wMSxcbiAgICAgIC8vIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwgNDBweCwgMHB4KScsXG4gICAgfSxcbiAgICAnPiAucGFnZS10cmFuc2l0aW9uLWFwcGVhci1hY3RpdmUnOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDYwMG1zIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1vdXQnLFxuICAgIH0sXG4gIH0pLFxuICAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IGNoaWxkcmVuLFxuICBbXVxuKTtcbiJdfQ==

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import Portal from 'react-portal';
import { Menu, Tooltip, Icon } from 'antd';
import { createComponent } from 'react-fela';
export var Button = createComponent(function (_a) {
    var theme = _a.theme, active = _a.active;
    return ({
        paddingX: 20,
        '> svg': {
            fill: active ? theme.light : theme.light2,
            size: 16,
            marginBottom: -4,
        },
        '> div > svg': {
            fill: active ? theme.light : theme.light2,
            size: 16,
            marginBottom: -4,
        },
    });
}, function (_a) {
    var onMouseDown = _a.onMouseDown, tooltip = _a.tooltip, children = _a.children, className = _a.className;
    return React.createElement("div", { onMouseDown: onMouseDown, className: className },
        React.createElement(Tooltip, { placement: "bottom", title: tooltip || '' }, children));
}, function (p) { return Object.keys(p); });
var Close = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'absolute!important',
        right: 0,
    });
}, function (p) { return React.createElement(Menu.Item, __assign({}, p)); }, function (p) { return Object.keys(p); });
export default createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'fixed',
        top: 0,
        zIndex: 10,
        width: '100%',
        boxShadow: 'inset 0 -10px 10px -10px #000000',
        paddingX: theme.space2,
        hasFlex: {
            justifyContent: 'center',
            display: 'flex',
        },
        '> li': {
            padding: 0,
        },
    });
}, function (props) {
    var isOpened = props.isOpened, className = props.className, children = props.children, show = props.show;
    if (!isOpened) {
        return React.createElement("div", null);
    }
    return (React.createElement(Portal, { isOpened: !!isOpened },
        React.createElement(Menu, { style: !show ? { display: 'none' } : null, selectedKeys: [], className: className, mode: "horizontal", theme: "dark" },
            children,
            React.createElement(Close, null,
                React.createElement(Icon, { type: "close" })))));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3Rvb2xiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sTUFBTSxNQUFNLGNBQWMsQ0FBQztBQUVsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU3QyxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsZUFBZSxDQUNuQyxVQUFDLEVBQWlCO1FBQWYsZ0JBQUssRUFBRSxrQkFBTTtJQUFPLE9BQUEsQ0FBQztRQUN0QixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTTtZQUN6QyxJQUFJLEVBQUUsRUFBRTtZQUNSLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDakI7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFDekMsSUFBSSxFQUFFLEVBQUU7WUFDUixZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO0tBQ0YsQ0FBQztBQVpxQixDQVlyQixFQUNGLFVBQUMsRUFBNkM7UUFBM0MsNEJBQVcsRUFBRSxvQkFBTyxFQUFFLHNCQUFRLEVBQUUsd0JBQVM7SUFDMUMsT0FBQSw2QkFBSyxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTO1FBQ2pELG9CQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxPQUFPLElBQUksRUFBRSxJQUM3QyxRQUFRLENBQ0QsQ0FDTjtBQUpOLENBSU0sRUFDUixVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUMzQixVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUFPLE9BQUEsQ0FBQztRQUNkLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsS0FBSyxFQUFFLENBQUM7S0FDVCxDQUFDO0FBSGEsQ0FHYixFQUNGLFVBQUEsQ0FBQyxJQUFJLE9BQUEsb0JBQUMsSUFBSSxDQUFDLElBQUksZUFBSyxDQUFDLEVBQUksRUFBcEIsQ0FBb0IsRUFDekIsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FDcEIsQ0FBQztBQUVGLGVBQWUsZUFBZSxDQUM1QixVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUFPLE9BQUEsQ0FBQztRQUNkLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsTUFBTTtRQUNiLFNBQVMsRUFBRSxrQ0FBa0M7UUFDN0MsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNO1FBQ3RCLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxRQUFRO1lBQ3hCLE9BQU8sRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLENBQUM7U0FDWDtLQUNGLENBQUM7QUFkYSxDQWNiLEVBQ0YsVUFBQSxLQUFLO0lBQ0ssSUFBQSx5QkFBUSxFQUFFLDJCQUFTLEVBQUUseUJBQVEsRUFBRSxpQkFBSSxDQUFXO0lBRXRELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNkLE1BQU0sQ0FBQyxnQ0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFPRCxNQUFNLENBQUMsQ0FDTCxvQkFBQyxNQUFNLElBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBQzFCLG9CQUFDLElBQUksSUFDSCxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxFQUN6QyxZQUFZLEVBQUUsRUFBRSxFQUNoQixTQUFTLEVBQUUsU0FBUyxFQUNwQixJQUFJLEVBQUMsWUFBWSxFQUNqQixLQUFLLEVBQUMsTUFBTTtZQUVYLFFBQVE7WUFDVCxvQkFBQyxLQUFLO2dCQUNKLG9CQUFDLElBQUksSUFBQyxJQUFJLEVBQUMsT0FBTyxHQUFHLENBQ2YsQ0FDSCxDQUNBLENBQ1YsQ0FBQztBQUNKLENBQUMsRUFDRCxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL3Rvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyZWFjdC1wb3J0YWwnO1xuLy8gaW1wb3J0IHsgR2F0ZXdheSB9IGZyb20gJ3JlYWN0LWdhdGV3YXknO1xuaW1wb3J0IHsgTWVudSwgVG9vbHRpcCwgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBhY3RpdmUgfSkgPT4gKHtcbiAgICBwYWRkaW5nWDogMjAsXG4gICAgJz4gc3ZnJzoge1xuICAgICAgZmlsbDogYWN0aXZlID8gdGhlbWUubGlnaHQgOiB0aGVtZS5saWdodDIsXG4gICAgICBzaXplOiAxNixcbiAgICAgIG1hcmdpbkJvdHRvbTogLTQsXG4gICAgfSxcbiAgICAnPiBkaXYgPiBzdmcnOiB7XG4gICAgICBmaWxsOiBhY3RpdmUgPyB0aGVtZS5saWdodCA6IHRoZW1lLmxpZ2h0MixcbiAgICAgIHNpemU6IDE2LFxuICAgICAgbWFyZ2luQm90dG9tOiAtNCxcbiAgICB9LFxuICB9KSxcbiAgKHsgb25Nb3VzZURvd24sIHRvb2x0aXAsIGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT5cbiAgICA8ZGl2IG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e3Rvb2x0aXAgfHwgJyd9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgPC9kaXY+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBDbG9zZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlIWltcG9ydGFudCcsXG4gICAgcmlnaHQ6IDAsXG4gIH0pLFxuICBwID0+IDxNZW51Lkl0ZW0gey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIHpJbmRleDogMTAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3hTaGFkb3c6ICdpbnNldCAwIC0xMHB4IDEwcHggLTEwcHggIzAwMDAwMCcsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMixcbiAgICBoYXNGbGV4OiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgICAnPiBsaSc6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgfSksXG4gIHByb3BzID0+IHtcbiAgICBjb25zdCB7IGlzT3BlbmVkLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBzaG93IH0gPSBwcm9wcztcblxuICAgIGlmICghaXNPcGVuZWQpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIC8qcmV0dXJuIChcbiAgICAgIDxHYXRld2F5IGludG89XCJ0b29sYmFyXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvR2F0ZXdheT5cbiAgICApOyovXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgaXNPcGVuZWQ9eyEhaXNPcGVuZWR9PlxuICAgICAgICA8TWVudVxuICAgICAgICAgIHN0eWxlPXshc2hvdyA/IHsgZGlzcGxheTogJ25vbmUnIH0gOiBudWxsfVxuICAgICAgICAgIHNlbGVjdGVkS2V5cz17W119XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPENsb3NlPlxuICAgICAgICAgICAgPEljb24gdHlwZT1cImNsb3NlXCIgLz5cbiAgICAgICAgICA8L0Nsb3NlPlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuIl19

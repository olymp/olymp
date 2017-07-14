import React from 'react';
import { Link } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import { Icon } from 'antd';
var ImgContainer = createComponent(function (_a) {
    var disabled = _a.disabled;
    return ({
        marginRight: 8,
        maxWidth: 37,
        maxHeight: 37,
        opacity: disabled ? 0.667 : 1,
        overflow: 'hidden',
        '> *': {
            margin: '0 auto',
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var Content = createComponent(function (_a) {
    var active = _a.active, disabled = _a.disabled, theme = _a.theme;
    return ({
        hasFlex: {
            display: 'flex',
            alignItems: 'center',
        },
        padding: '5px 6px',
        width: '100%',
        minHeight: 51,
        color: disabled ? theme.dark3 : theme.dark1,
        background: active && 'rgba(0, 0, 0, 0.03)',
        lineHeight: '20px',
        borderBottom: '1px solid rgb(233, 233, 233)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        '> img': {
            marginRight: 8,
            width: 37,
            height: 37,
            borderRadius: 500,
            opacity: disabled ? 0.667 : 1,
        },
        '> div': {
            hasFlex: {
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 0%',
            },
        },
        onHover: !active &&
            !disabled && {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            color: 'rgba(0, 0, 0, 0.85)',
        },
        onActive: {
            color: 'rgba(0, 0, 0, 0.85)',
        },
        onFocus: {
            color: 'rgba(0, 0, 0, 0.85)',
            boxShadow: '0 0 3px 1px rgba(63, 81, 181, 0.19)',
        },
    });
}, function (_a) {
    var image = _a.image, label = _a.label, description = _a.description, className = _a.className, disabled = _a.disabled, icon = _a.icon;
    return React.createElement("div", { className: className },
        image &&
            React.createElement(ImgContainer, null,
                image &&
                    typeof image === 'string' &&
                    React.createElement("img", { src: image, width: 37, height: 37 }),
                image && typeof image !== 'string' && image),
        React.createElement("div", null,
            React.createElement("strong", null, label),
            description),
        !disabled ? React.createElement(Icon, { type: icon || 'right' }) : null);
}, function (p) { return Object.keys(p); });
export default function (_a) {
    var className = _a.className, image = _a.image, label = _a.label, description = _a.description, to = _a.to, onClick = _a.onClick, active = _a.active, disabled = _a.disabled, icon = _a.icon;
    return onClick || disabled
        ? React.createElement("a", { className: className, href: "javascript:;", onClick: disabled ? function () { } : onClick },
            React.createElement(Content, { image: image, label: label, description: description, active: active, disabled: disabled, icon: icon }))
        : React.createElement(Link, { className: className, to: to, disabled: disabled },
            React.createElement(Content, { image: image, label: label, description: description, active: active, disabled: disabled, icon: icon }));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2xpc3QvaXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVCLElBQU0sWUFBWSxHQUFHLGVBQWUsQ0FDbEMsVUFBQyxFQUFZO1FBQVYsc0JBQVE7SUFBTyxPQUFBLENBQUM7UUFDakIsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQztRQUM3QixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtLQUNGLENBQUM7QUFUZ0IsQ0FTaEIsRUFDRixLQUFLLEVBQ0wsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FDcEIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FDN0IsVUFBQyxFQUEyQjtRQUF6QixrQkFBTSxFQUFFLHNCQUFRLEVBQUUsZ0JBQUs7SUFBTyxPQUFBLENBQUM7UUFDaEMsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsUUFBUTtTQUNyQjtRQUNELE9BQU8sRUFBRSxTQUFTO1FBQ2xCLEtBQUssRUFBRSxNQUFNO1FBQ2IsU0FBUyxFQUFFLEVBQUU7UUFDYixLQUFLLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7UUFFM0MsVUFBVSxFQUFFLE1BQU0sSUFBSSxxQkFBcUI7UUFDM0MsVUFBVSxFQUFFLE1BQU07UUFDbEIsWUFBWSxFQUFFLDhCQUE4QjtRQUM1QyxNQUFNLEVBQUUsUUFBUSxHQUFHLGFBQWEsR0FBRyxTQUFTO1FBQzVDLE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxDQUFDO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLFlBQVksRUFBRSxHQUFHO1lBQ2pCLE9BQU8sRUFBRSxRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUM7U0FDOUI7UUFDRCxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsYUFBYSxFQUFFLFFBQVE7Z0JBQ3ZCLElBQUksRUFBRSxRQUFRO2FBQ2Y7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDLE1BQU07WUFDaEIsQ0FBQyxRQUFRLElBQUk7WUFFWCxlQUFlLEVBQUUscUJBQXFCO1lBQ3RDLEtBQUssRUFBRSxxQkFBcUI7U0FDN0I7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUscUJBQXFCO1NBQzdCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixTQUFTLEVBQUUscUNBQXFDO1NBQ2pEO0tBQ0YsQ0FBQztBQXpDK0IsQ0F5Qy9CLEVBQ0YsVUFBQyxFQUF3RDtRQUF0RCxnQkFBSyxFQUFFLGdCQUFLLEVBQUUsNEJBQVcsRUFBRSx3QkFBUyxFQUFFLHNCQUFRLEVBQUUsY0FBSTtJQUNyRCxPQUFBLDZCQUFLLFNBQVMsRUFBRSxTQUFTO1FBQ3RCLEtBQUs7WUFDSixvQkFBQyxZQUFZO2dCQUNWLEtBQUs7b0JBQ0osT0FBTyxLQUFLLEtBQUssUUFBUTtvQkFDekIsNkJBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUk7Z0JBQzNDLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUMvQjtRQUNqQjtZQUNFLG9DQUNHLEtBQUssQ0FDQztZQUNSLFdBQVcsQ0FDUjtRQUVMLENBQUMsUUFBUSxHQUFHLG9CQUFDLElBQUksSUFBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLE9BQU8sR0FBSSxHQUFHLElBQUksQ0FDL0M7QUFoQk4sQ0FnQk0sRUFDUixVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDO0FBRUYsZUFBZSxVQUFDLEVBVWY7UUFUQyx3QkFBUyxFQUNULGdCQUFLLEVBQ0wsZ0JBQUssRUFDTCw0QkFBVyxFQUNYLFVBQUUsRUFDRixvQkFBTyxFQUNQLGtCQUFNLEVBQ04sc0JBQVEsRUFDUixjQUFJO0lBRUosT0FBQSxPQUFPLElBQUksUUFBUTtVQUNmLDJCQUNFLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLElBQUksRUFBQyxjQUFjLEVBQ25CLE9BQU8sRUFBRSxRQUFRLEdBQUcsY0FBTyxDQUFDLEdBQUcsT0FBTztZQUV0QyxvQkFBQyxPQUFPLElBQ04sS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLE1BQU0sRUFBRSxNQUFNLEVBQ2QsUUFBUSxFQUFFLFFBQVEsRUFDbEIsSUFBSSxFQUFFLElBQUksR0FDVixDQUNBO1VBQ0osb0JBQUMsSUFBSSxJQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUTtZQUNwRCxvQkFBQyxPQUFPLElBQ04sS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLE1BQU0sRUFBRSxNQUFNLEVBQ2QsUUFBUSxFQUFFLFFBQVEsRUFDbEIsSUFBSSxFQUFFLElBQUksR0FDVixDQUNHO0FBeEJYLENBd0JXLENBQUMiLCJmaWxlIjoicGFja2FnZXMvdWkvbGlzdC9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnYW50ZCc7XG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vY21zL2Nsb3VkaW5hcnkvaW1hZ2UnO1xuXG5jb25zdCBJbWdDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGRpc2FibGVkIH0pID0+ICh7XG4gICAgbWFyZ2luUmlnaHQ6IDgsXG4gICAgbWF4V2lkdGg6IDM3LFxuICAgIG1heEhlaWdodDogMzcsXG4gICAgb3BhY2l0eTogZGlzYWJsZWQgPyAwLjY2NyA6IDEsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICc+IConOiB7XG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgQ29udGVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgYWN0aXZlLCBkaXNhYmxlZCwgdGhlbWUgfSkgPT4gKHtcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHBhZGRpbmc6ICc1cHggNnB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogNTEsXG4gICAgY29sb3I6IGRpc2FibGVkID8gdGhlbWUuZGFyazMgOiB0aGVtZS5kYXJrMSxcbiAgICAvLyBiYWNrZ3JvdW5kOiBhY3RpdmUgPyAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjA4MykpJyA6ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjA1KSwgcmdiYSgwLCAwLCAwLCAwLjAzMykpJyxcbiAgICBiYWNrZ3JvdW5kOiBhY3RpdmUgJiYgJ3JnYmEoMCwgMCwgMCwgMC4wMyknLFxuICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpJyxcbiAgICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICAnPiBpbWcnOiB7XG4gICAgICBtYXJnaW5SaWdodDogOCxcbiAgICAgIHdpZHRoOiAzNyxcbiAgICAgIGhlaWdodDogMzcsXG4gICAgICBib3JkZXJSYWRpdXM6IDUwMCxcbiAgICAgIG9wYWNpdHk6IGRpc2FibGVkID8gMC42NjcgOiAxLFxuICAgIH0sXG4gICAgJz4gZGl2Jzoge1xuICAgICAgaGFzRmxleDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvbkhvdmVyOiAhYWN0aXZlICYmXG4gICAgIWRpc2FibGVkICYmIHtcbiAgICAgIC8vIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjA3NSksIHJnYmEoMCwgMCwgMCwgMC4wNTgpKScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDMpJyxcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXG4gICAgfSxcbiAgICBvbkFjdGl2ZToge1xuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICB9LFxuICAgIG9uRm9jdXM6IHtcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXG4gICAgICBib3hTaGFkb3c6ICcwIDAgM3B4IDFweCByZ2JhKDYzLCA4MSwgMTgxLCAwLjE5KScsXG4gICAgfSxcbiAgfSksXG4gICh7IGltYWdlLCBsYWJlbCwgZGVzY3JpcHRpb24sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGljb24gfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtpbWFnZSAmJlxuICAgICAgICA8SW1nQ29udGFpbmVyPlxuICAgICAgICAgIHtpbWFnZSAmJlxuICAgICAgICAgICAgdHlwZW9mIGltYWdlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSB3aWR0aD17Mzd9IGhlaWdodD17Mzd9IC8+fVxuICAgICAgICAgIHtpbWFnZSAmJiB0eXBlb2YgaW1hZ2UgIT09ICdzdHJpbmcnICYmIGltYWdlfVxuICAgICAgICA8L0ltZ0NvbnRhaW5lcj59XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7IWRpc2FibGVkID8gPEljb24gdHlwZT17aWNvbiB8fCAncmlnaHQnfSAvPiA6IG51bGx9XG4gICAgPC9kaXY+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBjbGFzc05hbWUsXG4gIGltYWdlLFxuICBsYWJlbCxcbiAgZGVzY3JpcHRpb24sXG4gIHRvLFxuICBvbkNsaWNrLFxuICBhY3RpdmUsXG4gIGRpc2FibGVkLFxuICBpY29uLFxufSkgPT5cbiAgb25DbGljayB8fCBkaXNhYmxlZFxuICAgID8gPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICBvbkNsaWNrPXtkaXNhYmxlZCA/ICgpID0+IHt9IDogb25DbGlja31cbiAgICAgID5cbiAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICA6IDxMaW5rIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB0bz17dG99IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgIDxDb250ZW50XG4gICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+O1xuIl19

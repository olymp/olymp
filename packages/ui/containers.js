var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { createComponent, border } from 'olymp-fela';
export var SplitView = createComponent(function (_a) {
    var theme = _a.theme, deviceWidth = _a.deviceWidth, center = _a.center, background = _a.background;
    return ({
        hasFlex: {
            display: 'flex',
            flex: '1 1 0%',
        },
        background: background === true &&
            'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
        '> :first-child': {
            flexGrow: 0,
            overflowY: 'auto',
        },
        '> :nth-child(2)': {
            flexGrow: 1,
            overflowY: 'auto',
            margin: center && '0 auto',
            borderX: center && border(theme),
            maxWidth: deviceWidth,
            maxHeight: '100%',
        },
    });
}, 'div', function (_a) {
    var deviceWidth = _a.deviceWidth, center = _a.center, background = _a.background, p = __rest(_a, ["deviceWidth", "center", "background"]);
    return Object.keys(p);
});
export var Panel = createComponent(function (_a) {
    var display = _a.display, axis = _a.axis, show = _a.show, alignLabel = _a.alignLabel, rest = __rest(_a, ["display", "axis", "show", "alignLabel"]);
    return (__assign({ position: 'relative', overflowY: 'auto', display: show === false ? 'none' : display, flexDirection: axis === 'x' ? 'row' : axis === 'y' ? 'column' : undefined, '> *': display === 'flex' && {
            overflowY: 'auto',
        } }, rest, { '& .ant-form-item': alignLabel && {
            marginBottom: 12,
            '> .ant-form-item-label': {
                textAlign: alignLabel,
            },
        } }));
}, 'div', ['children', 'itemScope', 'itemType']);
export var Container = createComponent(function (_a) {
    var theme = _a.theme, width = _a.width, padding = _a.padding, minHeight = _a.minHeight, height = _a.height;
    return ({
        width: width || 700,
        maxWidth: width || 700,
        height: height,
        minHeight: minHeight,
        boxShadow: theme.boxShadow,
        marginX: 'auto',
        padding: padding !== undefined ? padding : theme.space3,
        backgroundColor: '#FFFFFF',
        position: 'relative',
    });
}, 'div', function (_a) {
    var width = _a.width, minHeight = _a.minHeight, padding = _a.padding, p = __rest(_a, ["width", "minHeight", "padding"]);
    return Object.keys(p);
});
export var Placeholder = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        textAlign: 'center',
        fontWeight: 200,
        fontSize: '200%',
        opacity: 0.5,
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
    });
}, 'div', function (p) { return Object.keys(p); });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2NvbnRhaW5lcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFckQsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FDdEMsVUFBQyxFQUEwQztRQUF4QyxnQkFBSyxFQUFFLDRCQUFXLEVBQUUsa0JBQU0sRUFBRSwwQkFBVTtJQUFPLE9BQUEsQ0FBQztRQUMvQyxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsTUFBTTtZQUNmLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxVQUFVLEVBQ1IsVUFBVSxLQUFLLElBQUk7WUFDbkIsa0VBQWtFO1FBQ3BFLGdCQUFnQixFQUFFO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsU0FBUyxFQUFFLE1BQU07U0FDbEI7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLElBQUksUUFBUTtZQUMxQixPQUFPLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDaEMsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLE1BQU07U0FDbEI7S0FDRixDQUFDO0FBcEI4QyxDQW9COUMsRUFDRixLQUFLLEVBQ0wsVUFBQyxFQUF5QztJQUF2QyxJQUFBLDRCQUFXLEVBQUUsa0JBQU0sRUFBRSwwQkFBVSxFQUFFLHVEQUFJO0lBQU8sTUFBTSxDQUFOLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FBQSxDQUM5RCxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FDbEMsVUFBQyxFQUE0QztJQUExQyxJQUFBLG9CQUFPLEVBQUUsY0FBSSxFQUFFLGNBQUksRUFBRSwwQkFBVSxFQUFFLDREQUFPO0lBQU8sTUFDakQsQ0FEaUQsWUFDaEQsUUFBUSxFQUFFLFVBQVUsRUFFcEIsU0FBUyxFQUFFLE1BQU0sRUFDakIsT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU8sRUFDMUMsYUFBYSxFQUFFLElBQUksS0FBSyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsUUFBUSxHQUFHLFNBQVMsRUFDekUsS0FBSyxFQUFFLE9BQU8sS0FBSyxNQUFNLElBQUk7WUFDM0IsU0FBUyxFQUFFLE1BQU07U0FDbEIsSUFDRSxJQUFJLElBQ1Asa0JBQWtCLEVBQUUsVUFBVSxJQUFJO1lBRWhDLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHdCQUF3QixFQUFFO2dCQUN4QixTQUFTLEVBQUUsVUFBVTthQUN0QjtTQUNGLElBQ0QsQ0FBQTtDQUFBLEVBQ0YsS0FBSyxFQUNMLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FDdEMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQ3RDLFVBQUMsRUFBNEM7UUFBMUMsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLG9CQUFPLEVBQUUsd0JBQVMsRUFBRSxrQkFBTTtJQUFPLE9BQUEsQ0FBQztRQUNqRCxLQUFLLEVBQUUsS0FBSyxJQUFJLEdBQUc7UUFDbkIsUUFBUSxFQUFFLEtBQUssSUFBSSxHQUFHO1FBQ3RCLE1BQU0sUUFBQTtRQUNOLFNBQVMsV0FBQTtRQUNULFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUMxQixPQUFPLEVBQUUsTUFBTTtRQUNmLE9BQU8sRUFBRSxPQUFPLEtBQUssU0FBUyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTTtRQUN2RCxlQUFlLEVBQUUsU0FBUztRQUMxQixRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDO0FBVmdELENBVWhELEVBQ0YsS0FBSyxFQUNMLFVBQUMsRUFBbUM7SUFBakMsSUFBQSxnQkFBSyxFQUFFLHdCQUFTLEVBQUUsb0JBQU8sRUFBRSxpREFBSTtJQUFPLE1BQU0sQ0FBTixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQUEsQ0FDeEQsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxlQUFlLENBQ3hDLFVBQUMsRUFBUztRQUFQLGdCQUFLO0lBQU8sT0FBQSxDQUFDO1FBQ2QsU0FBUyxFQUFFLFFBQVE7UUFDbkIsVUFBVSxFQUFFLEdBQUc7UUFDZixRQUFRLEVBQUUsTUFBTTtRQUNoQixPQUFPLEVBQUUsR0FBRztRQUNaLEdBQUcsRUFBRSxLQUFLO1FBQ1YsSUFBSSxFQUFFLEtBQUs7UUFDWCxRQUFRLEVBQUUsVUFBVTtRQUNwQixTQUFTLEVBQUUsdUJBQXVCO0tBQ25DLENBQUM7QUFUYSxDQVNiLEVBQ0YsS0FBSyxFQUNMLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQ3BCLENBQUMiLCJmaWxlIjoicGFja2FnZXMvdWkvY29udGFpbmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgYm9yZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmV4cG9ydCBjb25zdCBTcGxpdFZpZXcgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBkZXZpY2VXaWR0aCwgY2VudGVyLCBiYWNrZ3JvdW5kIH0pID0+ICh7XG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleDogJzEgMSAwJScsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgYmFja2dyb3VuZCA9PT0gdHJ1ZSAmJlxuICAgICAgJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMDUpLCByZ2JhKDAsIDAsIDAsIDAuMDMzKSknLFxuICAgICc+IDpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIGZsZXhHcm93OiAwLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgfSxcbiAgICAnPiA6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIG1hcmdpbjogY2VudGVyICYmICcwIGF1dG8nLFxuICAgICAgYm9yZGVyWDogY2VudGVyICYmIGJvcmRlcih0aGVtZSksXG4gICAgICBtYXhXaWR0aDogZGV2aWNlV2lkdGgsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGRldmljZVdpZHRoLCBjZW50ZXIsIGJhY2tncm91bmQsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmV4cG9ydCBjb25zdCBQYW5lbCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgZGlzcGxheSwgYXhpcywgc2hvdywgYWxpZ25MYWJlbCwgLi4ucmVzdCB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgZGlzcGxheTogc2hvdyA9PT0gZmFsc2UgPyAnbm9uZScgOiBkaXNwbGF5LFxuICAgIGZsZXhEaXJlY3Rpb246IGF4aXMgPT09ICd4JyA/ICdyb3cnIDogYXhpcyA9PT0gJ3knID8gJ2NvbHVtbicgOiB1bmRlZmluZWQsXG4gICAgJz4gKic6IGRpc3BsYXkgPT09ICdmbGV4JyAmJiB7XG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICB9LFxuICAgIC4uLnJlc3QsXG4gICAgJyYgLmFudC1mb3JtLWl0ZW0nOiBhbGlnbkxhYmVsICYmIHtcbiAgICAgIC8vIG9vcHMsIHNob3VsZCBub3QgYmUgaGVyZSFcbiAgICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gICAgICAnPiAuYW50LWZvcm0taXRlbS1sYWJlbCc6IHtcbiAgICAgICAgdGV4dEFsaWduOiBhbGlnbkxhYmVsLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIFsnY2hpbGRyZW4nLCAnaXRlbVNjb3BlJywgJ2l0ZW1UeXBlJ11cbik7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCB3aWR0aCwgcGFkZGluZywgbWluSGVpZ2h0LCBoZWlnaHQgfSkgPT4gKHtcbiAgICB3aWR0aDogd2lkdGggfHwgNzAwLFxuICAgIG1heFdpZHRoOiB3aWR0aCB8fCA3MDAsXG4gICAgaGVpZ2h0LFxuICAgIG1pbkhlaWdodCxcbiAgICBib3hTaGFkb3c6IHRoZW1lLmJveFNoYWRvdyxcbiAgICBtYXJnaW5YOiAnYXV0bycsXG4gICAgcGFkZGluZzogcGFkZGluZyAhPT0gdW5kZWZpbmVkID8gcGFkZGluZyA6IHRoZW1lLnNwYWNlMyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSksXG4gICdkaXYnLFxuICAoeyB3aWR0aCwgbWluSGVpZ2h0LCBwYWRkaW5nLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgY29uc3QgUGxhY2Vob2xkZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250V2VpZ2h0OiAyMDAsXG4gICAgZm9udFNpemU6ICcyMDAlJyxcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICB9KSxcbiAgJ2RpdicsXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG4iXX0=

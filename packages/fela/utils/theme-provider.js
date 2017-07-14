var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { ThemeProvider as FelaThemeProvider } from 'react-fela';
var getTheme = function (theme) { return (__assign({ color: '#8e44ad', colorSecondary: '#e67e22', colorSuccess: '#2ecc71', colorInfo: '#3498db', colorWarning: '#f39c12', colorDanger: '#e74c3c', colorMuted: '#bdc3c7', light: '#FFFFFF', light1: 'rgba(255, 255, 255, 0.85)', light2: 'rgba(255, 255, 255, 0.7)', light3: 'rgba(255, 255, 255, 0.5)', light4: 'rgba(255, 255, 255, 0.12)', light5: 'rgba(255, 255, 255, 0.05)', dark: 'rgba(0, 0, 0, 0.87)', dark1: 'rgba(0, 0, 0, 0.7)', dark2: 'rgba(0, 0, 0, 0.54)', dark3: 'rgba(0, 0, 0, 0.38)', dark4: 'rgba(0, 0, 0, 0.12)', dark5: 'rgba(0, 0, 0, 0.05)', space0: 0, space1: '0.25rem', space2: '0.5rem', space3: '1rem', space4: '2rem', space5: '4rem', borderWidth: 1, borderStyle: 'solid', borderRadius: '0.25rem', borderColor: 'rgba(0, 0, 0, 0.12)', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px', innerShadow: 'inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontSize: '1rem', fontSizeSmall: '0.9rem', fontSizeH1: '1.6rem', fontSizeH2: '1.5rem', fontSizeH3: '1.4rem', fontSizeH4: '1.33rem', fontSizeH5: '1.2rem', fontSizeH6: '0.9rem' }, theme)); };
export default function (_a) {
    var children = _a.children, theme = _a.theme;
    return (React.createElement(FelaThemeProvider, { theme: getTheme(theme) }, children));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvdGhlbWUtcHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxhQUFhLElBQUksaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFaEUsSUFBTSxRQUFRLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxZQUV4QixLQUFLLEVBQUUsU0FBUyxFQUNoQixjQUFjLEVBQUUsU0FBUyxFQUN6QixZQUFZLEVBQUUsU0FBUyxFQUN2QixTQUFTLEVBQUUsU0FBUyxFQUNwQixZQUFZLEVBQUUsU0FBUyxFQUN2QixXQUFXLEVBQUUsU0FBUyxFQUN0QixVQUFVLEVBQUUsU0FBUyxFQUNyQixLQUFLLEVBQUUsU0FBUyxFQUNoQixNQUFNLEVBQUUsMkJBQTJCLEVBQ25DLE1BQU0sRUFBRSwwQkFBMEIsRUFDbEMsTUFBTSxFQUFFLDBCQUEwQixFQUNsQyxNQUFNLEVBQUUsMkJBQTJCLEVBQ25DLE1BQU0sRUFBRSwyQkFBMkIsRUFDbkMsSUFBSSxFQUFFLHFCQUFxQixFQUMzQixLQUFLLEVBQUUsb0JBQW9CLEVBQzNCLEtBQUssRUFBRSxxQkFBcUIsRUFDNUIsS0FBSyxFQUFFLHFCQUFxQixFQUM1QixLQUFLLEVBQUUscUJBQXFCLEVBQzVCLEtBQUssRUFBRSxxQkFBcUIsRUFHNUIsTUFBTSxFQUFFLENBQUMsRUFDVCxNQUFNLEVBQUUsU0FBUyxFQUNqQixNQUFNLEVBQUUsUUFBUSxFQUNoQixNQUFNLEVBQUUsTUFBTSxFQUNkLE1BQU0sRUFBRSxNQUFNLEVBQ2QsTUFBTSxFQUFFLE1BQU0sRUFHZCxXQUFXLEVBQUUsQ0FBQyxFQUNkLFdBQVcsRUFBRSxPQUFPLEVBQ3BCLFlBQVksRUFBRSxTQUFTLEVBQ3ZCLFdBQVcsRUFBRSxxQkFBcUIsRUFJbEMsU0FBUyxFQUFFLGtFQUFrRSxFQUM3RSxXQUFXLEVBQUUsNENBQTRDLEVBR3pELFVBQVUsRUFDUiw0RkFBNEYsRUFDOUYsUUFBUSxFQUFFLE1BQU0sRUFDaEIsYUFBYSxFQUFFLFFBQVEsRUFDdkIsVUFBVSxFQUFFLFFBQVEsRUFDcEIsVUFBVSxFQUFFLFFBQVEsRUFDcEIsVUFBVSxFQUFFLFFBQVEsRUFDcEIsVUFBVSxFQUFFLFNBQVMsRUFDckIsVUFBVSxFQUFFLFFBQVEsRUFDcEIsVUFBVSxFQUFFLFFBQVEsSUFDakIsS0FBSyxFQUNSLEVBckR3QixDQXFEeEIsQ0FBQztBQUVILGVBQWUsVUFBQyxFQUFtQjtRQUFqQixzQkFBUSxFQUFFLGdCQUFLO0lBQy9CLE9BQUEsQ0FBQyxvQkFBQyxpQkFBaUIsSUFBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUN2QyxRQUFRLENBQ1MsQ0FBQztBQUZyQixDQUVxQixDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvdXRpbHMvdGhlbWUtcHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBGZWxhVGhlbWVQcm92aWRlciB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5jb25zdCBnZXRUaGVtZSA9IHRoZW1lID0+ICh7XG4gIC8vIENvbG9yc1xuICBjb2xvcjogJyM4ZTQ0YWQnLFxuICBjb2xvclNlY29uZGFyeTogJyNlNjdlMjInLFxuICBjb2xvclN1Y2Nlc3M6ICcjMmVjYzcxJyxcbiAgY29sb3JJbmZvOiAnIzM0OThkYicsXG4gIGNvbG9yV2FybmluZzogJyNmMzljMTInLFxuICBjb2xvckRhbmdlcjogJyNlNzRjM2MnLFxuICBjb2xvck11dGVkOiAnI2JkYzNjNycsXG4gIGxpZ2h0OiAnI0ZGRkZGRicsXG4gIGxpZ2h0MTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSknLFxuICBsaWdodDI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICBsaWdodDM6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICBsaWdodDQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJyxcbiAgbGlnaHQ1OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KScsXG4gIGRhcms6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgZGFyazE6ICdyZ2JhKDAsIDAsIDAsIDAuNyknLFxuICBkYXJrMjogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICBkYXJrMzogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICBkYXJrNDogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICBkYXJrNTogJ3JnYmEoMCwgMCwgMCwgMC4wNSknLFxuXG4gIC8vIFNwYWNlc1xuICBzcGFjZTA6IDAsXG4gIHNwYWNlMTogJzAuMjVyZW0nLFxuICBzcGFjZTI6ICcwLjVyZW0nLFxuICBzcGFjZTM6ICcxcmVtJyxcbiAgc3BhY2U0OiAnMnJlbScsXG4gIHNwYWNlNTogJzRyZW0nLFxuXG4gIC8vIEJvcmRlcnNcbiAgYm9yZGVyV2lkdGg6IDEsXG4gIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcbiAgYm9yZGVyQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcblxuICAvLyBTaGFkb3dzXG4gIC8vIGJveFNoYWRvdzogJzBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KScsXG4gIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA0cHgnLFxuICBpbm5lclNoYWRvdzogJ2luc2V0IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KScsXG5cbiAgLy8gRm9udFxuICBmb250RmFtaWx5OlxuICAgICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmJyxcbiAgZm9udFNpemU6ICcxcmVtJyxcbiAgZm9udFNpemVTbWFsbDogJzAuOXJlbScsXG4gIGZvbnRTaXplSDE6ICcxLjZyZW0nLFxuICBmb250U2l6ZUgyOiAnMS41cmVtJyxcbiAgZm9udFNpemVIMzogJzEuNHJlbScsXG4gIGZvbnRTaXplSDQ6ICcxLjMzcmVtJyxcbiAgZm9udFNpemVINTogJzEuMnJlbScsXG4gIGZvbnRTaXplSDY6ICcwLjlyZW0nLFxuICAuLi50aGVtZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGhlbWUgfSkgPT5cbiAgKDxGZWxhVGhlbWVQcm92aWRlciB0aGVtZT17Z2V0VGhlbWUodGhlbWUpfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRmVsYVRoZW1lUHJvdmlkZXI+KTtcbiJdfQ==

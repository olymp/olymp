var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { createComponent } from 'react-fela';
export default createComponent(function (_a) {
    var theme = _a.theme, height = _a.height, size = _a.size;
    return ({
        minHeight: 30,
        height: height,
        position: 'relative',
        marginX: 'auto',
        onAfter: {
            content: '""',
            clear: 'both',
            display: 'block',
            visibility: 'hidden',
            height: 0,
        },
        ifMini: {
            width: '100%',
            paddingX: theme.space3,
        },
        ifSmallUp: {
            width: 540,
            maxWidth: '100%',
        },
        ifMediumUp: {
            width: 720,
            maxWidth: '100%',
        },
        ifLargeUp: {
            width: 960,
            maxWidth: '100%',
        },
        ifHugeUp: {
            width: 1140,
            maxWidth: '100%',
        },
        extend: [
            {
                condition: size === 'small',
                style: {
                    onAfter: {
                        content: '""',
                        clear: 'both',
                        display: 'block',
                        visibility: 'hidden',
                        height: 0,
                    },
                    ifMediumUp: {
                        width: 400,
                        maxWidth: '100%',
                    },
                    ifLargeUp: {
                        width: 520,
                        maxWidth: '100%',
                    },
                    ifHugeUp: {
                        width: 640,
                        maxWidth: '100%',
                    },
                },
            },
        ],
    });
}, 'div', function (_a) {
    var height = _a.height, p = __rest(_a, ["height"]);
    return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvY29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTdDLGVBQWUsZUFBZSxDQUM1QixVQUFDLEVBQXVCO1FBQXJCLGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxjQUFJO0lBQU8sT0FBQSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsTUFBTSxRQUFBO1FBQ04sUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLE9BQU87WUFDaEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEdBQUc7WUFDVixRQUFRLEVBQUUsTUFBTTtTQUNqQjtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsUUFBUSxFQUFFLE1BQU07U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsR0FBRztZQUNWLFFBQVEsRUFBRSxNQUFNO1NBQ2pCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLEVBQUUsTUFBTTtTQUNqQjtRQUNELE1BQU0sRUFBRTtZQUNOO2dCQUNFLFNBQVMsRUFBRSxJQUFJLEtBQUssT0FBTztnQkFDM0IsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRTt3QkFDUCxPQUFPLEVBQUUsSUFBSTt3QkFDYixLQUFLLEVBQUUsTUFBTTt3QkFDYixPQUFPLEVBQUUsT0FBTzt3QkFDaEIsVUFBVSxFQUFFLFFBQVE7d0JBQ3BCLE1BQU0sRUFBRSxDQUFDO3FCQUNWO29CQUNELFVBQVUsRUFBRTt3QkFDVixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsTUFBTTtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEtBQUssRUFBRSxHQUFHO3dCQUNWLFFBQVEsRUFBRSxNQUFNO3FCQUNqQjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLE1BQU07cUJBQ2pCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUExRDJCLENBMEQzQixFQUNGLEtBQUssRUFDTCxVQUFDLEVBQWdCO0lBQWQsSUFBQSxrQkFBTSxFQUFFLDBCQUFJO0lBQU8sTUFBTSxDQUFOLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FBQSxDQUNyQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGhlaWdodCwgc2l6ZSB9KSA9PiAoe1xuICAgIG1pbkhlaWdodDogMzAsXG4gICAgaGVpZ2h0LFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpblg6ICdhdXRvJyxcbiAgICBvbkFmdGVyOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgIH0sXG4gICAgaWZNaW5pOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICB9LFxuICAgIGlmU21hbGxVcDoge1xuICAgICAgd2lkdGg6IDU0MCxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBpZk1lZGl1bVVwOiB7XG4gICAgICB3aWR0aDogNzIwLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIGlmTGFyZ2VVcDoge1xuICAgICAgd2lkdGg6IDk2MCxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBpZkh1Z2VVcDoge1xuICAgICAgd2lkdGg6IDExNDAsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgZXh0ZW5kOiBbXG4gICAgICB7XG4gICAgICAgIGNvbmRpdGlvbjogc2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvbkFmdGVyOiB7XG4gICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWZNZWRpdW1VcDoge1xuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZkxhcmdlVXA6IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MjAsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWZIdWdlVXA6IHtcbiAgICAgICAgICAgIHdpZHRoOiA2NDAsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgaGVpZ2h0LCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuIl19

import tinycolor from 'tinycolor2';
export default function (_a) {
    var theme = _a.theme;
    var color = theme.color;
    var transparent = tinycolor(theme.color).setAlpha(0.8).toRgbString();
    var transparent2 = tinycolor(theme.color).setAlpha(0.1).toRgbString();
    var transparent3 = tinycolor(theme.color).setAlpha(0.05).toRgbString();
    return {
        '& ::selection': {
            background: color,
        },
        '& h1': {
            color: theme.dark,
        },
        '& h2': {
            color: theme.dark,
        },
        '& h3': {
            color: theme.dark,
        },
        '& h4': {
            color: theme.dark,
        },
        '& h5': {
            color: theme.dark,
        },
        '& h6': {
            color: theme.dark,
        },
        '& a': {
            color: theme.color,
        },
        '& .ant-pagination-item > a': {
            color: theme.light,
        },
        '& .ant-menu-item .anticon': {
            marginRight: 0,
        },
        '& .ant-menu-item > a > .anticon': {
            marginTop: -2,
        },
        '& .ant-menu-submenu-title .anticon': {
            marginRight: 0,
        },
        '& .ant-menu-submenu-title > span > .anticon': {
            marginTop: -2,
        },
        '& .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected': {
            backgroundColor: transparent3,
        },
        '& .ant-tree li a:hover': {
            backgroundColor: 'transparent',
        },
        '& .ant-tree li a.ant-tree-node-selected': {
            backgroundColor: 'transparent',
        },
        '& .ant-tree li > a:hover': {
            backgroundColor: transparent3,
        },
        '& .ant-tree li > a.ant-tree-node-selected': {
            backgroundColor: transparent2,
        },
        '& .ant-checkbox-inner': {
            borderColor: transparent2,
        },
        '& .ant-checkbox:hover > .ant-checkbox-inner': {
            borderColor: transparent2,
        },
        '& .ant-checkbox-checked > .ant-checkbox-inner': {
            borderColor: color,
        },
        '& .ant-radio-button-wrapper-focused': {
            color: color,
        },
        '& .ant-radio-button-wrapper-checked:first-child': {
            color: color,
            borderColor: color,
        },
        '& .ant-radio-button-wrapper-checked': {
            borderColor: color,
            color: color,
            boxShadow: "-1px 0 0 0 " + color,
        },
        '& .ant-radio-button-wrapper:hover': {
            color: color,
        },
        '& .ant-radio-checked > .ant-radio-inner': {
            borderColor: color,
            onAfter: {
                backgroundColor: color,
            },
        },
        '& .ant-radio-checked:hover > .ant-radio-inner': {
            borderColor: color,
        },
        '& .ant-btn-primary': {
            color: '#fff',
            backgroundColor: color,
            borderColor: color,
        },
        '& .ant-btn:hover': {
            color: color,
            backgroundColor: 'white',
            borderColor: color,
        },
        '& .ant-btn:focus': {
            color: color,
            backgroundColor: 'white',
            borderColor: color,
        },
        '& .ant-input:hover': {
            borderColor: transparent,
        },
        '& .ant-tabs-nav .ant-tabs-tab-active': {
            color: transparent,
        },
        '& .ant-tabs-nav .ant-tabs-tab:hover': {
            color: transparent,
        },
        '& .ant-tabs-ink-bar': {
            backgroundColor: transparent,
        },
        '& .ant-input:focus': {
            borderColor: transparent,
            outline: 0,
            boxShadow: "0 0 0 2px " + transparent2,
        },
        '& .ant-input-preSuffix-wrapper:hover .ant-input': {
            borderColor: "" + transparent,
        },
        '& .ant-menu-item > a:hover': {
            color: "" + transparent,
            textDecoration: 'none',
        },
        '& .ant-spin': {
            color: "" + transparent,
        },
        '& .ant-pagination-item-active': {
            borderColor: "" + transparent,
            backgroundColor: "" + transparent,
        },
        '& .ant-spin-dot > i': {
            backgroundColor: "" + transparent,
        },
        '& .ant-menu-horizontal > .ant-menu-submenu > a:hover': {
            color: "" + transparent,
            textDecoration: 'none',
        },
        '& .ant-menu-submenu-title:hover': {
            color: "" + transparent,
            backgroundColor: "" + transparent2,
        },
        '& .ant-menu-inline .ant-menu-selected, .ant-menu-inline .ant-menu-item-selected': {
            borderRight: "2px solid " + transparent,
        },
        '& .ant-menu > .ant-menu-item-selected': {
            color: "" + transparent,
            backgroundColor: "" + transparent2,
        },
        '& .ant-menu-item-selected > a': {
            color: "" + transparent,
        },
        '& .ant-menu-submenu-active': {
            backgroundColor: "" + transparent2,
        },
        '& .ant-menu-item:hover': {
            backgroundColor: "" + transparent2,
        },
        '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu-selected': {
            borderBottom: "2px solid " + transparent,
            color: "" + transparent,
        },
        '& .ant-menu-horizontal.ant-menu-dark > .ant-menu-submenu-selected': {
            color: "" + transparent,
            backgroundColor: "" + transparent2,
        },
        '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item-active': {
            borderBottom: "2px solid " + transparent,
            color: "" + transparent,
        },
        '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu-active': {
            borderBottom: "2px solid " + transparent,
            color: "" + transparent,
        },
        '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item-selected': {
            borderBottom: "2px solid " + transparent,
            color: "" + transparent,
        },
        '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu:hover': {
            borderBottom: "2px solid " + transparent,
            color: "" + transparent,
        },
        '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item:hover': {
            borderBottom: "2px solid " + transparent,
            color: "" + transparent,
        },
        '& .ant-table-thead > tr.ant-table-row-hover': {
            background: "" + transparent2,
        },
        '& .ant-table-tbody > tr.ant-table-row-hover': {
            background: "" + transparent2,
        },
        '& .ant-table-thead > tr:hover': {
            background: "" + transparent2,
        },
        '& .ant-table-tbody > tr:hover:not(.ant-table-expanded-row)': {
            background: "" + transparent2,
        },
    };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvYW50LXN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFFbkMsZUFBZSxVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUNyQixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZFLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hFLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRXpFLE1BQU0sQ0FBQztRQUNMLGVBQWUsRUFBRTtZQUNmLFVBQVUsRUFBRSxLQUFLO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2xCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2xCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ25CO1FBQ0QsNEJBQTRC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RSxLQUFHLFlBQWM7U0FDOUI7UUFDRCw2Q0FBNkMsRUFBRTtZQUM3QyxVQUFVLEVBQUUsS0FBRyxZQUFjO1NBQzlCO1FBQ0QsK0JBQStCLEVBQUU7WUFDL0IsVUFBVSxFQUFFLEtBQUcsWUFBYztTQUM5QjtRQUNELDREQUE0RCxFQUFFO1lBQzVELFVBQVUsRUFBRSxLQUFHLFlBQWM7U0FDOUI7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvdXRpbHMvYW50LXN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdGhlbWUgfSkgPT4ge1xuICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yO1xuICBjb25zdCB0cmFuc3BhcmVudCA9IHRpbnljb2xvcih0aGVtZS5jb2xvcikuc2V0QWxwaGEoMC44KS50b1JnYlN0cmluZygpO1xuICBjb25zdCB0cmFuc3BhcmVudDIgPSB0aW55Y29sb3IodGhlbWUuY29sb3IpLnNldEFscGhhKDAuMSkudG9SZ2JTdHJpbmcoKTtcbiAgY29uc3QgdHJhbnNwYXJlbnQzID0gdGlueWNvbG9yKHRoZW1lLmNvbG9yKS5zZXRBbHBoYSgwLjA1KS50b1JnYlN0cmluZygpO1xuXG4gIHJldHVybiB7XG4gICAgJyYgOjpzZWxlY3Rpb24nOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvcixcbiAgICB9LFxuICAgICcmIGgxJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmRhcmssXG4gICAgfSxcbiAgICAnJiBoMic6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrLFxuICAgIH0sXG4gICAgJyYgaDMnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuZGFyayxcbiAgICB9LFxuICAgICcmIGg0Jzoge1xuICAgICAgY29sb3I6IHRoZW1lLmRhcmssXG4gICAgfSxcbiAgICAnJiBoNSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrLFxuICAgIH0sXG4gICAgJyYgaDYnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuZGFyayxcbiAgICB9LFxuICAgICcmIGEnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXBhZ2luYXRpb24taXRlbSA+IGEnOiB7XG4gICAgICBjb2xvcjogdGhlbWUubGlnaHQsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaXRlbSAuYW50aWNvbic6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWl0ZW0gPiBhID4gLmFudGljb24nOiB7XG4gICAgICBtYXJnaW5Ub3A6IC0yLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUgLmFudGljb24nOiB7XG4gICAgICBtYXJnaW5SaWdodDogMCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1zdWJtZW51LXRpdGxlID4gc3BhbiA+IC5hbnRpY29uJzoge1xuICAgICAgbWFyZ2luVG9wOiAtMixcbiAgICB9LFxuICAgICcmIC5hbnQtdHJlZSBsaSAuYW50LXRyZWUtbm9kZS1jb250ZW50LXdyYXBwZXIuYW50LXRyZWUtbm9kZS1zZWxlY3RlZCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQzLFxuICAgIH0sXG4gICAgJyYgLmFudC10cmVlIGxpIGE6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSxcbiAgICAnJiAuYW50LXRyZWUgbGkgYS5hbnQtdHJlZS1ub2RlLXNlbGVjdGVkJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgJyYgLmFudC10cmVlIGxpID4gYTpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQzLFxuICAgIH0sXG4gICAgJyYgLmFudC10cmVlIGxpID4gYS5hbnQtdHJlZS1ub2RlLXNlbGVjdGVkJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudDIsXG4gICAgfSxcbiAgICAnJiAuYW50LWNoZWNrYm94LWlubmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRyYW5zcGFyZW50MixcbiAgICB9LFxuICAgICcmIC5hbnQtY2hlY2tib3g6aG92ZXIgPiAuYW50LWNoZWNrYm94LWlubmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRyYW5zcGFyZW50MixcbiAgICB9LFxuICAgICcmIC5hbnQtY2hlY2tib3gtY2hlY2tlZCA+IC5hbnQtY2hlY2tib3gtaW5uZXInOiB7XG4gICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1yYWRpby1idXR0b24td3JhcHBlci1mb2N1c2VkJzoge1xuICAgICAgY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWQ6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICBjb2xvcixcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZCc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICAgIGNvbG9yLFxuICAgICAgYm94U2hhZG93OiBgLTFweCAwIDAgMCAke2NvbG9yfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyOmhvdmVyJzoge1xuICAgICAgY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXJhZGlvLWNoZWNrZWQgPiAuYW50LXJhZGlvLWlubmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgb25BZnRlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmIC5hbnQtcmFkaW8tY2hlY2tlZDpob3ZlciA+IC5hbnQtcmFkaW8taW5uZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LWJ0bi1wcmltYXJ5Jzoge1xuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LWJ0bjpob3Zlcic6IHtcbiAgICAgIGNvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1idG46Zm9jdXMnOiB7XG4gICAgICBjb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtaW5wdXQ6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogdHJhbnNwYXJlbnQsXG4gICAgfSxcbiAgICAnJiAuYW50LXRhYnMtbmF2IC5hbnQtdGFicy10YWItYWN0aXZlJzoge1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50LFxuICAgIH0sXG4gICAgJyYgLmFudC10YWJzLW5hdiAuYW50LXRhYnMtdGFiOmhvdmVyJzoge1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50LFxuICAgIH0sXG4gICAgJyYgLmFudC10YWJzLWluay1iYXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50LFxuICAgIH0sXG4gICAgJyYgLmFudC1pbnB1dDpmb2N1cyc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0cmFuc3BhcmVudCxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggJHt0cmFuc3BhcmVudDJ9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtaW5wdXQtcHJlU3VmZml4LXdyYXBwZXI6aG92ZXIgLmFudC1pbnB1dCc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWl0ZW0gPiBhOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgJyYgLmFudC1zcGluJzoge1xuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LXBhZ2luYXRpb24taXRlbS1hY3RpdmUnOiB7XG4gICAgICBib3JkZXJDb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtc3Bpbi1kb3QgPiBpJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwgPiAuYW50LW1lbnUtc3VibWVudSA+IGE6aG92ZXInOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtc3VibWVudS10aXRsZTpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0cmFuc3BhcmVudDJ9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1pbmxpbmUgLmFudC1tZW51LXNlbGVjdGVkLCAuYW50LW1lbnUtaW5saW5lIC5hbnQtbWVudS1pdGVtLXNlbGVjdGVkJzoge1xuICAgICAgYm9yZGVyUmlnaHQ6IGAycHggc29saWQgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51ID4gLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQnOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCA+IGEnOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1zdWJtZW51LWFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaXRlbTpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1saWdodCA+IC5hbnQtbWVudS1zdWJtZW51LXNlbGVjdGVkJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwuYW50LW1lbnUtZGFyayA+IC5hbnQtbWVudS1zdWJtZW51LXNlbGVjdGVkJzoge1xuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RyYW5zcGFyZW50Mn1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwuYW50LW1lbnUtbGlnaHQgPiAuYW50LW1lbnUtaXRlbS1hY3RpdmUnOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1saWdodCA+IC5hbnQtbWVudS1zdWJtZW51LWFjdGl2ZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RyYW5zcGFyZW50fWAsXG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1ob3Jpem9udGFsLmFudC1tZW51LWxpZ2h0ID4gLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQnOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1saWdodCA+IC5hbnQtbWVudS1zdWJtZW51OmhvdmVyJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwuYW50LW1lbnUtbGlnaHQgPiAuYW50LW1lbnUtaXRlbTpob3Zlcic6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RyYW5zcGFyZW50fWAsXG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtdGFibGUtdGhlYWQgPiB0ci5hbnQtdGFibGUtcm93LWhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LXRhYmxlLXRib2R5ID4gdHIuYW50LXRhYmxlLXJvdy1ob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IGAke3RyYW5zcGFyZW50Mn1gLFxuICAgIH0sXG4gICAgJyYgLmFudC10YWJsZS10aGVhZCA+IHRyOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LXRhYmxlLXRib2R5ID4gdHI6aG92ZXI6bm90KC5hbnQtdGFibGUtZXhwYW5kZWQtcm93KSc6IHtcbiAgICAgIGJhY2tncm91bmQ6IGAke3RyYW5zcGFyZW50Mn1gLFxuICAgIH0sXG4gIH07XG59O1xuIl19

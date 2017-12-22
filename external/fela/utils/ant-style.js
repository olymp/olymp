import tinycolor from 'tinycolor2';

export default (function (_ref) {
  var theme = _ref.theme;

  var color = theme.color;
  var transparent = tinycolor(theme.color).setAlpha(0.8).toRgbString();
  var transparent2 = tinycolor(theme.color).setAlpha(0.1).toRgbString();
  var transparent3 = tinycolor(theme.color).setAlpha(0.05).toRgbString();

  return {
    '& ::selection': {
      background: color
    },
    '& .ant-menu-item svg': {
      marginBottom: -2,
      marginRight: -2
    },
    '& .ant-tree li .ant-tree-node-content-wrapper': {
      height: 'initial',
      lineHeight: 'initial'
    },
    '& .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled)': {
      borderColor: theme.color
    },
    '& .ant-input.ant-select-search__field': {
      height: 32
    },
    '& .ant-form-item-control .ant-input-suffix > svg': {
      fill: theme.dark2
    },
    '& p a': {
      color: theme.color
    },
    '& .ant-slider-dot-active': {
      borderColor: transparent
    },
    '& .ant-slider > .ant-slider-track': {
      backgroundColor: transparent
    },
    '& .ant-slider-handle': {
      borderColor: transparent
    },
    '& .ant-slider:hover .ant-slider-handle': {
      borderColor: theme.color
    },
    '& .ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active': {
      backgroundColor: transparent3
    },
    '& .ant-calendar-today-btn': {
      color: theme.color
    },
    '& a.ant-dropdown-link': {
      color: theme.color
    },
    '& .ant-calendar-selected-day > .ant-calendar-date': {
      backgroundColor: theme.color
    },
    '& .ant-input-number:focus': {
      borderColor: theme.color
    },
    '& .ant-input-number:hover': {
      borderColor: theme.color
    },
    '& .ant-time-picker-input:hover': {
      borderColor: theme.color
    },
    '& .ant-select-selection:hover': {
      borderColor: theme.color
    },
    '& .ant-select-selection:focus': {
      borderColor: theme.color
    },
    '& .ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled)': {
      borderColor: theme.color
    },
    '& .ant-select-auto-complete.ant-select input.ant-input:focus': {
      borderColor: theme.color
    },
    '& .ant-select-auto-complete.ant-select input.ant-input:hover': {
      borderColor: theme.color
    },
    '& form.ant-form.ant-form-horizontal .ant-row.ant-form-item': {
      marginBottom: 10
    },
    '& .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected': {
      backgroundColor: transparent3
    },
    '& .ant-tree li a:hover': {
      backgroundColor: 'transparent'
    },
    '& .ant-tree li a.ant-tree-node-selected': {
      backgroundColor: 'transparent'
    },
    '& .ant-tree li > a:hover': {
      backgroundColor: transparent3
    },
    '& .ant-tree li > a.ant-tree-node-selected': {
      backgroundColor: transparent2
    },
    '& .ant-checkbox-inner': {
      borderColor: transparent2
    },
    '& .ant-checkbox:hover > .ant-checkbox-inner': {
      borderColor: transparent2
    },
    '& .ant-checkbox-checked > .ant-checkbox-inner': {
      // backgroundColor: color,
      borderColor: color
    },
    '& .ant-radio-button-wrapper-focused': {
      color: color
    },
    '& .ant-radio-button-wrapper-checked:first-child': {
      color: color,
      borderColor: color
    },
    '& .ant-radio-button-wrapper-checked': {
      borderColor: color,
      color: color,
      boxShadow: '-1px 0 0 0 ' + color
    },
    '& .ant-radio-button-wrapper:hover': {
      color: color
    },
    '& .ant-radio-checked > .ant-radio-inner': {
      borderColor: color,
      onAfter: {
        backgroundColor: color
      }
    },
    '& .ant-radio-checked:hover > .ant-radio-inner': {
      borderColor: color
    },
    '& .ant-btn-primary': {
      color: '#fff',
      backgroundColor: color,
      borderColor: color
    },
    '& .ant-btn:hover': {
      color: color,
      backgroundColor: 'white',
      borderColor: color
    },
    '& .ant-btn:focus': {
      color: color,
      backgroundColor: 'white',
      borderColor: color
    },
    '& .ant-input:hover': {
      borderColor: transparent
    },
    '& .ant-tabs-nav .ant-tabs-tab-active': {
      color: transparent
    },
    '& .ant-tabs-nav .ant-tabs-tab:hover': {
      color: transparent
    },
    '& .ant-tabs-ink-bar': {
      backgroundColor: transparent
    },
    '& .ant-input:focus': {
      borderColor: transparent,
      outline: 0,
      boxShadow: '0 0 0 2px ' + transparent2
    },
    '& .ant-input-preSuffix-wrapper:hover .ant-input': {
      borderColor: '' + transparent
    },
    '& .ant-menu-item.right': {
      float: 'right'
    },
    '& .ant-menu-item > a:hover': {
      color: '' + transparent,
      textDecoration: 'none'
    },
    '& .ant-spin': {
      color: '' + transparent
    },
    '& .ant-pagination-item-active': {
      borderColor: '' + transparent,
      backgroundColor: '' + transparent
    },
    '& .ant-spin-dot > i': {
      backgroundColor: '' + transparent
    },
    '& .ant-menu-horizontal > .ant-menu-submenu > a:hover': {
      color: '' + transparent,
      textDecoration: 'none'
    },
    '& .ant-menu-submenu-title:hover': {
      color: '' + transparent,
      backgroundColor: '' + transparent2
    },
    '& .ant-menu-inline .ant-menu-selected, .ant-menu-inline .ant-menu-item-selected': {
      borderRight: '2px solid ' + transparent
    },
    '& .ant-menu > .ant-menu-item-selected': {
      color: '' + transparent,
      backgroundColor: '' + transparent2
    },
    '& .ant-menu-item-selected > a': {
      color: '' + transparent
    },
    '& .ant-menu-submenu-active': {
      backgroundColor: '' + transparent2
    },
    '& .ant-menu-item:hover': {
      backgroundColor: '' + transparent2
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu-selected': {
      borderBottom: '2px solid ' + transparent,
      color: '' + transparent
    },
    '& .ant-menu-horizontal.ant-menu-dark > .ant-menu-submenu-selected': {
      color: '' + transparent,
      backgroundColor: '' + transparent2
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item-active': {
      borderBottom: '2px solid ' + transparent,
      color: '' + transparent
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu-active': {
      borderBottom: '2px solid ' + transparent,
      color: '' + transparent
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item-selected': {
      borderBottom: '2px solid ' + transparent,
      color: '' + transparent
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu:hover': {
      borderBottom: '2px solid ' + transparent,
      color: '' + transparent
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item:hover': {
      borderBottom: '2px solid ' + transparent,
      color: '' + transparent
    },
    '& .ant-table-thead > tr.ant-table-row-hover': {
      background: '' + transparent2
    },
    '& .ant-table-tbody > tr.ant-table-row-hover': {
      background: '' + transparent2
    },
    '& .ant-table-thead > tr:hover': {
      background: '' + transparent2
    },
    '& .ant-table-tbody > tr:hover:not(.ant-table-expanded-row)': {
      background: '' + transparent2
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvYW50LXN0eWxlLmVzNiJdLCJuYW1lcyI6WyJ0aW55Y29sb3IiLCJ0aGVtZSIsImNvbG9yIiwidHJhbnNwYXJlbnQiLCJzZXRBbHBoYSIsInRvUmdiU3RyaW5nIiwidHJhbnNwYXJlbnQyIiwidHJhbnNwYXJlbnQzIiwiYmFja2dyb3VuZCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImJvcmRlckNvbG9yIiwiZmlsbCIsImRhcmsyIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Iiwib25BZnRlciIsIm91dGxpbmUiLCJmbG9hdCIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7O0FBRUEsZ0JBQWUsZ0JBQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzVCLE1BQU1DLFFBQVFELE1BQU1DLEtBQXBCO0FBQ0EsTUFBTUMsY0FBY0gsVUFBVUMsTUFBTUMsS0FBaEIsRUFDakJFLFFBRGlCLENBQ1IsR0FEUSxFQUVqQkMsV0FGaUIsRUFBcEI7QUFHQSxNQUFNQyxlQUFlTixVQUFVQyxNQUFNQyxLQUFoQixFQUNsQkUsUUFEa0IsQ0FDVCxHQURTLEVBRWxCQyxXQUZrQixFQUFyQjtBQUdBLE1BQU1FLGVBQWVQLFVBQVVDLE1BQU1DLEtBQWhCLEVBQ2xCRSxRQURrQixDQUNULElBRFMsRUFFbEJDLFdBRmtCLEVBQXJCOztBQUlBLFNBQU87QUFDTCxxQkFBaUI7QUFDZkcsa0JBQVlOO0FBREcsS0FEWjtBQUlMLDRCQUF3QjtBQUN0Qk8sb0JBQWMsQ0FBQyxDQURPO0FBRXRCQyxtQkFBYSxDQUFDO0FBRlEsS0FKbkI7QUFRTCxxREFBaUQ7QUFDL0NDLGNBQVEsU0FEdUM7QUFFL0NDLGtCQUFZO0FBRm1DLEtBUjVDO0FBWUwsNEVBQXdFO0FBQ3RFQyxtQkFBYVosTUFBTUM7QUFEbUQsS0FabkU7QUFlTCw2Q0FBeUM7QUFDdkNTLGNBQVE7QUFEK0IsS0FmcEM7QUFrQkwsd0RBQW9EO0FBQ2xERyxZQUFNYixNQUFNYztBQURzQyxLQWxCL0M7QUFxQkwsYUFBUztBQUNQYixhQUFPRCxNQUFNQztBQUROLEtBckJKO0FBd0JMLGdDQUE0QjtBQUMxQlcsbUJBQWFWO0FBRGEsS0F4QnZCO0FBMkJMLHlDQUFxQztBQUNuQ2EsdUJBQWlCYjtBQURrQixLQTNCaEM7QUE4QkwsNEJBQXdCO0FBQ3RCVSxtQkFBYVY7QUFEUyxLQTlCbkI7QUFpQ0wsOENBQTBDO0FBQ3hDVSxtQkFBYVosTUFBTUM7QUFEcUIsS0FqQ3JDO0FBb0NMLDZFQUF5RTtBQUN2RWMsdUJBQWlCVDtBQURzRCxLQXBDcEU7QUF1Q0wsaUNBQTZCO0FBQzNCTCxhQUFPRCxNQUFNQztBQURjLEtBdkN4QjtBQTBDTCw2QkFBeUI7QUFDdkJBLGFBQU9ELE1BQU1DO0FBRFUsS0ExQ3BCO0FBNkNMLHlEQUFxRDtBQUNuRGMsdUJBQWlCZixNQUFNQztBQUQ0QixLQTdDaEQ7QUFnREwsaUNBQTZCO0FBQzNCVyxtQkFBYVosTUFBTUM7QUFEUSxLQWhEeEI7QUFtREwsaUNBQTZCO0FBQzNCVyxtQkFBYVosTUFBTUM7QUFEUSxLQW5EeEI7QUFzREwsc0NBQWtDO0FBQ2hDVyxtQkFBYVosTUFBTUM7QUFEYSxLQXREN0I7QUF5REwscUNBQWlDO0FBQy9CVyxtQkFBYVosTUFBTUM7QUFEWSxLQXpENUI7QUE0REwscUNBQWlDO0FBQy9CVyxtQkFBYVosTUFBTUM7QUFEWSxLQTVENUI7QUErREwsd0ZBQW9GO0FBQ2xGVyxtQkFBYVosTUFBTUM7QUFEK0QsS0EvRC9FO0FBa0VMLG9FQUFnRTtBQUM5RFcsbUJBQWFaLE1BQU1DO0FBRDJDLEtBbEUzRDtBQXFFTCxvRUFBZ0U7QUFDOURXLG1CQUFhWixNQUFNQztBQUQyQyxLQXJFM0Q7QUF3RUwsa0VBQThEO0FBQzVETyxvQkFBYztBQUQ4QyxLQXhFekQ7QUEyRUwsNEVBQXdFO0FBQ3RFTyx1QkFBaUJUO0FBRHFELEtBM0VuRTtBQThFTCw4QkFBMEI7QUFDeEJTLHVCQUFpQjtBQURPLEtBOUVyQjtBQWlGTCwrQ0FBMkM7QUFDekNBLHVCQUFpQjtBQUR3QixLQWpGdEM7QUFvRkwsZ0NBQTRCO0FBQzFCQSx1QkFBaUJUO0FBRFMsS0FwRnZCO0FBdUZMLGlEQUE2QztBQUMzQ1MsdUJBQWlCVjtBQUQwQixLQXZGeEM7QUEwRkwsNkJBQXlCO0FBQ3ZCTyxtQkFBYVA7QUFEVSxLQTFGcEI7QUE2RkwsbURBQStDO0FBQzdDTyxtQkFBYVA7QUFEZ0MsS0E3RjFDO0FBZ0dMLHFEQUFpRDtBQUMvQztBQUNBTyxtQkFBYVg7QUFGa0MsS0FoRzVDO0FBb0dMLDJDQUF1QztBQUNyQ0E7QUFEcUMsS0FwR2xDO0FBdUdMLHVEQUFtRDtBQUNqREEsa0JBRGlEO0FBRWpEVyxtQkFBYVg7QUFGb0MsS0F2RzlDO0FBMkdMLDJDQUF1QztBQUNyQ1csbUJBQWFYLEtBRHdCO0FBRXJDQSxrQkFGcUM7QUFHckNlLGlDQUF5QmY7QUFIWSxLQTNHbEM7QUFnSEwseUNBQXFDO0FBQ25DQTtBQURtQyxLQWhIaEM7QUFtSEwsK0NBQTJDO0FBQ3pDVyxtQkFBYVgsS0FENEI7QUFFekNnQixlQUFTO0FBQ1BGLHlCQUFpQmQ7QUFEVjtBQUZnQyxLQW5IdEM7QUF5SEwscURBQWlEO0FBQy9DVyxtQkFBYVg7QUFEa0MsS0F6SDVDO0FBNEhMLDBCQUFzQjtBQUNwQkEsYUFBTyxNQURhO0FBRXBCYyx1QkFBaUJkLEtBRkc7QUFHcEJXLG1CQUFhWDtBQUhPLEtBNUhqQjtBQWlJTCx3QkFBb0I7QUFDbEJBLGtCQURrQjtBQUVsQmMsdUJBQWlCLE9BRkM7QUFHbEJILG1CQUFhWDtBQUhLLEtBaklmO0FBc0lMLHdCQUFvQjtBQUNsQkEsa0JBRGtCO0FBRWxCYyx1QkFBaUIsT0FGQztBQUdsQkgsbUJBQWFYO0FBSEssS0F0SWY7QUEySUwsMEJBQXNCO0FBQ3BCVyxtQkFBYVY7QUFETyxLQTNJakI7QUE4SUwsNENBQXdDO0FBQ3RDRCxhQUFPQztBQUQrQixLQTlJbkM7QUFpSkwsMkNBQXVDO0FBQ3JDRCxhQUFPQztBQUQ4QixLQWpKbEM7QUFvSkwsMkJBQXVCO0FBQ3JCYSx1QkFBaUJiO0FBREksS0FwSmxCO0FBdUpMLDBCQUFzQjtBQUNwQlUsbUJBQWFWLFdBRE87QUFFcEJnQixlQUFTLENBRlc7QUFHcEJGLGdDQUF3Qlg7QUFISixLQXZKakI7QUE0SkwsdURBQW1EO0FBQ2pETyx3QkFBZ0JWO0FBRGlDLEtBNUo5QztBQStKTCw4QkFBMEI7QUFDeEJpQixhQUFPO0FBRGlCLEtBL0pyQjtBQWtLTCxrQ0FBOEI7QUFDNUJsQixrQkFBVUMsV0FEa0I7QUFFNUJrQixzQkFBZ0I7QUFGWSxLQWxLekI7QUFzS0wsbUJBQWU7QUFDYm5CLGtCQUFVQztBQURHLEtBdEtWO0FBeUtMLHFDQUFpQztBQUMvQlUsd0JBQWdCVixXQURlO0FBRS9CYSw0QkFBb0JiO0FBRlcsS0F6SzVCO0FBNktMLDJCQUF1QjtBQUNyQmEsNEJBQW9CYjtBQURDLEtBN0tsQjtBQWdMTCw0REFBd0Q7QUFDdERELGtCQUFVQyxXQUQ0QztBQUV0RGtCLHNCQUFnQjtBQUZzQyxLQWhMbkQ7QUFvTEwsdUNBQW1DO0FBQ2pDbkIsa0JBQVVDLFdBRHVCO0FBRWpDYSw0QkFBb0JWO0FBRmEsS0FwTDlCO0FBd0xMLHVGQUFtRjtBQUNqRmdCLGtDQUEwQm5CO0FBRHVELEtBeEw5RTtBQTJMTCw2Q0FBeUM7QUFDdkNELGtCQUFVQyxXQUQ2QjtBQUV2Q2EsNEJBQW9CVjtBQUZtQixLQTNMcEM7QUErTEwscUNBQWlDO0FBQy9CSixrQkFBVUM7QUFEcUIsS0EvTDVCO0FBa01MLGtDQUE4QjtBQUM1QmEsNEJBQW9CVjtBQURRLEtBbE16QjtBQXFNTCw4QkFBMEI7QUFDeEJVLDRCQUFvQlY7QUFESSxLQXJNckI7QUF3TUwsMEVBQXNFO0FBQ3BFaUIsbUNBQTJCcEIsV0FEeUM7QUFFcEVELGtCQUFVQztBQUYwRCxLQXhNakU7QUE0TUwseUVBQXFFO0FBQ25FRCxrQkFBVUMsV0FEeUQ7QUFFbkVhLDRCQUFvQlY7QUFGK0MsS0E1TWhFO0FBZ05MLHFFQUFpRTtBQUMvRGlCLG1DQUEyQnBCLFdBRG9DO0FBRS9ERCxrQkFBVUM7QUFGcUQsS0FoTjVEO0FBb05MLHdFQUFvRTtBQUNsRW9CLG1DQUEyQnBCLFdBRHVDO0FBRWxFRCxrQkFBVUM7QUFGd0QsS0FwTi9EO0FBd05MLHVFQUFtRTtBQUNqRW9CLG1DQUEyQnBCLFdBRHNDO0FBRWpFRCxrQkFBVUM7QUFGdUQsS0F4TjlEO0FBNE5MLHVFQUFtRTtBQUNqRW9CLG1DQUEyQnBCLFdBRHNDO0FBRWpFRCxrQkFBVUM7QUFGdUQsS0E1TjlEO0FBZ09MLG9FQUFnRTtBQUM5RG9CLG1DQUEyQnBCLFdBRG1DO0FBRTlERCxrQkFBVUM7QUFGb0QsS0FoTzNEO0FBb09MLG1EQUErQztBQUM3Q0ssdUJBQWVGO0FBRDhCLEtBcE8xQztBQXVPTCxtREFBK0M7QUFDN0NFLHVCQUFlRjtBQUQ4QixLQXZPMUM7QUEwT0wscUNBQWlDO0FBQy9CRSx1QkFBZUY7QUFEZ0IsS0ExTzVCO0FBNk9MLGtFQUE4RDtBQUM1REUsdUJBQWVGO0FBRDZDO0FBN096RCxHQUFQO0FBaVBELENBN1BEIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvdXRpbHMvYW50LXN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdGhlbWUgfSkgPT4ge1xuICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yO1xuICBjb25zdCB0cmFuc3BhcmVudCA9IHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAuc2V0QWxwaGEoMC44KVxuICAgIC50b1JnYlN0cmluZygpO1xuICBjb25zdCB0cmFuc3BhcmVudDIgPSB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgLnNldEFscGhhKDAuMSlcbiAgICAudG9SZ2JTdHJpbmcoKTtcbiAgY29uc3QgdHJhbnNwYXJlbnQzID0gdGlueWNvbG9yKHRoZW1lLmNvbG9yKVxuICAgIC5zZXRBbHBoYSgwLjA1KVxuICAgIC50b1JnYlN0cmluZygpO1xuXG4gIHJldHVybiB7XG4gICAgJyYgOjpzZWxlY3Rpb24nOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1pdGVtIHN2Zyc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogLTIsXG4gICAgICBtYXJnaW5SaWdodDogLTIsXG4gICAgfSxcbiAgICAnJiAuYW50LXRyZWUgbGkgLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyJzoge1xuICAgICAgaGVpZ2h0OiAnaW5pdGlhbCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnaW5pdGlhbCcsXG4gICAgfSxcbiAgICAnJiAuYW50LWlucHV0LWFmZml4LXdyYXBwZXI6aG92ZXIgLmFudC1pbnB1dDpub3QoLmFudC1pbnB1dC1kaXNhYmxlZCknOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LWlucHV0LmFudC1zZWxlY3Qtc2VhcmNoX19maWVsZCc6IHtcbiAgICAgIGhlaWdodDogMzIsXG4gICAgfSxcbiAgICAnJiAuYW50LWZvcm0taXRlbS1jb250cm9sIC5hbnQtaW5wdXQtc3VmZml4ID4gc3ZnJzoge1xuICAgICAgZmlsbDogdGhlbWUuZGFyazIsXG4gICAgfSxcbiAgICAnJiBwIGEnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXNsaWRlci1kb3QtYWN0aXZlJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRyYW5zcGFyZW50LFxuICAgIH0sXG4gICAgJyYgLmFudC1zbGlkZXIgPiAuYW50LXNsaWRlci10cmFjayc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQsXG4gICAgfSxcbiAgICAnJiAuYW50LXNsaWRlci1oYW5kbGUnOiB7XG4gICAgICBib3JkZXJDb2xvcjogdHJhbnNwYXJlbnQsXG4gICAgfSxcbiAgICAnJiAuYW50LXNsaWRlcjpob3ZlciAuYW50LXNsaWRlci1oYW5kbGUnOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0uYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudDMsXG4gICAgfSxcbiAgICAnJiAuYW50LWNhbGVuZGFyLXRvZGF5LWJ0bic6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIGEuYW50LWRyb3Bkb3duLWxpbmsnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LWNhbGVuZGFyLXNlbGVjdGVkLWRheSA+IC5hbnQtY2FsZW5kYXItZGF0ZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LWlucHV0LW51bWJlcjpmb2N1cyc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtaW5wdXQtbnVtYmVyOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC10aW1lLXBpY2tlci1pbnB1dDpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtc2VsZWN0LXNlbGVjdGlvbjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtc2VsZWN0LXNlbGVjdGlvbjpmb2N1cyc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtY2FsZW5kYXItcGlja2VyOmhvdmVyIC5hbnQtY2FsZW5kYXItcGlja2VyLWlucHV0Om5vdCguYW50LWlucHV0LWRpc2FibGVkKSc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGUuYW50LXNlbGVjdCBpbnB1dC5hbnQtaW5wdXQ6Zm9jdXMnOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlLmFudC1zZWxlY3QgaW5wdXQuYW50LWlucHV0OmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJyYgZm9ybS5hbnQtZm9ybS5hbnQtZm9ybS1ob3Jpem9udGFsIC5hbnQtcm93LmFudC1mb3JtLWl0ZW0nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIH0sXG4gICAgJyYgLmFudC10cmVlIGxpIC5hbnQtdHJlZS1ub2RlLWNvbnRlbnQtd3JhcHBlci5hbnQtdHJlZS1ub2RlLXNlbGVjdGVkJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudDMsXG4gICAgfSxcbiAgICAnJiAuYW50LXRyZWUgbGkgYTpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB9LFxuICAgICcmIC5hbnQtdHJlZSBsaSBhLmFudC10cmVlLW5vZGUtc2VsZWN0ZWQnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgfSxcbiAgICAnJiAuYW50LXRyZWUgbGkgPiBhOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudDMsXG4gICAgfSxcbiAgICAnJiAuYW50LXRyZWUgbGkgPiBhLmFudC10cmVlLW5vZGUtc2VsZWN0ZWQnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50MixcbiAgICB9LFxuICAgICcmIC5hbnQtY2hlY2tib3gtaW5uZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogdHJhbnNwYXJlbnQyLFxuICAgIH0sXG4gICAgJyYgLmFudC1jaGVja2JveDpob3ZlciA+IC5hbnQtY2hlY2tib3gtaW5uZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogdHJhbnNwYXJlbnQyLFxuICAgIH0sXG4gICAgJyYgLmFudC1jaGVja2JveC1jaGVja2VkID4gLmFudC1jaGVja2JveC1pbm5lcic6IHtcbiAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWZvY3VzZWQnOiB7XG4gICAgICBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZDpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIGNvbG9yLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgY29sb3IsXG4gICAgICBib3hTaGFkb3c6IGAtMXB4IDAgMCAwICR7Y29sb3J9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXI6aG92ZXInOiB7XG4gICAgICBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtcmFkaW8tY2hlY2tlZCA+IC5hbnQtcmFkaW8taW5uZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgICBvbkFmdGVyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYgLmFudC1yYWRpby1jaGVja2VkOmhvdmVyID4gLmFudC1yYWRpby1pbm5lcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtYnRuLXByaW1hcnknOiB7XG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtYnRuOmhvdmVyJzoge1xuICAgICAgY29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LWJ0bjpmb2N1cyc6IHtcbiAgICAgIGNvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1pbnB1dDpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0cmFuc3BhcmVudCxcbiAgICB9LFxuICAgICcmIC5hbnQtdGFicy1uYXYgLmFudC10YWJzLXRhYi1hY3RpdmUnOiB7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQsXG4gICAgfSxcbiAgICAnJiAuYW50LXRhYnMtbmF2IC5hbnQtdGFicy10YWI6aG92ZXInOiB7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQsXG4gICAgfSxcbiAgICAnJiAuYW50LXRhYnMtaW5rLWJhcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQsXG4gICAgfSxcbiAgICAnJiAuYW50LWlucHV0OmZvY3VzJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRyYW5zcGFyZW50LFxuICAgICAgb3V0bGluZTogMCxcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3RyYW5zcGFyZW50Mn1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1pbnB1dC1wcmVTdWZmaXgtd3JhcHBlcjpob3ZlciAuYW50LWlucHV0Jzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaXRlbS5yaWdodCc6IHtcbiAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWl0ZW0gPiBhOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgJyYgLmFudC1zcGluJzoge1xuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LXBhZ2luYXRpb24taXRlbS1hY3RpdmUnOiB7XG4gICAgICBib3JkZXJDb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtc3Bpbi1kb3QgPiBpJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwgPiAuYW50LW1lbnUtc3VibWVudSA+IGE6aG92ZXInOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtc3VibWVudS10aXRsZTpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0cmFuc3BhcmVudDJ9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1pbmxpbmUgLmFudC1tZW51LXNlbGVjdGVkLCAuYW50LW1lbnUtaW5saW5lIC5hbnQtbWVudS1pdGVtLXNlbGVjdGVkJzoge1xuICAgICAgYm9yZGVyUmlnaHQ6IGAycHggc29saWQgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51ID4gLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQnOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCA+IGEnOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1zdWJtZW51LWFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaXRlbTpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1saWdodCA+IC5hbnQtbWVudS1zdWJtZW51LXNlbGVjdGVkJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwuYW50LW1lbnUtZGFyayA+IC5hbnQtbWVudS1zdWJtZW51LXNlbGVjdGVkJzoge1xuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RyYW5zcGFyZW50Mn1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwuYW50LW1lbnUtbGlnaHQgPiAuYW50LW1lbnUtaXRlbS1hY3RpdmUnOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1saWdodCA+IC5hbnQtbWVudS1zdWJtZW51LWFjdGl2ZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RyYW5zcGFyZW50fWAsXG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1ob3Jpem9udGFsLmFudC1tZW51LWxpZ2h0ID4gLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQnOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1saWdodCA+IC5hbnQtbWVudS1zdWJtZW51OmhvdmVyJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwuYW50LW1lbnUtbGlnaHQgPiAuYW50LW1lbnUtaXRlbTpob3Zlcic6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RyYW5zcGFyZW50fWAsXG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtdGFibGUtdGhlYWQgPiB0ci5hbnQtdGFibGUtcm93LWhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LXRhYmxlLXRib2R5ID4gdHIuYW50LXRhYmxlLXJvdy1ob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IGAke3RyYW5zcGFyZW50Mn1gLFxuICAgIH0sXG4gICAgJyYgLmFudC10YWJsZS10aGVhZCA+IHRyOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LXRhYmxlLXRib2R5ID4gdHI6aG92ZXI6bm90KC5hbnQtdGFibGUtZXhwYW5kZWQtcm93KSc6IHtcbiAgICAgIGJhY2tncm91bmQ6IGAke3RyYW5zcGFyZW50Mn1gLFxuICAgIH0sXG4gIH07XG59O1xuIl19

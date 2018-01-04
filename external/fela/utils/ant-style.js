'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var theme = _ref.theme;

  var color = theme.color;
  var transparent = (0, _tinycolor2.default)(theme.color).setAlpha(0.8).toRgbString();
  var transparent2 = (0, _tinycolor2.default)(theme.color).setAlpha(0.1).toRgbString();
  var transparent3 = (0, _tinycolor2.default)(theme.color).setAlpha(0.05).toRgbString();

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
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvdXRpbHMvYW50LXN0eWxlLmVzNiJdLCJuYW1lcyI6WyJ0aGVtZSIsImNvbG9yIiwidHJhbnNwYXJlbnQiLCJzZXRBbHBoYSIsInRvUmdiU3RyaW5nIiwidHJhbnNwYXJlbnQyIiwidHJhbnNwYXJlbnQzIiwiYmFja2dyb3VuZCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImJvcmRlckNvbG9yIiwiZmlsbCIsImRhcmsyIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93Iiwib25BZnRlciIsIm91dGxpbmUiLCJmbG9hdCIsInRleHREZWNvcmF0aW9uIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWUsZ0JBQWU7QUFBQSxNQUFaQSxLQUFZLFFBQVpBLEtBQVk7O0FBQzVCLE1BQU1DLFFBQVFELE1BQU1DLEtBQXBCO0FBQ0EsTUFBTUMsY0FBYyx5QkFBVUYsTUFBTUMsS0FBaEIsRUFDakJFLFFBRGlCLENBQ1IsR0FEUSxFQUVqQkMsV0FGaUIsRUFBcEI7QUFHQSxNQUFNQyxlQUFlLHlCQUFVTCxNQUFNQyxLQUFoQixFQUNsQkUsUUFEa0IsQ0FDVCxHQURTLEVBRWxCQyxXQUZrQixFQUFyQjtBQUdBLE1BQU1FLGVBQWUseUJBQVVOLE1BQU1DLEtBQWhCLEVBQ2xCRSxRQURrQixDQUNULElBRFMsRUFFbEJDLFdBRmtCLEVBQXJCOztBQUlBLFNBQU87QUFDTCxxQkFBaUI7QUFDZkcsa0JBQVlOO0FBREcsS0FEWjtBQUlMLDRCQUF3QjtBQUN0Qk8sb0JBQWMsQ0FBQyxDQURPO0FBRXRCQyxtQkFBYSxDQUFDO0FBRlEsS0FKbkI7QUFRTCxxREFBaUQ7QUFDL0NDLGNBQVEsU0FEdUM7QUFFL0NDLGtCQUFZO0FBRm1DLEtBUjVDO0FBWUwsNEVBQXdFO0FBQ3RFQyxtQkFBYVosTUFBTUM7QUFEbUQsS0FabkU7QUFlTCw2Q0FB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QUFpRTtBQUMvRGlCLG1DQUEyQnBCLFdBRG9DO0FBRS9ERCxrQkFBVUM7QUFGcUQsS0FoTjVEO0FBb05MLHdFQUFvRTtBQUNsRW9CLG1DQUEyQnBCLFdBRHVDO0FBRWxFRCxrQkFBVUM7QUFGd0QsS0FwTi9EO0FBd05MLHVFQUFtRTtBQUNqRW9CLG1DQUEyQnBCLFdBRHNDO0FBRWpFRCxrQkFBVUM7QUFGdUQsS0F4TjlEO0FBNE5MLHVFQUFtRTtBQUNqRW9CLG1DQUEyQnBCLFdBRHNDO0FBRWpFRCxrQkFBVUM7QUFGdUQsS0E1TjlEO0FBZ09MLG9FQUFnRTtBQUM5RG9CLG1DQUEyQnBCLFdBRG1DO0FBRTlERCxrQkFBVUM7QUFGb0QsS0FoTzNEO0FBb09MLG1EQUErQztBQUM3Q0ssdUJBQWVGO0FBRDhCLEtBcE8xQztBQXVPTCxtREFBK0M7QUFDN0NFLHVCQUFlRjtBQUQ4QixLQXZPMUM7QUEwT0wscUNBQWlDO0FBQy9CRSx1QkFBZUY7QUFEZ0IsS0ExTzVCO0FBNk9MLGtFQUE4RDtBQUM1REUsdUJBQWVGO0FBRDZDO0FBN096RCxHQUFQO0FBaVBELEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS91dGlscy9hbnQtc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0aGVtZSB9KSA9PiB7XG4gIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3I7XG4gIGNvbnN0IHRyYW5zcGFyZW50ID0gdGlueWNvbG9yKHRoZW1lLmNvbG9yKVxuICAgIC5zZXRBbHBoYSgwLjgpXG4gICAgLnRvUmdiU3RyaW5nKCk7XG4gIGNvbnN0IHRyYW5zcGFyZW50MiA9IHRpbnljb2xvcih0aGVtZS5jb2xvcilcbiAgICAuc2V0QWxwaGEoMC4xKVxuICAgIC50b1JnYlN0cmluZygpO1xuICBjb25zdCB0cmFuc3BhcmVudDMgPSB0aW55Y29sb3IodGhlbWUuY29sb3IpXG4gICAgLnNldEFscGhhKDAuMDUpXG4gICAgLnRvUmdiU3RyaW5nKCk7XG5cbiAgcmV0dXJuIHtcbiAgICAnJiA6OnNlbGVjdGlvbic6IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWl0ZW0gc3ZnJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAtMixcbiAgICAgIG1hcmdpblJpZ2h0OiAtMixcbiAgICB9LFxuICAgICcmIC5hbnQtdHJlZSBsaSAuYW50LXRyZWUtbm9kZS1jb250ZW50LXdyYXBwZXInOiB7XG4gICAgICBoZWlnaHQ6ICdpbml0aWFsJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdpbml0aWFsJyxcbiAgICB9LFxuICAgICcmIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcjpob3ZlciAuYW50LWlucHV0Om5vdCguYW50LWlucHV0LWRpc2FibGVkKSc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtaW5wdXQuYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkJzoge1xuICAgICAgaGVpZ2h0OiAzMixcbiAgICB9LFxuICAgICcmIC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wgLmFudC1pbnB1dC1zdWZmaXggPiBzdmcnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5kYXJrMixcbiAgICB9LFxuICAgICcmIHAgYSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtc2xpZGVyLWRvdC1hY3RpdmUnOiB7XG4gICAgICBib3JkZXJDb2xvcjogdHJhbnNwYXJlbnQsXG4gICAgfSxcbiAgICAnJiAuYW50LXNsaWRlciA+IC5hbnQtc2xpZGVyLXRyYWNrJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudCxcbiAgICB9LFxuICAgICcmIC5hbnQtc2xpZGVyLWhhbmRsZSc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0cmFuc3BhcmVudCxcbiAgICB9LFxuICAgICcmIC5hbnQtc2xpZGVyOmhvdmVyIC5hbnQtc2xpZGVyLWhhbmRsZSc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1hY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50MyxcbiAgICB9LFxuICAgICcmIC5hbnQtY2FsZW5kYXItdG9kYXktYnRuJzoge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJyYgYS5hbnQtZHJvcGRvd24tbGluayc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtY2FsZW5kYXItc2VsZWN0ZWQtZGF5ID4gLmFudC1jYWxlbmRhci1kYXRlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtaW5wdXQtbnVtYmVyOmZvY3VzJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1pbnB1dC1udW1iZXI6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXRpbWUtcGlja2VyLWlucHV0OmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1zZWxlY3Qtc2VsZWN0aW9uOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1zZWxlY3Qtc2VsZWN0aW9uOmZvY3VzJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1jYWxlbmRhci1waWNrZXI6aG92ZXIgLmFudC1jYWxlbmRhci1waWNrZXItaW5wdXQ6bm90KC5hbnQtaW5wdXQtZGlzYWJsZWQpJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZS5hbnQtc2VsZWN0IGlucHV0LmFudC1pbnB1dDpmb2N1cyc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGUuYW50LXNlbGVjdCBpbnB1dC5hbnQtaW5wdXQ6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgfSxcbiAgICAnJiBmb3JtLmFudC1mb3JtLmFudC1mb3JtLWhvcml6b250YWwgLmFudC1yb3cuYW50LWZvcm0taXRlbSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgfSxcbiAgICAnJiAuYW50LXRyZWUgbGkgLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyLmFudC10cmVlLW5vZGUtc2VsZWN0ZWQnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50MyxcbiAgICB9LFxuICAgICcmIC5hbnQtdHJlZSBsaSBhOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgJyYgLmFudC10cmVlIGxpIGEuYW50LXRyZWUtbm9kZS1zZWxlY3RlZCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB9LFxuICAgICcmIC5hbnQtdHJlZSBsaSA+IGE6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50MyxcbiAgICB9LFxuICAgICcmIC5hbnQtdHJlZSBsaSA+IGEuYW50LXRyZWUtbm9kZS1zZWxlY3RlZCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQyLFxuICAgIH0sXG4gICAgJyYgLmFudC1jaGVja2JveC1pbm5lcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0cmFuc3BhcmVudDIsXG4gICAgfSxcbiAgICAnJiAuYW50LWNoZWNrYm94OmhvdmVyID4gLmFudC1jaGVja2JveC1pbm5lcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiB0cmFuc3BhcmVudDIsXG4gICAgfSxcbiAgICAnJiAuYW50LWNoZWNrYm94LWNoZWNrZWQgPiAuYW50LWNoZWNrYm94LWlubmVyJzoge1xuICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZm9jdXNlZCc6IHtcbiAgICAgIGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkOmZpcnN0LWNoaWxkJzoge1xuICAgICAgY29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWQnOiB7XG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgICBjb2xvcixcbiAgICAgIGJveFNoYWRvdzogYC0xcHggMCAwIDAgJHtjb2xvcn1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1yYWRpby1idXR0b24td3JhcHBlcjpob3Zlcic6IHtcbiAgICAgIGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1yYWRpby1jaGVja2VkID4gLmFudC1yYWRpby1pbm5lcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICAgIG9uQWZ0ZXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJiAuYW50LXJhZGlvLWNoZWNrZWQ6aG92ZXIgPiAuYW50LXJhZGlvLWlubmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1idG4tcHJpbWFyeSc6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIH0sXG4gICAgJyYgLmFudC1idG46aG92ZXInOiB7XG4gICAgICBjb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICB9LFxuICAgICcmIC5hbnQtYnRuOmZvY3VzJzoge1xuICAgICAgY29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgfSxcbiAgICAnJiAuYW50LWlucHV0OmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IHRyYW5zcGFyZW50LFxuICAgIH0sXG4gICAgJyYgLmFudC10YWJzLW5hdiAuYW50LXRhYnMtdGFiLWFjdGl2ZSc6IHtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudCxcbiAgICB9LFxuICAgICcmIC5hbnQtdGFicy1uYXYgLmFudC10YWJzLXRhYjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudCxcbiAgICB9LFxuICAgICcmIC5hbnQtdGFicy1pbmstYmFyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0cmFuc3BhcmVudCxcbiAgICB9LFxuICAgICcmIC5hbnQtaW5wdXQ6Zm9jdXMnOiB7XG4gICAgICBib3JkZXJDb2xvcjogdHJhbnNwYXJlbnQsXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LWlucHV0LXByZVN1ZmZpeC13cmFwcGVyOmhvdmVyIC5hbnQtaW5wdXQnOiB7XG4gICAgICBib3JkZXJDb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1pdGVtLnJpZ2h0Jzoge1xuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaXRlbSA+IGE6aG92ZXInOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgfSxcbiAgICAnJiAuYW50LXNwaW4nOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWFjdGl2ZSc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1zcGluLWRvdCA+IGknOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbCA+IC5hbnQtbWVudS1zdWJtZW51ID4gYTpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1zdWJtZW51LXRpdGxlOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RyYW5zcGFyZW50Mn1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWlubGluZSAuYW50LW1lbnUtc2VsZWN0ZWQsIC5hbnQtbWVudS1pbmxpbmUgLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQnOiB7XG4gICAgICBib3JkZXJSaWdodDogYDJweCBzb2xpZCAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUgPiAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCc6IHtcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0cmFuc3BhcmVudDJ9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1pdGVtLXNlbGVjdGVkID4gYSc6IHtcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LXN1Ym1lbnUtYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0cmFuc3BhcmVudDJ9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1pdGVtOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0cmFuc3BhcmVudDJ9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1ob3Jpem9udGFsLmFudC1tZW51LWxpZ2h0ID4gLmFudC1tZW51LXN1Ym1lbnUtc2VsZWN0ZWQnOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1kYXJrID4gLmFudC1tZW51LXN1Ym1lbnUtc2VsZWN0ZWQnOiB7XG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1saWdodCA+IC5hbnQtbWVudS1pdGVtLWFjdGl2ZSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RyYW5zcGFyZW50fWAsXG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1ob3Jpem9udGFsLmFudC1tZW51LWxpZ2h0ID4gLmFudC1tZW51LXN1Ym1lbnUtYWN0aXZlJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC1tZW51LWhvcml6b250YWwuYW50LW1lbnUtbGlnaHQgPiAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RyYW5zcGFyZW50fWAsXG4gICAgICBjb2xvcjogYCR7dHJhbnNwYXJlbnR9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtbWVudS1ob3Jpem9udGFsLmFudC1tZW51LWxpZ2h0ID4gLmFudC1tZW51LXN1Ym1lbnU6aG92ZXInOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgJHt0cmFuc3BhcmVudH1gLFxuICAgICAgY29sb3I6IGAke3RyYW5zcGFyZW50fWAsXG4gICAgfSxcbiAgICAnJiAuYW50LW1lbnUtaG9yaXpvbnRhbC5hbnQtbWVudS1saWdodCA+IC5hbnQtbWVudS1pdGVtOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICR7dHJhbnNwYXJlbnR9YCxcbiAgICAgIGNvbG9yOiBgJHt0cmFuc3BhcmVudH1gLFxuICAgIH0sXG4gICAgJyYgLmFudC10YWJsZS10aGVhZCA+IHRyLmFudC10YWJsZS1yb3ctaG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBgJHt0cmFuc3BhcmVudDJ9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtdGFibGUtdGJvZHkgPiB0ci5hbnQtdGFibGUtcm93LWhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgICAnJiAuYW50LXRhYmxlLXRoZWFkID4gdHI6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBgJHt0cmFuc3BhcmVudDJ9YCxcbiAgICB9LFxuICAgICcmIC5hbnQtdGFibGUtdGJvZHkgPiB0cjpob3Zlcjpub3QoLmFudC10YWJsZS1leHBhbmRlZC1yb3cpJzoge1xuICAgICAgYmFja2dyb3VuZDogYCR7dHJhbnNwYXJlbnQyfWAsXG4gICAgfSxcbiAgfTtcbn07XG4iXX0=

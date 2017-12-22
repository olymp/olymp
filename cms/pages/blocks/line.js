import 'antd/lib/dropdown/style';
import _Dropdown from 'antd/lib/dropdown';
import 'antd/lib/menu/style';
import _Menu2 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import React from 'react';

import { createComponent } from 'olymp-fela';

var styles = function styles(theme) {
  return {
    style1: {
      borderTop: '1px solid ' + theme.dark4
    },
    style2: {
      borderTop: '3px double ' + theme.dark4
    },
    style3: {
      borderTop: '1px dashed ' + theme.dark4
    },
    style4: {
      borderTop: '1px dotted ' + theme.dark4
    },
    style5: {
      backgroundColor: '#fff',
      borderTop: '2px dashed ' + theme.dark4
    },
    style6: {
      backgroundColor: '#fff',
      borderTop: '2px dotted ' + theme.dark4
    },
    style7: {
      borderTop: '1px solid ' + theme.dark4,
      borderBottom: '1px solid #fff'
    },
    style8: {
      borderTop: '1px solid ' + theme.dark4,
      borderBottom: '1px solid #fff',
      onAfter: {
        content: '""',
        display: 'block',
        marginTop: 2,
        borderTop: '1px solid ' + theme.dark4,
        borderBottom: '1px solid #fff'
      }
    },
    style9: {
      borderTop: '1px dashed ' + theme.dark4,
      borderBottom: '1px dashed #fff'
    },
    style10: {
      borderTop: '1px dotted ' + theme.dark4,
      borderBottom: '1px dotted #fff'
    },
    style11: {
      height: 6,
      background: 'url(http://ibrahimjabbari.com/english/images/hr-11.png) repeat-x 0 0',
      border: 0
    },
    style12: {
      height: 6,
      background: 'url(http://ibrahimjabbari.com/english/images/hr-12.png) repeat-x 0 0',
      border: 0
    },
    style13: {
      height: 10,
      border: 0,
      boxShadow: '0 10px 10px -10px ' + theme.dark4 + ' inset'
    },
    style14: {
      border: 0,
      height: 1,
      backgroundImage: 'linear-gradient(left, #f0f0f0, ' + theme.dark4 + ', #f0f0f0)'
    },
    style15: {
      borderTop: '4px double ' + theme.dark4,
      textAlign: 'center',
      onAfter: {
        content: '"\\002665"',
        display: 'inline-block',
        position: 'relative',
        top: -15,
        padding: '0 10px',
        background: '#f0f0f0',
        color: theme.dark4,
        fontSize: 18
      }
    },
    style16: {
      borderTop: '1px dashed ' + theme.dark4,
      onAfter: {
        content: '"\\002702"',
        display: 'inline-block',
        position: 'relative',
        top: -12,
        left: 40,
        padding: '0 3px',
        background: '#f0f0f0',
        color: theme.dark4,
        fontSize: 18
      }
    },
    style17: {
      borderTop: '1px solid ' + theme.dark4,
      textAlign: 'center',
      onAfter: {
        content: '"§"',
        display: 'inline-block',
        position: 'relative',
        top: -14,
        padding: '0 10px',
        background: '#f0f0f0',
        color: theme.dark4,
        fontSize: 18,
        transform: 'rotate(60deg)'
      }
    },
    style18: {
      height: 30,
      borderStyle: 'solid',
      borderColor: theme.dark4,
      borderWidth: '1px 0 0 0',
      borderRadius: 20,
      onBefore: {
        display: 'block',
        content: '""',
        height: 30,
        marginTop: -31,
        borderStyle: 'solid',
        borderColor: theme.dark4,
        borderWidth: '0 0 1px 0',
        borderRadius: 20
      }
    }
  };
};

var component = createComponent(function (_ref) {
  var getData = _ref.getData,
      theme = _ref.theme;
  return styles(theme)[getData('type', 'style1')];
}, function (_ref2) {
  var attributes = _ref2.attributes,
      className = _ref2.className,
      children = _ref2.children;
  return React.createElement(
    'span',
    attributes,
    children,
    React.createElement('hr', { className: className })
  );
}, function (p) {
  return Object.keys(p);
});

var _ref4 = React.createElement(
  'a',
  null,
  'Stil'
);

export default {
  type: 'Pages.Template.LineBlock',
  isVoid: true,
  kind: 'block',
  label: 'Linie',
  category: 'Layout',
  component: component,
  actions: [{
    type: 'small',
    icon: 'align-left',
    label: 'Stil 1',
    component: function component(_ref3) {
      var setData = _ref3.setData;
      return React.createElement(
        _Dropdown,
        {
          overlay: React.createElement(
            _Menu2,
            { style: { minWidth: 200 } },
            Object.keys(styles({})).map(function (key) {
              return React.createElement(
                _Menu.Item,
                { key: key },
                React.createElement(
                  'span',
                  {
                    onMouseDown: function onMouseDown(e) {
                      setData({ type: key });
                      e.preventDefault();
                    }
                  },
                  key
                )
              );
            })
          )
        },
        _ref4
      );
    },
    toggle: function toggle(_ref5) {
      var setData = _ref5.setData;
      return setData({ type: 'style2' });
    },
    active: function active(_ref6) {
      var type = _ref6.type;
      return false;
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9saW5lLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsInN0eWxlcyIsInN0eWxlMSIsImJvcmRlclRvcCIsInRoZW1lIiwiZGFyazQiLCJzdHlsZTIiLCJzdHlsZTMiLCJzdHlsZTQiLCJzdHlsZTUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZTYiLCJzdHlsZTciLCJib3JkZXJCb3R0b20iLCJzdHlsZTgiLCJvbkFmdGVyIiwiY29udGVudCIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJzdHlsZTkiLCJzdHlsZTEwIiwic3R5bGUxMSIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJzdHlsZTEyIiwic3R5bGUxMyIsImJveFNoYWRvdyIsInN0eWxlMTQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzdHlsZTE1IiwidGV4dEFsaWduIiwicG9zaXRpb24iLCJ0b3AiLCJwYWRkaW5nIiwiY29sb3IiLCJmb250U2l6ZSIsInN0eWxlMTYiLCJsZWZ0Iiwic3R5bGUxNyIsInRyYW5zZm9ybSIsInN0eWxlMTgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJvbkJlZm9yZSIsImNvbXBvbmVudCIsImdldERhdGEiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJPYmplY3QiLCJrZXlzIiwicCIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJjYXRlZ29yeSIsImFjdGlvbnMiLCJpY29uIiwic2V0RGF0YSIsIm1pbldpZHRoIiwibWFwIiwia2V5IiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTO0FBQUEs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QUFaLEVBQXdCK0QsR0FBeEIsQ0FBNEI7QUFBQSxxQkFDM0I7QUFBQSxzQkFBTSxJQUFOO0FBQUEsa0JBQVcsS0FBS0MsR0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFDRSxpQ0FBYSx3QkFBSztBQUNoQkgsOEJBQVEsRUFBRVAsTUFBTVUsR0FBUixFQUFSO0FBQ0FDLHdCQUFFQyxjQUFGO0FBQ0Q7QUFKSDtBQU1HRjtBQU5IO0FBREYsZUFEMkI7QUFBQSxhQUE1QjtBQURIO0FBRko7QUFBQTtBQUFBLE9BRFM7QUFBQSxLQUpiO0FBMEJFRyxZQUFRO0FBQUEsVUFBR04sT0FBSCxTQUFHQSxPQUFIO0FBQUEsYUFBaUJBLFFBQVEsRUFBRVAsTUFBTSxRQUFSLEVBQVIsQ0FBakI7QUFBQSxLQTFCVjtBQTJCRWMsWUFBUTtBQUFBLFVBQUdkLElBQUgsU0FBR0EsSUFBSDtBQUFBLGFBQWMsS0FBZDtBQUFBO0FBM0JWLEdBRE87QUFQSSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9saW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyb3Bkb3duLCBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgc3R5bGUxOiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFyazR9YCxcbiAgfSxcbiAgc3R5bGUyOiB7XG4gICAgYm9yZGVyVG9wOiBgM3B4IGRvdWJsZSAke3RoZW1lLmRhcms0fWAsXG4gIH0sXG4gIHN0eWxlMzoge1xuICAgIGJvcmRlclRvcDogYDFweCBkYXNoZWQgJHt0aGVtZS5kYXJrNH1gLFxuICB9LFxuICBzdHlsZTQ6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggZG90dGVkICR7dGhlbWUuZGFyazR9YCxcbiAgfSxcbiAgc3R5bGU1OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyVG9wOiBgMnB4IGRhc2hlZCAke3RoZW1lLmRhcms0fWAsXG4gIH0sXG4gIHN0eWxlNjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlclRvcDogYDJweCBkb3R0ZWQgJHt0aGVtZS5kYXJrNH1gLFxuICB9LFxuICBzdHlsZTc6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5kYXJrNH1gLFxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZmZmJyxcbiAgfSxcbiAgc3R5bGU4OiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFyazR9YCxcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2ZmZicsXG4gICAgb25BZnRlcjoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1hcmdpblRvcDogMixcbiAgICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLmRhcms0fWAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2ZmZicsXG4gICAgfSxcbiAgfSxcbiAgc3R5bGU5OiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IGRhc2hlZCAke3RoZW1lLmRhcms0fWAsXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IGRhc2hlZCAjZmZmJyxcbiAgfSxcbiAgc3R5bGUxMDoge1xuICAgIGJvcmRlclRvcDogYDFweCBkb3R0ZWQgJHt0aGVtZS5kYXJrNH1gLFxuICAgIGJvcmRlckJvdHRvbTogJzFweCBkb3R0ZWQgI2ZmZicsXG4gIH0sXG4gIHN0eWxlMTE6IHtcbiAgICBoZWlnaHQ6IDYsXG4gICAgYmFja2dyb3VuZDpcbiAgICAgICd1cmwoaHR0cDovL2licmFoaW1qYWJiYXJpLmNvbS9lbmdsaXNoL2ltYWdlcy9oci0xMS5wbmcpIHJlcGVhdC14IDAgMCcsXG4gICAgYm9yZGVyOiAwLFxuICB9LFxuICBzdHlsZTEyOiB7XG4gICAgaGVpZ2h0OiA2LFxuICAgIGJhY2tncm91bmQ6XG4gICAgICAndXJsKGh0dHA6Ly9pYnJhaGltamFiYmFyaS5jb20vZW5nbGlzaC9pbWFnZXMvaHItMTIucG5nKSByZXBlYXQteCAwIDAnLFxuICAgIGJvcmRlcjogMCxcbiAgfSxcbiAgc3R5bGUxMzoge1xuICAgIGhlaWdodDogMTAsXG4gICAgYm9yZGVyOiAwLFxuICAgIGJveFNoYWRvdzogYDAgMTBweCAxMHB4IC0xMHB4ICR7dGhlbWUuZGFyazR9IGluc2V0YCxcbiAgfSxcbiAgc3R5bGUxNDoge1xuICAgIGJvcmRlcjogMCxcbiAgICBoZWlnaHQ6IDEsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KGxlZnQsICNmMGYwZjAsICR7dGhlbWUuZGFyazR9LCAjZjBmMGYwKWAsXG4gIH0sXG4gIHN0eWxlMTU6IHtcbiAgICBib3JkZXJUb3A6IGA0cHggZG91YmxlICR7dGhlbWUuZGFyazR9YCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG9uQWZ0ZXI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlxcXFwwMDI2NjVcIicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdG9wOiAtMTUsXG4gICAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZjBmMGYwJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrNCxcbiAgICAgIGZvbnRTaXplOiAxOCxcbiAgICB9LFxuICB9LFxuICBzdHlsZTE2OiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IGRhc2hlZCAke3RoZW1lLmRhcms0fWAsXG4gICAgb25BZnRlcjoge1xuICAgICAgY29udGVudDogJ1wiXFxcXDAwMjcwMlwiJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0b3A6IC0xMixcbiAgICAgIGxlZnQ6IDQwLFxuICAgICAgcGFkZGluZzogJzAgM3B4JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZjBmMGYwJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrNCxcbiAgICAgIGZvbnRTaXplOiAxOCxcbiAgICB9LFxuICB9LFxuICBzdHlsZTE3OiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFyazR9YCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG9uQWZ0ZXI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIsKnXCInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRvcDogLTE0LFxuICAgICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2YwZjBmMCcsXG4gICAgICBjb2xvcjogdGhlbWUuZGFyazQsXG4gICAgICBmb250U2l6ZTogMTgsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNjBkZWcpJyxcbiAgICB9LFxuICB9LFxuICBzdHlsZTE4OiB7XG4gICAgaGVpZ2h0OiAzMCxcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogdGhlbWUuZGFyazQsXG4gICAgYm9yZGVyV2lkdGg6ICcxcHggMCAwIDAnLFxuICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgb25CZWZvcmU6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBoZWlnaHQ6IDMwLFxuICAgICAgbWFyZ2luVG9wOiAtMzEsXG4gICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5kYXJrNCxcbiAgICAgIGJvcmRlcldpZHRoOiAnMCAwIDFweCAwJyxcbiAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGdldERhdGEsIHRoZW1lIH0pID0+IHN0eWxlcyh0aGVtZSlbZ2V0RGF0YSgndHlwZScsICdzdHlsZTEnKV0sXG4gICh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxzcGFuIHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxociBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cbiAgICA8L3NwYW4+XG4gICksXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdQYWdlcy5UZW1wbGF0ZS5MaW5lQmxvY2snLFxuICBpc1ZvaWQ6IHRydWUsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnTGluaWUnLFxuICBjYXRlZ29yeTogJ0xheW91dCcsXG4gIGNvbXBvbmVudCxcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdzbWFsbCcsXG4gICAgICBpY29uOiAnYWxpZ24tbGVmdCcsXG4gICAgICBsYWJlbDogJ1N0aWwgMScsXG4gICAgICBjb21wb25lbnQ6ICh7IHNldERhdGEgfSkgPT4gKFxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBvdmVybGF5PXtcbiAgICAgICAgICAgIDxNZW51IHN0eWxlPXt7IG1pbldpZHRoOiAyMDAgfX0+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhzdHlsZXMoe30pKS5tYXAoa2V5ID0+IChcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHsgdHlwZToga2V5IH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2tleX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPGE+U3RpbDwvYT5cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICksXG4gICAgICB0b2dnbGU6ICh7IHNldERhdGEgfSkgPT4gc2V0RGF0YSh7IHR5cGU6ICdzdHlsZTInIH0pLFxuICAgICAgYWN0aXZlOiAoeyB0eXBlIH0pID0+IGZhbHNlLFxuICAgIH0sXG4gIF0sXG59O1xuIl19

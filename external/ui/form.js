import 'antd/lib/form/style';
import _Form3 from 'antd/lib/form';
import 'antd/lib/form/style';
import _Form2 from 'antd/lib/form';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { createComponent } from 'react-fela';

var Form = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .ant-form-item-label': {
      textAlign: 'left',
      '> label': {
        fontWeight: 400,
        color: theme.dark2
      }
    }
  };
}, function (props) {
  return React.createElement(_Form, props);
}, []);
Form.create = _Form2.create;
Form.Item = _Form3.Item;
Form.Panel = createComponent(function (_ref2) {
  var theme = _ref2.theme;
  return {
    borderTop: '1px solid ' + theme.dark4,
    paddingTop: theme.space3,
    marginTop: theme.space4,
    position: 'relative',
    '> label': {
      fontWeight: 'bold',
      position: 'absolute',
      top: -14,
      padding: '1px 8px',
      marginLeft: -8,
      color: '#777',
      borderRadius: '4px 4px 0 0',
      background: '#fff',
      transition: 'background-color .4s'
    }
  };
}, function (_ref3) {
  var title = _ref3.title,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ['title', 'children']);

  return React.createElement(
    'div',
    props,
    title && React.createElement(
      'label',
      null,
      title
    ),
    children
  );
}, ['title', 'onPaste']);

export default Form;

export var defaultLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
  colon: false
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2Zvcm0uZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwiRm9ybSIsInRoZW1lIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZGFyazIiLCJwcm9wcyIsImNyZWF0ZSIsIkl0ZW0iLCJQYW5lbCIsImJvcmRlclRvcCIsImRhcms0IiwicGFkZGluZ1RvcCIsInNwYWNlMyIsIm1hcmdpblRvcCIsInNwYWNlNCIsInBvc2l0aW9uIiwidG9wIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwidHJhbnNpdGlvbiIsInRpdGxlIiwiY2hpbGRyZW4iLCJkZWZhdWx0TGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsImNvbG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsSUFBTUMsT0FBT0QsZ0JBQ1g7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkLDhCQUEwQjtBQUN4QkMsaUJBQVcsTUFEYTtBQUV4QixpQkFBVztBQUNUQyxvQkFBWSxHQURIO0FBRVRDLGVBQU9ILE1BQU1JO0FBRko7QUFGYTtBQURaLEdBQWhCO0FBQUEsQ0FEVyxFQVVYO0FBQUEsU0FBUywyQkFBYUMsS0FBYixDQUFUO0FBQUEsQ0FWVyxFQVdYLEVBWFcsQ0FBYjtBQWFBTixLQUFLTyxNQUFMLEdBQWMsT0FBUUEsTUFBdEI7QUFDQVAsS0FBS1EsSUFBTCxHQUFZLE9BQVFBLElBQXBCO0FBQ0FSLEtBQUtTLEtBQUwsR0FBYVYsZ0JBQ1g7QUFBQSxNQUFHRSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkUyw4QkFBd0JULE1BQU1VLEtBRGhCO0FBRWRDLGdCQUFZWCxNQUFNWSxNQUZKO0FBR2RDLGVBQVdiLE1BQU1jLE1BSEg7QUFJZEMsY0FBVSxVQUpJO0FBS2QsZUFBVztBQUNUYixrQkFBWSxNQURIO0FBRVRhLGdCQUFVLFVBRkQ7QUFHVEMsV0FBSyxDQUFDLEVBSEc7QUFJVEMsZUFBUyxTQUpBO0FBS1RDLGtCQUFZLENBQUMsQ0FMSjtBQU1UZixhQUFPLE1BTkU7QUFPVGdCLG9CQUFjLGFBUEw7QUFRVEMsa0JBQVksTUFSSDtBQVNUQyxrQkFBWTtBQVRIO0FBTEcsR0FBaEI7QUFBQSxDQURXLEVBa0JYO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsUUFBVixTQUFVQSxRQUFWO0FBQUEsTUFBdUJsQixLQUF2Qjs7QUFBQSxTQUNFO0FBQUE7QUFBU0EsU0FBVDtBQUNHaUIsYUFBUztBQUFBO0FBQUE7QUFBUUE7QUFBUixLQURaO0FBRUdDO0FBRkgsR0FERjtBQUFBLENBbEJXLEVBd0JYLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0F4QlcsQ0FBYjs7QUEyQkEsZUFBZXhCLElBQWY7O0FBRUEsT0FBTyxJQUFNeUIsZ0JBQWdCO0FBQzNCQyxZQUFVLEVBQUVDLE1BQU0sQ0FBUixFQURpQjtBQUUzQkMsY0FBWSxFQUFFRCxNQUFNLEVBQVIsRUFGZTtBQUczQkUsU0FBTztBQUhvQixDQUF0QiIsImZpbGUiOiJwYWNrYWdlcy91aS9mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0gYXMgQW50Rm9ybSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IEZvcm0gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgJyYgLmFudC1mb3JtLWl0ZW0tbGFiZWwnOiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICc+IGxhYmVsJzoge1xuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5kYXJrMixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHByb3BzID0+IDxBbnRGb3JtIHsuLi5wcm9wc30gLz4sXG4gIFtdXG4pO1xuRm9ybS5jcmVhdGUgPSBBbnRGb3JtLmNyZWF0ZTtcbkZvcm0uSXRlbSA9IEFudEZvcm0uSXRlbTtcbkZvcm0uUGFuZWwgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUuZGFyazR9YCxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjZTMsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjZTQsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJz4gbGFiZWwnOiB7XG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogLTE0LFxuICAgICAgcGFkZGluZzogJzFweCA4cHgnLFxuICAgICAgbWFyZ2luTGVmdDogLTgsXG4gICAgICBjb2xvcjogJyM3NzcnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4IDRweCAwIDAnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgLjRzJyxcbiAgICB9LFxuICB9KSxcbiAgKHsgdGl0bGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9PlxuICAgICAge3RpdGxlICYmIDxsYWJlbD57dGl0bGV9PC9sYWJlbD59XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICksXG4gIFsndGl0bGUnLCAnb25QYXN0ZSddXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdExheW91dCA9IHtcbiAgbGFiZWxDb2w6IHsgc3BhbjogNiB9LFxuICB3cmFwcGVyQ29sOiB7IHNwYW46IDE4IH0sXG4gIGNvbG9uOiBmYWxzZSxcbn07XG4iXX0=

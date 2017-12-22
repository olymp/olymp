var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { createComponent } from 'olymp-fela';
import { Card } from 'olymp-scrape';

var CardContainer = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    width: '100%',
    position: 'relative',
    display: 'block'
  };
}, function (_ref2) {
  var attributes = _ref2.attributes,
      className = _ref2.className,
      node = _ref2.node,
      children = _ref2.children;
  return React.createElement(
    Card,
    _extends({}, attributes, {
      className: className,
      xy: console.log(node.data.get('value')),
      value: node.data.get('value')
    }),
    children
  );
}, function (p) {
  return Object.keys(p);
});

export default {
  type: 'cardLink',
  isVoid: true,
  kind: 'block',
  label: 'Meta-Link',
  category: 'Sonstiges',
  component: CardContainer,
  actions: [{
    type: 'small',
    icon: 'chain',
    label: 'Link',
    toggle: function toggle(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value,
          node = _ref3.node;

      var href = window.prompt('Link');
      if (href) {
        onChange(value.change().setNodeByKey(node.key, {
          data: node.data.set('value', href)
        }));
      } else {
        onChange(value.change().setNodeByKey(node.key, {
          data: node.data.set('value', null)
        }));
      }
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9jYXJkLWxpbmsuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29tcG9uZW50IiwiQ2FyZCIsIkNhcmRDb250YWluZXIiLCJ0aGVtZSIsIndpZHRoIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsIm5vZGUiLCJjaGlsZHJlbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZ2V0IiwiT2JqZWN0Iiwia2V5cyIsInAiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJhY3Rpb25zIiwiaWNvbiIsInRvZ2dsZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJocmVmIiwid2luZG93IiwicHJvbXB0IiwiY2hhbmdlIiwic2V0Tm9kZUJ5S2V5Iiwia2V5Iiwic2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjs7QUFFQSxJQUFNQyxnQkFBZ0JGLGdCQUNwQjtBQUFBLE1BQUdHLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLFdBQU8sTUFETztBQUVkQyxjQUFVLFVBRkk7QUFHZEMsYUFBUztBQUhLLEdBQWhCO0FBQUEsQ0FEb0IsRUFNcEI7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxNQUFlQyxTQUFmLFNBQWVBLFNBQWY7QUFBQSxNQUEwQkMsSUFBMUIsU0FBMEJBLElBQTFCO0FBQUEsTUFBZ0NDLFFBQWhDLFNBQWdDQSxRQUFoQztBQUFBLFNBQ0U7QUFBQyxRQUFEO0FBQUEsaUJBQ01ILFVBRE47QUFFRSxpQkFBV0MsU0FGYjtBQUdFLFVBQUlHLFFBQVFDLEdBQVIsQ0FBWUgsS0FBS0ksSUFBTCxDQUFVQyxHQUFWLENBQWMsT0FBZCxDQUFaLENBSE47QUFJRSxhQUFPTCxLQUFLSSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxPQUFkO0FBSlQ7QUFNR0o7QUFOSCxHQURGO0FBQUEsQ0FOb0IsRUFnQnBCO0FBQUEsU0FBS0ssT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQWhCb0IsQ0FBdEI7O0FBbUJBLGVBQWU7QUFDYkMsUUFBTSxVQURPO0FBRWJDLFVBQVEsSUFGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxXQUpNO0FBS2JDLFlBQVUsV0FMRztBQU1iQyxhQUFXckIsYUFORTtBQU9ic0IsV0FBUyxDQUNQO0FBQ0VOLFVBQU0sT0FEUjtBQUVFTyxVQUFNLE9BRlI7QUFHRUosV0FBTyxNQUhUO0FBSUVLLFlBQVEsdUJBQStCO0FBQUEsVUFBNUJDLFFBQTRCLFNBQTVCQSxRQUE0QjtBQUFBLFVBQWxCQyxLQUFrQixTQUFsQkEsS0FBa0I7QUFBQSxVQUFYbkIsSUFBVyxTQUFYQSxJQUFXOztBQUNyQyxVQUFNb0IsT0FBT0MsT0FBT0MsTUFBUCxDQUFjLE1BQWQsQ0FBYjtBQUNBLFVBQUlGLElBQUosRUFBVTtBQUNSRixpQkFDRUMsTUFBTUksTUFBTixHQUFlQyxZQUFmLENBQTRCeEIsS0FBS3lCLEdBQWpDLEVBQXNDO0FBQ3BDckIsZ0JBQU1KLEtBQUtJLElBQUwsQ0FBVXNCLEdBQVYsQ0FBYyxPQUFkLEVBQXVCTixJQUF2QjtBQUQ4QixTQUF0QyxDQURGO0FBS0QsT0FORCxNQU1PO0FBQ0xGLGlCQUNFQyxNQUFNSSxNQUFOLEdBQWVDLFlBQWYsQ0FBNEJ4QixLQUFLeUIsR0FBakMsRUFBc0M7QUFDcENyQixnQkFBTUosS0FBS0ksSUFBTCxDQUFVc0IsR0FBVixDQUFjLE9BQWQsRUFBdUIsSUFBdkI7QUFEOEIsU0FBdEMsQ0FERjtBQUtEO0FBQ0Y7QUFuQkgsR0FETztBQVBJLENBQWYiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvYmxvY2tzL2NhcmQtbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdvbHltcC1zY3JhcGUnO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgfSksXG4gICh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgbm9kZSwgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxDYXJkXG4gICAgICB7Li4uYXR0cmlidXRlc31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgeHk9e2NvbnNvbGUubG9nKG5vZGUuZGF0YS5nZXQoJ3ZhbHVlJykpfVxuICAgICAgdmFsdWU9e25vZGUuZGF0YS5nZXQoJ3ZhbHVlJyl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2FyZD5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2NhcmRMaW5rJyxcbiAgaXNWb2lkOiB0cnVlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ01ldGEtTGluaycsXG4gIGNhdGVnb3J5OiAnU29uc3RpZ2VzJyxcbiAgY29tcG9uZW50OiBDYXJkQ29udGFpbmVyLFxuICBhY3Rpb25zOiBbXG4gICAge1xuICAgICAgdHlwZTogJ3NtYWxsJyxcbiAgICAgIGljb246ICdjaGFpbicsXG4gICAgICBsYWJlbDogJ0xpbmsnLFxuICAgICAgdG9nZ2xlOiAoeyBvbkNoYW5nZSwgdmFsdWUsIG5vZGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBocmVmID0gd2luZG93LnByb21wdCgnTGluaycpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgdmFsdWUuY2hhbmdlKCkuc2V0Tm9kZUJ5S2V5KG5vZGUua2V5LCB7XG4gICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ3ZhbHVlJywgaHJlZiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgdmFsdWUuY2hhbmdlKCkuc2V0Tm9kZUJ5S2V5KG5vZGUua2V5LCB7XG4gICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ3ZhbHVlJywgbnVsbCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuIl19

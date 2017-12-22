import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import _groupBy from 'lodash/groupBy';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { createComponent } from 'olymp-fela';

import { compose, withProps, withPropsOnChange, withState } from 'recompose';
import DetailBrowser from './detail-browser';
import DetailPicker from './detail-picker';
import Gallery from '../components/gallery';
import LightboxGallery from '../lightbox-gallery';

var Container = createComponent(function (_ref) {
  var collapsed = _ref.collapsed,
      active = _ref.active;
  return {
    opacity: collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    display: active ? 'block' : 'none'
  };
}, 'div');

var enhance = compose(_Form.create(), withState('activeId', 'setActive', null), withProps(function (_ref2) {
  var value = _ref2.value;
  return {
    multi: value.length > 1
  };
}), withPropsOnChange(['value'], function (_ref3) {
  var value = _ref3.value;

  // get tags
  var selectedTags = [];
  value.forEach(function (item) {
    return (item.tags || []).forEach(function (tag) {
      return selectedTags.push(tag);
    });
  });
  var groupedTags = _groupBy(selectedTags);

  return { selectedTags: selectedTags, groupedTags: groupedTags };
}));

export default enhance(function (_ref4) {
  var form = _ref4.form,
      _ref4$value = _ref4.value,
      value = _ref4$value === undefined ? [] : _ref4$value,
      activeId = _ref4.activeId,
      multi = _ref4.multi,
      collapsed = _ref4.collapsed,
      editable = _ref4.editable,
      onClick = _ref4.onClick,
      setActive = _ref4.setActive,
      onRemove = _ref4.onRemove,
      rest = _objectWithoutProperties(_ref4, ['form', 'value', 'activeId', 'multi', 'collapsed', 'editable', 'onClick', 'setActive', 'onRemove']);

  var Detail = editable ? DetailBrowser : DetailPicker;
  var active = value.find(function (x) {
    return x.id === activeId;
  }) || value[0] || {};

  return React.createElement(
    Container,
    { collapsed: collapsed, active: true },
    React.createElement(
      LightboxGallery,
      null,
      multi && React.createElement(Gallery, {
        items: value,
        selectedIds: [active.id],
        onClick: function onClick(_ref5) {
          var id = _ref5.id;
          return setActive(id);
        },
        onRemove: onRemove,
        justifyContent: 'space-around'
      })
    ),
    value.map(function (item) {
      return React.createElement(
        Container,
        {
          key: item.id,
          collapsed: collapsed,
          active: item.id === active.id
        },
        React.createElement(Detail, _extends({}, rest, {
          form: form,
          id: item.id,
          value: value,
          item: item
        }))
      );
    })
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvZGV0YWlsL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbXBvbmVudCIsImNvbXBvc2UiLCJ3aXRoUHJvcHMiLCJ3aXRoUHJvcHNPbkNoYW5nZSIsIndpdGhTdGF0ZSIsIkRldGFpbEJyb3dzZXIiLCJEZXRhaWxQaWNrZXIiLCJHYWxsZXJ5IiwiTGlnaHRib3hHYWxsZXJ5IiwiQ29udGFpbmVyIiwiY29sbGFwc2VkIiwiYWN0aXZlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkaXNwbGF5IiwiZW5oYW5jZSIsImNyZWF0ZSIsInZhbHVlIiwibXVsdGkiLCJsZW5ndGgiLCJzZWxlY3RlZFRhZ3MiLCJmb3JFYWNoIiwiaXRlbSIsInRhZ3MiLCJwdXNoIiwidGFnIiwiZ3JvdXBlZFRhZ3MiLCJmb3JtIiwiYWN0aXZlSWQiLCJlZGl0YWJsZSIsIm9uQ2xpY2siLCJzZXRBY3RpdmUiLCJvblJlbW92ZSIsInJlc3QiLCJEZXRhaWwiLCJmaW5kIiwieCIsImlkIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDOztBQUdBLFNBQVNDLE9BQVQsRUFBa0JDLFNBQWxCLEVBQTZCQyxpQkFBN0IsRUFBZ0RDLFNBQWhELFFBQWlFLFdBQWpFO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixrQkFBMUI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsdUJBQXBCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixxQkFBNUI7O0FBRUEsSUFBTUMsWUFBWVQsZ0JBQ2hCO0FBQUEsTUFBR1UsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsTUFBZCxRQUFjQSxNQUFkO0FBQUEsU0FBNEI7QUFDMUJDLGFBQVNGLFlBQVksQ0FBWixHQUFnQixDQURDO0FBRTFCRyxnQkFBWSx3QkFGYztBQUcxQkMsYUFBU0gsU0FBUyxPQUFULEdBQW1CO0FBSEYsR0FBNUI7QUFBQSxDQURnQixFQU1oQixLQU5nQixDQUFsQjs7QUFTQSxJQUFNSSxVQUFVZCxRQUNkLE1BQUtlLE1BQUwsRUFEYyxFQUVkWixVQUFVLFVBQVYsRUFBc0IsV0FBdEIsRUFBbUMsSUFBbkMsQ0FGYyxFQUdkRixVQUFVO0FBQUEsTUFBR2UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDeEJDLFdBQU9ELE1BQU1FLE1BQU4sR0FBZTtBQURFLEdBQWhCO0FBQUEsQ0FBVixDQUhjLEVBTWRoQixrQkFBa0IsQ0FBQyxPQUFELENBQWxCLEVBQTZCLGlCQUFlO0FBQUEsTUFBWmMsS0FBWSxTQUFaQSxLQUFZOztBQUMxQztBQUNBLE1BQU1HLGVBQWUsRUFBckI7QUFDQUgsUUFBTUksT0FBTixDQUFjO0FBQUEsV0FDWixDQUFDQyxLQUFLQyxJQUFMLElBQWEsRUFBZCxFQUFrQkYsT0FBbEIsQ0FBMEI7QUFBQSxhQUFPRCxhQUFhSSxJQUFiLENBQWtCQyxHQUFsQixDQUFQO0FBQUEsS0FBMUIsQ0FEWTtBQUFBLEdBQWQ7QUFHQSxNQUFNQyxjQUFjLFNBQVFOLFlBQVIsQ0FBcEI7O0FBRUEsU0FBTyxFQUFFQSwwQkFBRixFQUFnQk0sd0JBQWhCLEVBQVA7QUFDRCxDQVRELENBTmMsQ0FBaEI7O0FBa0JBLGVBQWVYLFFBQ2IsaUJBV007QUFBQSxNQVZKWSxJQVVJLFNBVkpBLElBVUk7QUFBQSwwQkFUSlYsS0FTSTtBQUFBLE1BVEpBLEtBU0ksK0JBVEksRUFTSjtBQUFBLE1BUkpXLFFBUUksU0FSSkEsUUFRSTtBQUFBLE1BUEpWLEtBT0ksU0FQSkEsS0FPSTtBQUFBLE1BTkpSLFNBTUksU0FOSkEsU0FNSTtBQUFBLE1BTEptQixRQUtJLFNBTEpBLFFBS0k7QUFBQSxNQUpKQyxPQUlJLFNBSkpBLE9BSUk7QUFBQSxNQUhKQyxTQUdJLFNBSEpBLFNBR0k7QUFBQSxNQUZKQyxRQUVJLFNBRkpBLFFBRUk7QUFBQSxNQUREQyxJQUNDOztBQUNKLE1BQU1DLFNBQVNMLFdBQVd4QixhQUFYLEdBQTJCQyxZQUExQztBQUNBLE1BQU1LLFNBQVNNLE1BQU1rQixJQUFOLENBQVc7QUFBQSxXQUFLQyxFQUFFQyxFQUFGLEtBQVNULFFBQWQ7QUFBQSxHQUFYLEtBQXNDWCxNQUFNLENBQU4sQ0FBdEMsSUFBa0QsRUFBakU7O0FBRUEsU0FDRTtBQUFDLGFBQUQ7QUFBQSxNQUFXLFdBQVdQLFNBQXRCLEVBQWlDLFlBQWpDO0FBQ0U7QUFBQyxxQkFBRDtBQUFBO0FBQ0dRLGVBQ0Msb0JBQUMsT0FBRDtBQUNFLGVBQU9ELEtBRFQ7QUFFRSxxQkFBYSxDQUFDTixPQUFPMEIsRUFBUixDQUZmO0FBR0UsaUJBQVM7QUFBQSxjQUFHQSxFQUFILFNBQUdBLEVBQUg7QUFBQSxpQkFBWU4sVUFBVU0sRUFBVixDQUFaO0FBQUEsU0FIWDtBQUlFLGtCQUFVTCxRQUpaO0FBS0Usd0JBQWU7QUFMakI7QUFGSixLQURGO0FBWUdmLFVBQU1xQixHQUFOLENBQVU7QUFBQSxhQUNUO0FBQUMsaUJBQUQ7QUFBQTtBQUNFLGVBQUtoQixLQUFLZSxFQURaO0FBRUUscUJBQVczQixTQUZiO0FBR0Usa0JBQVFZLEtBQUtlLEVBQUwsS0FBWTFCLE9BQU8wQjtBQUg3QjtBQUtFLDRCQUFDLE1BQUQsZUFDTUosSUFETjtBQUVFLGdCQUFNTixJQUZSO0FBR0UsY0FBSUwsS0FBS2UsRUFIWDtBQUlFLGlCQUFPcEIsS0FKVDtBQUtFLGdCQUFNSztBQUxSO0FBTEYsT0FEUztBQUFBLEtBQVY7QUFaSCxHQURGO0FBOEJELENBOUNZLENBQWYiLCJmaWxlIjoicGFja2FnZXMvY2xvdWRpbmFyeS9kZXRhaWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBncm91cEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcywgd2l0aFByb3BzT25DaGFuZ2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgRGV0YWlsQnJvd3NlciBmcm9tICcuL2RldGFpbC1icm93c2VyJztcbmltcG9ydCBEZXRhaWxQaWNrZXIgZnJvbSAnLi9kZXRhaWwtcGlja2VyJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FsbGVyeSc7XG5pbXBvcnQgTGlnaHRib3hHYWxsZXJ5IGZyb20gJy4uL2xpZ2h0Ym94LWdhbGxlcnknO1xuXG5jb25zdCBDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGNvbGxhcHNlZCwgYWN0aXZlIH0pID0+ICh7XG4gICAgb3BhY2l0eTogY29sbGFwc2VkID8gMCA6IDEsXG4gICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMjAwbXMgZWFzZS1vdXQnLFxuICAgIGRpc3BsYXk6IGFjdGl2ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gIH0pLFxuICAnZGl2Jyxcbik7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBGb3JtLmNyZWF0ZSgpLFxuICB3aXRoU3RhdGUoJ2FjdGl2ZUlkJywgJ3NldEFjdGl2ZScsIG51bGwpLFxuICB3aXRoUHJvcHMoKHsgdmFsdWUgfSkgPT4gKHtcbiAgICBtdWx0aTogdmFsdWUubGVuZ3RoID4gMSxcbiAgfSkpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ3ZhbHVlJ10sICh7IHZhbHVlIH0pID0+IHtcbiAgICAvLyBnZXQgdGFnc1xuICAgIGNvbnN0IHNlbGVjdGVkVGFncyA9IFtdO1xuICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PlxuICAgICAgKGl0ZW0udGFncyB8fCBbXSkuZm9yRWFjaCh0YWcgPT4gc2VsZWN0ZWRUYWdzLnB1c2godGFnKSksXG4gICAgKTtcbiAgICBjb25zdCBncm91cGVkVGFncyA9IGdyb3VwQnkoc2VsZWN0ZWRUYWdzKTtcblxuICAgIHJldHVybiB7IHNlbGVjdGVkVGFncywgZ3JvdXBlZFRhZ3MgfTtcbiAgfSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFxuICAoe1xuICAgIGZvcm0sXG4gICAgdmFsdWUgPSBbXSxcbiAgICBhY3RpdmVJZCxcbiAgICBtdWx0aSxcbiAgICBjb2xsYXBzZWQsXG4gICAgZWRpdGFibGUsXG4gICAgb25DbGljayxcbiAgICBzZXRBY3RpdmUsXG4gICAgb25SZW1vdmUsXG4gICAgLi4ucmVzdFxuICB9KSA9PiB7XG4gICAgY29uc3QgRGV0YWlsID0gZWRpdGFibGUgPyBEZXRhaWxCcm93c2VyIDogRGV0YWlsUGlja2VyO1xuICAgIGNvbnN0IGFjdGl2ZSA9IHZhbHVlLmZpbmQoeCA9PiB4LmlkID09PSBhY3RpdmVJZCkgfHwgdmFsdWVbMF0gfHwge307XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gYWN0aXZlPlxuICAgICAgICA8TGlnaHRib3hHYWxsZXJ5PlxuICAgICAgICAgIHttdWx0aSAmJiAoXG4gICAgICAgICAgICA8R2FsbGVyeVxuICAgICAgICAgICAgICBpdGVtcz17dmFsdWV9XG4gICAgICAgICAgICAgIHNlbGVjdGVkSWRzPXtbYWN0aXZlLmlkXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KHsgaWQgfSkgPT4gc2V0QWN0aXZlKGlkKX1cbiAgICAgICAgICAgICAgb25SZW1vdmU9e29uUmVtb3ZlfVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGlnaHRib3hHYWxsZXJ5PlxuICAgICAgICB7dmFsdWUubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICAgICAgYWN0aXZlPXtpdGVtLmlkID09PSBhY3RpdmUuaWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERldGFpbFxuICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICkpfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfSxcbik7XG4iXX0=

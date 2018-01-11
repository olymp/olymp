'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _groupBy2 = require('lodash/groupBy');

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _detailBrowser = require('./detail-browser');

var _detailBrowser2 = _interopRequireDefault(_detailBrowser);

var _detailPicker = require('./detail-picker');

var _detailPicker2 = _interopRequireDefault(_detailPicker);

var _gallery = require('../components/gallery');

var _gallery2 = _interopRequireDefault(_gallery);

var _lightboxGallery = require('../lightbox-gallery');

var _lightboxGallery2 = _interopRequireDefault(_lightboxGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Container = (0, _olympFela.createComponent)(function (_ref) {
  var collapsed = _ref.collapsed,
      active = _ref.active;
  return {
    opacity: collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    display: active ? 'block' : 'none'
  };
}, 'div');

var enhance = (0, _recompose.compose)(_form2.default.create(), (0, _recompose.withState)('activeId', 'setActive', null), (0, _recompose.withProps)(function (_ref2) {
  var value = _ref2.value;
  return {
    multi: value.length > 1
  };
}), (0, _recompose.withPropsOnChange)(['value'], function (_ref3) {
  var value = _ref3.value;

  // get tags
  var selectedTags = [];
  value.forEach(function (item) {
    return (item.tags || []).forEach(function (tag) {
      return selectedTags.push(tag);
    });
  });
  var groupedTags = (0, _groupBy3.default)(selectedTags);

  return { selectedTags: selectedTags, groupedTags: groupedTags };
}));

exports.default = enhance(function (_ref4) {
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

  var Detail = editable ? _detailBrowser2.default : _detailPicker2.default;
  var active = value.find(function (x) {
    return x.id === activeId;
  }) || value[0] || {};

  return _react2.default.createElement(
    Container,
    { collapsed: collapsed, active: true },
    _react2.default.createElement(
      _lightboxGallery2.default,
      null,
      multi && _react2.default.createElement(_gallery2.default, {
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
      return _react2.default.createElement(
        Container,
        {
          key: item.id,
          collapsed: collapsed,
          active: item.id === active.id
        },
        _react2.default.createElement(Detail, _extends({}, rest, {
          form: form,
          id: item.id,
          value: value,
          item: item
        }))
      );
    })
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2RldGFpbC9pbmRleC5lczYiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiY29sbGFwc2VkIiwiYWN0aXZlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkaXNwbGF5IiwiZW5oYW5jZSIsImNyZWF0ZSIsInZhbHVlIiwibXVsdGkiLCJsZW5ndGgiLCJzZWxlY3RlZFRhZ3MiLCJmb3JFYWNoIiwiaXRlbSIsInRhZ3MiLCJwdXNoIiwidGFnIiwiZ3JvdXBlZFRhZ3MiLCJmb3JtIiwiYWN0aXZlSWQiLCJlZGl0YWJsZSIsIm9uQ2xpY2siLCJzZXRBY3RpdmUiLCJvblJlbW92ZSIsInJlc3QiLCJEZXRhaWwiLCJmaW5kIiwieCIsImlkIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVksZ0NBQ2hCO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsTUFBZCxRQUFjQSxNQUFkO0FBQUEsU0FBNEI7QUFDMUJDLGFBQVNGLFlBQVksQ0FBWixHQUFnQixDQURDO0FBRTFCRyxnQkFBWSx3QkFGYztBQUcxQkMsYUFBU0gsU0FBUyxPQUFULEdBQW1CO0FBSEYsR0FBNUI7QUFBQSxDQURnQixFQU1oQixLQU5nQixDQUFsQjs7QUFTQSxJQUFNSSxVQUFVLHdCQUNkLGVBQUtDLE1BQUwsRUFEYyxFQUVkLDBCQUFVLFVBQVYsRUFBc0IsV0FBdEIsRUFBbUMsSUFBbkMsQ0FGYyxFQUdkLDBCQUFVO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDeEJDLFdBQU9ELE1BQU1FLE1BQU4sR0FBZTtBQURFLEdBQWhCO0FBQUEsQ0FBVixDQUhjLEVBTWQsa0NBQWtCLENBQUMsT0FBRCxDQUFsQixFQUE2QixpQkFBZTtBQUFBLE1BQVpGLEtBQVksU0FBWkEsS0FBWTs7QUFDMUM7QUFDQSxNQUFNRyxlQUFlLEVBQXJCO0FBQ0FILFFBQU1JLE9BQU4sQ0FBYztBQUFBLFdBQ1osQ0FBQ0MsS0FBS0MsSUFBTCxJQUFhLEVBQWQsRUFBa0JGLE9BQWxCLENBQTBCO0FBQUEsYUFBT0QsYUFBYUksSUFBYixDQUFrQkMsR0FBbEIsQ0FBUDtBQUFBLEtBQTFCLENBRFk7QUFBQSxHQUFkO0FBR0EsTUFBTUMsY0FBYyx1QkFBUU4sWUFBUixDQUFwQjs7QUFFQSxTQUFPLEVBQUVBLDBCQUFGLEVBQWdCTSx3QkFBaEIsRUFBUDtBQUNELENBVEQsQ0FOYyxDQUFoQjs7a0JBa0JlWCxRQUNiLGlCQVdNO0FBQUEsTUFWSlksSUFVSSxTQVZKQSxJQVVJO0FBQUEsMEJBVEpWLEtBU0k7QUFBQSxNQVRKQSxLQVNJLCtCQVRJLEVBU0o7QUFBQSxNQVJKVyxRQVFJLFNBUkpBLFFBUUk7QUFBQSxNQVBKVixLQU9JLFNBUEpBLEtBT0k7QUFBQSxNQU5KUixTQU1JLFNBTkpBLFNBTUk7QUFBQSxNQUxKbUIsUUFLSSxTQUxKQSxRQUtJO0FBQUEsTUFKSkMsT0FJSSxTQUpKQSxPQUlJO0FBQUEsTUFISkMsU0FHSSxTQUhKQSxTQUdJO0FBQUEsTUFGSkMsUUFFSSxTQUZKQSxRQUVJO0FBQUEsTUFEREMsSUFDQzs7QUFDSixNQUFNQyxTQUFTTCwyREFBZjtBQUNBLE1BQU1sQixTQUFTTSxNQUFNa0IsSUFBTixDQUFXO0FBQUEsV0FBS0MsRUFBRUMsRUFBRixLQUFTVCxRQUFkO0FBQUEsR0FBWCxLQUFzQ1gsTUFBTSxDQUFOLENBQXRDLElBQWtELEVBQWpFOztBQUVBLFNBQ0U7QUFBQyxhQUFEO0FBQUEsTUFBVyxXQUFXUCxTQUF0QixFQUFpQyxZQUFqQztBQUNFO0FBQUE7QUFBQTtBQUNHUSxlQUNDO0FBQ0UsZUFBT0QsS0FEVDtBQUVFLHFCQUFhLENBQUNOLE9BQU8wQixFQUFSLENBRmY7QUFHRSxpQkFBUztBQUFBLGNBQUdBLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGlCQUFZTixVQUFVTSxFQUFWLENBQVo7QUFBQSxTQUhYO0FBSUUsa0JBQVVMLFFBSlo7QUFLRSx3QkFBZTtBQUxqQjtBQUZKLEtBREY7QUFZR2YsVUFBTXFCLEdBQU4sQ0FBVTtBQUFBLGFBQ1Q7QUFBQyxpQkFBRDtBQUFBO0FBQ0UsZUFBS2hCLEtBQUtlLEVBRFo7QUFFRSxxQkFBVzNCLFNBRmI7QUFHRSxrQkFBUVksS0FBS2UsRUFBTCxLQUFZMUIsT0FBTzBCO0FBSDdCO0FBS0Usc0NBQUMsTUFBRCxlQUNNSixJQUROO0FBRUUsZ0JBQU1OLElBRlI7QUFHRSxjQUFJTCxLQUFLZSxFQUhYO0FBSUUsaUJBQU9wQixLQUpUO0FBS0UsZ0JBQU1LO0FBTFI7QUFMRixPQURTO0FBQUEsS0FBVjtBQVpILEdBREY7QUE4QkQsQ0E5Q1ksQyIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9kZXRhaWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBncm91cEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcywgd2l0aFByb3BzT25DaGFuZ2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgRGV0YWlsQnJvd3NlciBmcm9tICcuL2RldGFpbC1icm93c2VyJztcbmltcG9ydCBEZXRhaWxQaWNrZXIgZnJvbSAnLi9kZXRhaWwtcGlja2VyJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FsbGVyeSc7XG5pbXBvcnQgTGlnaHRib3hHYWxsZXJ5IGZyb20gJy4uL2xpZ2h0Ym94LWdhbGxlcnknO1xuXG5jb25zdCBDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGNvbGxhcHNlZCwgYWN0aXZlIH0pID0+ICh7XG4gICAgb3BhY2l0eTogY29sbGFwc2VkID8gMCA6IDEsXG4gICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMjAwbXMgZWFzZS1vdXQnLFxuICAgIGRpc3BsYXk6IGFjdGl2ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gIH0pLFxuICAnZGl2Jyxcbik7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBGb3JtLmNyZWF0ZSgpLFxuICB3aXRoU3RhdGUoJ2FjdGl2ZUlkJywgJ3NldEFjdGl2ZScsIG51bGwpLFxuICB3aXRoUHJvcHMoKHsgdmFsdWUgfSkgPT4gKHtcbiAgICBtdWx0aTogdmFsdWUubGVuZ3RoID4gMSxcbiAgfSkpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ3ZhbHVlJ10sICh7IHZhbHVlIH0pID0+IHtcbiAgICAvLyBnZXQgdGFnc1xuICAgIGNvbnN0IHNlbGVjdGVkVGFncyA9IFtdO1xuICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PlxuICAgICAgKGl0ZW0udGFncyB8fCBbXSkuZm9yRWFjaCh0YWcgPT4gc2VsZWN0ZWRUYWdzLnB1c2godGFnKSksXG4gICAgKTtcbiAgICBjb25zdCBncm91cGVkVGFncyA9IGdyb3VwQnkoc2VsZWN0ZWRUYWdzKTtcblxuICAgIHJldHVybiB7IHNlbGVjdGVkVGFncywgZ3JvdXBlZFRhZ3MgfTtcbiAgfSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFxuICAoe1xuICAgIGZvcm0sXG4gICAgdmFsdWUgPSBbXSxcbiAgICBhY3RpdmVJZCxcbiAgICBtdWx0aSxcbiAgICBjb2xsYXBzZWQsXG4gICAgZWRpdGFibGUsXG4gICAgb25DbGljayxcbiAgICBzZXRBY3RpdmUsXG4gICAgb25SZW1vdmUsXG4gICAgLi4ucmVzdFxuICB9KSA9PiB7XG4gICAgY29uc3QgRGV0YWlsID0gZWRpdGFibGUgPyBEZXRhaWxCcm93c2VyIDogRGV0YWlsUGlja2VyO1xuICAgIGNvbnN0IGFjdGl2ZSA9IHZhbHVlLmZpbmQoeCA9PiB4LmlkID09PSBhY3RpdmVJZCkgfHwgdmFsdWVbMF0gfHwge307XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gYWN0aXZlPlxuICAgICAgICA8TGlnaHRib3hHYWxsZXJ5PlxuICAgICAgICAgIHttdWx0aSAmJiAoXG4gICAgICAgICAgICA8R2FsbGVyeVxuICAgICAgICAgICAgICBpdGVtcz17dmFsdWV9XG4gICAgICAgICAgICAgIHNlbGVjdGVkSWRzPXtbYWN0aXZlLmlkXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KHsgaWQgfSkgPT4gc2V0QWN0aXZlKGlkKX1cbiAgICAgICAgICAgICAgb25SZW1vdmU9e29uUmVtb3ZlfVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGlnaHRib3hHYWxsZXJ5PlxuICAgICAgICB7dmFsdWUubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICAgICAgYWN0aXZlPXtpdGVtLmlkID09PSBhY3RpdmUuaWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERldGFpbFxuICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICkpfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfSxcbik7XG4iXX0=

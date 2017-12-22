import _get from 'lodash/get';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';

import { compose, withPropsOnChange } from 'recompose';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import compareAsc from 'date-fns/compareAsc';

import moment from 'moment';
import { getPrintableValue } from '../utils';

BigCalendar.momentLocalizer(moment);

var min = new Date(0, 0, 0, 7, 0, 0, 0);
var max = new Date(0, 0, 0, 22, 0, 0, 0);

var EventAgenda = function EventAgenda(_onClick) {
  return function (_ref) {
    var event = _ref.event;
    return React.createElement(
      'div',
      { onClick: function onClick() {
          return _onClick(event);
        }, style: { cursor: 'pointer' } },
      React.createElement(
        'h4',
        null,
        event.title
      ),
      event.desc
    );
  };
};

var Calendar = createComponent(function (_ref2) {
  var theme = _ref2.theme;
  return {
    '& .rbc-event': {
      backgroundColor: theme.color,
      borderRadius: 0,
      marginX: theme.space1,
      onHover: {
        opacity: 0.67
      }
    }
  };
}, function (p) {
  return React.createElement(BigCalendar, p);
}, function (p) {
  return Object.keys(p);
});

var enhance = compose(withPropsOnChange(['items', 'collection', 'sortBy'], function (_ref3) {
  var items = _ref3.items,
      collection = _ref3.collection,
      sortBy = _ref3.sortBy;

  var nameField = _get(collection, 'specialFields.nameField', 'name');
  var descriptionField = _get(collection, 'specialFields.descriptionField');
  var startField = _get(collection, 'specialFields.startField');
  var endField = _get(collection, 'specialFields.endField');
  var allDay = collection.fields.find(function (x) {
    return x.name === startField;
  }).innerType.name === 'Date';

  var events = (items || []).map(function (item) {
    return {
      id: item.id,
      title: item[nameField],
      desc: !!descriptionField && getPrintableValue(item[sortBy || descriptionField], collection.fields.find(function (field) {
        return field.name === (sortBy || descriptionField);
      })),
      allDay: allDay,
      start: new Date(item[startField]),
      end: endField ? new Date(item[endField]) : new Date(item[startField])
    };
  });

  return { events: events, startField: startField, endField: endField };
}));

var CalendarView = enhance(_class = function (_Component) {
  _inherits(CalendarView, _Component);

  function CalendarView() {
    _classCallCheck(this, CalendarView);

    return _possibleConstructorReturn(this, (CalendarView.__proto__ || Object.getPrototypeOf(CalendarView)).apply(this, arguments));
  }

  _createClass(CalendarView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          collection = _props.collection,
          events = _props.events,
          updateQuery = _props.updateQuery,
          typeName = _props.typeName,
          startField = _props.startField,
          endField = _props.endField;


      return React.createElement(Calendar, {
        selectable: true,
        events: events,
        messages: {
          allDay: 'Ganztägig',
          previous: 'Zurück',
          next: 'Vor',
          today: 'Heute',
          month: 'Monat',
          week: 'Woche',
          day: 'Tag',
          agenda: 'Agenda',
          date: 'Datum',
          time: 'Zeit',
          event: collection.name
          // showMore: Function
        },
        components: {
          agenda: {
            event: EventAgenda(function (event) {
              return updateQuery(_defineProperty({}, '@' + typeName.toLowerCase(), event.id));
            })
          }
        },
        formats: {
          dateFormat: 'DD.',
          dayFormat: 'dd, DD.MM',
          dayHeaderFormat: 'dddd, DD. MMMM YYYY',
          agendaDateFormat: 'dd, DD.MM.YYYY',
          agendaTimeRangeFormat: function agendaTimeRangeFormat(_ref4) {
            var start = _ref4.start,
                end = _ref4.end;
            return compareAsc(start, end) ? format(start, 'HH:mm') + ' bis ' + format(end, 'HH:mm') : format(start, 'HH:mm');
          },
          eventTimeRangeFormat: function eventTimeRangeFormat(_ref5) {
            var start = _ref5.start,
                end = _ref5.end;
            return compareAsc(start, end) ? format(start, 'HH:mm') + ' bis ' + format(end, 'HH:mm') : format(start, 'HH:mm');
          }
        },
        min: min,
        max: max,
        onSelectEvent: function onSelectEvent(event) {
          return updateQuery(_defineProperty({}, '@' + typeName.toLowerCase(), event.id));
        },
        onSelectSlot: function onSelectSlot(slotInfo) {
          var query = _defineProperty({}, '@' + typeName.toLowerCase(), 'new');

          if (startField) {
            query[startField] = slotInfo.start;
          }

          if (endField) {
            query[endField] = slotInfo.end;
          }

          updateQuery(query);
        }
      });
    }
  }]);

  return CalendarView;
}(Component)) || _class;

export { CalendarView as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdmlldy9jYWxlbmRhci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb21wb3NlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJCaWdDYWxlbmRhciIsIm1vbWVudCIsImdldFByaW50YWJsZVZhbHVlIiwibW9tZW50TG9jYWxpemVyIiwibWluIiwiRGF0ZSIsIm1heCIsIkV2ZW50QWdlbmRhIiwiZXZlbnQiLCJvbkNsaWNrIiwiY3Vyc29yIiwidGl0bGUiLCJkZXNjIiwiQ2FsZW5kYXIiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luWCIsInNwYWNlMSIsIm9uSG92ZXIiLCJvcGFjaXR5IiwicCIsIk9iamVjdCIsImtleXMiLCJlbmhhbmNlIiwiaXRlbXMiLCJjb2xsZWN0aW9uIiwic29ydEJ5IiwibmFtZUZpZWxkIiwiZGVzY3JpcHRpb25GaWVsZCIsInN0YXJ0RmllbGQiLCJlbmRGaWVsZCIsImFsbERheSIsImZpZWxkcyIsImZpbmQiLCJ4IiwibmFtZSIsImlubmVyVHlwZSIsImV2ZW50cyIsIm1hcCIsImlkIiwiaXRlbSIsImZpZWxkIiwic3RhcnQiLCJlbmQiLCJDYWxlbmRhclZpZXciLCJwcm9wcyIsInVwZGF0ZVF1ZXJ5IiwidHlwZU5hbWUiLCJwcmV2aW91cyIsIm5leHQiLCJ0b2RheSIsIm1vbnRoIiwid2VlayIsImRheSIsImFnZW5kYSIsImRhdGUiLCJ0aW1lIiwidG9Mb3dlckNhc2UiLCJkYXRlRm9ybWF0IiwiZGF5Rm9ybWF0IiwiZGF5SGVhZGVyRm9ybWF0IiwiYWdlbmRhRGF0ZUZvcm1hdCIsImFnZW5kYVRpbWVSYW5nZUZvcm1hdCIsImNvbXBhcmVBc2MiLCJmb3JtYXQiLCJldmVudFRpbWVSYW5nZUZvcm1hdCIsInF1ZXJ5Iiwic2xvdEluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FB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S0FBWjtBQUNEO0FBekRILFFBREY7QUE2REQ7Ozs7RUF4RXVDeEUsUzs7U0FBckJrRCxZIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vdmlldy9jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHNPbkNoYW5nZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgQmlnQ2FsZW5kYXIgZnJvbSAncmVhY3QtYmlnLWNhbGVuZGFyJztcbmltcG9ydCAncmVhY3QtYmlnLWNhbGVuZGFyL2xpYi9jc3MvcmVhY3QtYmlnLWNhbGVuZGFyLmNzcyc7XG5pbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBnZXRQcmludGFibGVWYWx1ZSB9IGZyb20gJy4uL3V0aWxzJztcblxuQmlnQ2FsZW5kYXIubW9tZW50TG9jYWxpemVyKG1vbWVudCk7XG5cbmNvbnN0IG1pbiA9IG5ldyBEYXRlKDAsIDAsIDAsIDcsIDAsIDAsIDApO1xuY29uc3QgbWF4ID0gbmV3IERhdGUoMCwgMCwgMCwgMjIsIDAsIDAsIDApO1xuXG5jb25zdCBFdmVudEFnZW5kYSA9IG9uQ2xpY2sgPT4gKHsgZXZlbnQgfSkgPT4gKFxuICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soZXZlbnQpfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICA8aDQ+e2V2ZW50LnRpdGxlfTwvaDQ+XG4gICAge2V2ZW50LmRlc2N9XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ2FsZW5kYXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgJyYgLnJiYy1ldmVudCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICBtYXJnaW5YOiB0aGVtZS5zcGFjZTEsXG4gICAgICBvbkhvdmVyOiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBwID0+IDxCaWdDYWxlbmRhciB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFByb3BzT25DaGFuZ2UoXG4gICAgWydpdGVtcycsICdjb2xsZWN0aW9uJywgJ3NvcnRCeSddLFxuICAgICh7IGl0ZW1zLCBjb2xsZWN0aW9uLCBzb3J0QnkgfSkgPT4ge1xuICAgICAgY29uc3QgbmFtZUZpZWxkID0gZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLm5hbWVGaWVsZCcsICduYW1lJyk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gZ2V0KFxuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAnc3BlY2lhbEZpZWxkcy5kZXNjcmlwdGlvbkZpZWxkJyxcbiAgICAgICk7XG4gICAgICBjb25zdCBzdGFydEZpZWxkID0gZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLnN0YXJ0RmllbGQnKTtcbiAgICAgIGNvbnN0IGVuZEZpZWxkID0gZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLmVuZEZpZWxkJyk7XG4gICAgICBjb25zdCBhbGxEYXkgPVxuICAgICAgICBjb2xsZWN0aW9uLmZpZWxkcy5maW5kKHggPT4geC5uYW1lID09PSBzdGFydEZpZWxkKS5pbm5lclR5cGUubmFtZSA9PT1cbiAgICAgICAgJ0RhdGUnO1xuXG4gICAgICBjb25zdCBldmVudHMgPSAoaXRlbXMgfHwgW10pLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICB0aXRsZTogaXRlbVtuYW1lRmllbGRdLFxuICAgICAgICBkZXNjOlxuICAgICAgICAgICEhZGVzY3JpcHRpb25GaWVsZCAmJlxuICAgICAgICAgIGdldFByaW50YWJsZVZhbHVlKFxuICAgICAgICAgICAgaXRlbVtzb3J0QnkgfHwgZGVzY3JpcHRpb25GaWVsZF0sXG4gICAgICAgICAgICBjb2xsZWN0aW9uLmZpZWxkcy5maW5kKFxuICAgICAgICAgICAgICBmaWVsZCA9PiBmaWVsZC5uYW1lID09PSAoc29ydEJ5IHx8IGRlc2NyaXB0aW9uRmllbGQpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApLFxuICAgICAgICBhbGxEYXksXG4gICAgICAgIHN0YXJ0OiBuZXcgRGF0ZShpdGVtW3N0YXJ0RmllbGRdKSxcbiAgICAgICAgZW5kOiBlbmRGaWVsZCA/IG5ldyBEYXRlKGl0ZW1bZW5kRmllbGRdKSA6IG5ldyBEYXRlKGl0ZW1bc3RhcnRGaWVsZF0pLFxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4geyBldmVudHMsIHN0YXJ0RmllbGQsIGVuZEZpZWxkIH07XG4gICAgfSxcbiAgKSxcbik7XG5cbkBlbmhhbmNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhclZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGV2ZW50cyxcbiAgICAgIHVwZGF0ZVF1ZXJ5LFxuICAgICAgdHlwZU5hbWUsXG4gICAgICBzdGFydEZpZWxkLFxuICAgICAgZW5kRmllbGQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhbGVuZGFyXG4gICAgICAgIHNlbGVjdGFibGVcbiAgICAgICAgZXZlbnRzPXtldmVudHN9XG4gICAgICAgIG1lc3NhZ2VzPXt7XG4gICAgICAgICAgYWxsRGF5OiAnR2FuenTDpGdpZycsXG4gICAgICAgICAgcHJldmlvdXM6ICdadXLDvGNrJyxcbiAgICAgICAgICBuZXh0OiAnVm9yJyxcbiAgICAgICAgICB0b2RheTogJ0hldXRlJyxcbiAgICAgICAgICBtb250aDogJ01vbmF0JyxcbiAgICAgICAgICB3ZWVrOiAnV29jaGUnLFxuICAgICAgICAgIGRheTogJ1RhZycsXG4gICAgICAgICAgYWdlbmRhOiAnQWdlbmRhJyxcbiAgICAgICAgICBkYXRlOiAnRGF0dW0nLFxuICAgICAgICAgIHRpbWU6ICdaZWl0JyxcbiAgICAgICAgICBldmVudDogY29sbGVjdGlvbi5uYW1lLFxuICAgICAgICAgIC8vIHNob3dNb3JlOiBGdW5jdGlvblxuICAgICAgICB9fVxuICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgYWdlbmRhOiB7XG4gICAgICAgICAgICBldmVudDogRXZlbnRBZ2VuZGEoZXZlbnQgPT5cbiAgICAgICAgICAgICAgdXBkYXRlUXVlcnkoeyBbYEAke3R5cGVOYW1lLnRvTG93ZXJDYXNlKCl9YF06IGV2ZW50LmlkIH0pLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBmb3JtYXRzPXt7XG4gICAgICAgICAgZGF0ZUZvcm1hdDogJ0RELicsXG4gICAgICAgICAgZGF5Rm9ybWF0OiAnZGQsIERELk1NJyxcbiAgICAgICAgICBkYXlIZWFkZXJGb3JtYXQ6ICdkZGRkLCBERC4gTU1NTSBZWVlZJyxcbiAgICAgICAgICBhZ2VuZGFEYXRlRm9ybWF0OiAnZGQsIERELk1NLllZWVknLFxuICAgICAgICAgIGFnZW5kYVRpbWVSYW5nZUZvcm1hdDogKHsgc3RhcnQsIGVuZCB9KSA9PlxuICAgICAgICAgICAgY29tcGFyZUFzYyhzdGFydCwgZW5kKVxuICAgICAgICAgICAgICA/IGAke2Zvcm1hdChzdGFydCwgJ0hIOm1tJyl9IGJpcyAke2Zvcm1hdChlbmQsICdISDptbScpfWBcbiAgICAgICAgICAgICAgOiBmb3JtYXQoc3RhcnQsICdISDptbScpLFxuICAgICAgICAgIGV2ZW50VGltZVJhbmdlRm9ybWF0OiAoeyBzdGFydCwgZW5kIH0pID0+XG4gICAgICAgICAgICBjb21wYXJlQXNjKHN0YXJ0LCBlbmQpXG4gICAgICAgICAgICAgID8gYCR7Zm9ybWF0KHN0YXJ0LCAnSEg6bW0nKX0gYmlzICR7Zm9ybWF0KGVuZCwgJ0hIOm1tJyl9YFxuICAgICAgICAgICAgICA6IGZvcm1hdChzdGFydCwgJ0hIOm1tJyksXG4gICAgICAgIH19XG4gICAgICAgIG1pbj17bWlufVxuICAgICAgICBtYXg9e21heH1cbiAgICAgICAgb25TZWxlY3RFdmVudD17ZXZlbnQgPT5cbiAgICAgICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1gXTogZXZlbnQuaWQgfSlcbiAgICAgICAgfVxuICAgICAgICBvblNlbGVjdFNsb3Q9e3Nsb3RJbmZvID0+IHtcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgICAgICAgIFtgQCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1gXTogJ25ldycsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChzdGFydEZpZWxkKSB7XG4gICAgICAgICAgICBxdWVyeVtzdGFydEZpZWxkXSA9IHNsb3RJbmZvLnN0YXJ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbmRGaWVsZCkge1xuICAgICAgICAgICAgcXVlcnlbZW5kRmllbGRdID0gc2xvdEluZm8uZW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19

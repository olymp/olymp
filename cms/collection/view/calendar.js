'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _reactBigCalendar = require('react-big-calendar');

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

require('react-big-calendar/lib/css/react-big-calendar.css');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _compareAsc = require('date-fns/compareAsc');

var _compareAsc2 = _interopRequireDefault(_compareAsc);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_reactBigCalendar2.default.momentLocalizer(_moment2.default);

var min = new Date(0, 0, 0, 7, 0, 0, 0);
var max = new Date(0, 0, 0, 22, 0, 0, 0);

var EventAgenda = function EventAgenda(_onClick) {
  return function (_ref) {
    var event = _ref.event;
    return _react2.default.createElement(
      'div',
      { onClick: function onClick() {
          return _onClick(event);
        }, style: { cursor: 'pointer' } },
      _react2.default.createElement(
        'h4',
        null,
        event.title
      ),
      event.desc
    );
  };
};

var Calendar = (0, _olympFela.createComponent)(function (_ref2) {
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
  return _react2.default.createElement(_reactBigCalendar2.default, p);
}, function (p) {
  return Object.keys(p);
});

var enhance = (0, _recompose.compose)((0, _recompose.withPropsOnChange)(['items', 'collection', 'sortBy'], function (_ref3) {
  var items = _ref3.items,
      collection = _ref3.collection,
      sortBy = _ref3.sortBy;

  var nameField = (0, _get3.default)(collection, 'specialFields.nameField', 'name');
  var descriptionField = (0, _get3.default)(collection, 'specialFields.descriptionField');
  var startField = (0, _get3.default)(collection, 'specialFields.startField');
  var endField = (0, _get3.default)(collection, 'specialFields.endField');
  var allDay = collection.fields.find(function (x) {
    return x.name === startField;
  }).innerType.name === 'Date';

  var events = (items || []).map(function (item) {
    return {
      id: item.id,
      title: item[nameField],
      desc: !!descriptionField && (0, _utils.getPrintableValue)(item[sortBy || descriptionField], collection.fields.find(function (field) {
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


      return _react2.default.createElement(Calendar, {
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
            return (0, _compareAsc2.default)(start, end) ? (0, _format2.default)(start, 'HH:mm') + ' bis ' + (0, _format2.default)(end, 'HH:mm') : (0, _format2.default)(start, 'HH:mm');
          },
          eventTimeRangeFormat: function eventTimeRangeFormat(_ref5) {
            var start = _ref5.start,
                end = _ref5.end;
            return (0, _compareAsc2.default)(start, end) ? (0, _format2.default)(start, 'HH:mm') + ' bis ' + (0, _format2.default)(end, 'HH:mm') : (0, _format2.default)(start, 'HH:mm');
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
}(_react.Component)) || _class;

exports.default = CalendarView;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3ZpZXcvY2FsZW5kYXIuZXM2Il0sIm5hbWVzIjpbIm1vbWVudExvY2FsaXplciIsIm1pbiIsIkRhdGUiLCJtYXgiLCJFdmVudEFnZW5kYSIsImV2ZW50Iiwib25DbGljayIsImN1cnNvciIsInRpdGxlIiwiZGVzYyIsIkNhbGVuZGFyIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcmdpblgiLCJzcGFjZTEiLCJvbkhvdmVyIiwib3BhY2l0eSIsInAiLCJPYmplY3QiLCJrZXlzIiwiZW5oYW5jZSIsIml0ZW1zIiwiY29sbGVjdGlvbiIsInNvcnRCeSIsIm5hbWVGaWVsZCIsImRlc2NyaXB0aW9uRmllbGQiLCJzdGFydEZpZWxkIiwiZW5kRmllbGQiLCJhbGxEYXkiLCJmaWVsZHMiLCJmaW5kIiwieCIsIm5hbWUiLCJpbm5lclR5cGUiLCJldmVudHMiLCJtYXAiLCJpZCIsIml0ZW0iLCJmaWVsZCIsInN0YXJ0IiwiZW5kIiwiQ2FsZW5kYXJWaWV3IiwicHJvcHMiLCJ1cGRhdGVRdWVyeSIsInR5cGVOYW1lIiwicHJldmlvdXMiLCJuZXh0IiwidG9kYXkiLCJtb250aCIsIndlZWsiLCJkYXkiLCJhZ2VuZGEiLCJkYXRlIiwidGltZSIsInRvTG93ZXJDYXNlIiwiZGF0ZUZvcm1hdCIsImRheUZvcm1hdCIsImRheUhlYWRlckZvcm1hdCIsImFnZW5kYURhdGVGb3JtYXQiLCJhZ2VuZGFUaW1lUmFuZ2VGb3JtYXQiLCJldmVudFRpbWVSYW5nZUZvcm1hdCIsInF1ZXJ5Iiwic2xvdEluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLDJCQUFZQSxlQUFaOztBQUVBLElBQU1DLE1BQU0sSUFBSUMsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUFaO0FBQ0EsSUFBTUMsTUFBTSxJQUFJRCxJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQVo7O0FBRUEsSUFBTUUsY0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FBVztBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFdBQzdCO0FBQUE7QUFBQSxRQUFLLFNBQVM7QUFBQSxpQkFBTUMsU0FBUUQsS0FBUixDQUFOO0FBQUEsU0FBZCxFQUFvQyxPQUFPLEVBQUVFLFFBQVEsU0FBVixFQUEzQztBQUNFO0FBQUE7QUFBQTtBQUFLRixjQUFNRztBQUFYLE9BREY7QUFFR0gsWUFBTUk7QUFGVCxLQUQ2QjtBQUFBLEdBQVg7QUFBQSxDQUFwQjs7QUFPQSxJQUFNQyxXQUFXLGdDQUNmO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDZCxvQkFBZ0I7QUFDZEMsdUJBQWlCRCxNQUFNRSxLQURUO0FBRWRDLG9CQUFjLENBRkE7QUFHZEMsZUFBU0osTUFBTUssTUFIRDtBQUlkQyxlQUFTO0FBQ1BDLGlCQUFTO0FBREY7QUFKSztBQURGLEdBQWhCO0FBQUEsQ0FEZSxFQVdmO0FBQUEsU0FBSywwREFBaUJDLENBQWpCLENBQUw7QUFBQSxDQVhlLEVBWWY7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBWmUsQ0FBakI7O0FBZUEsSUFBTUcsVUFBVSx3QkFDZCxrQ0FDRSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCLFFBQXhCLENBREYsRUFFRSxpQkFBbUM7QUFBQSxNQUFoQ0MsS0FBZ0MsU0FBaENBLEtBQWdDO0FBQUEsTUFBekJDLFVBQXlCLFNBQXpCQSxVQUF5QjtBQUFBLE1BQWJDLE1BQWEsU0FBYkEsTUFBYTs7QUFDakMsTUFBTUMsWUFBWSxtQkFBSUYsVUFBSixFQUFnQix5QkFBaEIsRUFBMkMsTUFBM0MsQ0FBbEI7QUFDQSxNQUFNRyxtQkFBbUIsbUJBQ3ZCSCxVQUR1QixFQUV2QixnQ0FGdUIsQ0FBekI7QUFJQSxNQUFNSSxhQUFhLG1CQUFJSixVQUFKLEVBQWdCLDBCQUFoQixDQUFuQjtBQUNBLE1BQU1LLFdBQVcsbUJBQUlMLFVBQUosRUFBZ0Isd0JBQWhCLENBQWpCO0FBQ0EsTUFBTU0sU0FDSk4sV0FBV08sTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUI7QUFBQSxXQUFLQyxFQUFFQyxJQUFGLEtBQVdOLFVBQWhCO0FBQUEsR0FBdkIsRUFBbURPLFNBQW5ELENBQTZERCxJQUE3RCxLQUNBLE1BRkY7O0FBSUEsTUFBTUUsU0FBUyxDQUFDYixTQUFTLEVBQVYsRUFBY2MsR0FBZCxDQUFrQjtBQUFBLFdBQVM7QUFDeENDLFVBQUlDLEtBQUtELEVBRCtCO0FBRXhDOUIsYUFBTytCLEtBQUtiLFNBQUwsQ0FGaUM7QUFHeENqQixZQUNFLENBQUMsQ0FBQ2tCLGdCQUFGLElBQ0EsOEJBQ0VZLEtBQUtkLFVBQVVFLGdCQUFmLENBREYsRUFFRUgsV0FBV08sTUFBWCxDQUFrQkMsSUFBbEIsQ0FDRTtBQUFBLGVBQVNRLE1BQU1OLElBQU4sTUFBZ0JULFVBQVVFLGdCQUExQixDQUFUO0FBQUEsT0FERixDQUZGLENBTHNDO0FBV3hDRyxvQkFYd0M7QUFZeENXLGFBQU8sSUFBSXZDLElBQUosQ0FBU3FDLEtBQUtYLFVBQUwsQ0FBVCxDQVppQztBQWF4Q2MsV0FBS2IsV0FBVyxJQUFJM0IsSUFBSixDQUFTcUMsS0FBS1YsUUFBTCxDQUFULENBQVgsR0FBc0MsSUFBSTNCLElBQUosQ0FBU3FDLEtBQUtYLFVBQUwsQ0FBVDtBQWJILEtBQVQ7QUFBQSxHQUFsQixDQUFmOztBQWdCQSxTQUFPLEVBQUVRLGNBQUYsRUFBVVIsc0JBQVYsRUFBc0JDLGtCQUF0QixFQUFQO0FBQ0QsQ0EvQkgsQ0FEYyxDQUFoQjs7SUFxQ3FCYyxZLEdBRHBCckIsTzs7Ozs7Ozs7Ozs7NkJBRVU7QUFBQSxtQkFRSCxLQUFLc0IsS0FSRjtBQUFBLFVBRUxwQixVQUZLLFVBRUxBLFVBRks7QUFBQSxVQUdMWSxNQUhLLFVBR0xBLE1BSEs7QUFBQSxVQUlMUyxXQUpLLFVBSUxBLFdBSks7QUFBQSxVQUtMQyxRQUxLLFVBS0xBLFFBTEs7QUFBQSxVQU1MbEIsVUFOSyxVQU1MQSxVQU5LO0FBQUEsVUFPTEMsUUFQSyxVQU9MQSxRQVBLOzs7QUFVUCxhQUNFLDhCQUFDLFFBQUQ7QUFDRSx3QkFERjtBQUVFLGdCQUFRTyxNQUZWO0FBR0Usa0JBQVU7QUFDUk4sa0JBQVEsV0FEQTtBQUVSaUIsb0JBQVUsUUFGRjtBQUdSQyxnQkFBTSxLQUhFO0FBSVJDLGlCQUFPLE9BSkM7QUFLUkMsaUJBQU8sT0FMQztBQU1SQyxnQkFBTSxPQU5FO0FBT1JDLGVBQUssS0FQRztBQVFSQyxrQkFBUSxRQVJBO0FBU1JDLGdCQUFNLE9BVEU7QUFVUkMsZ0JBQU0sTUFWRTtBQVdSbEQsaUJBQU9tQixXQUFXVTtBQUNsQjtBQVpRLFNBSFo7QUFpQkUsb0JBQVk7QUFDVm1CLGtCQUFRO0FBQ05oRCxtQkFBT0QsWUFBWTtBQUFBLHFCQUNqQnlDLHNDQUFtQkMsU0FBU1UsV0FBVCxFQUFuQixFQUE4Q25ELE1BQU1pQyxFQUFwRCxFQURpQjtBQUFBLGFBQVo7QUFERDtBQURFLFNBakJkO0FBd0JFLGlCQUFTO0FBQ1BtQixzQkFBWSxLQURMO0FBRVBDLHFCQUFXLFdBRko7QUFHUEMsMkJBQWlCLHFCQUhWO0FBSVBDLDRCQUFrQixnQkFKWDtBQUtQQyxpQ0FBdUI7QUFBQSxnQkFBR3BCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGdCQUFVQyxHQUFWLFNBQVVBLEdBQVY7QUFBQSxtQkFDckIsMEJBQVdELEtBQVgsRUFBa0JDLEdBQWxCLElBQ08sc0JBQU9ELEtBQVAsRUFBYyxPQUFkLENBRFAsYUFDcUMsc0JBQU9DLEdBQVAsRUFBWSxPQUFaLENBRHJDLEdBRUksc0JBQU9ELEtBQVAsRUFBYyxPQUFkLENBSGlCO0FBQUEsV0FMaEI7QUFTUHFCLGdDQUFzQjtBQUFBLGdCQUFHckIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsZ0JBQVVDLEdBQVYsU0FBVUEsR0FBVjtBQUFBLG1CQUNwQiwwQkFBV0QsS0FBWCxFQUFrQkMsR0FBbEIsSUFDTyxzQkFBT0QsS0FBUCxFQUFjLE9BQWQsQ0FEUCxhQUNxQyxzQkFBT0MsR0FBUCxFQUFZLE9BQVosQ0FEckMsR0FFSSxzQkFBT0QsS0FBUCxFQUFjLE9BQWQsQ0FIZ0I7QUFBQTtBQVRmLFNBeEJYO0FBc0NFLGFBQUt4QyxHQXRDUDtBQXVDRSxhQUFLRSxHQXZDUDtBQXdDRSx1QkFBZTtBQUFBLGlCQUNiMEMsc0NBQW1CQyxTQUFTVSxXQUFULEVBQW5CLEVBQThDbkQsTUFBTWlDLEVBQXBELEVBRGE7QUFBQSxTQXhDakI7QUEyQ0Usc0JBQWMsZ0NBQVk7QUFDeEIsY0FBTXlCLGtDQUNDakIsU0FBU1UsV0FBVCxFQURELEVBQzRCLEtBRDVCLENBQU47O0FBSUEsY0FBSTVCLFVBQUosRUFBZ0I7QUFDZG1DLGtCQUFNbkMsVUFBTixJQUFvQm9DLFNBQVN2QixLQUE3QjtBQUNEOztBQUVELGNBQUlaLFFBQUosRUFBYztBQUNaa0Msa0JBQU1sQyxRQUFOLElBQWtCbUMsU0FBU3RCLEdBQTNCO0FBQ0Q7O0FBRURHLHNCQUFZa0IsS0FBWjtBQUNEO0FBekRILFFBREY7QUE2REQ7Ozs7OztrQkF4RWtCcEIsWSIsImZpbGUiOiJjbXMvY29sbGVjdGlvbi92aWV3L2NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBCaWdDYWxlbmRhciBmcm9tICdyZWFjdC1iaWctY2FsZW5kYXInO1xuaW1wb3J0ICdyZWFjdC1iaWctY2FsZW5kYXIvbGliL2Nzcy9yZWFjdC1iaWctY2FsZW5kYXIuY3NzJztcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGdldFByaW50YWJsZVZhbHVlIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5CaWdDYWxlbmRhci5tb21lbnRMb2NhbGl6ZXIobW9tZW50KTtcblxuY29uc3QgbWluID0gbmV3IERhdGUoMCwgMCwgMCwgNywgMCwgMCwgMCk7XG5jb25zdCBtYXggPSBuZXcgRGF0ZSgwLCAwLCAwLCAyMiwgMCwgMCwgMCk7XG5cbmNvbnN0IEV2ZW50QWdlbmRhID0gb25DbGljayA9PiAoeyBldmVudCB9KSA9PiAoXG4gIDxkaXYgb25DbGljaz17KCkgPT4gb25DbGljayhldmVudCl9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgIDxoND57ZXZlbnQudGl0bGV9PC9oND5cbiAgICB7ZXZlbnQuZGVzY31cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDYWxlbmRhciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAnJiAucmJjLWV2ZW50Jzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgIG1hcmdpblg6IHRoZW1lLnNwYWNlMSxcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgb3BhY2l0eTogMC42NyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHAgPT4gPEJpZ0NhbGVuZGFyIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ2l0ZW1zJywgJ2NvbGxlY3Rpb24nLCAnc29ydEJ5J10sXG4gICAgKHsgaXRlbXMsIGNvbGxlY3Rpb24sIHNvcnRCeSB9KSA9PiB7XG4gICAgICBjb25zdCBuYW1lRmllbGQgPSBnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMubmFtZUZpZWxkJywgJ25hbWUnKTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSBnZXQoXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICdzcGVjaWFsRmllbGRzLmRlc2NyaXB0aW9uRmllbGQnLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHN0YXJ0RmllbGQgPSBnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMuc3RhcnRGaWVsZCcpO1xuICAgICAgY29uc3QgZW5kRmllbGQgPSBnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMuZW5kRmllbGQnKTtcbiAgICAgIGNvbnN0IGFsbERheSA9XG4gICAgICAgIGNvbGxlY3Rpb24uZmllbGRzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHN0YXJ0RmllbGQpLmlubmVyVHlwZS5uYW1lID09PVxuICAgICAgICAnRGF0ZSc7XG5cbiAgICAgIGNvbnN0IGV2ZW50cyA9IChpdGVtcyB8fCBbXSkubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHRpdGxlOiBpdGVtW25hbWVGaWVsZF0sXG4gICAgICAgIGRlc2M6XG4gICAgICAgICAgISFkZXNjcmlwdGlvbkZpZWxkICYmXG4gICAgICAgICAgZ2V0UHJpbnRhYmxlVmFsdWUoXG4gICAgICAgICAgICBpdGVtW3NvcnRCeSB8fCBkZXNjcmlwdGlvbkZpZWxkXSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgIGZpZWxkID0+IGZpZWxkLm5hbWUgPT09IChzb3J0QnkgfHwgZGVzY3JpcHRpb25GaWVsZCksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICksXG4gICAgICAgIGFsbERheSxcbiAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKGl0ZW1bc3RhcnRGaWVsZF0pLFxuICAgICAgICBlbmQ6IGVuZEZpZWxkID8gbmV3IERhdGUoaXRlbVtlbmRGaWVsZF0pIDogbmV3IERhdGUoaXRlbVtzdGFydEZpZWxkXSksXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiB7IGV2ZW50cywgc3RhcnRGaWVsZCwgZW5kRmllbGQgfTtcbiAgICB9LFxuICApLFxuKTtcblxuQGVuaGFuY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZXZlbnRzLFxuICAgICAgdXBkYXRlUXVlcnksXG4gICAgICB0eXBlTmFtZSxcbiAgICAgIHN0YXJ0RmllbGQsXG4gICAgICBlbmRGaWVsZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FsZW5kYXJcbiAgICAgICAgc2VsZWN0YWJsZVxuICAgICAgICBldmVudHM9e2V2ZW50c31cbiAgICAgICAgbWVzc2FnZXM9e3tcbiAgICAgICAgICBhbGxEYXk6ICdHYW56dMOkZ2lnJyxcbiAgICAgICAgICBwcmV2aW91czogJ1p1csO8Y2snLFxuICAgICAgICAgIG5leHQ6ICdWb3InLFxuICAgICAgICAgIHRvZGF5OiAnSGV1dGUnLFxuICAgICAgICAgIG1vbnRoOiAnTW9uYXQnLFxuICAgICAgICAgIHdlZWs6ICdXb2NoZScsXG4gICAgICAgICAgZGF5OiAnVGFnJyxcbiAgICAgICAgICBhZ2VuZGE6ICdBZ2VuZGEnLFxuICAgICAgICAgIGRhdGU6ICdEYXR1bScsXG4gICAgICAgICAgdGltZTogJ1plaXQnLFxuICAgICAgICAgIGV2ZW50OiBjb2xsZWN0aW9uLm5hbWUsXG4gICAgICAgICAgLy8gc2hvd01vcmU6IEZ1bmN0aW9uXG4gICAgICAgIH19XG4gICAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgICBhZ2VuZGE6IHtcbiAgICAgICAgICAgIGV2ZW50OiBFdmVudEFnZW5kYShldmVudCA9PlxuICAgICAgICAgICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1gXTogZXZlbnQuaWQgfSksXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGZvcm1hdHM9e3tcbiAgICAgICAgICBkYXRlRm9ybWF0OiAnREQuJyxcbiAgICAgICAgICBkYXlGb3JtYXQ6ICdkZCwgREQuTU0nLFxuICAgICAgICAgIGRheUhlYWRlckZvcm1hdDogJ2RkZGQsIERELiBNTU1NIFlZWVknLFxuICAgICAgICAgIGFnZW5kYURhdGVGb3JtYXQ6ICdkZCwgREQuTU0uWVlZWScsXG4gICAgICAgICAgYWdlbmRhVGltZVJhbmdlRm9ybWF0OiAoeyBzdGFydCwgZW5kIH0pID0+XG4gICAgICAgICAgICBjb21wYXJlQXNjKHN0YXJ0LCBlbmQpXG4gICAgICAgICAgICAgID8gYCR7Zm9ybWF0KHN0YXJ0LCAnSEg6bW0nKX0gYmlzICR7Zm9ybWF0KGVuZCwgJ0hIOm1tJyl9YFxuICAgICAgICAgICAgICA6IGZvcm1hdChzdGFydCwgJ0hIOm1tJyksXG4gICAgICAgICAgZXZlbnRUaW1lUmFuZ2VGb3JtYXQ6ICh7IHN0YXJ0LCBlbmQgfSkgPT5cbiAgICAgICAgICAgIGNvbXBhcmVBc2Moc3RhcnQsIGVuZClcbiAgICAgICAgICAgICAgPyBgJHtmb3JtYXQoc3RhcnQsICdISDptbScpfSBiaXMgJHtmb3JtYXQoZW5kLCAnSEg6bW0nKX1gXG4gICAgICAgICAgICAgIDogZm9ybWF0KHN0YXJ0LCAnSEg6bW0nKSxcbiAgICAgICAgfX1cbiAgICAgICAgbWluPXttaW59XG4gICAgICAgIG1heD17bWF4fVxuICAgICAgICBvblNlbGVjdEV2ZW50PXtldmVudCA9PlxuICAgICAgICAgIHVwZGF0ZVF1ZXJ5KHsgW2BAJHt0eXBlTmFtZS50b0xvd2VyQ2FzZSgpfWBdOiBldmVudC5pZCB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU2VsZWN0U2xvdD17c2xvdEluZm8gPT4ge1xuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgICAgICAgW2BAJHt0eXBlTmFtZS50b0xvd2VyQ2FzZSgpfWBdOiAnbmV3JyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHN0YXJ0RmllbGQpIHtcbiAgICAgICAgICAgIHF1ZXJ5W3N0YXJ0RmllbGRdID0gc2xvdEluZm8uc3RhcnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVuZEZpZWxkKSB7XG4gICAgICAgICAgICBxdWVyeVtlbmRGaWVsZF0gPSBzbG90SW5mby5lbmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlUXVlcnkocXVlcnkpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=

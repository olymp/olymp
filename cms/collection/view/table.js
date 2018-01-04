'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _uniq2 = require('lodash/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/input/style');

require('antd/lib/table/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _isAfter = require('date-fns/isAfter');

var _isAfter2 = _interopRequireDefault(_isAfter);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledTable = (0, _olympFela.createComponent)(function () {
  return {
    '& td': {
      minWidth: 50,
      maxWidth: 200
    }
  };
}, function (p) {
  return _react2.default.createElement(_table2.default, p);
}, function (p) {
  return Object.keys(p);
});

var sortValue = function sortValue(item, collection) {
  if (item.name === (collection.specialFields.imageField || 'image' || 'bild')) return 50;

  if (item.name === (collection.specialFields.nameField || 'name')) return 40;

  if (item.name === (collection.specialFields.descriptionField || 'description' || 'beschreibung')) return 30;

  if (item.name === (collection.specialFields.colorField || 'color' || 'farbe')) return 20;

  return parseInt(item.specialFields.table, 10) || 10;
};

var getSorter = function getSorter(field) {
  return field.innerType.name === 'String' && function (a, b) {
    var nameA = (a[field.name] || '').toUpperCase();
    var nameB = (b[field.name] || '').toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  } || field.innerType.name === 'Int' && function (a, b) {
    return b[field.name] - a[field.name];
  } || field.innerType.name === 'Date' && function (a, b) {
    return (0, _isAfter2.default)(a[field.name], b[field.name]) ? 1 : -1;
  } || field.innerType.name === 'Bool' && function (a, b) {
    return a[field.name] && !b[field.name] ? 1 : -1;
  };
};

var getFilters = function getFilters(items, field) {
  if (field.type.kind === 'ENUM' || field.type.kind === 'LIST') {
    var arr = items.map(function (item) {
      return item[field.name];
    });

    return (0, _uniq3.default)(arr).map(function (x) {
      return {
        text: (0, _utils.getPrintableValue)(x, field),
        value: x
      };
    }).filter(function (x) {
      return x.value;
    });
  }

  return undefined;
};

var enhance = (0, _recompose.compose)((0, _recompose.withState)('activeFilter', 'setActiveFilter'), (0, _recompose.withState)('filter', 'setFilter', {}), (0, _recompose.withPropsOnChange)(['collection', 'items', 'filter', 'activeFilter'], function (_ref) {
  var collection = _ref.collection,
      items = _ref.items,
      filter = _ref.filter,
      setFilter = _ref.setFilter,
      activeFilter = _ref.activeFilter,
      setActiveFilter = _ref.setActiveFilter;
  return {
    columns: collection.fields.filter(function (x) {
      return x.specialFields.table || x.name === (collection.specialFields.nameField || 'name') || x.name === (collection.specialFields.descriptionField || 'description' || 'beschreibung') || x.name === (collection.specialFields.imageField || 'image' || 'bild') || x.name === (collection.specialFields.colorField || 'color' || 'farbe');
    }).sort(function (a, b) {
      return sortValue(b, collection) - sortValue(a, collection);
    }).map(function (field) {
      return {
        key: field.name,
        title: field.specialFields.label,
        dataIndex: field.name,
        sorter: getSorter(field),
        filters: getFilters(items, field),
        filterDropdown: field.innerType.name === 'String' && _react2.default.createElement(_input2.default, {
          placeholder: 'Filter',
          value: filter[field.name] ? filter[field.name] : '',
          onChange: function onChange(e) {
            return setFilter(_extends({}, filter, _defineProperty({}, field.name, e.target.value)));
          },
          onPressEnter: function onPressEnter() {
            return setActiveFilter();
          }
        }),
        filterDropdownVisible: activeFilter === field.name,
        onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
          return setActiveFilter(visible && field.name);
        },
        onFilter: function onFilter(value, item) {
          return item[field.name] === value;
        },
        render: function render(value) {
          return (0, _utils.getPrintableValue)(value, field);
        }
      };
    })
  };
}), (0, _recompose.withPropsOnChange)(['items', 'filter'], function (_ref2) {
  var items = _ref2.items,
      filter = _ref2.filter;
  return {
    data: items.filter(function (item) {
      return Object.keys(filter).reduce(function (acc, key) {
        return acc && item[key].toLowerCase().indexOf(filter[key].toLowerCase()) !== -1;
      }, true);
    }).map(function (item, i) {
      return _extends({
        key: i
      }, item);
    })
  };
}));

var CollectionView = enhance(_class = function (_Component) {
  _inherits(CollectionView, _Component);

  function CollectionView() {
    _classCallCheck(this, CollectionView);

    return _possibleConstructorReturn(this, (CollectionView.__proto__ || Object.getPrototypeOf(CollectionView)).apply(this, arguments));
  }

  _createClass(CollectionView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          data = _props.data,
          typeName = _props.typeName,
          updateQuery = _props.updateQuery;


      return _react2.default.createElement(StyledTable, {
        columns: columns,
        dataSource: data,
        onRowClick: function onRowClick(item) {
          return updateQuery(_defineProperty({}, '@' + typeName.toLowerCase(), item.id));
        }
      });
    }
  }]);

  return CollectionView;
}(_react.Component)) || _class;

exports.default = CollectionView;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3ZpZXcvdGFibGUuZXM2Il0sIm5hbWVzIjpbIlN0eWxlZFRhYmxlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsInAiLCJPYmplY3QiLCJrZXlzIiwic29ydFZhbHVlIiwiaXRlbSIsImNvbGxlY3Rpb24iLCJuYW1lIiwic3BlY2lhbEZpZWxkcyIsImltYWdlRmllbGQiLCJuYW1lRmllbGQiLCJkZXNjcmlwdGlvbkZpZWxkIiwiY29sb3JGaWVsZCIsInBhcnNlSW50IiwidGFibGUiLCJnZXRTb3J0ZXIiLCJmaWVsZCIsImlubmVyVHlwZSIsImEiLCJiIiwibmFtZUEiLCJ0b1VwcGVyQ2FzZSIsIm5hbWVCIiwiZ2V0RmlsdGVycyIsIml0ZW1zIiwidHlwZSIsImtpbmQiLCJhcnIiLCJtYXAiLCJ0ZXh0IiwieCIsInZhbHVlIiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiZW5oYW5jZSIsInNldEZpbHRlciIsImFjdGl2ZUZpbHRlciIsInNldEFjdGl2ZUZpbHRlciIsImNvbHVtbnMiLCJmaWVsZHMiLCJzb3J0Iiwia2V5IiwidGl0bGUiLCJsYWJlbCIsImRhdGFJbmRleCIsInNvcnRlciIsImZpbHRlcnMiLCJmaWx0ZXJEcm9wZG93biIsImUiLCJ0YXJnZXQiLCJmaWx0ZXJEcm9wZG93blZpc2libGUiLCJvbkZpbHRlckRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJvbkZpbHRlciIsInJlbmRlciIsImRhdGEiLCJyZWR1Y2UiLCJhY2MiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJpIiwiQ29sbGVjdGlvblZpZXciLCJwcm9wcyIsInR5cGVOYW1lIiwidXBkYXRlUXVlcnkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsZ0NBQ2xCO0FBQUEsU0FBTztBQUNMLFlBQVE7QUFDTkMs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bnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgVGFibGUsIElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1bmlxIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IGlzQWZ0ZXIgZnJvbSAnZGF0ZS1mbnMvaXNBZnRlcic7XG5pbXBvcnQgeyBnZXRQcmludGFibGVWYWx1ZSB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgU3R5bGVkVGFibGUgPSBjcmVhdGVDb21wb25lbnQoXG4gICgpID0+ICh7XG4gICAgJyYgdGQnOiB7XG4gICAgICBtaW5XaWR0aDogNTAsXG4gICAgICBtYXhXaWR0aDogMjAwLFxuICAgIH0sXG4gIH0pLFxuICBwID0+IDxUYWJsZSB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5jb25zdCBzb3J0VmFsdWUgPSAoaXRlbSwgY29sbGVjdGlvbikgPT4ge1xuICBpZiAoaXRlbS5uYW1lID09PSAoY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmltYWdlRmllbGQgfHwgJ2ltYWdlJyB8fCAnYmlsZCcpKVxuICAgIHJldHVybiA1MDtcblxuICBpZiAoaXRlbS5uYW1lID09PSAoY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLm5hbWVGaWVsZCB8fCAnbmFtZScpKSByZXR1cm4gNDA7XG5cbiAgaWYgKFxuICAgIGl0ZW0ubmFtZSA9PT1cbiAgICAoY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmRlc2NyaXB0aW9uRmllbGQgfHxcbiAgICAgICdkZXNjcmlwdGlvbicgfHxcbiAgICAgICdiZXNjaHJlaWJ1bmcnKVxuICApXG4gICAgcmV0dXJuIDMwO1xuXG4gIGlmIChpdGVtLm5hbWUgPT09IChjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuY29sb3JGaWVsZCB8fCAnY29sb3InIHx8ICdmYXJiZScpKVxuICAgIHJldHVybiAyMDtcblxuICByZXR1cm4gcGFyc2VJbnQoaXRlbS5zcGVjaWFsRmllbGRzLnRhYmxlLCAxMCkgfHwgMTA7XG59O1xuXG5jb25zdCBnZXRTb3J0ZXIgPSBmaWVsZCA9PlxuICAoZmllbGQuaW5uZXJUeXBlLm5hbWUgPT09ICdTdHJpbmcnICYmXG4gICAgKChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBuYW1lQSA9IChhW2ZpZWxkLm5hbWVdIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY29uc3QgbmFtZUIgPSAoYltmaWVsZC5uYW1lXSB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KSkgfHxcbiAgKGZpZWxkLmlubmVyVHlwZS5uYW1lID09PSAnSW50JyAmJlxuICAgICgoYSwgYikgPT4gYltmaWVsZC5uYW1lXSAtIGFbZmllbGQubmFtZV0pKSB8fFxuICAoZmllbGQuaW5uZXJUeXBlLm5hbWUgPT09ICdEYXRlJyAmJlxuICAgICgoYSwgYikgPT4gKGlzQWZ0ZXIoYVtmaWVsZC5uYW1lXSwgYltmaWVsZC5uYW1lXSkgPyAxIDogLTEpKSkgfHxcbiAgKGZpZWxkLmlubmVyVHlwZS5uYW1lID09PSAnQm9vbCcgJiZcbiAgICAoKGEsIGIpID0+IChhW2ZpZWxkLm5hbWVdICYmICFiW2ZpZWxkLm5hbWVdID8gMSA6IC0xKSkpO1xuXG5jb25zdCBnZXRGaWx0ZXJzID0gKGl0ZW1zLCBmaWVsZCkgPT4ge1xuICBpZiAoZmllbGQudHlwZS5raW5kID09PSAnRU5VTScgfHwgZmllbGQudHlwZS5raW5kID09PSAnTElTVCcpIHtcbiAgICBjb25zdCBhcnIgPSBpdGVtcy5tYXAoaXRlbSA9PiBpdGVtW2ZpZWxkLm5hbWVdKTtcblxuICAgIHJldHVybiB1bmlxKGFycilcbiAgICAgIC5tYXAoeCA9PiAoe1xuICAgICAgICB0ZXh0OiBnZXRQcmludGFibGVWYWx1ZSh4LCBmaWVsZCksXG4gICAgICAgIHZhbHVlOiB4LFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKHggPT4geC52YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZSgnYWN0aXZlRmlsdGVyJywgJ3NldEFjdGl2ZUZpbHRlcicpLFxuICB3aXRoU3RhdGUoJ2ZpbHRlcicsICdzZXRGaWx0ZXInLCB7fSksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFxuICAgIFsnY29sbGVjdGlvbicsICdpdGVtcycsICdmaWx0ZXInLCAnYWN0aXZlRmlsdGVyJ10sXG4gICAgKHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBpdGVtcyxcbiAgICAgIGZpbHRlcixcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIGFjdGl2ZUZpbHRlcixcbiAgICAgIHNldEFjdGl2ZUZpbHRlcixcbiAgICB9KSA9PiAoe1xuICAgICAgY29sdW1uczogY29sbGVjdGlvbi5maWVsZHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICB4ID0+XG4gICAgICAgICAgICB4LnNwZWNpYWxGaWVsZHMudGFibGUgfHxcbiAgICAgICAgICAgIHgubmFtZSA9PT0gKGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5uYW1lRmllbGQgfHwgJ25hbWUnKSB8fFxuICAgICAgICAgICAgeC5uYW1lID09PVxuICAgICAgICAgICAgICAoY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmRlc2NyaXB0aW9uRmllbGQgfHxcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nIHx8XG4gICAgICAgICAgICAgICAgJ2Jlc2NocmVpYnVuZycpIHx8XG4gICAgICAgICAgICB4Lm5hbWUgPT09XG4gICAgICAgICAgICAgIChjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuaW1hZ2VGaWVsZCB8fCAnaW1hZ2UnIHx8ICdiaWxkJykgfHxcbiAgICAgICAgICAgIHgubmFtZSA9PT1cbiAgICAgICAgICAgICAgKGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5jb2xvckZpZWxkIHx8ICdjb2xvcicgfHwgJ2ZhcmJlJyksXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IHNvcnRWYWx1ZShiLCBjb2xsZWN0aW9uKSAtIHNvcnRWYWx1ZShhLCBjb2xsZWN0aW9uKSlcbiAgICAgICAgLm1hcChmaWVsZCA9PiAoe1xuICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICB0aXRsZTogZmllbGQuc3BlY2lhbEZpZWxkcy5sYWJlbCxcbiAgICAgICAgICBkYXRhSW5kZXg6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgc29ydGVyOiBnZXRTb3J0ZXIoZmllbGQpLFxuICAgICAgICAgIGZpbHRlcnM6IGdldEZpbHRlcnMoaXRlbXMsIGZpZWxkKSxcbiAgICAgICAgICBmaWx0ZXJEcm9wZG93bjogZmllbGQuaW5uZXJUeXBlLm5hbWUgPT09ICdTdHJpbmcnICYmIChcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXJbZmllbGQubmFtZV0gPyBmaWx0ZXJbZmllbGQubmFtZV0gOiAnJ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIoeyAuLi5maWx0ZXIsIFtmaWVsZC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvblByZXNzRW50ZXI9eygpID0+IHNldEFjdGl2ZUZpbHRlcigpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApLFxuICAgICAgICAgIGZpbHRlckRyb3Bkb3duVmlzaWJsZTogYWN0aXZlRmlsdGVyID09PSBmaWVsZC5uYW1lLFxuICAgICAgICAgIG9uRmlsdGVyRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiB2aXNpYmxlID0+XG4gICAgICAgICAgICBzZXRBY3RpdmVGaWx0ZXIodmlzaWJsZSAmJiBmaWVsZC5uYW1lKSxcbiAgICAgICAgICBvbkZpbHRlcjogKHZhbHVlLCBpdGVtKSA9PiBpdGVtW2ZpZWxkLm5hbWVdID09PSB2YWx1ZSxcbiAgICAgICAgICByZW5kZXI6IHZhbHVlID0+IGdldFByaW50YWJsZVZhbHVlKHZhbHVlLCBmaWVsZCksXG4gICAgICAgIH0pKSxcbiAgICB9KSxcbiAgKSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWydpdGVtcycsICdmaWx0ZXInXSwgKHsgaXRlbXMsIGZpbHRlciB9KSA9PiAoe1xuICAgIGRhdGE6IGl0ZW1zXG4gICAgICAuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVyKS5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywga2V5KSA9PlxuICAgICAgICAgICAgYWNjICYmXG4gICAgICAgICAgICBpdGVtW2tleV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcltrZXldLnRvTG93ZXJDYXNlKCkpICE9PSAtMSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgLm1hcCgoaXRlbSwgaSkgPT4gKHtcbiAgICAgICAga2V5OiBpLFxuICAgICAgICAuLi5pdGVtLFxuICAgICAgfSkpLFxuICB9KSksXG4pO1xuXG5AZW5oYW5jZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvblZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2x1bW5zLCBkYXRhLCB0eXBlTmFtZSwgdXBkYXRlUXVlcnkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFRhYmxlXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICAgIG9uUm93Q2xpY2s9e2l0ZW0gPT5cbiAgICAgICAgICB1cGRhdGVRdWVyeSh7IFtgQCR7dHlwZU5hbWUudG9Mb3dlckNhc2UoKX1gXTogaXRlbS5pZCB9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

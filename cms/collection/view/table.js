import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/table/style';
import _Table from 'antd/lib/table';
import _uniq from 'lodash/uniq';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';

import { compose, withPropsOnChange, withState } from 'recompose';
import isAfter from 'date-fns/isAfter';
import { getPrintableValue } from '../utils';

var StyledTable = createComponent(function () {
  return {
    '& td': {
      minWidth: 50,
      maxWidth: 200
    }
  };
}, function (p) {
  return React.createElement(_Table, p);
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
    return isAfter(a[field.name], b[field.name]) ? 1 : -1;
  } || field.innerType.name === 'Bool' && function (a, b) {
    return a[field.name] && !b[field.name] ? 1 : -1;
  };
};

var getFilters = function getFilters(items, field) {
  if (field.type.kind === 'ENUM' || field.type.kind === 'LIST') {
    var arr = items.map(function (item) {
      return item[field.name];
    });

    return _uniq(arr).map(function (x) {
      return {
        text: getPrintableValue(x, field),
        value: x
      };
    }).filter(function (x) {
      return x.value;
    });
  }

  return undefined;
};

var enhance = compose(withState('activeFilter', 'setActiveFilter'), withState('filter', 'setFilter', {}), withPropsOnChange(['collection', 'items', 'filter', 'activeFilter'], function (_ref) {
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
        filterDropdown: field.innerType.name === 'String' && React.createElement(_Input, {
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
          return getPrintableValue(value, field);
        }
      };
    })
  };
}), withPropsOnChange(['items', 'filter'], function (_ref2) {
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


      return React.createElement(StyledTable, {
        columns: columns,
        dataSource: data,
        onRowClick: function onRowClick(item) {
          return updateQuery(_defineProperty({}, '@' + typeName.toLowerCase(), item.id));
        }
      });
    }
  }]);

  return CollectionView;
}(Component)) || _class;

export { CollectionView as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdmlldy90YWJsZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb21wb3NlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJ3aXRoU3RhdGUiLCJpc0FmdGVyIiwiZ2V0UHJpbnRhYmxlVmFsdWUiLCJTdHlsZWRUYWJsZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJwIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRWYWx1ZSIsIml0ZW0iLCJjb2xsZWN0aW9uIiwibmFtZSIsInNwZWNpYWxGaWVsZHMiLCJpbWFnZUZpZWxkIiwibmFtZUZpZWxkIiwiZGVzY3JpcHRpb25GaWVsZCIsImNvbG9yRmllbGQiLCJwYXJzZUludCIsInRhYmxlIiwiZ2V0U29ydGVyIiwiZmllbGQiLCJpbm5lclR5cGUiLCJhIiwiYiIsIm5hbWVBIiwidG9VcHBlckNhc2UiLCJuYW1lQiIsImdldEZpbHRlcnMiLCJpdGVtcyIsInR5cGUiLCJraW5kIiwiYXJyIiwibWFwIiwidGV4dCIsIngiLCJ2YWx1ZSIsImZpbHRlciIsInVuZGVmaW5lZCIsImVuaGFuY2UiLCJzZXRGaWx0ZXIiLCJhY3RpdmVGaWx0ZXIiLCJzZXRBY3RpdmVGaWx0ZXIiLCJjb2x1bW5zIiwiZmllbGRzIiwic29ydCIsImtleSIsInRpdGxlIiwibGFiZWwiLCJkYXRhSW5kZXgiLCJzb3J0ZXIiLCJmaWx0ZXJzIiwiZmlsdGVyRHJvcGRvd24iLCJlIiwidGFyZ2V0IiwiZmlsdGVyRHJvcGRvd25WaXNpYmxlIiwib25GaWx0ZXJEcm9wZG93blZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwib25GaWx0ZXIiLCJyZW5kZXIiLCJkYXRhIiwicmVkdWNlIiwiYWNjIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaSIsIkNvbGxlY3Rpb25WaWV3IiwicHJvcHMiLCJ0eXBlTmFtZSIsInVwZGF0ZVF1ZXJ5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QkEsUUFEaEI7QUFBQSxVQUMwQkMsV0FEMUIsVUFDMEJBLFdBRDFCOzs7QUFHUCxhQUNFLG9CQUFDLFdBQUQ7QUFDRSxpQkFBUzFCLE9BRFg7QUFFRSxvQkFBWWlCLElBRmQ7QUFHRSxvQkFBWTtBQUFBLGlCQUNWUyxzQ0FBbUJELFNBQVNMLFdBQVQsRUFBbkIsRUFBOENyRCxLQUFLNEQsRUFBbkQsRUFEVTtBQUFBO0FBSGQsUUFERjtBQVNEOzs7O0VBYnlDMUUsUzs7U0FBdkJzRSxjIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vdmlldy90YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IFRhYmxlLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdW5pcSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHNPbkNoYW5nZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBpc0FmdGVyIGZyb20gJ2RhdGUtZm5zL2lzQWZ0ZXInO1xuaW1wb3J0IHsgZ2V0UHJpbnRhYmxlVmFsdWUgfSBmcm9tICcuLi91dGlscyc7XG5cbmNvbnN0IFN0eWxlZFRhYmxlID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgICcmIHRkJzoge1xuICAgICAgbWluV2lkdGg6IDUwLFxuICAgICAgbWF4V2lkdGg6IDIwMCxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8VGFibGUgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3Qgc29ydFZhbHVlID0gKGl0ZW0sIGNvbGxlY3Rpb24pID0+IHtcbiAgaWYgKGl0ZW0ubmFtZSA9PT0gKGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5pbWFnZUZpZWxkIHx8ICdpbWFnZScgfHwgJ2JpbGQnKSlcbiAgICByZXR1cm4gNTA7XG5cbiAgaWYgKGl0ZW0ubmFtZSA9PT0gKGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5uYW1lRmllbGQgfHwgJ25hbWUnKSkgcmV0dXJuIDQwO1xuXG4gIGlmIChcbiAgICBpdGVtLm5hbWUgPT09XG4gICAgKGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5kZXNjcmlwdGlvbkZpZWxkIHx8XG4gICAgICAnZGVzY3JpcHRpb24nIHx8XG4gICAgICAnYmVzY2hyZWlidW5nJylcbiAgKVxuICAgIHJldHVybiAzMDtcblxuICBpZiAoaXRlbS5uYW1lID09PSAoY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmNvbG9yRmllbGQgfHwgJ2NvbG9yJyB8fCAnZmFyYmUnKSlcbiAgICByZXR1cm4gMjA7XG5cbiAgcmV0dXJuIHBhcnNlSW50KGl0ZW0uc3BlY2lhbEZpZWxkcy50YWJsZSwgMTApIHx8IDEwO1xufTtcblxuY29uc3QgZ2V0U29ydGVyID0gZmllbGQgPT5cbiAgKGZpZWxkLmlubmVyVHlwZS5uYW1lID09PSAnU3RyaW5nJyAmJlxuICAgICgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgbmFtZUEgPSAoYVtmaWVsZC5uYW1lXSB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICAgIGNvbnN0IG5hbWVCID0gKGJbZmllbGQubmFtZV0gfHwgJycpLnRvVXBwZXJDYXNlKCk7XG4gICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSkpIHx8XG4gIChmaWVsZC5pbm5lclR5cGUubmFtZSA9PT0gJ0ludCcgJiZcbiAgICAoKGEsIGIpID0+IGJbZmllbGQubmFtZV0gLSBhW2ZpZWxkLm5hbWVdKSkgfHxcbiAgKGZpZWxkLmlubmVyVHlwZS5uYW1lID09PSAnRGF0ZScgJiZcbiAgICAoKGEsIGIpID0+IChpc0FmdGVyKGFbZmllbGQubmFtZV0sIGJbZmllbGQubmFtZV0pID8gMSA6IC0xKSkpIHx8XG4gIChmaWVsZC5pbm5lclR5cGUubmFtZSA9PT0gJ0Jvb2wnICYmXG4gICAgKChhLCBiKSA9PiAoYVtmaWVsZC5uYW1lXSAmJiAhYltmaWVsZC5uYW1lXSA/IDEgOiAtMSkpKTtcblxuY29uc3QgZ2V0RmlsdGVycyA9IChpdGVtcywgZmllbGQpID0+IHtcbiAgaWYgKGZpZWxkLnR5cGUua2luZCA9PT0gJ0VOVU0nIHx8IGZpZWxkLnR5cGUua2luZCA9PT0gJ0xJU1QnKSB7XG4gICAgY29uc3QgYXJyID0gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbVtmaWVsZC5uYW1lXSk7XG5cbiAgICByZXR1cm4gdW5pcShhcnIpXG4gICAgICAubWFwKHggPT4gKHtcbiAgICAgICAgdGV4dDogZ2V0UHJpbnRhYmxlVmFsdWUoeCwgZmllbGQpLFxuICAgICAgICB2YWx1ZTogeCxcbiAgICAgIH0pKVxuICAgICAgLmZpbHRlcih4ID0+IHgudmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoU3RhdGUoJ2FjdGl2ZUZpbHRlcicsICdzZXRBY3RpdmVGaWx0ZXInKSxcbiAgd2l0aFN0YXRlKCdmaWx0ZXInLCAnc2V0RmlsdGVyJywge30pLFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ2NvbGxlY3Rpb24nLCAnaXRlbXMnLCAnZmlsdGVyJywgJ2FjdGl2ZUZpbHRlciddLFxuICAgICh7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgaXRlbXMsXG4gICAgICBmaWx0ZXIsXG4gICAgICBzZXRGaWx0ZXIsXG4gICAgICBhY3RpdmVGaWx0ZXIsXG4gICAgICBzZXRBY3RpdmVGaWx0ZXIsXG4gICAgfSkgPT4gKHtcbiAgICAgIGNvbHVtbnM6IGNvbGxlY3Rpb24uZmllbGRzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgeCA9PlxuICAgICAgICAgICAgeC5zcGVjaWFsRmllbGRzLnRhYmxlIHx8XG4gICAgICAgICAgICB4Lm5hbWUgPT09IChjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMubmFtZUZpZWxkIHx8ICduYW1lJykgfHxcbiAgICAgICAgICAgIHgubmFtZSA9PT1cbiAgICAgICAgICAgICAgKGNvbGxlY3Rpb24uc3BlY2lhbEZpZWxkcy5kZXNjcmlwdGlvbkZpZWxkIHx8XG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJyB8fFxuICAgICAgICAgICAgICAgICdiZXNjaHJlaWJ1bmcnKSB8fFxuICAgICAgICAgICAgeC5uYW1lID09PVxuICAgICAgICAgICAgICAoY29sbGVjdGlvbi5zcGVjaWFsRmllbGRzLmltYWdlRmllbGQgfHwgJ2ltYWdlJyB8fCAnYmlsZCcpIHx8XG4gICAgICAgICAgICB4Lm5hbWUgPT09XG4gICAgICAgICAgICAgIChjb2xsZWN0aW9uLnNwZWNpYWxGaWVsZHMuY29sb3JGaWVsZCB8fCAnY29sb3InIHx8ICdmYXJiZScpLFxuICAgICAgICApXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBzb3J0VmFsdWUoYiwgY29sbGVjdGlvbikgLSBzb3J0VmFsdWUoYSwgY29sbGVjdGlvbikpXG4gICAgICAgIC5tYXAoZmllbGQgPT4gKHtcbiAgICAgICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgdGl0bGU6IGZpZWxkLnNwZWNpYWxGaWVsZHMubGFiZWwsXG4gICAgICAgICAgZGF0YUluZGV4OiBmaWVsZC5uYW1lLFxuICAgICAgICAgIHNvcnRlcjogZ2V0U29ydGVyKGZpZWxkKSxcbiAgICAgICAgICBmaWx0ZXJzOiBnZXRGaWx0ZXJzKGl0ZW1zLCBmaWVsZCksXG4gICAgICAgICAgZmlsdGVyRHJvcGRvd246IGZpZWxkLmlubmVyVHlwZS5uYW1lID09PSAnU3RyaW5nJyAmJiAoXG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyW2ZpZWxkLm5hbWVdID8gZmlsdGVyW2ZpZWxkLm5hbWVdIDogJyd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHsgLi4uZmlsdGVyLCBbZmllbGQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXsoKSA9PiBzZXRBY3RpdmVGaWx0ZXIoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSxcbiAgICAgICAgICBmaWx0ZXJEcm9wZG93blZpc2libGU6IGFjdGl2ZUZpbHRlciA9PT0gZmllbGQubmFtZSxcbiAgICAgICAgICBvbkZpbHRlckRyb3Bkb3duVmlzaWJsZUNoYW5nZTogdmlzaWJsZSA9PlxuICAgICAgICAgICAgc2V0QWN0aXZlRmlsdGVyKHZpc2libGUgJiYgZmllbGQubmFtZSksXG4gICAgICAgICAgb25GaWx0ZXI6ICh2YWx1ZSwgaXRlbSkgPT4gaXRlbVtmaWVsZC5uYW1lXSA9PT0gdmFsdWUsXG4gICAgICAgICAgcmVuZGVyOiB2YWx1ZSA9PiBnZXRQcmludGFibGVWYWx1ZSh2YWx1ZSwgZmllbGQpLFxuICAgICAgICB9KSksXG4gICAgfSksXG4gICksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsnaXRlbXMnLCAnZmlsdGVyJ10sICh7IGl0ZW1zLCBmaWx0ZXIgfSkgPT4gKHtcbiAgICBkYXRhOiBpdGVtc1xuICAgICAgLmZpbHRlcihpdGVtID0+XG4gICAgICAgIE9iamVjdC5rZXlzKGZpbHRlcikucmVkdWNlKFxuICAgICAgICAgIChhY2MsIGtleSkgPT5cbiAgICAgICAgICAgIGFjYyAmJlxuICAgICAgICAgICAgaXRlbVtrZXldLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJba2V5XS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIC5tYXAoKGl0ZW0sIGkpID0+ICh7XG4gICAgICAgIGtleTogaSxcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgIH0pKSxcbiAgfSkpLFxuKTtcblxuQGVuaGFuY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb25WaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sdW1ucywgZGF0YSwgdHlwZU5hbWUsIHVwZGF0ZVF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRUYWJsZVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxuICAgICAgICBvblJvd0NsaWNrPXtpdGVtID0+XG4gICAgICAgICAgdXBkYXRlUXVlcnkoeyBbYEAke3R5cGVOYW1lLnRvTG93ZXJDYXNlKCl9YF06IGl0ZW0uaWQgfSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=

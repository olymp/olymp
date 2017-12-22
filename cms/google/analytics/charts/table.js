import 'antd/lib/table/style';
import _Table from 'antd/lib/table';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { createComponent } from 'olymp-fela';
import { metricsObj, dimensionsObj } from '../../definitions';

var AntTable = createComponent(function (_ref) {
  var rowSelection = _ref.rowSelection;
  return {
    '& .ant-table-row': {
      cursor: !!rowSelection && 'pointer'
    }
  };
}, function (p) {
  return React.createElement(_Table, p);
}, function (p) {
  return Object.keys(p);
});

var TableChart = function (_Component) {
  _inherits(TableChart, _Component);

  function TableChart() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TableChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TableChart.__proto__ || Object.getPrototypeOf(TableChart)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { sortedInfo: {} }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableChart, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _onSelect = _props.onSelect,
          dimensions = _props.dimensions,
          items = _props.items,
          selected = _props.selected;
      var sortedInfo = this.state.sortedInfo;

      var xData = dimensions[0];
      var columns = [];
      Object.keys(items && !items.lenght && items[0] || {}).forEach(function (key) {
        var item = _extends({}, metricsObj, dimensionsObj)[key];

        columns.push({
          title: item.label,
          dataIndex: key,
          render: item.renderFn,
          sorter: function sorter(a, b) {
            switch (_typeof(a[key])) {
              case 'number':
                return a[key] - b[key];

              default:
                if (a[key].toUpperCase() < b[key].toUpperCase()) {
                  return -1;
                }
                if (a[key].toUpperCase() > b[key].toUpperCase()) {
                  return 1;
                }
                return 0;
            }
          },
          sortOrder: sortedInfo.columnKey === key && sortedInfo.order
        });
      });

      return React.createElement(AntTable, {
        size: 'small',
        rowKey: 'key-' + dimensions.join('-'),
        columns: columns,
        dataSource: items.map(function (item, i) {
          return _extends({}, item, _defineProperty({}, 'key-' + dimensions.join('-'), i));
        }),
        onRowClick: _onSelect && function (item) {
          return _onSelect(item[xData]);
        },
        rowSelection: _onSelect && {
          selectedRowKeys: selected.map(function (selection) {
            return items.findIndex(function (item) {
              return item[xData] === selection;
            });
          }),
          onSelect: function onSelect(item) {
            return _onSelect(item[xData]);
          }
        },
        onChange: function onChange(pagination, filters, sorter) {
          return _this2.setState({ sortedInfo: sorter });
        }
      });
    }
  }]);

  return TableChart;
}(Component);

export { TableChart as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY2hhcnRzL3RhYmxlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZUNvbXBvbmVudCIsIm1ldHJpY3NPYmoiLCJkaW1lbnNpb25zT2JqIiwiQW50VGFibGUiLCJyb3dTZWxlY3Rpb24iLCJjdXJzb3IiLCJwIiwiT2JqZWN0Iiwia2V5cyIsIlRhYmxlQ2hhcnQiLCJzdGF0ZSIsInNvcnRlZEluZm8iLCJwcm9wcyIsIm9uU2VsZWN0IiwiZGltZW5zaW9ucyIsIml0ZW1zIiwic2VsZWN0ZWQiLCJ4RGF0YSIsImNvbHVtbnMiLCJsZW5naHQiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInB1c2giLCJ0aXRsZSIsImxhYmVsIiwiZGF0YUluZGV4IiwicmVuZGVyIiwicmVuZGVyRm4iLCJzb3J0ZXIiLCJhIiwiYiIsInRvVXBwZXJDYXNlIiwic29ydE9yZGVyIiwiY29sdW1uS2V5Iiwib3JkZXIiLCJqb2luIiwibWFwIiwiaSIsInNlbGVjdGVkUm93S2V5cyIsImZpbmRJbmRleCIsInNlbGVjdGlvbiIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7O0FBRUEsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLGFBQXJCLFFBQTBDLG1CQUExQzs7QUFFQSxJQUFNQyxXQUFXSCxnQkFDZjtBQUFBLE1BQUdJLFlBQUgsUUFBR0EsWUFBSDtBQUFBLFNBQXVCO0FBQ3JCLHdCQUFvQjtBQUNsQkMsY0FBUSxDQUFDLENBQUNELFlBQUYsSUFBa0I7QUFEUjtBQURDLEdBQXZCO0FBQUEsQ0FEZSxFQU1mO0FBQUEsU0FBSyw0QkFBV0UsQ0FBWCxDQUFMO0FBQUEsQ0FOZSxFQU9mO0FBQUEsU0FBS0MsT0FBT0MsSUFBUCxDQUFZRixDQUFaLENBQUw7QUFBQSxDQVBlLENBQWpCOztJQVVxQkcsVTs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVEsRUFBRUMsWUFBWSxFQUFkLEU7Ozs7OzZCQUVDO0FBQUE7O0FBQUEsbUJBQzJDLEtBQUtDLEtBRGhEO0FBQUEsVUFDQ0MsU0FERCxVQUNDQSxRQUREO0FBQUEsVUFDV0MsVUFEWCxVQUNXQSxVQURYO0FBQUEsVUFDdUJDLEtBRHZCLFVBQ3VCQSxLQUR2QjtBQUFBLFVBQzhCQyxRQUQ5QixVQUM4QkEsUUFEOUI7QUFBQSxVQUVDTCxVQUZELEdBRWdCLEtBQUtELEtBRnJCLENBRUNDLFVBRkQ7O0FBR1AsVUFBTU0sUUFBUUgsV0FBVyxDQUFYLENBQWQ7QUFDQSxVQUFNSSxVQUFVLEVBQWhCO0FBQ0FYLGFBQU9DLElBQVAsQ0FBYU8sU0FBUyxDQUFDQSxNQUFNSSxNQUFoQixJQUEwQkosTUFBTSxDQUFOLENBQTNCLElBQXdDLEVBQXBELEVBQXdESyxPQUF4RCxDQUFnRSxlQUFPO0FBQ3JFLFlBQU1DLE9BQU8sYUFBS3BCLFVBQUwsRUFBb0JDLGFBQXBCLEVBQW9Db0IsR0FBcEMsQ0FBYjs7QUFFQUosZ0JBQVFLLElBQVIsQ0FBYTtBQUNYQyxpQkFBT0gsS0FBS0ksS0FERDtBQUVYQyxxQkFBV0osR0FGQTtBQUdYSyxrQkFBUU4sS0FBS08sUUFIRjtBQUlYQyxrQkFBUSxnQkFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDaEIsNEJBQWVELEVBQUVSLEdBQUYsQ0FBZjtBQUNFLG1CQUFLLFFBQUw7QUFDRSx1QkFBT1EsRUFBRVIsR0FBRixJQUFTUyxFQUFFVCxHQUFGLENBQWhCOztBQUVGO0FBQ0Usb0JBQUlRLEVBQUVSLEdBQUYsRUFBT1UsV0FBUCxLQUF1QkQsRUFBRVQsR0FBRixFQUFPVSxXQUFQLEVBQTNCLEVBQWlEO0FBQy9DLHlCQUFPLENBQUMsQ0FBUjtBQUNEO0FBQ0Qsb0JBQUlGLEVBQUVSLEdBQUYsRUFBT1UsV0FBUCxLQUF1QkQsRUFBRVQsR0FBRixFQUFPVSxXQUFQLEVBQTNCLEVBQWlEO0FBQy9DLHlCQUFPLENBQVA7QUFDRDtBQUNELHVCQUFPLENBQVA7QUFYSjtBQWFELFdBbEJVO0FBbUJYQyxxQkFBV3RCLFdBQVd1QixTQUFYLEtBQXlCWixHQUF6QixJQUFnQ1gsV0FBV3dCO0FBbkIzQyxTQUFiO0FBcUJELE9BeEJEOztBQTBCQSxhQUNFLG9CQUFDLFFBQUQ7QUFDRSxjQUFLLE9BRFA7QUFFRSx5QkFBZXJCLFdBQVdzQixJQUFYLENBQWdCLEdBQWhCLENBRmpCO0FBR0UsaUJBQVNsQixPQUhYO0FBSUUsb0JBQVlILE1BQU1zQixHQUFOLENBQVUsVUFBQ2hCLElBQUQsRUFBT2lCLENBQVA7QUFBQSw4QkFDakJqQixJQURpQiwrQkFFWlAsV0FBV3NCLElBQVgsQ0FBZ0IsR0FBaEIsQ0FGWSxFQUVhRSxDQUZiO0FBQUEsU0FBVixDQUpkO0FBUUUsb0JBQVl6QixhQUFhO0FBQUEsaUJBQVFBLFVBQVNRLEtBQUtKLEtBQUwsQ0FBVCxDQUFSO0FBQUEsU0FSM0I7QUFTRSxzQkFDRUosYUFBWTtBQUNWMEIsMkJBQWlCdkIsU0FBU3FCLEdBQVQsQ0FBYTtBQUFBLG1CQUM1QnRCLE1BQU15QixTQUFOLENBQWdCO0FBQUEscUJBQVFuQixLQUFLSixLQUFMLE1BQWdCd0IsU0FBeEI7QUFBQSxhQUFoQixDQUQ0QjtBQUFBLFdBQWIsQ0FEUDtBQUlWNUIsb0JBQVU7QUFBQSxtQkFBUUEsVUFBU1EsS0FBS0osS0FBTCxDQUFULENBQVI7QUFBQTtBQUpBLFNBVmhCO0FBaUJFLGtCQUFVLGtCQUFDeUIsVUFBRCxFQUFhQyxPQUFiLEVBQXNCZCxNQUF0QjtBQUFBLGlCQUNSLE9BQUtlLFFBQUwsQ0FBYyxFQUFFakMsWUFBWWtCLE1BQWQsRUFBZCxDQURRO0FBQUE7QUFqQlosUUFERjtBQXVCRDs7OztFQXpEcUM5QixTOztTQUFuQlUsVSIsImZpbGUiOiJwYWNrYWdlcy9nb29nbGUvYW5hbHl0aWNzL2NoYXJ0cy90YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBtZXRyaWNzT2JqLCBkaW1lbnNpb25zT2JqIH0gZnJvbSAnLi4vLi4vZGVmaW5pdGlvbnMnO1xuXG5jb25zdCBBbnRUYWJsZSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgcm93U2VsZWN0aW9uIH0pID0+ICh7XG4gICAgJyYgLmFudC10YWJsZS1yb3cnOiB7XG4gICAgICBjdXJzb3I6ICEhcm93U2VsZWN0aW9uICYmICdwb2ludGVyJyxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8VGFibGUgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVDaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBzb3J0ZWRJbmZvOiB7fSB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uU2VsZWN0LCBkaW1lbnNpb25zLCBpdGVtcywgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzb3J0ZWRJbmZvIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHhEYXRhID0gZGltZW5zaW9uc1swXTtcbiAgICBjb25zdCBjb2x1bW5zID0gW107XG4gICAgT2JqZWN0LmtleXMoKGl0ZW1zICYmICFpdGVtcy5sZW5naHQgJiYgaXRlbXNbMF0pIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0geyAuLi5tZXRyaWNzT2JqLCAuLi5kaW1lbnNpb25zT2JqIH1ba2V5XTtcblxuICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgdGl0bGU6IGl0ZW0ubGFiZWwsXG4gICAgICAgIGRhdGFJbmRleDoga2V5LFxuICAgICAgICByZW5kZXI6IGl0ZW0ucmVuZGVyRm4sXG4gICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBhW2tleV0pIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIHJldHVybiBhW2tleV0gLSBiW2tleV07XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGlmIChhW2tleV0udG9VcHBlckNhc2UoKSA8IGJba2V5XS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChhW2tleV0udG9VcHBlckNhc2UoKSA+IGJba2V5XS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzb3J0T3JkZXI6IHNvcnRlZEluZm8uY29sdW1uS2V5ID09PSBrZXkgJiYgc29ydGVkSW5mby5vcmRlcixcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbnRUYWJsZVxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICByb3dLZXk9e2BrZXktJHtkaW1lbnNpb25zLmpvaW4oJy0nKX1gfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBkYXRhU291cmNlPXtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+ICh7XG4gICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICBbYGtleS0ke2RpbWVuc2lvbnMuam9pbignLScpfWBdOiBpLFxuICAgICAgICB9KSl9XG4gICAgICAgIG9uUm93Q2xpY2s9e29uU2VsZWN0ICYmIChpdGVtID0+IG9uU2VsZWN0KGl0ZW1beERhdGFdKSl9XG4gICAgICAgIHJvd1NlbGVjdGlvbj17XG4gICAgICAgICAgb25TZWxlY3QgJiYge1xuICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZC5tYXAoc2VsZWN0aW9uID0+XG4gICAgICAgICAgICAgIGl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW1beERhdGFdID09PSBzZWxlY3Rpb24pLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiBpdGVtID0+IG9uU2VsZWN0KGl0ZW1beERhdGFdKSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25DaGFuZ2U9eyhwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIpID0+XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRlZEluZm86IHNvcnRlciB9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

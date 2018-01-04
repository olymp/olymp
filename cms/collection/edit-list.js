'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/lib/button/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _faPlus = require('olymp-icons/lib/fa-plus');

var _faPlus2 = _interopRequireDefault(_faPlus);

var _form3 = require('./form');

var _form4 = _interopRequireDefault(_form3);

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

var _withCollection = require('./with-collection');

var _withCollection2 = _interopRequireDefault(_withCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var enhance = (0, _recompose.compose)(_form2.default.create(), (0, _recompose.withState)('isOpen', 'setOpen', false), (0, _recompose.withState)('activeIndex', 'setActiveIndex'), (0, _recompose.withProps)(function (_ref) {
  var type = _ref.type;
  return {
    typeName: type.ofType.name
  };
}), (0, _recompose.withHandlers)({
  onChangeItem: function onChangeItem(_ref2) {
    var onChange = _ref2.onChange,
        value = _ref2.value,
        form = _ref2.form,
        activeIndex = _ref2.activeIndex;
    return function () {
      form.validateFields(function (err, values) {
        if (err) {
          console.log(err);
        } else if (activeIndex === undefined) {
          onChange([].concat(_toConsumableArray(value || []), [values]));
        } else {
          var newValues = [].concat(_toConsumableArray(value || []));
          newValues[activeIndex] = values;
          onChange(newValues);
        }
      });
    };
  }
}), _withCollection2.default);

var _ref4 = _react2.default.createElement(_faPlus2.default, null);

var _ref5 = _react2.default.createElement(_menu2.default.Divider, null);

var EditList = enhance(_class = function (_Component) {
  _inherits(EditList, _Component);

  function EditList() {
    _classCallCheck(this, EditList);

    return _possibleConstructorReturn(this, (EditList.__proto__ || Object.getPrototypeOf(EditList)).apply(this, arguments));
  }

  _createClass(EditList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref3) {
      var activeIndex = _ref3.activeIndex,
          resetFields = _ref3.form.resetFields;

      if (this.props.activeIndex !== activeIndex) {
        resetFields();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$value = _props.value,
          value = _props$value === undefined ? [] : _props$value,
          isOpen = _props.isOpen,
          setOpen = _props.setOpen,
          dataField = _props['data-__field'],
          dataMeta = _props['data-__meta'],
          collection = _props.collection,
          label = _props.label,
          name = _props.name,
          activeIndex = _props.activeIndex,
          setActiveIndex = _props.setActiveIndex,
          form = _props.form,
          onChange = _props.onChange,
          onChangeItem = _props.onChangeItem,
          props = _objectWithoutProperties(_props, ['value', 'isOpen', 'setOpen', 'data-__field', 'data-__meta', 'collection', 'label', 'name', 'activeIndex', 'setActiveIndex', 'form', 'onChange', 'onChangeItem']);

      return _react2.default.createElement(
        _formItem2.default,
        props,
        _react2.default.createElement(
          _button2.default,
          {
            onClick: function onClick() {
              return setOpen(true);
            },
            'data-__field': dataField,
            'data-__meta': dataMeta
          },
          value.length,
          ' Eintr\xE4ge'
        ),
        _react2.default.createElement(
          _olympFela.Modal,
          { width: 800, open: isOpen, onClose: function onClose() {
              return setOpen(false);
            } },
          _react2.default.createElement(
            _olympFela.Sidebar,
            {
              menu: _react2.default.createElement(
                _menu2.default,
                null,
                _react2.default.createElement(
                  _menu2.default.Item,
                  { icon: _ref4, onClick: function onClick() {
                      return setActiveIndex();
                    } },
                  'Hinzuf\xFCgen'
                ),
                _ref5,
                value.map(function (v, i) {
                  return _react2.default.createElement(
                    _menu2.default.Item,
                    {
                      key: v[(0, _get3.default)(collection, 'specialFields.nameField', 'name')],
                      onClick: function onClick() {
                        return setActiveIndex(i);
                      }
                    },
                    v[(0, _get3.default)(collection, 'specialFields.nameField', 'name')]
                  );
                })
              )
            },
            activeIndex === undefined ? _react2.default.createElement(
              _olympFela.SectionHeading,
              null,
              label || 'Item',
              ' anlegen'
            ) : _react2.default.createElement(
              _olympFela.SectionHeading,
              { description: (label || 'Item') + ' bearbeiten' },
              'Bearbeiten'
            ),
            _react2.default.createElement(_form4.default, {
              form: form,
              item: value[activeIndex],
              collection: collection,
              embedded: true,
              onSave: onChangeItem,
              onDelete: activeIndex !== undefined && function () {
                onChange(value.filter(function (x, i) {
                  return i !== activeIndex;
                }));
                if (!activeIndex) {
                  setActiveIndex(activeIndex - 1);
                } else {
                  setActiveIndex();
                }
              },
              onClose: function onClose() {
                return setOpen(false);
              }
            })
          )
        )
      );
    }
  }]);

  return EditList;
}(_react.Component)) || _class;

exports.default = {
  collapse: true,
  rule: function rule(_ref6) {
    var type = _ref6.type;
    return type.kind === 'LIST' && type.ofType.name.indexOf('Nested') === 0;
  },
  form: (0, _recompose.toClass)(function (_ref7) {
    var form = _ref7.form,
        props = _objectWithoutProperties(_ref7, ['form']);

    return _react2.default.createElement(EditList, props);
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtbGlzdC5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsImNyZWF0ZSIsInR5cGUiLCJ0eXBlTmFtZSIsIm9mVHlwZSIsIm5hbWUiLCJvbkNoYW5nZUl0ZW0iLCJvbkNoYW5nZSIsInZhbHVlIiwiZm9ybSIsImFjdGl2ZUluZGV4IiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwibmV3VmFsdWVzIiwiRWRpdExpc3QiLCJyZXNldEZpZWxkcyIsInByb3BzIiwiaXNPcGVuIiwic2V0T3BlbiIsImRhdGFGaWVsZCIsImRhdGFNZXRhIiwiY29sbGVjdGlvbiIsImxhYmVsIiwic2V0QWN0aXZlSW5kZXgiLCJsZW5ndGgiLCJtYXAiLCJ2IiwiaSIsImZpbHRlciIsIngiLCJjb2xsYXBzZSIsInJ1bGUiLCJraW5kIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQU9BOztBQUNBOzs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsd0JBQ2QsZUFBS0MsTUFBTCxFQURjLEVBRWQsMEJBQVUsUUFBVixFQUFvQixTQUFwQixFQUErQixLQUEvQixDQUZjLEVBR2QsMEJBQVUsYUFBVixFQUF5QixnQkFBekIsQ0FIYyxFQUlkLDBCQUFVO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBZTtBQUN2QkMsY0FBVUQsS0FBS0UsTUFBTCxDQUFZQztBQURDLEdBQWY7QUFBQSxDQUFWLENBSmMsRUFPZCw2QkFBYTtBQUNYQyxnQkFBYztBQUFBLFFBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFFBQW9CQyxJQUFwQixTQUFvQkEsSUFBcEI7QUFBQSxRQUEwQkMsV0FBMUIsU0FBMEJBLFdBQTFCO0FBQUEs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MEJFO0FBQ0Usb0JBQU1qQixJQURSO0FBRUUsb0JBQU1ELE1BQU1FLFdBQU4sQ0FGUjtBQUdFLDBCQUFZZSxVQUhkO0FBSUUsNEJBSkY7QUFLRSxzQkFBUW5CLFlBTFY7QUFNRSx3QkFDRUksZ0JBQWdCTSxTQUFoQixJQUNDLFlBQU07QUFDTFQseUJBQVNDLE1BQU13QixNQUFOLENBQWEsVUFBQ0MsQ0FBRCxFQUFJRixDQUFKO0FBQUEseUJBQVVBLE1BQU1yQixXQUFoQjtBQUFBLGlCQUFiLENBQVQ7QUFDQSxvQkFBSSxDQUFDQSxXQUFMLEVBQWtCO0FBQ2hCaUIsaUNBQWVqQixjQUFjLENBQTdCO0FBQ0QsaUJBRkQsTUFFTztBQUNMaUI7QUFDRDtBQUNGLGVBZkw7QUFpQkUsdUJBQVM7QUFBQSx1QkFBTUwsUUFBUSxLQUFSLENBQU47QUFBQTtBQWpCWDtBQTFCRjtBQURGO0FBVEYsT0FERjtBQTRERDs7Ozs7O2tCQUdZO0FBQ2JZLFlBQVUsSUFERztBQUViQyxRQUFNO0FBQUEsUUFBR2pDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFdBQ0pBLEtBQUtrQyxJQUFMLEtBQWMsTUFBZCxJQUF3QmxDLEtBQUtFLE1BQUwsQ0FBWUMsSUFBWixDQUFpQmdDLE9BQWpCLENBQXlCLFFBQXpCLE1BQXVDLENBRDNEO0FBQUEsR0FGTztBQUliNUIsUUFBTSx3QkFBUTtBQUFBLFFBQUdBLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVlXLEtBQVo7O0FBQUEsV0FBd0IsOEJBQUMsUUFBRCxFQUFjQSxLQUFkLENBQXhCO0FBQUEsR0FBUjtBQUpPLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vZWRpdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIGNvbXBvc2UsXG4gIHRvQ2xhc3MsXG4gIHdpdGhQcm9wcyxcbiAgd2l0aFN0YXRlLFxuICB3aXRoSGFuZGxlcnMsXG59IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBNb2RhbCwgU2VjdGlvbkhlYWRpbmcsIFNpZGViYXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgeyBGYVBsdXMgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRGV0YWlsRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcbmltcG9ydCB3aXRoQ29sbGVjdGlvbiBmcm9tICcuL3dpdGgtY29sbGVjdGlvbic7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBGb3JtLmNyZWF0ZSgpLFxuICB3aXRoU3RhdGUoJ2lzT3BlbicsICdzZXRPcGVuJywgZmFsc2UpLFxuICB3aXRoU3RhdGUoJ2FjdGl2ZUluZGV4JywgJ3NldEFjdGl2ZUluZGV4JyksXG4gIHdpdGhQcm9wcygoeyB0eXBlIH0pID0+ICh7XG4gICAgdHlwZU5hbWU6IHR5cGUub2ZUeXBlLm5hbWUsXG4gIH0pKSxcbiAgd2l0aEhhbmRsZXJzKHtcbiAgICBvbkNoYW5nZUl0ZW06ICh7IG9uQ2hhbmdlLCB2YWx1ZSwgZm9ybSwgYWN0aXZlSW5kZXggfSkgPT4gKCkgPT4ge1xuICAgICAgZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9uQ2hhbmdlKFsuLi4odmFsdWUgfHwgW10pLCB2YWx1ZXNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBbLi4uKHZhbHVlIHx8IFtdKV07XG4gICAgICAgICAgbmV3VmFsdWVzW2FjdGl2ZUluZGV4XSA9IHZhbHVlcztcbiAgICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9KSxcbiAgd2l0aENvbGxlY3Rpb24sXG4pO1xuXG5AZW5oYW5jZVxuY2xhc3MgRWRpdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgYWN0aXZlSW5kZXgsIGZvcm06IHsgcmVzZXRGaWVsZHMgfSB9KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICByZXNldEZpZWxkcygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSA9IFtdLFxuICAgICAgaXNPcGVuLFxuICAgICAgc2V0T3BlbixcbiAgICAgICdkYXRhLV9fZmllbGQnOiBkYXRhRmllbGQsXG4gICAgICAnZGF0YS1fX21ldGEnOiBkYXRhTWV0YSxcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBsYWJlbCxcbiAgICAgIG5hbWUsXG4gICAgICBhY3RpdmVJbmRleCxcbiAgICAgIHNldEFjdGl2ZUluZGV4LFxuICAgICAgZm9ybSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25DaGFuZ2VJdGVtLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUl0ZW0gey4uLnByb3BzfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XG4gICAgICAgICAgZGF0YS1fX2ZpZWxkPXtkYXRhRmllbGR9XG4gICAgICAgICAgZGF0YS1fX21ldGE9e2RhdGFNZXRhfVxuICAgICAgICA+XG4gICAgICAgICAge3ZhbHVlLmxlbmd0aH0gRWludHLDpGdlXG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIDxNb2RhbCB3aWR0aD17ODAwfSBvcGVuPXtpc09wZW59IG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgbWVudT17XG4gICAgICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PEZhUGx1cyAvPn0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSW5kZXgoKX0+XG4gICAgICAgICAgICAgICAgICBIaW56dWbDvGdlblxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51LkRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7dmFsdWUubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17dltnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMubmFtZUZpZWxkJywgJ25hbWUnKV19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUluZGV4KGkpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dltnZXQoY29sbGVjdGlvbiwgJ3NwZWNpYWxGaWVsZHMubmFtZUZpZWxkJywgJ25hbWUnKV19XG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthY3RpdmVJbmRleCA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRpbmc+e2xhYmVsIHx8ICdJdGVtJ30gYW5sZWdlbjwvU2VjdGlvbkhlYWRpbmc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRpbmcgZGVzY3JpcHRpb249e2Ake2xhYmVsIHx8ICdJdGVtJ30gYmVhcmJlaXRlbmB9PlxuICAgICAgICAgICAgICAgIEJlYXJiZWl0ZW5cbiAgICAgICAgICAgICAgPC9TZWN0aW9uSGVhZGluZz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxEZXRhaWxGb3JtXG4gICAgICAgICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgICAgICAgIGl0ZW09e3ZhbHVlW2FjdGl2ZUluZGV4XX1cbiAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgZW1iZWRkZWRcbiAgICAgICAgICAgICAgb25TYXZlPXtvbkNoYW5nZUl0ZW19XG4gICAgICAgICAgICAgIG9uRGVsZXRlPXtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlLmZpbHRlcigoeCwgaSkgPT4gaSAhPT0gYWN0aXZlSW5kZXgpKTtcbiAgICAgICAgICAgICAgICAgIGlmICghYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW5kZXgoYWN0aXZlSW5kZXggLSAxKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29sbGFwc2U6IHRydWUsXG4gIHJ1bGU6ICh7IHR5cGUgfSkgPT5cbiAgICB0eXBlLmtpbmQgPT09ICdMSVNUJyAmJiB0eXBlLm9mVHlwZS5uYW1lLmluZGV4T2YoJ05lc3RlZCcpID09PSAwLFxuICBmb3JtOiB0b0NsYXNzKCh7IGZvcm0sIC4uLnByb3BzIH0pID0+IDxFZGl0TGlzdCB7Li4ucHJvcHN9IC8+KSxcbn07XG4iXX0=

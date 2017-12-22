import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import _get from 'lodash/get';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { Component } from 'react';
import { compose, toClass, withProps, withState, withHandlers } from 'recompose';
import { Modal, SectionHeading, Sidebar } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import FaPlus from 'olymp-icons/lib/fa-plus';

import DetailForm from './form';
import FormItem from './form-item';
import withCollection from './with-collection';

var enhance = compose(_Form.create(), withState('isOpen', 'setOpen', false), withState('activeIndex', 'setActiveIndex'), withProps(function (_ref) {
  var type = _ref.type;
  return {
    typeName: type.ofType.name
  };
}), withHandlers({
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
}), withCollection);

var _ref4 = React.createElement(FaPlus, null);

var _ref5 = React.createElement(Menu.Divider, null);

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

      return React.createElement(
        FormItem,
        props,
        React.createElement(
          _Button,
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
        React.createElement(
          Modal,
          { width: 800, open: isOpen, onClose: function onClose() {
              return setOpen(false);
            } },
          React.createElement(
            Sidebar,
            {
              menu: React.createElement(
                Menu,
                null,
                React.createElement(
                  Menu.Item,
                  { icon: _ref4, onClick: function onClick() {
                      return setActiveIndex();
                    } },
                  'Hinzuf\xFCgen'
                ),
                _ref5,
                value.map(function (v, i) {
                  return React.createElement(
                    Menu.Item,
                    {
                      key: v[_get(collection, 'specialFields.nameField', 'name')],
                      onClick: function onClick() {
                        return setActiveIndex(i);
                      }
                    },
                    v[_get(collection, 'specialFields.nameField', 'name')]
                  );
                })
              )
            },
            activeIndex === undefined ? React.createElement(
              SectionHeading,
              null,
              label || 'Item',
              ' anlegen'
            ) : React.createElement(
              SectionHeading,
              { description: (label || 'Item') + ' bearbeiten' },
              'Bearbeiten'
            ),
            React.createElement(DetailForm, {
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
}(Component)) || _class;

export default {
  collapse: true,
  rule: function rule(_ref6) {
    var type = _ref6.type;
    return type.kind === 'LIST' && type.ofType.name.indexOf('Nested') === 0;
  },
  form: toClass(function (_ref7) {
    var form = _ref7.form,
        props = _objectWithoutProperties(_ref7, ['form']);

    return React.createElement(EditList, props);
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1saXN0LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvc2UiLCJ0b0NsYXNzIiwid2l0aFByb3BzIiwid2l0aFN0YXRlIiwid2l0aEhhbmRsZXJzIiwiTW9kYWwiLCJTZWN0aW9uSGVhZGluZyIsIlNpZGViYXIiLCJNZW51IiwiRGV0YWlsRm9ybSIsIkZvcm1JdGVtIiwid2l0aENvbGxlY3Rpb24iLCJlbmhhbmNlIiwiY3JlYXRlIiwidHlwZSIsInR5cGVOYW1lIiwib2ZUeXBlIiwibmFtZSIsIm9uQ2hhbmdlSXRlbSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJmb3JtIiwiYWN0aXZlSW5kZXgiLCJ2YWxpZGF0ZUZpZWxkcyIsImVyciIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJuZXdWYWx1ZXMiLCJFZGl0TGlzdCIsInJlc2V0RmllbGRzIiwicHJvcHMiLCJpc09wZW4iLCJzZXRPcGVuIiwiZGF0YUZpZWxkIiwiZGF0YU1ldGEiLCJjb2xsZWN0aW9uIiwibGFiZWwiLCJzZXRBY3RpdmVJbmRleCIsImxlbmd0aCIsIm1hcCIsInYiLCJpIiwiZmlsdGVyIiwieCIsImNvbGxhcHNlIiwicnVsZSIsImtpbmQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsU0FDRUMsT0FERixFQUVFQyxPQUZGLEVBR0VDLFNBSEYsRUFJRUMsU0FKRixFQUtFQyxZQUxGLFFBTU8sV0FOUDtBQU9BLFNBQVNDLEtBQVQsRUFBZ0JDLGNBQWhCLEVBQWdDQyxPQUFoQyxRQUErQyxZQUEvQztBQUNBLE9BQU9DLElBQVAsTUFBaUIsaUJBQWpCOzs7QUFJQSxPQUFPQyxVQUFQLE1BQXVCLFFBQXZCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixhQUFyQjtBQUNBLE9BQU9DLGNBQVAsTUFB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RztBQUViQyxRQUFNO0FBQUEsUUFBR2pDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFdBQ0pBLEtBQUtrQyxJQUFMLEtBQWMsTUFBZCxJQUF3QmxDLEtBQUtFLE1BQUwsQ0FBWUMsSUFBWixDQUFpQmdDLE9BQWpCLENBQXlCLFFBQXpCLE1BQXVDLENBRDNEO0FBQUEsR0FGTztBQUliNUIsUUFBTXBCLFFBQVE7QUFBQSxRQUFHb0IsSUFBSCxTQUFHQSxJQUFIO0FBQUEsUUFBWVcsS0FBWjs7QUFBQSxXQUF3QixvQkFBQyxRQUFELEVBQWNBLEtBQWQsQ0FBeEI7QUFBQSxHQUFSO0FBSk8sQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL2VkaXQtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBjb21wb3NlLFxuICB0b0NsYXNzLFxuICB3aXRoUHJvcHMsXG4gIHdpdGhTdGF0ZSxcbiAgd2l0aEhhbmRsZXJzLFxufSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgTW9kYWwsIFNlY3Rpb25IZWFkaW5nLCBTaWRlYmFyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgTWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IHsgRmFQbHVzIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IERldGFpbEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5pbXBvcnQgd2l0aENvbGxlY3Rpb24gZnJvbSAnLi93aXRoLWNvbGxlY3Rpb24nO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgRm9ybS5jcmVhdGUoKSxcbiAgd2l0aFN0YXRlKCdpc09wZW4nLCAnc2V0T3BlbicsIGZhbHNlKSxcbiAgd2l0aFN0YXRlKCdhY3RpdmVJbmRleCcsICdzZXRBY3RpdmVJbmRleCcpLFxuICB3aXRoUHJvcHMoKHsgdHlwZSB9KSA9PiAoe1xuICAgIHR5cGVOYW1lOiB0eXBlLm9mVHlwZS5uYW1lLFxuICB9KSksXG4gIHdpdGhIYW5kbGVycyh7XG4gICAgb25DaGFuZ2VJdGVtOiAoeyBvbkNoYW5nZSwgdmFsdWUsIGZvcm0sIGFjdGl2ZUluZGV4IH0pID0+ICgpID0+IHtcbiAgICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvbkNoYW5nZShbLi4uKHZhbHVlIHx8IFtdKSwgdmFsdWVzXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsdWVzID0gWy4uLih2YWx1ZSB8fCBbXSldO1xuICAgICAgICAgIG5ld1ZhbHVlc1thY3RpdmVJbmRleF0gPSB2YWx1ZXM7XG4gICAgICAgICAgb25DaGFuZ2UobmV3VmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSksXG4gIHdpdGhDb2xsZWN0aW9uLFxuKTtcblxuQGVuaGFuY2VcbmNsYXNzIEVkaXRMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGFjdGl2ZUluZGV4LCBmb3JtOiB7IHJlc2V0RmllbGRzIH0gfSkge1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgcmVzZXRGaWVsZHMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUgPSBbXSxcbiAgICAgIGlzT3BlbixcbiAgICAgIHNldE9wZW4sXG4gICAgICAnZGF0YS1fX2ZpZWxkJzogZGF0YUZpZWxkLFxuICAgICAgJ2RhdGEtX19tZXRhJzogZGF0YU1ldGEsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgbGFiZWwsXG4gICAgICBuYW1lLFxuICAgICAgYWN0aXZlSW5kZXgsXG4gICAgICBzZXRBY3RpdmVJbmRleCxcbiAgICAgIGZvcm0sXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uQ2hhbmdlSXRlbSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1JdGVtIHsuLi5wcm9wc30+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxuICAgICAgICAgIGRhdGEtX19maWVsZD17ZGF0YUZpZWxkfVxuICAgICAgICAgIGRhdGEtX19tZXRhPXtkYXRhTWV0YX1cbiAgICAgICAgPlxuICAgICAgICAgIHt2YWx1ZS5sZW5ndGh9IEVpbnRyw6RnZVxuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICA8TW9kYWwgd2lkdGg9ezgwMH0gb3Blbj17aXNPcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIG1lbnU9e1xuICAgICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxGYVBsdXMgLz59IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUluZGV4KCl9PlxuICAgICAgICAgICAgICAgICAgSGluenVmw7xnZW5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAge3ZhbHVlLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3ZbZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLm5hbWVGaWVsZCcsICduYW1lJyldfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJbmRleChpKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3ZbZ2V0KGNvbGxlY3Rpb24sICdzcGVjaWFsRmllbGRzLm5hbWVGaWVsZCcsICduYW1lJyldfVxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWN0aXZlSW5kZXggPT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkaW5nPntsYWJlbCB8fCAnSXRlbSd9IGFubGVnZW48L1NlY3Rpb25IZWFkaW5nPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkaW5nIGRlc2NyaXB0aW9uPXtgJHtsYWJlbCB8fCAnSXRlbSd9IGJlYXJiZWl0ZW5gfT5cbiAgICAgICAgICAgICAgICBCZWFyYmVpdGVuXG4gICAgICAgICAgICAgIDwvU2VjdGlvbkhlYWRpbmc+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8RGV0YWlsRm9ybVxuICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgICBpdGVtPXt2YWx1ZVthY3RpdmVJbmRleF19XG4gICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgIGVtYmVkZGVkXG4gICAgICAgICAgICAgIG9uU2F2ZT17b25DaGFuZ2VJdGVtfVxuICAgICAgICAgICAgICBvbkRlbGV0ZT17XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS5maWx0ZXIoKHgsIGkpID0+IGkgIT09IGFjdGl2ZUluZGV4KSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4IC0gMSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbGxhcHNlOiB0cnVlLFxuICBydWxlOiAoeyB0eXBlIH0pID0+XG4gICAgdHlwZS5raW5kID09PSAnTElTVCcgJiYgdHlwZS5vZlR5cGUubmFtZS5pbmRleE9mKCdOZXN0ZWQnKSA9PT0gMCxcbiAgZm9ybTogdG9DbGFzcygoeyBmb3JtLCAuLi5wcm9wcyB9KSA9PiA8RWRpdExpc3Qgey4uLnByb3BzfSAvPiksXG59O1xuIl19

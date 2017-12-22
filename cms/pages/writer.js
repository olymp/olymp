import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component, Fragment } from 'react';
import { Prompt, withQueryActions } from 'olymp-router';
import FaSave from 'olymp-icons/lib/fa-save';
import FaPencil from 'olymp-icons/lib/fa-pencil';

import { withPropsOnChange, withState, compose } from 'recompose';
import { withLoader, Drawer } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import AntMenu from 'olymp-fela/menu/ant';
import SlateWriter from 'olymp-slate/slate-writer';

import PageForm from './form';
import { queryPage } from './gql/query';
import { mutatePage } from './gql/mutation';

// const setSignal = (props, v) => !v.blocks && props.setSignal(props.signal + 1);

var enhance = compose(queryPage, withLoader,
// withState('signal', 'setSignal', 0),
_Form.create({
  /* onValuesChange: debounce(setSignal, 800, {
    trailing: true,
    leading: false,
  }), */
}), mutatePage, withQueryActions, withPropsOnChange(['item'], function (_ref) {
  var form = _ref.form,
      _ref$item = _ref.item,
      item = _ref$item === undefined ? {} : _ref$item,
      rest = _objectWithoutProperties(_ref, ['form', 'item']);

  form.getFieldDecorator('parentId', {
    initialValue: _get(rest, 'query.["@parent"]') || item.parentId
  });
  form.getFieldDecorator('type', { initialValue: item.type || 'PAGE' });
  form.getFieldDecorator('blocks', { initialValue: item.blocks });

  return {
    id: item.id || null,
    item: item,
    description: !item.id ? 'Neue Seite erstellen' : 'Seite bearbeiten',
    title: !item.id ? 'Neue Seite' : item.name,
    blocks: item.blocks
  };
}));

var _ref4 = React.createElement(FaSave, null);

var _ref5 = React.createElement(Menu.Divider, { key: 2 });

var _ref6 = React.createElement(FaPencil, null);

var _ref7 = React.createElement(Menu.Item, { large: true, icon: React.createElement(FaPencil, null) });

var _ref8 = React.createElement(FaSave, null);

var EditablePage = enhance(_class = function (_Component) {
  _inherits(EditablePage, _Component);

  function EditablePage() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, EditablePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = EditablePage.__proto__ || Object.getPrototypeOf(EditablePage)).call.apply(_ref2, [this].concat(args))), _this), _this.onDragEnd = function (_ref3) {
      var source = _ref3.source,
          destination = _ref3.destination,
          draggableId = _ref3.draggableId;

      // dropped outside the list
      var _this$props = _this.props,
          flatNavigation = _this$props.flatNavigation,
          navigation = _this$props.navigation,
          reorder = _this$props.reorder;

      var item = flatNavigation.find(function (x) {
        return x.id === draggableId;
      });
      var move = function move(array, old, index) {
        if (index >= array.length) {
          var k = index - array.length;
          while (k-- + 1) {
            array.push(undefined);
          }
        }
        array.splice(index, 0, array.splice(old, 1)[0]);
        return array; // for testing purposes
      };
      if (item) {
        if (item.parentId) {
          var ids = flatNavigation.filter(function (x) {
            return x.parentId === item.parentId;
          }).map(function (x) {
            return x.id;
          });
          reorder({
            variables: {
              ids: move(ids, source.index, destination.index),
              parentId: item.parentId
            }
          });
        } else {
          var _ids = navigation.map(function (x) {
            return x.id;
          });
          reorder({
            variables: {
              ids: move(_ids, source.index, destination.index)
            }
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditablePage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          form = _props.form,
          bindingId = _props.bindingId,
          bindingObj = _props.bindingObj,
          item = _props.item,
          signal = _props.signal,
          save = _props.save,
          setFormOpen = _props.setFormOpen,
          formOpen = _props.formOpen,
          description = _props.description,
          pageList = _props.pageList,
          id = _props.id;


      return React.createElement(
        Fragment,
        null,
        React.createElement(Prompt, {
          when: form.isFieldsTouched(),
          message: function message() {
            return 'Änderungen verwerfen?';
          }
        }),
        React.createElement(SlateWriter, {
          value: form.getFieldValue('blocks'),
          onChange: function onChange(blocks) {
            form.setFieldsValue({ blocks: blocks });
          },
          id: id,
          readOnly: false,
          binding: form.isFieldsTouched() ? form.getFieldsValue() : item,
          bindingId: bindingId,
          bindingObj: bindingObj,
          signal: signal,
          menu: [React.createElement(
            Menu.Item,
            { key: 1, onClick: save, icon: _ref4 },
            'Speichern'
          ), _ref5, React.createElement(
            Menu.Item,
            {
              key: 3,
              onClick: function onClick() {
                return setFormOpen(!formOpen);
              },
              icon: _ref6
            },
            'Formular'
          )]
        }),
        React.createElement(
          Drawer,
          {
            width: 475,
            right: true,
            open: formOpen,
            onClose: function onClose() {
              return setFormOpen(false);
            }
          },
          React.createElement(
            Menu,
            {
              header: React.createElement(
                Menu.Item,
                { large: true },
                description
              ),
              headerColor: true,
              headerInverted: true
            },
            React.createElement(PageForm, _extends({ items: pageList }, this.props))
          ),
          React.createElement(
            Menu,
            {
              color: true,
              inverted: true,
              collapsed: true,
              header: _ref7,
              headerColor: 'dark4',
              headerInverted: true
            },
            React.createElement(
              AntMenu.Tooltip,
              { onClick: save, icon: _ref8 },
              'Speichern'
            )
          )
        )
      );
    }
  }]);

  return EditablePage;
}(Component)) || _class;

export { EditablePage as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL3dyaXRlci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIlByb21wdCIsIndpdGhRdWVyeUFjdGlvbnMiLCJ3aXRoUHJvcHNPbkNoYW5nZSIsIndpdGhTdGF0ZSIsImNvbXBvc2UiLCJ3aXRoTG9hZGVyIiwiRHJhd2VyIiwiTWVudSIsIkFudE1lbnUiLCJTbGF0ZVdyaXRlciIsIlBhZ2VGb3JtIiwicXVlcnlQYWdlIiwibXV0YXRlUGFnZSIsImVuaGFuY2UiLCJjcmVhdGUiLCJmb3JtIiwiaXRlbSIsInJlc3QiLCJnZXRGaWVsZERlY29yYXRvciIsImluaXRpYWxWYWx1ZSIsInBhcmVudElkIiwidHlwZSIsImJsb2NrcyIsImlkIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJFZGl0YWJsZVBhZ2UiLCJvbkRyYWdFbmQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImRyYWdnYWJsZUlkIiwicHJvcHMiLCJmbGF0TmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJyZW9yZGVyIiwiZmluZCIsIngiLCJtb3ZlIiwiYXJyYXkiLCJvbGQiLCJpbmRleCIsImxlbmd0aCIsImsiLCJwdXNoIiwidW5kZWZpbmVkIiwic3BsaWNlIiwiaWRzIiwiZmlsdGVyIiwibWFwIiwidmFyaWFibGVzIiwiYmluZGluZ0lkIiwiYmluZGluZ09iaiIsInNpZ25hbCIsInNhdmUiLCJzZXRGb3JtT3BlbiIsImZvcm1PcGVuIiwicGFnZUxpc3QiLCJpc0ZpZWxkc1RvdWNoZWQiLCJnZXRGaWVsZFZhbHVlIiwic2V0RmllbGRzVmFsdWUiLCJnZXRGaWVsZHNWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsRUFBMkJDLFFBQTNCLFFBQTJDLE9BQTNDO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsZ0JBQWpCLFFBQXlDLGNBQXpDOzs7O0FBRUEsU0FBU0Ms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S3pCLEtBQXBDO0FBTEYsV0FORjtBQWFFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLHlCQURGO0FBRUUsNEJBRkY7QUFHRSw2QkFIRjtBQUlFLDJCQUpGO0FBS0UsMkJBQVksT0FMZDtBQU1FO0FBTkY7QUFRRTtBQUFDLHFCQUFELENBQVMsT0FBVDtBQUFBLGdCQUFpQixTQUFTc0IsSUFBMUIsRUFBZ0MsV0FBaEM7QUFBQTtBQUFBO0FBUkY7QUFiRjtBQTlCRixPQURGO0FBMkREOzs7O0VBL0d1Q3hELFM7O1NBQXJCNkIsWSIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy93cml0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb21wdCwgd2l0aFF1ZXJ5QWN0aW9ucyB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBGYVNhdmUsIEZhUGVuY2lsIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgd2l0aFByb3BzT25DaGFuZ2UsIHdpdGhTdGF0ZSwgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoTG9hZGVyLCBEcmF3ZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgQW50TWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUvYW50JztcbmltcG9ydCBTbGF0ZVdyaXRlciBmcm9tICdvbHltcC1zbGF0ZS9zbGF0ZS13cml0ZXInO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQYWdlRm9ybSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHsgcXVlcnlQYWdlIH0gZnJvbSAnLi9ncWwvcXVlcnknO1xuaW1wb3J0IHsgbXV0YXRlUGFnZSB9IGZyb20gJy4vZ3FsL211dGF0aW9uJztcblxuLy8gY29uc3Qgc2V0U2lnbmFsID0gKHByb3BzLCB2KSA9PiAhdi5ibG9ja3MgJiYgcHJvcHMuc2V0U2lnbmFsKHByb3BzLnNpZ25hbCArIDEpO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgcXVlcnlQYWdlLFxuICB3aXRoTG9hZGVyLFxuICAvLyB3aXRoU3RhdGUoJ3NpZ25hbCcsICdzZXRTaWduYWwnLCAwKSxcbiAgRm9ybS5jcmVhdGUoe1xuICAgIC8qIG9uVmFsdWVzQ2hhbmdlOiBkZWJvdW5jZShzZXRTaWduYWwsIDgwMCwge1xuICAgICAgdHJhaWxpbmc6IHRydWUsXG4gICAgICBsZWFkaW5nOiBmYWxzZSxcbiAgICB9KSwgKi9cbiAgfSksXG4gIG11dGF0ZVBhZ2UsXG4gIHdpdGhRdWVyeUFjdGlvbnMsXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsnaXRlbSddLCAoeyBmb3JtLCBpdGVtID0ge30sIC4uLnJlc3QgfSkgPT4ge1xuICAgIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoJ3BhcmVudElkJywge1xuICAgICAgaW5pdGlhbFZhbHVlOiBnZXQocmVzdCwgJ3F1ZXJ5LltcIkBwYXJlbnRcIl0nKSB8fCBpdGVtLnBhcmVudElkLFxuICAgIH0pO1xuICAgIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoJ3R5cGUnLCB7IGluaXRpYWxWYWx1ZTogaXRlbS50eXBlIHx8ICdQQUdFJyB9KTtcbiAgICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCdibG9ja3MnLCB7IGluaXRpYWxWYWx1ZTogaXRlbS5ibG9ja3MgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGl0ZW0uaWQgfHwgbnVsbCxcbiAgICAgIGl0ZW0sXG4gICAgICBkZXNjcmlwdGlvbjogIWl0ZW0uaWQgPyAnTmV1ZSBTZWl0ZSBlcnN0ZWxsZW4nIDogJ1NlaXRlIGJlYXJiZWl0ZW4nLFxuICAgICAgdGl0bGU6ICFpdGVtLmlkID8gJ05ldWUgU2VpdGUnIDogaXRlbS5uYW1lLFxuICAgICAgYmxvY2tzOiBpdGVtLmJsb2NrcyxcbiAgICB9O1xuICB9KSxcbik7XG5cbkBlbmhhbmNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0YWJsZVBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbkRyYWdFbmQgPSAoeyBzb3VyY2UsIGRlc3RpbmF0aW9uLCBkcmFnZ2FibGVJZCB9KSA9PiB7XG4gICAgLy8gZHJvcHBlZCBvdXRzaWRlIHRoZSBsaXN0XG4gICAgY29uc3QgeyBmbGF0TmF2aWdhdGlvbiwgbmF2aWdhdGlvbiwgcmVvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpdGVtID0gZmxhdE5hdmlnYXRpb24uZmluZCh4ID0+IHguaWQgPT09IGRyYWdnYWJsZUlkKTtcbiAgICBjb25zdCBtb3ZlID0gKGFycmF5LCBvbGQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPj0gYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGxldCBrID0gaW5kZXggLSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChrLS0gKyAxKSB7XG4gICAgICAgICAgYXJyYXkucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDAsIGFycmF5LnNwbGljZShvbGQsIDEpWzBdKTtcbiAgICAgIHJldHVybiBhcnJheTsgLy8gZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICB9O1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5wYXJlbnRJZCkge1xuICAgICAgICBjb25zdCBpZHMgPSBmbGF0TmF2aWdhdGlvblxuICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LnBhcmVudElkID09PSBpdGVtLnBhcmVudElkKVxuICAgICAgICAgIC5tYXAoeCA9PiB4LmlkKTtcbiAgICAgICAgcmVvcmRlcih7XG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpZHM6IG1vdmUoaWRzLCBzb3VyY2UuaW5kZXgsIGRlc3RpbmF0aW9uLmluZGV4KSxcbiAgICAgICAgICAgIHBhcmVudElkOiBpdGVtLnBhcmVudElkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaWRzID0gbmF2aWdhdGlvbi5tYXAoeCA9PiB4LmlkKTtcbiAgICAgICAgcmVvcmRlcih7XG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpZHM6IG1vdmUoaWRzLCBzb3VyY2UuaW5kZXgsIGRlc3RpbmF0aW9uLmluZGV4KSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm0sXG4gICAgICBiaW5kaW5nSWQsXG4gICAgICBiaW5kaW5nT2JqLFxuICAgICAgaXRlbSxcbiAgICAgIHNpZ25hbCxcbiAgICAgIHNhdmUsXG4gICAgICBzZXRGb3JtT3BlbixcbiAgICAgIGZvcm1PcGVuLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBwYWdlTGlzdCxcbiAgICAgIGlkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPFByb21wdFxuICAgICAgICAgIHdoZW49e2Zvcm0uaXNGaWVsZHNUb3VjaGVkKCl9XG4gICAgICAgICAgbWVzc2FnZT17KCkgPT4gJ8OEbmRlcnVuZ2VuIHZlcndlcmZlbj8nfVxuICAgICAgICAvPlxuICAgICAgICA8U2xhdGVXcml0ZXJcbiAgICAgICAgICB2YWx1ZT17Zm9ybS5nZXRGaWVsZFZhbHVlKCdibG9ja3MnKX1cbiAgICAgICAgICBvbkNoYW5nZT17YmxvY2tzID0+IHtcbiAgICAgICAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBibG9ja3MgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICAgIGJpbmRpbmc9e2Zvcm0uaXNGaWVsZHNUb3VjaGVkKCkgPyBmb3JtLmdldEZpZWxkc1ZhbHVlKCkgOiBpdGVtfVxuICAgICAgICAgIGJpbmRpbmdJZD17YmluZGluZ0lkfVxuICAgICAgICAgIGJpbmRpbmdPYmo9e2JpbmRpbmdPYmp9XG4gICAgICAgICAgc2lnbmFsPXtzaWduYWx9XG4gICAgICAgICAgbWVudT17W1xuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9ezF9IG9uQ2xpY2s9e3NhdmV9IGljb249ezxGYVNhdmUgLz59PlxuICAgICAgICAgICAgICBTcGVpY2hlcm5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPixcbiAgICAgICAgICAgIDxNZW51LkRpdmlkZXIga2V5PXsyfSAvPixcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAga2V5PXszfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtT3BlbighZm9ybU9wZW4pfVxuICAgICAgICAgICAgICBpY29uPXs8RmFQZW5jaWwgLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZvcm11bGFyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT4sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIHdpZHRoPXs0NzV9XG4gICAgICAgICAgcmlnaHRcbiAgICAgICAgICBvcGVuPXtmb3JtT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRGb3JtT3BlbihmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgaGVhZGVyPXs8TWVudS5JdGVtIGxhcmdlPntkZXNjcmlwdGlvbn08L01lbnUuSXRlbT59XG4gICAgICAgICAgICBoZWFkZXJDb2xvclxuICAgICAgICAgICAgaGVhZGVySW52ZXJ0ZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFnZUZvcm0gaXRlbXM9e3BhZ2VMaXN0fSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgICAgY29sbGFwc2VkXG4gICAgICAgICAgICBoZWFkZXI9ezxNZW51Lkl0ZW0gbGFyZ2UgaWNvbj17PEZhUGVuY2lsIC8+fSAvPn1cbiAgICAgICAgICAgIGhlYWRlckNvbG9yPVwiZGFyazRcIlxuICAgICAgICAgICAgaGVhZGVySW52ZXJ0ZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QW50TWVudS5Ub29sdGlwIG9uQ2xpY2s9e3NhdmV9IGljb249ezxGYVNhdmUgLz59PlxuICAgICAgICAgICAgICBTcGVpY2hlcm5cbiAgICAgICAgICAgIDwvQW50TWVudS5Ub29sdGlwPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

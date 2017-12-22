import 'antd/lib/popconfirm/style';
import _Popconfirm from 'antd/lib/popconfirm';
import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Form from 'olymp-ui/form';
import { compose, withState, withPropsOnChange, withHandlers } from 'recompose';
import { Container, Sidebar } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import AntMenu from 'olymp-fela/menu/ant';
import { withRouter, Prompt } from 'olymp-router';
import FaPencil from 'olymp-icons/lib/fa-pencil';
import FaTrashO from 'olymp-icons/lib/fa-trash-o';
import FaSave from 'olymp-icons/lib/fa-save';
import FaTimes from 'olymp-icons/lib/fa-times';

import DefaultEdits from './default-edits';
import { getValidationRules, getInitialValue, getFormSchema } from './utils';

var Items = function Items(_ref) {
  var schema = _ref.schema,
      form = _ref.form,
      item = _ref.item,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ['schema', 'form', 'item', 'value']);

  return Object.keys(schema).map(function (key) {
    var field = schema[key];

    var _schema$key = schema[key],
        Com = _schema$key.form,
        fieldDecorator = _schema$key.fieldDecorator,
        restFields = _objectWithoutProperties(_schema$key, ['form', 'fieldDecorator']);

    if (!Com) {
      return null;
    }

    var rule = [];
    if (_get(field, 'type.kind') === 'NON_NULL') {
      rule.push('required');
    }

    return fieldDecorator()(React.createElement(Com, _extends({}, rest, restFields, {
      form: form,
      field: field,
      item: item,
      rule: rule,
      key: field.name
    })));
  });
};

var getDefaultEdit = function getDefaultEdit(type) {
  var find = Object.keys(DefaultEdits).find(function (key) {
    return DefaultEdits[key].rule(type);
  }) || Object.keys(DefaultEdits).find(function (key) {
    return DefaultEdits[key].isDefault;
  });
  if (find) {
    return DefaultEdits[find];
  }
  return null;
};

var enhance = compose(withRouter, withPropsOnChange(['collection', 'query'], function (_ref2) {
  var collection = _ref2.collection,
      form = _ref2.form,
      query = _ref2.query,
      props = _objectWithoutProperties(_ref2, ['collection', 'form', 'query']);

  var schema = getFormSchema(collection.fields);
  var getFieldDecorator = form.getFieldDecorator;

  var schemaWithEdits = {};
  schema.forEach(function (field) {
    var edit = getDefaultEdit(field) || {};
    var title = _get(field, 'specialFields.label');
    var label = title.replace('-Ids', '').replace('-Id', '');
    schemaWithEdits[field.name] = _extends({}, field, edit, {
      title: title,
      label: label,
      fieldDecorator: function fieldDecorator() {
        return getFieldDecorator(field.name, {
          rules: getValidationRules(field),
          // valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
          initialValue: query[field.name] || getInitialValue(props, field)
        });
      }
    });
  });
  return {
    schemaWithEdits: schemaWithEdits,
    schema: schema
  };
}), withState('collapsed', 'setCollapsed', true), withHandlers({
  expand: function expand(_ref3) {
    var setCollapsed = _ref3.setCollapsed;
    return function () {
      return setCollapsed(false);
    };
  },
  collapse: function collapse(_ref4) {
    var setCollapsed = _ref4.setCollapsed;
    return function () {
      return setCollapsed(true);
    };
  }
}));

var _ref6 = React.createElement(Menu.Item, { icon: React.createElement(FaPencil, null), large: true });

var _ref7 = React.createElement(FaSave, null);

var _ref8 = React.createElement(
  AntMenu.Tooltip,
  { icon: React.createElement(FaTrashO, null) },
  'L\xF6schen'
);

var _ref9 = React.createElement(FaTimes, null);

var FormComponent = enhance(function (_ref5) {
  var schema = _ref5.schema,
      schemaWithEdits = _ref5.schemaWithEdits,
      inline = _ref5.inline,
      vertical = _ref5.vertical,
      item = _ref5.item,
      className = _ref5.className,
      validateFields = _ref5.validateFields,
      form = _ref5.form,
      collection = _ref5.collection,
      setTab = _ref5.setTab,
      tab = _ref5.tab,
      expand = _ref5.expand,
      collapse = _ref5.collapse,
      onSave = _ref5.onSave,
      onDelete = _ref5.onDelete,
      onClose = _ref5.onClose,
      collapsed = _ref5.collapsed,
      embedded = _ref5.embedded,
      rest = _objectWithoutProperties(_ref5, ['schema', 'schemaWithEdits', 'inline', 'vertical', 'item', 'className', 'validateFields', 'form', 'collection', 'setTab', 'tab', 'expand', 'collapse', 'onSave', 'onDelete', 'onClose', 'collapsed', 'embedded']);

  return React.createElement(
    Sidebar,
    {
      right: true,
      collapsed: true,
      menu: React.createElement(
        Menu,
        {
          header: _ref6,
          headerColor: true,
          headerInverted: true
        },
        React.createElement(
          AntMenu.Tooltip,
          { onClick: onSave, icon: _ref7 },
          'Speichern'
        ),
        !!onDelete && React.createElement(
          _Popconfirm,
          {
            placement: 'left',
            title: 'Wirklich l\xF6schen?',
            onConfirm: onDelete,
            okText: 'Ja',
            cancelText: 'Nein'
          },
          _ref8
        ),
        !!onClose && React.createElement(
          AntMenu.Tooltip,
          { icon: _ref9, onClick: onClose },
          'Schlie\xDFen'
        )
      )
    },
    React.createElement(
      Container,
      { size: 'small' },
      !!embedded && React.createElement(Prompt, {
        when: form.isFieldsTouched(),
        message: function message() {
          return 'Änderungen verwerfen?';
        }
      }),
      embedded ? React.createElement(
        Form,
        { layout: vertical && 'vertical' || inline && 'inline' },
        React.createElement(Items, _extends({ schema: schemaWithEdits, form: form, item: item }, rest))
      ) : React.createElement(Items, _extends({ schema: schemaWithEdits, form: form, item: item }, rest))
    )
  );
});
FormComponent.displayName = 'FormComponent';
export default FormComponent;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZm9ybS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwid2l0aEhhbmRsZXJzIiwiQ29udGFpbmVyIiwiU2lkZWJhciIsIk1lbnUiLCJBbnRNZW51Iiwid2l0aFJvdXRlciIsIlByb21wdCIsIkRlZmF1bHRFZGl0cyIsImdldFZhbGlkYXRpb25SdWxlcyIsImdldEluaXRpYWxWYWx1ZSIsImdldEZvcm1TY2hlbWEiLCJJdGVtcyIsInNjaGVtYSIsImZvcm0iLCJpdGVtIiwidmFsdWUiLCJyZXN0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImZpZWxkIiwia2V5IiwiQ29tIiwiZmllbGREZWNvcmF0b3IiLCJyZXN0RmllbGRzIiwicnVsZSIsInB1c2giLCJuYW1lIiwiZ2V0RGVmYXVsdEVkaXQiLCJmaW5kIiwidHlwZSIsImlzRGVmYXVsdCIsImVuaGFuY2UiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJwcm9wcyIsImZpZWxkcyIsImdldEZpZWxkRGVjb3JhdG9yIiwic2NoZW1hV2l0aEVkaXRzIiwiZm9yRWFjaCIsImVkaXQiLCJ0aXRsZSIsImxhYmVsIiwicmVwbGFjZSIsInJ1bGVzIiwiaW5pdGlhbFZhbHVlIiwiZXhwYW5kIiwic2V0Q29sbGFwc2VkIiwiY29sbGFwc2UiLCJGb3JtQ29tcG9uZW50IiwiaW5saW5lIiwidmVydGljYWwiLCJjbGFzc05hbWUiLCJ2YWxpZGF0ZUZpZWxkcyIsInNldFRhYiIsInRhYiIsIm9uU2F2ZSIsIm9uRGVsZXRlIiwib25DbG9zZSIsImNvbGxhcHNlZCIsImVtYmVkZGVkIiwiaXNGaWVsZHNUb3VjaGVkIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsZUFBakI7QUFDQSxTQUFTQyxPQUFULEVBQWtC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TUFBSyxPQUFoQjtBQUNHLE9BQUMsQ0FBQ0UsUUFBRixJQUNDLG9CQUFDLE1BQUQ7QUFDRSxjQUFNL0MsS0FBS2dELGVBQUwsRUFEUjtBQUVFLGlCQUFTO0FBQUEsaUJBQU0sdUJBQU47QUFBQTtBQUZYLFFBRko7QUFRR0QsaUJBQ0M7QUFBQyxZQUFEO0FBQUEsVUFBTSxRQUFTVCxZQUFZLFVBQWIsSUFBNkJELFVBQVUsUUFBckQ7QUFDRSw0QkFBQyxLQUFELGFBQU8sUUFBUVosZUFBZixFQUFnQyxNQUFNekIsSUFBdEMsRUFBNEMsTUFBTUMsSUFBbEQsSUFBNERFLElBQTVEO0FBREYsT0FERCxHQUtDLG9CQUFDLEtBQUQsYUFBTyxRQUFRc0IsZUFBZixFQUFnQyxNQUFNekIsSUFBdEMsRUFBNEMsTUFBTUMsSUFBbEQsSUFBNERFLElBQTVEO0FBYko7QUEvQkYsR0FyQkY7QUFBQSxDQURvQixDQUF0QjtBQXdFQWlDLGNBQWNhLFdBQWQsR0FBNEIsZUFBNUI7QUFDQSxlQUFlYixhQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdvbHltcC11aS9mb3JtJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSwgd2l0aFByb3BzT25DaGFuZ2UsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBDb250YWluZXIsIFNpZGViYXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgQW50TWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUvYW50JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIFByb21wdCB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBGYVBlbmNpbCwgRmFUcmFzaE8sIEZhU2F2ZSwgRmFUaW1lcyB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBQb3Bjb25maXJtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRGVmYXVsdEVkaXRzIGZyb20gJy4vZGVmYXVsdC1lZGl0cyc7XG5pbXBvcnQgeyBnZXRWYWxpZGF0aW9uUnVsZXMsIGdldEluaXRpYWxWYWx1ZSwgZ2V0Rm9ybVNjaGVtYSB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBJdGVtcyA9ICh7IHNjaGVtYSwgZm9ybSwgaXRlbSwgdmFsdWUsIC4uLnJlc3QgfSkgPT5cbiAgT2JqZWN0LmtleXMoc2NoZW1hKS5tYXAoa2V5ID0+IHtcbiAgICBjb25zdCBmaWVsZCA9IHNjaGVtYVtrZXldO1xuICAgIGNvbnN0IHsgZm9ybTogQ29tLCBmaWVsZERlY29yYXRvciwgLi4ucmVzdEZpZWxkcyB9ID0gc2NoZW1hW2tleV07XG4gICAgaWYgKCFDb20pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBbXTtcbiAgICBpZiAoZ2V0KGZpZWxkLCAndHlwZS5raW5kJykgPT09ICdOT05fTlVMTCcpIHtcbiAgICAgIHJ1bGUucHVzaCgncmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGREZWNvcmF0b3IoKShcbiAgICAgIDxDb21cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5yZXN0RmllbGRzfVxuICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIHJ1bGU9e3J1bGV9XG4gICAgICAgIGtleT17ZmllbGQubmFtZX1cbiAgICAgIC8+LFxuICAgICk7XG4gIH0pO1xuXG5jb25zdCBnZXREZWZhdWx0RWRpdCA9IHR5cGUgPT4ge1xuICBjb25zdCBmaW5kID1cbiAgICBPYmplY3Qua2V5cyhEZWZhdWx0RWRpdHMpLmZpbmQoa2V5ID0+IERlZmF1bHRFZGl0c1trZXldLnJ1bGUodHlwZSkpIHx8XG4gICAgT2JqZWN0LmtleXMoRGVmYXVsdEVkaXRzKS5maW5kKGtleSA9PiBEZWZhdWx0RWRpdHNba2V5XS5pc0RlZmF1bHQpO1xuICBpZiAoZmluZCkge1xuICAgIHJldHVybiBEZWZhdWx0RWRpdHNbZmluZF07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbiAgd2l0aFByb3BzT25DaGFuZ2UoXG4gICAgWydjb2xsZWN0aW9uJywgJ3F1ZXJ5J10sXG4gICAgKHsgY29sbGVjdGlvbiwgZm9ybSwgcXVlcnksIC4uLnByb3BzIH0pID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGdldEZvcm1TY2hlbWEoY29sbGVjdGlvbi5maWVsZHMpO1xuICAgICAgY29uc3QgeyBnZXRGaWVsZERlY29yYXRvciB9ID0gZm9ybTtcbiAgICAgIGNvbnN0IHNjaGVtYVdpdGhFZGl0cyA9IHt9O1xuICAgICAgc2NoZW1hLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjb25zdCBlZGl0ID0gZ2V0RGVmYXVsdEVkaXQoZmllbGQpIHx8IHt9O1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldChmaWVsZCwgJ3NwZWNpYWxGaWVsZHMubGFiZWwnKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aXRsZS5yZXBsYWNlKCctSWRzJywgJycpLnJlcGxhY2UoJy1JZCcsICcnKTtcbiAgICAgICAgc2NoZW1hV2l0aEVkaXRzW2ZpZWxkLm5hbWVdID0ge1xuICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgIC4uLmVkaXQsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgZmllbGREZWNvcmF0b3I6ICgpID0+XG4gICAgICAgICAgICBnZXRGaWVsZERlY29yYXRvcihmaWVsZC5uYW1lLCB7XG4gICAgICAgICAgICAgIHJ1bGVzOiBnZXRWYWxpZGF0aW9uUnVsZXMoZmllbGQpLFxuICAgICAgICAgICAgICAvLyB2YWx1ZVByb3BOYW1lOiBmaWVsZC50eXBlLm5hbWUgPT09ICdCb29sZWFuJyA/ICdjaGVja2VkJyA6ICd2YWx1ZScsXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogcXVlcnlbZmllbGQubmFtZV0gfHwgZ2V0SW5pdGlhbFZhbHVlKHByb3BzLCBmaWVsZCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZW1hV2l0aEVkaXRzLFxuICAgICAgICBzY2hlbWEsXG4gICAgICB9O1xuICAgIH0sXG4gICksXG4gIHdpdGhTdGF0ZSgnY29sbGFwc2VkJywgJ3NldENvbGxhcHNlZCcsIHRydWUpLFxuICB3aXRoSGFuZGxlcnMoe1xuICAgIGV4cGFuZDogKHsgc2V0Q29sbGFwc2VkIH0pID0+ICgpID0+IHNldENvbGxhcHNlZChmYWxzZSksXG4gICAgY29sbGFwc2U6ICh7IHNldENvbGxhcHNlZCB9KSA9PiAoKSA9PiBzZXRDb2xsYXBzZWQodHJ1ZSksXG4gIH0pLFxuKTtcblxuY29uc3QgRm9ybUNvbXBvbmVudCA9IGVuaGFuY2UoXG4gICh7XG4gICAgc2NoZW1hLFxuICAgIHNjaGVtYVdpdGhFZGl0cyxcbiAgICBpbmxpbmUsXG4gICAgdmVydGljYWwsXG4gICAgaXRlbSxcbiAgICBjbGFzc05hbWUsXG4gICAgdmFsaWRhdGVGaWVsZHMsXG4gICAgZm9ybSxcbiAgICBjb2xsZWN0aW9uLFxuICAgIHNldFRhYixcbiAgICB0YWIsXG4gICAgZXhwYW5kLFxuICAgIGNvbGxhcHNlLFxuICAgIG9uU2F2ZSxcbiAgICBvbkRlbGV0ZSxcbiAgICBvbkNsb3NlLFxuICAgIGNvbGxhcHNlZCxcbiAgICBlbWJlZGRlZCxcbiAgICAuLi5yZXN0XG4gIH0pID0+IChcbiAgICA8U2lkZWJhclxuICAgICAgcmlnaHRcbiAgICAgIGNvbGxhcHNlZFxuICAgICAgbWVudT17XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgaGVhZGVyPXs8TWVudS5JdGVtIGljb249ezxGYVBlbmNpbCAvPn0gbGFyZ2UgLz59XG4gICAgICAgICAgaGVhZGVyQ29sb3JcbiAgICAgICAgICBoZWFkZXJJbnZlcnRlZFxuICAgICAgICA+XG4gICAgICAgICAgPEFudE1lbnUuVG9vbHRpcCBvbkNsaWNrPXtvblNhdmV9IGljb249ezxGYVNhdmUgLz59PlxuICAgICAgICAgICAgU3BlaWNoZXJuXG4gICAgICAgICAgPC9BbnRNZW51LlRvb2x0aXA+XG4gICAgICAgICAgeyEhb25EZWxldGUgJiYgKFxuICAgICAgICAgICAgPFBvcGNvbmZpcm1cbiAgICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiV2lya2xpY2ggbMO2c2NoZW4/XCJcbiAgICAgICAgICAgICAgb25Db25maXJtPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgb2tUZXh0PVwiSmFcIlxuICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTmVpblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBbnRNZW51LlRvb2x0aXAgaWNvbj17PEZhVHJhc2hPIC8+fT5Mw7ZzY2hlbjwvQW50TWVudS5Ub29sdGlwPlxuICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyEhb25DbG9zZSAmJiAoXG4gICAgICAgICAgICA8QW50TWVudS5Ub29sdGlwIGljb249ezxGYVRpbWVzIC8+fSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgU2NobGllw59lblxuICAgICAgICAgICAgPC9BbnRNZW51LlRvb2x0aXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9NZW51PlxuICAgICAgfVxuICAgID5cbiAgICAgIDxDb250YWluZXIgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgIHshIWVtYmVkZGVkICYmIChcbiAgICAgICAgICA8UHJvbXB0XG4gICAgICAgICAgICB3aGVuPXtmb3JtLmlzRmllbGRzVG91Y2hlZCgpfVxuICAgICAgICAgICAgbWVzc2FnZT17KCkgPT4gJ8OEbmRlcnVuZ2VuIHZlcndlcmZlbj8nfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge2VtYmVkZGVkID8gKFxuICAgICAgICAgIDxGb3JtIGxheW91dD17KHZlcnRpY2FsICYmICd2ZXJ0aWNhbCcpIHx8IChpbmxpbmUgJiYgJ2lubGluZScpfT5cbiAgICAgICAgICAgIDxJdGVtcyBzY2hlbWE9e3NjaGVtYVdpdGhFZGl0c30gZm9ybT17Zm9ybX0gaXRlbT17aXRlbX0gey4uLnJlc3R9IC8+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJdGVtcyBzY2hlbWE9e3NjaGVtYVdpdGhFZGl0c30gZm9ybT17Zm9ybX0gaXRlbT17aXRlbX0gey4uLnJlc3R9IC8+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NpZGViYXI+XG4gICksXG4pO1xuRm9ybUNvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdGb3JtQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IEZvcm1Db21wb25lbnQ7XG4iXX0=

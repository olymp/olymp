'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/popconfirm/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('olymp-ui/form');

var _form2 = _interopRequireDefault(_form);

var _recompose = require('recompose');

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _ant = require('olymp-fela/menu/ant');

var _ant2 = _interopRequireDefault(_ant);

var _olympRouter = require('olymp-router');

var _faPencil = require('olymp-icons/lib/fa-pencil');

var _faPencil2 = _interopRequireDefault(_faPencil);

var _faTrashO = require('olymp-icons/lib/fa-trash-o');

var _faTrashO2 = _interopRequireDefault(_faTrashO);

var _faSave = require('olymp-icons/lib/fa-save');

var _faSave2 = _interopRequireDefault(_faSave);

var _faTimes = require('olymp-icons/lib/fa-times');

var _faTimes2 = _interopRequireDefault(_faTimes);

var _defaultEdits = require('./default-edits');

var _defaultEdits2 = _interopRequireDefault(_defaultEdits);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
    if ((0, _get3.default)(field, 'type.kind') === 'NON_NULL') {
      rule.push('required');
    }

    return fieldDecorator()(_react2.default.createElement(Com, _extends({}, rest, restFields, {
      form: form,
      field: field,
      item: item,
      rule: rule,
      key: field.name
    })));
  });
};

var getDefaultEdit = function getDefaultEdit(type) {
  var find = Object.keys(_defaultEdits2.default).find(function (key) {
    return _defaultEdits2.default[key].rule(type);
  }) || Object.keys(_defaultEdits2.default).find(function (key) {
    return _defaultEdits2.default[key].isDefault;
  });
  if (find) {
    return _defaultEdits2.default[find];
  }
  return null;
};

var enhance = (0, _recompose.compose)(_olympRouter.withRouter, (0, _recompose.withPropsOnChange)(['collection', 'query'], function (_ref2) {
  var collection = _ref2.collection,
      form = _ref2.form,
      query = _ref2.query,
      props = _objectWithoutProperties(_ref2, ['collection', 'form', 'query']);

  var schema = (0, _utils.getFormSchema)(collection.fields);
  var getFieldDecorator = form.getFieldDecorator;

  var schemaWithEdits = {};
  schema.forEach(function (field) {
    var edit = getDefaultEdit(field) || {};
    var title = (0, _get3.default)(field, 'specialFields.label');
    var label = title.replace('-Ids', '').replace('-Id', '');
    schemaWithEdits[field.name] = _extends({}, field, edit, {
      title: title,
      label: label,
      fieldDecorator: function fieldDecorator() {
        return getFieldDecorator(field.name, {
          rules: (0, _utils.getValidationRules)(field),
          // valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
          initialValue: query[field.name] || (0, _utils.getInitialValue)(props, field)
        });
      }
    });
  });
  return {
    schemaWithEdits: schemaWithEdits,
    schema: schema
  };
}), (0, _recompose.withState)('collapsed', 'setCollapsed', true), (0, _recompose.withHandlers)({
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

var _ref6 = _react2.default.createElement(_menu2.default.Item, { icon: _react2.default.createElement(_faPencil2.default, null), large: true });

var _ref7 = _react2.default.createElement(_faSave2.default, null);

var _ref8 = _react2.default.createElement(
  _ant2.default.Tooltip,
  { icon: _react2.default.createElement(_faTrashO2.default, null) },
  'L\xF6schen'
);

var _ref9 = _react2.default.createElement(_faTimes2.default, null);

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

  return _react2.default.createElement(
    _olympFela.Sidebar,
    {
      right: true,
      collapsed: true,
      menu: _react2.default.createElement(
        _menu2.default,
        {
          header: _ref6,
          headerColor: true,
          headerInverted: true
        },
        _react2.default.createElement(
          _ant2.default.Tooltip,
          { onClick: onSave, icon: _ref7 },
          'Speichern'
        ),
        !!onDelete && _react2.default.createElement(
          _popconfirm2.default,
          {
            placement: 'left',
            title: 'Wirklich l\xF6schen?',
            onConfirm: onDelete,
            okText: 'Ja',
            cancelText: 'Nein'
          },
          _ref8
        ),
        !!onClose && _react2.default.createElement(
          _ant2.default.Tooltip,
          { icon: _ref9, onClick: onClose },
          'Schlie\xDFen'
        )
      )
    },
    _react2.default.createElement(
      _olympFela.Container,
      { size: 'small' },
      !!embedded && _react2.default.createElement(_olympRouter.Prompt, {
        when: form.isFieldsTouched(),
        message: function message() {
          return 'Änderungen verwerfen?';
        }
      }),
      embedded ? _react2.default.createElement(
        _form2.default,
        { layout: vertical && 'vertical' || inline && 'inline' },
        _react2.default.createElement(Items, _extends({ schema: schemaWithEdits, form: form, item: item }, rest))
      ) : _react2.default.createElement(Items, _extends({ schema: schemaWithEdits, form: form, item: item }, rest))
    )
  );
});
FormComponent.displayName = 'FormComponent';
exports.default = FormComponent;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2Zvcm0uZXM2Il0sIm5hbWVzIjpbIkl0ZW1zIiwic2NoZW1hIiwiZm9ybSIsIml0ZW0iLCJ2YWx1ZSIsInJlc3QiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZmllbGQiLCJrZXkiLCJDb20iLCJmaWVsZERlY29yYXRvciIsInJlc3RGaWVsZHMiLCJydWxlIiwicHVzaCIsIm5hbWUiLCJnZXREZWZhdWx0RWRpdCIsImZpbmQiLCJ0eXBlIiwiaXNEZWZhdWx0IiwiZW5oYW5jZSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsInByb3BzIiwiZmllbGRzIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJzY2hlbWFXaXRoRWRpdHMiLCJmb3JFYWNoIiwiZWRpdCIsInRpdGxlIiwibGFiZWwiLCJyZXBsYWNlIiwicnVsZXMiLCJpbml0aWFsVmFsdWUiLCJleHBhbmQiLCJzZXRDb2xsYXBzZWQiLCJjb2xsYXBzZSIsIkZvcm1Db21wb25lbnQiLCJpbmxpbmUiLCJ2ZXJ0aWNhbCIsImNsYXNzTmFtZSIsInZhbGlkYXRlRmllbGRzIiwic2V0VGFiIiwidGFiIiwib25TYXZlIiwib25EZWxldGUiLCJvbkNsb3NlIiwiY29sbGFwc2VkIiwiZW1iZWRkZWQiLCJpc0ZpZWxkc1RvdWNoZWQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsSUFBWCxRQUFXQSxJQUFYO0FBQUEsTUFBaUJDLElBQWpCLFFBQWlCQSxJQUFqQjtBQUFBLE1BQXVCQyxLQUF2QixRQUF1QkEsS0FBdkI7QUFBQSxNQUFpQ0MsSUFBakM7O0FBQUEsU0FDWkMsT0FBT0MsSUFBUCxDQUFZTixN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UyxPQUFUO0FBQUEsWUFBaUIsU0FBU3dDLE1BQTFCLEVBQWtDLFdBQWxDO0FBQUE7QUFBQSxTQUxGO0FBUUcsU0FBQyxDQUFDQyxRQUFGLElBQ0M7QUFBQTtBQUFBO0FBQ0UsdUJBQVUsTUFEWjtBQUVFLG1CQUFNLHNCQUZSO0FBR0UsdUJBQVdBLFFBSGI7QUFJRSxvQkFBTyxJQUpUO0FBS0Usd0JBQVc7QUFMYjtBQUFBO0FBQUEsU0FUSjtBQW1CRyxTQUFDLENBQUNDLE9BQUYsSUFDQztBQUFBLHdCQUFTLE9BQVQ7QUFBQSxZQUFpQixXQUFqQixFQUFvQyxTQUFTQSxPQUE3QztBQUFBO0FBQUE7QUFwQko7QUFKSjtBQStCRTtBQUFBO0FBQUEsUUFBVyxNQUFLLE9BQWhCO0FBQ0csT0FBQyxDQUFDRSxRQUFGLElBQ0M7QUFDRSxjQUFNL0MsS0FBS2dELGVBQUwsRUFEUjtBQUVFLGlCQUFTO0FBQUEsaUJBQU0sdUJBQU47QUFBQTtBQUZYLFFBRko7QUFRR0QsaUJBQ0M7QUFBQTtBQUFBLFVBQU0sUUFBU1QsWUFBWSxVQUFiLElBQTZCRCxVQUFVLFFBQXJEO0FBQ0Usc0NBQUMsS0FBRCxhQUFPLFFBQVFaLGVBQWYsRUFBZ0MsTUFBTXpCLElBQXRDLEVBQTRDLE1BQU1DLElBQWxELElBQTRERSxJQUE1RDtBQURGLE9BREQsR0FLQyw4QkFBQyxLQUFELGFBQU8sUUFBUXNCLGVBQWYsRUFBZ0MsTUFBTXpCLElBQXRDLEVBQTRDLE1BQU1DLElBQWxELElBQTRERSxJQUE1RDtBQWJKO0FBL0JGLEdBckJGO0FBQUEsQ0FEb0IsQ0FBdEI7QUF3RUFpQyxjQUFjYSxXQUFkLEdBQTRCLGVBQTVCO2tCQUNlYixhIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnb2x5bXAtdWkvZm9ybSc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoSGFuZGxlcnMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBTaWRlYmFyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgTWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IEFudE1lbnUgZnJvbSAnb2x5bXAtZmVsYS9tZW51L2FudCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyLCBQcm9tcHQgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgRmFQZW5jaWwsIEZhVHJhc2hPLCBGYVNhdmUsIEZhVGltZXMgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUG9wY29uZmlybSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IERlZmF1bHRFZGl0cyBmcm9tICcuL2RlZmF1bHQtZWRpdHMnO1xuaW1wb3J0IHsgZ2V0VmFsaWRhdGlvblJ1bGVzLCBnZXRJbml0aWFsVmFsdWUsIGdldEZvcm1TY2hlbWEgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgSXRlbXMgPSAoeyBzY2hlbWEsIGZvcm0sIGl0ZW0sIHZhbHVlLCAuLi5yZXN0IH0pID0+XG4gIE9iamVjdC5rZXlzKHNjaGVtYSkubWFwKGtleSA9PiB7XG4gICAgY29uc3QgZmllbGQgPSBzY2hlbWFba2V5XTtcbiAgICBjb25zdCB7IGZvcm06IENvbSwgZmllbGREZWNvcmF0b3IsIC4uLnJlc3RGaWVsZHMgfSA9IHNjaGVtYVtrZXldO1xuICAgIGlmICghQ29tKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gW107XG4gICAgaWYgKGdldChmaWVsZCwgJ3R5cGUua2luZCcpID09PSAnTk9OX05VTEwnKSB7XG4gICAgICBydWxlLnB1c2goJ3JlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkRGVjb3JhdG9yKCkoXG4gICAgICA8Q29tXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4ucmVzdEZpZWxkc31cbiAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICBydWxlPXtydWxlfVxuICAgICAgICBrZXk9e2ZpZWxkLm5hbWV9XG4gICAgICAvPixcbiAgICApO1xuICB9KTtcblxuY29uc3QgZ2V0RGVmYXVsdEVkaXQgPSB0eXBlID0+IHtcbiAgY29uc3QgZmluZCA9XG4gICAgT2JqZWN0LmtleXMoRGVmYXVsdEVkaXRzKS5maW5kKGtleSA9PiBEZWZhdWx0RWRpdHNba2V5XS5ydWxlKHR5cGUpKSB8fFxuICAgIE9iamVjdC5rZXlzKERlZmF1bHRFZGl0cykuZmluZChrZXkgPT4gRGVmYXVsdEVkaXRzW2tleV0uaXNEZWZhdWx0KTtcbiAgaWYgKGZpbmQpIHtcbiAgICByZXR1cm4gRGVmYXVsdEVkaXRzW2ZpbmRdO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFxuICAgIFsnY29sbGVjdGlvbicsICdxdWVyeSddLFxuICAgICh7IGNvbGxlY3Rpb24sIGZvcm0sIHF1ZXJ5LCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBnZXRGb3JtU2NoZW1hKGNvbGxlY3Rpb24uZmllbGRzKTtcbiAgICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IGZvcm07XG4gICAgICBjb25zdCBzY2hlbWFXaXRoRWRpdHMgPSB7fTtcbiAgICAgIHNjaGVtYS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY29uc3QgZWRpdCA9IGdldERlZmF1bHRFZGl0KGZpZWxkKSB8fCB7fTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBnZXQoZmllbGQsICdzcGVjaWFsRmllbGRzLmxhYmVsJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGl0bGUucmVwbGFjZSgnLUlkcycsICcnKS5yZXBsYWNlKCctSWQnLCAnJyk7XG4gICAgICAgIHNjaGVtYVdpdGhFZGl0c1tmaWVsZC5uYW1lXSA9IHtcbiAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAuLi5lZGl0LFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIGZpZWxkRGVjb3JhdG9yOiAoKSA9PlxuICAgICAgICAgICAgZ2V0RmllbGREZWNvcmF0b3IoZmllbGQubmFtZSwge1xuICAgICAgICAgICAgICBydWxlczogZ2V0VmFsaWRhdGlvblJ1bGVzKGZpZWxkKSxcbiAgICAgICAgICAgICAgLy8gdmFsdWVQcm9wTmFtZTogZmllbGQudHlwZS5uYW1lID09PSAnQm9vbGVhbicgPyAnY2hlY2tlZCcgOiAndmFsdWUnLFxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6IHF1ZXJ5W2ZpZWxkLm5hbWVdIHx8IGdldEluaXRpYWxWYWx1ZShwcm9wcywgZmllbGQpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNjaGVtYVdpdGhFZGl0cyxcbiAgICAgICAgc2NoZW1hLFxuICAgICAgfTtcbiAgICB9LFxuICApLFxuICB3aXRoU3RhdGUoJ2NvbGxhcHNlZCcsICdzZXRDb2xsYXBzZWQnLCB0cnVlKSxcbiAgd2l0aEhhbmRsZXJzKHtcbiAgICBleHBhbmQ6ICh7IHNldENvbGxhcHNlZCB9KSA9PiAoKSA9PiBzZXRDb2xsYXBzZWQoZmFsc2UpLFxuICAgIGNvbGxhcHNlOiAoeyBzZXRDb2xsYXBzZWQgfSkgPT4gKCkgPT4gc2V0Q29sbGFwc2VkKHRydWUpLFxuICB9KSxcbik7XG5cbmNvbnN0IEZvcm1Db21wb25lbnQgPSBlbmhhbmNlKFxuICAoe1xuICAgIHNjaGVtYSxcbiAgICBzY2hlbWFXaXRoRWRpdHMsXG4gICAgaW5saW5lLFxuICAgIHZlcnRpY2FsLFxuICAgIGl0ZW0sXG4gICAgY2xhc3NOYW1lLFxuICAgIHZhbGlkYXRlRmllbGRzLFxuICAgIGZvcm0sXG4gICAgY29sbGVjdGlvbixcbiAgICBzZXRUYWIsXG4gICAgdGFiLFxuICAgIGV4cGFuZCxcbiAgICBjb2xsYXBzZSxcbiAgICBvblNhdmUsXG4gICAgb25EZWxldGUsXG4gICAgb25DbG9zZSxcbiAgICBjb2xsYXBzZWQsXG4gICAgZW1iZWRkZWQsXG4gICAgLi4ucmVzdFxuICB9KSA9PiAoXG4gICAgPFNpZGViYXJcbiAgICAgIHJpZ2h0XG4gICAgICBjb2xsYXBzZWRcbiAgICAgIG1lbnU9e1xuICAgICAgICA8TWVudVxuICAgICAgICAgIGhlYWRlcj17PE1lbnUuSXRlbSBpY29uPXs8RmFQZW5jaWwgLz59IGxhcmdlIC8+fVxuICAgICAgICAgIGhlYWRlckNvbG9yXG4gICAgICAgICAgaGVhZGVySW52ZXJ0ZWRcbiAgICAgICAgPlxuICAgICAgICAgIDxBbnRNZW51LlRvb2x0aXAgb25DbGljaz17b25TYXZlfSBpY29uPXs8RmFTYXZlIC8+fT5cbiAgICAgICAgICAgIFNwZWljaGVyblxuICAgICAgICAgIDwvQW50TWVudS5Ub29sdGlwPlxuICAgICAgICAgIHshIW9uRGVsZXRlICYmIChcbiAgICAgICAgICAgIDxQb3Bjb25maXJtXG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIldpcmtsaWNoIGzDtnNjaGVuP1wiXG4gICAgICAgICAgICAgIG9uQ29uZmlybT17b25EZWxldGV9XG4gICAgICAgICAgICAgIG9rVGV4dD1cIkphXCJcbiAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5laW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QW50TWVudS5Ub29sdGlwIGljb249ezxGYVRyYXNoTyAvPn0+TMO2c2NoZW48L0FudE1lbnUuVG9vbHRpcD5cbiAgICAgICAgICAgIDwvUG9wY29uZmlybT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshIW9uQ2xvc2UgJiYgKFxuICAgICAgICAgICAgPEFudE1lbnUuVG9vbHRpcCBpY29uPXs8RmFUaW1lcyAvPn0gb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgIFNjaGxpZcOfZW5cbiAgICAgICAgICAgIDwvQW50TWVudS5Ub29sdGlwPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTWVudT5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICB7ISFlbWJlZGRlZCAmJiAoXG4gICAgICAgICAgPFByb21wdFxuICAgICAgICAgICAgd2hlbj17Zm9ybS5pc0ZpZWxkc1RvdWNoZWQoKX1cbiAgICAgICAgICAgIG1lc3NhZ2U9eygpID0+ICfDhG5kZXJ1bmdlbiB2ZXJ3ZXJmZW4/J31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtlbWJlZGRlZCA/IChcbiAgICAgICAgICA8Rm9ybSBsYXlvdXQ9eyh2ZXJ0aWNhbCAmJiAndmVydGljYWwnKSB8fCAoaW5saW5lICYmICdpbmxpbmUnKX0+XG4gICAgICAgICAgICA8SXRlbXMgc2NoZW1hPXtzY2hlbWFXaXRoRWRpdHN9IGZvcm09e2Zvcm19IGl0ZW09e2l0ZW19IHsuLi5yZXN0fSAvPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SXRlbXMgc2NoZW1hPXtzY2hlbWFXaXRoRWRpdHN9IGZvcm09e2Zvcm19IGl0ZW09e2l0ZW19IHsuLi5yZXN0fSAvPlxuICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TaWRlYmFyPlxuICApLFxuKTtcbkZvcm1Db21wb25lbnQuZGlzcGxheU5hbWUgPSAnRm9ybUNvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBGb3JtQ29tcG9uZW50O1xuIl19

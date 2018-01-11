'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/input/style');

require('antd/lib/form/style');

require('antd/lib/checkbox/style');

require('antd/lib/tag/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympUi = require('olymp-ui');

var _reactFela = require('react-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _utils = require('./utils');

var _gql = require('../gql');

var _lightboxImage = require('../lightbox-image');

var _lightboxImage2 = _interopRequireDefault(_lightboxImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckableTag = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      checked = _ref.checked,
      marked = _ref.marked;
  return {
    marginBottom: theme.space1,
    ellipsis: true,
    ':not(.ant-tag-checkable-checked)': {
      backgroundColor: !checked && marked ? theme.dark2 : theme.dark5,
      color: !checked && marked && theme.light
    }
  };
}, function (p) {
  return _react2.default.createElement(_tag2.default.CheckableTag, p);
}, function (_ref2) {
  var marked = _ref2.marked,
      p = _objectWithoutProperties(_ref2, ['marked']);

  return Object.keys(p);
});

var CheckboxMargin = (0, _reactFela.createComponent)(function () {
  return {
    marginY: 10
  };
}, function (p) {
  return _react2.default.createElement(_checkbox2.default, p);
}, function (p) {
  return Object.keys(p);
});

var TagContainer = (0, _gql.queryTags)((0, _reactFela.createComponent)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.space2,
    hasFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }
  };
}, function (_ref4) {
  var className = _ref4.className,
      _ref4$fileTags = _ref4.fileTags,
      fileTags = _ref4$fileTags === undefined ? [] : _ref4$fileTags,
      selectedTags = _ref4.selectedTags,
      form = _ref4.form;
  return _react2.default.createElement(
    'div',
    { className: className },
    [].concat(_toConsumableArray(fileTags)).sort().map(function (tag) {
      return _react2.default.createElement(
        CheckableTag,
        {
          key: tag,
          checked: (form.getFieldValue('tags') || []).indexOf(tag) !== -1,
          marked: selectedTags.filter(function (sTag) {
            return sTag === tag;
          }).length > 0,
          onChange: function onChange(checked) {
            return form.setFieldsValue({
              tags: checked ? [].concat(_toConsumableArray(form.getFieldValue('tags')), [tag]) : form.getFieldValue('tags').filter(function (x) {
                return x !== tag;
              })
            });
          }
        },
        tag
      );
    })
  );
}, ['fileTags', 'selectedTags', 'form']));

var _ref6 = _react2.default.createElement(_input2.default, { placeholder: 'Ordner' });

var _ref7 = _react2.default.createElement(_input2.default, { placeholder: 'Quelle' });

var _ref8 = _react2.default.createElement(_input2.default.TextArea, { rows: 3, placeholder: 'Bezeichnung' });

var _ref9 = _react2.default.createElement(_olympUi.TagsEditor, {
  searchPlaceholder: 'Suche ...',
  placeholder: 'Schlagworte'
});

var _ref10 = _react2.default.createElement(
  CheckboxMargin,
  null,
  'Im Papierkorb'
);

exports.default = function (_ref5) {
  var multi = _ref5.multi,
      item = _ref5.item,
      form = _ref5.form,
      groupedTags = _ref5.groupedTags,
      value = _ref5.value,
      selectedTags = _ref5.selectedTags;

  form.getFieldDecorator(item.id + '.id', { initialValue: item.id });
  return _react2.default.createElement(
    _form2.default,
    null,
    value.length === 1 && _react2.default.createElement(
      _form2.default.Item,
      _utils.FormForFullLayout,
      _react2.default.createElement(_lightboxImage2.default, { value: item, width: '100%', maxHeight: 200 })
    ),
    _react2.default.createElement(
      _menu2.default.List,
      { title: 'Bild' },
      _react2.default.createElement(
        _form2.default.Item,
        _extends({ label: 'Ordner' }, _utils.FormForFullLayout),
        form.getFieldDecorator(item.id + '.folder', {
          initialValue: item.folder
        })(_ref6)
      ),
      _react2.default.createElement(
        _form2.default.Item,
        _extends({ label: 'Quelle' }, _utils.FormForFullLayout),
        form.getFieldDecorator(item.id + '.source', {
          initialValue: item.source
        })(_ref7)
      ),
      _react2.default.createElement(
        _form2.default.Item,
        _extends({ key: 'caption', label: 'Bezeichnung' }, _utils.FormForFullLayout),
        form.getFieldDecorator(item.id + '.caption', {
          initialValue: item.caption
        })(_ref8)
      ),
      _react2.default.createElement(
        _form2.default.Item,
        _extends({ label: 'Schlagworte' }, _utils.FormForFullLayout),
        form.getFieldDecorator(item.id + '.tags', {
          initialValue: Object.keys(groupedTags).filter(function (key) {
            return groupedTags[key].length === value.length;
          })
        })(_ref9)
      ),
      form.getFieldDecorator(item.id + '.removed', {
        initialValue: item.removed,
        valuePropName: 'checked'
      })(_ref10)
    ),
    _react2.default.createElement(
      _menu2.default.List,
      { title: 'Tagcloud' },
      _react2.default.createElement(TagContainer, { selectedTags: selectedTags, form: form })
    ),
    !multi && (0, _info2.default)(item)
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2RldGFpbC9kZXRhaWwtYnJvd3Nlci5lczYiXSwibmFtZXMiOlsiQ2hlY2thYmxlVGFnIiwidGhlbWUiLCJjaGVja2VkIiwibWFya2VkIiwibWFyZ2luQm90dG9tIiwic3BhY2UxIiwiZWxsaXBzaXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXJrMiIsImRhcms1IiwiY29sb3IiLCJsaWdodCIsInAiLCJPYmplY3QiLCJrZXlzIiwiQ2hlY2tib3hNYXJnaW4iLCJtYXJnaW5ZIiwiVGFnQ29udGFpbmVyIiwicGFkZGluZyIsInNwYWNlMiIsImhhc0ZsZXgiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImNsYXNzTmFtZSIsImZpbGVUYWdzIiwic2VsZWN0ZWRUYWdzIiwiZm9ybSIsInNvcnQiLCJtYXAiLCJ0YWciLCJnZXRGaWVsZFZhbHVlIiwiaW5kZXhPZiIsImZpbHRlciIsInNUYWciLCJsZW5ndGgiLCJzZXRGaWVsZHNWYWx1ZSIsInRhZ3MiLCJ4IiwibXVsdGkiLCJpdGVtIiwiZ3JvdXBlZFRhZ3MiLCJ2YWx1ZSIsImdldEZpZWxkRGVjb3JhdG9yIiwiaWQiLCJpbml0aWFsVmFsdWUiLCJmb2xkZXIiLCJzb3VyY2UiLCJjYXB0aW9uIiwia2V5IiwicmVtb3ZlZCIsInZhbHVlUHJvcE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLGdDQUNuQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE9BQVYsUUFBVUEsT0FBVjtBQUFBLE1BQW1CQyxNQUFuQixRQUFtQkEsTUFBbkI7QUFBQSxTQUFpQztBQUMvQkMsa0JBQWNILE1BQU1JLE1BRFc7QUFFL0JDLGNBQVUsSUFGcUI7QUFHL0Isd0NBQW9DO0FBQ2xD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QkY7QUE4QkdSLFdBQUtnQixpQkFBTCxDQUEwQkgsS0FBS0ksRUFBL0IsZUFBNkM7QUFDNUNDLHNCQUFjTCxLQUFLVSxPQUR5QjtBQUU1Q0MsdUJBQWU7QUFGNkIsT0FBN0M7QUE5QkgsS0FQRjtBQTJDRTtBQUFBLHFCQUFNLElBQU47QUFBQSxRQUFXLE9BQU0sVUFBakI7QUFDRSxvQ0FBQyxZQUFELElBQWMsY0FBY3pCLFlBQTVCLEVBQTBDLE1BQU1DLElBQWhEO0FBREYsS0EzQ0Y7QUE4Q0csS0FBQ1ksS0FBRCxJQUFVLG9CQUFhQyxJQUFiO0FBOUNiLEdBREY7QUFrREQsQyIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9kZXRhaWwvZGV0YWlsLWJyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIEZvcm0sIElucHV0LCBUYWcgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFRhZ3NFZGl0b3IgfSBmcm9tICdvbHltcC11aSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgZ2V0SW1hZ2VJbmZvIGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgeyBGb3JtRm9yRnVsbExheW91dCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgcXVlcnlUYWdzIH0gZnJvbSAnLi4vZ3FsJztcbmltcG9ydCBMaWdodGJveEltYWdlIGZyb20gJy4uL2xpZ2h0Ym94LWltYWdlJztcblxuY29uc3QgQ2hlY2thYmxlVGFnID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgY2hlY2tlZCwgbWFya2VkIH0pID0+ICh7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjZTEsXG4gICAgZWxsaXBzaXM6IHRydWUsXG4gICAgJzpub3QoLmFudC10YWctY2hlY2thYmxlLWNoZWNrZWQpJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhY2hlY2tlZCAmJiBtYXJrZWQgPyB0aGVtZS5kYXJrMiA6IHRoZW1lLmRhcms1LFxuICAgICAgY29sb3I6ICFjaGVja2VkICYmIG1hcmtlZCAmJiB0aGVtZS5saWdodCxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8VGFnLkNoZWNrYWJsZVRhZyB7Li4ucH0gLz4sXG4gICh7IG1hcmtlZCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IENoZWNrYm94TWFyZ2luID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIG1hcmdpblk6IDEwLFxuICB9KSxcbiAgcCA9PiA8Q2hlY2tib3ggey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcblxuY29uc3QgVGFnQ29udGFpbmVyID0gcXVlcnlUYWdzKFxuICBjcmVhdGVDb21wb25lbnQoXG4gICAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNlMixcbiAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgICB9LFxuICAgIH0pLFxuICAgICh7IGNsYXNzTmFtZSwgZmlsZVRhZ3MgPSBbXSwgc2VsZWN0ZWRUYWdzLCBmb3JtIH0pID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7Wy4uLmZpbGVUYWdzXS5zb3J0KCkubWFwKHRhZyA9PiAoXG4gICAgICAgICAgPENoZWNrYWJsZVRhZ1xuICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICBjaGVja2VkPXsoZm9ybS5nZXRGaWVsZFZhbHVlKCd0YWdzJykgfHwgW10pLmluZGV4T2YodGFnKSAhPT0gLTF9XG4gICAgICAgICAgICBtYXJrZWQ9e3NlbGVjdGVkVGFncy5maWx0ZXIoc1RhZyA9PiBzVGFnID09PSB0YWcpLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tlZCA9PlxuICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcbiAgICAgICAgICAgICAgICB0YWdzOiBjaGVja2VkXG4gICAgICAgICAgICAgICAgICA/IFsuLi5mb3JtLmdldEZpZWxkVmFsdWUoJ3RhZ3MnKSwgdGFnXVxuICAgICAgICAgICAgICAgICAgOiBmb3JtLmdldEZpZWxkVmFsdWUoJ3RhZ3MnKS5maWx0ZXIoeCA9PiB4ICE9PSB0YWcpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgPC9DaGVja2FibGVUYWc+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgICBbJ2ZpbGVUYWdzJywgJ3NlbGVjdGVkVGFncycsICdmb3JtJ10sXG4gICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBtdWx0aSwgaXRlbSwgZm9ybSwgZ3JvdXBlZFRhZ3MsIHZhbHVlLCBzZWxlY3RlZFRhZ3MgfSkgPT4ge1xuICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGAke2l0ZW0uaWR9LmlkYCwgeyBpbml0aWFsVmFsdWU6IGl0ZW0uaWQgfSk7XG4gIHJldHVybiAoXG4gICAgPEZvcm0+XG4gICAgICB7dmFsdWUubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgPEZvcm0uSXRlbSB7Li4uRm9ybUZvckZ1bGxMYXlvdXR9PlxuICAgICAgICAgIDxMaWdodGJveEltYWdlIHZhbHVlPXtpdGVtfSB3aWR0aD1cIjEwMCVcIiBtYXhIZWlnaHQ9ezIwMH0gLz5cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICApfVxuXG4gICAgICA8TWVudS5MaXN0IHRpdGxlPVwiQmlsZFwiPlxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiT3JkbmVyXCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgICAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS5mb2xkZXJgLCB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWU6IGl0ZW0uZm9sZGVyLFxuICAgICAgICAgIH0pKDxJbnB1dCBwbGFjZWhvbGRlcj1cIk9yZG5lclwiIC8+KX1cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIHtcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiUXVlbGxlXCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgICAgICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGAke2l0ZW0uaWR9LnNvdXJjZWAsIHtcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBpdGVtLnNvdXJjZSxcbiAgICAgICAgICAgIH0pKDxJbnB1dCBwbGFjZWhvbGRlcj1cIlF1ZWxsZVwiIC8+KX1cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgfVxuICAgICAgICA8Rm9ybS5JdGVtIGtleT1cImNhcHRpb25cIiBsYWJlbD1cIkJlemVpY2hudW5nXCIgey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgICAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS5jYXB0aW9uYCwge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBpdGVtLmNhcHRpb24sXG4gICAgICAgICAgfSkoPElucHV0LlRleHRBcmVhIHJvd3M9ezN9IHBsYWNlaG9sZGVyPVwiQmV6ZWljaG51bmdcIiAvPil9XG4gICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU2NobGFnd29ydGVcIiB7Li4uRm9ybUZvckZ1bGxMYXlvdXR9PlxuICAgICAgICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGAke2l0ZW0uaWR9LnRhZ3NgLCB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWU6IE9iamVjdC5rZXlzKGdyb3VwZWRUYWdzKS5maWx0ZXIoXG4gICAgICAgICAgICAgIGtleSA9PiBncm91cGVkVGFnc1trZXldLmxlbmd0aCA9PT0gdmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9KShcbiAgICAgICAgICAgIDxUYWdzRWRpdG9yXG4gICAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyPVwiU3VjaGUgLi4uXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTY2hsYWd3b3J0ZVwiXG4gICAgICAgICAgICAvPixcbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoYCR7aXRlbS5pZH0ucmVtb3ZlZGAsIHtcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IGl0ZW0ucmVtb3ZlZCxcbiAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAnY2hlY2tlZCcsXG4gICAgICAgIH0pKDxDaGVja2JveE1hcmdpbj5JbSBQYXBpZXJrb3JiPC9DaGVja2JveE1hcmdpbj4pfVxuICAgICAgPC9NZW51Lkxpc3Q+XG5cbiAgICAgIDxNZW51Lkxpc3QgdGl0bGU9XCJUYWdjbG91ZFwiPlxuICAgICAgICA8VGFnQ29udGFpbmVyIHNlbGVjdGVkVGFncz17c2VsZWN0ZWRUYWdzfSBmb3JtPXtmb3JtfSAvPlxuICAgICAgPC9NZW51Lkxpc3Q+XG4gICAgICB7IW11bHRpICYmIGdldEltYWdlSW5mbyhpdGVtKX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuIl19

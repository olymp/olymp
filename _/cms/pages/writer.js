'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympRouter = require('olymp-router');

var _faSave = require('olymp-icons/lib/fa-save');

var _faSave2 = _interopRequireDefault(_faSave);

var _faPencil = require('olymp-icons/lib/fa-pencil');

var _faPencil2 = _interopRequireDefault(_faPencil);

var _recompose = require('recompose');

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _ant = require('olymp-fela/menu/ant');

var _ant2 = _interopRequireDefault(_ant);

var _slateWriter = require('olymp-slate/slate-writer');

var _slateWriter2 = _interopRequireDefault(_slateWriter);

var _form3 = require('./form');

var _form4 = _interopRequireDefault(_form3);

var _query = require('./gql/query');

var _mutation = require('./gql/mutation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// const setSignal = (props, v) => !v.blocks && props.setSignal(props.signal + 1);

var enhance = (0, _recompose.compose)(_query.queryPage, _olympFela.withLoader,
// withState('signal', 'setSignal', 0),
_form2.default.create({
  /* onValuesChange: debounce(setSignal, 800, {
    trailing: true,
    leading: false,
  }), */
}), _mutation.mutatePage, _olympRouter.withQueryActions, (0, _recompose.withPropsOnChange)(['item'], function (_ref) {
  var form = _ref.form,
      _ref$item = _ref.item,
      item = _ref$item === undefined ? {} : _ref$item,
      rest = _objectWithoutProperties(_ref, ['form', 'item']);

  form.getFieldDecorator('parentId', {
    initialValue: (0, _get3.default)(rest, 'query.["@parent"]') || item.parentId
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

var _ref4 = _react2.default.createElement(_faSave2.default, null);

var _ref5 = _react2.default.createElement(_menu2.default.Divider, { key: 2 });

var _ref6 = _react2.default.createElement(_faPencil2.default, null);

var _ref7 = _react2.default.createElement(_menu2.default.Item, { large: true, icon: _react2.default.createElement(_faPencil2.default, null) });

var _ref8 = _react2.default.createElement(_faSave2.default, null);

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


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_olympRouter.Prompt, {
          when: form.isFieldsTouched(),
          message: function message() {
            return 'Änderungen verwerfen?';
          }
        }),
        _react2.default.createElement(_slateWriter2.default, {
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
          menu: [_react2.default.createElement(
            _menu2.default.Item,
            { key: 1, onClick: save, icon: _ref4 },
            'Speichern'
          ), _ref5, _react2.default.createElement(
            _menu2.default.Item,
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
        _react2.default.createElement(
          _olympFela.Drawer,
          {
            width: 475,
            right: true,
            open: formOpen,
            onClose: function onClose() {
              return setFormOpen(false);
            }
          },
          _react2.default.createElement(
            _menu2.default,
            {
              header: _react2.default.createElement(
                _menu2.default.Item,
                { large: true },
                description
              ),
              headerColor: true,
              headerInverted: true
            },
            _react2.default.createElement(_form4.default, _extends({ items: pageList }, this.props))
          ),
          _react2.default.createElement(
            _menu2.default,
            {
              color: true,
              inverted: true,
              collapsed: true,
              header: _ref7,
              headerColor: 'dark4',
              headerInverted: true
            },
            _react2.default.createElement(
              _ant2.default.Tooltip,
              { onClick: save, icon: _ref8 },
              'Speichern'
            )
          )
        )
      );
    }
  }]);

  return EditablePage;
}(_react.Component)) || _class;

exports.default = EditablePage;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy93cml0ZXIuZXM2Il0sIm5hbWVzIjpbImVuaGFuY2UiLCJjcmVhdGUiLCJmb3JtIiwiaXRlbSIsInJlc3QiLCJnZXRGaWVsZERlY29yYXRvciIsImluaXRpYWxWYWx1ZSIsInBhcmVudElkIiwidHlwZSIsImJsb2NrcyIsImlkIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsIm5hbWUiLCJFZGl0YWJsZVBhZ2UiLCJvbkRyYWdFbmQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImRyYWdnYWJsZUlkIiwicHJvcHMiLCJmbGF0TmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJyZW9yZGVyIiwiZmluZCIsIngiLCJtb3ZlIiwiYXJyYXkiLCJvbGQiLCJpbmRleCIsImxlbmd0aCIsImsiLCJwdXNoIiwidW5kZWZpbmVkIiwic3BsaWNlIiwiaWRzIiwiZmlsdGVyIiwibWFwIiwidmFyaWFibGVzIiwiYmluZGluZ0lkIiwiYmluZGluZ09iaiIsInNpZ25hbCIsInNhdmUiLCJzZXRGb3JtT3BlbiIsImZvcm1PcGVuIiwicGFnZUxpc3QiLCJpc0ZpZWxkc1RvdWNoZWQiLCJnZXRGaWVsZFZhbHVlIiwic2V0RmllbGRzVmFsdWUiLCJnZXRGaWVsZHNWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsVUFBVTtBQUdkO0FBQ0EsZUFBS0MsTUFBTCxDQUFZO0FBQ1Y7Ozs7QUFEVSxDQUFaLENBSmMsdURBWWQsa0NBQWtCLENBQUMsTUFBRCxDQUFsQixFQUE0QixnQkFBa0M7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCO0FBQUEsdUJBQXpCQyxJQUF5QjtBQUFBLE1BQXpCQSxJQUF5Qiw2QkFBbEIsRUFBa0I7QUFBQSxNQUFYQyxJQUFXOztB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QUFBQSxXQUxJO0FBWFIsVUFMRjtBQThCRTtBQUFBO0FBQUE7QUFDRSxtQkFBTyxHQURUO0FBRUUsdUJBRkY7QUFHRSxrQkFBTUEsUUFIUjtBQUlFLHFCQUFTO0FBQUEscUJBQU1ELFlBQVksS0FBWixDQUFOO0FBQUE7QUFKWDtBQU1FO0FBQUE7QUFBQTtBQUNFLHNCQUFRO0FBQUEsK0JBQU0sSUFBTjtBQUFBLGtCQUFXLFdBQVg7QUFBa0IvQjtBQUFsQixlQURWO0FBRUUsK0JBRkY7QUFHRTtBQUhGO0FBS0UscUVBQVUsT0FBT2lDLFFBQWpCLElBQStCLEtBQUt6QixLQUFwQztBQUxGLFdBTkY7QUFhRTtBQUFBO0FBQUE7QUFDRSx5QkFERjtBQUVFLDRCQUZGO0FBR0UsNkJBSEY7QUFJRSwyQkFKRjtBQUtFLDJCQUFZLE9BTGQ7QUFNRTtBQU5GO0FBUUU7QUFBQSw0QkFBUyxPQUFUO0FBQUEsZ0JBQWlCLFNBQVNzQixJQUExQixFQUFnQyxXQUFoQztBQUFBO0FBQUE7QUFSRjtBQWJGO0FBOUJGLE9BREY7QUEyREQ7Ozs7OztrQkEvR2tCM0IsWSIsImZpbGUiOiJjbXMvcGFnZXMvd3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9tcHQsIHdpdGhRdWVyeUFjdGlvbnMgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgRmFTYXZlLCBGYVBlbmNpbCB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCB7IHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUsIGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aExvYWRlciwgRHJhd2VyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgTWVudSBmcm9tICdvbHltcC1mZWxhL21lbnUnO1xuaW1wb3J0IEFudE1lbnUgZnJvbSAnb2x5bXAtZmVsYS9tZW51L2FudCc7XG5pbXBvcnQgU2xhdGVXcml0ZXIgZnJvbSAnb2x5bXAtc2xhdGUvc2xhdGUtd3JpdGVyJztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUGFnZUZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7IHF1ZXJ5UGFnZSB9IGZyb20gJy4vZ3FsL3F1ZXJ5JztcbmltcG9ydCB7IG11dGF0ZVBhZ2UgfSBmcm9tICcuL2dxbC9tdXRhdGlvbic7XG5cbi8vIGNvbnN0IHNldFNpZ25hbCA9IChwcm9wcywgdikgPT4gIXYuYmxvY2tzICYmIHByb3BzLnNldFNpZ25hbChwcm9wcy5zaWduYWwgKyAxKTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHF1ZXJ5UGFnZSxcbiAgd2l0aExvYWRlcixcbiAgLy8gd2l0aFN0YXRlKCdzaWduYWwnLCAnc2V0U2lnbmFsJywgMCksXG4gIEZvcm0uY3JlYXRlKHtcbiAgICAvKiBvblZhbHVlc0NoYW5nZTogZGVib3VuY2Uoc2V0U2lnbmFsLCA4MDAsIHtcbiAgICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgICAgbGVhZGluZzogZmFsc2UsXG4gICAgfSksICovXG4gIH0pLFxuICBtdXRhdGVQYWdlLFxuICB3aXRoUXVlcnlBY3Rpb25zLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2l0ZW0nXSwgKHsgZm9ybSwgaXRlbSA9IHt9LCAuLi5yZXN0IH0pID0+IHtcbiAgICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCdwYXJlbnRJZCcsIHtcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0KHJlc3QsICdxdWVyeS5bXCJAcGFyZW50XCJdJykgfHwgaXRlbS5wYXJlbnRJZCxcbiAgICB9KTtcbiAgICBmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCd0eXBlJywgeyBpbml0aWFsVmFsdWU6IGl0ZW0udHlwZSB8fCAnUEFHRScgfSk7XG4gICAgZm9ybS5nZXRGaWVsZERlY29yYXRvcignYmxvY2tzJywgeyBpbml0aWFsVmFsdWU6IGl0ZW0uYmxvY2tzIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpdGVtLmlkIHx8IG51bGwsXG4gICAgICBpdGVtLFxuICAgICAgZGVzY3JpcHRpb246ICFpdGVtLmlkID8gJ05ldWUgU2VpdGUgZXJzdGVsbGVuJyA6ICdTZWl0ZSBiZWFyYmVpdGVuJyxcbiAgICAgIHRpdGxlOiAhaXRlbS5pZCA/ICdOZXVlIFNlaXRlJyA6IGl0ZW0ubmFtZSxcbiAgICAgIGJsb2NrczogaXRlbS5ibG9ja3MsXG4gICAgfTtcbiAgfSksXG4pO1xuXG5AZW5oYW5jZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgb25EcmFnRW5kID0gKHsgc291cmNlLCBkZXN0aW5hdGlvbiwgZHJhZ2dhYmxlSWQgfSkgPT4ge1xuICAgIC8vIGRyb3BwZWQgb3V0c2lkZSB0aGUgbGlzdFxuICAgIGNvbnN0IHsgZmxhdE5hdmlnYXRpb24sIG5hdmlnYXRpb24sIHJlb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXRlbSA9IGZsYXROYXZpZ2F0aW9uLmZpbmQoeCA9PiB4LmlkID09PSBkcmFnZ2FibGVJZCk7XG4gICAgY29uc3QgbW92ZSA9IChhcnJheSwgb2xkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID49IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICBsZXQgayA9IGluZGV4IC0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoay0tICsgMSkge1xuICAgICAgICAgIGFycmF5LnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAwLCBhcnJheS5zcGxpY2Uob2xkLCAxKVswXSk7XG4gICAgICByZXR1cm4gYXJyYXk7IC8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gICAgfTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0ucGFyZW50SWQpIHtcbiAgICAgICAgY29uc3QgaWRzID0gZmxhdE5hdmlnYXRpb25cbiAgICAgICAgICAuZmlsdGVyKHggPT4geC5wYXJlbnRJZCA9PT0gaXRlbS5wYXJlbnRJZClcbiAgICAgICAgICAubWFwKHggPT4geC5pZCk7XG4gICAgICAgIHJlb3JkZXIoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgaWRzOiBtb3ZlKGlkcywgc291cmNlLmluZGV4LCBkZXN0aW5hdGlvbi5pbmRleCksXG4gICAgICAgICAgICBwYXJlbnRJZDogaXRlbS5wYXJlbnRJZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGlkcyA9IG5hdmlnYXRpb24ubWFwKHggPT4geC5pZCk7XG4gICAgICAgIHJlb3JkZXIoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgaWRzOiBtb3ZlKGlkcywgc291cmNlLmluZGV4LCBkZXN0aW5hdGlvbi5pbmRleCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtLFxuICAgICAgYmluZGluZ0lkLFxuICAgICAgYmluZGluZ09iaixcbiAgICAgIGl0ZW0sXG4gICAgICBzaWduYWwsXG4gICAgICBzYXZlLFxuICAgICAgc2V0Rm9ybU9wZW4sXG4gICAgICBmb3JtT3BlbixcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgcGFnZUxpc3QsXG4gICAgICBpZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxQcm9tcHRcbiAgICAgICAgICB3aGVuPXtmb3JtLmlzRmllbGRzVG91Y2hlZCgpfVxuICAgICAgICAgIG1lc3NhZ2U9eygpID0+ICfDhG5kZXJ1bmdlbiB2ZXJ3ZXJmZW4/J31cbiAgICAgICAgLz5cbiAgICAgICAgPFNsYXRlV3JpdGVyXG4gICAgICAgICAgdmFsdWU9e2Zvcm0uZ2V0RmllbGRWYWx1ZSgnYmxvY2tzJyl9XG4gICAgICAgICAgb25DaGFuZ2U9e2Jsb2NrcyA9PiB7XG4gICAgICAgICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgYmxvY2tzIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgICBiaW5kaW5nPXtmb3JtLmlzRmllbGRzVG91Y2hlZCgpID8gZm9ybS5nZXRGaWVsZHNWYWx1ZSgpIDogaXRlbX1cbiAgICAgICAgICBiaW5kaW5nSWQ9e2JpbmRpbmdJZH1cbiAgICAgICAgICBiaW5kaW5nT2JqPXtiaW5kaW5nT2JqfVxuICAgICAgICAgIHNpZ25hbD17c2lnbmFsfVxuICAgICAgICAgIG1lbnU9e1tcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXsxfSBvbkNsaWNrPXtzYXZlfSBpY29uPXs8RmFTYXZlIC8+fT5cbiAgICAgICAgICAgICAgU3BlaWNoZXJuXG4gICAgICAgICAgICA8L01lbnUuSXRlbT4sXG4gICAgICAgICAgICA8TWVudS5EaXZpZGVyIGtleT17Mn0gLz4sXG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGtleT17M31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Rm9ybU9wZW4oIWZvcm1PcGVuKX1cbiAgICAgICAgICAgICAgaWNvbj17PEZhUGVuY2lsIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGb3JtdWxhclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICB3aWR0aD17NDc1fVxuICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgb3Blbj17Zm9ybU9wZW59XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Rm9ybU9wZW4oZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGhlYWRlcj17PE1lbnUuSXRlbSBsYXJnZT57ZGVzY3JpcHRpb259PC9NZW51Lkl0ZW0+fVxuICAgICAgICAgICAgaGVhZGVyQ29sb3JcbiAgICAgICAgICAgIGhlYWRlckludmVydGVkXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhZ2VGb3JtIGl0ZW1zPXtwYWdlTGlzdH0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgICAgIGNvbGxhcHNlZFxuICAgICAgICAgICAgaGVhZGVyPXs8TWVudS5JdGVtIGxhcmdlIGljb249ezxGYVBlbmNpbCAvPn0gLz59XG4gICAgICAgICAgICBoZWFkZXJDb2xvcj1cImRhcms0XCJcbiAgICAgICAgICAgIGhlYWRlckludmVydGVkXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFudE1lbnUuVG9vbHRpcCBvbkNsaWNrPXtzYXZlfSBpY29uPXs8RmFTYXZlIC8+fT5cbiAgICAgICAgICAgICAgU3BlaWNoZXJuXG4gICAgICAgICAgICA8L0FudE1lbnUuVG9vbHRpcD5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0=

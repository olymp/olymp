'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _views = require('./views');

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _recompose.compose)((0, _recompose.withState)('isOpen', 'setOpen', false), (0, _recompose.withPropsOnChange)(['value'], function (_ref) {
  var value = _ref.value;
  return {
    value: (Array.isArray(value) ? value : [value]).filter(function (x) {
      return !(0, _isEmpty3.default)(x);
    })
  };
}));

exports.default = function (renderFn) {
  return enhance(function (props) {
    var _onChange = props.onChange,
        value = props.value,
        isOpen = props.isOpen,
        setOpen = props.setOpen,
        multi = props.multi;


    console.log(multi, value, isOpen);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { onClick: function onClick() {
            return setOpen(true);
          } },
        renderFn(value, props)
      ),
      _react2.default.createElement(
        _olympFela.Modal,
        {
          portal: true,
          open: isOpen,
          onClose: function onClose() {
            return setOpen(false);
          },
          width: '90%',
          height: '90%'
        },
        _react2.default.createElement(_views2.default, {
          inModal: true,
          multi: multi,
          onChange: function onChange() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            _onChange(multi ? value : value[0]);
            setOpen(false);
          },
          onClose: function onClose() {
            return setOpen(false);
          },
          value: value
        })
      )
    );
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2VkaXQuZXM2Il0sIm5hbWVzIjpbImVuaGFuY2UiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsIngiLCJvbkNoYW5nZSIsInByb3BzIiwiaXNPcGVuIiwic2V0T3BlbiIsIm11bHRpIiwiY29uc29sZSIsImxvZyIsInJlbmRlckZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSx3QkFDZCwwQkFBVSxRQUFWLEVBQW9CLFNBQXBCLEVBQStCLEtBQS9CLENBRGMsRUFFZCxrQ0FBa0IsQ0FBQyxPQUFELENBQWxCLEVBQTZCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDM0NBLFdBQU8sQ0FBQ0MsTUFBTUMsT0FBTixDQUFjRixLQUFkLElBQXVCQSxLQUF2QixHQUErQixDQUFDQSxLQUFELENBQWhDLEVBQXlDRyxNQUF6QyxDQUFnRDtBQUFBLGFBQUssQ0FBQyx1QkFBUUMsQ0FBUixDQUFOO0FBQUEsS0FBaEQ7QUFEb0MsR0FBaEI7QUFBQSxDQUE3QixDQUZjLENBQWhCOztrQkFNZTtBQUFBLFNBQ2JMLFFBQVEsaUJBQVM7QUFBQSxRQUNQTSxTQURPLEdBQ3FDQyxLQURyQyxDQUNQRCxRQURPO0FBQUEsUUFDR0wsS0FESCxHQUNxQ00sS0FEckMsQ0FDR04sS0FESDtBQUFBLFFBQ1VPLE1BRFYsR0FDcUNELEtBRHJDLENBQ1VDLE1BRFY7QUFBQSxRQUNrQkMsT0FEbEIsR0FDcUNGLEtBRHJDLENBQ2tCRSxPQURsQjtBQUFBLFFBQzJCQyxLQUQzQixHQUNxQ0gsS0FEckMsQ0FDMkJHLEtBRDNCOzs7QUFHZkMsWUFBUUMsR0FBUixDQUFZRixLQUFaLEVBQW1CVCxLQUFuQixFQUEwQk8sTUFBMUI7QUFDQSxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFNBQVM7QUFBQSxtQkFBTUMsUUFBUSxJQUFSLENBQU47QUFBQSxXQUFkO0FBQW9DSSxpQkFBU1osS0FBVCxFQUFnQk0sS0FBaEI7QUFBcEMsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLHNCQURGO0FBRUUsZ0JBQU1DLE1BRlI7QUFHRSxtQkFBUztBQUFBLG1CQUFNQyxRQUFRLEtBQVIsQ0FBTjtBQUFBLFdBSFg7QUFJRSxpQkFBTSxLQUpSO0FBS0Usa0JBQU87QUFMVDtBQU9FO0FBQ0UsdUJBREY7QUFFRSxpQkFBT0MsS0FGVDtBQUdFLG9CQUFVLG9CQUFnQjtBQUFBLGdCQUFmVCxLQUFlLHVFQUFQLEVBQU87O0FBQ3hCSyxzQkFBU0ksUUFBUVQsS0FBUixHQUFnQkEsTUFBTSxDQUFOLENBQXpCO0FBQ0FRLG9CQUFRLEtBQVI7QUFDRCxXQU5IO0FBT0UsbUJBQVM7QUFBQSxtQkFBTUEsUUFBUSxLQUFSLENBQU47QUFBQSxXQVBYO0FBUUUsaUJBQU9SO0FBUlQ7QUFQRjtBQUZGLEtBREY7QUF1QkQsR0EzQkQsQ0FEYTtBQUFBLEMiLCJmaWxlIjoiY21zL2Nsb3VkaW5hcnkvZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgd2l0aFN0YXRlLCB3aXRoUHJvcHNPbkNoYW5nZSwgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBNZWRpYXRoZWsgZnJvbSAnLi92aWV3cyc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoU3RhdGUoJ2lzT3BlbicsICdzZXRPcGVuJywgZmFsc2UpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ3ZhbHVlJ10sICh7IHZhbHVlIH0pID0+ICh7XG4gICAgdmFsdWU6IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSkuZmlsdGVyKHggPT4gIWlzRW1wdHkoeCkpLFxuICB9KSksXG4pO1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRm4gPT5cbiAgZW5oYW5jZShwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdmFsdWUsIGlzT3Blbiwgc2V0T3BlbiwgbXVsdGkgfSA9IHByb3BzO1xuXG4gICAgY29uc29sZS5sb2cobXVsdGksIHZhbHVlLCBpc09wZW4pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PntyZW5kZXJGbih2YWx1ZSwgcHJvcHMpfTwvZGl2PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBwb3J0YWxcbiAgICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgd2lkdGg9XCI5MCVcIlxuICAgICAgICAgIGhlaWdodD1cIjkwJVwiXG4gICAgICAgID5cbiAgICAgICAgICA8TWVkaWF0aGVrXG4gICAgICAgICAgICBpbk1vZGFsXG4gICAgICAgICAgICBtdWx0aT17bXVsdGl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlID0gW10pID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UobXVsdGkgPyB2YWx1ZSA6IHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xuIl19

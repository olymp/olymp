'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/checkbox/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympCloudinary = require('olymp-cloudinary');

var _olympFela = require('olymp-fela');

var _recompose = require('recompose');

var _slate = require('slate');

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _recompose.compose)((0, _recompose.withState)('isOpen', 'setIsOpen', false));
var Slate = enhance(function (_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      setIsOpen = _ref.setIsOpen;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _button2.default,
      {
        onClick: function onClick(e) {
          e.stopPropagation();
          setIsOpen(true);
        }
      },
      'Show'
    ),
    _react2.default.createElement(
      _olympFela.Modal,
      { open: isOpen, onClose: function onClose() {
          return setIsOpen(false);
        } },
      children
    )
  );
});

var _ref2 = _react2.default.createElement(
  'i',
  null,
  'Kein Inhalt'
);

exports.default = function (value, field) {
  if (!field) {
    return null;
  }

  if (field.innerType.kind === 'SCALAR' && field.innerType.name !== 'Blocks' || field.innerType.kind === 'ENUM') {
    switch (field.innerType.name) {
      case 'Date':
        return !!value && _react2.default.createElement(
          'span',
          null,
          (0, _format2.default)(new Date(value), 'DD.MM.YYYY')
        );

      case 'DateTime':
        return !!value && _react2.default.createElement(
          'span',
          null,
          (0, _format2.default)(new Date(value), 'DD.MM.YYYY, HH:mm') + ' Uhr'
        );

      case 'Boolean':
        return _react2.default.createElement(
          _checkbox2.default,
          { checked: value, disabled: true },
          value ? 'Ja' : 'Nein'
        );

      case 'Color':
        return _react2.default.createElement(
          'span',
          { style: { color: value } },
          value
        );

      case 'String':
        return field.type.kind === 'LIST' ? _react2.default.createElement(
          'span',
          null,
          (value || []).join(', ')
        ) : _react2.default.createElement(
          'span',
          null,
          field.innerType.specialFields[value] || value
        );

      default:
        return _react2.default.createElement(
          'span',
          null,
          field.innerType.specialFields[value] || value
        );
    }
  } else if (field.innerType.kind === 'LIST') {
    if (value && value.length && value.map(function (x) {
      return x.name;
    }).join('').length > 0) {
      return value.map(function (x) {
        return x.name;
      }).join(', ');
    }
    if (value && value.length) {
      return value.length + ' ' + (value.length > 1 ? 'Elemente' : 'Element');
    }
    return null;
  } else {
    switch (field.innerType.name) {
      case 'Image':
        return !!value && _react2.default.createElement(_olympCloudinary.Image, { value: value, width: 50, height: 50 });

      case 'Blocks':
        var text = !!value && _slatePlainSerializer2.default.serialize(_slate.Value.fromJSON({
          document: value,
          kind: 'value'
        }));
        return value && text ? _react2.default.createElement(
          Slate,
          null,
          text
        ) : _ref2;

      default:
        return !!value && _react2.default.createElement(
          'span',
          null,
          value.name || 'Ja'
        );
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3V0aWxzL2dldC1wcmludGFibGUtdmFsdWUuZXM2Il0sIm5hbWVzIjpbImVuaGFuY2UiLCJTbGF0ZSIsImNoaWxkcmVuIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInZhbHVlIiwiZmllbGQiLCJpbm5lclR5cGUiLCJraW5kIiwibmFtZSIsIkRhdGUiLCJjb2xvciIsInR5cGUiLCJqb2luIiwic3BlY2lhbEZpZWxkcyIsImxlbmd0aCIsIm1hcCIsIngiLCJ0ZXh0Iiwic2VyaWFsaXplIiwiZnJvbUpTT04iLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLHdCQUFRLDBCQUFVLFFBQVYsRUFBb0IsV0FBcEIsRUFBaUMsS0FBakMsQ0FBUixDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVE7QUFBQSxNQUFHRSxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxNQUFiLFFBQWFBLE1BQWI7QUFBQSxNQUFxQkMsU0FBckIsUUFBcUJBLFNBQXJCO0FBQUEsU0FDcEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQVMsb0JBQUs7QUFDWkMsWUFBRUMsZUFBRjtBQUNBRixvQkFBVSxJQUFWO0FBQ0Q7QUFKSDtBQUFBO0FBQUEsS0FERjtBQVNFO0FBQUE7QUFBQSxRQUFPLE1BQU1ELE1BQWIsRUFBcUIsU0FBUztBQUFBLGlCQUFNQyxVQUFVLEtBQVYsQ0FBTjtBQUFBLFNBQTlCO0FBQ0dGO0FBREg7QUFURixHQURvQjtBQUFBLENBQVIsQ0FBZDs7WUE4RXVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsQzs7a0JBOUR4QyxVQUFDSyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDL0IsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVixXQUFPLElBQVA7QUFDRDs7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bGxlY3Rpb24vdXRpbHMvZ2V0LXByaW50YWJsZS12YWx1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ29seW1wLWNsb3VkaW5hcnknO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IENoZWNrYm94LCBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBWYWx1ZSB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCBQbGFpbiBmcm9tICdzbGF0ZS1wbGFpbi1zZXJpYWxpemVyJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2Uod2l0aFN0YXRlKCdpc09wZW4nLCAnc2V0SXNPcGVuJywgZmFsc2UpKTtcbmNvbnN0IFNsYXRlID0gZW5oYW5jZSgoeyBjaGlsZHJlbiwgaXNPcGVuLCBzZXRJc09wZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxCdXR0b25cbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIFNob3dcbiAgICA8L0J1dHRvbj5cbiAgICA8TW9kYWwgb3Blbj17aXNPcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01vZGFsPlxuICA8L2Rpdj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCAodmFsdWUsIGZpZWxkKSA9PiB7XG4gIGlmICghZmllbGQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChcbiAgICAoZmllbGQuaW5uZXJUeXBlLmtpbmQgPT09ICdTQ0FMQVInICYmIGZpZWxkLmlubmVyVHlwZS5uYW1lICE9PSAnQmxvY2tzJykgfHxcbiAgICBmaWVsZC5pbm5lclR5cGUua2luZCA9PT0gJ0VOVU0nXG4gICkge1xuICAgIHN3aXRjaCAoZmllbGQuaW5uZXJUeXBlLm5hbWUpIHtcbiAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICByZXR1cm4gISF2YWx1ZSAmJiA8c3Bhbj57Zm9ybWF0KG5ldyBEYXRlKHZhbHVlKSwgJ0RELk1NLllZWVknKX08L3NwYW4+O1xuXG4gICAgICBjYXNlICdEYXRlVGltZSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgISF2YWx1ZSAmJiAoXG4gICAgICAgICAgICA8c3Bhbj57YCR7Zm9ybWF0KG5ldyBEYXRlKHZhbHVlKSwgJ0RELk1NLllZWVksIEhIOm1tJyl9IFVocmB9PC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3ZhbHVlfSBkaXNhYmxlZD5cbiAgICAgICAgICAgIHt2YWx1ZSA/ICdKYScgOiAnTmVpbid9XG4gICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnQ29sb3InOlxuICAgICAgICByZXR1cm4gPHNwYW4gc3R5bGU9e3sgY29sb3I6IHZhbHVlIH19Pnt2YWx1ZX08L3NwYW4+O1xuXG4gICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICByZXR1cm4gZmllbGQudHlwZS5raW5kID09PSAnTElTVCcgPyAoXG4gICAgICAgICAgPHNwYW4+eyh2YWx1ZSB8fCBbXSkuam9pbignLCAnKX08L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4+e2ZpZWxkLmlubmVyVHlwZS5zcGVjaWFsRmllbGRzW3ZhbHVlXSB8fCB2YWx1ZX08L3NwYW4+XG4gICAgICAgICk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8c3Bhbj57ZmllbGQuaW5uZXJUeXBlLnNwZWNpYWxGaWVsZHNbdmFsdWVdIHx8IHZhbHVlfTwvc3Bhbj47XG4gICAgfVxuICB9IGVsc2UgaWYgKGZpZWxkLmlubmVyVHlwZS5raW5kID09PSAnTElTVCcpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoICYmIHZhbHVlLm1hcCh4ID0+IHgubmFtZSkuam9pbignJykubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hcCh4ID0+IHgubmFtZSkuam9pbignLCAnKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGAke3ZhbHVlLmxlbmd0aH0gJHt2YWx1ZS5sZW5ndGggPiAxID8gJ0VsZW1lbnRlJyA6ICdFbGVtZW50J31gO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGZpZWxkLmlubmVyVHlwZS5uYW1lKSB7XG4gICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHJldHVybiAhIXZhbHVlICYmIDxJbWFnZSB2YWx1ZT17dmFsdWV9IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gLz47XG5cbiAgICAgIGNhc2UgJ0Jsb2Nrcyc6XG4gICAgICAgIGNvbnN0IHRleHQgPVxuICAgICAgICAgICEhdmFsdWUgJiZcbiAgICAgICAgICBQbGFpbi5zZXJpYWxpemUoXG4gICAgICAgICAgICBWYWx1ZS5mcm9tSlNPTih7XG4gICAgICAgICAgICAgIGRvY3VtZW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAga2luZDogJ3ZhbHVlJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0ZXh0ID8gPFNsYXRlPnt0ZXh0fTwvU2xhdGU+IDogPGk+S2VpbiBJbmhhbHQ8L2k+O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gISF2YWx1ZSAmJiA8c3Bhbj57dmFsdWUubmFtZSB8fCAnSmEnfTwvc3Bhbj47XG4gICAgfVxuICB9XG59O1xuIl19

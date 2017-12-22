import 'antd/lib/checkbox/style';
import _Checkbox from 'antd/lib/checkbox';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import React from 'react';
import { Image } from 'olymp-cloudinary';
import { Modal } from 'olymp-fela';

import { compose, withState } from 'recompose';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';
import format from 'date-fns/format';

var enhance = compose(withState('isOpen', 'setIsOpen', false));
var Slate = enhance(function (_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      setIsOpen = _ref.setIsOpen;
  return React.createElement(
    'div',
    null,
    React.createElement(
      _Button,
      {
        onClick: function onClick(e) {
          e.stopPropagation();
          setIsOpen(true);
        }
      },
      'Show'
    ),
    React.createElement(
      Modal,
      { open: isOpen, onClose: function onClose() {
          return setIsOpen(false);
        } },
      children
    )
  );
});

var _ref2 = React.createElement(
  'i',
  null,
  'Kein Inhalt'
);

export default (function (value, field) {
  if (!field) {
    return null;
  }

  if (field.innerType.kind === 'SCALAR' && field.innerType.name !== 'Blocks' || field.innerType.kind === 'ENUM') {
    switch (field.innerType.name) {
      case 'Date':
        return !!value && React.createElement(
          'span',
          null,
          format(new Date(value), 'DD.MM.YYYY')
        );

      case 'DateTime':
        return !!value && React.createElement(
          'span',
          null,
          format(new Date(value), 'DD.MM.YYYY, HH:mm') + ' Uhr'
        );

      case 'Boolean':
        return React.createElement(
          _Checkbox,
          { checked: value, disabled: true },
          value ? 'Ja' : 'Nein'
        );

      case 'Color':
        return React.createElement(
          'span',
          { style: { color: value } },
          value
        );

      case 'String':
        return field.type.kind === 'LIST' ? React.createElement(
          'span',
          null,
          (value || []).join(', ')
        ) : React.createElement(
          'span',
          null,
          field.innerType.specialFields[value] || value
        );

      default:
        return React.createElement(
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
        return !!value && React.createElement(Image, { value: value, width: 50, height: 50 });

      case 'Blocks':
        var text = !!value && Plain.serialize(Value.fromJSON({
          document: value,
          kind: 'value'
        }));
        return value && text ? React.createElement(
          Slate,
          null,
          text
        ) : _ref2;

      default:
        return !!value && React.createElement(
          'span',
          null,
          value.name || 'Ja'
        );
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdXRpbHMvZ2V0LXByaW50YWJsZS12YWx1ZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIk1vZGFsIiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsIlZhbHVlIiwiUGxhaW4iLCJmb3JtYXQiLCJlbmhhbmNlIiwiU2xhdGUiLCJjaGlsZHJlbiIsImlzT3BlbiIsInNldElzT3BlbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YWx1ZSIsImZpZWxkIiwiaW5uZXJUeXBlIiwia2luZCIsIm5hbWUiLCJEYXRlIiwiY29sb3IiLCJ0eXBlIiwiam9pbiIsInNwZWNpYWxGaWVsZHMiLCJsZW5ndGgiLCJtYXAiLCJ4IiwidGV4dCIsInNlcmlhbGl6ZSIsImZyb21KU09OIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixrQkFBdEI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLFlBQXRCOztBQUVBLFNBQVNDLE9BQVQsRUFBa0JDLFNBQWxCLFFBQW1DLFdBQW5DO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixPQUF0QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0Isd0JBQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixpQkFBbkI7O0FBRUEsSUFBTUMsVUFBVUwsUUFBUUMsVUFBVSxRQUFWLEVBQW9CLFdBQXBCLEVBQWlDLEtBQWpDLENBQVIsQ0FBaEI7QUFDQSxJQUFNSyxRQUFRRCxRQUFRO0FBQUEsTUFBR0UsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsTUFBYixRQUFhQSxNQUFiO0FBQUEsTUFBcUJDLFNBQXJCLFFBQXFCQSxTQUFyQjtBQUFBLFNBQ3BCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFTLG9CQUFLO0FBQ1pDLFlBQUVDLGVBQUY7QUFDQUYsb0JBQVUsSUFBVjtBQUNEO0FBSkg7QUFBQTtBQUFBLEtBREY7QUFTRTtB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eEIsTUFBTXlCLFFBQU4sQ0FBZTtBQUNiQyxvQkFBVWhCLEtBREc7QUFFYkcsZ0JBQU07QUFGTyxTQUFmLENBREYsQ0FGRjtBQVFBLGVBQU9ILFNBQVNhLElBQVQsR0FBZ0I7QUFBQyxlQUFEO0FBQUE7QUFBUUE7QUFBUixTQUFoQixRQUFQOztBQUVGO0FBQ0UsZUFBTyxDQUFDLENBQUNiLEtBQUYsSUFBVztBQUFBO0FBQUE7QUFBT0EsZ0JBQU1JLElBQU4sSUFBYztBQUFyQixTQUFsQjtBQWhCSjtBQWtCRDtBQUNGLENBcEVEIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vdXRpbHMvZ2V0LXByaW50YWJsZS12YWx1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ29seW1wLWNsb3VkaW5hcnknO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IENoZWNrYm94LCBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBWYWx1ZSB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCBQbGFpbiBmcm9tICdzbGF0ZS1wbGFpbi1zZXJpYWxpemVyJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2Uod2l0aFN0YXRlKCdpc09wZW4nLCAnc2V0SXNPcGVuJywgZmFsc2UpKTtcbmNvbnN0IFNsYXRlID0gZW5oYW5jZSgoeyBjaGlsZHJlbiwgaXNPcGVuLCBzZXRJc09wZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxCdXR0b25cbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIFNob3dcbiAgICA8L0J1dHRvbj5cbiAgICA8TW9kYWwgb3Blbj17aXNPcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01vZGFsPlxuICA8L2Rpdj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCAodmFsdWUsIGZpZWxkKSA9PiB7XG4gIGlmICghZmllbGQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChcbiAgICAoZmllbGQuaW5uZXJUeXBlLmtpbmQgPT09ICdTQ0FMQVInICYmIGZpZWxkLmlubmVyVHlwZS5uYW1lICE9PSAnQmxvY2tzJykgfHxcbiAgICBmaWVsZC5pbm5lclR5cGUua2luZCA9PT0gJ0VOVU0nXG4gICkge1xuICAgIHN3aXRjaCAoZmllbGQuaW5uZXJUeXBlLm5hbWUpIHtcbiAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICByZXR1cm4gISF2YWx1ZSAmJiA8c3Bhbj57Zm9ybWF0KG5ldyBEYXRlKHZhbHVlKSwgJ0RELk1NLllZWVknKX08L3NwYW4+O1xuXG4gICAgICBjYXNlICdEYXRlVGltZSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgISF2YWx1ZSAmJiAoXG4gICAgICAgICAgICA8c3Bhbj57YCR7Zm9ybWF0KG5ldyBEYXRlKHZhbHVlKSwgJ0RELk1NLllZWVksIEhIOm1tJyl9IFVocmB9PC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3ZhbHVlfSBkaXNhYmxlZD5cbiAgICAgICAgICAgIHt2YWx1ZSA/ICdKYScgOiAnTmVpbid9XG4gICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnQ29sb3InOlxuICAgICAgICByZXR1cm4gPHNwYW4gc3R5bGU9e3sgY29sb3I6IHZhbHVlIH19Pnt2YWx1ZX08L3NwYW4+O1xuXG4gICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICByZXR1cm4gZmllbGQudHlwZS5raW5kID09PSAnTElTVCcgPyAoXG4gICAgICAgICAgPHNwYW4+eyh2YWx1ZSB8fCBbXSkuam9pbignLCAnKX08L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4+e2ZpZWxkLmlubmVyVHlwZS5zcGVjaWFsRmllbGRzW3ZhbHVlXSB8fCB2YWx1ZX08L3NwYW4+XG4gICAgICAgICk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8c3Bhbj57ZmllbGQuaW5uZXJUeXBlLnNwZWNpYWxGaWVsZHNbdmFsdWVdIHx8IHZhbHVlfTwvc3Bhbj47XG4gICAgfVxuICB9IGVsc2UgaWYgKGZpZWxkLmlubmVyVHlwZS5raW5kID09PSAnTElTVCcpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoICYmIHZhbHVlLm1hcCh4ID0+IHgubmFtZSkuam9pbignJykubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hcCh4ID0+IHgubmFtZSkuam9pbignLCAnKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGAke3ZhbHVlLmxlbmd0aH0gJHt2YWx1ZS5sZW5ndGggPiAxID8gJ0VsZW1lbnRlJyA6ICdFbGVtZW50J31gO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGZpZWxkLmlubmVyVHlwZS5uYW1lKSB7XG4gICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHJldHVybiAhIXZhbHVlICYmIDxJbWFnZSB2YWx1ZT17dmFsdWV9IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gLz47XG5cbiAgICAgIGNhc2UgJ0Jsb2Nrcyc6XG4gICAgICAgIGNvbnN0IHRleHQgPVxuICAgICAgICAgICEhdmFsdWUgJiZcbiAgICAgICAgICBQbGFpbi5zZXJpYWxpemUoXG4gICAgICAgICAgICBWYWx1ZS5mcm9tSlNPTih7XG4gICAgICAgICAgICAgIGRvY3VtZW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAga2luZDogJ3ZhbHVlJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0ZXh0ID8gPFNsYXRlPnt0ZXh0fTwvU2xhdGU+IDogPGk+S2VpbiBJbmhhbHQ8L2k+O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gISF2YWx1ZSAmJiA8c3Bhbj57dmFsdWUubmFtZSB8fCAnSmEnfTwvc3Bhbj47XG4gICAgfVxuICB9XG59O1xuIl19

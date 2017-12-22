import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import FaLink from 'olymp-icons/lib/fa-link';


var Binding = function Binding(_ref) {
  var node = _ref.node,
      attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      editor = _ref.editor;

  var field = node.data.get('field');
  var text = _get(editor.props.binding, field) || '<Kein Text>';
  return React.createElement(
    'span',
    _extends({}, attributes, { className: className }),
    children,
    text
  );
};

var setLink = function setLink(onChange, value, node) {
  var field = window.prompt('Feld', node.data.get('field') || '');
  if (field) {
    onChange(value.change().setNodeByKey(node.key, {
      data: node.data.set('field', field)
    }));
  }
};

export default {
  type: 'textBinding',
  isVoid: true,
  kind: 'inline',
  label: 'Angebundener Text',
  category: 'Daten',
  component: Binding,
  actions: [{
    type: 'small',
    component: function component(_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value,
          node = _ref2.node;
      return React.createElement(FaLink, { onClick: function onClick() {
          return setLink(onChange, value, node);
        } });
    },
    tooltip: 'Neu binden'
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9iaW5kaW5nLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJpbmRpbmciLCJub2RlIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZWRpdG9yIiwiZmllbGQiLCJkYXRhIiwiZ2V0IiwidGV4dCIsInByb3BzIiwiYmluZGluZyIsInNldExpbmsiLCJvbkNoYW5nZSIsInZhbHVlIiwid2luZG93IiwicHJvbXB0IiwiY2hhbmdlIiwic2V0Tm9kZUJ5S2V5Iiwia2V5Iiwic2V0IiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiY29tcG9uZW50IiwiYWN0aW9ucyIsInRvb2x0aXAiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOzs7O0FBSUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLE9BQXVEO0FBQUEsTUFBcERDLElBQW9ELFFBQXBEQSxJQUFvRDtBQUFBLE1BQTlDQyxVQUE4QyxRQUE5Q0EsVUFBOEM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDckUsTUFBTUMsUUFBUUwsS0FBS00sSUFBTCxDQUFVQyxHQUFWLENBQWMsT0FBZCxDQUFkO0FBQ0EsTUFBTUMsT0FBTyxLQUFJSixPQUFPSyxLQUFQLENBQWFDLE9BQWpCLEVBQTBCTCxLQUExQixLQUFvQyxhQUFqRDtBQUNBLFNBQ0U7QUFBQTtBQUFBLGlCQUFVSixVQUFWLElBQXNCLFdBQVdFLFNBQWpDO0FBQ0dELFlBREg7QUFFR007QUFGSCxHQURGO0FBTUQsQ0FURDs7QUFXQSxJQUFNRyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCYixJQUFsQixFQUEyQjtBQUN6QyxNQUFNSyxRQUFRUyxPQUFPQyxNQUFQLENBQWMsTUFBZCxFQUFzQmYsS0FBS00sSUFBTCxDQUFVQyxHQUFWLENBQWMsT0FBZCxLQUEwQixFQUFoRCxDQUFkO0FBQ0EsTUFBSUYsS0FBSixFQUFXO0FBQ1RPLGFBQ0VDLE1BQU1HLE1BQU4sR0FBZUMsWUFBZixDQUE0QmpCLEtBQUtrQixHQUFqQyxFQUFzQztBQUNwQ1osWUFBTU4sS0FBS00sSUFBTCxDQUFVYSxHQUFWLENBQWMsT0FBZCxFQUF1QmQsS0FBdkI7QUFEOEIsS0FBdEMsQ0FERjtBQUtEO0FBQ0YsQ0FURDs7QUFXQSxlQUFlO0FBQ2JlLFFBQU0sYUFETztBQUViQyxVQUFRLElBRks7QUFHYkMsUUFBTSxRQUhPO0FBSWJDLFNBQU8sbUJBSk07QUFLYkMsWUFBVSxPQUxHO0FBTWJDLGFBQVcxQixPQU5FO0FBT2IyQixXQUFTLENBQ1A7QUFDRU4sVUFBTSxPQURSO0FBRUVLLGVBQVc7QUFBQSxVQUFHYixRQUFILFNBQUdBLFFBQUg7QUFBQSxVQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxVQUFvQmIsSUFBcEIsU0FBb0JBLElBQXBCO0FBQUEsYUFDVCxvQkFBQyxNQUFELElBQVEsU0FBUztBQUFBLGlCQUFNVyxRQUFRQyxRQUFSLEVBQWtCQyxLQUFsQixFQUF5QmIsSUFBekIsQ0FBTjtBQUFBLFNBQWpCLEdBRFM7QUFBQSxLQUZiO0FBS0UyQixhQUFTO0FBTFgsR0FETztBQVBJLENBQWYiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvYmxvY2tzL2JpbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFMaW5rIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgQmluZGluZyA9ICh7IG5vZGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBjbGFzc05hbWUsIGVkaXRvciB9KSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gbm9kZS5kYXRhLmdldCgnZmllbGQnKTtcbiAgY29uc3QgdGV4dCA9IGdldChlZGl0b3IucHJvcHMuYmluZGluZywgZmllbGQpIHx8ICc8S2VpbiBUZXh0Pic7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gey4uLmF0dHJpYnV0ZXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHt0ZXh0fVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IHNldExpbmsgPSAob25DaGFuZ2UsIHZhbHVlLCBub2RlKSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gd2luZG93LnByb21wdCgnRmVsZCcsIG5vZGUuZGF0YS5nZXQoJ2ZpZWxkJykgfHwgJycpO1xuICBpZiAoZmllbGQpIHtcbiAgICBvbkNoYW5nZShcbiAgICAgIHZhbHVlLmNoYW5nZSgpLnNldE5vZGVCeUtleShub2RlLmtleSwge1xuICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdmaWVsZCcsIGZpZWxkKSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ3RleHRCaW5kaW5nJyxcbiAgaXNWb2lkOiB0cnVlLFxuICBraW5kOiAnaW5saW5lJyxcbiAgbGFiZWw6ICdBbmdlYnVuZGVuZXIgVGV4dCcsXG4gIGNhdGVnb3J5OiAnRGF0ZW4nLFxuICBjb21wb25lbnQ6IEJpbmRpbmcsXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICB0eXBlOiAnc21hbGwnLFxuICAgICAgY29tcG9uZW50OiAoeyBvbkNoYW5nZSwgdmFsdWUsIG5vZGUgfSkgPT4gKFxuICAgICAgICA8RmFMaW5rIG9uQ2xpY2s9eygpID0+IHNldExpbmsob25DaGFuZ2UsIHZhbHVlLCBub2RlKX0gLz5cbiAgICAgICksXG4gICAgICB0b29sdGlwOiAnTmV1IGJpbmRlbicsXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=

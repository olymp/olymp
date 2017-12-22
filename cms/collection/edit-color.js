function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';
import { ColorEditor } from 'olymp-ui';
import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Color';
  },
  form: toClass(function (_ref2) {
    var type = _ref2.type,
        props = _objectWithoutProperties(_ref2, ['type']);

    return React.createElement(
      FormItem,
      props,
      React.createElement(ColorEditor, props)
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1jb2xvci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJ0b0NsYXNzIiwiQ29sb3JFZGl0b3IiLCJGb3JtSXRlbSIsInJ1bGUiLCJpbm5lclR5cGUiLCJuYW1lIiwiZm9ybSIsInR5cGUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixXQUF4QjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsVUFBNUI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCOztBQUVBLGVBQWU7QUFDYkMsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CQSxVQUFVQyxJQUFWLEtBQW1CLE9BQXRDO0FBQUEsR0FETztBQUViQyxRQUFNTixRQUFRO0FBQUEsUUFBR08sSUFBSCxTQUFHQSxJQUFIO0FBQUEsUUFBWUMsS0FBWjs7QUFBQSxXQUNaO0FBQUMsY0FBRDtBQUFjQSxXQUFkO0FBQ0UsMEJBQUMsV0FBRCxFQUFpQkEsS0FBakI7QUFERixLQURZO0FBQUEsR0FBUjtBQUZPLENBQWYiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi9lZGl0LWNvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgQ29sb3JFZGl0b3IgfSBmcm9tICdvbHltcC11aSc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnLi9mb3JtLWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGU6ICh7IGlubmVyVHlwZSB9KSA9PiBpbm5lclR5cGUubmFtZSA9PT0gJ0NvbG9yJyxcbiAgZm9ybTogdG9DbGFzcygoeyB0eXBlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEZvcm1JdGVtIHsuLi5wcm9wc30+XG4gICAgICA8Q29sb3JFZGl0b3Igey4uLnByb3BzfSAvPlxuICAgIDwvRm9ybUl0ZW0+XG4gICkpLFxufTtcbiJdfQ==

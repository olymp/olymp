function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';
import GeocodeEditor from 'olymp-google/edits/geocode';
import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Geocode';
  },
  form: toClass(function (_ref2) {
    var type = _ref2.type,
        props = _objectWithoutProperties(_ref2, ['type']);

    return React.createElement(
      FormItem,
      props,
      React.createElement(GeocodeEditor, props)
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1nZW9jb2RlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInRvQ2xhc3MiLCJHZW9jb2RlRWRpdG9yIiwiRm9ybUl0ZW0iLCJydWxlIiwiaW5uZXJUeXBlIiwibmFtZSIsImZvcm0iLCJ0eXBlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsV0FBeEI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLDRCQUExQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsYUFBckI7O0FBRUEsZUFBZTtBQUNiQyxRQUFNO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsV0FBbUJBLFVBQVVDLElBQVYsS0FBbUIsU0FBdEM7QUFBQSxHQURPO0FBRWJDLFFBQU1OLFFBQVE7QUFBQSxRQUFHTyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFZQyxLQUFaOztBQUFBLFdBQ1o7QUFBQyxjQUFEO0FBQWNBLFdBQWQ7QUFDRSwwQkFBQyxhQUFELEVBQW1CQSxLQUFuQjtBQURGLEtBRFk7QUFBQSxHQUFSO0FBRk8sQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL2VkaXQtZ2VvY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBHZW9jb2RlRWRpdG9yIGZyb20gJ29seW1wLWdvb2dsZS9lZGl0cy9nZW9jb2RlJztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+IGlubmVyVHlwZS5uYW1lID09PSAnR2VvY29kZScsXG4gIGZvcm06IHRvQ2xhc3MoKHsgdHlwZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxGb3JtSXRlbSB7Li4ucHJvcHN9PlxuICAgICAgPEdlb2NvZGVFZGl0b3Igey4uLnByb3BzfSAvPlxuICAgIDwvRm9ybUl0ZW0+XG4gICkpLFxufTtcbiJdfQ==

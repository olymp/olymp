import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import { compose, withHandlers } from 'recompose';

import { mutateFile } from '../gql';

export default compose(mutateFile, _Form.create(), withHandlers({
  save: function save(_ref) {
    var form = _ref.form,
        items = _ref.items,
        _save = _ref.save,
        onChange = _ref.onChange;
    return function () {
      form.validateFields(function (err, values) {
        if (err) {
          return console.error(err);
        }
        if (onChange) {
          return onChange(items.map(function (item) {
            return values[item.id];
          }));
        }
        Promise.all(items.map(function (item) {
          return _save(values[item.id], !item.removed && values[item.id].removed);
        })).then(function (x) {
          return form.resetFields();
        });
      });
    };
  }
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvZGV0YWlsL3dpdGgtZmlsZS1mb3JtLmVzNiJdLCJuYW1lcyI6WyJjb21wb3NlIiwid2l0aEhhbmRsZXJzIiwibXV0YXRlRmlsZSIsImNyZWF0ZSIsInNhdmUiLCJmb3JtIiwiaXRlbXMiLCJvbkNoYW5nZSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwiY29uc29sZSIsImVycm9yIiwibWFwIiwiaXRlbSIsImlkIiwiUHJvbWlzZSIsImFsbCIsInJlbW92ZWQiLCJ0aGVuIiwicmVzZXRGaWVsZHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsT0FBVCxFQUFrQkMsWUFBbEIsUUFBc0MsV0FBdEM7O0FBRUEsU0FBU0MsVUFBVCxRQUEyQixRQUEzQjs7QUFFQSxlQUFlRixRQUNiRSxVQURhLEVBRWIsTUFBS0MsTUFBTCxFQUZhLEVBR2JGLGFBQWE7QUFDWEcsUUFBTTtBQUFBLFFBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFFBQWdCRixLQUFoQixRQUFnQkEsSUFBaEI7QUFBQSxRQUFzQkcsUUFBdEIsUUFBc0JBLFFBQXRCO0FBQUEsV0FBcUMsWUFBTTtBQUMvQ0YsV0FBS0csY0FBTCxDQUFvQixVQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDbkMsWUFBSUQsR0FBSixFQUFTO0FBQ1AsaUJBQU9FLFFBQVFDLEtBQVIsQ0FBY0gsR0FBZCxDQUFQO0FBQ0Q7QUFDRCxZQUFJRixRQUFKLEVBQWM7QUFDWixpQkFBT0EsU0FBU0QsTUFBTU8sR0FBTixDQUFVO0FBQUEsbUJBQVFILE9BQU9JLEtBQUtDLEVBQVosQ0FBUjtBQUFBLFdBQVYsQ0FBVCxDQUFQO0FBQ0Q7QUFDREMsZ0JBQVFDLEdBQVIsQ0FDRVgsTUFBTU8sR0FBTixDQUFVO0FBQUEsaUJBQ1JULE1BQUtNLE9BQU9JLEtBQUtDLEVBQVosQ0FBTCxFQUFzQixDQUFDRCxLQUFLSSxPQUFOLElBQWlCUixPQUFPSSxLQUFLQyxFQUFaLEVBQWdCRyxPQUF2RCxDQURRO0FBQUEsU0FBVixDQURGLEVBSUVDLElBSkYsQ0FJTztBQUFBLGlCQUFLZCxLQUFLZSxXQUFMLEVBQUw7QUFBQSxTQUpQO0FBS0QsT0FaRDtBQWFELEtBZEs7QUFBQTtBQURLLENBQWIsQ0FIYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2Nsb3VkaW5hcnkvZGV0YWlsL3dpdGgtZmlsZS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZSwgd2l0aEhhbmRsZXJzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IG11dGF0ZUZpbGUgfSBmcm9tICcuLi9ncWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICBtdXRhdGVGaWxlLFxuICBGb3JtLmNyZWF0ZSgpLFxuICB3aXRoSGFuZGxlcnMoe1xuICAgIHNhdmU6ICh7IGZvcm0sIGl0ZW1zLCBzYXZlLCBvbkNoYW5nZSB9KSA9PiAoKSA9PiB7XG4gICAgICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICByZXR1cm4gb25DaGFuZ2UoaXRlbXMubWFwKGl0ZW0gPT4gdmFsdWVzW2l0ZW0uaWRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgaXRlbXMubWFwKGl0ZW0gPT5cbiAgICAgICAgICAgIHNhdmUodmFsdWVzW2l0ZW0uaWRdLCAhaXRlbS5yZW1vdmVkICYmIHZhbHVlc1tpdGVtLmlkXS5yZW1vdmVkKSxcbiAgICAgICAgICApLFxuICAgICAgICApLnRoZW4oeCA9PiBmb3JtLnJlc2V0RmllbGRzKCkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSksXG4pO1xuIl19

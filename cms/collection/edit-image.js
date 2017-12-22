function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { toClass } from 'recompose';
import { EditImage } from 'olymp-cloudinary';
import FormItem from './form-item';

export default {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Image';
  },
  form: toClass(function (_ref2) {
    var value = _ref2.value,
        multi = _ref2.multi,
        onChange = _ref2.onChange,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        rest = _objectWithoutProperties(_ref2, ['value', 'multi', 'onChange', 'data-__field', 'data-__meta']);

    return React.createElement(
      FormItem,
      rest,
      React.createElement(EditImage, {
        value: value,
        multi: multi,
        onChange: onChange,
        maxHeight: 100,
        maxWidth: 250,
        'data-__field': dataField,
        'data-__meta': dataMeta
      })
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vZWRpdC1pbWFnZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJ0b0NsYXNzIiwiRWRpdEltYWdlIiwiRm9ybUl0ZW0iLCJydWxlIiwiaW5uZXJUeXBlIiwibmFtZSIsImZvcm0iLCJ2YWx1ZSIsIm11bHRpIiwib25DaGFuZ2UiLCJkYXRhRmllbGQiLCJkYXRhTWV0YSIsInJlc3QiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsV0FBeEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsYUFBckI7O0FBRUEsZUFBZTtBQUNiQyxRQUFNO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsV0FBbUJBLFVBQVVDLElBQVYsS0FBbUIsT0FBdEM7QUFBQSxHQURPO0FBRWJDLFFBQU1OLFFBQ0o7QUFBQSxRQUNFTyxLQURGLFNBQ0VBLEtBREY7QUFBQSxRQUVFQyxLQUZGLFNBRUVBLEtBRkY7QUFBQSxRQUdFQyxRQUhGLFNBR0VBLFFBSEY7QUFBQSxRQUlrQkMsU0FKbEIsU0FJRSxjQUpGO0FBQUEsUUFLaUJDLFFBTGpCLFNBS0UsYUFMRjtBQUFBLFFBTUtDLElBTkwsa0VBSUUsY0FKRixFQUtFLGFBTEY7O0FBQUEsV0FRRTtBQUFDLGNBQUQ7QUFBY0EsVUFBZDtBQUNFLDBCQUFDLFNBQUQ7QUFDRSxlQUFPTCxLQURUO0FBRUUsZUFBT0MsS0FGVDtBQUdFLGtCQUFVQyxRQUhaO0FBSUUsbUJBQVcsR0FKYjtBQUtFLGtCQUFVLEdBTFo7QUFNRSx3QkFBY0MsU0FOaEI7QUFPRSx1QkFBYUM7QUFQZjtBQURGLEtBUkY7QUFBQSxHQURJO0FBRk8sQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL2VkaXQtaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9DbGFzcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBFZGl0SW1hZ2UgfSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCBGb3JtSXRlbSBmcm9tICcuL2Zvcm0taXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+IGlubmVyVHlwZS5uYW1lID09PSAnSW1hZ2UnLFxuICBmb3JtOiB0b0NsYXNzKFxuICAgICh7XG4gICAgICB2YWx1ZSxcbiAgICAgIG11bHRpLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICAnZGF0YS1fX2ZpZWxkJzogZGF0YUZpZWxkLFxuICAgICAgJ2RhdGEtX19tZXRhJzogZGF0YU1ldGEsXG4gICAgICAuLi5yZXN0XG4gICAgfSkgPT4gKFxuICAgICAgPEZvcm1JdGVtIHsuLi5yZXN0fT5cbiAgICAgICAgPEVkaXRJbWFnZVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBtdWx0aT17bXVsdGl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIG1heEhlaWdodD17MTAwfVxuICAgICAgICAgIG1heFdpZHRoPXsyNTB9XG4gICAgICAgICAgZGF0YS1fX2ZpZWxkPXtkYXRhRmllbGR9XG4gICAgICAgICAgZGF0YS1fX21ldGE9e2RhdGFNZXRhfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICApLFxuICApLFxufTtcbiJdfQ==

import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { compose } from 'recompose';
import { ContentLoader } from 'olymp-fela';

import withItem from '../with-item';
import DetailForm from '../form';

var enhance = compose(_Form.create(), withItem);

var CollectionDetail = enhance(function (_ref) {
  var id = _ref.id,
      item = _ref.item,
      onSave = _ref.onSave,
      onClone = _ref.onClone,
      rest = _objectWithoutProperties(_ref, ['id', 'item', 'onSave', 'onClone']);

  return React.createElement(
    ContentLoader,
    { isLoading: id && !item },
    React.createElement(DetailForm, _extends({}, rest, {
      id: id,
      item: item || {},
      onSave: onSave,
      onCreate: onSave
    }))
  );
});

CollectionDetail.displayName = 'CollectionDetail';
export default CollectionDetail;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdmlldy9kZXRhaWwuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29tcG9zZSIsIkNvbnRlbnRMb2FkZXIiLCJ3aXRoSXRlbSIsIkRldGFpbEZvcm0iLCJlbmhhbmNlIiwiY3JlYXRlIiwiQ29sbGVjdGlvbkRldGFpbCIsImlkIiwiaXRlbSIsIm9uU2F2ZSIsIm9uQ2xvbmUiLCJyZXN0IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixXQUF4QjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsWUFBOUI7O0FBRUEsT0FBT0MsUUFBUCxNQUFxQixjQUFyQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsU0FBdkI7O0FBRUEsSUFBTUMsVUFBVUosUUFBUSxNQUFLSyxNQUFMLEVBQVIsRUFBdUJILFFBQXZCLENBQWhCOztBQUVBLElBQU1JLG1CQUFtQkYsUUFBUTtBQUFBLE1BQUdHLEVBQUgsUUFBR0EsRUFBSDtBQUFBLE1BQU9DLElBQVAsUUFBT0EsSUFBUDtBQUFBLE1BQWFDLE1BQWIsUUFBYUEsTUFBYjtBQUFBLE1BQXFCQyxPQUFyQixRQUFxQkEsT0FBckI7QUFBQSxNQUFpQ0MsSUFBakM7O0FBQUEsU0FDL0I7QUFBQyxpQkFBRDtBQUFBLE1BQWUsV0FBV0osTUFBTSxDQUFDQyxJQUFqQztBQUNFLHdCQUFDLFVBQUQsZUFDTUcsSUFETjtBQUVFLFVBQUlKLEVBRk47QUFHRSxZQUFNQyxRQUFRLEVBSGhCO0FBSUUsY0FBUUMsTUFKVjtBQUtFLGdCQUFVQTtBQUxaO0FBREYsR0FEK0I7QUFBQSxDQUFSLENBQXpCOztBQVlBSCxpQkFBaUJNLFdBQWpCLEdBQStCLGtCQUEvQjtBQUNBLGVBQWVOLGdCQUFmIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vdmlldy9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBDb250ZW50TG9hZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgd2l0aEl0ZW0gZnJvbSAnLi4vd2l0aC1pdGVtJztcbmltcG9ydCBEZXRhaWxGb3JtIGZyb20gJy4uL2Zvcm0nO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShGb3JtLmNyZWF0ZSgpLCB3aXRoSXRlbSk7XG5cbmNvbnN0IENvbGxlY3Rpb25EZXRhaWwgPSBlbmhhbmNlKCh7IGlkLCBpdGVtLCBvblNhdmUsIG9uQ2xvbmUsIC4uLnJlc3QgfSkgPT4gKFxuICA8Q29udGVudExvYWRlciBpc0xvYWRpbmc9e2lkICYmICFpdGVtfT5cbiAgICA8RGV0YWlsRm9ybVxuICAgICAgey4uLnJlc3R9XG4gICAgICBpZD17aWR9XG4gICAgICBpdGVtPXtpdGVtIHx8IHt9fVxuICAgICAgb25TYXZlPXtvblNhdmV9XG4gICAgICBvbkNyZWF0ZT17b25TYXZlfVxuICAgIC8+XG4gIDwvQ29udGVudExvYWRlcj5cbikpO1xuXG5Db2xsZWN0aW9uRGV0YWlsLmRpc3BsYXlOYW1lID0gJ0NvbGxlY3Rpb25EZXRhaWwnO1xuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbkRldGFpbDtcbiJdfQ==

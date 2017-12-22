var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import renderHelmet from 'olymp-utils/helmet';
import { ContentLoader } from 'olymp-fela';
import { compose, withPropsOnChange, withState } from 'recompose';
import { connect } from 'react-redux';
import Writer from './writer';
import Error404 from './404';
import Navigation from './navigation';

var enhance = compose(connect(function (_ref) {
  var location = _ref.location;
  return {
    pathname: location.pathname
  };
}), withState('formOpen', 'setFormOpen', false), withPropsOnChange(['flatNavigation', 'pathname'], function (_ref2) {
  var flatNavigation = _ref2.flatNavigation,
      pathname = _ref2.pathname;

  var item = void 0;
  for (var x = 0; x < flatNavigation.length; x++) {
    var page = flatNavigation[x];
    if (decodeURI(page.pathname) === pathname || '/' + page.id === pathname) {
      item = page;
      break;
    }
  }
  return {
    item: item
  };
}));

var _ref4 = React.createElement(Error404, null);

export default enhance(function (props) {
  var Wrapped = props.Wrapped,
      pathname = props.pathname,
      loading = props.loading,
      item = props.item;

  var _ref3 = item || {},
      id = _ref3.id,
      binding = _ref3.binding,
      pageId = _ref3.pageId,
      bindingId = _ref3.bindingId;

  var notFound = !item && pathname !== '__new' && pathname !== '/__new';

  return React.createElement(
    Navigation,
    _extends({}, props, { left: 72 }),
    React.createElement(
      Wrapped,
      _extends({}, props, { match: item }),
      notFound ? React.createElement(
        ContentLoader,
        { height: 600, isLoading: loading },
        React.createElement(Error404, _extends({}, props, {
          render: function render() {
            return React.createElement(
              Wrapped,
              props,
              renderHelmet({
                name: '404',
                description: 'Seite wurde nicht gefunden',
                pathname: pathname
              }),
              _ref4
            );
          }
        }))
      ) : React.createElement(
        ContentLoader,
        { height: 600, isLoading: loading },
        React.createElement(
          Writer,
          _extends({}, props, {
            match: item,
            key: pageId || id,
            id: pageId || id,
            bindingId: bindingId,
            binding: binding
          }),
          renderHelmet(item, pathname)
        )
      )
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2VkaXRhYmxlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsInJlbmRlckhlbG1ldCIsIkNvbnRlbnRMb2FkZXIiLCJjb21wb3NlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJ3aXRoU3RhdGUiLCJjb25uZWN0IiwiV3JpdGVyIiwiRXJyb3I0MDQiLCJOYXZpZ2F0aW9uIiwiZW5oYW5jZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJmbGF0TmF2aWdhdGlvbiIsIml0ZW0iLCJ4IiwibGVuZ3RoIiwicGFnZSIsImRlY29kZVVSSSIsImlkIiwiV3JhcHBlZCIsInByb3BzIiwibG9hZGluZyIsImJpbmRpbmciLCJwYWdlSWQiLCJiaW5kaW5nSWQiLCJub3RGb3VuZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixvQkFBekI7QUFDQSxTQUFTQyxhQUFULFFBQThCLFlBQTlCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsaUJBQWxCLEVBQXFDQyxTQUFyQyxRQUFzRCxXQUF0RDtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixPQUFyQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsY0FBdkI7O0FBRUEsSUFBTUMsVUFBVVAsUUFDZEcsUUFBUTtBQUFBLE1BQUdLLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQ3pCQyxjQUFVRCxTQUFTQztBQURNLEdBQW5CO0FBQUEsQ0FBUixDQURjLEVBSWRQLFVBQVUsVUFBVixFQUFzQixhQUF0QixFQUFxQyxLQUFyQyxDQUpjLEVBS2RELGtCQUNFLENBQUMsZ0JBQUQsRUFBbUIsVUFBbkIsQ0FERixFQUVFLGlCQUFrQztBQUFBLE1BQS9CUyxjQUErQixTQUEvQkEsY0FBK0I7QUFBQSxNQUFmRCxRQUFlLFNBQWZBLFFBQWU7O0FBQ2hDLE1BQUlFLGFBQUo7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsZUFBZUcsTUFBbkMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFFBQU1FLE9BQU9KLGVBQWVFLENBQWYsQ0FBYjtBQUNBLFFBQ0VHLFVBQVVELEtBQUtMLFFBQWYsTUFBNkJBLFFBQTdCLElBQ0EsTUFBSUssS0FBS0UsRUFBVCxLQUFrQlAsUUFGcEIsRUFHRTtBQUNBRSxhQUFPRyxJQUFQO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsU0FBTztBQUNMSDtBQURLLEdBQVA7QUFHRCxDQWpCSCxDQUxjLENBQWhCOztZQThDa0Isb0JBQUMsUUFBRCxPOztBQXBCbEIsZUFBZUosUUFBUSxpQkFBUztBQUFBLE1BQ3RCVSxPQURzQixHQUNlQyxLQURmLENBQ3RCRCxPQURzQjtBQUFBLE1BQ2JSLFFBRGEsR0FDZVMsS0FEZixDQUNiVCxRQURhO0FBQUEsTUFDSFUsT0FERyxHQUNlRCxLQURmLENBQ0hDLE9BREc7QUFBQSxNQUNNUixJQUROLEdBQ2VPLEtBRGYsQ0FDTVAsSUFETjs7QUFBQSxjQUVhQSxRQUFRLEVBRnJCO0FBQUEsTUFFdEJLLEVBRnNCLFNBRXRCQSxFQUZzQjtBQUFBLE1BRWxCSSxPQUZrQixTQUVsQkEsT0FGa0I7QUFBQSxNQUVUQyxNQUZTLFNBRVRBLE1BRlM7QUFBQSxNQUVEQyxTQUZDLFNBRURBLFNBRkM7O0FBSTlCLE1BQU1DLFdBQVcsQ0FBQ1osSUFBRCxJQUFTRixhQUFhLE9BQXRCLElBQWlDQSxhQUFhLFFBQS9EOztBQUVBLFNBQ0U7QUFBQyxjQUFEO0FBQUEsaUJBQWdCUyxLQUFoQixJQUF1QixNQUFNLEVBQTdCO0FBQ0U7QUFBQyxhQUFEO0FBQUEsbUJBQWFBLEtBQWIsSUFBb0IsT0FBT1AsSUFBM0I7QUFDR1ksaUJBQ0M7QUFBQyxxQkFBRDtBQUFBLFVBQWUsUUFBUSxHQUF2QixFQUE0QixXQUFXSixPQUF2QztBQUNFLDRCQUFDLFFBQUQsZUFDTUQsS0FETjtBQUVFLGtCQUFRO0FBQUEsbUJBQ047QUFBQyxxQkFBRDtBQUFhQSxtQkFBYjtBQUNHcEIsMkJBQWE7QUFDWjBCLHNCQUFNLEtBRE07QUFFWkMsNkJBQWEsNEJBRkQ7QUFHWmhCO0FBSFksZUFBYixDQURIO0FBQUE7QUFBQSxhQURNO0FBQUE7QUFGVjtBQURGLE9BREQsR0FpQkM7QUFBQyxxQkFBRDtBQUFBLFVBQWUsUUFBUSxHQUF2QixFQUE0QixXQUFXVSxPQUF2QztBQUNFO0FBQUMsZ0JBQUQ7QUFBQSx1QkFDTUQsS0FETjtBQUVFLG1CQUFPUCxJQUZUO0FBR0UsaUJBQUtVLFVBQVVMLEVBSGpCO0FBSUUsZ0JBQUlLLFVBQVVMLEVBSmhCO0FBS0UsdUJBQVdNLFNBTGI7QUFNRSxxQkFBU0Y7QUFOWDtBQVFHdEIsdUJBQWFhLElBQWIsRUFBbUJGLFFBQW5CO0FBUkg7QUFERjtBQWxCSjtBQURGLEdBREY7QUFvQ0QsQ0ExQ2MsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9lZGl0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVuZGVySGVsbWV0IGZyb20gJ29seW1wLXV0aWxzL2hlbG1ldCc7XG5pbXBvcnQgeyBDb250ZW50TG9hZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHNPbkNoYW5nZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgV3JpdGVyIGZyb20gJy4vd3JpdGVyJztcbmltcG9ydCBFcnJvcjQwNCBmcm9tICcuLzQwNCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgY29ubmVjdCgoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgfSkpLFxuICB3aXRoU3RhdGUoJ2Zvcm1PcGVuJywgJ3NldEZvcm1PcGVuJywgZmFsc2UpLFxuICB3aXRoUHJvcHNPbkNoYW5nZShcbiAgICBbJ2ZsYXROYXZpZ2F0aW9uJywgJ3BhdGhuYW1lJ10sXG4gICAgKHsgZmxhdE5hdmlnYXRpb24sIHBhdGhuYW1lIH0pID0+IHtcbiAgICAgIGxldCBpdGVtO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBmbGF0TmF2aWdhdGlvbi5sZW5ndGg7IHgrKykge1xuICAgICAgICBjb25zdCBwYWdlID0gZmxhdE5hdmlnYXRpb25beF07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkZWNvZGVVUkkocGFnZS5wYXRobmFtZSkgPT09IHBhdGhuYW1lIHx8XG4gICAgICAgICAgYC8ke3BhZ2UuaWR9YCA9PT0gcGF0aG5hbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaXRlbSA9IHBhZ2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW0sXG4gICAgICB9O1xuICAgIH0sXG4gICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKHByb3BzID0+IHtcbiAgY29uc3QgeyBXcmFwcGVkLCBwYXRobmFtZSwgbG9hZGluZywgaXRlbSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIGJpbmRpbmcsIHBhZ2VJZCwgYmluZGluZ0lkIH0gPSBpdGVtIHx8IHt9O1xuXG4gIGNvbnN0IG5vdEZvdW5kID0gIWl0ZW0gJiYgcGF0aG5hbWUgIT09ICdfX25ldycgJiYgcGF0aG5hbWUgIT09ICcvX19uZXcnO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdmlnYXRpb24gey4uLnByb3BzfSBsZWZ0PXs3Mn0+XG4gICAgICA8V3JhcHBlZCB7Li4ucHJvcHN9IG1hdGNoPXtpdGVtfT5cbiAgICAgICAge25vdEZvdW5kID8gKFxuICAgICAgICAgIDxDb250ZW50TG9hZGVyIGhlaWdodD17NjAwfSBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgICAgPEVycm9yNDA0XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgPFdyYXBwZWQgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJIZWxtZXQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnNDA0JyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTZWl0ZSB3dXJkZSBuaWNodCBnZWZ1bmRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8RXJyb3I0MDQgLz5cbiAgICAgICAgICAgICAgICA8L1dyYXBwZWQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudExvYWRlcj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29udGVudExvYWRlciBoZWlnaHQ9ezYwMH0gaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIDxXcml0ZXJcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICBtYXRjaD17aXRlbX1cbiAgICAgICAgICAgICAga2V5PXtwYWdlSWQgfHwgaWR9XG4gICAgICAgICAgICAgIGlkPXtwYWdlSWQgfHwgaWR9XG4gICAgICAgICAgICAgIGJpbmRpbmdJZD17YmluZGluZ0lkfVxuICAgICAgICAgICAgICBiaW5kaW5nPXtiaW5kaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cmVuZGVySGVsbWV0KGl0ZW0sIHBhdGhuYW1lKX1cbiAgICAgICAgICAgIDwvV3JpdGVyPlxuICAgICAgICAgIDwvQ29udGVudExvYWRlcj5cbiAgICAgICAgKX1cbiAgICAgIDwvV3JhcHBlZD5cbiAgICA8L05hdmlnYXRpb24+XG4gICk7XG59KTtcbiJdfQ==

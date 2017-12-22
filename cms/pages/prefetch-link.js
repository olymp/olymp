var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'olymp-router';

var createPrefetchPage = function createPrefetchPage(dispatch) {
  return function (payload) {
    return dispatch({ type: 'CMS_PREFETCH', payload: payload });
  };
};

export var withPrefetch = connect(null, function (dispatch) {
  return {
    prefetch: createPrefetchPage(dispatch)
  };
});

var PrefetchLink = Link.withLocation(withPrefetch(function (_ref) {
  var prefetch = _ref.prefetch,
      props = _objectWithoutProperties(_ref, ['prefetch']);

  return React.createElement(Link, _extends({}, props, { onPreload: prefetch }));
}));

PrefetchLink.displayName = 'Prefetcher';
export default PrefetchLink;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL3ByZWZldGNoLWxpbmsuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIkxpbmsiLCJjcmVhdGVQcmVmZXRjaFBhZ2UiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwid2l0aFByZWZldGNoIiwicHJlZmV0Y2giLCJQcmVmZXRjaExpbmsiLCJ3aXRoTG9jYXRpb24iLCJwcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCOztBQUVBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FBWTtBQUFBLFdBQVdDLFNBQVMsRUFBRUMsTUFBTSxjQUFSLEVBQXdCQyxnQkFBeEIsRUFBVCxDQUFYO0FBQUEsR0FBWjtBQUFBLENBQTNCOztBQUVBLE9BQU8sSUFBTUMsZUFBZU4sUUFBUSxJQUFSLEVBQWM7QUFBQSxTQUFhO0FBQ3JETyxjQUFVTCxtQkFBbUJDLFFBQW5CO0FBRDJDLEdBQWI7QUFBQSxDQUFkLENBQXJCOztBQUlQLElBQU1LLGVBQWVQLEtBQUtRLFlBQUwsQ0FDbkJILGFBQWE7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFnQkcsS0FBaEI7O0FBQUEsU0FDWCxvQkFBQyxJQUFELGVBQVVBLEtBQVYsSUFBaUIsV0FBV0gsUUFBNUIsSUFEVztBQUFBLENBQWIsQ0FEbUIsQ0FBckI7O0FBTUFDLGFBQWFHLFdBQWIsR0FBMkIsWUFBM0I7QUFDQSxlQUFlSCxZQUFmIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL3ByZWZldGNoLWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuXG5jb25zdCBjcmVhdGVQcmVmZXRjaFBhZ2UgPSBkaXNwYXRjaCA9PiBwYXlsb2FkID0+IGRpc3BhdGNoKHsgdHlwZTogJ0NNU19QUkVGRVRDSCcsIHBheWxvYWQgfSk7XG5cbmV4cG9ydCBjb25zdCB3aXRoUHJlZmV0Y2ggPSBjb25uZWN0KG51bGwsIGRpc3BhdGNoID0+ICh7XG4gIHByZWZldGNoOiBjcmVhdGVQcmVmZXRjaFBhZ2UoZGlzcGF0Y2gpLFxufSkpO1xuXG5jb25zdCBQcmVmZXRjaExpbmsgPSBMaW5rLndpdGhMb2NhdGlvbihcbiAgd2l0aFByZWZldGNoKCh7IHByZWZldGNoLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPExpbmsgey4uLnByb3BzfSBvblByZWxvYWQ9e3ByZWZldGNofSAvPlxuICApKSxcbik7XG5cblByZWZldGNoTGluay5kaXNwbGF5TmFtZSA9ICdQcmVmZXRjaGVyJztcbmV4cG9ydCBkZWZhdWx0IFByZWZldGNoTGluaztcbiJdfQ==

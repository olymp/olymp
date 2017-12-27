import { immutable, withDynamicRedux } from 'olymp-redux';

var defaultState = {};
export var ADD = 'LIGHTBOX_ADD';
export var REMOVE = 'LIGHTBOX_REMOVE';

var name = 'lightbox';
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case ADD:
      return immutable(state).push(action.payload.gallery, action.payload.image).value();
    case REMOVE:
      return immutable(state).set(action.payload.gallery, state[action.payload.gallery].filter(function (image) {
        return image.ref !== action.payload.image;
      })).value();
    default:
      return state;
  }
};

export var lightboxActions = function lightboxActions(dispatch) {
  return {
    addToLightbox: function addToLightbox(image) {
      var gallery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'images';
      return dispatch({
        type: ADD,
        payload: { image: image, gallery: gallery }
      });
    },
    removeFromLightbox: function removeFromLightbox(image) {
      var gallery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'images';
      return dispatch({
        type: REMOVE,
        payload: { image: image, gallery: gallery }
      });
    }
  };
};

export default withDynamicRedux({
  name: name,
  reducer: reducer
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2xpZ2h0Ym94LXJlZHV4LmVzNiJdLCJuYW1lcyI6WyJpbW11dGFibGUiLCJ3aXRoRHluYW1pY1JlZHV4IiwiZGVmYXVsdFN0YXRlIiwiQUREIiwiUkVNT1ZFIiwibmFtZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwdXNoIiwicGF5bG9hZCIsImdhbGxlcnkiLCJpbWFnZSIsInZhbHVlIiwic2V0IiwiZmlsdGVyIiwicmVmIiwibGlnaHRib3hBY3Rpb25zIiwiYWRkVG9MaWdodGJveCIsImRpc3BhdGNoIiwicmVtb3ZlRnJvbUxpZ2h0Ym94Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFULEVBQW9CQyxnQkFBcEIsUUFBNEMsYUFBNUM7O0FBRUEsSUFBTUMsZUFBZSxFQUFyQjtBQUNBLE9BQU8sSUFBTUMsTUFBTSxjQUFaO0FBQ1AsT0FBTyxJQUFNQyxTQUFTLGlCQUFmOztBQUVQLElBQU1DLE9BQU8sVUFBYjtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJMLFlBQXlCO0FBQUEsTUFBWE0sTUFBVzs7QUFDaEQsTUFBSSxDQUFDQSxNQUFELElBQVcsQ0FBQ0EsT0FBT0MsSUFBdkIsRUFBNkI7QUFDM0IsV0FBT0YsS0FBUDtBQUNEO0FBQ0QsVUFBUUMsT0FBT0MsSUFBZjtBQUNFLFNBQUtOLEdBQUw7QUFDRSxhQUFPSCxVQUFVTyxLQUFWLEVBQ0pHLElBREksQ0FDQ0YsT0FBT0csT0FBUCxDQUFlQyxPQURoQixFQUN5QkosT0FBT0csT0FBUCxDQUFlRSxLQUR4QyxFQUVKQyxLQUZJLEVBQVA7QUFHRixTQUFLVixNQUFMO0FBQ0UsYUFBT0osVUFBVU8sS0FBVixFQUNKUSxHQURJLENBRUhQLE9BQU9HLE9BQVAsQ0FBZUMsT0FGWixFQUdITCxNQUFNQyxPQUFPRyxPQUFQLENBQWVDLE9BQXJCLEVBQThCSSxNQUE5QixDQUNFO0FBQUEsZUFBU0gsTUFBTUksR0FBTixLQUFjVCxPQUFPRyxPQUFQLENBQWVFLEtBQXRDO0FBQUEsT0FERixDQUhHLEVBT0pDLEtBUEksRUFBUDtBQVFGO0FBQ0UsYUFBT1AsS0FBUDtBQWZKO0FBaUJELENBckJEOztBQXVCQSxPQUFPLElBQU1XLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFhO0FBQzFDQyxtQkFBZSx1QkFBQ04sS0FBRDtBQUFBLFVBQVFELE9BQVIsdUVBQWtCLFFBQWxCO0FBQUEsYUFDYlEsU0FBUztBQUNQWCxjQUFNTixHQURDO0FBRVBRLGlCQUFTLEVBQUVFLFlBQUYsRUFBU0QsZ0JBQVQ7QUFGRixPQUFULENBRGE7QUFBQSxLQUQyQjtBQU0xQ1Msd0JBQW9CLDRCQUFDUixLQUFEO0FBQUEsVUFBUUQsT0FBUix1RUFBa0IsUUFBbEI7QUFBQSxhQUNsQlEsU0FBUztBQUNQWCxjQUFNTCxNQURDO0FBRVBPLGlCQUFTLEVBQUVFLFlBQUYsRUFBU0QsZ0JBQVQ7QUFGRixPQUFULENBRGtCO0FBQUE7QUFOc0IsR0FBYjtBQUFBLENBQXhCOztBQWFQLGVBQWVYLGlCQUFpQjtBQUM5QkksWUFEOEI7QUFFOUJDO0FBRjhCLENBQWpCLENBQWYiLCJmaWxlIjoiY21zL2Nsb3VkaW5hcnkvbGlnaHRib3gtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbW11dGFibGUsIHdpdGhEeW5hbWljUmVkdXggfSBmcm9tICdvbHltcC1yZWR1eCc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9O1xuZXhwb3J0IGNvbnN0IEFERCA9ICdMSUdIVEJPWF9BREQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRSA9ICdMSUdIVEJPWF9SRU1PVkUnO1xuXG5jb25zdCBuYW1lID0gJ2xpZ2h0Ym94JztcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLnR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREOlxuICAgICAgcmV0dXJuIGltbXV0YWJsZShzdGF0ZSlcbiAgICAgICAgLnB1c2goYWN0aW9uLnBheWxvYWQuZ2FsbGVyeSwgYWN0aW9uLnBheWxvYWQuaW1hZ2UpXG4gICAgICAgIC52YWx1ZSgpO1xuICAgIGNhc2UgUkVNT1ZFOlxuICAgICAgcmV0dXJuIGltbXV0YWJsZShzdGF0ZSlcbiAgICAgICAgLnNldChcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5nYWxsZXJ5LFxuICAgICAgICAgIHN0YXRlW2FjdGlvbi5wYXlsb2FkLmdhbGxlcnldLmZpbHRlcihcbiAgICAgICAgICAgIGltYWdlID0+IGltYWdlLnJlZiAhPT0gYWN0aW9uLnBheWxvYWQuaW1hZ2UsXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgICAudmFsdWUoKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGlnaHRib3hBY3Rpb25zID0gZGlzcGF0Y2ggPT4gKHtcbiAgYWRkVG9MaWdodGJveDogKGltYWdlLCBnYWxsZXJ5ID0gJ2ltYWdlcycpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQURELFxuICAgICAgcGF5bG9hZDogeyBpbWFnZSwgZ2FsbGVyeSB9LFxuICAgIH0pLFxuICByZW1vdmVGcm9tTGlnaHRib3g6IChpbWFnZSwgZ2FsbGVyeSA9ICdpbWFnZXMnKSA9PlxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRSxcbiAgICAgIHBheWxvYWQ6IHsgaW1hZ2UsIGdhbGxlcnkgfSxcbiAgICB9KSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRHluYW1pY1JlZHV4KHtcbiAgbmFtZSxcbiAgcmVkdWNlcixcbn0pO1xuIl19

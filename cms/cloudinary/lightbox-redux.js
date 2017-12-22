import { immutable, withDynamicRedux } from 'olymp';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvbGlnaHRib3gtcmVkdXguZXM2Il0sIm5hbWVzIjpbImltbXV0YWJsZSIsIndpdGhEeW5hbWljUmVkdXgiLCJkZWZhdWx0U3RhdGUiLCJBREQiLCJSRU1PVkUiLCJuYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInB1c2giLCJwYXlsb2FkIiwiZ2FsbGVyeSIsImltYWdlIiwidmFsdWUiLCJzZXQiLCJmaWx0ZXIiLCJyZWYiLCJsaWdodGJveEFjdGlvbnMiLCJhZGRUb0xpZ2h0Ym94IiwiZGlzcGF0Y2giLCJyZW1vdmVGcm9tTGlnaHRib3giXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVQsRUFBb0JDLGdCQUFwQixRQUE0QyxPQUE1Qzs7QUFFQSxJQUFNQyxlQUFlLEVBQXJCO0FBQ0EsT0FBTyxJQUFNQyxNQUFNLGNBQVo7QUFDUCxPQUFPLElBQU1DLFNBQVMsaUJBQWY7O0FBRVAsSUFBTUMsT0FBTyxVQUFiO0FBQ0EsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkwsWUFBeUI7QUFBQSxNQUFYTSxNQUFXOztBQUNoRCxNQUFJLENBQUNBLE1BQUQsSUFBVyxDQUFDQSxPQUFPQyxJQUF2QixFQUE2QjtBQUMzQixXQUFPRixLQUFQO0FBQ0Q7QUFDRCxVQUFRQyxPQUFPQyxJQUFmO0FBQ0UsU0FBS04sR0FBTDtBQUNFLGFBQU9ILFVBQVVPLEtBQVYsRUFDSkcsSUFESSxDQUNDRixPQUFPRyxPQUFQLENBQWVDLE9BRGhCLEVBQ3lCSixPQUFPRyxPQUFQLENBQWVFLEtBRHhDLEVBRUpDLEtBRkksRUFBUDtBQUdGLFNBQUtWLE1BQUw7QUFDRSxhQUFPSixVQUFVTyxLQUFWLEVBQ0pRLEdBREksQ0FFSFAsT0FBT0csT0FBUCxDQUFlQyxPQUZaLEVBR0hMLE1BQU1DLE9BQU9HLE9BQVAsQ0FBZUMsT0FBckIsRUFBOEJJLE1BQTlCLENBQ0U7QUFBQSxlQUFTSCxNQUFNSSxHQUFOLEtBQWNULE9BQU9HLE9BQVAsQ0FBZUUsS0FBdEM7QUFBQSxPQURGLENBSEcsRUFPSkMsS0FQSSxFQUFQO0FBUUY7QUFDRSxhQUFPUCxLQUFQO0FBZko7QUFpQkQsQ0FyQkQ7O0FBdUJBLE9BQU8sSUFBTVcsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQWE7QUFDMUNDLG1CQUFlLHVCQUFDTixLQUFEO0FBQUEsVUFBUUQsT0FBUix1RUFBa0IsUUFBbEI7QUFBQSxhQUNiUSxTQUFTO0FBQ1BYLGNBQU1OLEdBREM7QUFFUFEsaUJBQVMsRUFBRUUsWUFBRixFQUFTRCxnQkFBVDtBQUZGLE9BQVQsQ0FEYTtBQUFBLEtBRDJCO0FBTTFDUyx3QkFBb0IsNEJBQUNSLEtBQUQ7QUFBQSxVQUFRRCxPQUFSLHVFQUFrQixRQUFsQjtBQUFBLGFBQ2xCUSxTQUFTO0FBQ1BYLGNBQU1MLE1BREM7QUFFUE8saUJBQVMsRUFBRUUsWUFBRixFQUFTRCxnQkFBVDtBQUZGLE9BQVQsQ0FEa0I7QUFBQTtBQU5zQixHQUFiO0FBQUEsQ0FBeEI7O0FBYVAsZUFBZVgsaUJBQWlCO0FBQzlCSSxZQUQ4QjtBQUU5QkM7QUFGOEIsQ0FBakIsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L2xpZ2h0Ym94LXJlZHV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW1tdXRhYmxlLCB3aXRoRHluYW1pY1JlZHV4IH0gZnJvbSAnb2x5bXAnO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7fTtcbmV4cG9ydCBjb25zdCBBREQgPSAnTElHSFRCT1hfQUREJztcbmV4cG9ydCBjb25zdCBSRU1PVkUgPSAnTElHSFRCT1hfUkVNT1ZFJztcblxuY29uc3QgbmFtZSA9ICdsaWdodGJveCc7XG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKCFhY3Rpb24gfHwgIWFjdGlvbi50eXBlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERDpcbiAgICAgIHJldHVybiBpbW11dGFibGUoc3RhdGUpXG4gICAgICAgIC5wdXNoKGFjdGlvbi5wYXlsb2FkLmdhbGxlcnksIGFjdGlvbi5wYXlsb2FkLmltYWdlKVxuICAgICAgICAudmFsdWUoKTtcbiAgICBjYXNlIFJFTU9WRTpcbiAgICAgIHJldHVybiBpbW11dGFibGUoc3RhdGUpXG4gICAgICAgIC5zZXQoXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQuZ2FsbGVyeSxcbiAgICAgICAgICBzdGF0ZVthY3Rpb24ucGF5bG9hZC5nYWxsZXJ5XS5maWx0ZXIoXG4gICAgICAgICAgICBpbWFnZSA9PiBpbWFnZS5yZWYgIT09IGFjdGlvbi5wYXlsb2FkLmltYWdlLFxuICAgICAgICAgICksXG4gICAgICAgIClcbiAgICAgICAgLnZhbHVlKCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxpZ2h0Ym94QWN0aW9ucyA9IGRpc3BhdGNoID0+ICh7XG4gIGFkZFRvTGlnaHRib3g6IChpbWFnZSwgZ2FsbGVyeSA9ICdpbWFnZXMnKSA9PlxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERCxcbiAgICAgIHBheWxvYWQ6IHsgaW1hZ2UsIGdhbGxlcnkgfSxcbiAgICB9KSxcbiAgcmVtb3ZlRnJvbUxpZ2h0Ym94OiAoaW1hZ2UsIGdhbGxlcnkgPSAnaW1hZ2VzJykgPT5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRU1PVkUsXG4gICAgICBwYXlsb2FkOiB7IGltYWdlLCBnYWxsZXJ5IH0sXG4gICAgfSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aER5bmFtaWNSZWR1eCh7XG4gIG5hbWUsXG4gIHJlZHVjZXIsXG59KTtcbiJdfQ==

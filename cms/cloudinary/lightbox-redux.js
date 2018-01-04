'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightboxActions = exports.REMOVE = exports.ADD = undefined;

var _olympRedux = require('olymp-redux');

var defaultState = {};
var ADD = exports.ADD = 'LIGHTBOX_ADD';
var REMOVE = exports.REMOVE = 'LIGHTBOX_REMOVE';

var name = 'lightbox';
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case ADD:
      return (0, _olympRedux.immutable)(state).push(action.payload.gallery, action.payload.image).value();
    case REMOVE:
      return (0, _olympRedux.immutable)(state).set(action.payload.gallery, state[action.payload.gallery].filter(function (image) {
        return image.ref !== action.payload.image;
      })).value();
    default:
      return state;
  }
};

var lightboxActions = exports.lightboxActions = function lightboxActions(dispatch) {
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

exports.default = (0, _olympRedux.withDynamicRedux)({
  name: name,
  reducer: reducer
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2xpZ2h0Ym94LXJlZHV4LmVzNiJdLCJuYW1lcyI6WyJkZWZhdWx0U3RhdGUiLCJBREQiLCJSRU1PVkUiLCJuYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInB1c2giLCJwYXlsb2FkIiwiZ2FsbGVyeSIsImltYWdlIiwidmFsdWUiLCJzZXQiLCJmaWx0ZXIiLCJyZWYiLCJsaWdodGJveEFjdGlvbnMiLCJhZGRUb0xpZ2h0Ym94IiwiZGlzcGF0Y2giLCJyZW1vdmVGcm9tTGlnaHRib3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxlQUFlLEVBQXJCO0FBQ08sSUFBTUMsb0JBQU0sY0FBWjtBQUNBLElBQU1DLDBCQUFTLGlCQUFmOztBQUVQLElBQU1DLE9BQU8sVUFBYjtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJMLFlBQXlCO0FBQUEsTUFBWE0sTUFBVzs7QUFDaEQsTUFBSSxDQUFDQSxNQUFELElBQVcsQ0FBQ0EsT0FBT0MsSUFBdkIsRUFBNkI7QUFDM0IsV0FBT0YsS0FBUDtBQUNEO0FBQ0QsVUFBUUMsT0FBT0MsSUFBZjtBQUNFLFNBQUtOLEdBQUw7QUFDRSxhQUFPLDJCQUFVSSxLQUFWLEVBQ0pHLElBREksQ0FDQ0YsT0FBT0csT0FBUCxDQUFlQyxPQURoQixFQUN5QkosT0FBT0csT0FBUCxDQUFlRSxLQUR4QyxFQUVKQyxLQUZJLEVBQVA7QUFHRixTQUFLVixNQUFMO0FBQ0UsYUFBTywyQkFBVUcsS0FBVixFQUNKUSxHQURJLENBRUhQLE9BQU9HLE9BQVAsQ0FBZUMsT0FGWixFQUdITCxNQUFNQyxPQUFPRyxPQUFQLENBQWVDLE9BQXJCLEVBQThCSSxNQUE5QixDQUNFO0FBQUEsZUFBU0gsTUFBTUksR0FBTixLQUFjVCxPQUFPRyxPQUFQLENBQWVFLEtBQXRDO0FBQUEsT0FERixDQUhHLEVBT0pDLEtBUEksRUFBUDtBQVFGO0FBQ0UsYUFBT1AsS0FBUDtBQWZKO0FBaUJELENBckJEOztBQXVCTyxJQUFNVyw0Q0FBa0IsU0FBbEJBLGVBQWtCO0FBQUEsU0FBYTtBQUMxQ0MsbUJBQWUsdUJBQUNOLEtBQUQ7QUFBQSxVQUFRRCxPQUFSLHVFQUFrQixRQUFsQjtBQUFBLGFBQ2JRLFNBQVM7QUFDUFgsY0FBTU4sR0FEQztBQUVQUSxpQkFBUyxFQUFFRSxZQUFGLEVBQVNELGdCQUFUO0FBRkYsT0FBVCxDQURhO0FBQUEsS0FEMkI7QUFNMUNTLHdCQUFvQiw0QkFBQ1IsS0FBRDtBQUFBLFVBQVFELE9BQVIsdUVBQWtCLFFBQWxCO0FBQUEsYUFDbEJRLFNBQVM7QUFDUFgsY0FBTUwsTUFEQztBQUVQTyxpQkFBUyxFQUFFRSxZQUFGLEVBQVNELGdCQUFUO0FBRkYsT0FBVCxDQURrQjtBQUFBO0FBTnNCLEdBQWI7QUFBQSxDQUF4Qjs7a0JBYVEsa0NBQWlCO0FBQzlCUCxZQUQ4QjtBQUU5QkM7QUFGOEIsQ0FBakIsQyIsImZpbGUiOiJjbXMvY2xvdWRpbmFyeS9saWdodGJveC1yZWR1eC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGltbXV0YWJsZSwgd2l0aER5bmFtaWNSZWR1eCB9IGZyb20gJ29seW1wLXJlZHV4JztcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge307XG5leHBvcnQgY29uc3QgQUREID0gJ0xJR0hUQk9YX0FERCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFID0gJ0xJR0hUQk9YX1JFTU9WRSc7XG5cbmNvbnN0IG5hbWUgPSAnbGlnaHRib3gnO1xuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmICghYWN0aW9uIHx8ICFhY3Rpb24udHlwZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBREQ6XG4gICAgICByZXR1cm4gaW1tdXRhYmxlKHN0YXRlKVxuICAgICAgICAucHVzaChhY3Rpb24ucGF5bG9hZC5nYWxsZXJ5LCBhY3Rpb24ucGF5bG9hZC5pbWFnZSlcbiAgICAgICAgLnZhbHVlKCk7XG4gICAgY2FzZSBSRU1PVkU6XG4gICAgICByZXR1cm4gaW1tdXRhYmxlKHN0YXRlKVxuICAgICAgICAuc2V0KFxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmdhbGxlcnksXG4gICAgICAgICAgc3RhdGVbYWN0aW9uLnBheWxvYWQuZ2FsbGVyeV0uZmlsdGVyKFxuICAgICAgICAgICAgaW1hZ2UgPT4gaW1hZ2UucmVmICE9PSBhY3Rpb24ucGF5bG9hZC5pbWFnZSxcbiAgICAgICAgICApLFxuICAgICAgICApXG4gICAgICAgIC52YWx1ZSgpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsaWdodGJveEFjdGlvbnMgPSBkaXNwYXRjaCA9PiAoe1xuICBhZGRUb0xpZ2h0Ym94OiAoaW1hZ2UsIGdhbGxlcnkgPSAnaW1hZ2VzJykgPT5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBREQsXG4gICAgICBwYXlsb2FkOiB7IGltYWdlLCBnYWxsZXJ5IH0sXG4gICAgfSksXG4gIHJlbW92ZUZyb21MaWdodGJveDogKGltYWdlLCBnYWxsZXJ5ID0gJ2ltYWdlcycpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFLFxuICAgICAgcGF5bG9hZDogeyBpbWFnZSwgZ2FsbGVyeSB9LFxuICAgIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEeW5hbWljUmVkdXgoe1xuICBuYW1lLFxuICByZWR1Y2VyLFxufSk7XG4iXX0=

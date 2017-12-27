import { immutable, withDynamicRedux } from 'olymp-redux';

const defaultState = {};
export const ADD = 'LIGHTBOX_ADD';
export const REMOVE = 'LIGHTBOX_REMOVE';

const name = 'lightbox';
const reducer = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case ADD:
      return immutable(state)
        .push(action.payload.gallery, action.payload.image)
        .value();
    case REMOVE:
      return immutable(state)
        .set(
          action.payload.gallery,
          state[action.payload.gallery].filter(
            image => image.ref !== action.payload.image,
          ),
        )
        .value();
    default:
      return state;
  }
};

export const lightboxActions = dispatch => ({
  addToLightbox: (image, gallery = 'images') =>
    dispatch({
      type: ADD,
      payload: { image, gallery },
    }),
  removeFromLightbox: (image, gallery = 'images') =>
    dispatch({
      type: REMOVE,
      payload: { image, gallery },
    }),
});

export default withDynamicRedux({
  name,
  reducer,
});

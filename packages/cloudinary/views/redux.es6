import { withDynamicRedux, immutable } from 'olymp';
import { connect } from 'react-redux';

const defaultState = {
  tags: [],
  folder: null,
  search: null,
  uploading: [],
  selectedIds: [],
  activeId: null,
  sortByName: false,
};
const name = 'cloudinary';

export const TOGGLE_SORT = 'CLOUDINARY_TOGGLE_SORT';
export const ADD_SELECTION = 'CLOUDINARY_ADD_SELECTION';
export const SET_SELECTION = 'CLOUDINARY_SET_SELECTION';
export const REMOVE_SELECTION = 'CLOUDINARY_REMOVE_SELECTION';
export const SET_ACTIVE = 'CLOUDINARY_SET_ACTIVE';
export const SET_TAGS = 'CLOUDINARY_SET_TAGS';
export const SET_FOLDER = 'CLOUDINARY_SET_FOLDER';
export const SET_SEARCH = 'CLOUDINARY_SET_SEARCH';
export const SET_UPLOADING = 'CLOUDINARY_SET_UPLOADING';

const reducer = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case TOGGLE_SORT:
      return immutable(state)
        .set('sortByName', action.payload)
        .value();
    case SET_ACTIVE:
      return immutable(state)
        .set('activeId', action.payload)
        .value();
    case SET_TAGS:
      return immutable(state)
        .set('tags', action.payload)
        .value();
    case SET_FOLDER:
      return immutable(state)
        .set('folder', action.payload)
        .value();
    case SET_SEARCH:
      return immutable(state)
        .set('search', action.payload)
        .value();
    case SET_UPLOADING:
      return immutable(state)
        .set('uploading', action.payload)
        .value();
    case ADD_SELECTION:
      return immutable(state)
        .push('selectedIds', action.payload)
        .set('activeId', action.payload)
        .value();
    case SET_SELECTION:
      return immutable(state)
        .set('selectedIds', action.payload)
        .set('activeId', action.payload[0])
        .value();
    case REMOVE_SELECTION:
      return immutable(state)
        .set('selectedIds', state.selectedIds.filter(x => x !== action.payload))
        .set('activeId', state.selectedIds[state.selectedIds.length - 1])
        .value();
    default:
      return state;
  }
};

export const withActions = connect(
  ({
    cloudinary: {
      tags,
      folder,
      search,
      uploading,
      sortByName,
      selectedIds,
      activeId,
    },
  }) => ({
    tags,
    folder,
    search,
    uploading,
    sortByName,
    selectedIds,
    activeId,
  }),
  dispatch => ({
    toggleSort: payload => dispatch({ type: TOGGLE_SORT, payload }),
    setActive: payload => dispatch({ type: SET_ACTIVE, payload }),
    addSelection: payload => dispatch({ type: ADD_SELECTION, payload }),
    setSelection: payload => dispatch({ type: SET_SELECTION, payload }),
    removeSelection: payload => dispatch({ type: REMOVE_SELECTION, payload }),
    setTags: payload => dispatch({ type: SET_TAGS, payload }),
    setFolder: payload => dispatch({ type: SET_FOLDER, payload }),
    setSearch: payload => dispatch({ type: SET_SEARCH, payload }),
    setUploading: payload => dispatch({ type: SET_UPLOADING, payload }),
  }),
);

export const withRedux = withDynamicRedux({
  name,
  reducer,
});

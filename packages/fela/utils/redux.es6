import { connect } from 'react-redux';
import { omit } from 'lodash';

const defaultState = {};
export const felaReducer = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case 'FELA_SET':
      return { ...state, [action.payload.id]: action.payload.theme };
    case 'FELA_UNSET':
      return omit(state, action.payload.id);
    default:
      return state;
  }
};

export const setTheme = connect(null, dispatch => ({
  setTheme: (id, theme) => dispatch({ type: 'FELA_SET', payload: { id, theme } }),
  unsetTheme: (id, theme) => dispatch({ type: 'FELA_UNSET', payload: { id, theme } }),
}));

export const getTheme = connect(({ fela }) => ({
  extraTheme: Object.keys(fela).reduce((theme, key) => ({ ...theme, ...fela[key] }), {}),
}));

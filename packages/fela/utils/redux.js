import { connect } from 'react-redux';

const defaultState = {};
export const felaReducer = (state = defaultState, action) => {
  if (!action || !action.type) return state;
  switch (action.type) {
    case 'FELA':
      return action.payload;
    default:
      return state;
  }
};

export const setTheme = connect(null, dispatch => ({
  setTheme: payload => dispatch({ type: 'FELA', payload }),
}));

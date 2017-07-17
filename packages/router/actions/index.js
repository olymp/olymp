export const createPush = dispatch => payload =>
  dispatch({
    type: 'LOCATION',
    replace: false,
    payload,
  });
export const createReplace = dispatch => payload =>
  dispatch({
    type: 'LOCATION',
    replace: true,
    payload,
  });

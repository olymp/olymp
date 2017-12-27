import { immutable, withDynamicRedux } from 'olymp-redux';

const defaultState = {
  prefetch: null,
};
export const PREFETCH = 'CMS_PREFETCH';

const name = 'cms';
const reducer = (state = defaultState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case PREFETCH:
      return immutable(state)
        .set('prefetch', action.payload)
        .value();
    default:
      return state;
  }
};

export const createPrefetchPage = dispatch => payload => dispatch({ type: PREFETCH, payload });

export const withRedux = withDynamicRedux({
  name,
  reducer,
});

// export { Route, Switch, Redirect } from 'react-router-dom';
export { default as Link } from './link';
export { default as NavLink } from './link';
export { default as ScrollToTop } from './scroll-to-top';
export * from './match';
export { default as Prompt } from './prompt';
export { default as Redirect } from './redirect';
export { default as Miss } from './miss';
export * from './decorators';
export * from './history';
export * from './utils';
export * from './redux';

import { createHistory, attachHistory } from './history';
import redux from './redux';
export const plugin = ({ originalUrl } = {}) => ({ dynamicRedux, store }) => {
  if (typeof window !== 'undefined') {
    const options = {};
    if (process.env.IS_ELECTRON) {
      const rawLocation = localStorage.getItem('location');
      if (rawLocation) {
        options.initialEntries = [rawLocation];
      }
    }
    const history = createHistory(options);
    const { middleware, reducer } = redux(history);
    dynamicRedux.inject({
      name: 'location',
      reducer,
      middleware,
    });
    history.listen((location, action) => {
      if (!location.redux) {
        store.dispatch({
          type: 'LOCATION_CORRECT',
          payload: location,
        });
      }
    });
    return {
      context: { history },
    };
  } else {
    const history = createHistory({ initialEntries: [decodeURI(originalUrl)] });
    const { middleware, reducer } = redux(history);
    dynamicRedux.inject({
      name: 'location',
      reducer,
      middleware,
    });
    return {
      context: { history },
    };
  }
};

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
import enhance from './redux';
export const plugin = ({ originalUrl }) => {
  if (typeof window !== 'undefined') {
    const history = createHistory();
    return {
      decorate: enhance(history),
    };
  } else {
    const history = createHistory({ initialEntries: [decodeURI(originalUrl)] });
    return {
      decorate: enhance(history),
    };
  }
};

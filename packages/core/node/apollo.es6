import { Children } from 'react';
import * as ReactDOM from 'react-dom/server';

const assign = require('object-assign');

export function walkTree(element, context, visitor) {
  const Component = element.type;
  if (typeof Component === 'function') {
    const props = assign({}, Component.defaultProps, element.props);
    let childContext = context;
    let child = void 0;
    if (Component.prototype && Component.prototype.isReactComponent) {
      var _component = Component;
      const instance_1 = new _component(props, context);
      instance_1.props = instance_1.props || props;
      instance_1.context = instance_1.context || context;
      instance_1.setState = function (newState) {
        instance_1.state = assign({}, instance_1.state, newState);
      };
      if (instance_1.componentWillMount) {
        instance_1.componentWillMount();
      }
      if (instance_1.getChildContext) {
        childContext = assign({}, context, instance_1.getChildContext());
      }
      if (visitor(element, instance_1, context) === false) {
        return;
      }
      child = instance_1.render();
    } else {
      if (visitor(element, null, context) === false) {
        return;
      }
      var _component = Component;
      child = _component(props, context);
    }
    if (child && Array.isArray(child)) {
      child.forEach(item => walkTree(item, context, visitor));
    } else if (child) {
      walkTree(child, childContext, visitor);
    }
  } else if (Array.isArray(element)) {
    element.forEach(item => walkTree(item, context, visitor));
  } else {
    if (visitor(element, null, context) === false) {
      return;
    }
    if (element.props && element.props.children) {
      Children.forEach(element.props.children, (child) => {
        if (child) {
          walkTree(child, context, visitor);
        }
      });
    }
  }
}
function getQueriesFromTree(_a, fetchRoot) {
  let rootElement = _a.rootElement,
    _b = _a.rootContext,
    rootContext = _b === void 0 ? {} : _b;
  if (fetchRoot === void 0) {
    fetchRoot = true;
  }
  const queries = [];
  walkTree(rootElement, rootContext, (element, instance, context) => {
    const skipRoot = !fetchRoot && element === rootElement;
    if (instance && typeof instance.fetchData === 'function' && !skipRoot) {
      const query = instance.fetchData();
      if (query) {
        queries.push({ query, element, context });
        return false;
      }
    }
  });
  return queries;
}
export function getDataFromTree(rootElement, rootContext, fetchRoot) {
  if (rootContext === void 0) {
    rootContext = {};
  }
  if (fetchRoot === void 0) {
    fetchRoot = true;
  }
  const queries = getQueriesFromTree({ rootElement, rootContext }, fetchRoot);

  if (!queries.length) {
    return Promise.resolve();
  }
  const errors = [];
  const mappedQueries = queries.map((_a) => {
    let query = _a.query,
      element = _a.element,
      context = _a.context;
    return query.then(_ => getDataFromTree(element, context, false)).catch(e => errors.push(e));
  });
  return Promise.all(mappedQueries).then((_) => {
    if (errors.length > 0) {
      const error =
        errors.length === 1
          ? errors[0]
          : new Error(`${errors.length} errors were thrown when executing your GraphQL queries.`);
      error.queryErrors = errors;
      console.error(error);
      throw error;
    }
  });
}
export function renderToStringWithData(component) {
  return getDataFromTree(component).then(() => ReactDOM.renderToString(component));
}
export function cleanupApolloState(apolloState) {
  for (const queryId in apolloState.queries) {
    const fieldsToNotShip = ['minimizedQuery', 'minimizedQueryString'];
    for (let _i = 0, fieldsToNotShip_1 = fieldsToNotShip; _i < fieldsToNotShip_1.length; _i++) {
      const field = fieldsToNotShip_1[_i];
      delete apolloState.queries[queryId][field];
    }
  }
}
// # sourceMappingURL=server.js.map

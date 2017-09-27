import React, { createElement } from 'react';
import { gql, graphql, unflatten } from 'olymp-utils';
import { withPropsOnChange, compose } from 'recompose';
import { Route } from 'olymp-router';
import { queryPages } from './gql';
import { get, upperFirst, lowerFirst, orderBy, sortBy, groupBy } from 'lodash';

// interpolate a string value using props
const interpolate = (value, propsOrFunc) => {
  if (typeof value !== 'string') {
    return value;
  }
  if (value.indexOf('{') === -1) {
    return value;
  }
  return value.replace(
    /\{\{?\:?(.+?)\}?\}/g,
    (m, v) => (typeof propsOrFunc === 'function' ? propsOrFunc(v, v) : get(propsOrFunc, v, v)),
  );
};

export const withNavigation = compose(
  queryPages,
  withPropsOnChange(['pageList'], ({ pageList, data }) => {
    if (!pageList) {
      return {
        isNavigationLoading: true,
        navigation: [],
        flatNavigation: [],
      };
    }
    let loading = false;
    const flatNavigation = [];
    const navigation = unflatten(pageList, {
      pathProp: 'pathname',
      sort: (children, parent) => {
        const newChildren = children.reduce((state, child) => {
          const pageData = data[`nav_${child.id}`];
          if (pageData) {
            loading = pageData.loading;
            (pageData.items || []).forEach((item) => {
              const slug = child.slug ? interpolate(child.slug, item) : item.slug;
              state.push({
                ...child,
                pageId: child.id,
                bindingId: item.id,
                bindingObj: item,
                slug,
                name: item.name,
                id: item.id,
              });
            });
          } else {
            state.push(child);
          }
          return state;
        }, []);
        if (!parent || !parent.sorting) {
          return orderBy(newChildren, ['order'], ['asc']);
        }
        const sortIndex = parent.sorting;
        return sortBy(newChildren, [
          (o) => {
            const index = sortIndex.indexOf(o.id);
            if (index === -1) {
              return 99;
            }
            return index;
          },
        ]);
      },
      setPath: (current, { slug, ...rest }) => {
        const pathname = `${current || ''}${slug || ''}`.replace('//', '/');
        flatNavigation.push({ ...rest, slug, pathname });
        return pathname;
      },
    });
    return {
      isNavigationLoading: data.loading,
      navigation,
      flatNavigation,
    };
  }),
);

// DataRoute: Wrap pages with `binding` to their data items
let cache = {};
let lastType;
export const DataRoute = ({ binding, component, ...rest }) => {
  if (!binding || !binding.type) {
    return createElement(component || Route, rest);
  }
  const { type, fields, query } = binding;
  const key = `route-${type}-${fields || 'id name slug'}`;
  if (lastType !== (component || Route)) {
    // TODO better way to wipe cache
    cache = {};
    lastType = component || Route;
  }
  if (!cache[key]) {
    cache[key] = withData(component || Route, { fields, type });
  }
  return createElement(cache[key], rest);
};

// Helper for DataRoute, actual decorator
export const withData = (Wrapped, { type, fields }) =>
  graphql(
    gql`
    query ${type || 'page'}($id: String) {
      item: ${type || 'page'}(id: $id) {
        ${fields || 'id name'}
      }
    }
  `,
    {
      options: ({ bindingId }) => ({
        variables: {
          id: bindingId,
        },
      }),
      name: 'nav_data',
    },
  )(({ nav_data, ...rest }) => <Wrapped {...rest} binding={nav_data.item} />);

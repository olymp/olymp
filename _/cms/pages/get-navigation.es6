import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, withPropsOnChange, renderComponent } from 'recompose';
import unflatten from 'olymp-utils/unflatten';
import { get, upperFirst, lowerFirst, orderBy } from 'lodash';
import { queryPages } from './gql/query';

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
    (m, v) =>
      typeof propsOrFunc === 'function'
        ? propsOrFunc(v, v)
        : get(propsOrFunc, v, v),
  );
};

export default Wrapped => {
  const before = compose(
    queryPages,
    withPropsOnChange(['pageList'], ({ pageList, data }) => {
      const deco = pageList.filter(item => item.binding);
      const key = deco.map(x => `${x.id}-${x.binding}`).join('|');
      return {
        navKey: key,
        pageList,
        isNavigationLoading: data.loading,
      };
    }),
    withPropsOnChange(['navKey', 'pageList'], ({ pageList }) => ({
      Component: pageList
        .filter(item => item.binding && item.binding.type)
        .reduce((component, value) => {
          const { type, fields, query = {} } = value.binding;
          const sort = value.sorting
            ? value.sorting.reduce((result, item) => {
                const [c, ...rest] = item.split('');
                result[rest.join('')] = c === '-' ? 'DESC' : 'ASC';
                return result;
              }, {})
            : {};
          return graphql(
            gql`
              query ${lowerFirst(type)}List(
                $query: ${upperFirst(type)}Query,
                $sort: ${upperFirst(type)}Sort
              ) {
                items: ${lowerFirst(type)}List(query: $query, sort: $sort) {
                  ${fields || 'id name slug'}
                }
              }
            `,
            {
              options: () => ({
                variables: {
                  query: { ...query, ...{ state: { eq: 'PUBLISHED' } } },
                  sort,
                },
              }),
              props: ({ ownProps, data }) => ({
                ...ownProps,
                navBindingObj: {
                  ...ownProps.navBindingObj,
                  [value.id]: data,
                },
                isNavigationLoading:
                  ownProps.isNavigationLoading || data.loading,
              }),
            },
          )(component);
        }, after(Wrapped)),
    })),
  );

  const after = withPropsOnChange(
    ['isNavigationLoading', 'pageList'],
    ({ pageList, isNavigationLoading, navBindingObj }) => {
      const flatNavigation = [];
      if (isNavigationLoading) {
        return {
          navigation: [],
          flatNavigation: [],
        };
      }
      const navigation = unflatten(pageList, {
        pathProp: 'pathname',
        sort: (children, parent) => {
          const newChildren = children.reduce((state, child) => {
            const data = navBindingObj && navBindingObj[child.id];
            if (data) {
              (data.items || []).forEach(item => {
                const slug = child.slug
                  ? interpolate(child.slug, item)
                  : item.slug;
                state.push({
                  ...child,
                  pageId: child.id,
                  bindingId: item.id,
                  bindingObj: item,
                  slug,
                  name: item.name,
                  id: `${child.id}--${item.id}`,
                });
              });
            } else {
              state.push(child);
            }
            return state;
          }, []);
          return orderBy(newChildren, ['order'], ['asc']);
        },
        setPath: (current, { slug, ...rest }) => {
          const pathname = `${current || ''}${slug || ''}`.replace('//', '/');
          flatNavigation.push({ ...rest, slug, pathname });
          return pathname;
        },
      });
      return {
        navigation,
        flatNavigation,
      };
    },
  );

  return compose(
    before,
    renderComponent(({ Component, ...rest }) => <Component {...rest} />),
  )(() => null);
};

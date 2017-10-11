import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import unflatten from 'olymp-utils/unflatten';
import { get, upperFirst, lowerFirst, orderBy, sortBy } from 'lodash';
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
    (m, v) => (typeof propsOrFunc === 'function' ? propsOrFunc(v, v) : get(propsOrFunc, v, v)),
  );
};

const NavCache = {};
export const withNavigation = (Wrapped) => {
  // Prepare Data, gather bound navigation items
  const withNavigationPrepare = (Wrapped) => {
    // get PageList
    @queryPages
    class WithNavPrepareInner extends Component {
      render() {
        const { pageList } = this.props;
        const deco = pageList.filter(item => item.binding);
        const key = deco.map(x => `${x.id}-${x.binding}`).join('|');
        if (!NavCache[key]) {
          NavCache[key] = pageList
            .filter(item => item.binding && item.binding.type)
            .reduce((store, value) => {
              const { type, fields, query = {} } = value.binding;
              const sort = value.sorting
                ? value.sorting.reduce((store, item) => {
                  const [c, ...rest] = item.split('');
                  store[rest.join('')] = c === '-' ? 'DESC' : 'ASC';
                  return store;
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
                  name: `nav_${value.id}`,
                  options: () => ({
                    variables: {
                      query: { ...query, ...{ state: { eq: 'PUBLISHED' } } },
                      sort,
                    },
                  }),
                },
              )(store);
            }, Wrapped);
        }
        const Comp = NavCache[key];

        return Comp ? <Comp {...this.props} /> : <Wrapped {...this.props} />;
      }
    }
    return WithNavPrepareInner;
  };

  // Compose Navigation from prepared data
  @withNavigationPrepare
  class WithNavInner extends Component {
    render() {
      const { data } = this.props;
      const pageList = (data && data.pageList) || [];
      const flatNavigation = [];
      let loading = data.loading;

      const navigation = unflatten(pageList, {
        pathProp: 'pathname',
        sort: (children, parent) => {
          const newChildren = children.reduce((state, child) => {
            const data = this.props[`nav_${child.id}`];
            if (data) {
              loading = loading || data.loading;
              (data.items || []).forEach((item) => {
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

      return (
        <Wrapped
          {...this.props}
          isNavigationLoading={loading}
          navigation={!loading ? navigation : []}
          flatNavigation={!loading ? flatNavigation : []}
        />
      );
    }
  }
  return WithNavInner;
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

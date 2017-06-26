import React, { Component, createElement } from 'react';
import { gql, graphql, SimpleRoute, unflatten } from 'olymp';
import { orderBy, sortBy } from 'lodash';
import { queryPages } from './gql';
import { get, upperFirst, lowerFirst } from 'lodash';

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
        : get(propsOrFunc, v, v)
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
        const { items } = this.props;
        const deco = items.filter(item => item.binding);
        const key = deco.map(x => `${x.id}-${x.binding}`).join('|');
        if (!NavCache[key]) {
          NavCache[key] = items
            .filter(item => item.binding && item.binding.type)
            .reduce((store, value) => {
              const { type, fields, query } = value.binding;
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
                  options: () => ({ variables: { query, sort } }),
                }
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
      const items = (data && data.items) || [];
      const flatNavigation = [];
      let loading = true;
      const navigation = unflatten(items, {
        pathProp: 'pathname',
        sort: (children, parent) => {
          const sorting = parent ? parent.sorting || ['+order'] : ['+order'];
          children = children.reduce((state, child) => {
            const data = this.props[`nav_${child.id}`];
            if (data) {
              loading = loading && data.loading;
              (data.items || []).forEach((item) => {
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
                  id: item.id,
                });
              });
            } else {
              state.push(child);
            }
            return state;
          }, []);
          if (sorting.length) {
            const fields = [];
            const directions = [];
            sorting.forEach((sorter) => {
              fields.push(sorter.substr(1));
              directions.push(sorter[0] === '-' ? 'desc' : 'asc');
            });
            children = orderBy(children, fields, directions);
          } else {
            const sortIndex = sorting;
            children = sortBy(children, [
              (o) => {
                const index = sortIndex.indexOf(o.id);
                if (index === -1) {
                  return 99;
                }
                return index;
              },
            ]);
          }
          return children;
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
          loading={loading}
          navigation={!loading ? navigation : []}
          flatNavigation={!loading ? flatNavigation : []}
        />
      );
    }
  }
  return WithNavInner;
};

// DataRoute: Wrap pages with `binding` to their data items
let cache = {};
let lastType;
export const DataRoute = ({ binding, component, ...rest }) => {
  if (!binding || !binding.type) {
    return createElement(component || SimpleRoute, rest);
  }
  const { type, fields, query } = binding;
  const key = `route-${type}-${fields || 'id name slug'}`;
  if (lastType !== (component || SimpleRoute)) {
    // TODO better way to wipe cache
    cache = {};
    lastType = component || SimpleRoute;
  }
  if (!cache[key]) {
    cache[key] = withData(component || SimpleRoute, { fields, type });
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
    }
  )(({ nav_data, ...rest }) => <Wrapped {...rest} binding={nav_data.item} />);

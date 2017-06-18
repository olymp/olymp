import React, { Component, createElement } from 'react';
import { gql, graphql, SimpleRoute, unflatten } from 'olymp';
import { orderBy, sortBy } from 'lodash';
import { queryPages } from './gql';
import { interpolate } from 'hashtax';

const defaultFields = 'id name';
const deserializeBinding = value => {
  // value e.g. 'event id name slug' or 'event'
  if (!value) return {};
  value = value.trim();
  const firstSpace = value.indexOf(' ');
  if (firstSpace === -1) return { type: value, fields: defaultFields }; // no space = only typename
  return {
    type: value.substr(0, firstSpace),
    fields: value.substr(firstSpace),
  };
};

const NavCache = {};
export const withNavigation = Wrapped => {
  // Prepare Data, gather bound navigation items
  const withNavigationPrepare = Wrapped => {
    // get PageList
    @queryPages
    class WithNavPrepareInner extends Component {
      render() {
        const { items } = this.props;
        const deco = items.filter(item => item.binding);
        const key = deco.map(x => `${x.id}-${x.binding}`).join('|');
        if (!NavCache[key]) {
          NavCache[key] = items
            .filter(item => item.binding)
            .reduce((store, value) => {
              const { type, fields } = deserializeBinding(value.binding);
              return graphql(
                gql`
              query ${type}List {
                items: ${type}List {
                  ${fields}
                }
              }
            `,
                { name: `nav_${value.id}` }
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
      const newProps = {};
      const items = (data && data.items) || [];
      const flatNavigation = [];
      const navigation = unflatten(items, {
        pathProp: 'pathname',
        sort: (children, parent) => {
          const sorting = parent ? parent.sorting || '+order' : '+order';
          children = children.reduce((state, child) => {
            const data = this.props[`nav_${child.id}`];
            if (data) {
              (data.items || []).forEach(item => {
                const slug = child.slug
                  ? interpolate(child.slug, item)
                  : item.slug;
                state.push({
                  ...child,
                  pageId: child.id,
                  bindingId: item.id,
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
          if (sorting[0] === '+' || sorting[0] === '-') {
            const fields = [];
            const directions = [];
            sorting.split(',').forEach(sorter => {
              fields.push(sorter.substr(1));
              directions.push(sorter[0] === '-' ? 'desc' : 'asc');
            });
            children = orderBy(children, fields, directions);
          } else {
            const sortIndex = sorting.split(',');
            children = sortBy(children, [
              o => {
                const index = sortIndex.indexOf(o.id);
                if (index === -1) return 99;
                return index;
              },
            ]);
          }
          return children;
        },
        setPath: (current, { slug, ...rest }) => {
          const pathname = `${current || ''}${slug || ''}`;
          flatNavigation.push({ ...rest, slug, pathname });
          return pathname;
        },
      });
      return (
        <Wrapped
          {...this.props}
          navigation={navigation}
          flatNavigation={flatNavigation}
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
  if (!binding) return createElement(component || SimpleRoute, rest);
  const { type, fields } = deserializeBinding(binding);
  const key = `route-${type}-${fields}`;
  if (lastType !== (component || SimpleRoute)) {
    // TODO better way to wipe cache
    cache = {};
    lastType = component || SimpleRoute;
  }
  if (!cache[key])
    cache[key] = withData(component || SimpleRoute, { fields, type });
  return createElement(cache[key], rest);
};
// Helper for DataRoute, actual decorator
export const withData = (Wrapped, { type, fields, render }) => {
  return graphql(
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
  )(({ nav_data, ...rest }) => {
    return <Wrapped {...rest} binding={nav_data.item} />;
  });
};

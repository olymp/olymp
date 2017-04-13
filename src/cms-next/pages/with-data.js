import React, { Component, createElement } from 'react';
import { gql, graphql, SimpleRoute, unflatten } from 'olymp';
import { orderBy, sortBy } from 'lodash';
import { queryPages } from './gql';

export const withNavigation = Wrapped => {
  @withNavigationPrepare
  class WithNavInner extends Component {
    render() {
      const { data } = this.props;
      const newProps = {};
      const items = (data && data.items) || [];
      const flatNavigation = [];
      const navigation = unflatten(items, {
        pathProp: 'slug',
        sort: (children, parent) => {
          const sorting = parent ? (parent.sorting || '+order') : '+order';
          children = children.reduce((state, child) => {
            const data = this.props[`nav_${child.id}`];
            if (data) {
              (data.items||[]).forEach(item => state.push({ ...child, pageId: child.id, bindingId: item.id, slug: item.slug, name: item.name, id: item.id }))
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
            children = sortBy(children, [o => {
              const index = sortIndex.indexOf(o.id);
              if (index === -1) return 99;
              return index;
            }])
          } return children;
        },
        setPath: (current, { slug, ...rest }) => {
          slug = `${current}${slug}`;
          flatNavigation.push({ ...rest, slug });
          return slug;
        },
      });
      return (
        <Wrapped {...this.props} navigation={navigation} flatNavigation={flatNavigation} />
      );
    }
  }
  return WithNavInner;
}
let NavCache = {  };
export const withNavigationPrepare = Wrapped => {
  @queryPages
  class WithNavPrepareInner extends Component {
    render() {
      const { items } = this.props;
      const deco = items.filter(item => item.binding);
      const key = deco.map(x => `${x.id}-${x.binding}`).join('|');
      if (!NavCache[key]) {
        NavCache[key] = items.filter(item => item.binding).reduce((store, value) => {
          const split = value.binding.split(' ');
          const type = split[0];
          const fields = split.length > 1 ? split[1] : 'id name';
          const field = split.length > 2 ? split[2] : null;
          return graphql(gql`
            query ${type}List {
              items: ${type}List {
                ${fields}
              }
            }
          `, { name: `nav_${value.id}` })(store);
        }, Wrapped);
      }
      const Comp = NavCache[key];
      return Comp ? <Comp {...this.props} /> : <Wrapped {...this.props} />;
    }
  }
  return WithNavPrepareInner;
}

export const withData = (Wrapped, { type, fields, render }) => {
  return graphql(gql`
    query ${(type || 'page')}($id: String) {
      item: ${(type || 'page')}(id: $id) {
        ${fields || 'id name'}
      }
    }
  `, {
    options: ({ bindingId }) => ({
      variables: {
        id: bindingId
      },
    }),
    name: 'nav_data',
  })(({ nav_data, ...rest }) => {
    return (
      <Wrapped {...rest} binding={nav_data.item} />
    );
  });
};

const cache = {};
export const DataRoute = ({ binding, ...rest }) => {
  if (!binding) return <SimpleRoute {...rest} />
  const split = binding.split(' ');
  const type = split[0];
  const fields = split.length > 1 ? split[1] : null;
  const field = split.length > 2 ? split[2] : null;
  const key = `route-${type}-${fields}`;
  if (!cache[key]) cache[key] = withData(SimpleRoute, { fields, type });
  return createElement(cache[key], rest);
};

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { sortBy, get } from 'lodash';
import { getSpecialFields } from './utils';

export default WrappedComponent => {
  @graphql(
    gql`
      query schema {
        schema: __schema {
          types {
            name
            description
            interfaces {
              name
            }
            fields {
              name
              description
              type {
                kind
                name
              }
            }
          }
        }
      }
    `,
  )
  class WithCollectionsComponent extends Component {
    list = () => {
      const { data = {} } = this.props;
      const { schema } = data;

      return schema && schema.types
        ? schema.types.filter(
            x =>
              (x.interfaces || []).filter(
                y =>
                  y.name === 'CollectionType' ||
                  y.name === 'CollectionInterface',
              ).length,
          )
        : [];
    };

    group = (list = []) => {
      const groups = {};
      list.forEach(collection => {
        const group = get(collection, 'specialFields.group');

        if (!groups[group]) {
          groups[group] = [];
        }
        groups[group].push(collection);
      });

      // Collections innerhalb Gruppe sortieren
      Object.keys(groups).forEach(key => {
        groups[key] = sortBy(groups[key], ['specialFields.order', 'name']);
      });

      // Undefined-Gruppe auflösen
      if (groups.undefined) {
        groups.undefined.forEach(collection => {
          const name = get(
            collection,
            get(collection, 'specialFields.label'),
            collection.name,
          );

          if (!groups[name]) {
            groups[name] = [];
          }

          groups[name].push(collection);
        });

        delete groups.undefined;
      }

      // Gruppen sortieren
      const orderedGroups = {};
      Object.keys(groups)
        .sort()
        .forEach(key => {
          orderedGroups[key] = groups[key];
        });

      return orderedGroups;
    };

    render() {
      const { data, ...rest } = this.props;
      let list = sortBy(this.list(), ['order', 'name']);
      list = list.map(collection => getSpecialFields(collection));
      const group = this.group(list);

      return (
        <WrappedComponent
          {...rest}
          collectionList={list}
          collectionTree={group}
        />
      );
    }
  }

  return WithCollectionsComponent;
};

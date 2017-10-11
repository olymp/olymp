import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { sortBy } from 'lodash';
import getDecorators from './decorators/get-decorators';

export default (WrappedComponent) => {
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
    list() {
      const { data = {} } = this.props;
      const { schema } = data;

      return schema && schema.types
        ? schema.types.filter(
          x =>
            (x.interfaces || []).filter(
              y => y.name === 'CollectionType' || y.name === 'CollectionInterface',
            ).length,
        )
        : [];
    }

    group() {
      const { data = {} } = this.props;
      const { schema } = data;
      const collections = this.list();

      if (!schema || !collections.length) {
        return {};
      }

      // Von Collections Attribute (icon, group, order) extrahieren und Collections gruppieren
      const groups = {};
      collections.map(({ name, description }, i) => {
        const attributes = {};
        description.split('\n').forEach((x) => {
          const y = x.split(':');

          if (y.length === 2) {
            attributes[y[0]] = y[1];
          }
        });

        // Attribute verfügbar machen
        collections[i] = {
          ...collections[i],
          ...attributes,
        };

        // Gruppieren
        if (!groups[attributes.group]) {
          groups[attributes.group] = [];
        }
        groups[attributes.group].push(collections[i]);
      });

      // Collections innerhalb Gruppe sortieren
      Object.keys(groups).forEach((key) => {
        groups[key] = sortBy(groups[key], ['order', 'name']);
      });

      // Undefined-Gruppe auflösen
      if (groups.undefined) {
        groups.undefined.forEach((collection) => {
          if (!groups[collection.name]) {
            groups[collection.name] = [];
          }

          groups[collection.name].push(collection);
        });

        delete groups.undefined;
      }

      return groups;
    }

    render() {
      const { data, ...rest } = this.props;
      const list = this.list();
      const group = this.group();

      return (
        <WrappedComponent
          {...rest}
          collectionList={list.map(x => ({ ...x, decorators: getDecorators(x.description) }))}
          collectionTree={group}
        />
      );
    }
  }

  return WithCollectionsComponent;
};

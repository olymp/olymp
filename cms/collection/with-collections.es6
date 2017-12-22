import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { sortBy, get } from 'lodash';
import { compose, withPropsOnChange } from 'recompose';
import { getSpecialFields } from './utils';

const enhance = compose(
  graphql(
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
  ),
  withPropsOnChange(['data'], ({ data }) => ({
    list: sortBy(
      data.schema && data.schema.types
        ? data.schema.types.filter(
            x =>
              (x.interfaces || []).filter(
                y =>
                  y.name === 'CollectionType' ||
                  y.name === 'CollectionInterface',
              ).length,
          )
        : [],
      ['order', 'name'],
    ).map(collection => getSpecialFields(collection)),
  })),
  withPropsOnChange(['list'], ({ list = [] }) => {
    const group = () => {
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

    return {
      group: group(),
    };
  }),
);

export default WrappedComponent => {
  @enhance
  class WithCollectionsComponent extends Component {
    render() {
      const { data, list, group, ...rest } = this.props;

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

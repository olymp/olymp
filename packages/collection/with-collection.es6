import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withApollo, graphql } from 'react-apollo';
import { get, upperFirst } from 'lodash';
import { compose, withPropsOnChange } from 'recompose';
import gql from 'graphql-tag';
import { getSpecialFields } from './utils';

const imageFields = `
id
url
crop
width
height
caption
source
`;

const userFields = `
id
email
token
name
`;

const enhance = compose(
  withApollo,
  graphql(
    gql`
      query getType($name: String!) {
        type: __type(name: $name) {
          name
          description
          fields {
            description
            name
            type {
              description
              kind
              name
              enumValues {
                name
              }
              fields {
                description
                name
                type {
                  description
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
              ofType {
                description
                kind
                name
                enumValues {
                  name
                }
                fields {
                  description
                  name
                  type {
                    description
                    kind
                    name
                    fields {
                      description
                      name
                      type {
                        description
                        kind
                        name
                        ofType {
                          kind
                          name
                        }
                      }
                    }
                    ofType {
                      kind
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      /* eslint-disable */
      options: ({ routeParams = {}, collection, typeName }) => ({
        skip: !!collection,
        variables: {
          name: upperFirst(routeParams.model || typeName),
        },
      }),
    },
  ),
  withPropsOnChange(['data'], ({ data }) => ({
    collection: getSpecialFields(get(data, 'type')),
  })),
  withPropsOnChange(['collection'], ({ collection }) => {
    const getAttributes = (collection = { fields: [] }) =>
      `${collection.fields
        .map(field => {
          if (field.type.kind === 'NON_NULL')
            field = { ...field, type: field.type.ofType };
          if (field.type.kind === 'ENUM' || field.type.kind === 'SCALAR')
            return field.name;
          else if (
            field.type.kind === 'LIST' &&
            field.type.ofType &&
            (field.type.ofType.kind === 'ENUM' ||
              field.type.ofType.kind === 'SCALAR')
          )
            return field.name;
          else if (
            field.type.kind === 'LIST' &&
            field.type.ofType &&
            field.type.ofType.kind === 'OBJECT' &&
            field.type.ofType.fields
          )
            return `${field.name} { ${getAttributes({
              fields: field.type.ofType.fields,
            })} }`;
          else if (field.type.kind === 'OBJECT' && field.type.name === 'Image')
            return `${field.name} { ${imageFields} }`;
          else if (field.type.kind === 'OBJECT' && field.type.name === 'User')
            return `${field.name} { ${userFields} }`;
          else if (field.type.kind === 'OBJECT' && field.type.fields)
            return `${field.name} { ${getAttributes({
              fields: field.type.fields,
            })} }`;
          else if (
            field.type.kind === 'OBJECT' &&
            field.type.name === 'Geocode'
          )
            return `${field.name} { id, streetNumber, route, locality, administrativeAreaLevel1, administrativeAreaLevel2, country, postalCode, formattedAddress, lat, lng, locationType, partialMatch, types }`;
          return '';
        })
        .filter(x => x)
        .join(', ')}`;

    return {
      fieldNames: getAttributes(collection),
    };
  }),
);

export default WrappedComponent => {
  @enhance
  class WithCollectionComponent extends Component {
    static propTypes = {
      client: PropTypes.object,
      fieldNames: PropTypes.string,
      typeName: PropTypes.string,
      includeStamps: PropTypes.bool,
    };

    render() {
      const { data, ...rest } = this.props;

      return <WrappedComponent {...rest} />;
    }
  }
  return WithCollectionComponent;
};

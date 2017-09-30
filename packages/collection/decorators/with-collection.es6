import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withApollo, graphql } from 'react-apollo';
import capitalize from 'lodash/upperFirst';
import gql from 'graphql-tag';

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
export default (WrappedComponent) => {
  @withApollo
  @graphql(
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
          name: capitalize(routeParams.model || typeName),
        },
      }),
    },
  )
  class WithCollectionComponent extends Component {
    static propTypes = {
      client: PropTypes.object,
      fieldNames: PropTypes.string,
      typeName: PropTypes.string,
      includeStamps: PropTypes.bool,
    };
    getAttributes = col => {
      const collection =
        col || (this.props.data && this.props.data.type) || this.props.collection || null;
      return `${collection.fields
        .map(field => {
          if (field.type.kind === 'NON_NULL') field = { ...field, type: field.type.ofType };
          if (field.type.kind === 'ENUM' || field.type.kind === 'SCALAR') return field.name;
          else if (
            field.type.kind === 'LIST' &&
            field.type.ofType &&
            (field.type.ofType.kind === 'ENUM' || field.type.ofType.kind === 'SCALAR')
          )
            return field.name;
          else if (
            field.type.kind === 'LIST' &&
            field.type.ofType &&
            field.type.ofType.kind === 'OBJECT' &&
            field.type.ofType.fields
          )
            return `${field.name} { ${this.getAttributes({
              fields: field.type.ofType.fields,
            })} }`;
          else if (field.type.kind === 'OBJECT' && field.type.name === 'Image')
            return `${field.name} { ${imageFields} }`;
          else if (field.type.kind === 'OBJECT' && field.type.name === 'User')
            return `${field.name} { ${userFields} }`;
          else if (field.type.kind === 'OBJECT' && field.type.fields)
            return `${field.name} { ${this.getAttributes({
              fields: field.type.fields,
            })} }`;
          else if (field.type.kind === 'OBJECT' && field.type.name === 'Geocode')
            return `${field.name} { id, streetNumber, route, locality, administrativeAreaLevel1, administrativeAreaLevel2, country, postalCode, formattedAddress, lat, lng, locationType, partialMatch, types }`;
          return `${field.name} { id, name }`;
        })
        .filter(x => x)
        .join(', ')}`;
    };
    getWithSpecialFields = collection => {
      if (!collection) return;
      const specialFields = {};
      const fields = collection.fields.map(item => {
        const field = { ...item, '@': {} };
        if (!field.description) return field;
        field.description.replace(/\@\w+(\[[0-9]+\])?(\(.+\))?/gi, (match, text, urlId) => {
          if (!match) return;
          let [split0, values] = match.split('(');
          let [name, index = null] = split0.split('[');
          name = name.substr(1);
          if (index) {
            try {
              index = parseInt(index.substr(index, index.length - 1));
            } catch (err) {
              index = null;
            }
          }
          const specialValues = {};
          try {
            values
              .substr(0, values.length - 1)
              .split(',')
              .forEach((x, i) => {
                specialValues[`arg${i}`] = JSON.parse(x);
              });
          } catch (err) {}
          field['@'][name] = specialValues;
          const specialField = {
            ...specialValues,
            field: field.name,
          };

          if (index || index === 0) {
            if (!specialFields[name]) specialFields[name] = [];
            specialFields[name].splice(
              index >= specialFields[name].length ? specialFields[name].length : index,
              0,
              specialField,
            );
          } else {
            specialFields[name] = specialField;
          }
        });
        return field;
      });
      return { ...collection, fields, specialFields };
    };

    render() {
      const { data, ...rest } = this.props;
      const collection = (this.props.data && this.props.data.type) || this.props.collection || null;

      return (
        <WrappedComponent
          {...rest}
          collection={collection && this.getWithSpecialFields(collection)}
          fieldNames={collection && this.getAttributes()}
        />
      );
    }
  }
  return WithCollectionComponent;
};

import React, { Component, PropTypes } from 'react';
import { withApollo, graphql } from 'react-apollo';
import { saveItem, removeItem } from './with-item';
import capitalize from 'lodash/capitalize';
import gql from 'graphql-tag';

const imageFields = `
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
export default WrappedComponent => {
  @withApollo
  @graphql(gql`
    query getType($name: String!) {
      type: __type(name:$name) {
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
  `, { /* eslint-disable */
    options: ({ routeParams = {}, collection, name }) => ({
      skip: !!collection,
      variables: {
        name: capitalize(routeParams.model || name),
      },
    }),
  })
  class WithCollectionComponent extends Component {
    static propTypes = {
      client: PropTypes.object,
      attributes: PropTypes.string,
      name: PropTypes.string,
      includeStamps: PropTypes.bool,
    }
    save = item => {
      return saveItem(item, this.props.name, this.props.client, { id: item.id, attributes: this.getAttributes() });
    }
    remove = id => {
      return removeItem(id, this.props.name, this.props.client, { attributes: this.getAttributes() });
    }
    getAttributes = (col) => {
      const collection = col || this.props.data.type || this.props.collection || null;

      return `${collection.fields.map(field => {
        if (field.type.kind === 'ENUM' || field.type.kind === 'SCALAR') return field.name;
        else if (field.type.kind === 'LIST' && field.type.ofType && (field.type.ofType.kind === 'ENUM' || field.type.ofType.kind === 'SCALAR')) return field.name;
        else if (field.type.kind === 'LIST' && field.type.ofType && field.type.ofType.kind === 'OBJECT' && field.type.ofType.fields) return `${field.name} { ${this.getAttributes({ fields: field.type.ofType.fields })} }`;
        else if (field.type.kind === 'OBJECT' && field.type.name === 'Image') return `${field.name} { ${imageFields} }`;
        else if (field.type.kind === 'OBJECT' && field.type.name === 'User') return `${field.name} { ${userFields} }`;
        else if (field.type.kind === 'OBJECT' && field.type.fields) return `${field.name} { ${this.getAttributes({ fields: field.type.fields })} }`;
        return `${field.name} { id, name }`;
      }).filter(x => x).join(', ')}`;
    }
    render() {
      const { data, ...rest } = this.props;
      const collection = this.props.data.type || this.props.collection || null;
      if (!collection) return null;
      return <WrappedComponent
        {...rest}
        collectionLoading={data.loading}
        collection={collection}
        saveCollectionItem={this.save}
        removeCollectionItem={this.remove}
        attributes={this.getAttributes()}
      />;
    }
  }
  return WithCollectionComponent;
};

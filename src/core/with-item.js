import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { notification } from 'antd';
import gql from 'graphql-tag';
import capitalize from 'lodash/upperFirst';

export const mutateItem = (client, typeName, { attributes }) => props => client.mutate({
  mutation: gql`
    mutation set_${typeName.toLowerCase()}($id:String, $type:OPERATION_TYPE!, $input:${capitalize(typeName)}Input!) {
      ${typeName.toLowerCase()}(id:$id, input:$input, operationType:$type) {
        ${attributes || 'id'}
      }
    }
  `,
  ...props,
});

export const removeItem = (id, typeName, client, { onRemoved, attributes }) =>
  mutateItem(client, typeName, { attributes })({
    variables: {
      id,
      type: 'REMOVE',
      input: {},
    },
    updateQueries: {
      [`${typeName.toLowerCase()}List`]: previousQueryResult => ({
        ...previousQueryResult,
        items: previousQueryResult.items.filter(x => x.id !== id),
      }),
    },
  }).then(({ data }) => {
    notification.success({ message: 'Gelöscht', description: 'Der Eintrag wurde gelöscht!' });
    if (onRemoved) onRemoved(data, this.props);
    return true;
  }).catch((err) => {
    console.error(err);
    notification.error({ message: 'Fehler', description: 'Fehler beim Löschen!' });
    throw err;
  })
;

const strip = (obj) => {
  if (!obj) return;
  if (Array.isArray(obj)) obj.forEach(x => strip(x));
  else if (typeof obj === 'object') {
    delete obj.__typename;
    Object.keys(obj).forEach(x => strip(obj[x]));
  }
};
export const saveItem = (body, typeName, client, { onSaved, attributes, id }) => {
  const input = JSON.parse(JSON.stringify(body));
  strip(input);
  return mutateItem(client, typeName, { attributes })({
    variables: {
      id,
      input,
      type: 'PATCH',
    },
    /* optimisticResponse1: {
     [name]: body,
     },*/
    updateQueries: !id ? {
      [`${typeName.toLowerCase()}List`]: (previousQueryResult, { mutationResult }) => ({
        ...previousQueryResult,
        items: [...previousQueryResult.items, mutationResult.data[typeName]],
      }),
    } : {},
  }).then(({ data }) => {
    notification.success({ message: 'Gespeichert', description: 'Änderungen wurden gespeichert!' });
    if (onSaved) onSaved(data, this.props);
    return data;
  }).catch((err) => {
    console.error(err);
    notification.error({ message: 'Fehler', description: 'Fehler beim Speichern.' });
    throw err;
  });
};

export default ({ attributes, typeName }) => (WrappedComponent) => {
  @withApollo
  class WithItemComponent extends Component {
    static defaultProps = {
      typeName,
      attributes,
    };

    constructor(props) {
      super();
      this.update(props);
    }

    state = {
      isDirty: false,
      saving: false,
      loading: false,
    };

    componentWillReceiveProps(props) {
      this.update(props, this.props);
    }

    componentWillUnmount() {
      this.unmount = true;
    }

    update = (nextProps, lastProps) => {
      let { typeName, client, attributes, initialData, id, slug } = nextProps;
      if (!lastProps || typeName !== lastProps.typeName || attributes !== lastProps.attributes || id !== lastProps.id || slug !== lastProps.slug || (nextProps.data && nextProps.data[typeName] !== lastProps.data[typeName])) {
        if (!attributes || !typeName) return;
        const capitalized = capitalize(typeName);
        if (nextProps.data) {
          this.patchedItem = {};
          this.data = nextProps.data[typeName];
        } else if (id) {
          this.setState({ loading: true });
          client.query({
            query: gql`
              query get_${typeName.toLowerCase()}($id:String!) {
                item: ${typeName.toLowerCase()}(query: { id: {eq: $id} }) {
                  ${attributes}
                }
              }
            `,
            variables: {
              id,
            },
          }).then(({ data }) => {
            this.data = data.item;
            this.patchedItem = { ...initialData, ...this.data };
            this.setState({
              isDirty: false,
              loading: false
            });
          });
        } else if (slug) {
          this.setState({ loading: true });
          client.query({
            query: gql`
              query get_${typeName.toLowerCase()}($slug:String!) {
                item: ${typeName.toLowerCase()}(query: { slug: {eq: $slug} }) {
                  ${attributes}
                }
              }
            `,
            variables: {
              slug,
            },
          }).then(({ data }) => {
            this.data = data.item;
            this.patchedItem = { ...initialData, ...this.data };
            this.setState({
              isDirty: false,
              loading: false
            });
          });
        } else {
          this.patchedItem = { ...initialData };
          this.data = { ...this.patchedItem };
        }
      }
    };
    refetch = (attributes) => {
      this.update({ ...this.props, attributes }, this.props);
    };
    patch = (patch) => {
      if (this.unmount) return;
      this.patchedItem = {
        ...this.patchedItem,
        ...patch,
      };
      this.data = { ...this.data, ...this.patchedItem };
      this.setState({
        isDirty: true,
      });
    };
    save = (data, opt) => {
      const { onSaved, typeName, client, attributes } = this.props;
      this.setState({ saving: true });
      const then = (x) => {
        this.setState({ saving: false });
        return x;
      };
      if (opt && opt.commit === false) {
        return saveItem(data, typeName, client, {
          id: this.data.id,
          onSaved,
          attributes,
        }).then(then).catch(err => {
          this.setState({ saving: false });
          throw err;
        });
      }
      return saveItem(this.data, typeName, client, { id: this.data.id, onSaved, attributes }).then(then).catch(err => {
        this.setState({ saving: false });
        throw err;
      });
    };
    remove = () => {
      const { onRemoved, typeName, client, attributes } = this.props;
      return removeItem(this.data.id, typeName, client, { onRemoved, attributes });
    };

    render() {
      return (
        <WrappedComponent {...this.state} {...this.props} saving={this.state.saving} item={this.data} patch={this.patch} save={this.save} remove={this.remove} />
      );
    }
  }
  return WithItemComponent;
};

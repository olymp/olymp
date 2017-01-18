import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { notification } from 'antd';
import gql from 'graphql-tag';
import capitalize from 'lodash/upperFirst';

export const mutateItem = (client, name, { attributes }) => props => client.mutate({
  mutation: gql`
    mutation set_${name.toLowerCase()}($id:String, $type:OPERATION_TYPE!, $input:${capitalize(name)}Input!) {
      ${name.toLowerCase()}(id:$id, input:$input, operationType:$type) {
        ${attributes || 'id'}
      }
    }
  `,
  ...props,
});

export const removeItem = (id, name, client, { onRemoved, attributes }) =>
  mutateItem(client, name, { attributes })({
    variables: {
      id,
      type: 'REMOVE',
      input: {},
    },
    updateQueries: {
      [`${name.toLowerCase()}List`]: previousQueryResult => ({
        ...previousQueryResult,
        items: previousQueryResult.items.filter(x => x.id !== id),
      }),
    },
  }).then(({ data }) => {
    notification.success({ message: 'Gelöscht', description: 'Der Eintrag wurde gelöscht!' });
    if (onRemoved) onRemoved(data, this.props);
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
export const saveItem = (body, name, client, { onSaved, attributes, id }) => {
  const input = JSON.parse(JSON.stringify(body));
  strip(input);
  return mutateItem(client, name, { attributes })({
    variables: {
      id,
      input,
      type: 'PATCH',
    },
    /* optimisticResponse1: {
     [name]: body,
     },*/
    updateQueries: !id ? {
      [`${name.toLowerCase()}List`]: (previousQueryResult, { mutationResult }) => ({
        ...previousQueryResult,
        items: [...previousQueryResult.items, mutationResult.data[name]],
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

export default ({ attributes, name }) => (WrappedComponent) => {
  @withApollo
  class WithItemComponent extends Component {
    static defaultProps = {
      name,
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
      let { name, client, attributes, initialData, id, slug } = nextProps;
      if (!lastProps || name !== lastProps.name || attributes !== lastProps.attributes || id !== lastProps.id || slug !== lastProps.slug || (nextProps.data && nextProps.data[name] !== lastProps.data[name])) {
        if (!attributes || !name) return;
        const capitalized = capitalize(name);
        if (nextProps.data) {
          this.patchedItem = {};
          this.data = nextProps.data[name];
        } else if (id) {
          this.setState({ loading: true });
          client.query({
            query: gql`
              query get_${name.toLowerCase()}($id:String!) {
                item: ${name.toLowerCase()}(query: { id: {eq: $id} }) {
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
              query get_${name.toLowerCase()}($slug:String!) {
                item: ${name.toLowerCase()}(query: { slug: {eq: $slug} }) {
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
      const { onSaved, name, client, attributes } = this.props;
      this.setState({ saving: true });
      const then = (x) => {
        this.setState({ saving: false });
        return x;
      };
      if (opt && opt.commit === false) {
        return saveItem(data, name, client, {
          id: this.data.id,
          onSaved,
          attributes,
        }).then(then).catch(err => {
          this.setState({ saving: false });
          throw err;
        });
      }
      return saveItem(this.data, name, client, { id: this.data.id, onSaved, attributes }).then(then).catch(err => {
        this.setState({ saving: false });
        throw err;
      });
    };
    remove = () => {
      const { onRemoved, name, client, attributes } = this.props;
      return removeItem(this.data.id, name, client, { onRemoved, attributes });
    };

    render() {
      return (
        <WrappedComponent {...this.state} {...this.props} saving={this.state.saving} item={this.data} patch={this.patch} save={this.save} remove={this.remove} />
      );
    }
  }
  return WithItemComponent;
};

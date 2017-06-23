import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { notification } from 'antd';
import gql from 'graphql-tag';

export default ({ fieldNames, typeName }) => (WrappedComponent) => {
  @graphql(
    gql`
    query ${typeName.toLowerCase()}($id: String!) {
      item: ${typeName.toLowerCase()}(query: { id: {eq: $id} }) {
        ${fieldNames}
      }
    }
  `,
    {
      /* eslint-disable */
      options: ({ id }) => ({
        variables: {
          id,
        },
      }),
    }
  )
  @graphql(gql`
    mutation ${typeName.toLowerCase()}($id: String, $input: ${typeName}Input) {
      item: ${typeName.toLowerCase()}(id: $id, input: $input, type: UPDATE) {
        ${fieldNames}
      }
    }
  `)
  class WithItemComponent extends Component {
    state = { isDirty: false, patched: {} };

    save = () => {
      const { mutate, data } = this.props;
      const input = this.state.patched;
      this.setState({ saving: true });
      return mutate({
        variables: {
          id: data.item ? data.item.id : undefined,
          input,
        },
      })
        .then(item => {
          this.setState({ saving: false, patched: {}, isDirty: false });
          notification.success({
            message: 'Gespeichert',
            description: 'Änderungen wurden gespeichert!',
          });
        })
        .catch(err => {
          this.setState({ saving: false });
          console.error(err);
          notification.error({
            message: 'Fehler',
            description: 'Fehler beim Speichern.',
          });
          throw err;
        });
    };

    patch = fields => {
      const patched = { ...this.state.patched, ...fields };
      this.setState({ isDirty: true, patched });
    };

    render() {
      const { data } = this.props;
      const { patched } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          item={{ ...data.item, ...patched }}
          patch={this.patch}
          save={this.save}
        />
      );
    }
  }
  return WithItemComponent;
};

import React, { Component, PropTypes } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import withCollection from './collection';
import isEqual from 'lodash/isEqual';
import lowerFirst from 'lodash/lowerFirst';
import { withRouter } from '../router';

export default ({ name, state } = {}) => (WrappedComponent) => {
  @withCollection(name || '')
  @withApollo
  @withRouter
  class WithItemsComponent extends Component {
    static propTypes = {
      collection: PropTypes.object, // todo: shape statt object
      client: PropTypes.object, // todo: shape statt object
      onClick: PropTypes.func,
    };

    constructor(props) {
      super(props);
      this.items = null;
      this.state = {
        selectedRowKeys: [],
      };
    }

    componentWillMount() {
      this.update(this.props);
    }

    componentWillReceiveProps(props) {
      this.update(props, this.props);
    }

    componentWillUnmount() {
      if (this.subscription) this.subscription.unsubscribe();
      this.unmount = true;
    }

    setQuery = (query) => {
      this.newQuery = query;
      this.update({ ...this.props, force: true });
      this.forceUpdate();
    }

    update = (nextProps, lastProps) => {
      if (!lastProps || nextProps.typeName !== lastProps.typeName || !isEqual(nextProps.query, lastProps.query)) {
        if (this.subscription) this.subscription.unsubscribe();
        const { client, collection, fieldNames, location, force } = nextProps;
        if (!collection) return;
        const query = this.newQuery || this.props.query;
        this.items = null;
        const queryName = `${lowerFirst(collection.name)}List`;

        let watchQuery;
        if (query) {
          watchQuery = client.watchQuery({
            forceFetch: force,
            query: gql`
              query ${queryName}($query: ${collection.name}Query) {
                items: ${queryName}(query: $query) {
                  ${fieldNames}
                }
              }
            `,
            variables: {
              query,
            },
          });
        } else if (fieldNames.indexOf('state') !== -1) {
          watchQuery = client.watchQuery({
            forceFetch: force,
            query: gql`
              query ${queryName}($state: [DOCUMENT_STATE]) {
                items: ${queryName}(query: {state: {in: $state}}) {
                  ${fieldNames}
                }
              }
            `,
            variables: {
              state: state || (location.query && location.query.state ? location.query.state.split('-') : ['PUBLISHED']),
            },
          });
        } else {
          watchQuery = client.watchQuery({
            forceFetch: force,
            query: gql`
              query ${queryName} {
                items: ${queryName} {
                  ${fieldNames}
                }
              }
            `,
          });
        }
        this.isLoading = true;

        /*this.subscription = watchQuery.subscribe({
          next: ({ data }) => {
            if (this.unmount) return;
            this.items = data.items;
            this.isLoading = false;
            // this.setState({ });
          },
          error: (error) => {
            console.log('there was an error sending the query', error);
          },
        });*/
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} items={this.items} refetch={this.setQuery} query={this.newQuery || this.props.query} isLoading={this.isLoading} />
      );
    }
  }
  return WithItemsComponent;
};

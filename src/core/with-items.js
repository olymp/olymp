import React, { Component, PropTypes } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import withCollection from './with-collection';
import withRouter from './with-router';
import isEqual from 'lodash/isEqual';
import lowerFirst from 'lodash/lowerFirst';

export default ({ attributes, name, state } = {}) => (WrappedComponent) => {
  @withCollection
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
      if (!lastProps || nextProps.collection !== lastProps.collection || !isEqual(nextProps.query, lastProps.query)) {
        if (this.subscription) this.subscription.unsubscribe();
        const { client, collection, attributes, location, force } = nextProps;
        const query = this.newQuery || this.props.query;
        this.items = null;
        const queryName = `${lowerFirst(collection.name)}List`;

        let watchQuery;
        console.log('REFETCH!!', query);
        if (query) {
          watchQuery = client.watchQuery({
            forceFetch: force,
            query: gql`
              query ${queryName}($query: ${collection.name}Query) {
                items: ${queryName}(query: $query) {
                  ${attributes}
                }
              }
            `,
            variables: {
              query,
            },
          });
        } else if (attributes.indexOf('state') !== -1) {
          watchQuery = client.watchQuery({
            forceFetch: force,
            query: gql`
              query ${queryName}($state: [DOCUMENT_STATE]) {
                items: ${queryName}(query: {state: {in: $state}}) {
                  ${attributes}
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
                  ${attributes}
                }
              }
            `,
          });
        }
        this.isLoading = true;

        this.subscription = watchQuery.subscribe({
          next: ({ data }) => {
            if (this.unmount) return;
            this.items = data.items;
            this.isLoading = false;
            this.setState({ });
          },
          error: (error) => {
            console.log('there was an error sending the query', error);
          },
        });
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} items={this.items} refetch={this.setQuery} query={this.newQuery || this.props.query} isLoading={this.isLoading} />
      );
    }
  }
  return WithItemsComponent;
}

import React, { Component, PropTypes } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import withCollection from './with-collection';
import withRouter from './with-router';

export default ({ attributes, name } = {}) => (WrappedComponent) => {
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

    update = (nextProps, lastProps) => {
      if (!lastProps || nextProps.collection !== lastProps.collection) {
        if (this.subscription) this.subscription.unsubscribe();
        const { client, collection, attributes, location } = nextProps;
        this.items = null;

        const query = attributes.indexOf('documentState') !== -1 ? client.watchQuery({
          query: gql`
            query ${collection.name}List($state: [DOCUMENT_STATE]) {
              items: ${collection.name}List(documentState: $state) {
                ${attributes}
              }
            }
          `,
          variables: {
            state: location.query && location.query.state ? location.query.state.split('-') : null,
          },
        }) : client.watchQuery({
          query: gql`
            query ${collection.name}List {
              items: ${collection.name}List {
                ${attributes}
              }
            }
          `,
        });
        this.subscription = query.subscribe({
          next: ({data}) => {
            if (this.unmount) return;
            this.items = data.items;
            this.setState({});
          },
          error: (error) => {
            console.log('there was an error sending the query', error);
          },
        });
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} items={this.items} />
      );
    }
  }
  return WithItemsComponent;
}

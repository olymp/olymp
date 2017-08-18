import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider as FelaProvider } from 'react-fela';
import { ThemeProvider, ThemeStore, createFela } from './utils';
import { Provider } from 'mobx-react';
import { withApollo } from 'react-apollo';

const withStores = WrappedComponent =>
  @withApollo
  class WithStores extends Component {
    static contextTypes = {
      mobxStores: PropTypes.object,
    };

    constructor(props, context) {
      super(props, context);
      const args = { ...props, stores: context.mobxStores };
      this.stores = {
        $theme: new ThemeStore(args),
      };
      Object.keys(this.stores).forEach(key => {
        this.stores[key].client = props.client;
        this.stores[key].stores = this.stores;
        if (this.stores[key].initialize) {
          this.stores[key].initialize();
        }
      });
    }
    render() {
      return (
        <Provider {...this.stores}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  };

export default withStores(({ children }) =>
  <FelaProvider renderer={createFela()}>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </FelaProvider>
);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import { withApollo } from 'react-apollo';
import AuthStore from 'olymp-auth/store';
import { HistoryStore } from 'olymp-router';
import { ThemeStore } from 'olymp-fela';

export default ({ theme }) => WrappedComponent =>
  @withApollo
    class WithStores extends Component {
    static contextTypes = {
      mobxStores: PropTypes.object,
    };

    constructor(props, context) {
      super(props, context);
      const args = { ...props, stores: context.mobxStores };
      this.stores = {
        $history: new HistoryStore(args),
        $auth: new AuthStore(args),
        $theme: new ThemeStore(args),
      };
      console.log(props);
      if (theme) {
        this.stores.$theme.add(theme);
      }
      Object.keys(this.stores).forEach((key) => {
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

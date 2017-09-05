import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, withApollo } from 'react-apollo';
import { createComponent } from 'olymp-fela';
import { Spin } from 'antd';
import gql from 'graphql-tag';

const Spinner = createComponent(
  () => ({
    center: true,
  }),
  p => <Spin {...p} />,
  p => Object.keys(p),
);

const baseAttributes = 'id, name, email, isAdmin, token';
let attributes = baseAttributes;

export const auth = (obj = {}) => (WrappedComponent) => {
  const { extraAttributes, store, waitForUser = true, loader: Loader } = obj;
  if (extraAttributes) {
    attributes = `${baseAttributes}, ${extraAttributes}`;
  }
  const inner = (WrappedComponent) => {
    const InnerComponent = props =>
      (<WrappedComponent
        auth={{
          user: props.data.user,
          loading: props.data.loading,
          ...authMethods(props.client, props.data.refetch, props.data.user, props.data.loading),
        }}
        {...props}
      />);

    return graphql(
      gql`
        query verify {
          user: verify {
            ${attributes}
          }
        }
      `,
      {
        props: ({ ownProps, data }) => {
          if (data.error && typeof localStorage !== 'undefined') {
            localStorage.removeItem('token');
          } else if (!data.loading && !data.user && typeof localStorage !== 'undefined') {
            localStorage.removeItem('token');
          } else if (data.user && data.user.token && typeof localStorage !== 'undefined') {
            localStorage.setItem('token', data.user.token);
          }
          return {
            ...ownProps,
            data,
          };
        },
        // forceFetch: true,
      },
    )(withApollo(InnerComponent));
  };
  class UserProvider extends Component {
    static childContextTypes = {
      auth: PropTypes.object,
    };
    getChildContext() {
      return {
        auth: store || this.props.auth,
      };
    }
    render() {
      const auth = store || this.props.auth;
      if (auth.loading && waitForUser) {
        return Loader ? <Loader /> : <Spinner />;
      }
      return <WrappedComponent auth={store} {...this.props} />;
    }
  }

  if (store) {
    return UserProvider;
  }
  return inner(UserProvider);
};

export default (WrappedComponent) => {
  const withUserRenderer = (props, context) => <WrappedComponent {...context} {...props} />;
  withUserRenderer.contextTypes = {
    auth: PropTypes.object,
  };
  return withUserRenderer;
};

// ///////////////
const authMethods = (client, refetch, user, loading) => ({
  can: (method) => {
    if (loading) {
      return true;
    }
    if (!user) {
      return false;
    }
    if (user.isAdmin) {
      return true;
    }
    if (!user.features) {
      return false;
    }
    return user.features.includes(method);
  },
  isAuthenticated: () => {
    if (!user) {
      return false;
    }
    return true;
  },
  isAdmin: () => {
    if (!user) {
      return false;
    }
    return user.isAdmin;
  },
  invitation: (invitation, id) =>
    client
      .mutate({
        mutation: gql`
          mutation invitation($invitation: InvitationInput) {
            invitation(input: $invitation) {
              id
              name
              email
            }
          }
        `,
        variables: { invitation },
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        // if (refetch) refetch({});
        return data.invitation;
      }),
  save: (user, id) =>
    client
      .mutate({
        mutation: gql`
        mutation user($user: UserInput, $id: String) {
          user(input: $user, id: $id) {
            ${attributes}
          }
        }
      `,
        variables: { user, id: user.id },
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        // if (refetch) refetch({});
        return data.user;
      }),
  logout: () =>
    client
      .mutate({
        mutation: gql`
          mutation logout {
            logout
          }
        `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        localStorage.removeItem('token');
        if (refetch) {
          refetch();
        }
      }),
  forgot: email =>
    client
      .mutate({
        mutation: gql`
        mutation forgot {
          forgot(email:"${email}")
        }
      `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.forgot;
      }),
  reset: (token, password) =>
    client
      .mutate({
        mutation: gql`
        mutation reset {
          reset(token:"${token}", password:"${password}") {
            email
          }
        }
      `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.reset;
      }),
  confirm: token =>
    client
      .mutate({
        mutation: gql`
        mutation confirm {
          confirm(token:"${token}") {
            email
          }
        }
      `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.confirm;
      }),
  login: (email, password, totp) =>
    client
      .mutate({
        mutation: gql`
        mutation login {
          user: login(email:"${email}", password:"${password}"${totp ? `, totp:"${totp}"` : ''}) {
            ${attributes}
          }
        }
      `,
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        const { user } = data;
        localStorage.setItem('token', user.token);
        if (refetch) {
          refetch();
        }
        return user;
      }),
  register: (user, password, token) =>
    client
      .mutate({
        mutation: gql`
        mutation register($user: UserInput, $password: String, $token: String) {
          register(input: $user, password: $password, token: $token) {
            ${attributes}
          }
        }
      `,
        variables: { user, password, token },
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        return data.register;
      }),
  checkToken: key =>
    client
      .mutate({
        query: gql`
        query checkToken {
          checkToken(token:"${key}")
        }
      `,
      })
      .then(({ data }) => data.checkToken),
  totpConfirm: (token, totp) =>
    client
      .mutate({
        mutation: gql`
          mutation totpConfirm($token: String, $totp: String) {
            totpConfirm(token: $token, totp: $totp)
          }
        `,
        variables: { token, totp },
      })
      .then(({ data, errors }) => {
        if (errors) {
          throw errors[0];
        }
        if (!data.totpConfirm) {
          throw new Error('Could not activate TOTP');
        }
        return data.totpConfirm;
      }),
});

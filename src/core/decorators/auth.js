import React, { Component, PropTypes } from 'react';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const baseAttributes = 'id, name, email';
let fieldNames = baseAttributes;

export const auth = obj => (WrappedComponent) => {
  if (obj && obj.extraAttributes) fieldNames = `${baseAttributes}, ${obj.extraAttributes}`;
  const inner = (WrappedComponent) => {
    const component = (props) => {
      const auth = {
        user: props.data.user,
        loading: props.data.loading,
        ...authMethods(props.client, props.data.refetch),
      };
      return <WrappedComponent auth={auth} {...props} />;
    };
    return graphql(
      gql`
        query verify {
          user: verifyCookie {
            ${fieldNames}
          }
        }
      `, {
        // forceFetch: true,
      }
    )(withApollo(component));
  };
  class UserProvider extends Component {
    static childContextTypes = {
      auth: React.PropTypes.object,
    };
    getChildContext() {
      return {
        auth: this.props.auth,
      };
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  } return inner(UserProvider);
};

export default WrappedComponent => {
  class withUserRenderer extends Component {
    static contextTypes = {
      auth: React.PropTypes.object,
    };
    static slate = WrappedComponent.slate;

    render() {
      return (
        <WrappedComponent {...this.context} {...this.props} />
      );
    }
  }

  return withUserRenderer;
};

// ///////////////
const authMethods = (client, refetch) => ({
  logout: () => client.mutate({
    mutation: gql`
        mutation logout {
          logoutCookie
        }
      `,
  }).then(({ data }) => {
    if (refetch) refetch({});
  }),
  forgot: email => client.mutate({
    mutation: gql`
        mutation forgot {
          forgot(email:"${email}")
        }
      `,
  }).then(({ data }) => data.forgot),
  reset: (token, password) => {
    if (typeof localStorage === 'undefined') return;
    return client.mutate({
      mutation: gql`
        mutation reset {
          reset(token:"${token}", password:"${password}")
        }
      `
    }).then(({ data }) => data.reset).catch((err) => {
    });
  },
  login: (email, password) => {
    if (typeof localStorage === 'undefined') return;
    return client.mutate({
      mutation: gql`
        mutation login {
          user: loginCookie(email:"${email}", password:"${password}") {
            ${fieldNames}
          }
        }
      `,
    }).then(({ data }) => {
      const { user } = data;
      if (refetch) refetch({ });
      return user;
    }).catch((err) => {
    });
  },
  register: (user, password) => client.mutate({
    mutation: gql`
        mutation register($user: userInput) {
          register(input: $user, password: "${password}")
        }
      `,
    variables: { user },
  }).then(({ data }) => data.register),
  checkToken: key => client.mutate({
    query: gql`
        query checkToken {
          checkToken(token:"${key}")
        }
      `,
  }).then(({ data }) => data.checkToken),
});

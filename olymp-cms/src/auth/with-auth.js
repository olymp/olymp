import React, { Component, PropTypes } from 'react';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const baseAttributes = 'id, name, email';
let attributes = baseAttributes;

export const auth = (obj) => WrappedComponent => {
  if (obj && obj.extraAttributes) attributes = `${baseAttributes}, ${obj.extraAttributes}`;
  const inner = WrappedComponent => {
    const component = props => {
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
            ${attributes}
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
  const withUserRenderer = (props, context) => (
    <WrappedComponent {...context} {...props} />
  );
  withUserRenderer.contextTypes = {
    auth: React.PropTypes.object,
  };
  return withUserRenderer;
};

/////////////////
const authMethods = (client, refetch) => ({
  logout: () => {
    return client.mutate({
      mutation: gql`
        mutation logout {
          logoutCookie
        }
      `,
    }).then(({ data }) => {
      if (refetch) refetch({});
    });
  },
  forgot: email => {
    return client.mutate({
      mutation: gql`
        mutation forgot {
          forgot(email:"${email}")
        }
      `,
    }).then(({ data }) => {
      return data.forgot;
    });
  },
  reset: (token, password) => {
    if (typeof localStorage === 'undefined') return;
    return client.mutate({
      mutation: gql`
        mutation reset {
          reset(token:"${token}", password:"${password}")
        }
      `
    }).then(({ data }) => {
      return data.reset;
    }).catch(err => {
    });
  },
  login: (email, password) => {
    if (typeof localStorage === 'undefined') return;
    return client.mutate({
      mutation: gql`
        mutation login {
          user: loginCookie(email:"${email}", password:"${password}") {
            ${attributes}
          }
        }
      `,
    }).then(({ data }) => {
      const { user } = data;
      if (refetch) refetch({ });
      return user;
    }).catch(err => {
    });
  },
  register: (user, password) => {
    return client.mutate({
      mutation: gql`
        mutation register($user: userInput) {
          register(input: $user, password: "${password}")
        }
      `, variables: { user },
    }).then(({ data }) => {
      return data.register;
    });
  },
  checkToken: key => {
    return client.mutate({
      query: gql`
        query checkToken {
          checkToken(token:"${key}")
        }
      `,
    }).then(({ data }) => {
      return data.checkToken;
    });
  },
});

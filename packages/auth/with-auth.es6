import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { setAttributes, getAttributes, createLogout } from './redux';

export const auth = (obj = {}) => {
  const { attributes } = obj;
  if (attributes) {
    setAttributes(attributes);
  }
  return graphql(
    gql`
      query verify {
        user: verify {
          ${getAttributes()}
        }
      }
    `,
    {
      options: props => ({
        // skip: true,
      }),
    },
  );
};

export default connect(({ auth }) => ({ auth }), dispatch => ({ logout: createLogout(dispatch) }));

import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const baseAttributes = 'id, name, email, isAdmin, token';
let attributes = baseAttributes;

export const auth = (obj = {}) => {
  const { extraAttributes, store, waitForUser = true, loader: Loader } = obj;
  if (extraAttributes) {
    attributes = `${baseAttributes}, ${extraAttributes}`;
  }
  return graphql(
    gql`
      query verify {
        user: verify {
          ${attributes}
        }
      }
    `,
  );
};

export default connect(({ auth }) => ({ user: auth.user }));

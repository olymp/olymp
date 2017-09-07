import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const baseAttributes = 'id, name, email, isAdmin, token';
let attributes = baseAttributes;

export const auth = (obj = {}) => {
  const { extraAttributes } = obj;
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
    {
      options: props => ({
        // skip: true,
      }),
    },
  );
};

export default connect(({ auth }) => ({ auth }));

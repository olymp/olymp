import { withContext } from 'recompose';
import PropTypes from 'prop-types';
import Auth0 from './auth0';

const auth = new Auth0();
export default withContext(
  {
    auth: PropTypes.object,
  },
  () => ({
    auth,
  }),
);

import PropTypes from 'prop-types';
import { compose, getContext } from 'recompose';

export default compose(
  getContext({
    schema: PropTypes.object,
    renderNode: PropTypes.func,
  }),
);

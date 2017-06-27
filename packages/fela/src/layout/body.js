import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';

const Body = createComponent(
  ({ affix }) => ({
    flex: 1,
    overflowY: affix && 'auto',
  }),
  WithContainer,
  ({ affix, ...p }) => Object.keys(p)
);
Body.displayName = 'Layout.Body';
Body.propTypes = {
  container: PropTypes.bool,
  affix: PropTypes.bool,
};
Body.defaultProps = {
  container: false,
  affix: false,
};

export default Body;
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';

const Header = createComponent(
  () => ({
    flex: 'none',
  }),
  WithContainer,
  ({ affix, ...p }) => Object.keys(p)
);
Header.displayName = 'Layout.Header';
Header.propTypes = {
  container: PropTypes.bool,
};
Header.defaultProps = {
  container: false,
};

export default Header;

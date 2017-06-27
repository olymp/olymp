import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';

const Footer = createComponent(
  () => ({
    flexShrink: 0,
  }),
  WithContainer,
  p => Object.keys(p)
);
Footer.displayName = 'Layout.Footer';
Footer.propTypes = {
  container: PropTypes.bool,
};
Footer.defaultProps = {
  container: false,
};

export default Footer;

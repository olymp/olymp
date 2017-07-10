import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';

const Body = createComponent(
  ({ affix }) => ({
    flex: '1 1 0%',
    display: affix && 'flex',
    overflowY: affix && 'auto',
    flexDirection: affix && 'column',
    ifSmallDown: {
      '-webkit-overflow-scrolling': 'touch',
      overflowY: affix && 'scroll',
    },
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

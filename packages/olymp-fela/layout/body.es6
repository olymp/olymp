import React from 'react';
import PropTypes from 'prop-types';
import { ScrollToTop } from 'olymp-router';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';

const Body = createComponent(
  ({ affix }) => ({
    ...(!affix
      ? {
        hasFlex: {
          flex: '1 1 auto',
        },
      }
      : {
        hasFlex: {
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
        },
        height: '100%',
        overflowY: 'auto',
        ifSmallDown: {
          '-webkit-overflow-scrolling': 'touch',
          overflowY: 'scroll',
        },
      }),
  }),
  props => (
    <ScrollToTop>
      <WithContainer {...props} />
    </ScrollToTop>
  ),
  ({ affix, ...p }) => Object.keys(p),
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

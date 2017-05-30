import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'olymp';
import { Grid, Navbar } from '../index';

const SuperNav = styled(({ theme, inverse, vertically, right }) => ({
  float: right ? 'right' : 'none',
  minWidth: vertically ? '100%' : 'auto',
  zIndex: 1,
  onAfter: {
    content: '.',
    clear: 'both',
    display: 'block',
    visibility: 'hidden',
    height: 0,
  }
}), ({ className, pages, ...rest }) => (
  <Grid size={pages.length}>
    {pages.map(({ id, name, children }, i) => (
      <Grid.Item mini={1} key={id || i}>
        <Navbar.Item>{name}</Navbar.Item>
        <ul>
          {children.map(({ id, name }, i) => <li key={id || i}>{name}</li>)}
        </ul>
      </Grid.Item>
    ))}
  </Grid>
), p => p);
SuperNav.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** aligns nav-items right */
  right: PropTypes.bool,
};
SuperNav.defaultProps = {
  pages: [],
  inverse: false,
};
export default SuperNav;

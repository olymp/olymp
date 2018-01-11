import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import Toggler from './toggler';
import Container from '../container';
import Nav from './nav';
import Item from './item';
import Sub from './sub';
import Brand from './brand';

const renderItem = props => <Item {...props} />;
const renderNav = props => <Nav {...props} sub />;
const WithContainer = ({ container, ...rest }) =>
  (container ? <Container {...rest} /> : <div {...rest} />);

const Inner = createComponent(
  ({ vertically }) => ({
    clearfix: true,
    hasFlex: {
      display: 'flex',
      flexDirection: vertically ? 'column' : 'row',
      alignItems: vertically ? 'flex-start' : 'stretch',
    },
    ifMini: {
      flexDirection: 'column',
    },
  }),
  'div',
  ['className'],
);

const Navbar = createComponent(
  ({ theme, inverse, vertically, full }) => ({
    backgroundColor: inverse && theme.color,
    background: inverse && theme.color,
    borderRadius: !full && theme.borderRadius,
    margin: !full && theme.space2,
    width: full && '100%',
    minWidth: vertically && 200,
    ifMini: {
      margin: theme.space0,
    },
  }),
  ({
    className,
    brand,
    children,
    pages,
    container,
    inverse,
    vertically,
    toggled,
    onToggle,
    toggleComponent,
    ...props
  }) => (
    <nav className={className}>
      <WithContainer container={container}>
        <Inner vertically={vertically}>
          {brand && (
            <Brand inverse={inverse} vertically={vertically}>
              {brand}
            </Brand>
          )}

          {pages && !!pages.length ? (
            <Toggler
              {...props}
              toggled={toggled}
              onToggle={onToggle}
              toggleComponent={toggleComponent}
              inverse={inverse}
              vertically={vertically}
              pages={pages}
              renderItem={renderItem}
              renderNav={renderNav}
            >
              <Sub />
            </Toggler>
          ) : null}

          {Children.map(children, child =>
            cloneElement(child, {
              ...props,
              inverse,
              vertically,
              renderItem,
              renderNav,
            }),
          )}
        </Inner>
      </WithContainer>
    </nav>
  ),
  p => Object.keys(p),
);
Navbar.displayName = 'Navbar';
Navbar.propTypes = {
  /** node as brand */
  brand: PropTypes.node,
  /** render nav vertically instead horizontally */
  vertically: PropTypes.bool,
  /** inverse theme with primary-color background */
  inverse: PropTypes.bool,
  /** full size width without margin */
  full: PropTypes.bool,
  /** nav-items will fill empty space on full length */
  fill: PropTypes.bool,
};
Navbar.defaultProps = {
  brand: undefined,
  vertically: false,
  inverse: false,
  full: false,
  fill: false,
  toggled: false,
};
export default Navbar;

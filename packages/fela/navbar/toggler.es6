import React, { Children, cloneElement } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import createComponent from '../utils/create-component';

const Div = ({ toggled, onToggle, ...props }) => (
  <div {...props} onClick={onToggle} />
);

const Button = createComponent(
  ({ theme, toggled, inverse, size = 20 }) => ({
    position: 'absolute',
    top: theme.space4,
    right: theme.space4,
    // float: 'right',
    // padding: theme.space2,
    // margin: theme.space3,
    width: Math.round(size * 1.3),
    height: size,
    cursor: 'pointer',
    ifSmallUp: {
      display: 'none',
    },
    '> span': {
      display: 'block',
      position: 'absolute',
      height: Math.round(size / 6),
      borderRadius: Math.round(size / 6),
      width: '100%',
      background: inverse ? theme.light : theme.color,
      left: 0,
      transform: 'rotate(0deg)',
      transition: '.25s ease-in-out',
      ':nth-child(1)': {
        top: toggled ? Math.round(size / 3) : 0,
        width: toggled && '0%',
        left: toggled && '50%',
      },
      ':nth-child(2)': {
        top: Math.round(size / 3),
        transform: toggled && 'rotate(45deg)',
      },
      ':nth-child(3)': {
        top: Math.round(size / 3),
        transform: toggled && 'rotate(-45deg)',
      },
      ':nth-child(4)': {
        top: toggled ? Math.round(size / 3) : Math.round(size / 3) * 2,
        width: toggled && '0%',
        left: toggled && '50%',
      },
    },
  }),
  ({ className, onToggle, toggled, toggleComponent: Comp }) => (
    <Comp className={className} onToggle={onToggle} toggled={toggled}>
      <span />
      <span />
      <span />
      <span />
    </Comp>
  ),
  p => Object.keys(p),
);

const Container = createComponent(
  ({ toggled }) => ({
    width: '100%',
    ifMini: {
      '> div:nth-child(2)': {
        clear: 'both',
        transform: toggled ? 'scaleY(1)' : 'scaleY(0)',
        maxHeight: toggled ? 500 : 0,
        overflow: 'auto',
        transformOrigin: 'top',
        transition: 'all 0.25s ease-in-out',
      },
    },
  }),
  'div',
  [],
);

const Toggler = ({
  className,
  children,
  toggled,
  toggleComponent,
  onToggle,
  ...props
}) => (
  <Container className={cn(className, 'o-nav-toggle')} toggled={toggled}>
    <Button
      toggled={toggled}
      toggleComponent={toggleComponent}
      onToggle={onToggle}
    />
    {Children.map(children, child => cloneElement(child, props))}
  </Container>
);
Toggler.propTypes = {
  toggleComponent: PropTypes.node,
  onToggle: PropTypes.func,
  toggled: PropTypes.bool,
};
Toggler.defaultProps = {
  toggleComponent: Div,
  onToggle: undefined,
  toggled: false,
};
Toggler.displayName = 'Toggler';
export default Toggler;

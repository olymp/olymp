import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const Container = createComponent(
  ({ open }) => ({
    width: '100%',
    ifMini: {
      '> div:nth-child(2)': {
        clear: 'both',
        transform: open ? 'scaleY(1)' : 'scaleY(0)',
        maxHeight: open ? 500 : 0,
        overflow: 'auto',
        transformOrigin: 'top',
        transition: 'all 0.25s ease-in-out',
      },
    },
  }),
  'div',
  p => Object.keys(p)
);

const Button = createComponent(
  ({ theme, open, inverse, size = 20 }) => ({
    float: 'right',
    padding: theme.space2,
    margin: theme.space3,
    width: Math.round(size * 1.3),
    height: size,
    position: 'relative',
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
        top: open ? Math.round(size / 3) : 0,
        width: open && '0%',
        left: open && '50%',
      },
      ':nth-child(2)': {
        top: Math.round(size / 3),
        transform: open && 'rotate(45deg)',
      },
      ':nth-child(3)': {
        top: Math.round(size / 3),
        transform: open && 'rotate(-45deg)',
      },
      ':nth-child(4)': {
        top: open ? Math.round(size / 3) : Math.round(size / 3) * 2,
        width: open && '0%',
        left: open && '50%',
      },
    },
  }),
  ({ className, onClick }) =>
    (<div className={className} onClick={onClick}>
      <span />
      <span />
      <span />
      <span />
    </div>),
  p => Object.keys(p)
);

class Toggler extends Component {
  state = { open: false };

  render() {
    const { className, children, isOpen, ...props } = this.props;
    const { open } = this.state;

    const toggleState = () => this.setState({ open: !open });
    const toggleMenu = this.props.toggleMenu || toggleState;

    return (
      <Container className={className} open={isOpen || open}>
        <Button {...props} open={isOpen || open} onClick={toggleMenu} />

        {Children.map(children, child => cloneElement(child, props))}
      </Container>
    );
  }
}
Toggler.PropTypes = {
  toggleMenu: PropTypes.func,
  isOpen: PropTypes.bool,
};
Toggler.defaultProps = {
  toggleMenu: undefined,
  isOpen: false,
};
export default Toggler;

import React, { Children, cloneElement, Component } from 'react';
import { withRouter } from 'olymp';
import { createComponent } from 'react-fela';

const Container = createComponent(
  ({ theme, open }) => ({
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

@withRouter
class Toggler extends Component {
  render() {
    const {
      className,
      children,
      router,
      pathname,
      query,
      ...props
    } = this.props;
    const open = query.nav === null;

    return (
      <Container className={className} open={open}>
        <Button
          {...props}
          open={open}
          onClick={() =>
            router.push({
              pathname,
              query: { ...query, nav: !open ? null : undefined },
            })}
        />

        <div>
          {Children.map(children, child => cloneElement(child, props))}
        </div>
      </Container>
    );
  }
}
export default Toggler;

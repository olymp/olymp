import React, { Fragment } from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { createComponent } from 'react-fela';
import { FaBars, FaClose } from 'olymp-icons';
import Tappable from 'react-tappable/lib/Tappable';
import Swipeable from 'react-swipeable';
import { Aside, Section } from '../../sidebar';

export const AsideMobile = createComponent(
  ({ theme, collapsed, large, absX = 0, width }) => ({
    transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    backgroundColor: theme.color,
    paddingTop: large ? 16 : 10,
    paddingRight: large ? 18 : 14,
    paddingLeft: (large ? 18 : 14) + 1000,
    marginLeft: -1000,
    paddingBottom: large ? 8 : 4,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    position: 'absolute',
    top: large ? 10 : 8,
    left: (absX || (collapsed ? 0 : width)),
  }),
  ({ className, onTap, collapsed }) => (
    <Tappable onTap={onTap} className={className}>
      {collapsed ? <FaBars size={20} color="white" /> : <FaClose size={20} color="white" />}
    </Tappable>
  ),
  p => Object.keys(p),
);

const raf = (func) => {
  const options = {
    ticking: false,
    x: 0,
  };
  const update = () => {
    func(options.x, () => {
      options.ticking = false;
    });
  };
  const requestTick = (x) => {
    options.x = x;
    if (!options.ticking) {
      requestAnimationFrame(update);
    }
    options.ticking = true;
  };
  return requestTick;
}

const enhanceSwiper = compose(
  withHandlers(({
    setAbsX: ({ setAbsX }) => raf(setAbsX),
  }))
)
export const Swiper = enhanceSwiper(
  createComponent(
    ({ collapsed, zIndex }) => ({
      transform: 'translateX(0%)',
      ifMediumUp: {
        transform: 'translateX(-100%)',
      },
      transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
      zIndex,
      position: 'fixed',
      top: 0,
      height: '100%',
      width: collapsed ? 12 : '100%',
    }),
    ({ className, collapsed, width, setCollapsed, large = true, setAbsX, absX }) => (
      <Swipeable
        className={className}
        onSwipingRight={(e, x) => setAbsX(x)}
        onSwipedRight={() => {
          setAbsX(0);
          if (absX > (width * 0.33)) {
            setCollapsed(false);
          } else {
            setCollapsed(true);
          }
        }}
        onSwipingLeft={(e, x) => setAbsX(width - x)}
        onSwipedLeft={() => {
          setAbsX(0);
          if (absX > (width * 0.66)) {
            setCollapsed(false);
          } else {
            setCollapsed(true);
          }
        }}
      >
        <AsideMobile large={large} width={width} absX={absX} collapsed={collapsed} onTap={() => setCollapsed(!collapsed)} />
      </Swipeable>
    ),
    p => Object.keys(p),
  )
);

export const Aside1 = createComponent(
  ({ collapsed, absX, zIndex, width }) => ({
    ifSmallDown: {
      transform: collapsed && !absX ? 'translateX(-100%)' : 'translateX(0%)',
      transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
      width: absX || width,
    },
    zIndex,
    maxWidth: '80%',
  }),
  ({ absX, width, ...props }) => <Aside {...props} width={absX || width} collapsed={absX ? false : props.collapsed} />,
  p => Object.keys(p),
);

export const Aside2 = createComponent(
  ({ left, zIndex }) => ({
    ifSmallDown: {
      left: 0,
      transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
      width: '100%',
    },
    zIndex,
    left,
  }),
  props => <Aside {...props} />,
  p => Object.keys(p),
);

export const Section1 = createComponent(
  ({ left, placeholder, zIndex }) => ({
    marginLeft: left,
    ifMediumDown: !placeholder && {
      marginLeft: 0,
      transition: 'all 200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
      zIndex,
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      animationDuration: '200ms',
      animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      animationName: {
        '0%': {
          transform: 'translateX(100%)',
        },
        '100%': {
          transform: 'translateX(0)',
        },
      },
    },
  }),
  props => <Section {...props} />,
  p => Object.keys(p),
);

const enhance = compose(withState('absX', 'setAbsX', 0))
export default enhance(
  ({ collapsed, setCollapsed, menu, children, width = 240, absX, setAbsX }) => (
    <Fragment>
      <Swiper width={width} absX={absX} setAbsX={setAbsX} zIndex={5} collapsed={collapsed} setCollapsed={setCollapsed} large={false} />
      <Aside1
        zIndex={6}
        absX={absX}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        collapsed={collapsed}
        overlap
        width={width}
      >
        {menu}
      </Aside1>
      {children}
    </Fragment>
  )
);

export const SecondarySidebar = ({ menu, children, left = 72, width = 400, hasContent = true, placeholder = null }) => (
  <Fragment>
    <Aside2
      left={left}
      width={width}
      zIndex={4}
    >
      {menu}
    </Aside2>
    {hasContent ? (
      <Section1 zIndex={7} left={left + width}>
        {children}
      </Section1>) : (
        <Section1 placeholder left={left + width}>
          {placeholder}
        </Section1>
    )}
  </Fragment>
);

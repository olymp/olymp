import React from 'react';
import { Menu, Tooltip } from 'antd';
import { createComponent } from 'react-fela';
import { withPropsOnChange } from 'recompose';
import { withScroll } from 'olymp-utils';
import Portal from './portal';

export const Button = createComponent(
  ({ theme, active }) => ({
    paddingX: 20,
    '> svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4,
    },
    '> div > svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4,
    },
  }),
  ({ onMouseDown, tooltip, children, className }) => (
    <div onMouseDown={onMouseDown} className={className}>
      <Tooltip placement="top" title={tooltip || ''}>
        {children}
      </Tooltip>
    </div>
  ),
  p => Object.keys(p),
);

const WrappedMenu = createComponent(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    zIndex: 100,
    left: '50%',
    transform: 'translateX(-50%)',
    // width: '100%',
    // boxShadow: 'inset 0 -10px 10px -10px #000000',
    backgroundColor: theme.dark,
    color: theme.light,
    paddingX: theme.space2,
    hasFlex: {
      justifyContent: 'center',
      display: 'flex',
    },
    '> li': {
      padding: 0,
    },
  }),
  props => <Menu {...props} />,
  p => Object.keys(p),
);

const ScrollPortal = withScroll(
  withPropsOnChange(['scrollTop'], ({ scrollTop, parentEl }) => {
    const parent = document.querySelector(parentEl);
    console.log(parent, parentEl);
    if (!parent) {
      return null;
    }
    const tooltipPosition = parent.getBoundingClientRect();
    const scrollY = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
    const scrollX = window.scrollX !== undefined ? window.scrollX : window.pageXOffset;
    const top = scrollY + tooltipPosition.top;
    const left = scrollX + tooltipPosition.left;
    return {
      left: left + parent.offsetWidth / 2,
      top,
    };
  })(({ children, top, left }) => (
    <Portal>
      <WrappedMenu
        style={{
          top,
          left,
          transform: 'translate3d(-50%, -100%, 0px)',
          position: 'absolute',
        }}
        selectedKeys={[]}
        mode="horizontal"
        theme="dark"
      >
        {children}
      </WrappedMenu>
    </Portal>
  )),
);

export default (props) => {
  const { isOpened, parent, children } = props;

  if (!isOpened) {
    return <div />;
  }

  if (parent) {
    return <ScrollPortal parentEl={parent}>{children}</ScrollPortal>;
  }

  return (
    <Portal>
      <WrappedMenu selectedKeys={[]} mode="horizontal" theme="dark">
        {children}
      </WrappedMenu>
    </Portal>
  );
};

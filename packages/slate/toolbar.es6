import React from 'react';
import Portal from 'olymp-fela/portal';
import { Menu, Tooltip } from 'antd';
import { createComponent } from 'react-fela';
import { withPropsOnChange } from 'recompose';

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
    '> div> div > svg': {
      fill: active ? theme.light : theme.light2,
      size: 16,
      marginBottom: -4,
    },
    '> a > svg': {
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
  ({ theme, color }) => ({
    position: 'fixed',
    top: -2,
    zIndex: 100,
    left: '50%',
    transform: 'translateX(-50%)',
    // width: '100%',
    // boxShadow: theme.boxShadow,
    backgroundColor: color === true ? theme.color : theme.dark,
    color: theme.light,
    paddingX: theme.space2,
    borderBottom: 0,
    hasFlex: {
      justifyContent: 'center',
      display: 'flex',
    },
    '> li': {
      padding: 0,
      '> div': {
        paddingX: 5,
        lineHeight: '25px',
        '> div': {
          paddingX: 5,
          lineHeight: '25px',
        },
      },
    },
  }),
  props => <Menu {...props} />,
  p => Object.keys(p),
);

const enhance = withPropsOnChange(['parentEl'], ({ parentEl }) => {
  const parent = document.querySelector(parentEl);
  if (!parent) {
    return null;
  }
  const tooltipPosition = parent.getBoundingClientRect();
  const scrollY =
    window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
  const scrollX =
    window.scrollX !== undefined ? window.scrollX : window.pageXOffset;
  const top = scrollY + tooltipPosition.top;
  const left = scrollX + tooltipPosition.left;
  return {
    left: left + parent.offsetWidth / 2,
    top,
  };
});
const ScrollPortal = enhance(({ children, top, left, color, display }) => (
  <Portal>
    <WrappedMenu
      color={color}
      style={{
        top: 0,
        display,
        left,
        // transform: 'translate3d(-50%, -100%, 0px)',
        transform: `translate3d(-50%, ${top - 26}px, 0px)`,
        position: 'absolute',
      }}
      selectedKeys={[]}
      mode="horizontal"
      theme="dark"
    >
      {children}
    </WrappedMenu>
  </Portal>
));

export default props => {
  const { isOpened, parent, children, color } = props;

  if (!isOpened) {
    return <div />;
  }

  if (parent) {
    return (
      <ScrollPortal parentEl={parent} color={color}>
        {children}
      </ScrollPortal>
    );
  }

  return (
    <Portal>
      <WrappedMenu
        color={color}
        selectedKeys={[]}
        mode="horizontal"
        theme="dark"
      >
        {children}
      </WrappedMenu>
    </Portal>
  );
};

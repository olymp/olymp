import React from 'react';
import { createComponent } from 'olymp-fela';
import { Icon } from 'antd';
import Image from './image';

const LoaderContainer = createComponent(
  ({ theme }) => ({
    width: 14,
    '> i.anticon': {
      color: theme.color,
    },
  }),
  'div',
);

const Content = createComponent(
  ({ theme }) => ({
    ellipsis: true,
    flexGrow: 1,
    opacity: theme.collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    overflowY: 'hidden',
    '> small': {
      display: 'block',
      marginTop: `-${theme.space1}`,
      color: theme.inverted ? theme.light2 : theme.dark2,
    },
  }),
  'div',
  p => Object.keys(p),
);

export default createComponent(
  ({ theme, large, active, icon, onClick, color }) => ({
    height: large ? 54 : 40,
    flexShrink: 0,
    width: !theme.collapsed ? '100%' : large ? 54 : 40,
    marginLeft: theme.collapsed && !large && 7,
    paddingLeft: !icon && theme.space3,
    display: 'flex',
    alignItems: 'center',
    cursor: !!onClick && 'pointer',
    borderRadius: theme.collapsed ? '50%' : theme.borderRadius,
    // backgroundColor: active && theme.dark4,
    backgroundColor:
      (color === true && theme.color) ||
      theme[color] ||
      color ||
      (active && theme.dark4),
    onHover: {
      backgroundColor: !!onClick && theme.dark4,
    },
  }),
  ({
    large,
    children,
    subtitle,
    icon,
    extra,
    _ref,
    innerRef,
    ref,
    color,
    loading,
    ...rest
  }) => (
    <div {...rest} ref={_ref || innerRef || ref}>
      {!!icon && <Image large={large}>{icon}</Image>}
      <Content>
        {children}
        {!!subtitle && <small>{subtitle}</small>}
      </Content>
      {!!extra && !loading && <Image extra>{extra}</Image>}
      {loading && (
        <Image extra>
          <LoaderContainer>
            <Icon type="loading" />
          </LoaderContainer>
        </Image>
      )}
    </div>
  ),
  ({ active, ...p }) => Object.keys(p),
);

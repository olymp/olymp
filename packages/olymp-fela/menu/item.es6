import React from 'react';
import { createComponent } from 'olymp-fela';
import { Icon } from 'antd';
import Image from './image';

const LoaderContainer = createComponent(
  ({ theme }) => ({
    width: 14,
    '> i.anticon': {
      color: theme.color
    }
  }),
  'div'
);

const Content = createComponent(
  ({ theme, ellipsis = true }) => ({
    ellipsis,
    flexGrow: 1,
    opacity: theme.collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    overflowY: 'hidden',
    '> small': {
      display: 'block',
      marginTop: `-${theme.space1}`,
      color: theme.inverted ? theme.light2 : theme.dark2
    }
  }),
  'div',
  ({ ellipsis, ...props }) => Object.keys(props)
);

export default createComponent(
  ({
    theme,
    large,
    small,
    active,
    icon,
    onClick,
    color,
    disabled,
    ellipsis
  }) => ({
    height: ellipsis === false ? undefined : large ? 54 : small ? 32 : 40,
    flexShrink: 0,
    width: !theme.collapsed ? '100%' : large ? 54 : small ? 32 : 40,
    marginLeft: theme.collapsed && !large && 7,
    paddingLeft: !icon && theme.space3,
    display: 'flex',
    alignItems: 'center',
    cursor: !!onClick && !disabled && 'pointer',
    borderRadius: theme.collapsed ? '50%' : theme.borderRadius,
    opacity: disabled ? 0.67 : 1,
    backgroundColor:
      (color === true && theme.color) ||
      theme[color] ||
      color ||
      (active && theme.dark5),
    onHover: {
      backgroundColor:
        !!onClick &&
        !disabled &&
        ((color === true && theme.color) ||
          theme[color] ||
          color ||
          theme.dark4)
    }
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
    onClick,
    disabled,
    ellipsis,
    ...rest
  }) => (
    <div
      {...rest}
      onClick={disabled ? () => {} : onClick}
      ref={_ref || innerRef || ref}
    >
      {!!icon && <Image large={large}>{icon}</Image>}
      <Content ellipsis={ellipsis}>
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
  ({ active, ...p }) => Object.keys(p)
);

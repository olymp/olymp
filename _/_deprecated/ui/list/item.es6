import React from 'react';
import { Link } from 'olymp-router';
import { createComponent, border } from 'olymp-fela';
import { Icon } from 'antd';

const Header = createComponent(
  ({ color }) => ({
    fontWeight: 'bold',
    color,
  }),
  'div',
  [],
);

const Content = createComponent(
  ({ active, disabled, theme }) => ({
    hasFlex: {
      display: 'flex',
      alignItems: 'center',
    },
    padding: theme.space1,
    width: '100%',
    maxWidth: '100%',
    color: disabled ? theme.dark3 : theme.dark1,
    background: active && 'rgba(0, 0, 0, 0.03)',
    lineHeight: '20px',
    borderBottom: border(theme),
    cursor: disabled ? 'not-allowed' : 'pointer',
    '> .content': {
      padding: theme.space1,
      maxWidth: '100%',
      hasFlex: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 0%',
      },
    },
    '> .image': {
      opacity: disabled ? 0.667 : 1,
      '> *': {
        borderRadius: '50%',
      },
    },
    '> .icon': {},
    onHover: !active &&
      !disabled && {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        color: 'rgba(0, 0, 0, 0.85)',
      },
    onActive: {
      color: 'rgba(0, 0, 0, 0.85)',
    },
    onFocus: {
      color: 'rgba(0, 0, 0, 0.85)',
      boxShadow: '0 0 3px 1px rgba(63, 81, 181, 0.19)',
    },
  }),
  ({ image, color, label, description, className, disabled, icon }) => (
    <div className={className}>
      <div className="content">
        <Header color={color}>{label}</Header>
        {description}
      </div>

      {image && (
        <div className="image">
          {image &&
            typeof image === 'string' && (
              <img src={image} width={49} height={49} />
            )}
          {image && typeof image !== 'string' && image}
        </div>
      )}

      {!image && !disabled ? (
        <div className="icon">
          <Icon type={icon || 'right'} />
        </div>
      ) : null}
    </div>
  ),
  p => Object.keys(p),
);

export default ({
  className,
  image,
  color,
  label,
  description,
  onClick,
  active,
  disabled,
  icon,
  to,
  updateQuery,
}) =>
  onClick || disabled ? (
    <a className={className} onClick={disabled ? () => {} : onClick}>
      <Content
        image={image}
        color={color}
        label={label}
        description={description}
        active={active}
        disabled={disabled}
        icon={icon}
      />
    </a>
  ) : (
    <Link
      className={className}
      to={to}
      updateQuery={updateQuery}
      disabled={disabled}
    >
      <Content
        image={image}
        color={color}
        label={label}
        description={description}
        active={active}
        disabled={disabled}
        icon={icon}
      />
    </Link>
  );

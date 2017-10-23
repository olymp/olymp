import React from 'react';
import { Link } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import { Icon } from 'antd';

const ImgContainer = createComponent(
  ({ disabled }) => ({
    marginRight: 8,
    maxWidth: 37,
    maxHeight: 37,
    opacity: disabled ? 0.667 : 1,
    overflow: 'hidden',
    '> *': {
      margin: '0 auto',
    },
  }),
  'div',
  p => Object.keys(p),
);

const Header = createComponent(
  ({ color }) => ({
    fontWeight: 'bold',
    color,
  }),
  'span',
  [],
);

const Content = createComponent(
  ({ active, disabled, theme, nowrap }) => ({
    hasFlex: {
      display: 'flex',
      alignItems: 'center',
    },
    padding: '5px 6px',
    width: '100%',
    // minHeight: 51,
    whiteSpace: nowrap && 'nowrap',
    ellipsis: nowrap,
    color: disabled ? theme.dark3 : theme.dark1,
    background: active && 'rgba(0, 0, 0, 0.03)',
    lineHeight: '20px',
    borderBottom: '1px solid rgb(233, 233, 233)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    '> img': {
      marginRight: 8,
      width: 37,
      height: 37,
      borderRadius: 500,
      opacity: disabled ? 0.667 : 1,
    },
    '> div': {
      hasFlex: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 0%',
      },
    },
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
      {false &&
        image && (
          <ImgContainer>
            {image &&
              typeof image === 'string' && (
                <img src={image} width={37} height={37} />
              )}
            {image && typeof image !== 'string' && image}
          </ImgContainer>
        )}
      <div>
        <Header color={color}>{label}</Header>
        {description}
      </div>

      {!disabled ? <Icon type={icon || 'right'} /> : null}
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
  nowrap,
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
        nowrap={nowrap}
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

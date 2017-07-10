import React from 'react';
import { Link } from 'olymp';
import { createComponent } from 'olymp-fela';
import { Icon } from 'antd';
// import Image from '../../cms/cloudinary/image';

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
  p => Object.keys(p)
);

const Content = createComponent(
  ({ active, disabled, theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '5px 6px',
    width: '100%',
    minHeight: 51,
    color: disabled ? theme.dark3 : theme.dark1,
    // background: active ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.083))' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.033))',
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
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 0%',
    },
    onHover: !active &&
    !disabled && {
      // background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.058))',
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
  ({ image, label, description, className, disabled, icon }) =>
    (<div className={className}>
      {image &&
        <ImgContainer>
          {image &&
            typeof image === 'string' &&
            <img src={image} width={37} height={37} />}
          {image && typeof image !== 'string' && image}
        </ImgContainer>}
      <div>
        <strong>
          {label}
        </strong>
        {description}
      </div>

      {!disabled ? <Icon type={icon || 'right'} /> : null}
    </div>),
  p => Object.keys(p)
);

export default ({
  className,
  image,
  label,
  description,
  to,
  onClick,
  active,
  disabled,
  icon,
}) =>
  onClick || disabled
    ? <a
      className={className}
      href="javascript:;"
      onClick={disabled ? () => {} : onClick}
    >
      <Content
        image={image}
        label={label}
        description={description}
        active={active}
        disabled={disabled}
        icon={icon}
      />
    </a>
    : <Link className={className} to={to} disabled={disabled}>
      <Content
        image={image}
        label={label}
        description={description}
        active={active}
        disabled={disabled}
        icon={icon}
      />
    </Link>;

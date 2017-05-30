import React from 'react';
import { styled, Link } from 'olymp';
import { Icon } from 'antd';
import Image from '../../cms/cloudinary/image';

const Content = styled(({ active, disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 6px',
  width: '100%',
  minHeight: 51,
  color: disabled ? 'rgba(0, 0, 0, 0.40)' : 'rgba(0, 0, 0, 0.85)',
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
    flex: 1,
  },
  onHover: !active && !disabled && {
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
}), ({ image, label, description, className, disabled, icon }) => (
  <div className={className}>
    {image ? <Image value={image} mode="fill" width={37} height={37} retina /> : null}
    <div>
      <strong>{label}</strong>
      {description}
    </div>

    {!disabled ? <Icon type={icon || 'right'} /> : null}
  </div>
), p => p);

export default ({ className, image, label, description, to, onClick, active, disabled, icon }) => onClick || disabled ? (
  <a className={className} href="javascript:;" onClick={disabled ? () => {} : onClick}>
    <Content image={image} label={label} description={description} active={active} disabled={disabled} icon={icon} />
  </a>
) : (
  <Link className={className} to={to} disabled={disabled}>
    <Content image={image} label={label} description={description} active={active} disabled={disabled} icon={icon} />
  </Link>
);

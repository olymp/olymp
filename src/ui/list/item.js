import React, { Component } from 'react';
import { styled, Link } from 'olymp';
import { ChevronRight } from 'olymp-icons';
import Image from '../../cms-next/cloudinary/image';

const Content = styled(({ active, disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 6px',
  width: '100%',
  color: disabled ? 'rgba(0, 0, 0, 0.40)' : 'rgba(0, 0, 0, 0.85)',
  backgroundColor: active && 'rgba(233, 233, 233, .6)',
  lineHeight: '20px',
  borderBottom: '1px solid rgb(233, 233, 233)',
  cursor: disabled ? 'not-allowed' : 'pointer',
  '> img': {
    marginRight: 8,
    width: 37,
    height: 37,
    borderRadius: 500,
  },
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  onHover: !active && {
    backgroundColor: 'rgba(233, 233, 233, .4)',
    color: 'rgba(0, 0, 0, 0.85)',
  },
  onActive: {
    color: 'rgba(0, 0, 0, 0.85)',
  },
  onFocus: {
    color: 'rgba(0, 0, 0, 0.85)',
    boxShadow: '0 0 3px 1px rgba(63, 81, 181, 0.19)',
  },
}), ({ image, label, description, className, disabled }) => (
  <div className={className}>
    {image ? <Image value={image} mode="fill" width={37} height={37} retina /> : null}
    <div>
      <strong>{label}</strong>
      {description}
    </div>

    {!disabled ? <ChevronRight size={14} color /> : null}
  </div>
), p => p);

export default ({ className, image, label, description, to, onClick, active, disabled }) => onClick ? (
  <a className={className} href="javascript:;" onClick={disabled ? () => {} : onClick}>
    <Content image={image} label={label} description={description} active={active} disabled={disabled} />
  </a>
) : (
  <Link className={className} to={to} disabled={disabled}>
    <Content image={image} label={label} description={description} active={active} disabled={disabled} />
  </Link>
);

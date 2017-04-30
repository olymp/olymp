import React, { Component } from 'react';
import { styled, Link } from 'olymp';
import { ChevronRight } from 'olymp-icons';

export default styled(({ active, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 6px',
  width: '100%',
  color: 'rgba(0, 0, 0, 0.85)',
  backgroundColor: active && 'rgba(233, 233, 233, .4)',
  lineHeight: '20px',
  borderBottom: '1px solid rgb(233, 233, 233)',
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
}), ({ className, image, label, description, to, onClick }) => onClick ? (
  <a className={className} href="javascript:;" onClick={onClick} onFocus={onFocus}>
    {image && <img src={image} />}
    <div>
      <strong className="header">{label}</strong>
      <div className="description">{description}</div>
    </div>
    <ChevronRight size={14} color />
  </a>
) : (
  <Link className={className} to={to} onFocus={onFocus}>
    {image && <img src={image} />}
    <div>
      <strong className="header">{label}</strong>
      <div className="description">{description}</div>
    </div>
    <ChevronRight size={14} color />
  </Link>
), p => p);
const onFocus = ({ target, keyCode }) => {
  // if (this.ref) target.click();
}

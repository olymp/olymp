import React, { Component } from 'react';
import { styled, withRouter, Link } from 'olymp';
import { ChevronRight } from 'olymp-icons';
import { Input, Icon } from 'antd';

export const List = styled(({ side, width }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: width || 300,
  borderRight: side === 'left' && '1px solid rgb(233, 233, 233)',
  borderLeft: side === 'right' && '1px solid rgb(233, 233, 233)',
  backgroundColor: 'rgba(128, 128, 128, 0.04)',
  onBefore: {
    content: "'>'",
    position: 'absolute',
    top: '45%',
    right: side === 'left' && -26,
    left: side === 'right' && -26,
    fontSize: 30,
    fontWeight: 'bold',
    opacity: .2,
  },
}), 'div', ({ side, ...p }) => p);
const onFocus = ({ target, keyCode }) => {
  // if (this.ref) target.click();
}
List.Item = styled(({ active, theme }) => ({
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

List.Title = styled(({ active, theme }) => ({
  padding: '5px 6px',
  borderBottom: '1px solid #e9e9e9',
  fontSize: '1.17em',
  fontWeight: 200,
  color: theme.color,
  '> div': {
    float: 'right',
  },
}), ({ className, children, buttons }) => (
  <div className={className}>
    {children}
    <div>
      {buttons}
    </div>
  </div>
), p => p);

List.Filter = styled(({ active, theme }) => ({
  padding: 6,
  borderBottom: '1px solid #e9e9e9',
  backgroundColor: 'rgba(233, 233, 233, 0.47)',
  '> input': {
    width: '100%',
    borderRadius: 11,
    padding: '0 7px',
    border: '1px solid #e9e9e9',
  },
}), ({ className, onChange, children, value, ...props }) => {
  const suffix = value ? <Icon type="close-circle" onClick={() => onChange(null)} /> : null;
  return (
    <div className={className}>
      {children}
      <Input suffix={suffix} value={value} onChange={(e) => onChange(e.target.value)} {...props} />
    </div>
  )
} , p => p);

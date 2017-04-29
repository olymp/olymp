import React, { Component, PropTypes } from 'react';
import { styled } from 'olymp';
import { Icon } from 'antd';
import UnstyledImage from './image';

const ImageContainer = styled(({ theme, isActive }) => {
  let style = {
    position: 'relative',
    margin: '.5rem',
    cursor: 'pointer',
    outline: isActive ? `3px solid ${theme.color}` : 'none',
    backgroundColor: isActive ? '#666' : '#FFF',
    transition: 'all .15s ease-in-out',
    '> img': {
      opacity: isActive ? .6 : 1,
    },
    ':hover': {
      '> div': {
        display: 'initial',
      },
      transform: 'scale(1.075)',
      transition: 'all .15s ease-in-out',
      zIndex: 3,
    },
  }

  return style;
}, 'div', ({ height, isActive, ...p }) => p);

const Image = styled(({ theme }) => ({
  backgroundColor: '#FFF',
}), UnstyledImage, p => p);

const ImageLabel = styled(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.color,
  color: "#FFF",
  borderRadius: "50%",
  textAlign: "center",
  fontSize: 25,
  padding: 5,
  lineHeight: 1,
  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  transition: 'all .15s ease-in-out',
  '> .anticon-close': {
    display: 'none',
  },
  ':hover': {
    // transform: 'translate(-50%, -50%) scale(1.33)',
    transition: 'all .15s ease-in-out',
    '> .anticon-check': {
      display: 'none',
    },
    '> .anticon-close': {
      display: 'initial',
    },
  },
}), 'div', p => p);

export const Thumb = ({ item, onClick, onRemove, isActive, height }) => item ? (
  <ImageContainer
    onClick={() => onClick(item.id)}
    isActive={isActive}
  >
    <Image value={item} mode="fill" height={height} retina />
    {item.format === 'pdf' && !isActive ? (
      <ImageLabel>
        <Icon type="file-pdf" />
      </ImageLabel>
    ) : undefined}
    {isActive ? (
      <ImageLabel onClick={() => onRemove(item.id)}>
        <Icon type="check" />
        <Icon type="close" />
      </ImageLabel>
    ) : undefined}
  </ImageContainer>
) : null;
Thumb.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  height: PropTypes.number,
  isActive: PropTypes.bool,
};
export default Thumb;

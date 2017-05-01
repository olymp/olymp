import React, { Component, PropTypes } from 'react';
import { styled } from 'olymp';
import { Icon } from 'antd';
import Image from './image';

const ImageContainer = styled(({ theme, isActive }) => ({
    position: 'relative',
    margin: '.5rem',
    cursor: 'pointer',
    outline: isActive ? `3px solid ${theme.color}` : 'none',
    transform: isActive ? "scale(1.15)" : 'none',
    transition: 'all .25s ease-in-out',
    backgroundColor: isActive ? '#666' : '#FFF',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
    '> img': {
      opacity: isActive ? .6 : 1,
      backgroundColor: '#FFF',
    },
    ':hover > img': {
      opacity: .75,
    },
  }), 'div', ({ height, isActive, ...p }) => p);

const ImageLabel = styled(({ theme }) => ({
  position: "absolute",
  top: '50%',
  right: '50%',
  transform: "translate(50%, -50%)",
  transition: 'all .15s ease-in-out',
  backgroundColor: theme.color,
  color: "#FFF",
  borderRadius: "50%",
  textAlign: "center",
  fontSize: 25,
  padding: 5,
  lineHeight: 1,
  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
}), 'div', p => p);

const CloseLabel = styled(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  transform: "translate(40%, -40%) scale(0.667)",
  transition: 'all .15s ease-in-out',
  backgroundColor: theme.color,
  color: "#FFF",
  borderRadius: "50%",
  textAlign: "center",
  fontSize: 25,
  padding: 5,
  lineHeight: 1,
  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  ':hover': {
    transform: "translate(40%, -40%) scale(0.75)",
    transition: 'all .15s ease-in-out',
  }
}), 'div', p => p);

export const Thumb = ({ item, onClick, onRemove, isActive, height }) => item ? (
  <ImageContainer isActive={isActive}>
    <Image value={item} mode="fill" height={height} onClick={onClick} style={{ maxWidth: '100%' }} retina />
    {item.format === 'pdf' ? (
      <ImageLabel>
        <Icon type="file-pdf" />
      </ImageLabel>
    ) : undefined}
    {isActive && onRemove ? (
      <CloseLabel onClick={onRemove}>
        <Icon type="close" />
      </CloseLabel>
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

import React from 'react';
import { object, func, number, bool } from 'prop-types';
import { Icon } from 'antd';
import Image from './image';
import { createComponent } from 'olymp-fela';

const ImageContainer = createComponent(
  ({ theme, isActive }) => ({
    position: 'relative',
    margin: '.5rem',
    cursor: 'pointer',
    // outline: isActive ? `3px solid ${theme.color}` : 'none',
    // transform: isActive ? 'scale(1.15)' : 'none',
    transition: 'all .1s ease-in-out',
    backgroundColor: isActive ? theme.color : '#FFF',
    border: isActive ? `1px solid ${theme.color}` : '1px solid #ddd',
    // boxShadow: `0px 0px 10px 0px rgba(0, 0, 0, ${isActive ? 0.4 : 0.2})`,
    '> img': {
      opacity: isActive ? 0.6 : 1,
      backgroundColor: '#FFF',
      display: 'block',
      padding: 1,
    },
    ':hover': {
      // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.4)',
      transform: 'scale(1.025)',
      transition: 'all .1s ease-in-out',
    },
  }),
  'div',
  ({ height, isActive, ...p }) => Object.keys(p)
);

const ImageLabel = createComponent(
  ({ theme }) => ({
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    transition: 'all .15s ease-in-out',
    backgroundColor: theme.color,
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
    lineHeight: 1,
    // boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  }),
  'div',
  p => Object.keys(p)
);

const CheckLabel = createComponent(
  ({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(40%, -40%) scale(0.667)',
    transition: 'all .15s ease-in-out',
    backgroundColor: theme.color,
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
    lineHeight: 1,
  }),
  'div',
  p => Object.keys(p)
);

const CloseLabel = createComponent(
  ({ theme }) => ({
    ':hover': {
      transform: 'translate(40%, -40%) scale(0.75)',
      transition: 'all .15s ease-in-out',
    },
  }),
  CheckLabel,
  p => Object.keys(p)
);

const Thumb = ({ item, onClick, onRemove, isActive, height }) =>
  item
    ? <ImageContainer isActive={isActive}>
      <Image
        value={item}
        mode="fill"
        height={height}
        onClick={onClick}
        style={{ maxWidth: '100%' }}
        retina
      />
      {item.format === 'pdf'
          ? <ImageLabel>
            <Icon type="file-pdf" />
          </ImageLabel>
          : undefined}
      {isActive
          ? onRemove
            ? <CloseLabel onClick={onRemove}>
              <Icon type="close" />
            </CloseLabel>
            : <CheckLabel>
              <Icon type="check" />
            </CheckLabel>
          : undefined}
    </ImageContainer>
    : null;
Thumb.propTypes = {
  item: object,
  onClick: func,
  onRemove: func,
  height: number,
  isActive: bool,
};
export default Thumb;

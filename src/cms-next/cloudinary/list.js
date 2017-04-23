import React, { Component, PropTypes } from 'react';
import { styled } from 'olymp';
import { Icon } from 'antd';
import { queryMedias } from './gql';
import Image from './image';

const MAX_ITEMS = 12;

const Gallery = styled(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  // alignContent: 'space-around',
  alignItems: 'baseline',
  position: 'relative',
  minWidth: 800,
  minHeight: '100vh',
  height: '100%',
  backgroundColor: '#FFFFFF',
  borderRight: '1px solid #e9e9e9',
}), 'div', p => p);

const ImageContainer = styled(({ theme, isActive }) => {
  let style = {
    position: 'relative',
    maxWidth: 180,
    maxHeight: 180,
    margin: 10,
    boxShadow: '0 0 8px 0 rgba(0,0,0,.75)',
    cursor: 'pointer',
    ':hover': {
      animation: 'none',
      transform: 'scale(1.1)',
      transition: 'all .15s ease-in-out',
      zIndex: 3,
    }
  }

  if (isActive) {
    style = {
      ...style,
      transform: 'scale(1.1)',
      animationName: 'jiggle',
      animationIterationCount: 'infinite',
      animationDuration: '1.2s',
      transformOrigin: '50% 50%',
      zIndex: 2,
      '@keyframes jiggle': {
        '0%': {
          transform: 'rotate(-2deg) scale(1.05)',
          animationTimingFunction: 'linear',
        },
        '50%': {
          transform: 'rotate(2deg) scale(1.05)',
          animationTimingFunction: 'linear',
        },
        '100%': {
          transform: 'rotate(-2deg) scale(1.05)',
          animationTimingFunction: 'linear',
        },
      }
    };
  }

  return style;
}, 'div', ({ isActive, ...p }) => p);

const ImageLabel = styled(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.color,
  color: "#FFF",
  borderRadius: "50%",
  textAlign: "center",
  fontSize: 34,
  paddingTop: 3,
  paddingLeft: 1,
  width: 50,
  height: 50,
  lineHeight: 1.25,
  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)"
}), 'div', p => p);

export const MediaList = ({ items, onSelect, selected, ...rest }) => (
  <Gallery>
    {(items || []).map((item, index) => (!MAX_ITEMS || index < MAX_ITEMS) ? (
      <ImageContainer
        onClick={typeof onSelect === 'function' && (() => onSelect(item.id))}
        isActive={selected.findIndex(x => x === item.id) > 0}
        key={item.id}
      >
        <Image src={item} width={180} height={180} crop="fit" />
        {
          item.format === 'pdf' ? (
            <ImageLabel>
              <Icon type="file-pdf" />
            </ImageLabel>
          ) : undefined
        }
      </ImageContainer>
    ) : null)}
  </Gallery>
);
MediaList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
};
MediaList.defaultProps = {
  items: [],
  selected: [],
};
export default queryMedias(MediaList);

import React, { Component, PropTypes } from 'react';
import { styled } from 'olymp';
import { Icon } from 'antd';
import UnstyledImage from './image';

const MAX_ITEMS = 12;

const Gallery = styled(() => ({
  /*display: 'flex',
  /*alignItems: 'flex-start',
  alignContent: 'flex-start',
  display: 'flex',
  flexWrap: 'wrap',*/
  padding: 10,
  margin: 0,
  backgroundColor: '#FFFFFF',
  borderRight: '1px solid #e9e9e9',
  onAfter: {
    content: "''",
    width: '100%',
    flex: 1,
  },
}), 'div', p => p);

const ImageContainer = styled(({ theme, selected, isActive, ratio }) => {
  let style = {
    position: 'relative',
    /*height: `5rem`,
    flex: 1,
    flexBasis: `${5 * ratio}rem`,*/
    // flex: 5 * ratio,
    float: 'left',
    margin: '.5rem',
    // boxShadow: '0 0 8px 0 rgba(0, 0, 0, .75)',
    cursor: 'pointer',
    outline: selected ? `3px solid ${theme.color}` : 'none',
    // border: selected ? `2px solid ${isActive ? theme.color : '#666'}` : 'none',
    // transform: selected ? 'scale(1.075)' : 'none',
    backgroundColor: selected ? '#666' : '#FFF',
    // transition: 'all .15s ease-in-out',
    '> div': {
      // display: 'none',
    },
    '> img': {
      opacity: selected ? .6 : 1,
    },
    ':hover': {
      '> div': {
        display: 'initial',
      },
      // animation: 'none',
      // transform: selected ? 'scale(1.0)' : 'scale(1.075)',
      // transition: 'all .15s ease-in-out',
      zIndex: 3,
    },
  }

  return style;
}, 'div', ({ isActive, selected, ratio, ...p }) => p);

const Image = styled(({ theme }) => ({
  // width: '100%',
  // height: '100%',
  width: 'auto',
	height: 80,
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
  // boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  transition: 'all .15s ease-in-out',
  /*':hover': {
    transform: 'translate(-50%, -50%) scale(1.33)',
    transition: 'all .15s ease-in-out',
  },*/
}), 'div', p => p);

/* const PlaceholderContainer = styled(({ theme, ratio }) => ({
  backgroundColor: '#333',
  minHeight: `8rem`,
  position: 'relative',
  flex: 1,
  flexBasis: `${8 * ratio}rem`,
  marginRight: 2,
  marginBottom: 2,
}), 'div', ({ ratio, ...p }) => p); */

export const MediaList = ({ items, onSelect, selected, activeItemId, ...rest }) => (
  <Gallery>
    {(items || []).map((item, index) => (!MAX_ITEMS || index < MAX_ITEMS) ? (
      <ImageContainer
        ratio={item.width / item.height}
        onClick={typeof onSelect === 'function' && (() => onSelect(item.id))}
        selected={selected.findIndex(x => x === item.id) >= 0}
        isActive={activeItemId === item.id}
        key={item.id}
      >
        {/* <Image src={item} width={180} height={180} crop="fit" /> */}
        <Image value={item} mode="fill" height={80} retina />
        {item.format === 'pdf' ? (
          <ImageLabel>
            <Icon type="file-pdf" />
          </ImageLabel>
        ) : undefined}
        {selected.findIndex(x => x === item.id) >= 0 ? (
          <ImageLabel>
            <Icon type="check" />
          </ImageLabel>
        ) : undefined}
      </ImageContainer>
    ) : null)}
  </Gallery>
);
MediaList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  activeItemId: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
};
MediaList.defaultProps = {
  items: [],
  selected: [],
};
export default MediaList;

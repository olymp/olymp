import React, { Component, PropTypes } from 'react';
import { styled } from 'olymp';
import { Icon, Tooltip } from 'antd';
// import Image from './image';

const MAX_ITEMS = 12;

const Gallery = styled(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignContent: 'flex-start',
  padding: 10,
  margin: 0,
  backgroundColor: '#FFFFFF',
  borderRight: '1px solid #e9e9e9',
}), 'div', p => p);

const ImageContainer = styled(({ theme, selected, isActive, ratio }) => {
  let style = {
    height: `8rem`,
    position: 'relative',
    flex: `0 1 ${8 * ratio}rem`,
    margin: '.5rem',
    // boxShadow: '0 0 8px 0 rgba(0, 0, 0, .75)',
    cursor: 'pointer',
    outline: selected ? `2px solid ${theme.color}` : 'none',
    // transform: selected ? 'scale(1.075)' : 'none',
    // backgroundColor: isActive ? theme.color : '#FFF',
    // transition: 'all .15s ease-in-out',
    '> div': {
      display: 'none',
    },
    '> img': {
      opacity: isActive ? .6 : 1,
    },
    ':hover': {
      '> div': {
        display: 'initial',
      },
      //animation: 'none',
      //transform: selected ? 'scale(1.0)' : 'scale(1.075)',
      //transition: 'all .15s ease-in-out',
      zIndex: 3,
    },
  }

  return style;
}, 'div', ({ isActive, selected, ratio, ...p }) => p);

const Image = styled(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#FFF',
}), 'img', p => p);

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
  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  transition: 'all .15s ease-in-out',
  ':hover': {
    transform: 'translate(-50%, -50%) scale(1.33)',
    transition: 'all .15s ease-in-out',
  },
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
        <Image src={item.url} />
        {item.format === 'pdf' ? (
          <ImageLabel>
            <Icon type="file-pdf" />
          </ImageLabel>
        ) : undefined}
        {selected.findIndex(x => x === item.id) >= 0 ? (
          <Tooltip placement="top" title="Von Auswahl entfernen">
            <ImageLabel>
              <Icon type="close" />
            </ImageLabel>
          </Tooltip>
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

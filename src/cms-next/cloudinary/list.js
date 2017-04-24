import React, { Component, PropTypes } from 'react';
import { styled } from 'olymp';
import { Icon } from 'antd';

/*
html {
  font-size: 16px;
}

.thumbnail {
}

.thumbnail:hover {
  opacity: 0.9;
  transition: .2s ease-in;
}
*/
const MAX_ITEMS = 12;

const Gallery = styled(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 10,
  margin: 0,
}), 'div', p => p);

const ImageContainer = styled(({ theme, selected, isActive, ratio }) => {
  let style = {
    backgroundColor: '#333',
    height: `8rem`,
    position: 'relative',
    flex: 1,
    flexBasis: `${8 * ratio}rem`,
    marginRight: 2,
    marginBottom: 2,
    /*':nth-child(5n)': {
      flexBasis: '14rem',
    },
    ':nth-child(2n+1)': {
      flexBasis: '10rem',
    },
    ':nth-child(7n+4)': {
      flexBasis: '20rem',
    },*/
  };
  return style;
}, 'div', ({ isActive, selected, ...p }) => p);

const PlaceholderContainer = styled(({ theme, selected, isActive, ratio }) => {
  let style = {
    backgroundColor: '#333',
    minHeight: `8rem`,
    position: 'relative',
    flex: 1,
    flexBasis: `${8 * ratio}rem`,
    marginRight: 2,
    marginBottom: 2,
    /*':nth-child(5n)': {
      flexBasis: '14rem',
    },
    ':nth-child(2n+1)': {
      flexBasis: '10rem',
    },
    ':nth-child(7n+4)': {
      flexBasis: '20rem',
    },*/
  };
  return style;
}, 'div', ({ isActive, selected, ...p }) => p);

const Image = styled(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}), 'img', p => p);

/*const ImageLabel = styled(({ theme }) => ({
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
}), 'div', p => p);*/

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
        <Image src={item} width={180} height={180} crop="fit" />
        {item.format === 'pdf' ? (
          <ImageLabel>
            <Icon type="file-pdf" />
          </ImageLabel>
        ) : undefined}
        {selected.findIndex(x => x === item.id) >= 0 ? (
          <ImageLabel>
            <Icon type="close" />
          </ImageLabel>
        ) : undefined}
      </ImageContainer>
    ) : null)}
    <PlaceholderContainer flexible />
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

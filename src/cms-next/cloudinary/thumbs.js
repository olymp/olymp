import React, { Component, PropTypes } from 'react';
import { Icon, Button as AntButton, Tooltip } from 'antd';
import { styled } from 'olymp';
import Image from './image';

const ThumbContainer = styled(({ theme }) => ({
  margin: '1rem',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around',
  alignItems: 'baseline',
}), 'div', p => p);

const Thumb = styled(({ theme, isActive }) => ({
  margin: '.25rem 0',
  outline: isActive ? `2px solid ${theme.color}` : 'none',
  // transform: isActive ? 'scale(1.1)' : 'none',
  zIndex: isActive ? 2 : 1,
  cursor: 'pointer',
  position: 'relative',
  /* boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.75)',
  ':hover': {
    transform: 'scale(1.2)',
    transition: 'all .15s ease-in-out',
    zIndex: 3,
  }*/
}), 'div', ({ isActive, ...p }) => p);

const Button = styled(({ theme }) => ({
  margin: '.25rem 0',
  zIndex: 1,
  /*boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.75)',
  ':hover': {
    transform: 'scale(1.2)',
    transition: 'all .15s ease-in-out',
    zIndex: 3,
  }*/
}), AntButton, p => p);

const Label = styled(({ theme }) => ({
  // opacity: .75,
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.color,
  color: "#FFF",
  borderRadius: "50%",
  textAlign: "center",
  fontSize: 17,
  padding: 5,
  lineHeight: 1,
  // boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  ':hover': {
    // opacity: 1,
  }
}), 'div', p => p);

const Thumbs = ({ items, activeItemId, onClick, onRemove }) => (
  <ThumbContainer>
    <Tooltip placement="top" title="Alle bearbeiten">
      <Button type="primary" shape="circle" onClick={() => console.log('test')}>
        <Icon type="appstore-o" />
      </Button>
    </Tooltip>

    {items.map((item, index) => item && item.id ? (
      <Thumb
        isActive={item.id === activeItemId}
        onClick={() => onClick(item.id, index)}
        key={item.id}
      >
        <Image
          value={item}
          retina
          mode="pad"
          width={70}
          height={70}
        />
        {/*onRemove ? (
          <Tooltip placement="top" title="Von Auswahl entfernen">
            <Label onClick={() => onRemove(item.id, index)}>
              <Icon type="close" />
            </Label>
          </Tooltip>
        ) : null*/}
      </Thumb>
    ) : null)}
  </ThumbContainer>
);
Thumbs.propTypes = {
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
  activeItemId: PropTypes.string,
};
Thumbs.defaultProps = {
  onClick: () => {},
  items: [],
};
export default Thumbs;

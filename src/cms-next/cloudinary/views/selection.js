import React, { Component, PropTypes } from 'react';
import { Button, Icon } from 'antd';
import { styled } from 'olymp';
import { Sidebar } from 'olymp/ui';
import Detail from '../detail';
import Thumbs from '../thumbs';

const Line = styled(({ theme }) => ({
  marginBottom: 0,
}), 'hr', p => p);

const SelectionSidebar = ({ items, activeItemId, onSwitch, onSelect }) => {
  const selected = items.findIndex(item => item.id === activeItemId);

  return (
    <Sidebar
      leftButtons={
        <Button
          shape="circle"
          onClick={() => onSwitch(selected + 1 < items.length ? selected + 1 : 0)}
          icon="left"
        />
      }
      rightButtons={
        <Button
          shape="circle"
          onClick={() => onSwitch(selected ? selected - 1 : items.length - 1)}
          icon="right"
        />
      }
      footer={
        <div>
          <Button onClick={() => {}} type="primary">Speichern</Button>
          <Button onClick={() => {}}>Abbrechen</Button>
        </div>
      }
      isOpen
      title="Bearbeiten"
      width={350}
      minWidth={350}
      maxWidth={350}
      padding={0}
    >
      {items.length > 1 ? (
        <Thumbs
          items={items}
          activeItemId={activeItemId}
          onClick={(id, index) => onSwitch(index)}
          onRemove={id => onSelect(id)}
        />
      ) : null}

      {items.length > 1 ? <Line /> : null}

      <Detail item={items.find(item => item.id === activeItemId)} />
    </Sidebar>
  );
};
SelectionSidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  activeItemId: PropTypes.string,
  onSwitch: PropTypes.func,
  onSelect: PropTypes.func,
};
SelectionSidebar.defaultProps = {
  items: [],
  onSwitch: () => {},
  onSelect: () => {},
};
export default SelectionSidebar;

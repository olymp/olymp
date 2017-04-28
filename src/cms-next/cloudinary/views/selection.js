import React, { Component, PropTypes } from 'react';
import { Button, Icon, Tooltip } from 'antd';
import { styled } from 'olymp';
import { Sidebar } from 'olymp/ui';
import Detail from '../detail';
import Thumbs from '../thumbs';

const Line = styled(({ theme }) => ({
  marginBottom: 0,
}), 'hr', p => p);

const Panel = styled(({ theme }) => ({
  textAlign: 'center',
  margin: '5rem auto',
  fontWeight: 200,
  fontSize: '200%',
}));

const SelectionSidebar = ({ items, activeItemId, onSwitch, onSelect }) => {
  const selected = items.findIndex(item => item.id === activeItemId);

  return (
    <Sidebar
      leftButtons={
        <Tooltip title="Von Auswahl entfernen">
          <Button
            shape="circle"
            onClick={id => onSelect(id)}
            icon="close"
            disabled={!items.length}
          />
        </Tooltip>
      }
      rightButtons={
        <Tooltip title="Alle bearbeiten">
          <Button
            shape="circle"
            onClick={() => onSwitch(selected ? selected - 1 : items.length - 1)}
            icon="appstore-o"
            disabled={items.length  <= 1}
          />
        </Tooltip>
      }
      footer={
        <div>
          <Button onClick={() => {}} type="primary" disabled={!items.length}>Speichern</Button>
          <Button onClick={() => {}} disabled={!items.length}>Abbrechen</Button>
        </div>
      }
      isOpen
      title="Bearbeiten"
      width={350}
      minWidth={350}
      maxWidth={350}
      padding={0}
    >
      {items.length ? (
        <div>
          <Thumbs
            items={items}
            activeItemId={activeItemId}
            onClick={(id, index) => onSwitch(index)}
            onRemove={id => onSelect(id)}
          />

          <Line />

          <Detail item={items.find(item => item.id === activeItemId)} />
        </div>
      ) : (
        <Panel>
          Bitte Bilder auswählen
        </Panel>
      )}
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

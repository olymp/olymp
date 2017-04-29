import React, { Component, PropTypes } from 'react';
import { Button, Icon, Tooltip } from 'antd';
import { styled } from 'olymp';
import { Sidebar } from 'olymp/ui';
import Detail from '../detail';
import List from '../list';

const Line = styled(({ theme }) => ({
  margin: 0,
}), 'hr', p => p);

const Panel = styled(({ theme }) => ({
  textAlign: 'center',
  margin: '5rem auto',
  fontWeight: 200,
  fontSize: '200%',
}));

const SelectionSidebar = ({ items, activeItemId, onSelect, onRemove, onCancel }) => (
  <Sidebar
    footer={
      <div>
        <Button onClick={() => {}} type="primary" disabled={!items.length}>Speichern</Button>
        <Button onClick={onCancel} disabled={!items.length}>Abbrechen</Button>
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
        <List
          items={items}
          itemHeight={60}
          selected={[activeItemId]}
          onClick={(id, index) => onSelect(index)}
          onRemove={onRemove}
        />

        <Line />

        <Detail
          item={items.find(item => item.id === activeItemId)}
          multi={items.length > 1}
          source="test"
          tags={['test2']}
        />
      </div>
    ) : (
      <Panel>
        Dateien auswählen
      </Panel>
    )}
  </Sidebar>
);
SelectionSidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  activeItemId: PropTypes.string,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  onCancel: PropTypes.func,
};
SelectionSidebar.defaultProps = {
  items: [],
  onSelect: () => {},
  onRemove: () => {},
  onCancel: () => {},
};
export default SelectionSidebar;

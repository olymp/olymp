import React, { Component, PropTypes } from 'react';
import { Button, Icon, Tooltip } from 'antd';
import { styled } from 'olymp';
import { Sidebar } from 'olymp/ui';
import { isEqual } from 'lodash';
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

class SelectionSidebar extends Component {
  state = {
    items: [],
    source: false,
    tags: false,
  };

  componentWillReceiveProps = props => {
    const { items: stateItems, source, tags } = this.state;
    const propItems = props.items;
    const items = propItems.map(propItem => {
      const stateItem = stateItems.find(item => item.id === propItem.id);

      return stateItem ? stateItem : {
        ...propItem,
        source: source ? stateItems[0].source : propItem.source,
        tags: tags ? stateItems[0].tags : propItem.tags,
      }; // nur neue Items hinzufügen, ansonsten Items aus State verwenden
    });

    this.setState({ items });
  }

  patch = (item, changes) => {
    const newItem = {...item};
    Object.keys(changes).forEach(key => newItem[key] = changes[key]);

    return newItem;
  }

  patchItem = (id, changes) => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        return this.patch(item, changes);
      } else {
        return item;
      }
    });

    this.setState({ items });
  }

  patchItems = (type, val) => {
    const items = this.state.items.map(item => this.patch(item, {[type]: val}));
    this.setState({ items, [type]: !this.state[type] });
  }

  render = () => {
    const { activeItemId, onSelect, onRemove, onCancel } = this.props;
    const { items, source, tags } = this.state;
    const activeItem = items.find(item => item.id === activeItemId);

    return (
      <Sidebar
        footer={
          <div>
            <Button onClick={() => {}} type="primary" disabled={!items.length}>Alle speichern</Button>
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
              item={activeItem}
              multi={items.length > 1}
              patchItem={changes => this.patchItem(activeItem.id, changes)}
              patchItems={this.patchItems}
              source={source}
              tags={tags}
            />
          </div>
        ) : (
          <Panel>
            Dateien auswählen
          </Panel>
        )}
      </Sidebar>
    );
  }
}
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

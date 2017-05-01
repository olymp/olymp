import React, { Component, PropTypes } from 'react';
import { Button, Icon, Tooltip, notification } from 'antd';
import { styled } from 'olymp';
import { Sidebar } from 'olymp/ui';
import { isEqual } from 'lodash';
import Detail from '../detail';
import List from '../list';

const Panel = styled(({ theme }) => ({
  textAlign: 'center',
  margin: '5rem auto',
  fontWeight: 200,
  fontSize: '200%',
}));

const StyledList = styled(({ theme }) => ({
  maxHeight: 250,
  overflow: 'auto',
  padding: '.5rem 0',
  borderTop: '1px solid #e9e9e9',
}), List, p => p);

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
        source: source && stateItems[0] ? stateItems[0].source : propItem.source,
        tags: tags && stateItems[0] ? stateItems[0].tags : propItem.tags,
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

  notification = (key, fn) => {
    notification.open({
      message: 'Änderungen verwerfen?',
      description: 'Wollen Sie wirlich die nicht gespeicherten Änderungen verwerfen?',
      btn: (
        <div>
          <Button size="small" onClick={() => notification.close(key)}>
            Abbrechen
          </Button>&nbsp;
          <Button type="primary" size="small" onClick={() => {
            fn();
            notification.close(key);
          }}>
            Verwerfen
          </Button>
        </div>
      ),
      key,
      onClose: notification.close(key),
      duration: 0,
    });
  }

  onSave = () => {
    const { items } = this.state;

    items.forEach(item => console.log(item));
  }

  onRemove = id => {
    const { onRemove, items: propItems } = this.props;
    const { items: stateItems } = this.state;

    const propItem = propItems.find(item => item.id === id);
    const stateItem = stateItems.find(item => item.id === id);

    if (isEqual(propItem, stateItem)) {
      onRemove(id);
    } else {
      this.notification(`open${Date.now()}`, () => onSelect(id));
    }
  }

  onCancel = () => {
    const { onCancel, items: propItems } = this.props;
    const { items: stateItems } = this.state;
    let changes = false;

    stateItems.forEach(stateItem => {
      const propItem = propItems.find(item => item.id === stateItem.id);

      if (!isEqual(propItem, stateItem)) {
        changes = true;
      }
    });

    if (changes) {
      this.notification(`open${Date.now()}`, onCancel);
    } else {
      onCancel();
    }
  }

  render = () => {
    const { activeItemId, onSelect } = this.props;
    const { items, source, tags } = this.state;
    const activeItem = items.find(item => item.id === activeItemId);

    return (
      <Sidebar
        header={items.length > 1 ? (
          <StyledList
            items={items}
            itemHeight={60}
            selected={[activeItemId]}
            onClick={(id, index) => onSelect(index)}
            onRemove={this.onRemove}
            justifyContent="space-around"
          />
        ) : null}
        footer={
          <div>
            <Button onClick={this.onSave} type="primary" disabled={!items.length}>Alle speichern</Button>
            <Button onClick={this.onCancel} disabled={!items.length}>Abbrechen</Button>
          </div>
        }
        isOpen
        title="Bearbeiten"
        subtitle="Ausgewählte Medien editieren"
        width={350}
        minWidth={350}
        maxWidth={350}
        padding={0}
      >
        {items.length ? (
          <Detail
            item={activeItem}
            multi={items.length > 1}
            patchItem={changes => this.patchItem(activeItem.id, changes)}
            patchItems={this.patchItems}
            source={source}
            tags={tags}
          />
        ) : (
          <Panel>
            Dateien auswählen
          </Panel>
        )}
      </Sidebar>
    );
  }
};
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

import React, { Component, PropTypes } from 'react';
import { Button, Icon, Tooltip, notification } from 'antd';
import { styled } from 'olymp';
import { Sidebar } from 'olymp/ui';
import { isEqual } from 'lodash';
import { mutateFile } from '../gql';
import Detail from '../detail';
import Gallery from '../gallery';

const Panel = styled(({ theme }) => ({
  textAlign: 'center',
  margin: '5rem auto',
  fontWeight: 200,
  fontSize: '200%',
}));

const StyledGallery = styled(({ theme }) => ({
  maxHeight: 250,
  overflow: 'auto',
  padding: '.5rem 0',
  borderTop: '1px solid #e9e9e9',
}), Gallery, p => p);

@mutateFile
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

  isEqual = (obj1, obj2) => {
    // null, undefined, false, '' => null
    const nulize = obj => {
      const clone = {};
      Object.keys(obj).forEach(key => {
        if (obj[key]) {
          clone[key] = obj[key];
        } else {
          clone[key] = null;
        }
      });

      return clone;
    }

    return isEqual(nulize(obj1), nulize(obj2));
  }

  onSave = () => {
    const { items } = this.state;
    const { save } = this.props;

    items.forEach(item => save(item));
  }

  onRemove = id => {
    const { onRemove, items: propItems } = this.props;
    const { items: stateItems } = this.state;

    const propItem = propItems.find(item => item.id === id);
    const stateItem = stateItems.find(item => item.id === id);

    if (this.isEqual(propItem, stateItem)) {
      onRemove(id);
    } else {
      this.notification(`open${Date.now()}`, () => onClick(id));
    }
  }

  onCancel = () => {
    const { onCancel, items: propItems } = this.props;
    const { items: stateItems } = this.state;
    let changes = false;

    stateItems.forEach(stateItem => {
      const propItem = propItems.find(item => item.id === stateItem.id);

      if (!this.isEqual(propItem, stateItem)) {
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
    const { activeItemId, onClick, onSelect } = this.props;
    const { items, source, tags } = this.state;
    const activeItem = items.find(item => item.id === activeItemId);

    return (
      <Sidebar
        right
        header={items.length > 1 ? (
          <StyledGallery
            items={items}
            itemHeight={60}
            selected={[activeItemId]}
            onClick={(id, index) => onClick(index)}
            onRemove={this.onRemove}
            justifyContent="space-around"
          />
        ) : null}
        footer={
          <div>
            {!onSelect ? (
              <Button onClick={this.onSave} type="primary" disabled={!items.length}>{items.length > 1 ? 'Alle speichern' : 'Speichern'}</Button>
            ) : (
              <Button onClick={() => onSelect(items)} type="primary" disabled={!items.length}>Übernehmen</Button>
            )}
            <Button onClick={this.onCancel} disabled={!items.length}>Abbrechen</Button>
          </div>
        }
        isOpen
        title={!onSelect ? 'Bearbeiten' : 'Auswählen'}
        subtitle={!onSelect ? 'Ausgewählte Medien editieren' : 'Medien zur Weiterverarbeitung auswählen'}
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
            editable={!onSelect}
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
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  onCancel: PropTypes.func,
};
SelectionSidebar.defaultProps = {
  items: [],
  onClick: () => {},
  onRemove: () => {},
  onCancel: () => {},
};
export default SelectionSidebar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import { Sidebar, List } from 'olymp-ui';
import { queryTemplates } from '../gql';

@queryTemplates
class ListSidebar extends Component {
  render() {
    const { onClick, onClose, search, onSearch, id } = this.props;
    const items = this.props.items.filter(
      item =>
        !search || item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    return (
      <Sidebar
        leftButtons={
          <Popover content="Templates schließen">
            <Sidebar.Button shape="circle" onClick={onClose} icon="close" />
          </Popover>
        }
        rightButtons={
          <Popover content="Template hinzufügen">
            <Sidebar.Button
              onClick={() => onClick({ id: null })}
              shape="circle"
              icon="plus"
            />
          </Popover>
        }
        header={
          <List.Filter
            placeholder="Filter ..."
            onChange={onSearch}
            value={search}
          />
        }
        isOpen
        padding={0}
        title="Templates"
        subtitle="Templates sichten und verwalten"
      >
        {items.map(item =>
          (<List.Item
            active={item.id === id}
            label={item.name}
            onClick={() => onClick(item)}
            key={item.id}
          />)
        )}
      </Sidebar>
    );
  }
}
ListSidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
export default ListSidebar;

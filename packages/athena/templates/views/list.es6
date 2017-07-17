import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          <Sidebar.Button shape="circle" onClick={onClose} icon="close" />
        }
        rightButtons={
          <Sidebar.Button
            onClick={() => onClick({ id: null })}
            shape="circle"
            icon="plus"
          />
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
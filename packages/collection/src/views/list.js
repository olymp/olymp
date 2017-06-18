import React, { Component, PropTypes } from 'react';
import { Popover } from 'antd';
import { Sidebar, List } from 'olymp-ui';

class ListSidebar extends Component {
  render() {
    const { id, onClick, onClose, search, onSearch, type } = this.props;
    const items = this.props.items.filter(
      item =>
        !search || item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    return (
      <Sidebar
        leftButtons={
          <Popover content={`${type} schließen`}>
            <Sidebar.Button onClick={onClose} shape="circle" icon="close" />
          </Popover>
        }
        rightButtons={
          <Popover content={`${type} hinzufügen`}>
            <Sidebar.Button
              onClick={() => onClick({ id: null })}
              shape="circle"
              icon="plus"
            />
          </Popover>
        }
        title={type}
        subtitle={`${type} sichten und verwalten`}
        header={
          <List.Filter
            placeholder="Filter ..."
            onChange={search => this.setState({ search })}
            value={search}
          />
        }
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

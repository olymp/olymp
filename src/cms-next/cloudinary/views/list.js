import React, { Component, PropTypes } from 'react';
import { Button, Icon, Popover, Upload } from 'antd';
import { Sidebar, List } from 'olymp/ui';
import { intersection, upperFirst, orderBy } from 'lodash';

class ListSidebar extends Component {
  state = {
    isOpen: true,
  };

  componentWillMount = () => {
    const { onFilter, items } = this.props;

    onFilter([], items);
  }

  getTags = items => {
    const { search } = this.props;
    const tags = { 'Ohne Schlagworte': [] };

    items.forEach(item => {
      if (!item.tags.length) {
        tags['Ohne Schlagworte'].push(item);
      } else {
        item.tags.forEach(tag => {
          if (!search || tag.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
            if (!tags[tag]) tags[tag] = [];
            tags[tag].push(item);
          }
        });
      }
    });

    return tags;
  }

  getDirectories = () => {
    const { search, filter, onFilter } = this.props;
    const items = this.props.items.map(item => ({
      ...item,
      tags: !item.tags.length ? ['Ohne Schlagworte'] : item.tags,
    }))
    const tags = this.getTags(items);

    return Object.keys(tags).map(tag => {
      const active = !!filter.find(x => x === tag);
      const filteredTags = !active ? [...filter, tag] : filter.filter(x => x !== tag);
      const filteredItems = items.filter(item => intersection(item.tags, filteredTags).length === filteredTags.length);
      const countFilter = (this.getTags(filteredItems)[tag] || []).length;
      const countAll = tags[tag].length;
      const disabled = !countFilter;
      const text = `${countAll} Dateien`;

      return {
        active,
        disabled,
        onClick: () => onFilter(filteredTags, filteredItems),
        label: upperFirst(tag),
        description: countFilter === countAll ? text : `${countFilter} von ${text}`,
        image: tags[tag][0],
        countFilter,
        countAll,
        key: tag,
      };
    })
  }

  render() {
    const { items, upload, onClose, search, onSearch, filter, onFilter } = this.props;
    const { isOpen } = this.state;

    const directories = orderBy(this.getDirectories(), ['active', 'disabled', 'countFilter', 'countAll', 'label'], ['desc', 'asc', 'desc', 'desc', 'asc']);

    return (
      <Sidebar
        leftButtons={
          <Popover content="Mediathek schließen">
            <Sidebar.Button shape="circle" onClick={() => onClose(this)} icon="close" />
          </Popover>
        }
        rightButtons={
          <Popover content="Datei hochladen">
            <Upload {...upload}>
              <Sidebar.Button shape="circle" icon="upload" />
            </Upload>
          </Popover>
        }
        header={
          <List.Filter placeholder="Filter ..." onChange={onSearch} value={search} />
        }
        isOpen={isOpen}
        padding={0}
        title="Mediathek"
        subtitle="Medien sichten und verwalten"
      >
        {directories.find(dir => dir.disabled) ? <List.Item label="Zurück" icon="left" onClick={() => onFilter([], items)} /> : null}
        {directories.map(dir => !dir.disabled ? <List.Item {...dir} icon={dir.active && 'left'} /> : null)}
      </Sidebar>
    );
  }
};
ListSidebar.propTypes = {
  onClose: PropTypes.func,
  onSearch: PropTypes.func,
  onFilter: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
  upload: PropTypes.object,
  search: PropTypes.string,
  filter: PropTypes.array,
};
ListSidebar.defaultProps = {
  onClose: x => x.setState({ isOpen: false }),
  onSearch: () => {},
  onFilter: () => {},
  items: [],
  upload: {},
  filter: [],
};
export default ListSidebar;

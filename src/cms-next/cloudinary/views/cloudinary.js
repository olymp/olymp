import React, { Component, PropTypes } from 'react';
import { Button, Icon, Tooltip } from 'antd';
import { styled } from 'olymp';
import { Sidebar, List } from 'olymp/ui';
import { isEqual, intersection, upperFirst, orderBy } from 'lodash';
import { queryMedias } from '../gql';
import { SplitView } from '../../style';
import ListView from '../list';
import SelectionSidebar from './selection';

const StyledList = styled(({ theme }) => ({
  borderRight: '1px solid #e9e9e9',
}), ListView, p => p);

class CloudinaryView extends Component {
  state = {
    isOpen: true,
    selection: 0,
    tagFilter: [],
  };

  onClick = id => {
    const { selected, onSelect } = this.props;
    const index = selected.findIndex(selectedId => selectedId === id);

    if (index < 0) {
      this.setState({ selection: selected.length });
      onSelect([id]);
    } else {
      this.setState({ selection: index });
    }
  }

  onRemove = id => {
    const { onSelect, selected } = this.props;
    const { selection } = this.state;
    const index = selected.findIndex(item => item.id === id);

    if (index < selection || (index === selection && index === selected.length - 1)) {
      this.setState({ selection: selection - 1 });
    }

    onSelect([id]);
  }

  getTags = items => {
    const tags = {};

    items.forEach(item => item.tags.forEach(tag => {
      if (!tags[tag]) tags[tag] = [];
      tags[tag].push(item);
    }));

    return tags;
  }

  getDirectories = (tags, items) => Object.keys(tags).map(tag => {
    const { tagFilter } = this.state;
    const isActive = !!tagFilter.find(x => x === tag);
    const count = tags[tag].length;

    return {
      active: isActive,
      disabled: !isActive && !items.filter(item => item.tags.find(x => x === tag)).length,
      onClick: () => this.setState({ tagFilter: !isActive ? [...tagFilter, tag] : tagFilter.filter(x => x !== tag) }),
      label: upperFirst(tag),
      description: `${count} Bilder mit diesem Schlagwort`,
      image: tags[tag][0],
      count,
      key: tag,
    };
  })

  render() {
    const { selected, onSelect, onClose, deviceWidth, items } = this.props;
    const { isOpen, selection, search, tagFilter } = this.state;
    const filteredItems = items.filter(item => intersection(item.tags, tagFilter).length === tagFilter.length);
    const directories = orderBy(this.getDirectories(this.getTags(items), filteredItems), ['active', 'disabled', 'count', 'label'], ['desc', 'asc', 'desc', 'asc']);

    return (
      <SplitView deviceWidth={deviceWidth}>
        <Sidebar
          leftButtons={
            <Tooltip title="Mediathek schließen">
              <Button shape="circle" onClick={() => onClose(this)} icon="close" />
            </Tooltip>
          }
          rightButtons={
            <Tooltip title="Datei hochladen">
              <Button shape="circle" icon="upload" />
            </Tooltip>
          }
          header={
            <List.Filter placeholder="Filter ..." onChange={search => this.setState({ search })} value={search} />
          }
          isOpen={isOpen}
          padding={0}
          title="Mediathek"
          subtitle="Medien sichten und verwalten"
        >
          {directories.map(dir => <List.Item {...dir} />)}
        </Sidebar>

        <StyledList
          onClick={this.onClick}
          onRemove={this.onRemove}
          selected={selected}
          items={filteredItems}
        />

        <SelectionSidebar
          items={selected.map(x => items.find(item => item.id === x)).filter(x => x)}
          activeItemId={selected[selection]}
          onSelect={index => this.setState({ selection: index })}
          onRemove={this.onRemove}
          onCancel={() => onSelect(selected)}
        />
      </SplitView>
    );
  }
};
CloudinaryView.propTypes = {
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.object),
};
CloudinaryView.defaultProps = {
  onClose: x => x.setState({ isOpen: false }),
  onSelect: selectionIds => console.log(selectionIds),
  selected: [],
  items: [],
};
export default queryMedias(CloudinaryView);

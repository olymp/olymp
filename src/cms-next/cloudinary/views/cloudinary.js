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

const StyledFilter = styled(({ theme }) => ({
  borderTop: '1px solid #e9e9e9',
}), List.Filter, p => p);

class CloudinaryView extends Component {
  state = {
    isOpen: true,
    selection: 0,
    tagFilter: [],
  };

  onClick = id => {
    const { selected, onClick } = this.props;
    const index = selected.findIndex(selectedId => selectedId === id);

    if (index < 0) {
      this.setState({ selection: selected.length });
      onClick([id]);
    } else {
      this.setState({ selection: index });
    }
  }

  onRemove = id => {
    const { onClick, selected } = this.props;
    const { selection } = this.state;
    const index = selected.findIndex(itemId => itemId === id);

    if (index < selection || (index === selection && index === selected.length - 1)) {
      this.setState({ selection: selection - 1 });
    }

    onClick([id]);
  }

  getTags = items => {
    const tags = { "Ohne Schlagworte": [] };

    items.forEach(item => {
      if (!item.tags.length) {
        tags["Ohne Schlagworte"].push(item);
      } else {
        item.tags.forEach(tag => {
          if (!tags[tag]) tags[tag] = [];
          tags[tag].push(item);
        });
      }
    });

    return tags;
  }

  getDirectories = (tags, items) => Object.keys(tags).map(tag => {
    const { tagFilter } = this.state;
    const isActive = !!tagFilter.find(x => x === tag);
    const count = tags[tag].length;

    return {
      active: isActive,
      disabled: !isActive && !items.filter(item => (tag === 'Ohne Schlagworte' && !item.tags.length) || item.tags.find(x => x === tag)).length,
      onClick: () => this.setState({ tagFilter: !isActive ? [...tagFilter, tag] : tagFilter.filter(x => x !== tag) }),
      label: upperFirst(tag),
      description: `${count} Medien mit diesem Schlagwort`,
      image: tags[tag][0],
      count,
      key: tag,
    };
  })

  render() {
    const { selected, onClick, onClose, deviceWidth, format, onSelect } = this.props;
    const { isOpen, search, tagFilter } = this.state;
    const selection = this.state.selection >= 0 && this.state.selection < selected.length ? this.state.selection : 0;

    let items = this.props.items;
    if (format) {
      items = items.filter(x => x.format === format);
    }
    const filteredItems = items.filter(item => intersection(item.tags, tagFilter).length === tagFilter.length || (tagFilter.find(tag => tag === 'Ohne Schlagworte') && !item.tags.length));
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
            <StyledFilter placeholder="Filter ..." onChange={search => this.setState({ search })} value={search} />
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
          // onRemove={this.onRemove} derzeit wird hier nicht erkannt ob Änderungen vorliegen oder nicht, daher kommt kein Prompt wenn man in dieser Liste ein Bild schließt
          selected={selected}
          items={filteredItems}
        />

        <SelectionSidebar
          items={selected.map(x => items.find(item => item.id === x)).filter(x => x)}
          activeItemId={selected[selection]}
          onClick={index => this.setState({ selection: index })}
          onRemove={this.onRemove}
          onCancel={() => onClick(selected)}
          onSelect={onSelect}
        />
      </SplitView>
    );
  }
};
CloudinaryView.propTypes = {
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.object),
  format: PropTypes.bool,
};
CloudinaryView.defaultProps = {
  onClose: x => x.setState({ isOpen: false }),
  onClick: () => {},
  selected: [],
  items: [],
  format: false,
};
export default queryMedias(CloudinaryView);

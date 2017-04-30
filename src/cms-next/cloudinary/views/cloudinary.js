import React, { Component, PropTypes } from 'react';
import { Button, Icon, Tooltip } from 'antd';
import { styled } from 'olymp';
import { Sidebar, List } from 'olymp/ui';
import { isEqual } from 'lodash';
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

  render() {
    const { selected, onSelect, onClose, deviceWidth, items } = this.props;
    const { isOpen, selection, search } = this.state;

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
          isOpen={isOpen}
          minWidth={400}
          padding={0}
          title="Mediathek"
          subtitle="Medien sichten und verwalten"
        >
          <List.Filter placeholder="Filter ..." onChange={search => this.setState({ search })} value={search} />
          {[{ pathname: '', id: 0, name: 'Abc'}].map(item => (
            <List.Card key={item.id} label={item.name} description={item.isAdmin ? 'Administrator' : 'Benutzer'} />
          ))}
        </Sidebar>

        <StyledList
          onClick={this.onClick}
          onRemove={this.onRemove}
          selected={selected}
          items={items}
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

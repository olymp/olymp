import React, { Component, PropTypes } from 'react';
import { Button, Icon, Tooltip } from 'antd';
import { styled } from 'olymp';
import { Sidebar, List } from 'olymp/ui';
import { queryMedias } from '../gql';
import { SplitView } from '../../style';
import ListView from '../list';
import SelectionSidebar from './selection';

class CloudinaryView extends Component {
  state = {
    isOpen: true,
    selection: 0,
  };

  componentWillUpdate = (nextProps, nextState) => {
    const { selection } = nextState;
    const { selected } = nextProps;

    if (selected.length && selection >= selected.length) {
      this.setState({ selection: selection - 1 })
    }
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
          {[{ pathname: '', id: 0, name: 'Abc'}].map(item => <List.Item active={false} to={item.pathname} key={item.id} label={item.name} description={item.isAdmin ? 'Administrator' : 'Benutzer'} />)}
        </Sidebar>

        <ListView
          onClick={id => {
            const index = selected.findIndex(selectedId => selectedId === id);

            if (index < 0) {
              this.setState({ selection: selected.length });
              onSelect([id]);
            } else {
              this.setState({ selection: index });
            }
          }}
          onRemove={onSelect}
          selected={selected}
          items={items}
        />

        <SelectionSidebar
          items={selected.map(x => items.find(item => item.id === x)).filter(x => x)}
          activeItemId={selected[selection]}
          onSelect={index => this.setState({ selection: index })}
          onRemove={onSelect}
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

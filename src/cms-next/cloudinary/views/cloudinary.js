import React, { Component, PropTypes } from 'react';
import { Button, Icon } from 'antd';
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

  render() {
    const { selected, onSelect, onClose, deviceWidth, items } = this.props;
    const { isOpen, selection, search } = this.state;

    return (
      <SplitView deviceWidth={deviceWidth}>
        <Sidebar
          leftButtons={
            <Button shape="circle" onClick={() => onClose(this)} icon="close" />
          }
          rightButtons={
            <Button shape="circle" icon="upload" />
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
          onSelect={onSelect}
          selected={selected}
          items={items}
          activeItemId={selected[selection]}
        />

        {items && selected && selected.length ? (
          <SelectionSidebar
            items={selected.map(x => items.find(item => item.id === x)).filter(x => x)}
            activeItemId={selected[selection]}
            onSwitch={index => this.setState({ selection: index })}
            onSelect={id => {
              if (id === selected[selection]) this.setState({ selection: 0 });
              onSelect(id);
            }}
          />
        ) : null}
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
  onSelect: selectionId => console.log(selectionId),
  selected: [],
  items: [],
};
export default queryMedias(CloudinaryView);

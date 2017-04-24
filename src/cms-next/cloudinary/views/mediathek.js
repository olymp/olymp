import React, { Component, PropTypes } from 'react';
import { Button, Icon } from 'antd';
import { styled } from 'olymp';
import { Sidebar } from 'olymp/ui';
import { queryMedias } from '../gql';
import { Splitview } from '../../pages/styled';
import List from '../list';
import SelectionSidebar from './selection';

class Mediathek extends Component {
  state = {
    isOpen: true,
    selection: 0,
  };

  render() {
    const { selected, onSelect, onClose, deviceWidth, items } = this.props;
    const { isOpen, selection } = this.state;

    return (
      <Splitview deviceWidth={deviceWidth}>
        <Sidebar
          leftButtons={
            <Button type="primary" shape="circle" onClick={() => onClose(this)}>
              <Icon type="close" />
            </Button>
          }
          rightButtons={
            <Button type="primary" shape="circle">
              <Icon type="upload" />
            </Button>
          }
          isOpen={isOpen}
          minWidth={400}
          padding={0}
          title="Mediathek"
          subtitle="Medien sichten und verwalten"
        >
          Hier kommen die Ordner hin
        </Sidebar>

        <List
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
      </Splitview>
    );
  }
};
Mediathek.propTypes = {
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.object),
};
Mediathek.defaultProps = {
  onClose: x => x.setState({ isOpen: false }),
  onSelect: selectionId => console.log(selectionId),
  selected: [],
  items: [],
};
export default queryMedias(Mediathek);

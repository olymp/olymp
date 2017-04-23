import React, { Component, PropTypes } from 'react';
import { Button, Icon } from 'antd';
import { Sidebar } from 'olymp/ui';
import { Gateway } from 'react-gateway';
import { Splitview } from '../../pages/styled';
import List from '../list';
import Detail from '../detail';

class Mediathek extends Component {
  state = {
    isOpen: true,
  };

  render() {
    const { selected, onSelect, onClose, deviceWidth } = this.props;
    const { isOpen } = this.state;

    const leftButtons = (
      <Button.Group>
        <Button onClick={() => onClose(this)}>
          <Icon type="close" />
        </Button>
      </Button.Group>
    );
    const rightButtons = (
      <Button.Group>
        <Button>
          <Icon type="plus" />
        </Button>
      </Button.Group>
    );

    return (
      <Splitview deviceWidth={deviceWidth}>
        <Sidebar
          leftButtons={leftButtons}
          rightButtons={rightButtons}
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
        />

        {selected.length && (
          <Detail image={!!selected && !!selected.length && selected[0]} />
        )}
      </Splitview>
    );
  }
};
Mediathek.propTypes = {
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
};
Mediathek.defaultProps = {
  onClose: x => x.setState({ isOpen: false }),
  onSelect: selectionId => console.log(selectionId),
  selected: [],
};
export default Mediathek;

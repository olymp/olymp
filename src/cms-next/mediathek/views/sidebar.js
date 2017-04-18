import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { Button, Form, Icon } from 'antd';
import { Sidebar } from 'olymp/ui';
import { Gateway } from 'react-gateway';
import { Splitview } from '../../pages/styled';
import List from '../list';
import SidebarOne from './sidebar-one';

@withRouter
@Form.create()
export default class MediathekSidebar extends Component {
  state = {
    selected: [],
  };

  selectImage = (item, isActive) => {
    const { id, router, location, onChange, multi } = this.props;
    const selected = ([...this.state.selected]);

    if (id && !selected.length) {
      selected.push(id);
    }

    if (multi) {
      this.setState(
        { selected: !isActive ? [...selected, item.id] : selected.filter(x => x !== item.id) }
      );

      if (!onChange) router.replace({ pathname: location.pathname, query: { ...location.query, '@mediathek': null } });
    } else if (onChange) {
      this.setState(
        { selected: !isActive ? [item.id] : [] }
      );
    } else {
      router.push({ pathname: location.pathname, query: { ...location.query, '@mediathek': item.id } });
    }
  }

  render() {
    const { id, router, pathname, query, deviceWidth } = this.props;
    const { selected } = this.state;

    const leftButtons = (
      <Button.Group>
        <Button onClick={() => router.push({pathname, query: { ...query, ['@mediathek']: undefined }})}>
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
          isOpen
          onClose={() => router.push(pathname)}
          minWidth={400}
          padding={0}
          title="Mediathek"
          subtitle="Medien sichten und verwalten"
        >
          Hier kommen die Ordner hin
        </Sidebar>

        <List
          id={id}
          onClick={this.selectImage}
          selected={selected}
          multi
        />

        {(id || (selected && selected.length)) && (
          <SidebarOne images={selected.map(id => [].find(x => x.id === id))} />
        )}
      </Splitview>
    );
  }
}

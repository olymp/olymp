import React, { Component } from 'react';
import { Dropdown, Button, Tabs, Input, Card, Menu, Icon, Table, Col, Spin } from 'antd';
import { withRouter, withCollection, withItems, Link, withApollo, throttleInput } from 'olymp';
import Image from '../../edits/image';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';
import Filter from './filter';

function hexToRgba(hex, a) {
  // const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  // return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${a || 1})` : null;
  return tinycolor(hex).setAlpha(a).toRgbString();
}

const Sidebar = createComponent(() => ({
  left: 0,
  top: 0,
  width: '340px',
  bottom: 0,
  position: 'fixed',
  backgroundColor: '#f9f9f9',
  borderRight: '1px solid #e0e0e0',
  zIndex: 3,
}));

const Panel = createComponent(({ seperator, align, padding }) => ({
  padding: padding || '5px 10px',
  borderTop: seperator ? '1px solid #e6e6e6' : 0,
  textAlign: align,
}));

const Title = createComponent(() => ({
  fontSize: '20px',
  paddingTop: '10px',
  paddingBottm: '5px',
}), 'h1');

const Li = createComponent(({ active }) => ({
  fontWeight: active && 'bold',
  fontSize: '16px',
  ':hover': {
    backgroundColor: 'white',
  },
}), 'li');

const StyledLink = createComponent(({ active }) => ({
  fontWeight: active && 'bold',
}), props => <Link {...props} />, ['to']);

const StyledInput = createComponent(({ theme }) => ({
  display: 'block',
  margin: '10px auto',
  width: '90%',
  ':hover': {
    borderColor: `${theme.color}!important`,
  },
  ':focus': {
    borderColor: `${theme.color}!important`,
    boxShadow: `0 0 0 2px ${hexToRgba(theme.color, 0.2)}!important`,
  },
}), props => <Input {...props} />, ['placeholder']);

const StyledButton = createComponent(({ theme }) => ({
  ':hover': {
    color: `${theme.color}!important`,
    borderColor: `${theme.color}!important`,
  },
}), props => <Button {...props} />, ['placeholder']);

@withItems({ })
@withRouter
class CollectionList extends Component {
  getLink = (item) => {
    const { onClick, collection, name, saveCollectionItem, removeCollectionItem, location, items } = this.props;
    const { pathname } = location;
    return { pathname, query: { ...location.query, [`@${collection.name.toLowerCase()}`]: item ? item.id : null } };
  }

  renderMenu = () => {
    const { name } = this.props;

    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#">Bearbeiten</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#">Kopieren</a>
        </Menu.Item>
        <Menu.Item>
          {name !== 'REMOVED'
            ? 'Löschen'
            : 'Wiederherstellen'
          }
        </Menu.Item>
      </Menu>
    );
  }

  renderCard = (item) => {
    const { id, router } = this.props;

    const colorStyle = {};
    if (item.farbe) {
      colorStyle.backgroundColor = tinycolor(item.farbe).setAlpha(0.33).toRgbString();
      // colorStyle.color = tinycolor(item.farbe).isLight ? '#333' : '#CCC';
      colorStyle.color = '#333';
    }

    const activeStyle = {};
    if (item.id === id) {
      activeStyle.left = 15;
      activeStyle.border = 'none';
      activeStyle.boxShadow = '0 0 5px 0 rgba(0, 0, 0, .33)';
      activeStyle.margin = '3px 0';
    }

    return (
      <Card
        onClick={() => router.push(this.getLink(item))}
        key={item.id}
        extra={<Dropdown overlay={this.renderMenu()}><Icon type="edit" /></Dropdown>}
        style={{ cursor: 'pointer', margin: '3px 0', ...colorStyle, ...activeStyle }}
        bodyStyle={{ padding: 0, ...colorStyle }}
      >
        <div style={{ width: 60 }}>
          {
            item.bild ? (
              <Image value={item.bild} width={60} ratio={1} />
            ) : (
              <div style={{ width: 60, height: 60 }} />
            )
          }
        </div>
        <div style={{ padding: 5, position: 'absolute', left: 65, top: '50%', transform: 'translateY(-50%)' }}>
          <h6 style={{ textOverflow: 'ellipsis', overflow: 'hidden', width: 200, whiteSpace: 'nowrap' }}>{item.kurz || item.name || 'Kein Titel'}</h6>
          <p style={{ margin: 0, textOverflow: 'ellipsis', overflow: 'hidden', width: 200, whiteSpace: 'nowrap' }}>weitere Infos</p>
        </div>
      </Card>
    );
  }

  render() {
    const { items, isLoading } = this.props;

    if (isLoading) return <Spin />;

    return (
      <div>
        {items && items.map(item => this.renderCard(item))}
      </div>
    );
  }
}

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  ARCHIVED: 'Archiv',
  REMOVED: 'Papierkorb',
};

@withItems({ state: Object.keys(states) })
@withApollo
@withRouter
// @withCollection
export default class CollectionListSidebar extends Component {
  state = { query: { state: { eq: 'PUBLISHED' } }, filtering: false, searchText: '' };
  throttle = throttleInput();

  setQuery = (query) => {
    this.setState({
      filtering: true,
      searchText: '',
      query,
    });
  }

  setQueryToState = (eq = 'PUBLISHED') => {
    this.setState({
      filtering: false,
      query: { state: { eq } },
      searchText: '',
    });
  }

  search = (e) => {
    if (!e.target.value) return this.setQueryToState();
    const searchText = e.target.value;
    this.setState({
      searchText,
    });
    this.throttle(() => {
      if (!this.state.searchText) return;
      this.setState({
        filtering: true,
        query: { name: { contains: this.state.searchText } },
      });
    });
  }

  getLink = (item) => {
    const { onClick, collection, name, saveCollectionItem, removeCollectionItem, location, items } = this.props;
    const { pathname } = location;
    return { pathname, query: { ...location.query, [`@${collection.name.toLowerCase()}`]: item ? item.id : null } };
  }

  render() {
    const { onClick, collection, name, saveCollectionItem, removeCollectionItem, location, items, id, router } = this.props;
    const { query, filtering, searchText } = this.state;

    return (
      <Sidebar>
        <Panel align="center" padding="10px 10px">
          <Title>{collection.name}</Title>
          <StyledButton><Link to={this.getLink()}><i className="fa fa-plus" /> Neu erstellen</Link></StyledButton>
        </Panel>
        <Panel seperator>
          <Input.Group size="large">
            <Col span="18">
              <Input placeholder="Suche ..." onChange={this.search} value={searchText} />
            </Col>
            <Col span="4">
              {!filtering && <Filter onFilter={this.setQuery} collection={collection} />}
              {filtering && <Button onClick={e => this.setQueryToState()}>Reset <i className="fa fa-clear" /></Button>}
            </Col>
          </Input.Group>
        </Panel>
        {!filtering && (
          <Panel seperator>
            <Tabs onChange={eq => this.setQueryToState(eq)} style={{ marginBottom: -16 }}>
              {Object.keys(states).map(name => <Tabs.TabPane tab={states[name]} key={name} />)}
            </Tabs>
          </Panel>
        )}
        <Panel>
          <CollectionList collection={collection} location={location} id={id} query={query} />
        </Panel>
      </Sidebar>
    );
  }
}

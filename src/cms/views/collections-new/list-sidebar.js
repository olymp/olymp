import React, { Component } from 'react';
import { Dropdown, Button, Tabs, Input, Card, Menu, Icon, Col, Spin } from 'antd';
import { withRouter, withCollection, withItems, Link, withApollo, throttleInput } from 'olymp';
import Image from '../../edits/image';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';
import Filter from './filter';

const StyledSidebar = createComponent(() => ({
  left: 0,
  top: 0,
  width: '340px',
  bottom: 0,
  position: 'fixed',
  backgroundColor: '#f9f9f9',
  borderRight: '1px solid #e0e0e0',
  zIndex: 3,
}));

const StyledPanel = createComponent(({ seperator, align, padding }) => ({
  padding: padding || '5px 10px',
  borderTop: seperator ? '1px solid #e6e6e6' : 0,
  textAlign: align,
}));

const StyledTitle = createComponent(() => ({
  fontSize: '20px',
  paddingTop: '10px',
  paddingBottm: '5px',
}), 'h1');

const StyledButton = createComponent(({ theme }) => ({
  ':hover': {
    color: `${theme.color}!important`,
    borderColor: `${theme.color}!important`,
  },
}), props => <Button {...props} />, ['placeholder']);

const StyledCard = createComponent(({ isActive, color }) => {
  const colorStyle = {};
  if (color) {
    colorStyle.backgroundColor = tinycolor(color).setAlpha(0.33).toRgbString();
    // colorStyle.color = tinycolor(item.farbe).isLight ? '#333' : '#CCC';
    colorStyle.color = '#333';
  }

  const activeStyle = {};
  if (isActive) {
    activeStyle.left = '15px';
    activeStyle.borderWidth = '0!important';
    activeStyle.boxShadow = '0 0 5px 0 rgba(0, 0, 0, .33)';
  }

  return {
    cursor: 'pointer',
    margin: '3px 0',
    ...activeStyle,
    ...colorStyle,
    '> .ant-card-extra': {
      top: '5px',
      right: '5px',
    },
    '> .ant-card-body': {
      padding: 0,
      ...colorStyle,
    },
  };
}, props => <Card {...props} />, ['onClick', 'extra']);

const StyledCardContent = createComponent(() => ({
  padding: '5px',
  position: 'absolute',
  left: '65px',
  top: '50%',
  transform: 'translateY(-50%)',
}));

const StyledCardTitle = createComponent(() => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '200px',
  whiteSpace: 'nowrap',
}), 'h6');

const StyledCardParagraph = createComponent(() => ({
  margin: 0,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '200px',
  whiteSpace: 'nowrap',
}), 'p');

@withItems({ })
@withRouter
class CollectionList extends Component {
  getLink = (item) => {
    const { collection, location } = this.props;
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

    return (
      <StyledCard
        onClick={() => router.push(this.getLink(item))}
        key={item.id}
        extra={<Dropdown overlay={this.renderMenu()}><Icon type="edit" /></Dropdown>}
        isActive={item.id === id}
        color={item.farbe}
      >
        {item.bild && <Image value={item.bild} width={60} ratio={1} />}
        <StyledCardContent>
          <StyledCardTitle>{item.kurz || item.name || 'Kein Titel'}</StyledCardTitle>
          <StyledCardParagraph>weitere Infos</StyledCardParagraph>
        </StyledCardContent>
      </StyledCard>
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

@withApollo
@withRouter
@withCollection
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
      <StyledSidebar>
        <StyledPanel align="center" padding="10px 10px">
          <StyledTitle>{collection.name}</StyledTitle>
          <StyledButton><Link to={this.getLink()}><i className="fa fa-plus" /> Neu erstellen</Link></StyledButton>
        </StyledPanel>
        <StyledPanel seperator>
          <Input.Group size="large">
            <Col span="18">
              <Input placeholder="Suche ..." onChange={this.search} value={searchText} />
            </Col>
            <Col span="6" className="pr-0">
              {!filtering && <Filter onFilter={this.setQuery} collection={collection} style={{ width: '100%' }} />}
              {filtering && <Button onClick={e => this.setQueryToState()} style={{ width: '100%' }}>Reset</Button>}
            </Col>
          </Input.Group>
        </StyledPanel>
        {!filtering && (
          <StyledPanel seperator>
            <Tabs onChange={eq => this.setQueryToState(eq)} style={{ marginBottom: -16 }}>
              {Object.keys(states).map(name => <Tabs.TabPane tab={states[name]} key={name} />)}
            </Tabs>
          </StyledPanel>
        )}
        <StyledPanel>
          <CollectionList collection={collection} location={location} id={id} query={query} />
        </StyledPanel>
      </StyledSidebar>
    );
  }
}

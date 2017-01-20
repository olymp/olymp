import React, { Component } from 'react';
import { Dropdown, Button, Tabs, Input, Card, Menu, Icon, Col, Spin, Select, Form, Checkbox } from 'antd';
import { withRouter, withCollection, withCollections, withItems, Link, withApollo, throttleInput, resolveFieldValue } from 'olymp';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';
import capitalize from 'lodash/upperFirst';
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

const StyledPanel = createComponent(({ seperator, align, padding, background }) => ({
  padding: padding || '5px 10px',
  borderTop: seperator ? '1px solid #e6e6e6' : 0,
  textAlign: align,
  backgroundColor: background,
}));

const StyledForm = createComponent(() => ({
  padding: '20px!important',
  borderWidth: '0!important',
  marginLeft: '53px',
}), props => <Form {...props} />, ['inline']);

const StyledButton = createComponent(() => ({
  width: '110px',
  // borderWidth: '0!important',
  marginRight: '-10px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}), props => <Button {...props} />);

const StyledCard = createComponent(({ isActive, color }) => {
  const colorStyle = {};
  if (color) {
    colorStyle.backgroundColor = `${tinycolor(color).setAlpha(0.33).toRgbString()}!important`;
    // colorStyle.color = tinycolor(item.farbe).isLight ? '#222' : '#DDD';
    colorStyle.color = '#222';
  }

  return {
    cursor: 'pointer',
    margin: '3px 0',
    left: isActive ? '15px' : 0,
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
  padding: '8px',
  float: 'left',
}));

const StyledCardImagePlaceholder = createComponent(() => ({
  width: '60px',
  height: '60px',
  float: 'left',
}));

const StyledCardTitle = createComponent(() => ({
  width: '200px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
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

  resolveFieldValue = (item, field, { defaultFieldName, defaultValue }, fieldProps) => {
    const { collection } = this.props;
    const { specialFields, fields } = collection;

    const fieldName = (!!specialFields[field] && specialFields[field].field) || defaultFieldName;
    const value = item[fieldName] ? item[fieldName] : defaultValue;
    const meta = fields.find(x => x.name === fieldName);

    return resolveFieldValue(value, meta, fieldProps);
  }

  resolveColor = (item) => {
    const { collection } = this.props;
    const { specialFields, fields } = collection;

    const colorFieldName = (!!specialFields.color && specialFields.color.field) || 'farbe';
    const colorFieldType = fields.find(x => x.name === colorFieldName);
    return colorFieldType && colorFieldType.type.name !== 'Color' && specialFields.color && item[colorFieldName] ?
        specialFields.color.arg0 :
          item[colorFieldName];
  }

  renderCard = (item) => {
    const { id, router } = this.props;

    const name = this.resolveFieldValue(item, 'name', { defaultFieldName: 'name', defaultValue: item.kurz || item.name || 'Kein Titel' });
    const bild = this.resolveFieldValue(item, 'image', { defaultFieldName: 'bild' }, { width: 60, ratio: 1, style: { float: 'left' } });
    const description = this.resolveFieldValue(item, 'description', {});
    const color = this.resolveColor(item);

    return (
      <StyledCard
        onClick={() => router.push(this.getLink(item))}
        key={item.id}
        extra={<Dropdown overlay={this.renderMenu()}><Icon type="edit" /></Dropdown>}
        isActive={item.id === id}
        color={color}
      >
        {bild}
        {bild === null && <StyledCardImagePlaceholder />}
        <StyledCardContent>
          <StyledCardTitle>{name}</StyledCardTitle>
          {!!description && <StyledCardParagraph>{description}</StyledCardParagraph>}
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
@withCollections
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
    const { collection, location } = this.props;
    const { pathname } = location;
    return { pathname, query: { ...location.query, [`@${collection.name.toLowerCase()}`]: item ? item.id : null } };
  }

  getCollectionLink = (collection) => {
    const { location } = this.props;
    const { pathname } = location;
    return { pathname, query: { [`@${collection.toLowerCase()}`]: null } };
  }

  render() {
    const { collection, location, id, router, collectionList, collectionTree } = this.props;
    const { query, filtering, searchText } = this.state;

    const select = (
      <Select
        defaultValue={collection.name}
        style={{ width: '126px' }}
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        showSearch
        onSelect={value => router.push(this.getCollectionLink(value))}
      >
        {Object.keys(collectionTree).map((key) => {
          const group = collectionTree[key];

          return (
            <Select.OptGroup label={capitalize(key)} key={key}>
              {group.map(item => <Select.Option value={item.name} key={item.name}>{item.name}</Select.Option>)}
            </Select.OptGroup>
          );
        })}
        <Select.Option value={'media'}>Mediathek</Select.Option>
        <Select.Option value={'user'} disabled>User</Select.Option>
      </Select>
    );

    return (
      <StyledSidebar>
        <StyledForm inline>
          <Form.Item>
            {select}
          </Form.Item>
          <Form.Item>
            <StyledButton>
              <Link to={this.getLink()}>Hinzufügen</Link>
            </StyledButton>
          </Form.Item>
        </StyledForm>
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

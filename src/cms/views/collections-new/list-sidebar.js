import React, { Component, PropTypes } from 'react';
import capitalize from 'lodash/upperFirst';
import { Table, Menu, Icon, Affix, Dropdown, Button, Tabs, Input } from 'antd';
import { withRouter, withCollection, withItems, Link, gql, withApollo } from 'olymp';
import { createComponent } from 'react-fela';
function hexToRgba(hex, a) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${a || 1})` : null;
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

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  ARCHIVED: 'Archiv',
  REMOVED: 'Papierkorb',
}
@withItems({ state: Object.keys(states) })
@withApollo
@withRouter
export default class CollectionListSidebar extends Component {
  handleClick = (e) => {
    const { location, router, collection } = this.props;
  }

  getLink = (item) => {
    const { onClick, collection, name, saveCollectionItem, removeCollectionItem, location, items } = this.props;
    const { pathname } = location;
    return { pathname, query: { ...location.query, [`@${collection.name.toLowerCase()}`]: item ? item.id : null } };
  }

  render() {
    const { onClick, collection, name, saveCollectionItem, removeCollectionItem, location, items, id } = this.props;
    return (
      <Sidebar>
        <Panel align="center" padding="10px 10px">
          <Title>{collection.name}</Title>
          <StyledButton><Link to={this.getLink()}><i className="fa fa-plus" /> Neu erstellen</Link></StyledButton>
        </Panel>
        <Panel seperator>
          <StyledInput placeholder="Suche ..." />
        </Panel>
        <Panel seperator padding="0px 10px">
          <Tabs>
            {Object.keys(states).map(name =>
              <Tabs.TabPane tab={states[name]} key={name}>
                <Panel>
                  <ul>
                    {items && items.filter(x => x.state === name).map(item => (
                      <Li key={item.id} active={item.id === id}>
                        <Link to={this.getLink(item)}>
                          {item.kurz || item.name}
                        </Link>
                        {name !== 'REMOVED'
                          ? <i className="fa fa-trash" style={{ float: 'right' }} />
                          : <i className="fa fa-undo" style={{ float: 'right' }} />
                        }
                      </Li>
                    ))}
                  </ul>
                </Panel>
              </Tabs.TabPane>
            )}
          </Tabs>
        </Panel>
      </Sidebar>
    );
  }
}

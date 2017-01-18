import React, { Component } from 'react';
import { Dropdown, Button, Tabs, Input, Card, Menu, Icon } from 'antd';
import { withRouter, withCollection, withItems, Link, withApollo } from 'olymp';
import Image from '../../edits/image';
import { createComponent } from 'react-fela';
import tinycolor from 'tinycolor2';

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
};

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
    const { onClick, collection, name, saveCollectionItem, removeCollectionItem, location, items, id, router } = this.props;
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
                  {items && items.filter(x => x.state === name).map(item => {
                    const menu = (
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

                    const colorStyle = {};
                    if (item.farbe) {
                      colorStyle.backgroundColor = tinycolor(item.farbe).toRgbString();
                      colorStyle.color = tinycolor(item.farbe).isLight ? '#333' : '#CCC';
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
                        extra={<Dropdown overlay={menu}><a className="ant-dropdown-link" href="javascript:;"><Icon type="edit" /></a></Dropdown>}
                        style={{ cursor: 'pointer', ...colorStyle, ...activeStyle }}
                        bodyStyle={{ padding: 0, ...colorStyle }}
                      >
                        <div style={{ width: 60 }}>
                          {
                            item.bild ? (
                              <Image value={item.bild} width={60} ratio={1} />
                            ) : (
                              <img alt="example" width="100%" src="https://res.cloudinary.com/dhsf4vjjc/image/upload/w_3264,h_2448,c_fill/f_auto,q_auto,fl_lossy,w_300,h_300,c_fill/v1464514843/ekgd/tmtzpebzog4zmoyzcxbu.jpg" />
                            )
                          }
                        </div>
                        <div style={{ padding: 5, position: 'absolute', left: 65, top: '50%', transform: 'translateY(-50%)' }}>
                          <h6 style={{ textOverflow: 'ellipsis', overflow: 'hidden', width: 190, whiteSpace: 'nowrap' }}>{item.kurz || item.name || 'Kein Titel'}</h6>
                          <p style={{ margin: 0, textOverflow: 'ellipsis', overflow: 'hidden', width: 190, whiteSpace: 'nowrap' }}>weitere Infos</p>
                        </div>
                      </Card>
                    );
                  })}
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

import React, { Component } from 'react';
import { compose, withState } from 'recompose';
import { connect } from 'react-redux';
import {
  FaAngleLeft,
  FaPlus,
  FaCubes,
  FaHome,
  FaAngleRight,
} from 'olymp-icons';
import { createReplace } from 'olymp-router';
import { Sidebar } from 'olymp-fela';
import Menu, { StackedMenu } from 'olymp-fela/menu';
import DndList from 'olymp-fela/menu/dnd';
import { reorderPage } from './gql/mutation';

const enhance = compose(
  connect(
    ({ location }) => ({
      pathname: location.pathname,
    }),
    dispatch => ({
      push: createReplace(dispatch),
    }),
  ),
  reorderPage,
  withState('keys', 'setKeys', []),
);

@enhance
export default class PageNavigation extends Component {
  renderItem = (item, Icon) => {
    const { setKeys, keys, push, pathname } = this.props;
    const hasChildren = item.children && item.children.length;
    const route =
      item.pathname &&
      item.type === 'PAGE' &&
      item.slug &&
      item.slug.indexOf('{') === -1
        ? item.pathname
        : `/${item.pageId || item.id}`;
    const Com = Icon ? Menu.Item : DndList.Item;

    return (
      <Com
        key={item.id}
        active={pathname === route}
        id={item.id}
        icon={Icon ? <Icon /> : undefined}
        onClick={
          hasChildren
            ? () => {
                push({ pathname: route, query: { '@page': null } });
                setKeys([...keys, item.id]);
              }
            : () => push({ pathname: route, query: { '@page': null } })
        }
        extra={hasChildren ? <FaAngleRight /> : null}
      >
        {item.name}
      </Com>
    );
  };
  renderMenu = keys => {
    const {
      setKeys,
      navigation,
      flatNavigation,
      push,
      id,
      title,
      description,
      setFormOpen,
    } = this.props;
    const [lastKey, ...rest] = [...keys].reverse();
    let children = [];
    if (!lastKey) {
      const menues = navigation.filter(x => x.type === 'MENU');
      const pages = navigation.filter(x => x.type !== 'MENU');
      children = [
        ...pages.map(x => this.renderItem(x, FaHome)),
        ...menues.map(menu => (
          <DndList
            key={menu.id}
            title={menu.name}
            extra={
              <Menu.Extra
                onClick={() =>
                  push({
                    pathname: '__new',
                    query: { '@page': null, '@parent': menu.id },
                  })
                }
              >
                <FaPlus />
              </Menu.Extra>
            }
          >
            {menu.children.map(x => this.renderItem(x))}
          </DndList>
        )),
      ];
    } else {
      const item = flatNavigation.find(x => x.id === lastKey);
      const items = flatNavigation.filter(x => x.parentId === lastKey);
      const route = `/${item.parentId}`;

      children = [
        <Menu.Item
          key="back"
          icon={<FaAngleLeft />}
          onClick={() => {
            push({ pathname: route, query: { '@page': null } });
            setKeys(rest);
          }}
        >
          Zurück
        </Menu.Item>,
        <DndList
          key="pages"
          title={item.name}
          extra={
            <Menu.Extra
              onClick={() =>
                push({
                  pathname: '__new',
                  query: { '@page': null, '@parent': item.id },
                })
              }
            >
              <FaPlus />
            </Menu.Extra>
          }
        >
          {items.map(i =>
            this.renderItem({
              ...i,
              children: flatNavigation.filter(x => x.parentId === i.id),
            }),
          )}
        </DndList>,
      ];
    }
    const header = (
      <Menu.Item
        large
        icon={<FaCubes />}
        extra={
          <Menu.Extra
            onClick={() => {
              setFormOpen(true);
              push({
                pathname: '__new',
                query: { '@page': null, '@parentId': id },
              });
            }}
            large
          >
            <FaPlus />
          </Menu.Extra>
        }
      >
        {title || 'Seitenmanager'}
        {!!description && <small>{description}</small>}
      </Menu.Item>
    );

    return (
      <DndList.Context onDragEnd={this.onDragEnd}>
        <Menu header={header}>
          {children}
          <Menu.Space />
        </Menu>
      </DndList.Context>
    );
  };

  render() {
    const { keys, left, children } = this.props;
    return (
      <Sidebar
        left={left}
        menu={<StackedMenu keys={keys} renderMenu={this.renderMenu} />}
      >
        {children}
      </Sidebar>
    );
  }
}

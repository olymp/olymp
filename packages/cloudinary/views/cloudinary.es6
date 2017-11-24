import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withPropsOnChange, withState } from 'recompose';
import { Sidebar, Menu, StackedMenu, Drawer } from 'olymp-fela';
import { FaChevronLeft, FaPictureO } from 'olymp-icons';
import { sortBy } from 'lodash';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import Gallery from './gallery';
// import Dragzone from '../components/dragzone';

const EMPTY = 'Keine Tags';
const TRASH = 'Papierkorb';
const GENERAL = 'Allgemein';

const addSortedChildren = (obj, sorter = 'length') => {
  if (!obj.map) {
    return obj;
  }
  const { map } = obj;
  let keys = Object.keys(map);
  if (sorter === 'length') {
    keys = sortBy(keys, key => map[key].items.length).reverse();
  } else if (sorter === 'name') {
    keys = sortBy(keys);
  }
  return keys.reduce(
    (result, key) => {
      const childs = addSortedChildren(map[key], sorter);
      childs.key = key;
      result.map[key] = childs;
      result.children.push(childs);
      return result;
    },
    { ...obj, children: [], map: {} },
  );
};

@queryMedias
@cloudinaryRequest
@cloudinaryRequestDone
@withPropsOnChange(
  ['items', 'search', 'format'],
  ({ items, search, format }) => {
    const apps = items.reduce((result, item) => {
      if (format && item.format !== format) {
        return result;
      }
      const app =
        (!!item.publicId &&
          item.publicId.indexOf('/') !== -1 &&
          item.publicId.split('/')[0]) ||
        'gzk';
      const f = item.removed ? TRASH : item.folder || GENERAL;
      if (f && search && f.toLowerCase().indexOf(search.toLowerCase()) === -1) {
        return result;
      }
      if (!result[app]) {
        result[app] = {
          children: [],
          map: {},
          items: [],
        };
      }
      if (!result[app].map[f]) {
        result[app].map[f] = {
          children: [],
          map: {},
          items: [],
        };
      }
      result[app].items.push(item);
      result[app].map[f].items.push(item);

      const tags = result[app].map[f].map;
      if (!item.tags || !item.tags.length) {
        if (!tags[GENERAL]) {
          tags[GENERAL] = {
            children: [],
            map: {},
            items: [],
          };
        }
        if (!tags[GENERAL].map[EMPTY]) {
          tags[GENERAL].map[EMPTY] = {
            children: [],
            map: {},
            items: [],
          };
        }
        tags[GENERAL].items.push(item);
        tags[GENERAL].map[EMPTY].items.push(item);
      } else {
        item.tags.forEach(tag => {
          if (
            search &&
            tag.toLowerCase().indexOf(search.toLowerCase()) === -1
          ) {
            return;
          }
          const lastIndex = tag.lastIndexOf('/');
          const firstPart =
            lastIndex !== -1 ? tag.substr(0, lastIndex) : GENERAL;
          const lastPart = lastIndex !== -1 ? tag.substr(lastIndex + 1) : tag;
          if (!tags[firstPart]) {
            tags[firstPart] = {
              children: [],
              map: {},
              items: [],
            };
          }
          if (!tags[firstPart].map[lastPart]) {
            tags[firstPart].map[lastPart] = {
              children: [],
              map: {},
              items: [],
            };
          }
          tags[firstPart].items.push(item);
          tags[firstPart].map[lastPart].items.push(item);
        });
      }

      return result;
    }, {});

    return {
      tree: apps,
    };
  },
)
@withState('collapsed', 'setCollapsed', true)
@withState('tags', 'setTags', [])
@withState('sorting', 'setSorting', 'length')
@withPropsOnChange(['sorting', 'tree'], ({ tree, sorting, items }) => ({
  tree: addSortedChildren({ map: tree, items }, sorting),
}))
@withState('selection', 'setSelection', [])
@withPropsOnChange(['value'], ({ value = [], setSelection }) =>
  setSelection(value.map(v => v.id)),
)
class CloudinaryView extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    filteredItems: PropTypes.arrayOf(PropTypes.object),
    selectedIds: PropTypes.arrayOf(PropTypes.string),
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    addSelection: PropTypes.func,
    removeSelection: PropTypes.func,
    setSelection: PropTypes.func,
    format: PropTypes.string,
    multi: PropTypes.bool,
  };

  static defaultProps = {
    items: [],
    filteredItems: [],
    selectedIds: [],
    multi: true,
    onClose: undefined,
    onChange: undefined,
    addSelection: undefined,
    removeSelection: undefined,
    setSelection: undefined,
    format: undefined,
  };

  onClick = (id, e) => {
    const {
      selectedIds,
      addSelection,
      removeSelection,
      setSelection,
      multi,
    } = this.props;

    if (multi && e.shiftKey) {
      if (selectedIds.findIndex(sId => sId === id) === -1) {
        addSelection(id);
      } else {
        removeSelection(id);
      }
    } else {
      setSelection([id]);
    }
  };

  renderMenu = (keys = [], isPrimary) => {
    const { goRoot, setTags, tags, tree } = this.props;
    let children = [];
    if (keys.length === 0) {
      children = tree.children.map(app => (
        <Menu.List key={app.key} title={app.key}>
          {app.children.map(dir => (
            <Menu.Item
              onClick={() => setTags([`${app.key}/${dir.key}`])}
              key={dir.key}
              extra={<b>{dir.items.length}&nbsp;&nbsp;</b>}
            >
              {dir.key}
            </Menu.Item>
          ))}
        </Menu.List>
      ));
    } else {
      const [key0] = keys;
      const [app, folder] = key0.split('/');

      const node = tree.map[app].map[folder];
      children = node.children.map(tag => (
        <Menu.List
          key={tag.key}
          title={tag.key}
          extra={<b>{tag.items.length}&nbsp;&nbsp;</b>}
        >
          {tag.children.map(subTag => (
            <Menu.Item
              onClick={() => setTags([key0, `${tag.key}/${subTag.key}`])}
              key={subTag.key}
              active={tags.indexOf(`${tag.key}/${subTag.key}`) !== -1}
              extra={<b>{subTag.items.length}&nbsp;&nbsp;</b>}
            >
              {subTag.key}
            </Menu.Item>
          ))}
        </Menu.List>
      ));
    }
    return (
      <Menu
        key={keys.join('|')}
        header={
          <Menu.Item large onClick={goRoot} icon={<FaPictureO />}>
            Media
          </Menu.Item>
        }
      >
        {keys.length > 0 && (
          <Menu.Item icon={<FaChevronLeft />} onClick={() => setTags([])}>
            Zurück
          </Menu.Item>
        )}
        {children}
      </Menu>
    );
  };
  render() {
    const {
      tags,
      removeSelection,
      collapsed,
      setCollapsed,
      selection,
      tree,
    } = this.props;

    const [key0, key1] = tags;
    const [app, folder] = key0 ? key0.split('/') : [];
    const [group, tag] = key1 ? key1.split('/') : [];
    const node = app && folder ? tree.map[app].map[folder] : tree;
    const filteredItems =
      group && tag ? node.map[group].map[tag].items : node.items;

    return (
      <Sidebar
        left={72}
        pusher
        menu={
          <StackedMenu
            keys={tags.filter((x, i) => i < 1)}
            renderMenu={this.renderMenu}
          />
        }
      >
        <Gallery
          key={tags.join('|')}
          items={filteredItems}
          onClick={this.onClick}
          onRemove={removeSelection}
        />
        <Drawer
          open
          collapsed={collapsed}
          dim={false}
          right
          width={collapsed ? 72 : 240}
        >
          <Menu
            collapsed={collapsed}
            inverted
            color="colorSecondary"
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}
          >
            <Menu.Item icon={<span>{selection.length}</span>} />
            <Menu.List title="Ansicht" />
            <Menu.Space />
          </Menu>
        </Drawer>
      </Sidebar>
    );
  }
}
export default CloudinaryView;

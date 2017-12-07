import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withPropsOnChange, withState } from 'recompose';
import { Upload } from 'antd';
import { createComponent } from 'react-fela';
import { Sidebar, Drawer } from 'olymp-fela';
import Menu, { StackedMenu } from 'olymp-fela/menu';
import AntMenu from 'olymp-fela/menu/ant';
import {
  FaChevronLeft,
  FaPictureO,
  FaClose,
  FaSave,
  FaPlus,
} from 'olymp-icons';
import { sortBy } from 'lodash';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import Gallery from './gallery';
import withUpload from './upload';
import Detail from '../detail';
import Image from '../image';
// import Dragzone from '../components/dragzone';

const EMPTY = 'Keine Tags';
const TRASH = 'Papierkorb';
const GENERAL = 'Allgemein';
const INITIAL_ARRAY = [];

const Label = createComponent(
  ({ theme }) => ({
    '> circle': {
      fill: theme.dark5,
    },
  }),
  ({ children, ...p }) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      {...p}
    >
      <circle cx="32" cy="32" r="31" />
      <text
        textAnchor="middle"
        x="50%"
        y="50%"
        dy=".35em"
        fontFamily="sans-serif"
        fontSize="45px"
        fill="white"
      >
        {children}
      </text>
    </svg>
  ),
);

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
@withPropsOnChange(['sorting', 'tree'], ({ tree, sorting, items }) => ({
  tree: addSortedChildren({ map: tree, items }, sorting),
}))
@withPropsOnChange(['value'], ({ value }) => ({
  value: value ? value.filter(x => x) : null,
}))
@withState('collapsed', 'setCollapsed', true)
@withState('sorting', 'setSorting', 'length')
@withState('tags', 'setTags', INITIAL_ARRAY)
@withState(
  'selection',
  'setSelection',
  ({ value }) => (value ? value.map(v => v.id) : []),
)
@withPropsOnChange(['selection', 'items'], ({ selection, items = [] }) => ({
  selectedItems: items.filter(x => selection.includes(x.id)),
}))
@withUpload
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

  componentWillReceiveProps({ selectedItems = [] }) {
    const thisSelection = this.props.selectedItems || [];
    if (selectedItems.length !== thisSelection.length) {
      this.initial = false;
    }
  }

  onClick = ({ id }, multiple = false) => {
    const { selection, setSelection, multi } = this.props;

    if (multi && multiple) {
      if (selection.findIndex(sId => sId === id) === -1) {
        setSelection([...selection, id]);
      } else {
        setSelection(selection.filter(x => x !== id));
      }
    } else {
      setSelection([id]);
    }
  };

  initial = true;

  renderMenu = (keys = []) => {
    const { goRoot, setTags, tags, tree, upload } = this.props;

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
          <Menu.Item
            large
            onClick={goRoot}
            icon={<FaPictureO />}
            extra={
              <Menu.Extra onClick={() => {}} disabled={!!keys.length} large>
                <Upload {...upload}>
                  <FaPlus />
                </Upload>
              </Menu.Extra>
            }
          >
            Mediathek
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
      collapsed,
      setCollapsed,
      selection,
      tree,
      setSelection,
      selectedItems,
      inModal,
      multi,
      value,
      onChange,
      onClose,
    } = this.props;

    const [key0, key1] = tags;
    const [app, folder] = key0 ? key0.split('/') : [];
    const [group, tag] = key1 ? key1.split('/') : [];
    const node = app && folder ? tree.map[app].map[folder] : tree;
    const filteredItems =
      group && tag ? node.map[group].map[tag].items : node.items;

    return (
      <Sidebar
        left={inModal ? 0 : 72}
        menu={
          <StackedMenu
            keys={tags.filter((x, i) => i < 1)}
            renderMenu={this.renderMenu}
          />
        }
      >
        <Gallery
          useBodyScroll={!inModal}
          key={tags.join('|')}
          items={
            this.initial && !tags.length && selectedItems.length
              ? selectedItems
              : filteredItems
          }
          onClick={this.onClick}
          selection={selection}
          isActive={({ id }) => selection.indexOf(id) !== -1}
          onRemove={({ id }) => setSelection(selection.filter(x => id !== x))}
        />
        <Drawer
          open
          collapsed={collapsed}
          dim={false}
          right
          width={collapsed ? 72 : 240}
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
        >
          <Menu
            collapsed={collapsed}
            header={
              <Menu.Item
                large
                icon={collapsed && <Label>{selectedItems.length}</Label>}
              >
                Bearbeiten
              </Menu.Item>
            }
            headerInverted
            headerColor
          >
            <Menu.Space>
              {collapsed &&
                (value || selectedItems || []).map(v => (
                  <Menu.Item
                    key={v.id}
                    large
                    icon={<Image value={v} width={60} height={60} />}
                  />
                ))}
              <Detail
                value={value || selectedItems || []}
                multi={multi}
                editable={!inModal}
                collapsed={collapsed}
                onRemove={({ id }) =>
                  setSelection(selection.filter(x => id !== x))
                }
              />
            </Menu.Space>
          </Menu>
          {!collapsed && (
            <Menu
              color
              inverted
              collapsed
              header={
                <Menu.Item large icon={<Label>{selectedItems.length}</Label>}>
                  Seite bearbeiten
                </Menu.Item>
              }
              headerColor="dark4"
              headerInverted
            >
              {/* <AntMenu.Tooltip onClick={() => {}} icon={<FaThemeisle />}>
                Beni, hier soll der Speicher-Button hin der seltsamerweise nun
                weg ist! ;)
            </AntMenu.Tooltip> */}
              {/* <AntMenu.Tooltip onClick={() => {}} icon={<FaOptinMonster />}>
                .. und hier könnte löschen hin anstelle der Checkbox!
              </AntMenu.Tooltip> */}
              {!!onChange && (
                <AntMenu.Tooltip
                  onClick={() => onChange(selectedItems)}
                  icon={<FaSave />}
                >
                  Speichern
                </AntMenu.Tooltip>
              )}
              {!!onClose && (
                <AntMenu.Tooltip onClick={onClose} icon={<FaClose />}>
                  Abbrechen
                </AntMenu.Tooltip>
              )}
            </Menu>
          )}
        </Drawer>
      </Sidebar>
    );
  }
}
export default CloudinaryView;

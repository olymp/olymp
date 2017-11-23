import React from 'react';
import { Icon, Badge } from 'antd';
import { withPropsOnChange } from 'recompose';
import { createComponent, Menu } from 'olymp-fela';
import shortID from 'shortid';
import { intersection, orderBy, last, groupBy } from 'lodash';

const getTags = (items, search) => {
  const tags = { 'Ohne Schlagworte': [] };
  items.forEach(item => {
    if (!item.tags.length) {
      tags['Ohne Schlagworte'].push(item);
    } else {
      item.tags.forEach(tag => {
        if (search && tag.toLowerCase().indexOf(search.toLowerCase()) === -1) {
          return;
        }
        if (!tags[tag]) {
          tags[tag] = [];
        }
        tags[tag].push(item);
      });
    }
  });
  return tags;
};

export const getDirectories = ({
  items,
  tags: filter,
  setTags,
  folder,
  setFolder,
  search,
  format,
  sortByName,
}) => {
  const folders = {};
  items.forEach(item => {
    if (format && item.format !== format) {
      return;
    }

    const app =
      (item.removed && 'Papierkorb') ||
      (!!item.publicId &&
        item.publicId.indexOf('/') !== -1 &&
        item.publicId.split('/')[0]) ||
      'gzk';
    const folder = item.folder ? `${app}/${item.folder}` : `${app}/Allgemein`;

    if (
      folder &&
      search &&
      folder.toLowerCase().indexOf(search.toLowerCase()) === -1
    ) {
      return;
    }

    if (!folders[folder]) {
      folders[folder] = [];
    }
    folders[folder].push(item);
  });

  if (!folder) {
    const directories = Object.keys(folders).map(name => {
      const label = last(name.split('/').filter(x => x));
      return {
        active: false,
        disabled: false,
        group: name.substr(0, name.length - label.length - 1).toUpperCase(),
        onClick: () => setFolder(name),
        label,
        description: folders[name].length,
        image: folders[name][0],
        countFilter: folders[name].length,
        countAll: folders[name].length,
        key: name,
        isFolder: true,
      };
    });
    return {
      goBack: null,
      shortId: shortID.generate(),
      directories: groupBy(
        orderBy(
          directories,
          [sortByName ? 'label' : 'countFilter'],
          [sortByName ? 'asc' : 'desc'],
        ),
        'group',
      ),
      filteredItems: items,
    };
  }

  items = folders[folder] || [];
  const tags = getTags(items, search);
  const directories = Object.keys(tags).map(tag => {
    const active = !!filter.find(x => x === tag);
    const filteredTags = !active
      ? [...filter, tag]
      : filter.filter(x => x !== tag);
    const filteredItems = items.filter(
      item =>
        intersection(item.tags, filteredTags).length === filteredTags.length,
    );
    const countFilter = (getTags(filteredItems)[tag] || []).length;
    const countAll = tags[tag].length;
    const disabled = !countFilter;
    const text = `${countAll} Dateien`;

    const label = last(tag.split('/').filter(x => x));
    return {
      active,
      disabled,
      group:
        label !== tag
          ? tag.substr(0, tag.length - label.length - 1)
          : 'Allgemein',
      onClick: () => setTags(filteredTags),
      label,
      description:
        countFilter === countAll ? text : `${countFilter} von ${text}`,
      image: tags[tag][0],
      countFilter,
      countAll,
      isFolder: false,
      key: tag,
    };
  });

  return {
    goBack: filter.length
      ? () => setTags(filter.slice(0, -1))
      : () => setFolder(),
    goRoot: filter.length ? () => setTags([]) : () => setFolder(),
    shortId: shortID.generate(),
    directories: groupBy(
      orderBy(
        directories,
        [sortByName ? 'label' : 'countFilter'],
        [sortByName ? 'asc' : 'desc'],
      ),
      'group',
    ),
    filteredItems: items.filter(
      item => intersection(item.tags, filter).length === filter.length,
    ),
  };
};

const Header = createComponent(
  ({ theme }) => ({
    padding: 3,
    paddingLeft: 7,
    paddingRight: 7,
    width: '100%',
    color: theme.dark1,
    clearfix: true,
    '> div': {
      float: 'right',
      color: theme.dark3,
      cursor: 'pointer',
      onHover: {
        color: theme.dark2,
      },
      '> i': {
        fontSize: 11,
      },
    },
  }),
  'div',
  [],
);

export default withPropsOnChange(['items'], ({ items }) => ({
  items: items.filter(dir => !dir.active && !dir.disabled),
}))(
  ({ id, items, sortByName, toggleSort }) =>
    items.length ? (
      <Menu.List
        title={
          id && (
            <Header>
              {id}
              <div onClick={() => toggleSort(!sortByName)}>
                {sortByName ? 'Name' : 'Anzahl'} <Icon type="caret-up" />
              </div>
            </Header>
          )
        }
      >
        {items.map(dir => (
          <Menu.Item
            /* image={
            !!dir.image && <Image value={dir.image} width={45} height={45} />
          } */
            onClick={dir.onClick}
            // icon={dir.isFolder ? <FaFolderO /> : <FaTag />}
            extra={<b>{dir.countFilter}&nbsp;&nbsp;</b>}
          >
            {dir.label}
          </Menu.Item>
        ))}
      </Menu.List>
    ) : null,
);

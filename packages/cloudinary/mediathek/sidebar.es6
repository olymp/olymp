import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon } from 'antd';
import {
  compose,
  onlyUpdateForKeys,
  setPropTypes,
  withPropsOnChange,
} from 'recompose';
import { Sidebar, List } from 'olymp-ui';
import { createComponent } from 'olymp-fela';
import { connect } from 'react-redux';
import Image from '../image';
import Selection from './selection';

const Header = createComponent(
  ({ theme }) => ({
    padding: 3,
    paddingLeft: 7,
    paddingRight: 7,
    width: '100%',
    backgroundColor: 'rgba(233, 233, 233, 0.47)',
    borderBottom: '1px solid #eee',
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

const image = ({ image }) =>
  image && <Image value={image} width={37} height={37} />;

const onCancel = (items, onRemove) => () => {
  items.forEach(item => onRemove(item.id));
};

const enhance = compose(
  onlyUpdateForKeys([
    'directories',
    'upload',
    'search',
    'tags',
    'onClose',
    'setSearch',
    'setTags',
    'items',
    'activeItems',
    'onClick',
    'onRemove',
  ]),
  setPropTypes({
    directories: PropTypes.object,
    upload: PropTypes.object,
    search: PropTypes.string,
    tags: PropTypes.array,
    onClose: PropTypes.func,
    setSearch: PropTypes.func,
    setTags: PropTypes.func,
    items: PropTypes.array,
    activeItem: PropTypes.object,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
  }),
  connect(({ cloudinary }, { items }) => ({
    items: cloudinary.selectedIds
      .map(x => items.find(item => item.id === x))
      .filter(x => x),
    activeId: cloudinary.activeId,
  })),
);

const Directory = withPropsOnChange(['items'], ({ items }) => ({
  items: items.filter(dir => !dir.active && !dir.disabled),
}))(({ id, items, sortByName, toggleSort }) => (
  <div>
    {id && (
      <Header>
        {id}
        <div onClick={() => toggleSort(!sortByName)}>
          {sortByName ? 'Name' : 'Anzahl'} <Icon type="caret-up" />
        </div>
      </Header>
    )}
    {items.length ? (
      items.map(dir => (
        <List.Item
          {...dir}
          image={image(dir)}
          icon={dir.isFolder ? 'folder' : 'tag-o'}
        />
      ))
    ) : (
      <List.Item
        disabled
        label="Keine weiteren Unterordner vorhanden"
        image={<Icon type="exclamation-circle-o" />}
      />
    )}
  </div>
));

export default enhance(
  ({
    upload,
    onClose,
    search,
    setSearch,
    goBack,
    onChange,
    directories,
    items,
    activeId,
    onClick,
    onRemove,
    sortByName,
    toggleSort,
    tags,
    setTags,
    folder,
    setFolder,
  }) => (
    <Sidebar
      width={280}
      leftButtons={
        (!!onClose && (
          <Sidebar.Button shape="circle" onClick={onClose} icon="close" />
        )) ||
        ((!!items.length && (
          <Sidebar.Button
            shape="circle"
            onClick={onCancel(items, onRemove)}
            icon="close"
          />
        )) ||
          (!!goBack && (
            <Sidebar.Button shape="circle" onClick={goBack} icon="arrow-left" />
          )))
      }
      rightButtons={
        <Upload {...upload}>
          <Sidebar.Button shape="circle" icon="plus" />
        </Upload>
      }
      isOpen
      padding={0}
      title="Medien"
    >
      {items.length ? (
        <div>
          <Selection
            items={items}
            key={items.map(x => x.id).join(';')}
            activeId={activeId}
            onClick={onClick}
            onRemove={onRemove}
            onCancel={onCancel(items, onRemove)}
            onChange={onChange}
          />
        </div>
      ) : (
        <div>
          <List.Filter
            placeholder="Ordner filtern ..."
            onChange={setSearch}
            value={search}
            bordered={false}
          />
          {!!folder && (
            <List.Item
              label={folder}
              icon="close"
              image={<Icon type="folder" />}
              key={folder}
              onClick={() => {
                setFolder();
                setTags([]);
              }}
            />
          )}
          {!!tags &&
            !!tags.length &&
            tags.map((tag, i) => (
              <List.Item
                label={tag}
                icon="close"
                image={<Icon type="tag-o" />}
                key={tag}
                onClick={() => setTags(tags.filter((tag, j) => i !== j))}
              />
            ))}
          {Object.keys(directories).map(key => (
            <Directory
              key={key}
              id={key}
              items={directories[key]}
              toggleSort={toggleSort}
              sortByName={sortByName}
            />
          ))}
        </div>
      )}
    </Sidebar>
  ),
);

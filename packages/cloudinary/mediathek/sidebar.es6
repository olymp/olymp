import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon } from 'antd';
import { compose, onlyUpdateForKeys, setPropTypes, withProps } from 'recompose';
import { Sidebar, List } from 'olymp-ui';
import { connect } from 'react-redux';
import { withActions } from './redux';
import Selection from './selection';
import Directory from './directory';

const onCancel = (items, onRemove) => () => {
  items.forEach(item => onRemove(item.id));
};

const enhance = compose(
  withActions,
  withProps(({ setActive, removeSelection }) => ({
    onClick: setActive,
    onRemove: removeSelection,
  })),
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
  connect(({ cloudinary }, { items }) => {
    const newItems = cloudinary.selectedIds
      .map(x => items.find(item => item.id === x))
      .filter(x => x);

    return {
      items: newItems,
      activeId: cloudinary.activeId,
      sortByName: cloudinary.sortByName,
      tags: cloudinary.tags,
      folder: cloudinary.folder,
      search: cloudinary.search,
    };
  }),
);

export default enhance(
  ({
    activeId,
    sortByName,
    tags,
    folder,
    search,
    toggleSort,
    setTags,
    setFolder,
    setSearch,
    upload,
    onClose,
    goBack,
    onChange,
    directories,
    items,
    onClick,
    onRemove,
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
      subtitle={
        onChange || items.length
          ? `Datei${items.length > 1 ? 'en' : ''} ${onChange
              ? 'einfügen'
              : 'bearbeiten'}`
          : 'Medien verwalten'
      }
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
                onClick={() => setTags(tags.filter((t, j) => i !== j))}
              />
            ))}
          {Object.keys(directories).map(key => (
            <Directory
              key={key}
              id={key === 'PAPIERKORB' ? 'Papierkorb' : key}
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

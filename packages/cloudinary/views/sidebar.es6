import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload } from 'antd';
import { FaChevronLeft, FaPictureO } from 'olymp-icons';
import {
  compose,
  onlyUpdateForKeys,
  setPropTypes,
  withProps,
  withState,
} from 'recompose';
import { Menu, StackedMenu } from 'olymp-fela';
import { Sidebar } from 'olymp-ui';
import { connect } from 'react-redux';
import { withActions } from './redux';
import withHandler from '../detail/with-file-form';
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
  withState('formState', 'setFormState'),
  connect(({ cloudinary }, { items, value = [] }) => {
    const newItems = cloudinary.selectedIds
      .map(
        x =>
          value.find(item => item.id === x) ||
          items.find(item => item.id === x),
      )
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
  withHandler,
);

@enhance
export default class MediaMenu extends Component {
  renderMenu = (keys, prevKeys) => {
    const {
      sortByName,
      toggleSort,
      upload,
      onClose,
      goBack,
      goRoot,
      directories,
      items,
      onRemove,
      save,
    } = this.props;
    return (
      <Menu
        header={
          <Menu.Item large onClick={goRoot} icon={<FaPictureO />}>
            Media
          </Menu.Item>
        }
        leftButtons={
          (!!items.length && (
            <Sidebar.Button
              shape="circle"
              onClick={onCancel(items, onRemove)}
              icon="close"
            />
          )) ||
          (!!onClose && (
            <Sidebar.Button shape="circle" onClick={onClose} icon="close" />
          ))
        }
        rightButtons={
          items.length ? (
            <Sidebar.Button shape="circle" icon="save" onClick={save} />
          ) : (
            <Upload {...upload}>
              <Sidebar.Button shape="circle" icon="plus" />
            </Upload>
          )
        }
      >
        {!!goBack && (
          <Menu.Item icon={<FaChevronLeft />} onClick={goBack}>
            Zurück
          </Menu.Item>
        )}
        {Object.keys(directories).map(key => (
          <Directory
            key={key}
            id={key === 'PAPIERKORB' ? 'Papierkorb' : key}
            items={directories[key]}
            toggleSort={toggleSort}
            sortByName={sortByName}
          />
        ))}
      </Menu>
    );
  };
}
/*
 || (
      <Sidebar
        width={280}
        borderLess
        leftButtons={
          (!!items.length && (
            <Sidebar.Button
              shape="circle"
              onClick={onCancel(items, onRemove)}
              icon="close"
            />
          )) ||
          (!!onClose && (
            <Sidebar.Button shape="circle" onClick={onClose} icon="close" />
          )) ||
          (!!goBack && (
            <Sidebar.Button shape="circle" onClick={goBack} icon="arrow-left" />
          ))
        }
        rightButtons={
          items.length ? (
            <Sidebar.Button shape="circle" icon="save" onClick={save} />
          ) : (
            <Upload {...upload}>
              <Sidebar.Button shape="circle" icon="plus" />
            </Upload>
          )
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
            <Detail
              form={form}
              value={items}
              key={items.map(x => x.id).join(';')}
              activeId={activeId}
              onClick={onClick}
              onRemove={onRemove}
              onCancel={onCancel(items, onRemove)}
              editable={!onChange}
            />
          </div>
        ) : (
          <div>
            <List.Filter
              placeholder="Ordner filtern ..."
              onChange={setSearch}
              value={search}
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

*/

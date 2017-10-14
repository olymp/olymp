import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Tabs } from 'antd';
import {
  compose,
  onlyUpdateForPropTypes,
  setPropTypes,
  withPropsOnChange,
} from 'recompose';
import { Sidebar, List } from 'olymp-ui';
import { connect } from 'react-redux';
import Image from '../image';
import Selection from './selection';

/* const directories = orderBy(
      this.getDirectories(),
      ['active', 'disabled', 'countFilter', 'countAll', 'label'],
      ['desc', 'asc', 'desc', 'desc', 'asc'],
    ); */

const image = ({ image }) =>
  image && <Image value={image} width={37} height={37} />;

// @withPropsOnChange(['items', 'search', 'filter'])
const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    directories: PropTypes.object,
    upload: PropTypes.object,
    search: PropTypes.string,
    tags: PropTypes.array,
    onClose: PropTypes.func,
    setSearch: PropTypes.func,
    setTags: PropTypes.func,
    setTab: PropTypes.func,

    tab: PropTypes.string,
    items: PropTypes.array,
    activeItem: PropTypes.object,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
    onSelect: PropTypes.func,
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
}))(
  ({ id, items }) =>
    items.length ? (
      <div>
        {id && (
          <div
            style={{
              padding: 3,
              paddingLeft: 7,
              paddingRight: 7,
              backgroundColor: 'rgba(233, 233, 233, 0.47)',
              borderBottom: '1px solid #eee',
            }}
          >
            {id || 'Allgemein'}
          </div>
        )}
        {items.map(dir => <List.Item {...dir} image={image(dir)} />)}
      </div>
    ) : null,
);

export default enhance(
  ({
    upload,
    onClose,
    search,
    setSearch,
    goBack,
    onChange,
    tab,
    setTab,
    directories,
    items,
    activeId,
    onClick,
    onRemove,
  }) => (
    <Sidebar
      width={280}
      leftButtons={
        onClose && (
          <Sidebar.Button shape="circle" onClick={onClose} icon="close" />
        )
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
      <Tabs
        activeKey={tab || ''}
        onTabClick={setTab}
        size="small"
        tabBarStyle={{ marginBottom: 0 }}
      >
        <Tabs.TabPane tab="Navigation" key="">
          <List.Filter
            placeholder="Filter ..."
            onChange={setSearch}
            value={search}
          />
          {goBack && <List.Item label="Zurück" icon="left" onClick={goBack} />}
          {Object.keys(directories).map(key => (
            <Directory key={key} id={key} items={directories[key]} />
          ))}
        </Tabs.TabPane>
        {items.length ? (
          <Tabs.TabPane
            tab={`Auswahl (${items.length})`}
            key="select"
            disabled={!items.length}
          >
            <Selection
              items={items}
              key={items.map(x => x.id).join(';')}
              activeId={activeId}
              onClick={onClick}
              onRemove={onRemove}
              // onCancel={() => this.onSelect(selected)}
              onChange={onChange}
            />
          </Tabs.TabPane>
        ) : null}
      </Tabs>
    </Sidebar>
  ),
);

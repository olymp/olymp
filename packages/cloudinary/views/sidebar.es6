import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Tabs } from 'antd';
import { compose, onlyUpdateForPropTypes, setPropTypes, withPropsOnChange } from 'recompose';
import { Sidebar, List } from 'olymp-ui';
import { Image } from '../components';
import Selection from './selection';

/* const directories = orderBy(
      this.getDirectories(),
      ['active', 'disabled', 'countFilter', 'countAll', 'label'],
      ['desc', 'asc', 'desc', 'desc', 'asc'],
    ); */

const image = ({ image }) => <Image value={image} width={37} height={37} />;

// @withPropsOnChange(['items', 'search', 'filter'])
const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    directories: PropTypes.arrayOf(PropTypes.object),
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
  withPropsOnChange(['directories'], ({ directories }) => ({
    disabled: directories.find(dir => dir.disabled),
    visibleItems: directories.filter(dir => !dir.active && !dir.disabled),
  })),
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
    visibleItems,
    items,
    activeId,
    onClick,
    onRemove,
  }) => (
    <Sidebar
      width={280}
      leftButtons={onClose && <Sidebar.Button shape="circle" onClick={onClose} icon="close" />}
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
          <List.Filter placeholder="Filter ..." onChange={setSearch} value={search} />
          {goBack && <List.Item label="Zurück" icon="left" onClick={goBack} />}
          {visibleItems.map(dir => <List.Item {...dir} image={image(dir)} />)}
        </Tabs.TabPane>
        {items.length ? (
          <Tabs.TabPane tab={`Auswahl (${items.length})`} key="select" disabled={!items.length}>
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

import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { Panel } from 'olymp-ui';
import { createComponent, border } from 'olymp-fela';
import Tree from './tree';
import PageForm from './page';

const TabPane = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.light,
    borderBottom: border(theme),
  }),
  Tabs.TabPane,
  p => Object.keys(p),
);

const PageTree = ({ form, item, items, navigation, tab, onTabClick }) => (
  <Tabs activeKey={tab} onTabClick={onTabClick} size="small" tabBarStyle={{ marginBottom: 0 }}>
    <TabPane tab="Navigation" key="0">
      <Panel>
        <Tree items={navigation} selected={[item.id || item.pathname]} />
      </Panel>
    </TabPane>
    <TabPane tab="Seite" key="1">
      <PageForm item={item} items={items} form={form} />
    </TabPane>
  </Tabs>
);
PageTree.propTypes = {
  item: PropTypes.object,
  form: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.arrayOf(PropTypes.object),
  tab: PropTypes.string,
  onTabClick: PropTypes.func,
};
PageTree.defaultProps = {
  item: {},
  items: [],
  navigation: [],
  tab: '0',
  onTabClick: key => console.log(key),
};
export default PageTree;

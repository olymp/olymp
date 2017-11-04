import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Collapse } from 'antd';
import { createComponent } from 'olymp-fela';
import Tree from './tree';
import PageForm from './page';

const TabPane = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.light,
  }),
  Tabs.TabPane,
  p => Object.keys(p),
);

const Padded = createComponent(
  ({ theme }) => ({
    padding: theme.space3,
  }),
  'div',
  p => Object.keys(p),
);

const PageTree = ({ form, item, items, navigation, tab, onTabClick }) => (
  <Tabs
    activeKey={tab}
    onTabClick={onTabClick}
    size="small"
    tabBarStyle={{ marginBottom: 0 }}
  >
    <TabPane tab="Seitenmanager" key="">
      <Collapse accordion defaultActiveKey="1">
        <Collapse.Panel header="Navigation" key="1">
          <Tree items={navigation} selected={[item.id || item.pathname]} />
        </Collapse.Panel>
        <Collapse.Panel header="Ablage" key="2">
          <Padded>Kein Item vorhanden!</Padded>
        </Collapse.Panel>
        <Collapse.Panel header="Papierkorb" key="3">
          <Padded>Kein Item vorhanden!</Padded>
        </Collapse.Panel>
      </Collapse>
    </TabPane>
    <TabPane tab="Seite" key="form">
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

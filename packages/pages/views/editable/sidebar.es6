import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Collapse } from 'antd';
import { createComponent } from 'olymp-fela';
// import Navigator from 'olymp-slate/navigator';
import Blocks from 'olymp-slate/blocks';
import Tree from './tree';
import PageForm from './page';

const TabPane = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.light,
  }),
  Tabs.TabPane,
  p => Object.keys(p),
);

const StyledCollapse = createComponent(
  ({ theme }) => ({
    border: 0,
    '> .ant-collapse-item > .ant-collapse-content': {
      paddingX: 4,
    },
    '> .ant-collapse-item  > .ant-collapse-content > .ant-collapse-content-box': {
      paddingY: 4,
    },
  }),
  Collapse,
  p => Object.keys(p),
);

const PageTree = ({ form, item, items, navigation, tab, onTabClick, value, onChange, base64 }) => (
  <Tabs activeKey={tab} onTabClick={onTabClick} size="small" tabBarStyle={{ marginBottom: 0 }}>
    <TabPane tab="Seitenmanager" key="">
      <StyledCollapse accordion defaultActiveKey="1">
        <Collapse.Panel header="Navigation" key="1">
          <Tree items={navigation} selected={[item.id || item.pathname]} />
        </Collapse.Panel>
        <Collapse.Panel header="Ablage" key="2">
          Kein Item vorhanden!
        </Collapse.Panel>
        <Collapse.Panel header="Papierkorb" key="3">
          Kein Item vorhanden!
        </Collapse.Panel>
      </StyledCollapse>
    </TabPane>
    <TabPane tab="Seite" key="form">
      <PageForm item={item} items={items} form={form} />
    </TabPane>
    {/* <TabPane tab="Editor" key="tree">
      <Navigator value={value} onChange={onChange} base64={base64} />
</TabPane> */}
    <TabPane tab="Blöcke" key="tree">
      <Blocks />
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

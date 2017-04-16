import React, { Component } from 'react';
import { CollectionModal, CollectionDetail, Input, State, Hashtax as HashtaxEditor } from '../collection';
import { Hashtax } from 'olymp/hashtax';
import { Link, graphql, gql, withAuth, withRouter, withState } from 'olymp';
import { Button, Form, Icon, Tabs, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { Modal, SplitView, Panel, onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';

export const name = 'Template';
export const icon = 'home';

// Queries
export const mutation = graphql(gql`
  mutation template($id: String, $input: TemplateInput) {
    item: template(id: $id, input: $input) {
      id name text
    }
  }
`);
export const query = graphql(gql`
  query template($id: String) {
    item: template(id: $id) {
      id name text
    }
  }
`, {
  options: ({ id }) => ({ variables: { id }}),
  props: ({ ownProps, data }) => ({ ...ownProps, data, item: data.item || {} }),
});
export const list = graphql(gql`
  query templateList {
    items: templateList {
      id name text
    }
  }
`, {
  props: ({ ownProps, data }) => ({ ...ownProps, data, items: data.items || [] }),
});
export const withTemplates = graphql(gql`
  query templateList {
    items: templateList {
      id name text
    }
  }
`, {
  props: ({ ownProps, data }) => ({ ...ownProps, templateData: data, templates: (data.items || []).reduce((store, item) => {
    store[item.name] = item.text;
    return store;
  }, {}) || {} }),
});

// Views
export const Detail = withState('text')(({ text, setText, viewType, item, form, onChange, ...props }) => (
  <Tabs defaultActiveKey="1" size="small">
    <Tabs.TabPane tab="Template" key="1">
      <Panel paddingX={16} alignLabel="left">
        <Input form={form} item={item} field="name" label="Name" rules={['required']} type="text" size="large" />
      </Panel>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Text" key="2">
      {viewType === 'sidebar' ? (
        <Panel paddingX={16} flex={1}>
          <HashtaxEditor onChange={(text) => setText(text)} form={form} item={item} field="text" label="Text" rules={['required']} label={null} placeholder="Text" size="large" />
        </Panel>
      ) : (
        <Panel display="flex" flexDirection="row">
          <Panel paddingX={16} flex={1}>
            <HashtaxEditor onChange={(text) => setText(text)} form={form} item={item} field="text" label="Text" rules={['required']} label={null} placeholder="Text" size="large" />
          </Panel>
          <Panel paddingX={16} flex={1} backgroundColor="#f9f9f9" borderLeft="1px solid #f7f7f7">
            <Hashtax value={text || item.text} />
          </Panel>
        </Panel>
      )}
    </Tabs.TabPane>
  </Tabs>
));

export const List = (props) => (
  <CollectionModal {...props} DetailView={DataDetail} typeName="Template" nameField="name" />
);

// Bound views
export const DataDetail = Form.create()(query(Detail));
export const DataList = mutation(list(List));

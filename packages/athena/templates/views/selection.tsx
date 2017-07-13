import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Form, Button } from 'antd';
import Prompt from 'react-router-dom/Prompt';
import { Sidebar, Panel, onError, onSuccess } from 'olymp-ui';
import { InputEdit } from 'olymp-collection';
import { mutateTemplate } from '../gql';

@Form.create()
@mutateTemplate
class SelectionSidebar extends Component {
  ok = () => {
    const { form, item, mutate } = this.props;
    const id = item.id;

    form.validateFields((err, input) => {
      if (err) {
        return onError(err);
      }
      mutate({
        variables: {
          id,
          input,
        },
        updateQueries: !id
          ? {
            templateList: (prev, { mutationResult }) => ({
              ...prev,
              items: [
                ...prev.items.filter(item => item.id !== id),
                mutationResult.data.item,
              ],
            }),
          }
          : undefined,
      })
        .then(({ data: { item } }) => {
          onSuccess('Gespeichert', 'Das Template wurde gespeichert');
          form.resetFields();
        })
        .catch(onError);
    });
  };

  render() {
    const { item, form, onCancel, setText } = this.props;

    return (
      <Sidebar
        title={item.name || 'Neu'}
        subtitle={item.id ? 'Template bearbeiten' : 'Template erstellen'}
        footer={
          <div>
            <Button onClick={this.ok} type="primary">Speichern</Button>
            <Button onClick={onCancel} disabled={!item.id}>Abbrechen</Button>
          </div>
        }
        right
      >
        <Prompt
          when={form.isFieldsTouched()}
          message={location => 'Änderungen verwerfen?'}
        />

        <Tabs defaultActiveKey="1" size="small">
          <Tabs.TabPane tab="Template" key="1">
            <Panel paddingX={16} alignLabel="left">
              <InputEdit
                form={form}
                item={item}
                field="name"
                label="Name"
                rules={['required']}
                type="text"
                size="large"
              />
            </Panel>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Text" key="2">
            Text
          </Tabs.TabPane>
        </Tabs>
      </Sidebar>
    );
  }
}
SelectionSidebar.propTypes = {
  item: PropTypes.object,
};
/* SelectionSidebar.defaultProps = {
}; */
export default SelectionSidebar;

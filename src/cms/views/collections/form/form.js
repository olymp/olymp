import React from 'react';
import { Form, Input, Tabs, Menu, Icon } from 'antd';
import capitalize from 'lodash/upperFirst';
import { SlugEditor } from './editors';
import getInitialValue from './initial-value';
import getFormEditor from './form-editor';
import toLabel from './to-label';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };
const stampAttributes = ['createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

export default Form.create()(
  (props) => {
    const { collection, form, onCreate, item, className, style } = props;
    const { getFieldDecorator } = form;

    const fields = collection.fields.filter(({ name }) => name !== 'id').reduce((state, item) => {
      const group = item.description && item.description.indexOf('detail:') !== -1 ? item.description.split('detail:')[1].split('\n')[0] : 'Allgemein';

      // Wenn es vom Typ Json ist => Eigener Tab für Slate
      if (item.type.name === 'Json') {
        state[capitalize(item.name)] = [item];

        return state;
      }

      if (!state[group]) state[group] = [];
      state[group].push(item);

      return state;
    }, {});

    const renderForm = fields => (
      <Form horizontal>
        {fields.filter(({ name }) => name !== 'id' && stampAttributes.indexOf(name) === -1 && !['name', 'state', 'tags'].includes(name)).map((field) => {
          const title = field.description && field.description.indexOf('title:') !== -1 ? field.description.split('title:')[1].split('\n')[0] : toLabel(field.name);
          const editor = getFormEditor(
            field.type,
            name,
            (field.name === 'createdAt' || field.name === 'createdBy' || field.name === 'updatedAt' || field.name === 'updatedBy') ? { disabled: true } : {},
            field.name.endsWith('Id')
              ? fields.find(({ name }) => `${name}Id` === field.name)
              : field.name.endsWith('Ids')
              ? fields.find(({ name }) => `${name}Ids` === field.name)
              : null
          );

          if (!editor) return null;

          return (
            <Form.Item key={field.name} label={title.replace('-Ids', '').replace('-Id', '')} {...(field.type.name === 'Json' ? formItemLayout0 : formItemLayout)}>
              {getFieldDecorator(field.name, { initialValue: getInitialValue(props, field), valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value' })(editor)}
            </Form.Item>
          );
        })}
      </Form>
    );

    return (
      <div className={className} style={style}>
        <Form horizontal>
          <Form.Item key="name" label="Name" {...formItemLayout0}>
            {getFieldDecorator(
              'name',
              { initialValue: getInitialValue(props, collection.fields.find(field => field.name === 'name')) }
            )(
              <Input className="naked-area" autosize={{ minRows: 1, maxRows: 2 }} type="textarea" placeholder="Titel ..." style={{ textAlign: 'center' }} />
            )}
          </Form.Item>

          <Menu mode="horizontal" openKeys={[]}>
            <Menu.Item style={{ width: 150 }} key="state">
              {getFieldDecorator(
                'state',
                { initialValue: getInitialValue(props, collection.fields.find(field => field.name === 'state')) }
              )(
                getFormEditor(collection.fields.find(x => x.name === 'state').type)
              )}
            </Menu.Item>
            <Menu.Item style={{ minWidth: 200 }} key="tags">
              {getFieldDecorator(
                'tags',
                { initialValue: getInitialValue(props, collection.fields.find(field => field.name === 'tags')) }
              )(
                getFormEditor(collection.fields.find(x => x.name === 'tags').type, 'Schlagworte')
              )}
            </Menu.Item>

            <Menu.Item style={{ float: 'right' }} key="save">
              <span onClick={onCreate}><Icon type="save" /> Speichern</span>
            </Menu.Item>
          </Menu>
        </Form>

        <div className="ant-form-content">
          {Object.keys(fields).length === 1 ? renderForm(fields.Allgemein) : (
            <Tabs defaultActiveKey="0" animated={false} tabPosition="right">
              {Object.keys(fields).map((key, i) => (
                <Tabs.TabPane tab={key} key={i}>
                  {renderForm(fields[key])}
                </Tabs.TabPane>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    );
  }
);

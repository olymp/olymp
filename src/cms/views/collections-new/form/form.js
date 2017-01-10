import React from 'react';
import { Form, Input, Tabs } from 'antd';
import capitalize from 'capitalize';
import { SlugEditor } from './editors';
import getInitialValue from './initial-value';
import getFormEditor from './form-editor';
import toLabel from './to-label';

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };
const stampAttributes = ['createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

export default Form.create()(
  (props) => {
    const { collection, form, onCreate, onCancel, saving, item, className, style } = props;
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
        {fields.filter(({ name }) => name !== 'id' && stampAttributes.indexOf(name) === -1 && !['name', 'description', 'slug', 'state', 'tags'].includes(name)).map((field) => {
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
              {getFieldDecorator(field.name, { initialValue: getInitialValue(props, field) })(editor)}
            </Form.Item>
          );
        })}
      </Form>
    );

    return (
      <div className={className} style={style}>
        <Form horizontal>
          <Form.Item key="name" label="Name" {...formItemLayout0}>
            {getFieldDecorator('name', { initialValue: item && item.name })(<Input className="naked-area" autosize={{ minRows: 1, maxRows: 2 }} type="textarea" placeholder="Titel ..." style={{ textAlign: 'center' }} />)}
          </Form.Item>
          {item && item.slug !== undefined ? (
            <Form.Item key="slug" label="Slug" {...formItemLayout0}>
              {getFieldDecorator('slug', { initialValue: item.slug })(<SlugEditor url={item.slug} />)}
            </Form.Item>
          ) : null}
          <button onClick={onCreate}>Speichern</button>
          {item && item.state !== undefined ? (
            <Form.Item key="state" label="State" {...formItemLayout0}>
              {getFieldDecorator('state', { initialValue: item.state })(getFormEditor(collection.fields.find(x => x.name === 'state').type))}
            </Form.Item>
          ) : null}
          {item && item.tags !== undefined ? (
            <Form.Item key="tags" label="Schlagworte" {...formItemLayout0}>
              {getFieldDecorator('tags', { initialValue: item.tags })(getFormEditor(collection.fields.find(x => x.name === 'tags').type))}
            </Form.Item>
          ) : null}
        </Form>

        {Object.keys(fields).length === 1 ? renderForm(fields.Allgemein) : (
          <Tabs defaultActiveKey="0" animated={false}>
            {Object.keys(fields).map((key, i) => (
              <Tabs.TabPane tab={key} key={i}>
                {renderForm(fields[key])}
              </Tabs.TabPane>
            ))}
          </Tabs>
        )}
      </div>
    );
  }
);

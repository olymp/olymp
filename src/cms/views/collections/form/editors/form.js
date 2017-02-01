import React, { Component } from 'react';
import { withCollection } from 'olymp';
import { Button, Collapse, Form } from 'antd';
import getFormEditor from '../form-editor';

const fieldNames = ['createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

@withCollection
export default class SubForm extends Component {
  removeItem = (index) => {
    const { onChange, value } = this.props;
    return onChange((value || []).filter((x, i) => i !== index));
  };
  createItem = () => {
    const { onChange, value } = this.props;
    return onChange([...(value || []), {}]);
  };
  patchItem = (index, nestedValue) => {
    const { onChange, value } = this.props;
    return onChange((value || []).map((x, i) => i === index ? nestedValue : x));
  };
  mouseDown = index => (e) => {
    e.preventDefault();
    this.removeItem(index);
  }
  getHeader = (title, index) => (
    <div>
      {title}
      <i className="fa fa-close pull-right" onMouseDown={this.mouseDown(index)} />
    </div>
  );
  render() {
    const { value, collection, onChange, ...rest } = this.props;

    return (
      <div>
        <Collapse accordion>
          {(value || []).map((value, i) => (
            <Collapse.Panel header={this.getHeader(value.name || `Eintrag ${i}`, i)} key={i}>
              <div className="ant-form">
                {collection.fields.filter(({ name }) => name !== 'id' && fieldNames.indexOf(name) === -1).map(({ type, name }) =>
                  <Form.Item key={name}>
                    {getFormEditor(
                      type,
                      name,
                      {
                        initialValue: value[name],
                        onChange: v => this.patchItem(i, { ...value, [name]: v && v.target ? v.target.value : v }),
                        disabled: (name === 'createdAt' || name === 'createdBy' || name === 'updatedAt' || name === 'updatedBy'),
                      }
                    )}
                  </Form.Item>
                )}
              </div>
            </Collapse.Panel>
          ))}
        </Collapse>
        <Button onClick={this.createItem}>Erstellen</Button>
      </div>
    );
  }
}

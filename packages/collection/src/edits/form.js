import React, { Component } from 'react';
import { withCollection } from '../decorators';
import {
  getEditor,
  getInitialValue,
  getValidationRules,
} from '../components/form/utils';
import { Button, Collapse, Form } from 'antd';

const fieldNames = [
  'createdBy',
  'createdAt',
  'updatedBy',
  'updatedAt',
  'updatedById',
  'createdById',
];

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 14 } };
const formItemLayout0 = { labelCol: { span: 0 }, wrapperCol: { span: 24 } };

@withCollection
@Form.create()
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
    return onChange(
      (value || []).map((x, i) => (i === index ? nestedValue : x))
    );
  };

  mouseDown = index => (e) => {
    e.preventDefault();
    this.removeItem(index);
  };

  getHeader = (title, index) =>
    (<div>
      {title}
      <i
        className="fa fa-close pull-right"
        onMouseDown={this.mouseDown(index)}
      />
    </div>);

  render() {
    const { value, collection, onChange, form, ...rest } = this.props;
    return (
      <div>
        <Collapse accordion>
          {(value || []).map((value, i) =>
            (<Collapse.Panel
              header={this.getHeader(value.name || `Eintrag ${i}`, i)}
              key={i}
            >
              <div className="ant-form">
                {(collection ? collection.fields : [])
                  .filter(
                    ({ name }) =>
                      name !== 'id' && fieldNames.indexOf(name) === -1
                  )
                  .map(field =>
                    (<Form.Item
                      label={field.name}
                      key={field.name}
                      hasFeedback
                      {...(field.type.name === 'Json'
                        ? formItemLayout0
                        : formItemLayout)}
                    >
                      {form.getFieldDecorator(field.name, {
                        initialValue: getInitialValue(
                          { item: value, form },
                          field
                        ),
                        rules: getValidationRules(field),
                        valuePropName: field.type.name === 'Boolean'
                          ? 'checked'
                          : 'value',
                        disabled:
                          name === 'createdAt' ||
                            name === 'createdBy' ||
                            name === 'updatedAt' ||
                            name === 'updatedBy',
                      })(
                        getEditor({
                          field,
                          item: value,
                          onChange: v =>
                            this.patchItem(i, {
                              ...value,
                              [field.name]: v && v.target ? v.target.value : v,
                            }),
                        })
                      )}
                    </Form.Item>)
                  )}
              </div>
            </Collapse.Panel>)
          )}
        </Collapse>
        <Button onClick={this.createItem}>Erstellen</Button>
      </div>
    );
  }
}

/* getFormEditor(
  type,
  name,
  {
    initialValue: value[name],
    onChange: v => this.patchItem(i, { ...value, [name]: v && v.target ? v.target.value : v }),
    disabled: (name === 'createdAt' || name === 'createdBy' || name === 'updatedAt' || name === 'updatedBy'),
  }
) */

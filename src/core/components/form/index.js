import React, { Component } from 'react';
import { Form } from 'antd';
import FormItem from './item';

const excludedFields = ['id', 'createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];

export default class FormComponent extends Component {
  render() {
    const { fields = [], inline, vertical, children, item, style, className, validateFields, ...rest } = this.props;

    let toAntSchema = x => x;
    const mappedFields = fields.reduce((result, field) => {
      // EXCLUDING
      if (excludedFields.includes(field.name)) return result;

      // DISABLED
      if (field['@'].disabled) return result;

      // RELATION
      if (field.name.endsWith('Id') || field.name.endsWith('Ids')) {
        if (field.name.endsWith('Id')) {
          field['@'].idField = fields.find(({ name }) => `${name}Id` === field.name);
        } else if (field.name.endsWith('Ids')) {
          field['@'].idField = fields.find(({ name }) => `${name}Ids` === field.name);
        }
        result.splice(result.findIndex(({ name }) => name === field['@'].idField.name), 1);
      }

      // RANGE
      if (field['@'].end) return result;
      if (field['@'].start) {
        const end = fields.find(x => x['@'].end);
        field['@'].endField = end;
      }

      result.push(field);
      return result;
    }, []);

    return (
      <Form vertical={vertical} inline={inline} style={style} className={className}>
        {mappedFields.map(field => (
          <FormItem
             {...rest}
            field={field}
            item={item}
            key={field.name}
          />
        ))}
        {children}
      </Form>
    );
  }
}

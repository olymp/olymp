import React, { Component } from 'react';
import { withItem, withRouter } from 'olymp';
import { Spin } from 'antd';
import { Form } from './form';
import capitalize from 'lodash/upperFirst';
import './detail.less';

const disabledFields = ['createdAt', 'createdBy', 'updatedAt', 'updatedBy'];
const excludedFields = ['id', 'createdBy', 'createdAt', 'updatedBy', 'updatedAt', 'updatedById', 'createdById'];
const headFields = ['name'];
const barFields = ['state', 'tags'];

const getFormSchema = ({ fields }) =>
  // { header: [], bar: [], tabs: {} }
  fields.reduce((result, field) => {
    if (excludedFields.includes(field.name)) return result;

    if (field['@'].end) return result;
    if (field['@'].start) {
      const end = fields.find(x => x['@'].end);

      if (end && end.name) {
        result.before.push(item => ({
          ...item,
          end: undefined,
          start: [item[field.name], item[end.name]]
        }));
        result.after.push(item => ({
          ...item,
          [end.name]: item.start[1],
          [field.name]: item.start[0],
        }));
      }
    }

    field['@'].disabled = disabledFields.includes(field.name);
    if (field.name.endsWith('Id')) {
      field['@'].idField = fields.find(({ name }) => `${name}Id` === field.name);
    } else if (field.name.endsWith('Ids')) {
      field['@'].idField = fields.find(({ name }) => `${name}Ids` === field.name);
    }

    if (headFields.includes(field.name)) { // Head
      result.header.push(field);
    } else if (barFields.includes(field.name)) { // Bar
      result.bar.splice(barFields.indexOf(field.name), 0, field);
      result.bar.join();
    } else if (field.type.name === 'Json') { // if slate => own group
      result.tabs[capitalize(field.name)] = [field];
    } else { // Group
      const group = field['@'].detail ? field['@'].detail.arg0 : 'Allgemein';

      if (!result.tabs[group]) result.tabs[group] = [];
      result.tabs[group].push(field);
    } return result;
  }, {
    header: [],
    bar: [],
    tabs: {},
    before: [],
    after: []
  });

@withItem({})
@withRouter
export default class MainDetail extends Component {
  handleCreate = () => {
    const { save, refetch, query, typeName, id, location, router } = this.props;
    const { pathname } = location;
    const form = this.form;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      save(this.after.reduce((x, fn) => fn(x), values), { commit: false }).then((obj) => {
        if (!id) {
          router.push({ pathname, query: { [`@${typeName.toLowerCase()}`]: obj[typeName.toLowerCase()].id } });
        }
        if (refetch) refetch(query);
      });
    });
  }

  render() {
    const { item, collection, loading } = this.props;

    if (!item || loading) {
      return (
        <div style={{ minHeight: 400 }}>
          <Spin size="large" />
        </div>
      );
    }

    const { before, after, ...schema } = getFormSchema(collection);
    this.after = after;

    return (
      <div className="container olymp-container">
        <Form
          {...this.props}
          item={before.reduce((item, fn) => fn(item), item)}
          schema={schema}
          ref={form => this.form = form}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

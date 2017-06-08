import React, { Component } from 'react';
import { withItem, withRouter, withForm } from 'olymp';
import { Spin } from 'antd';
import Form from './detail-form';
import capitalize from 'lodash/upperFirst';
import './detail.less';

const headFields = ['name'];
const barFields = ['state', 'tags'];

const getFormSchema = ({ fields }) =>
  // { header: [], bar: [], tabs: {} }
  fields.reduce((result, field) => {
    if (headFields.includes(field.name)) { // Head
      result.header.push(field);
    } else if (barFields.includes(field.name)) { // Bar
      result.bar.splice(barFields.indexOf(field.name), 0, field);
      result.bar.join();
    } else if (field.type.name === 'Json') { // if slate => own group
      result.tabs[capitalize(field.name)] = [field];
    } else if (field.type.name === 'Image') { // if image => own group
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
  });

@withItem({})
@withRouter
@withForm
export default class CollectionDetail extends Component {
  handleCreate = () => {
    const { save, refetch, gqlQuery, typeName, id, location, router, form } = this.props;
    const { pathname } = location;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      save(values, { commit: false }).then((obj) => {
        if (!id) {
          router.push({ pathname, query: { [`@${typeName.toLowerCase()}`]: obj[typeName.toLowerCase()].id } });
        }
        if (refetch) refetch(gqlQuery);
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

    return (
      <div className="container olymp-container p-1">
        <Form
          {...this.props}
          item={item}
          schema={getFormSchema(collection)}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { withItem } from '../decorators';
import { Spin } from 'antd';
import DetailForm from './detail-form';
import capitalize from 'lodash/upperFirst';
import { withRouter } from 'olymp';
import './detail.less';

const headFields = ['name'];
const barFields = ['state', 'tags'];

const getFormSchema = ({ fields }) =>
  // { header: [], bar: [], tabs: {} }
  fields.reduce(
    (result, field) => {
      if (headFields.includes(field.name)) {
        // Head
        result.header.push(field);
      } else if (barFields.includes(field.name)) {
        // Bar
        result.bar.splice(barFields.indexOf(field.name), 0, field);
        result.bar.join();
      } else if (field.type.name === 'Json') {
        // if slate => own group
        result.tabs[capitalize(field.name)] = [field];
      } else if (field.type.name === 'Image') {
        // if image => own group
        result.tabs[capitalize(field.name)] = [field];
      } else {
        // Group
        const group = field['@'].detail ? field['@'].detail.arg0 : 'Allgemein';

        if (!result.tabs[group]) { result.tabs[group] = []; }
        result.tabs[group].push(field);
      }
      return result;
    },
    {
      header: [],
      bar: [],
      tabs: {},
    }
  );

@withRouter
@withItem
export default class CollectionDetail extends Component {
  render() {
    const { id, item, collection, loading, onSave } = this.props;
    if (id && !item) {
      return (
        <div style={{ minHeight: 400 }}>
          <Spin size="large" />
        </div>
      );
    }

    return (
      <div className="container olymp-container p-1">
        <DetailForm
          {...this.props}
          item={item || {}}
          schema={getFormSchema(collection)}
          onCreate={onSave}
        />
      </div>
    );
  }
}

import React from 'react';
import {
  compose,
  toClass,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import { SplitView, Sidebar } from 'olymp-ui';
import { Collapse, Button } from 'antd';
import Form from './components/form/form-list';
import FormItem from './form-item';
import withCollection from './decorators/with-collection';

const enhance = compose(
  toClass,
  withProps(({ type }) => ({
    typeName: type.ofType.name,
  })),
  withHandlers({
    onChangeItem: ({ onChange, value }) => (index, nestedValue) => {
      nestedValue = { ...(value[index] || {}), ...nestedValue };
      onChange((value || []).map((x, i) => (i === index ? nestedValue : x)));
    },
  }),
  withState('activeField', 'setActiveField'),
  withCollection,
);

export default {
  collapse: true,
  rule: ({ innerType }) =>
    innerType.kind === 'LIST' && innerType.ofType.name.indexOf('Nested') === 0,
  form: toClass(
    ({
      value = [],
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...p
    }) => (
      <FormItem {...p}>
        <span data-__field={dataField} data-__meta={dataMeta}>
          {value.length} Einträge
        </span>
      </FormItem>
    ),
  ),
  full: enhance(
    ({ collection, value, name, title, label, id, ...props }) =>
      collection ? (
        <Form
          {...props}
          items={value || []}
          collection={collection}
          label={id}
        />
      ) : null,
  ),
};

/*
import React, { Component } from 'react';
import { Button, Collapse } from 'antd';
import Form from './form';
import withCollection from '../decorators/with-collection';

@withCollection
export default class SubForm extends Component {
  mouseDown = index => (e) => {
    e.preventDefault();
    this.removeItem(index);
  };

  onRemove = (index) => {
    const { onChange, value } = this.props;
    onChange((value || []).filter((x, i) => i !== index));
  };

  createItem = () => {
    const { onChange, value } = this.props;
    onChange([...(value || []), {}]);
  };

  getHeader = (title, index) => (
    <div>
      {title}
      <i className="fa fa-close pull-right" onMouseDown={this.mouseDown(index)} />
    </div>
  );

  onChangeItem = (index, nestedValue) => {
    const { onChange, value } = this.props;
    nestedValue = { ...(value[index] || {}), ...nestedValue };
    onChange((value || []).map((x, i) => (i === index ? nestedValue : x)));
  };

  render() {
    const { value, collection } = this.props;
    return (
      <div>
        <Collapse accordion>
          {(value || []).map((value, i) => (
            <Collapse.Panel header={this.getHeader(value.name || `Eintrag ${i}`, i)} key={i}>
              <Form
                onRemove={() => this.onRemove(i)}
                collection={collection}
                value={value}
                onChange={item => this.onChangeItem(i, item)}
              />
            </Collapse.Panel>
          ))}
        </Collapse>
        <Button onClick={this.createItem}>Erstellen</Button>
      </div>
    );
  }
}
*/

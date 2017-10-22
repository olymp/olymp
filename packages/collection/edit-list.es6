import React from 'react';
import {
  compose,
  toClass,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import { Sidebar } from 'olymp-ui';
import { Collapse, Button } from 'antd';
import Form from './components/form';
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

const getHeader = (title, index) => (
  <div>
    {title}
    <i className="fa fa-close pull-right" />
  </div>
);
export default {
  collapse: true,
  rule: ({ type }) =>
    type.kind === 'LIST' && type.ofType.name.indexOf('Nested') === 0,
  form: toClass(({ value = [], ...p }) => (
    <FormItem {...p}>{value.length} Einträge</FormItem>
  )),
  full: enhance(
    ({
      collection,
      '@': at,
      type,
      value,
      label,
      onChange,
      activeField,
      setActiveField,
      onChangeItem,
      ...props
    }) => (
      <Sidebar isOpen padding={0} width={400} title={label}>
        <Collapse>
          {(value || []).map((value, i) => (
            <Collapse.Panel
              header={getHeader(value.name || `Eintrag ${i}`, i)}
              key={i}
            >
              <Form
                activeField={activeField}
                setActiveField={setActiveField}
                onRemove={() => this.onRemove(i)}
                collection={collection}
                value={value}
                onChange={item => onChangeItem(i, item)}
              />
            </Collapse.Panel>
          ))}
        </Collapse>
        <Button onClick={this.createItem}>Erstellen</Button>
      </Sidebar>
    ),
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

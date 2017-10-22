import React, { Component } from 'react';
import { withState } from 'recompose';
import { Button, Collapse } from 'antd';
import Form from './form';
import withCollection from '../decorators/with-collection';

@withCollection
@withState('activeField', 'setActiveField')
export default class SubForm extends Component {
  mouseDown = index => e => {
    e.preventDefault();
    this.removeItem(index);
  };

  onRemove = index => {
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
      <i
        className="fa fa-close pull-right"
        onMouseDown={this.mouseDown(index)}
      />
    </div>
  );

  onChangeItem = (index, nestedValue) => {
    const { onChange, value } = this.props;
    nestedValue = { ...(value[index] || {}), ...nestedValue };
    onChange((value || []).map((x, i) => (i === index ? nestedValue : x)));
  };

  render() {
    const { value, collection, activeField, setActiveField } = this.props;
    return (
      <div>
        <Collapse accordion>
          {(value || []).map((value, i) => (
            <Collapse.Panel
              header={this.getHeader(value.name || `Eintrag ${i}`, i)}
              key={i}
            >
              <Form
                activeItem={activeField}
                setActiveField={setActiveField}
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

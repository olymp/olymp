import React, { Component } from 'react';
import { withCollection } from '../decorators';
import Editor from '../components/form/editor';
import { Button, Collapse } from 'antd';

const fieldNames = [
  'createdBy',
  'createdAt',
  'updatedBy',
  'updatedAt',
  'updatedById',
  'createdById',
];

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
    const { value, collection, onChange, ...rest } = this.props;
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
                    <Editor key={field.name} field={field} item={value} />
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

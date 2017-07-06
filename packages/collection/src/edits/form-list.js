import React, { Component } from 'react';
import { withCollection } from '../decorators';
import {
    getEditor,
    getInitialValue,
    getValidationRules,
} from '../components/form/utils';
import { Button, Collapse } from 'antd';
import Form from './form';

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
export default class SubForm extends Component {
    /*


    patchItem = (index, nestedValue) => {
        const { onChange, value } = this.props;
        return onChange(
            (value || []).map((x, i) => (i === index ? nestedValue : x))
        );
    };*/

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

    getHeader = (title, index) =>
        (<div>
            {title}
            <i
                className="fa fa-close pull-right"
                onMouseDown={this.mouseDown(index)}
            />
        </div>);

    onChangeItem = (index, nestedValue) => {
        const { onChange, value } = this.props;
        nestedValue = { ...(value[index] || {}), ...nestedValue };
        onChange(
            (value || []).map((x, i) => (i === index ? nestedValue : x))
        );
    }

    render() {
        const { value, collection } = this.props;
        return (
            <div>
                <Collapse accordion>
                    {(value || []).map((value, i) =>
                        (<Collapse.Panel
                            header={this.getHeader(value.name || `Eintrag ${i}`, i)}
                            key={i}
                        >
                            <Form onRemove={() => this.onRemove(i)} collection={collection} value={value} onChange={item => this.onChangeItem(i, item)} />
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

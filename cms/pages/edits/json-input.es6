import React, { Component } from 'react';
import { Input as AntInput, Form } from 'antd';
import { layout } from 'olymp-fela/antd';
import { get } from 'lodash';
import getRules from '../get-rules';

class JsonInput extends Component {
  state = { text: '' };
  componentWillReceiveProps = newProps => {
    this.setState({
      text: newProps.value ? JSON.stringify(newProps.value) : ''
    });
  };
  onChange = x => {
    this.setState({ text: x.target.value });
    try {
      this.props.onChange(JSON.parse(x.target.value));
    } catch (err) {}
  };
  render() {
    const { onChange, value, ...rest } = this.props;
    const newValue = value ? JSON.stringify(value) : '';
    return (
      <AntInput value={this.state.text} onChange={this.onChange} {...rest} />
    );
  }
}

const Input = ({
  item,
  field,
  label,
  layout,
  initialValue,
  rules,
  placeholder,
  form,
  ...rest
}) => (
  <Form.Item key={field} label={label} {...layout}>
    {form.getFieldDecorator(field, {
      initialValue: get(item, field),
      rules: getRules(rules, label)
    })(<JsonInput placeholder={placeholder} label={label} />)}
  </Form.Item>
);
Input.defaultProps = { layout };
export default Input;

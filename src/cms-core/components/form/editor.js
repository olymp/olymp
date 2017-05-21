import React, { Component } from 'react';
import { Input, Select, Checkbox, InputNumber } from 'antd';
import { ColorEditor, DateEditor, DateRangeEditor, DetailEditor, TimeRangeEditor, TagsEditor, SuggestEditor } from 'olymp/edits';
import FormEditor from './edit';
import { SlateMate } from 'olymp/slate';
import moment from 'moment';
import capitalize from 'lodash/upperFirst';
import { withEdits, cn } from 'olymp';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  ARCHIVED: 'Archiv',
  REMOVED: 'Papierkorb',
};

const getValidationRules = (field) => {
  const rules = [];
  const required = !!field['@'] && !!field['@'].required;
  const label = (!!field['@'] && field['@'].label) || capitalize(field.name);

  if (field.name === 'name') {
    rules.push({ required, message: `'${label}' muss angegeben werden!` });
  } else if (field.type.name === 'Email') {
    rules.push({ required, type: 'email', message: 'Keine gültige E-Mail Adresse!' });
  } else if (field.type.name === 'Website') {
    rules.push({ required, type: 'url', message: 'Keine gültige Website!' });
  } else if (field.type.name !== 'Boolean') {
    rules.push({ required, message: `'${label}' muss angegeben werden!` });
  }

  return rules;
};

const getInitialValue = ({ item = {}, getFieldValue }, field) => {
  const { name } = field;

  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (field['@'].default) {
    // Wenn ein default-Wert existiert
    return field['@'].default.arg0;
  } else if (name === 'state') {
    // Bei State
    return 'DRAFT';
  } else if (name === 'slug' && getFieldValue('name')) {
    // Bei Slug
    let url = '/' + encodeURIComponent(getFieldValue('name').split(' ').join('-').toLowerCase())
      .split('%C3%A4').join('ä')
      .split('%C3%B6').join('ö')
      .split('%C3%BC').join('ü')
      .split('%C3%A4').join('Ä')
      .split('%C3%B6').join('Ö')
      .split('%C3%BC').join('Ü');
    if (getFieldValue('date')) {
      url = moment(getFieldValue('date')).format('DD-MM-YYYY') + '-' + url;
    }
    return url;
  }

  return undefined;
};

@withEdits
export default class FieldEditor extends Component {
  state = { start: undefined, end: undefined };

  fieldToEditor = (props) => {
    const { edits, className, editorClassName, style, editorStyle, field, label } = this.props;
    const { idField, start, suggest } = field['@'];
    const { type, name } = field;

    const editProps = {
      placeholder: label || null,
      style: { ...editorStyle, ...style },
      className: cn(editorClassName, className),
      ...props,
    };

    let Editor;
    edits.forEach((editFn) => {
      const Edit = editFn(type);

      if (Edit) {
        Editor = React.cloneElement(
          Edit,
          editProps
        );
      }
    });
    if (Editor) return Editor;

    if (idField && idField.type) {
      if (idField.type.kind === 'LIST' && idField.type.ofType) {
        return <DetailEditor {...editProps} mode="tags" typeName={idField.type.ofType.name} />;
      } return <DetailEditor {...editProps} typeName={idField.type.name} />;
    }
    if (type.kind === 'LIST') {
      if (type.ofType.name === 'String') {
        if (name === 'tags') {
          return <TagsEditor {...editProps} searchPlaceholder="Suche ..." />;
        } return <Select {...editProps} mode="tags" searchPlaceholder="Suche ..." />;
      } if (type.ofType.name.indexOf('Nested') === 0) {
        return <FormEditor {...editProps} typeName={type.ofType.name} type={type} />;
      } return null;
    }
    if (type.kind === 'OBJECT') {
      return null;
    }
    if (suggest) {
      return <SuggestEditor {...editProps} collection={suggest.arg0} field={suggest.arg1} />;
    }
    if (start) {
      if (type.name === 'Date') return <DateRangeEditor {...editProps} format="DD.MM.YYYY" />;
      if (type.name === 'DateTime') return <DateRangeEditor {...editProps} format="DD.MM.YYYY HH:mm" showTime={{ format: 'HH:mm' }} />;
    }
    if (type.kind === 'ENUM' && type.enumValues) {
      let resolveName = item => item;

      if (type.name === 'DOCUMENT_STATE') {
        resolveName = item => states[item];
      }

      return (
        <Select {...editProps}>
          {type.enumValues.map(x => (
            <Select.Option key={x.name} value={x.name}>{resolveName(x.name)}</Select.Option>
          ))}
        </Select>
      );
    }
    switch (type.name) {
      case 'Json':
        return <SlateMate {...editProps} placeholder={label || 'Hier Text eingeben!'} style={{ borderBottom: '1px solid #e9e9e9' }} />;
      case 'Boolean':
        return <Checkbox {...editProps}>{label}</Checkbox>;
      case 'Date':
        return <DateEditor {...editProps} format="DD.MM.YYYY" />;
      case 'DateTime':
        return <DateEditor {...editProps} format="DD.MM.YYYY HH:mm" showTime={{ format: 'HH:mm' }} />;
      case 'Color':
        return <ColorEditor {...editProps} addonBefore={<i className="fa fa-eyedropper" />} />;
      case 'Markdown':
        return <Input {...editProps} type="textarea" autosize />;
      case 'Slug':
        return <Input {...editProps} addonBefore={<i className="fa fa-globe" />} />;
      case 'Email':
        return <Input {...editProps} addonBefore={<i className="fa fa-envelope-o" />} />;
      case 'PhoneNumber':
        return <Input {...editProps} addonBefore={<i className="fa fa-phone" />} />;
      case 'Website':
        return <Input {...editProps} addonBefore={<i className="fa fa-link" />} />;
      case 'Int':
        return <InputNumber {...editProps} placeholder={label || 0} />;
      case 'TimeRange':
        return <TimeRangeEditor {...editProps} />;
      /* case 'user':
        return type.fields.map(field => (
          <Select.Option key={field.name} value={field.name}>{field.name}</Select.Option>
        )); */
      default:
        return <Input {...editProps} />;
    }
  }

  render() {
    const { field, getFieldDecorator, getFieldValue, setFieldsValue, item } = this.props;
    // const { start, end } = this.state;

    const editor = this.props.editor || this.fieldToEditor();
    const isDateRange = !!field['@'].start && !!field['@'].endField;
    const rules = getValidationRules(field);

    if (!editor || !getFieldDecorator) return null;

    if (isDateRange) {
      const start = this.state.start || item[field.name];
      const end = this.state.end || item[field['@'].endField.name];

      return (
        <div>
          {this.fieldToEditor({
            onChange: (e) => {
              setFieldsValue({
                [field.name]: e[0],
                [field['@'].endField.name]: e[1],
              });
              this.setState({ start: e[0], end: e[1] });
            },
            value: [start, end],
          })}
          {getFieldDecorator(field.name, {
            initialValue: start,
            rules
          })(<DateEditor style={{ display: 'none' }} />)}
          {getFieldDecorator(field['@'].endField.name, {
            initialValue: end,
            rules: getValidationRules(field['@'].endField)
          })(<DateEditor style={{ display: 'none' }} />)}
        </div>
      );
    }

    return (
      getFieldDecorator(field.name, {
        initialValue: getInitialValue(this.props, field),
        rules,
        valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
      })(editor)
    );
  }
}

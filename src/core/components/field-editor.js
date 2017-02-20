import React, { Component } from 'react';
import { Input, Select, Checkbox, InputNumber } from 'antd';
import { ColorEditor, DateEditor, DateRangeEditor, DetailEditor, TimeRangeEditor, TagsEditor, FormEditor } from 'olymp/edits';
import { SlateMate } from 'olymp/slate';
import { withEdits } from '../decorators';
import { cn } from '../extern';
import moment from 'moment';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  ARCHIVED: 'Archiv',
  REMOVED: 'Papierkorb',
};

const getValidationRules = (field) => {
  const rules = [];
  if (field.name === 'name') {
    rules.push({ required: true, message: 'Bitte geben Sie einen Namen an!' });
  }
  if (field.type.name === 'Email') {
    rules.push({ type: 'email', message: 'Keine gültige E-Mail Adresse!' });
  } else if (field.type.name === 'Website') {
    rules.push({ type: 'url', message: 'Keine gültige Website!' });
  }
  return rules;
};

const getInitialValue = ({ item = {}, form }, field) => {
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
  } else if (name === 'slug' && form.getFieldValue('name')) {
    // Bei Slug
    let url = '/' + encodeURIComponent(form.getFieldValue('name').split(' ').join('-').toLowerCase())
      .split('%C3%A4').join('ä')
      .split('%C3%B6').join('ö')
      .split('%C3%BC').join('ü')
      .split('%C3%A4').join('Ä')
      .split('%C3%B6').join('Ö')
      .split('%C3%BC').join('Ü');
    if (form.getFieldValue('date')) {
      url = moment(form.getFieldValue('date')).format('DD-MM-YYYY') + '-' + url;
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
    const { idField, start } = field['@'];
    const { type, name } = field;

    const editProps = {
      placeholder: label,
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
        return <DetailEditor {...editProps} tags typeName={idField.type.ofType.name} />;
      }

      return <DetailEditor {...editProps} typeName={idField.type.name} />;
    }
    if (type.kind === 'LIST') {
      if (type.ofType.name === 'String') {
        if (name === 'tags') {
          return <TagsEditor {...editProps} searchPlaceholder="Suche ..." />;
        }
        return <Select {...editProps} tags searchPlaceholder="Suche ..." />;
      } if (type.ofType.name.indexOf('Nested') === 0) {
        return <FormEditor {...editProps} typeName={type.ofType.name} type={type} />;
      } return null;
    }
    if (type.kind === 'OBJECT') {
      return null;
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
    const { field, getFieldDecorator, item } = this.props;
    const { start, end } = this.state;

    const editor = this.props.editor || this.fieldToEditor();
    const isDateRange = !!field['@'].start && !!field['@'].endField;

    if (!editor || !getFieldDecorator) return null;

    return (
      <div>
        {!isDateRange ? (
          getFieldDecorator(field.name, {
            initialValue: getInitialValue(this.props, field),
            rules: getValidationRules(field),
            valuePropName: field.type.name === 'Boolean' ? 'checked' : 'value',
          })(editor)
        ) : (
          <div>
            {this.fieldToEditor({
              onChange: e => this.setState({ start: e[0], end: e[1] }),
              value: [start || item[field.name], end || item[field['@'].endField.name]],
            })}
            {getFieldDecorator(field.name, { initialValue: start || item[field.name] })(<DateEditor style={{ display: 'none' }} />)}
            {getFieldDecorator(field['@'].endField.name, { initialValue: end || item[field['@'].endField.name] })(<DateEditor style={{ display: 'none' }} />)}
          </div>
        )}
      </div>
    );
  }
}

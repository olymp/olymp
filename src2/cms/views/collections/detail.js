import React, { Component } from 'react';
import capitalize from 'capitalize';
import { withItem, withCollection } from '../../decorators';
import { Modal, Button, Form, Input, DatePicker, Select, Slider, Tabs, Collapse, Checkbox } from 'antd';
import { SlateMate } from 'olymp/slate';
import moment from 'moment';
import Image from '../../edits/image';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

const modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch' };
const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };

const preventDefaultAnd = (func, args) => e => {
  e.preventDefault();
  func(args);
};
const SubForm = withCollection(({ value = [], collection, onChange, ...rest }) => {
  const removeItem = index => onChange(value.filter((x, i) => i !== index));
  const createItem = () => onChange([...value, {}]);
  const patchItem = (index, nestedValue) => onChange(value.map((x, i) => i === index ? nestedValue : x));
  const getHeader = (title, index) => (
    <div>
      {title}
      <i className="fa fa-close pull-right" onMouseDown={preventDefaultAnd(removeItem, index)} />
    </div>
  );
  return (
    <div>
      <Collapse accordion>
        {value.map((value, i) => (
          <Panel header={getHeader(value.name || `Eintrag ${i}`, i)} key={i}>
            <div className="ant-form">
              {collection.fields.filter(({ name }) => name !== 'id').map(({ type, name }) =>
                <FormItem key={name}>
                  {getFormEditor(
                    type,
                    name,
                    {
                      value: value[name],
                      onChange: v => patchItem(i, {
                        ...value,
                        [name]: v && v.target ? v.target.value : v,
                      }),
                      disabled: (name === 'createdAt' || name === 'createdBy' || name === 'updatedAt' || name === 'updatedBy'),
                    }
                  )}
                </FormItem>
              )}
            </div>
          </Panel>
        ))}
      </Collapse>
      <Button onClick={createItem}>Erstellen</Button>
    </div>
  );
});
const MultiSlider = ({ value = [] }) => {
  return (
    <div>
      {value.map((v, i) => (
        <div style={{ marginBottom: '30px' }} key={i}>
          <Slider marks={{ 8: '08:00', 13: '13:00', 18: '18:00' }} range={3} min={7} max={19} step={0.5}
                  tipFormatter={v => v % 1 === 0 ? `${v}:00` : `${Math.floor(v)}:30`} />
        </div>
      ))}
    </div>
  );
};

class DatePickerInt extends Component {
  onChange = (e) => {
    const { onChange } = this.props;
    const value = parseInt(e.format('x'));
    onChange(value);
  }
  getValue = () => {
    let { value } = this.props;
    // 2014-09-14T10:32:27.831Z
    if (typeof value === 'string') value = parseInt(moment(value.replace(/"/g, '')).format('x'));
    return value ? moment(value) : undefined;
  }
  render() {
    return <DatePicker {...this.props} value={this.getValue()} onChange={this.onChange} />;
  }
}

class SlateMateExt extends Component {
  state = { show: false };
  onChange = (e) => {
    const { onChange } = this.props;
    onChange(e);
  }
  render() {
    const { show } = this.state;
    const { value } = this.props;
    if (show) return <SlateMate {...this.props} value={value} onChange={this.onChange} />;
    return <Button onClick={() => this.setState({ show: true })}>Anzeigen</Button>;
  }
}

const getFormEditor = (type, name, props = {}) => {
  if (type.kind === 'LIST') {
    if (type.ofType.name === 'String') {
      return <Select {...props} tags searchPlaceholder="Suche ..." />;
    } else if (type.ofType.name.indexOf('nested') === 0) {
      return <SubForm {...props} name={type.ofType.name} type={type} />;
    }
  }

  if (type.kind === 'ENUM' && type.enumValues) {
    return (
      <Select {...props}>
        {type.enumValues.map(x => (
          <Select.Option key={x.name} value={x.name}>{x.name}</Select.Option>
        ))}
      </Select>
    );
  }

  switch (type.name) {
    case 'Json':
      return <SlateMateExt {...props} className="form-control" placeholder={name} />;

    case 'Boolean':
      return <Checkbox {...props} />;

    case 'Date':
      return <DatePickerInt {...props} placeholder={name} format="DD.MM.YYYY" />;

    case 'DateTime':
      return <DatePickerInt {...props} placeholder={name} format="DD.MM.YYYY HH:mm" showTime={{ format: 'HH:mm' }} />;

    case 'Color':
      return <Input {...props} placeholder={name} type="color" addonBefore={<i className="fa fa-eyedropper" />} />;

    case 'Markdown':
      return <Input {...props} placeholder={name} type="textarea" autosize />;

    case 'Slug':
      return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-globe" />} />;

    case 'Email':
      return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-envelope-o" />} />;

    case 'PhoneNumber':
      return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-phone" />} />;

    case 'Website':
      return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-link" />} />;

    case 'TimeRange':
      return <MultiSlider {...props} />;

    case 'image':
      return <Image {...props} width="100%" noPreview />;

    /* case 'user':
      return type.fields.map(field => (
        <Select.Option key={field.name} value={field.name}>{field.name}</Select.Option>
      )); */

    default:
      return <Input {...props} placeholder={name} />;
  }
};

const getInitialValue = ({ item, form }, { name, description }) => {
  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (description && description.indexOf('default:') !== -1) {
    // Wenn ein default-Wert existiert
    return description.split('default:')[1].split(' ')[0].split('\n')[0];
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
const CollectionCreateForm = Form.create()(
  (props) => {
    const { collection, form, onCreate, onCancel, saving } = props;
    const { getFieldDecorator } = form;

    const fields = collection.fields.filter(({ name }) => name !== 'id').reduce((state, item) => {
      const group = item.description && item.description.indexOf('detail:') !== -1 ? item.description.split('detail:')[1].split('\n')[0] : 'Allgemein';
      if (!state[group]) state[group] = [];
      state[group].push(item);

      return state;
    }, {});

    const renderForm = fields => (
      <Form horizontal>
        {fields.filter(({ name }) => name !== 'id').map((field) => {
          const title = field.description && field.description.indexOf('title:') !== -1 ? field.description.split('title:')[1].split('\n')[0] : toLabel(field.name);

          return (
            <FormItem key={field.name} label={title} {...formItemLayout}>
              {getFieldDecorator(field.name, { initialValue: getInitialValue(props, field) })(
                getFormEditor(
                  field.type,
                  name,
                  (field.name === 'createdAt' || field.name === 'createdBy' || field.name === 'updatedAt' || field.name === 'updatedBy') ? { disabled: true } : {}
                )
              )}
            </FormItem>
          );
        })}
      </Form>
    );

    return (
      <Modal {...modalSettings} confirmLoading={saving} title="Bearbeiten" onCancel={onCancel} onOk={onCreate}>
        {Object.keys(fields).length === 1 ? renderForm(fields.Allgemein) : (
          <Tabs defaultActiveKey="0" type="card">
            {Object.keys(fields).map((key, i) => (
              <TabPane tab={key} key={i}>
                {renderForm(fields[key])}
              </TabPane>
            ))}
          </Tabs>
        )}
      </Modal>
    );
  }
);

@withCollection
@withItem({})
export default class MainDetail extends Component {
  handleCancel = () => {
    this.props.onClose();
  }

  handleCreate = () => {
    const { save, onClose } = this.props;
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log('Received values of form: ', values);
      save(values, { commit: false }).then(onClose);
    });
  }

  render() {
    const { item } = this.props;
    if (!item) return null;
    return (
      <CollectionCreateForm
        {...this.props}
        ref={form => this.form = form}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
      />
    );
  }
}

const toLabel = (x) => {
  const uml = x.replace(/ae/g, 'ä').replace(/oe/g, 'ö').replace(/ü/g, 'ue').replace(/Ae/g, 'Ä').replace(/Oe/g, 'Ö').replace(/Ue/g, 'Ü');
  const snake = uml.replace(/([A-Z])/g, ($1) => `-${$1}`);
  const capitalized = capitalize(snake);
  return capitalized;
};

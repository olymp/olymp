import React, { Component } from 'react';
import capitalize from 'capitalize';
import { withItem, withCollection } from '../../decorators';
import { Modal, Form, Input, DatePicker, Select, Slider, Tabs, Collapse } from 'antd';
import { SlateMate } from 'olymp/slate';
import moment from 'moment';
import Image from '../../edits/image';

const Option = Select.Option;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

const modalSettings = { visible: true, style: { top: 20 }, okText: 'Speichern', cancelText: 'Abbruch' };
const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

const SubForm = withCollection(({ value = [], collection, ...rest }) => {
  return (
    <Collapse accordion>
      {value.map((v, i) => (
        <Panel header={v.name || `Eintrag ${i}`} key={i}>
          <div className="ant-form">
            {collection.fields.filter(({ name }) => name !== 'id').map(({ type, name }) =>
              <FormItem key={name}>
                {getFormEditor(type, name, { value: v[name] })}
              </FormItem>
            )}
          </div>
        </Panel>
      ))}
    </Collapse>
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
    return (
      <DatePicker {...this.props} value={this.getValue()} onChange={this.onChange} />
    );
  }
}

const getFormEditor = (type, name, props = {}) => {
  if (type.kind === 'LIST' && type.ofType.name === 'String') {
    return <Select {...props} tags searchPlaceholder="Suche ..." />;
  } else if (type.name === 'Json') {
    return <SlateMate {...props} className="form-control" placeholder={name} />;
  } else if (type.name === 'Date') {
    return <DatePickerInt {...props} placeholder={name} format="DD.MM.YYYY" />;
  } else if (type.name === 'Color') {
    return <Input {...props} placeholder={name} type="color" addonBefore={<i className="fa fa-eyedropper" />} />;
  } else if (type.kind === 'OBJECT' && type.name === 'image') {
    return <Image {...props} width="100%" />;
  } else if (type.name === 'Markdown') {
    return <Input {...props} placeholder={name} type="textarea" autosize />;
  } else if (type.name === 'Slug') {
    return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-globe" />} />;
  } else if (type.name === 'Email') {
    return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-envelope-o" />} />;
  } else if (type.name === 'PhoneNumber') {
    return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-phone" />} />;
  } else if (type.name === 'Website') {
    return <Input {...props} placeholder={name} addonBefore={<i className="fa fa-link" />} />;
  } else if (type.name === 'TimeRange') {
    return <MultiSlider {...props} />;
  } else if (type.kind === 'ENUM' && type.enumValues) {
    return (
      <Select {...props}>
        {type.enumValues.map(x => <Option key={x.name} value={x.name}>{x.name}</Option>)}
      </Select>
    );
  } else if (type.kind === 'LIST' && type.ofType.name.indexOf('nested') === 0) {
    return (
      <SubForm {...props} name={type.ofType.name} type={type} />
    );
  } return <Input {...props} placeholder={name} />;
};

const CollectionCreateForm = Form.create()(
  (props) => {
    const { collection, item, form, onCreate, onCancel, saving } = props;
    const { getFieldDecorator } = form;

    const fields = collection.fields.filter(({ name }) => name !== 'id').reduce((state, item) => {
      const group = item.description && item.description.indexOf('detail:') !== -1 ? item.description.split('detail:')[1].split(' ')[0].split('\n')[0] : 'Allgemein';
      if (!state[group]) state[group] = [];
      state[group].push(item);
      return state;
    }, {});

    const renderForm = fields => (
      <Form horizontal>
        {fields.filter(({ name }) => name !== 'id').map(field =>
          <FormItem key={field.name} label={toLabel(field.name)} {...formItemLayout}>
            {getFieldDecorator(field.name, { initialValue: item[field.name] || undefined })(
              getFormEditor(field.type, name)
            )}
          </FormItem>
        )}
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
  /*static propTypes = {
    onClose: PropTypes.func.isRequired,
    patch: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
  }*/
  handleCancel = () => {
    this.props.onClose();
  }

  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log('Received values of form: ', values);
      this.props.save(values, { commit: false }).then(this.props.onClose);
    });
  }

  render() {
    if (!this.props.item) return null;
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

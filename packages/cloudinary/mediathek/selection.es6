import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton, Form } from 'antd';
import { withProps } from 'recompose';
import { createComponent } from 'olymp-fela';
import { mutateFile } from '../gql';
import Detail from './detail';

const Button = createComponent(
  ({ theme }) => ({
    marginRight: theme.space1,
  }),
  p => <AntButton {...p} />,
  p => Object.keys(p),
);

@mutateFile
@Form.create()
@withProps(({ onChange, items }) => ({
  editable: !onChange,
  multi: items.length > 1,
}))
class SelectionSidebar extends Component {
  save = () => {
    const { form, items, multi, save, onChange } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return console.error(err);
      }
      if (onChange) {
        if (values.crop && items.length) {
          items[0].crop = values.crop;
        }
        return multi ? onChange([items]) : onChange(items);
      }
      let promise;
      if (multi) {
        const changed = Object.keys(values).reduce((state, key) => {
          if (form.isFieldTouched(key) && key !== 'id') {
            state[key] = values[key];
          }
          return state;
        }, {});
        promise = Promise.all(
          items.map(item => save({ id: item.id, ...changed })),
        ).then(x => form.resetFields());
      } else {
        promise = save(values).then(x => form.resetFields());
      }
    });
  };

  render() {
    const {
      onClick,
      form,
      items,
      editable,
      onRemove,
      onCancel,
      multi,
      activeId,
    } = this.props;
    return (
      <div>
        <Detail
          form={form}
          item={items[0]}
          items={items}
          multi={multi}
          editable={editable}
          activeId={activeId}
          onClick={onClick}
          onRemove={onRemove}
        >
          {editable ? (
            <Button onClick={this.save} type="primary" disabled={!items.length}>
              {items.length > 1 ? 'Alle speichern' : 'Speichern'}
            </Button>
          ) : (
            <Button onClick={this.save} type="primary" disabled={!items.length}>
              Einfügen
            </Button>
          )}
          {onCancel && (
            <Button onClick={onCancel} disabled={!onCancel}>
              Abbrechen
            </Button>
          )}
        </Detail>
      </div>
    );
  }
}
SelectionSidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  onCancel: PropTypes.func,
};
SelectionSidebar.defaultProps = {
  items: [],
  onClick: undefined,
  onRemove: undefined,
  onCancel: undefined,
};
export default SelectionSidebar;

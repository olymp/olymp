import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';
import { withProps, withPropsOnChange } from 'recompose';
import { mutateFile } from '../gql';
import Detail from './detail';
import Gallery from '../components/gallery';
import LightboxGallery from '../lightbox-gallery';

@mutateFile
@Form.create()
@withProps(({ onChange, items }) => ({
  editable: !onChange,
  multi: items.length > 1,
}))
@withPropsOnChange(['editable', 'items', 'activeId'], ({ editable, items, activeId }) => ({
  selectedIds: editable ? items.map(x => x.id) : [activeId].filter(x => x),
}))
class SelectionSidebar extends Component {
  save = () => {
    const { form, items, multi, save, onChange } = this.props;
    if (onChange) {
      return onChange(items);
    }
    form.validateFields((err, values) => {
      if (err) {
        return console.error(err);
      }
      let promise;
      if (multi) {
        const changed = Object.keys(values).reduce((state, key) => {
          if (form.isFieldTouched(key) && key !== 'id') {
            state[key] = values[key];
          }
          return state;
        }, {});
        promise = Promise.all(items.map(item => save({ id: item.id, ...changed }))).then(x =>
          form.resetFields(),
        );
      } else {
        promise = save(values).then(x => form.resetFields());
      }
    });
  };
  componentWillReceiveProps({ selectedIds, form }) {
    if (this.props.selectedIds !== selectedIds) {
      if (selectedIds.length === 1) {
        // form.resetFields();
      }
    }
  }
  render() {
    const { selectedIds, onClick, form, items, editable, onRemove, onCancel, multi } = this.props;
    return (
      <div style={{ padding: 10 }}>
        <LightboxGallery>
          {items.length > 1 ? (
            <Gallery
              items={items}
              width={60}
              selectedIds={selectedIds}
              onClick={onClick}
              onRemove={onRemove}
              justifyContent="space-around"
            />
          ) : null}
          <Detail form={form} item={items[0]} multi={multi} editable={editable} />
          <div>
            <Button onClick={this.save} type="primary" disabled={!items.length}>
              {items.length > 1 ? 'Alle speichern' : 'Speichern'}
            </Button>
            &nbsp;
            {onCancel && (
              <Button onClick={onCancel} disabled={!items.length}>
                Abbrechen
              </Button>
            )}
          </div>
        </LightboxGallery>
      </div>
    );
  }
}
SelectionSidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  activeItem: PropTypes.shape({
    id: PropTypes.string,
    crop: PropTypes.arrayOf(PropTypes.number),
  }),
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  onCancel: PropTypes.func,
};
SelectionSidebar.defaultProps = {
  items: [],
  activeItem: {},
  onSelect: undefined,
};
export default SelectionSidebar;

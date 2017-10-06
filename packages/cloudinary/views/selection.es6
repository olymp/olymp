import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';
import { withProps, withPropsOnChange } from 'recompose';
import { createComponent } from 'olymp-fela';
import { mutateFile } from '../gql';
import Detail from './detail';
import Gallery from '../components/gallery';
import LightboxGallery from '../lightbox/gallery';

const StyledGallery = createComponent(
  ({ theme }) => ({
    maxHeight: 250,
    overflow: 'auto',
    padding: '.5rem 0',
    borderTop: '1px solid #eee',
  }),
  Gallery,
  p => Object.keys(p),
);

@mutateFile
@Form.create()
@withProps(({ onSelect, items }) => ({
  onSelect: !onSelect,
  multi: items.length > 1,
}))
@withPropsOnChange(['editable', 'items', 'activeId'], ({ editable, items, activeId }) => ({
  selectedIds: editable ? items.map(x => x.id) : [activeId].filter(x => x),
}))
@withPropsOnChange(['editable', 'items', 'activeId'], ({ editable, items, activeId }) => ({
  active: items.find(x => x.id) : [activeId].filter(x => x),
}))
class SelectionSidebar extends Component {
  componentWillReceiveProps({selectedIds, form}){
    if (this.props.selectedIds !== selectedIds) {
      if(selectedIds.length === 1) {
        form.resetFields();
      }
    }
  }
  render() {
    const { selectedIds, onClick, onSelect, items, editable, onRemove, onCancel, multi } = this.props;
    return (
      <div style={{ padding: 10 }}>
        <LightboxGallery>
          {items.length > 1 ? (
            <StyledGallery
              items={items}
              width={60}
              selectedIds={selectedIds}
              onClick={onClick}
              onRemove={onRemove}
              justifyContent="space-around"
            />
          ) : null}
          <Detail
            key={items.length > 1 ? 'multi' : items[0].id}
            item={items[0]}
            multi={multi}
            editable={editable}
          />
          <div>
            {!onSelect ? (
              <Button onClick={this.onSave} type="primary" disabled={!items.length}>
                {items.length > 1 ? 'Alle speichern' : 'Speichern'}
              </Button>
            ) : (
              <Button onClick={() => onSelect(items)} type="primary" disabled={!items.length}>
                Übernehmen
              </Button>
            )}
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

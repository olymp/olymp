import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import Detail from './detail';
import Gallery from '../components/gallery';
import LightboxGallery from '../lightbox-gallery';

@withProps(({ items }) => ({
  multi: items.length > 1,
}))
class SelectionSidebar extends Component {
  render() {
    const {
      onClick,
      items,
      onRemove,
      onCancel,
      onChange,
      multi,
      activeId,
    } = this.props;

    return (
      <div>
        <LightboxGallery>
          {multi && (
            <Gallery
              items={items}
              selectedIds={[activeId]}
              onClick={onClick}
              onRemove={onRemove}
              justifyContent="space-around"
            />
          )}
        </LightboxGallery>

        <Detail
          items={items}
          multi={multi}
          onCancel={onCancel}
          onChange={onChange}
        />
      </div>
    );
  }
}
SelectionSidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  activeId: PropTypes.string,
  multi: PropTypes.bool,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
};
SelectionSidebar.defaultProps = {
  items: [],
  activeId: undefined,
  multi: false,
  onClick: undefined,
  onRemove: undefined,
  onCancel: undefined,
  onChange: undefined,
};
export default SelectionSidebar;

import React from 'react';
import { groupBy } from 'lodash';
import { connect } from 'react-redux';
import { compose, withProps, withPropsOnChange } from 'recompose';
import DetailBrowser from './detail-browser';
import DetailPicker from './detail-picker';
import Gallery from '../components/gallery';
import LightboxGallery from '../lightbox-gallery';

const enhance = compose(
  withProps(({ value }) => ({
    multi: value.length > 1,
  })),
  withPropsOnChange(['value'], ({ value }) => {
    // get tags
    const selectedTags = [];
    value.forEach(item =>
      (item.tags || []).forEach(tag => selectedTags.push(tag)),
    );
    const groupedTags = groupBy(selectedTags);

    return { selectedTags, groupedTags };
  }),
  connect(({ cloudinary }) => ({
    activeId: cloudinary.activeId,
  })),
);

export default enhance(
  ({ form, value, activeId, multi, editable, onClick, onRemove, ...rest }) => {
    const Detail = editable ? DetailBrowser : DetailPicker;
    return (
      <div>
        <LightboxGallery>
          {multi && (
            <Gallery
              items={value}
              selectedIds={[activeId]}
              onClick={onClick}
              onRemove={onRemove}
              justifyContent="space-around"
            />
          )}
        </LightboxGallery>
        {value.map(item => (
          <div
            key={item.id}
            style={{ display: item.id === activeId ? 'block' : 'none' }}
          >
            <Detail
              {...rest}
              form={form}
              id={item.id}
              value={value}
              item={item}
            />
          </div>
        ))}
      </div>
    );
  },
);

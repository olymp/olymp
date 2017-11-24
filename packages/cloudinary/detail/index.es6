import React from 'react';
import { Form } from 'antd';
import { groupBy } from 'lodash';
import { compose, withProps, withPropsOnChange, withState } from 'recompose';
import DetailBrowser from './detail-browser';
import DetailPicker from './detail-picker';
import Gallery from '../components/gallery';
import LightboxGallery from '../lightbox-gallery';

const enhance = compose(
  Form.create(),
  withState('activeId', 'setActive', null),
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
);

export default enhance(
  ({
    form,
    value = [],
    activeId,
    multi,
    editable,
    onClick,
    setActive,
    onRemove,
    ...rest
  }) => {
    const Detail = editable ? DetailBrowser : DetailPicker;
    const active = value.find(x => x.id === activeId) || value[0] || {};
    return (
      <div>
        <LightboxGallery>
          {multi && (
            <Gallery
              items={value}
              selectedIds={[active.id]}
              onClick={({ id }) => setActive(id)}
              onRemove={onRemove}
              justifyContent="space-around"
            />
          )}
        </LightboxGallery>
        {value.map(item => (
          <div
            key={item.id}
            style={{
              display: item.id === active.id ? 'block' : 'none',
            }}
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

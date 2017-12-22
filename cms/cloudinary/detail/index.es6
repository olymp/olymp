import React from 'react';
import { createComponent } from 'olymp-fela';
import { Form } from 'antd';
import { groupBy } from 'lodash';
import { compose, withProps, withPropsOnChange, withState } from 'recompose';
import DetailBrowser from './detail-browser';
import DetailPicker from './detail-picker';
import Gallery from '../components/gallery';
import LightboxGallery from '../lightbox-gallery';

const Container = createComponent(
  ({ collapsed, active }) => ({
    opacity: collapsed ? 0 : 1,
    transition: 'opacity 200ms ease-out',
    display: active ? 'block' : 'none',
  }),
  'div',
);

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
    collapsed,
    editable,
    onClick,
    setActive,
    onRemove,
    ...rest
  }) => {
    const Detail = editable ? DetailBrowser : DetailPicker;
    const active = value.find(x => x.id === activeId) || value[0] || {};

    return (
      <Container collapsed={collapsed} active>
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
          <Container
            key={item.id}
            collapsed={collapsed}
            active={item.id === active.id}
          >
            <Detail
              {...rest}
              form={form}
              id={item.id}
              value={value}
              item={item}
            />
          </Container>
        ))}
      </Container>
    );
  },
);

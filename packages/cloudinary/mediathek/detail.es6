import React from 'react';
import PropTypes from 'prop-types';
import { TagsEditor } from 'olymp-ui';
import { Form, Input, Select, Icon, Tag, Collapse } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import { format } from 'date-fns';
import { compose, withPropsOnChange } from 'recompose';
import { queryTags } from '../gql/query';
import Crop from '../components/crop';
import LightboxImage from '../lightbox-image';
import Gallery from '../components/gallery';
import LightboxGallery from '../lightbox-gallery';

const Spacer = createComponent(
  ({ theme, margin, padding }) => ({
    padding: padding && theme.space1,
    marginY: margin && theme.space3,
  }),
  'div',
  [],
);

const CheckableTag = createComponent(
  ({ theme, checked, marked }) => ({
    marginBottom: theme.space1,
    ellipsis: true,
    ':not(.ant-tag-checkable-checked)': {
      backgroundColor: !checked && marked ? theme.dark2 : theme.dark5,
      color: !checked && marked && theme.light,
    },
  }),
  p => <Tag.CheckableTag {...p} />,
  p => Object.keys(p),
);

const TagContainer = createComponent(
  ({ theme }) => ({
    paddingX: theme.space1,
    marginBottom: theme.space2,
    hasFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  }),
  ({ className, tags, selectedTags, form }) => (
    <div className={className}>
      {[...(tags || [])].sort().map(tag => (
        <CheckableTag
          key={tag}
          checked={(form.getFieldValue('tags') || []).indexOf(tag) !== -1}
          marked={selectedTags.filter(sTag => sTag === tag).length > 0}
          onChange={checked =>
            form.setFieldsValue({
              tags: checked
                ? [...form.getFieldValue('tags'), tag]
                : form.getFieldValue('tags').filter(x => x !== tag),
            })}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  ),
  ['tags', 'selectedTags', 'form'],
);

const FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 4 },
};

const enhance = compose(
  withPropsOnChange(
    ['editable', 'items', 'activeId'],
    ({ editable, items, activeId }) => ({
      selectedIds: editable ? items.map(x => x.id) : [activeId].filter(x => x),
    }),
  ),
  withPropsOnChange(['items'], ({ items }) => {
    // get tags
    const selectedTags = [];
    items.forEach(item => item.tags.forEach(tag => selectedTags.push(tag)));
    const groupedTags = groupBy(selectedTags);

    return { selectedTags, groupedTags };
  }),
);

const MediaDetail = enhance(
  ({
    items,
    multi,
    source,
    tags,
    editable,
    fileTags,
    form,
    children,
    selectedTags,
    groupedTags,
    selectedIds,
    onClick,
    onRemove,
    ...rest
  }) => {
    const item = items[0];
    const app =
      item.publicId && item.publicId.indexOf('/') !== -1
        ? item.publicId.split('/')[0]
        : 'gzk';

    // set id
    form.getFieldDecorator('id', { initialValue: item.id });

    // fields/edits
    const directoryField = (
      <Form.Item label="Ordner" {...FormForFullLayout}>
        {form.getFieldDecorator('folder', {
          initialValue: item.folder,
        })(<Input placeholder="Ordner" />)}
      </Form.Item>
    );
    const sourceField = form.getFieldDecorator('source', {
      initialValue: item.source,
    })(
      <Form.Item label="Quelle" {...FormForFullLayout}>
        <Input placeholder="Quelle" />
      </Form.Item>,
    );
    const stateField = (
      <Form.Item label="Zustand" {...FormForFullLayout}>
        {form.getFieldDecorator('state', {
          initialValue: item.state,
        })(
          <Select style={{ width: '100%' }}>
            <Select.Option value="DRAFT">
              <b style={{ color: 'blue' }}>
                <Icon type="inbox" />
              </b>{' '}
              Ablage
            </Select.Option>
            <Select.Option value="PUBLISHED">
              <b style={{ color: 'green' }}>
                <Icon type="check" />
              </b>{' '}
              Veröffentlicht
            </Select.Option>
            <Select.Option value="REMOVED">
              <b style={{ color: 'red' }}>
                <Icon type="delete" />
              </b>{' '}
              Gelöscht
            </Select.Option>
          </Select>,
        )}
      </Form.Item>
    );
    const tagsField = (
      <Form.Item label="Schlagworte" {...FormForFullLayout}>
        {form.getFieldDecorator('tags', {
          initialValue: Object.keys(groupedTags).filter(
            key => groupedTags[key].length === items.length,
          ),
        })(
          <TagsEditor
            {...rest}
            searchPlaceholder="Suche ..."
            placeholder="Schlagworte"
          />,
        )}
      </Form.Item>
    );
    const tagsContainer = (
      <TagContainer tags={fileTags} selectedTags={selectedTags} form={form} />
    );
    const captionField = (
      <Form.Item key="caption" label="Bezeichnung" {...FormForFullLayout}>
        {form.getFieldDecorator('caption', {
          initialValue: item.caption,
        })(<Input.TextArea rows={3} placeholder="Bezeichnung" />)}
      </Form.Item>
    );
    const cropper = (
      <Form.Item {...FormForFullLayout}>
        {form.getFieldDecorator('crop', {
          initialValue: item.crop,
        })(<Crop url={item.url} height={item.height} width={item.width} />)}
      </Form.Item>
    );

    return (
      <ContentLoader isLoading={!item}>
        <Spacer padding>
          <Form>
            {!multi
              ? editable && (
              <Form.Item {...FormForFullLayout}>
                <LightboxImage value={item} width="100%" maxHeight={200} />
              </Form.Item>
                )
              : editable && (
              <LightboxGallery>
                {items.length > 1 ? (
                  <Gallery
                    items={items}
                    selectedIds={selectedIds}
                    onClick={onClick}
                    onRemove={onRemove}
                    justifyContent="space-around"
                  />
                    ) : null}
              </LightboxGallery>
                )}
            {!editable && cropper}
            {editable && directoryField}
            {sourceField}
            {!multi && captionField}
            {editable && tagsField}
            {editable && stateField}

            <Spacer margin>{children}</Spacer>

            <Collapse defaultActiveKey={[]}>
              {editable && (
                <Collapse.Panel header="Übersicht Schlagworte" key="1">
                  {tagsContainer}
                </Collapse.Panel>
              )}
              {!multi && (
                <Collapse.Panel header="Technische Infos" key="2">
                  <Form.Item
                    key="project"
                    label="Projekt"
                    {...FormForFullLayout}
                  >
                    <Input disabled placeholder="Projekt" value={app} />
                  </Form.Item>
                  <Form.Item key="size" label="Größe" {...FormForFullLayout}>
                    <Input
                      disabled
                      placeholder="Größe"
                      value={`${item.width}x${item.height}`}
                    />
                  </Form.Item>
                  <Form.Item
                    key="date"
                    label="Hinzugefügt"
                    {...FormForFullLayout}
                  >
                    <Input
                      disabled
                      placeholder="Hinzugefügt"
                      value={`${format(
                        item.createdAt,
                        'DD. MMMM YYYY, HH:mm:ss',
                      )} Uhr`}
                    />
                  </Form.Item>
                  <Form.Item key="format" label="Format" {...FormForFullLayout}>
                    <Input disabled placeholder="Format" value={item.format} />
                  </Form.Item>
                  {item.format === 'pdf' ? (
                    <Form.Item
                      key="pages"
                      label="Seiten"
                      {...FormForFullLayout}
                    >
                      <Input disabled placeholder="Seiten" value={item.pages} />
                    </Form.Item>
                  ) : (
                    undefined
                  )}
                  <Form.Item
                    key="bytes"
                    label="Dateigröße"
                    {...FormForFullLayout}
                  >
                    <Input
                      disabled
                      placeholder="Dateigröße"
                      value={`${item.bytes / 1000} kB`}
                    />
                  </Form.Item>
                </Collapse.Panel>
              )}
              <Collapse.Panel header="Hilfe" key="3">
                <p>
                  In der Mediathek können Bilder und PDF-Dateien verwaltet
                  werden.
                </p>
                <p>
                  Über den Button Medien hinzufügen können eine oder auch
                  mehrere Dateien hochgeladen werden. Alternativ können die
                  gewünschten Dateien auch einfach per Drag & Drop in den
                  rechten Bereich gezogen werden.
                </p>
                <p>
                  Per Mausklick kann die gewünschte Datei ausgewählt werden um
                  Bezeichnung, Schlagwörter oder anderes zu bearbeiten.
                </p>
                <p>
                  Mit SHIFT + Mausklick können auch mehrere Bilder zum
                  gleichzeitigen Bearbeiten ausgewählt werden.
                </p>
              </Collapse.Panel>
            </Collapse>
          </Form>
        </Spacer>
      </ContentLoader>
    );
  },
);
MediaDetail.propTypes = {
  items: PropTypes.array.isRequired,
  patchItem: PropTypes.func,
  patchItems: PropTypes.func,
  multi: PropTypes.bool,
  source: PropTypes.bool,
  tags: PropTypes.bool,
  editable: PropTypes.bool,
};
MediaDetail.defaultProps = {
  patchItem: () => {},
  patchItems: () => {},
  multi: false,
  source: false,
  tags: false,
  editable: true,
};
export default connect(({ cloudinary }) => ({
  folder: cloudinary.folder,
}))(queryTags(MediaDetail));

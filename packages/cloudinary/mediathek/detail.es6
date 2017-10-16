import React from 'react';
import PropTypes from 'prop-types';
import { TagsEditor } from 'olymp-ui';
import { Form, Input, Select, Icon, Tag } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import { queryTags } from '../gql/query';
import Crop from '../components/crop';
import LightboxImage from '../lightbox-image';

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
      {(tags || []).map(tag => (
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

const FormItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  style: { marginBottom: 4 },
};

const FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 4 },
};

const MediaDetail = ({
  items,
  multi,
  source,
  tags,
  editable,
  fileTags,
  form,
  children,
  ...rest
}) => {
  if (!editable) {
    form.getFieldDecorator('id', { initialValue: items[0].id });

    return (
      <ContentLoader isLoading={!items[0]}>
        <Form>
          <Form.Item {...FormForFullLayout}>
            {form.getFieldDecorator('crop', {
              initialValue: items[0].crop,
            })(
              <Crop
                url={items[0].url}
                height={items[0].height}
                width={items[0].width}
              />,
            )}
          </Form.Item>
          {children}
        </Form>
      </ContentLoader>
    );
  } else if (multi) {
    const selectedTags = [];
    items.forEach(item => item.tags.forEach(tag => selectedTags.push(tag)));
    const groupedTags = groupBy(selectedTags);

    return (
      <ContentLoader isLoading={!items[0]}>
        <Form>
          <Form.Item label="Ordner" {...FormItemLayout}>
            {form.getFieldDecorator('folder', {
              initialValue: items[0].folder,
            })(<Input disabled={!editable} placeholder="Ordner" />)}
          </Form.Item>
          <Form.Item label="Bezeichnung" {...FormItemLayout}>
            {form.getFieldDecorator('caption', {
              initialValue: items[0].caption,
            })(
              <Input.TextArea
                rows={3}
                disabled={!editable}
                placeholder="Bezeichnung"
              />,
            )}
          </Form.Item>
          {form.getFieldDecorator('source', {
            initialValue: items[0].source,
          })(
            <Form.Item label="Quelle" {...FormItemLayout}>
              <Input
                placeholder="Quelle"
                disabled={(source && multi) || !editable}
              />
            </Form.Item>,
          )}
          <Form.Item label="Zustand" {...FormItemLayout}>
            {form.getFieldDecorator('state', {
              initialValue: items[0].state,
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
          <Form.Item label="Schlagworte" {...FormItemLayout}>
            {form.getFieldDecorator('tags', {
              initialValue: Object.keys(groupedTags).filter(
                key => groupedTags[key].length === items.length,
              ),
            })(
              <TagsEditor
                {...rest}
                disabled={(tags && multi) || !editable}
                searchPlaceholder="Suche ..."
                placeholder="Schlagworte"
                style={{ display: 'none' }}
              />,
            )}
          </Form.Item>
          <TagContainer
            tags={fileTags}
            selectedTags={selectedTags}
            form={form}
          />
          {children}
        </Form>
      </ContentLoader>
    );
  }

  form.getFieldDecorator('id', { initialValue: items[0].id });

  return (
    <ContentLoader isLoading={!items[0]}>
      <Form>
        <Form.Item {...FormForFullLayout}>
          <LightboxImage value={items[0]} width="100%" maxHeight={200} />
        </Form.Item>
        <Form.Item label="Ordner" {...FormForFullLayout}>
          {form.getFieldDecorator('folder', {
            initialValue: items[0].folder,
          })(<Input disabled={!editable} placeholder="Ordner" />)}
        </Form.Item>
        <Form.Item key="source" label="Quelle" {...FormForFullLayout}>
          {form.getFieldDecorator('source', {
            initialValue: items[0].source,
          })(
            <Input
              placeholder="Quelle"
              disabled={(source && multi) || !editable}
            />,
          )}
        </Form.Item>
        <Form.Item key="caption" label="Bezeichnung" {...FormForFullLayout}>
          {form.getFieldDecorator('caption', {
            initialValue: items[0].caption,
          })(
            <Input.TextArea
              rows={3}
              disabled={!editable}
              placeholder="Bezeichnung"
            />,
          )}
        </Form.Item>
        <Form.Item key="tags" label="Schlagworte" {...FormForFullLayout}>
          {form.getFieldDecorator('tags', {
            initialValue: items[0].tags,
          })(
            <TagsEditor
              {...rest}
              disabled={(tags && multi) || !editable}
              searchPlaceholder="Suche ..."
              placeholder="Schlagworte"
              style={{ width: '100%', display: 'none' }}
            />,
          )}
        </Form.Item>
        <TagContainer tags={fileTags} selectedTags={[]} form={form} />
        {/* <Form.Item key="tecnical" {...FormForFullLayout}>
          <Collapse bordered={false} defaultActiveKey={[]}>
            <Collapse.Panel header="Technische Infos" key="1">
              <Form.Item key="size" label="Größe" {...FormItemLayout}>
                <Input disabled placeholder="Größe" value={`${items[0].width}x${items[0].height}`} />
              </Form.Item>
              <Form.Item key="date" label="Hinzugefügt" {...FormItemLayout}>
                <Input
                  disabled
                  placeholder="Hinzugefügt"
                  value={`${format(items[0].createdAt, 'DD. MMMM YYYY, HH:mm:ss')} Uhr`}
                />
              </Form.Item>
              <Form.Item key="format" label="Format" {...FormItemLayout}>
                <Input disabled placeholder="Format" value={items[0].format} />
              </Form.Item>
              {items[0].format === 'pdf' ? (
                <Form.Item key="pages" label="Seiten" {...FormItemLayout}>
                  <Input disabled placeholder="Seiten" value={items[0].pages} />
                </Form.Item>
          ) : (
            undefined
          )}
              <Form.Item key="bytes" label="Dateigröße" {...FormItemLayout}>
                <Input disabled placeholder="Dateigröße" value={`${items[0].bytes / 1000} kB`} />
              </Form.Item>
            </Collapse.Panel>
          </Collapse>
        </Form.Item> */}
        {children}
      </Form>
    </ContentLoader>
  );
};
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

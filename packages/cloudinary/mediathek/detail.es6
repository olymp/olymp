import React from 'react';
import PropTypes from 'prop-types';
import { TagsEditor } from 'olymp-ui';
import { Form, Input, Select, Icon, Collapse, Tag } from 'antd';
import { format } from 'date-fns';
import { ContentLoader } from 'olymp-fela';
import { connect } from 'react-redux';
import { queryTags } from '../gql/query';
import Crop from '../components/crop';
import LightboxImage from '../lightbox-image';

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
  item,
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
    form.getFieldDecorator('id', { initialValue: item.id });
    return (
      <ContentLoader isLoading={!item}>
        <Form>
          <Form.Item {...FormForFullLayout}>
            {form.getFieldDecorator('crop', {
              initialValue: item.crop,
            })(<Crop url={item.url} height={item.height} width={item.width} />)}
          </Form.Item>
          {children}
        </Form>
      </ContentLoader>
    );
  } else if (multi) {
    return (
      <ContentLoader isLoading={!item}>
        <Form>
          <Form.Item label="Ordner" {...FormItemLayout}>
            {form.getFieldDecorator('folder', {
              initialValue: item.folder,
            })(<Input disabled={!editable} placeholder="Ordner" />)}
          </Form.Item>
          <Form.Item label="Bezeichnung" {...FormItemLayout}>
            {form.getFieldDecorator('caption', {
              initialValue: item.caption,
            })(
              <Input.TextArea
                rows={3}
                disabled={!editable}
                placeholder="Bezeichnung"
              />,
            )}
          </Form.Item>
          {form.getFieldDecorator('source', {
            initialValue: item.source,
          })(
            <Form.Item label="Quelle" {...FormItemLayout}>
              <Input
                placeholder="Quelle"
                disabled={(source && multi) || !editable}
              />
            </Form.Item>,
          )}
          <Form.Item label="Schlagworte" {...FormItemLayout}>
            {form.getFieldDecorator('tags', {
              initialValue: item.tags,
            })(
              <TagsEditor
                {...rest}
                disabled={(tags && multi) || !editable}
                searchPlaceholder="Suche ..."
                placeholder="Schlagworte"
                style={{ width: '100%' }}
              />,
            )}
          </Form.Item>
          <Form.Item label="Zustand" {...FormItemLayout}>
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
          {children}
        </Form>
      </ContentLoader>
    );
  }
  form.getFieldDecorator('id', { initialValue: item.id });
  return (
    <ContentLoader isLoading={!item}>
      <Form>
        <Form.Item {...FormForFullLayout}>
          <LightboxImage value={item} width="100%" maxHeight={200} />
        </Form.Item>
        <Form.Item label="Ordner" {...FormForFullLayout}>
          {form.getFieldDecorator('folder', {
            initialValue: item.folder,
          })(<Input disabled={!editable} placeholder="Ordner" />)}
        </Form.Item>
        <Form.Item key="source" label="Quelle" {...FormForFullLayout}>
          {form.getFieldDecorator('source', {
            initialValue: item.source,
          })(
            <Input
              placeholder="Quelle"
              disabled={(source && multi) || !editable}
            />,
          )}
        </Form.Item>
        <Form.Item key="caption" label="Bezeichnung" {...FormForFullLayout}>
          {form.getFieldDecorator('caption', {
            initialValue: item.caption,
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
            initialValue: item.tags,
          })(
            <TagsEditor
              {...rest}
              disabled={(tags && multi) || !editable}
              searchPlaceholder="Suche ..."
              placeholder="Schlagworte"
              style={{ width: '100%' }}
            />,
          )}
        </Form.Item>
        {fileTags.map(tag => (
          <Tag.CheckableTag
            key={tag}
            checked={(form.getFieldValue('tags') || []).indexOf(tag) !== -1}
            onChange={checked =>
              form.setFieldsValue({
                tags: checked
                  ? [...form.getFieldValue('tags'), tag]
                  : form.getFieldValue('tags').filter(x => x !== tag),
              })}
          >
            {tag}
          </Tag.CheckableTag>
        ))}
        {/* <Form.Item key="tecnical" {...FormForFullLayout}>
          <Collapse bordered={false} defaultActiveKey={[]}>
            <Collapse.Panel header="Technische Infos" key="1">
              <Form.Item key="size" label="Größe" {...FormItemLayout}>
                <Input disabled placeholder="Größe" value={`${item.width}x${item.height}`} />
              </Form.Item>
              <Form.Item key="date" label="Hinzugefügt" {...FormItemLayout}>
                <Input
                  disabled
                  placeholder="Hinzugefügt"
                  value={`${format(item.createdAt, 'DD. MMMM YYYY, HH:mm:ss')} Uhr`}
                />
              </Form.Item>
              <Form.Item key="format" label="Format" {...FormItemLayout}>
                <Input disabled placeholder="Format" value={item.format} />
              </Form.Item>
              {item.format === 'pdf' ? (
                <Form.Item key="pages" label="Seiten" {...FormItemLayout}>
                  <Input disabled placeholder="Seiten" value={item.pages} />
                </Form.Item>
          ) : (
            undefined
          )}
              <Form.Item key="bytes" label="Dateigröße" {...FormItemLayout}>
                <Input disabled placeholder="Dateigröße" value={`${item.bytes / 1000} kB`} />
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
  item: PropTypes.object,
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

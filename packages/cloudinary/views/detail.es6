import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TagsEditor } from 'olymp-ui';
import { Form, Input } from 'antd';
import { format } from 'date-fns';
import { createComponent, ContentLoader } from 'olymp-fela';
import { Crop } from '../components';
import { LightboxImage } from '../lightbox';

const FormItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  style: { marginBottom: 5 },
};
const FormForAllLayout = {
  wrapperCol: { span: 16, offset: 8 },
  style: { marginBottom: 5 },
};

const FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 5 },
};

@Form.create()
class MediaDetail extends Component {
  render() {
    const {
      item,
      patchItem,
      patchItems,
      multi,
      source,
      tags,
      editable,
      form,
      ...rest
    } = this.props;
    if (!editable) {
      form.getFieldDecorator('id', { initialValue: item.id });
      return (
        <ContentLoader isLoading={!item}>
          <Form>
            <Form.Item key="crop" {...FormForFullLayout}>
              <Crop value={item} onChange={crop => patchItem({ crop })} />
            </Form.Item>
          </Form>
        </ContentLoader>
      );
    } else if (multi) {
      return (
        <ContentLoader isLoading={!item}>
          <Form>
            <Form.Item key="caption" label="Bezeichnung" {...FormItemLayout}>
              <Input
                value={item.caption}
                onChange={event => patchItem({ caption: event.target.value })}
                disabled={!editable}
                placeholder="Bezeichnung"
              />
            </Form.Item>
            <Form.Item key="source" label="Quelle" {...FormItemLayout}>
              <Input
                value={item.source}
                onChange={event => patchItem({ source: event.target.value })}
                placeholder="Quelle"
                disabled={(source && multi) || !editable}
              />
            </Form.Item>
            <Form.Item key="tags" label="Schlagworte" {...FormItemLayout}>
              <TagsEditor
                {...rest}
                value={item.tags || []}
                onChange={val => patchItem({ tags: val })}
                disabled={(tags && multi) || !editable}
                searchPlaceholder="Suche ..."
                placeholder="Schlagworte"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Form>
        </ContentLoader>
      );
    }
    form.getFieldDecorator('id', { initialValue: item.id });
    return (
      <ContentLoader isLoading={!item}>
        <Form>
          <Form.Item key="crop" {...FormForFullLayout}>
            <LightboxImage value={item} width="100%" maxHeight={200} />
          </Form.Item>
          <Form.Item key="caption" label="Bezeichnung" {...FormItemLayout}>
            <Input
              value={item.caption}
              onChange={event => patchItem({ caption: event.target.value })}
              disabled={!editable}
              placeholder="Bezeichnung"
            />
          </Form.Item>
          <Form.Item key="source" label="Quelle" {...FormItemLayout}>
            <Input
              value={item.source}
              onChange={event => patchItem({ source: event.target.value })}
              placeholder="Quelle"
              disabled={(source && multi) || !editable}
            />
          </Form.Item>
          <Form.Item key="tags" label="Schlagworte" {...FormItemLayout}>
            <TagsEditor
              {...rest}
              value={item.tags || []}
              onChange={val => patchItem({ tags: val })}
              disabled={(tags && multi) || !editable}
              searchPlaceholder="Suche ..."
              placeholder="Schlagworte"
              style={{ width: '100%' }}
            />
          </Form.Item>
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
        </Form>
      </ContentLoader>
    );
  }
}
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
export default MediaDetail;

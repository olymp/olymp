import React, { PropTypes } from 'react';
import { TagsEditor } from 'olymp-ui';
import { Form, Input, Spin, Checkbox, Popconfirm } from 'antd';
import moment from 'moment';
import { Crop } from '../components';
import { LightboxImage } from '../lightbox';
import { createComponent } from 'olymp-fela';

const DangerCheckbox = createComponent(({ theme, checked }) => ({
  color: checked ? 'red' : 'rgba(0, 0, 0, .65)',
}), Checkbox, p => Object.keys(p));

const FormItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { marginBottom: 0 } };
const FormForAllLayout = { wrapperCol: { span: 16, offset: 8 }, style: { marginBottom: 0 } };

const MediaDetail = ({ item, patchItem, patchItems, multi, source, tags, editable, ...rest }) => !item ? (
  <Spin size="large" />
) : (
  <div>
    <div style={{ marginBottom: '1rem' }}>
      {!editable ? (
        <Crop url={item.url} width={item.width} height={item.height} crop={item.crop} onChange={crop => patchItem({ crop })} />
      ) : (
        <LightboxImage value={item} mode="fill" width={350} style={{ maxWidth: '100%' }} retina />
      )}
    </div>

    <Form.Item key="id" label="ID" {...FormItemLayout}>
      <Input value={item.id} disabled placeholder="ID" />
    </Form.Item>
    <Form.Item key="caption" label="Bezeichnung" {...FormItemLayout}>
      <Input value={item.caption} onChange={event => patchItem({ caption: event.target.value })} disabled={!editable} placeholder="Bezeichnung" />
    </Form.Item>

    <Form.Item key="source" label="Quelle" {...FormItemLayout}>
      <Input
        value={item.source}
        onChange={event => patchItem({ source: event.target.value })}
        placeholder="Quelle"
        disabled={(source && multi) || !editable}
      />
    </Form.Item>
    {multi && editable ? (
      <Form.Item key="sourceForAll" {...FormForAllLayout}>
        {!source ? (
          <Popconfirm title="'Quelle' für alle ausgewählten Medien überschreiben?" onConfirm={() => patchItems('source', item.source)} okText="Ja" cancelText="Abbrechen">
            <Checkbox checked={source}>Für alle Ausgewählten</Checkbox>
          </Popconfirm>
        ) : (
          <Checkbox checked={source} onChange={() => patchItems('source', item.source)}>Für alle Ausgewählten</Checkbox>
        )}
      </Form.Item>
    ) : null}

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
    {multi && editable ? (
      <Form.Item key="tagsForAll" {...FormForAllLayout}>
        {!tags ? (
          <Popconfirm title="'Schlagworte' für alle ausgewählten Medien überschreiben?" onConfirm={() => patchItems('tags', item.tags)} okText="Ja" cancelText="Abbrechen">
            <Checkbox checked={tags}>Für alle Ausgewählten</Checkbox>
          </Popconfirm>
        ) : (
          <Checkbox checked={tags} onChange={() => patchItems('tags', item.tags)}>Für alle Ausgewählte</Checkbox>
        )}
      </Form.Item>
    ) : null}

    <Form.Item key="size" label="Größe" {...FormItemLayout}>
      <Input disabled placeholder="Größe" value={`${item.width}x${item.height}`} />
    </Form.Item>
    <Form.Item key="date" label="Hinzugefügt" {...FormItemLayout}>
      <Input disabled placeholder="Hinzugefügt" value={`${moment(item.createdAt).format('DD. MMMM YYYY, HH:mm:ss')} Uhr`} />
    </Form.Item>
    <Form.Item key="format" label="Format" {...FormItemLayout}>
      <Input disabled placeholder="Format" value={item.format} />
    </Form.Item>
    { item.format === 'pdf' ? (
      <Form.Item key="pages" label="Seiten" {...FormItemLayout}>
        <Input disabled placeholder="Seiten" value={item.pages} />
      </Form.Item>
    ) : undefined }
    <Form.Item key="bytes" label="Dateigröße" {...FormItemLayout}>
      <Input disabled placeholder="Dateigröße" value={`${item.bytes / 1000} kB`} />
    </Form.Item>
    {!multi && editable ? (
      <Form.Item key="delete" label="Löschen" {...FormItemLayout}>
        {!item.removed ? (
          <Popconfirm title="Datei wirklich löschen?" onConfirm={() => patchItem({ removed: true })} okText="Löschen" cancelText="Abbrechen">
            <DangerCheckbox checked={false}>Datei wird nicht gelöscht</DangerCheckbox>
          </Popconfirm>
        ) : (
          <DangerCheckbox onChange={() => patchItem({ removed: null })} checked>Datei wird gelöscht</DangerCheckbox>
        )}
      </Form.Item>
    ) : null}
    {multi && editable ? (
      <Form.Item key="deleteAll" label="Alle löschen" {...FormItemLayout}>
        {!item.removed ? (
          <Popconfirm title="Alle ausgewählten Dateien wirklich löschen?" onConfirm={() => patchItems('removed', true)} okText="Alle löschen" cancelText="Abbrechen">
            <DangerCheckbox checked={false}>Dateien werden nicht gelöscht</DangerCheckbox>
          </Popconfirm>
        ) : (
          <DangerCheckbox onChange={() => patchItems('removed', null)} checked>Dateien werden gelöscht</DangerCheckbox>
        )}
      </Form.Item>
    ) : null}
  </div>
);
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TagsEditor } from 'olymp-ui';
import {
  Form,
  Input,
  Select,
  Icon,
  Tag,
  Collapse,
  Button as AntButton,
} from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { groupBy } from 'lodash';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import { compose, withProps, withPropsOnChange, toClass } from 'recompose';
import { mutateFile, queryTags } from '../gql';
import Crop from '../components/crop';
import LightboxImage from '../lightbox-image';

const Button = createComponent(
  ({ theme }) => ({
    marginY: theme.space3,
    marginRight: theme.space1,
  }),
  p => <AntButton {...p} />,
  p => Object.keys(p),
);

const StyledForm = createComponent(
  ({ theme }) => ({
    padding: theme.space1,
  }),
  p => <Form {...p} />,
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

const TagContainer = queryTags(
  createComponent(
    ({ theme }) => ({
      paddingX: theme.space1,
      marginBottom: theme.space2,
      hasFlex: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
    }),
    ({ className, fileTags, selectedTags, form }) => (
      <div className={className}>
        {[...(fileTags || [])].sort().map(tag => (
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
    ['fileTags', 'selectedTags', 'form'],
  ),
);

const FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 4 },
};

const enhance = compose(
  withProps(({ onChange }) => ({
    editable: !onChange,
  })),
  withPropsOnChange(['items'], ({ items }) => {
    // get tags
    const selectedTags = [];
    items.forEach(item =>
      (item.tags || []).forEach(tag => selectedTags.push(tag)),
    );
    const groupedTags = groupBy(selectedTags);

    return { selectedTags, groupedTags };
  }),
  connect(({ cloudinary }) => ({
    activeId: cloudinary.activeId,
  })),
);

@mutateFile
@Form.create()
@enhance
class MediaDetail extends Component {
  save = () => {
    const { form, items, multi, save, onChange } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return console.error(err);
      }
      if (onChange) {
        if (values.crop && items.length) {
          items[0].crop = values.crop;
        }
        return multi ? onChange([items]) : onChange(items);
      }
      let promise;
      if (multi) {
        const changed = Object.keys(values).reduce((state, key) => {
          if (form.isFieldTouched(key) && key !== 'id') {
            state[key] = values[key];
          }
          return state;
        }, {});
        promise = Promise.all(
          items.map(item => save({ id: item.id, ...changed })),
        ).then(x => form.resetFields());
      } else {
        promise = save(values).then(x => form.resetFields());
      }
    });
  };

  render() {
    const {
      form,
      items,
      activeId,
      multi,
      editable,
      selectedTags,
      groupedTags,
      onCancel,
      ...rest
    } = this.props;
    const item = items.find(i => i.id === activeId) || items[0];
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
      <TagContainer selectedTags={selectedTags} form={form} />
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
        <StyledForm>
          {!multi &&
            editable && (
              <Form.Item {...FormForFullLayout}>
                <LightboxImage value={item} width="100%" maxHeight={200} />
              </Form.Item>
            )}
          {!editable && cropper}
          {editable && directoryField}
          {sourceField}
          {!multi && captionField}
          {editable && tagsField}
          {editable && stateField}

          {editable ? (
            <Button onClick={this.save} type="primary" disabled={!items.length}>
              {items.length > 1 ? 'Alle speichern' : 'Speichern'}
            </Button>
          ) : (
            <Button onClick={this.save} type="primary" disabled={!items.length}>
              Einfügen
            </Button>
          )}
          {onCancel && (
            <Button onClick={onCancel} disabled={!onCancel}>
              Abbrechen
            </Button>
          )}

          <Collapse defaultActiveKey={[]}>
            {editable && (
              <Collapse.Panel header="Übersicht Schlagworte" key="1">
                {tagsContainer}
              </Collapse.Panel>
            )}
            {!multi && (
              <Collapse.Panel header="Technische Infos" key="2">
                <Form.Item key="project" label="Projekt" {...FormForFullLayout}>
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
                  <Form.Item key="pages" label="Seiten" {...FormForFullLayout}>
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
                In der Mediathek können Bilder und PDF-Dateien verwaltet werden.
              </p>
              <p>
                Über den Button Medien hinzufügen können eine oder auch mehrere
                Dateien hochgeladen werden. Alternativ können die gewünschten
                Dateien auch einfach per Drag & Drop in den rechten Bereich
                gezogen werden.
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
        </StyledForm>
      </ContentLoader>
    );
  }
}
MediaDetail.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeId: PropTypes.string,
  selectedTags: PropTypes.arrayOf(PropTypes.string),
  groupedTags: PropTypes.object,
  multi: PropTypes.bool,
  editable: PropTypes.bool,
  onCancel: PropTypes.func,
};
MediaDetail.defaultProps = {
  activeId: undefined,
  selectedTags: [],
  groupedTags: {},
  multi: false,
  editable: true,
  onCancel: undefined,
};
export default MediaDetail;

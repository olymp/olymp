import React from 'react';
import { Checkbox, Form, Input, Tag } from 'antd';
import { TagsEditor } from 'olymp-ui';
import { createComponent } from 'react-fela';
import Menu from 'olymp-fela/menu';
import getImageInfo from './info';
import { FormForFullLayout } from './utils';
import { queryTags } from '../gql';
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
  ({ marked, ...p }) => Object.keys(p),
);

const CheckboxMargin = createComponent(
  () => ({
    marginY: 10,
  }),
  p => <Checkbox {...p} />,
  p => Object.keys(p),
);

const TagContainer = queryTags(
  createComponent(
    ({ theme }) => ({
      padding: theme.space2,
      hasFlex: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
    }),
    ({ className, fileTags = [], selectedTags, form }) => (
      <div className={className}>
        {[...fileTags].sort().map(tag => (
          <CheckableTag
            key={tag}
            checked={(form.getFieldValue('tags') || []).indexOf(tag) !== -1}
            marked={selectedTags.filter(sTag => sTag === tag).length > 0}
            onChange={checked =>
              form.setFieldsValue({
                tags: checked
                  ? [...form.getFieldValue('tags'), tag]
                  : form.getFieldValue('tags').filter(x => x !== tag),
              })
            }
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    ),
    ['fileTags', 'selectedTags', 'form'],
  ),
);

export default ({ multi, item, form, groupedTags, value, selectedTags }) => {
  form.getFieldDecorator(`${item.id}.id`, { initialValue: item.id });
  return (
    <Form>
      {value.length === 1 && (
        <Form.Item {...FormForFullLayout}>
          <LightboxImage value={item} width="100%" maxHeight={200} />
        </Form.Item>
      )}

      <Menu.List title="Bild">
        <Form.Item label="Ordner" {...FormForFullLayout}>
          {form.getFieldDecorator(`${item.id}.folder`, {
            initialValue: item.folder,
          })(<Input placeholder="Ordner" />)}
        </Form.Item>
        {
          <Form.Item label="Quelle" {...FormForFullLayout}>
            {form.getFieldDecorator(`${item.id}.source`, {
              initialValue: item.source,
            })(<Input placeholder="Quelle" />)}
          </Form.Item>
        }
        <Form.Item key="caption" label="Bezeichnung" {...FormForFullLayout}>
          {form.getFieldDecorator(`${item.id}.caption`, {
            initialValue: item.caption,
          })(<Input.TextArea rows={3} placeholder="Bezeichnung" />)}
        </Form.Item>
        <Form.Item label="Schlagworte" {...FormForFullLayout}>
          {form.getFieldDecorator(`${item.id}.tags`, {
            initialValue: Object.keys(groupedTags).filter(
              key => groupedTags[key].length === value.length,
            ),
          })(
            <TagsEditor
              searchPlaceholder="Suche ..."
              placeholder="Schlagworte"
            />,
          )}
        </Form.Item>
        {form.getFieldDecorator(`${item.id}.removed`, {
          initialValue: item.removed,
          valuePropName: 'checked',
        })(<CheckboxMargin>Im Papierkorb</CheckboxMargin>)}
      </Menu.List>

      <Menu.List title="Tagcloud">
        <TagContainer selectedTags={selectedTags} form={form} />
      </Menu.List>
      {!multi && getImageInfo(item)}
    </Form>
  );
};

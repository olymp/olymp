import React from 'react';
import { withPropsOnChange, compose } from 'recompose';
import { Button } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { withItem } from '../decorators';
import { DetailForm } from '../components';

const excludedFields = [
  'id',
  'createdBy',
  'createdAt',
  'updatedBy',
  'updatedAt',
  'updatedById',
  'createdById',
];

const getFormSchema = (fields) => {
  const mappedFields = fields.reduce(
    (result, field) => {
      const label = !!field['@'] && !!field['@'].label && field['@'].label.arg0;
      // EXCLUDING
      if (excludedFields.includes(field.name) || field['@'].disabled) {
        return result;
      }

      // RELATION
      if (field.name.endsWith('Id') || field.name.endsWith('Ids')) {
        if (field.name.endsWith('Id')) {
          field['@'].idField = fields.find(({ name }) => `${name}Id` === field.name);
        } else if (field.name.endsWith('Ids')) {
          field['@'].idField = fields.find(({ name }) => `${name}Ids` === field.name);
        }
        result.rest.splice(
          result.rest.findIndex(({ name }) => name === field['@'].idField.name),
          1,
        );
      }

      // RANGE
      if (field['@'].end) {
        return result;
      }
      if (field['@'].start) {
        const end = fields.find(x => x['@'].end);
        field['@'].endField = end;
      }

      if (field.type.name === 'Image') {
        result.images.push(field);
      } else if (field.type.name === 'Blocks') {
        result.blocks.push(field);
      } else {
        result.rest.push(field);
      }
      return result;
    },
    { images: [], rest: [], blocks: [] },
  );
  return mappedFields;
};

const Flex = createComponent(
  ({ theme }) => ({
    width: '100%',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
    },
    '> ul': {
      zIndex: 1,
      marginBottom: 20,
    },
    '> form': {
      overflow: 'auto',
    },
  }),
  'div',
  [],
);

const enhance = compose(
  withItem,
  withPropsOnChange(['collection'], ({ collection }) => {
    const schema = getFormSchema(collection.fields);
    return {
      schema,
    };
  }),
);

const CollectionDetail = enhance(({ id, item, schema, onSave, onClone, form, ...rest }) => (
  <ContentLoader isLoading={id && !item}>
    <DetailForm {...rest} id={id} form={form} item={item || {}} schema={schema} onCreate={onSave}>
      <Button onClick={onSave} icon="save" type="primary">
        Speichern
      </Button>
      <Button onClick={onClone} icon="copy">
        Klonen
      </Button>
    </DetailForm>
  </ContentLoader>
));

CollectionDetail.displayName = 'CollectionDetail';
export default CollectionDetail;

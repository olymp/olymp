import { get } from 'lodash';

const excludedFields = [
  'id',
  'createdBy',
  'createdAt',
  'updatedBy',
  'updatedAt',
  'updatedById',
  'createdById',
];

export default fields => {
  const mappedFields = fields.reduce(
    (result, f) => {
      const field = { ...f };

      // EXCLUDING
      if (excludedFields.includes(field.name) || field.specialFields.disabled) {
        return result;
      }

      // RELATION
      // todo => get-special-Fields
      if (field.name.endsWith('Id') || field.name.endsWith('Ids')) {
        if (field.name.endsWith('Id')) {
          field.specialFields.idField = fields.find(
            ({ name }) => `${name}Id` === field.name,
          );
        } else if (field.name.endsWith('Ids')) {
          field.specialFields.idField = fields.find(
            ({ name }) => `${name}Ids` === field.name,
          );
        }

        field.specialFields = {
          ...field.specialFields,
          ...get(field, 'specialFields.idField.specialFields', {}),
        };

        result.rest.splice(
          result.rest.findIndex(
            ({ name }) => name === get(field, 'specialFields.idField.name'),
          ),
          1,
        );
      }

      // RANGE
      // todo => get-special-Fields
      if (field.specialFields.end) {
        return result;
      }
      if (field.specialFields.start) {
        const end = fields.find(x => x.specialFields.end);
        field.specialFields.endField = end;
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
  return [...mappedFields.images, ...mappedFields.blocks, ...mappedFields.rest];
};

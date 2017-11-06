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
    (result, field) => {
      // const label = !!field['@'] && !!field['@'].label && field['@'].label.arg0;
      // EXCLUDING
      if (excludedFields.includes(field.name) || field['@'].disabled) {
        return result;
      }

      field.innerType = field.type.ofType || field.type;

      // RELATION
      if (field.name.endsWith('Id') || field.name.endsWith('Ids')) {
        if (field.name.endsWith('Id')) {
          field['@'].idField = fields.find(
            ({ name }) => `${name}Id` === field.name,
          );
        } else if (field.name.endsWith('Ids')) {
          field['@'].idField = fields.find(
            ({ name }) => `${name}Ids` === field.name,
          );
        }

        if (field['@'].idField) {
          field['@'] = { ...field['@'], ...field['@'].idField['@'] };
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
  return [...mappedFields.images, ...mappedFields.blocks, ...mappedFields.rest];
};

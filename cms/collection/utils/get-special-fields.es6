import { get } from 'lodash';

const getSpecialFields = description => {
  const specialFields = {};

  (description || '').replace(/\@\w+(\[[0-9]+\])?(\(.+\))?/gi, match => {
    if (!match) return {};
    let [name, value = ''] = match.split('(');
    name = name.substr(1); // delete '@'
    value = value // delete ')' and '"'
      .substr(0, value.length - 1)
      .split('"')
      .filter(x => x)
      .join(', ');

    specialFields[name] = value || true;
  });

  return specialFields;
};

const getSpecialFieldsFromType = t => {
  if (!t) return;

  const type = { ...t };

  // get specialFields
  type.specialFields = getSpecialFields(type.description);
  delete type.description;

  // set enum-labels
  if (type.kind === 'ENUM' && type.enumValues) {
    type.enumValues = type.enumValues.map(e => ({
      ...e,
      label: type.specialFields[e.name] || e.name,
    }));
  }

  return type;
};

const getSpecialFieldsFromField = f => {
  if (!f) return;

  const field = { ...f };

  // get specialFields
  field.specialFields = getSpecialFields(field.description);
  delete field.description;

  field.type = getSpecialFieldsFromType(field.type);
  field.type.ofType = getSpecialFieldsFromType(get(field, 'type.ofType'));
  field.innerType = field.type.ofType || field.type;
  field.specialFields = {
    ...field.specialFields,
    ...field.innerType.specialFields,
  };

  // set label
  if (!field.specialFields.label) {
    field.specialFields.label = field.name || '';
  }

  return field;
};

const getSpecialFieldsFromCollection = c => {
  if (!c) return;

  const collection = { ...c };

  // get specialFields
  collection.specialFields = getSpecialFields(collection.description);
  delete collection.description;

  if (collection.fields) {
    collection.fields = collection.fields.map(x =>
      getSpecialFieldsFromField(x),
    );
    collection.fields.forEach(f => {
      const reqFields = ['name'];
      reqFields.forEach(x => {
        if (
          f.specialFields[x] ||
          (f.name === x && !collection.specialFields[`${x}Field`])
        ) {
          collection.specialFields[`${x}Field`] = f.name;
        }
      });

      const fields = [
        'description',
        'color',
        'image',
        'start',
        'end',
        'allDay',
      ];
      fields.forEach(x => {
        if (f.specialFields[x]) {
          collection.specialFields[`${x}Field`] = f.name;
        }
      });
    });
  }

  return collection;
};
export default getSpecialFieldsFromCollection;

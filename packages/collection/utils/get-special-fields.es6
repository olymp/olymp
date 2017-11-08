import { get } from 'lodash';
import { toLabel } from 'olymp-utils';

const getSpecialFields = f => {
  if (!f) return;

  const field = { ...f };
  field.specialFields = {};

  (field.description || '').replace(/\@\w+(\[[0-9]+\])?(\(.+\))?/gi, match => {
    if (!match) return {};
    let [name, value = ''] = match.split('(');
    name = name.substr(1); // delete '@'
    value = value // delete ')' and '"'
      .substr(0, value.length - 1)
      .split('"')
      .filter(x => x)
      .join(', ');

    field.specialFields[name] = value || true;
  });
  delete field.description;

  // if field === collection
  if (field.fields) {
    field.fields = field.fields.map(x => getSpecialFields(x));
    field.fields.forEach(f => {
      const reqFields = ['name'];
      reqFields.forEach(x => {
        if (
          f.specialFields[x] ||
          (f.name === x && !field.specialFields[`${x}Field`])
        ) {
          field.specialFields[`${x}Field`] = f.name;
        }
      });

      const fields = ['description', 'color', 'image', 'start', 'end'];
      fields.forEach(x => {
        if (
          f.specialFields[
            x
          ] /* ||
          (f.name === x && !field.specialFields[`${x}Field`]) */
        ) {
          field.specialFields[`${x}Field`] = f.name;
        }
      });
    });
  }

  // if field === parentField
  if (field.type) {
    field.type = getSpecialFields(field.type);
    field.type.ofType = getSpecialFields(get(field, 'type.ofType'));
    field.innerType = field.type.ofType || field.type;
    field.specialFields = {
      ...field.specialFields,
      ...field.innerType.specialFields,
    };

    // set label only for parents!
    if (!field.specialFields.label) {
      field.specialFields.label = toLabel(field.name || '');
    }
  }

  return field;
};
export default getSpecialFields;

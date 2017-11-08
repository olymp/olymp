import { get } from 'lodash';

export default field => {
  const type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;
  const rules = [];
  const required =
    field.type.kind === 'NON_NULL' || get(field, 'specialFields.required');
  const label = get(field, 'specialField.label');

  if (field.name === 'name' && required) {
    rules.push({ required, message: `'${label}' muss angegeben werden!` });
  } else if (type.name === 'Email') {
    rules.push({
      required,
      type: 'email',
      message: 'Keine gültige E-Mail Adresse!',
    });
  } else if (type.name === 'Website') {
    rules.push({ required, type: 'url', message: 'Keine gültige Website!' });
  } else if (type.name !== 'Boolean' && required) {
    rules.push({ required, message: `'${label}' muss angegeben werden!` });
  }

  return rules;
};

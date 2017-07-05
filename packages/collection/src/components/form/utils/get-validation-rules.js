import { upperFirst } from 'lodash';

export default (field) => {
  const rules = [];
  const required = !!field['@'] && !!field['@'].required;
  const label = (!!field['@'] && field['@'].label) || upperFirst(field.name);

  if (field.name === 'name' && required) {
    rules.push({ required, message: `'${label}' muss angegeben werden!` });
  } else if (field.type.name === 'Email') {
    rules.push({
      required,
      type: 'email',
      message: 'Keine gültige E-Mail Adresse!',
    });
  } else if (field.type.name === 'Website') {
    rules.push({ required, type: 'url', message: 'Keine gültige Website!' });
  } else if (field.type.name !== 'Boolean' && required) {
    rules.push({ required, message: `'${label}' muss angegeben werden!` });
  }

  return rules;
};

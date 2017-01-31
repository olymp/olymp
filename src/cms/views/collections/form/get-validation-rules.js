export default (field) => {
  const rules = [];
  if (field.name === 'name') {
    rules.push({ required: true, message: 'Bitte geben Sie einen Namen an!' });
  }
  if (field.type.name === 'Email') {
    rules.push({ type: 'email', message: 'Keine gültige E-Mail Adresse!' });
  } else if (field.type.name === 'Website') {
    rules.push({ type: 'url', message: 'Keine gültige Website!' });
  }
  return rules;
};

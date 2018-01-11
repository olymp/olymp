import slugify from 'slugify';
import { get } from 'lodash';

export default ({ item = {}, form, auth }, field) => {
  const { name } = field;
  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (field.specialFields.default) {
    // Wenn ein default-Wert existiert
    return field.specialFields.default;
  } else if (name === 'state') {
    // Bei State
    // return 'DRAFT';
    return '';
  } else if (name === 'orgId') {
    return get(auth, 'user.orgId');
  } else if (name === 'slug' && form && form.getFieldValue('name')) {
    // Bei Slug
    return `/${slugify(
      form.getFieldValue('name'),
      form.getFieldValue('date'),
    )}`;
  }

  return undefined;
};

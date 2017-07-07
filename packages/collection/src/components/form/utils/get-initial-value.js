import moment from 'moment';
import { get } from 'lodash';

export default ({ item = {}, form, auth }, field) => {
  const { name } = field;
  const type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;
  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (field['@'].default) {
    // Wenn ein default-Wert existiert
    return field['@'].default.arg0;
  } else if (name === 'state') {
    // Bei State
    return 'DRAFT';
  } else if (name === 'authorId' || name === 'userId') {
    return get(auth, 'user.id');
  } else if (name === 'orgId') {
    return get(auth, 'user.orgId');
  } else if (name === 'slug' && form && form.getFieldValue('name')) {
    // Bei Slug
    let url = `/${encodeURIComponent(
      form.getFieldValue('name').split(' ').join('-').toLowerCase()
    )
      .split('%C3%A4')
      .join('ä')
      .split('%C3%B6')
      .join('ö')
      .split('%C3%BC')
      .join('ü')
      .split('%C3%A4')
      .join('Ä')
      .split('%C3%B6')
      .join('Ö')
      .split('%C3%BC')
      .join('Ü')}`;
    if (form.getFieldValue('date')) {
      url = `${moment(form.getFieldValue('date')).format('DD-MM-YYYY')}-${url}`;
    }
    return url;
  }

  return undefined;
};

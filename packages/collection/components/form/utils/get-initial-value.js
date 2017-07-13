import moment from 'moment';
import { get } from 'lodash';
export default function (_a, field) {
    var _b = _a.item, item = _b === void 0 ? {} : _b, form = _a.form, auth = _a.auth;
    var name = field.name;
    var type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;
    if (item[name]) {
        return item[name];
    }
    else if (field['@'].default) {
        return field['@'].default.arg0;
    }
    else if (name === 'state') {
        return 'DRAFT';
    }
    else if (name === 'orgId') {
        return get(auth, 'user.orgId');
    }
    else if (name === 'slug' && form && form.getFieldValue('name')) {
        var url = "/" + encodeURIComponent(form.getFieldValue('name').split(' ').join('-').toLowerCase())
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
            .join('Ü');
        if (form.getFieldValue('date')) {
            url = "/" + moment(form.getFieldValue('date')).format('DD-MM-YYYY') + "-" + url.substr(1);
        }
        return url;
    }
    return undefined;
};
//# sourceMappingURL=get-initial-value.js.map
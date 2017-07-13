import { upperFirst, get } from 'lodash';
export default function (field) {
    var type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;
    var rules = [];
    var required = field.type.kind === 'NON_NULL' || (!!field['@'] && !!field['@'].required);
    var label = get(field, '@.label.arg0', upperFirst(field.name));
    if (field.name === 'name' && required) {
        rules.push({ required: required, message: "'" + label + "' muss angegeben werden!" });
    }
    else if (type.name === 'Email') {
        rules.push({
            required: required,
            type: 'email',
            message: 'Keine gültige E-Mail Adresse!',
        });
    }
    else if (type.name === 'Website') {
        rules.push({ required: required, type: 'url', message: 'Keine gültige Website!' });
    }
    else if (type.name !== 'Boolean' && required) {
        rules.push({ required: required, message: "'" + label + "' muss angegeben werden!" });
    }
    return rules;
};
//# sourceMappingURL=get-validation-rules.js.map
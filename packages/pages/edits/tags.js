var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { getRules } from 'olymp-ui';
import { get } from 'lodash';
var TagSelect = function (_a) {
    var item = _a.item, field = _a.field, label = _a.label, layout = _a.layout, initialValue = _a.initialValue, rules = _a.rules, placeholder = _a.placeholder, form = _a.form, options = _a.options, rest = __rest(_a, ["item", "field", "label", "layout", "initialValue", "rules", "placeholder", "form", "options"]);
    return key = { field: field };
}, label = { label: label }, layout = __rest( >
    { form: .getFieldDecorator(field, {
            initialValue: get(item, field || '', []) || [],
            rules: getRules(rules, label),
        })(style, {}, { width: '100%' }) }, []);
mode = "multiple";
placeholder = { placeholder:  || label };
{
    rest;
}
    >
        { options: .map(function (value) {
                return key = { value: value } >
                    { value: value }
                    < /Select.Option>);
            }) }
    < /Select>;
/Form.Item>);;
TagSelect.defaultProps = { layout: layout };
export default TagSelect;
//# sourceMappingURL=tags.js.map
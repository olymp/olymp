var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Select } from 'antd';
import { getRules } from 'olymp-ui';
var PageTypeInput = function (_a) {
    var item = _a.item, field = _a.field, label = _a.label, layout = _a.layout, initialValue = _a.initialValue, rules = _a.rules, placeholder = _a.placeholder, form = _a.form, rest = __rest(_a, ["item", "field", "label", "layout", "initialValue", "rules", "placeholder", "form"]);
    return key = { field: field };
}, label = { label: label }, layout = __rest( >
    { form: .getFieldDecorator(field, {
            initialValue: item && item[field] ? item[field] : 'PAGE',
            rules: getRules(rules, label),
        })(style, {}, { width: '100%' }) }, []), rest = __rest( >
    value, []);
"PAGE" > Seite < /Select.Option>
    < Select.Option;
value = "MENU" > Menü < /Select.Option>
    < Select.Option;
value = "PLACEHOLDER" > Platzhalter < /Select.Option>
    < Select.Option;
value = "ALIAS" > Alias < /Select.Option>
    < Select.Option;
value = "LINK" > Externer;
Link < /Select.Option>
    < /Select>;
/Form.Item>;
;
PageTypeInput.defaultProps = { layout: layout };
export default PageTypeInput;
//# sourceMappingURL=page-type.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Component } from 'react';
import { getRules } from 'olymp-ui';
import { get } from 'lodash';
var JsonInput = (function (_super) {
    __extends(JsonInput, _super);
    function JsonInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { text: '' };
        _this.componentWillReceiveProps = function (newProps) {
            _this.setState({
                text: newProps.value ? JSON.stringify(newProps.value) : '',
            });
        };
        _this.onChange = function (x) {
            _this.setState({ text: x.target.value });
            try {
                _this.props.onChange(JSON.parse(x.target.value));
            }
            catch (err) { }
        };
        return _this;
    }
    JsonInput.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, value = _a.value, rest = __rest(_a, ["onChange", "value"]);
        var newValue = value ? JSON.stringify(value) : '';
        return value = { this: .state.text };
        onChange = { this: .onChange };
        {
            rest;
        }
        />;
        ;
    };
    return JsonInput;
}(Component));
var Input = function (_a) {
    var item = _a.item, field = _a.field, label = _a.label, layout = _a.layout, initialValue = _a.initialValue, rules = _a.rules, placeholder = _a.placeholder, form = _a.form, rest = __rest(_a, ["item", "field", "label", "layout", "initialValue", "rules", "placeholder", "form"]);
    return key = { field: field };
}, label = { label: label }, layout = __rest( >
    { form: .getFieldDecorator(field, {
            initialValue: get(item, field),
            rules: getRules(rules, label),
        })(placeholder, { placeholder: placeholder }, label = { label: label } /  > ) }
    < /Form.Item>);, []);
Input.defaultProps = { layout: layout };
export default Input;
//# sourceMappingURL=json-input.js.map
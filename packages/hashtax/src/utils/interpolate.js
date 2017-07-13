import { get } from 'lodash';
export default function (value, propsOrFunc) {
    if (typeof value !== 'string') {
        return value;
    }
    if (value.indexOf('{') === -1) {
        return value;
    }
    if (!propsOrFunc) {
        return value;
    }
    return value.replace(/\{\{?\:?(.+?)\}?\}/g, function (m, v) { return typeof propsOrFunc === 'function'
        ? propsOrFunc(v, v)
        : get(propsOrFunc, v, v); });
};
//# sourceMappingURL=interpolate.js.map
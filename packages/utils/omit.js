import { isObject, isArray } from 'lodash';
var omit = function (obj, keyToOmit) {
    if (keyToOmit === void 0) { keyToOmit = '__typename'; }
    if (!isObject(obj)) {
        return obj;
    }
    var newObj = Object.keys(obj).reduce(function (store, key) {
        if (isArray(obj[key])) {
            store[key] = obj[key].map(function (x) { return omit(x, keyToOmit); });
        }
        else if (isObject(obj[key])) {
            store[key] = omit(obj[key], keyToOmit);
        }
        else if (key !== keyToOmit) {
            store[key] = obj[key];
        }
        return store;
    }, {});
    return newObj;
};
export default omit;
//# sourceMappingURL=omit.js.map
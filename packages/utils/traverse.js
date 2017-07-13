import { isObject, isArray } from 'lodash';
var traverse = function (obj, fc, parent) {
    if (!isObject(obj)) {
        return obj;
    }
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var v = void 0;
        if (isArray(obj[key])) {
            for (var x = 0; x < obj[key].length; x++) {
                v = traverse(obj[key][x], fc, obj);
                if (v === false)
                    return false;
            }
        }
        else if (isObject(obj[key])) {
            v = traverse(obj[key], fc, obj);
        }
        else {
            v = fc(key, obj[key], obj, parent);
        }
        if (v === false)
            return false;
    }
    return undefined;
};
export default traverse;
//# sourceMappingURL=traverse.js.map
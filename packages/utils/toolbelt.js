import lget from 'lodash/get';
import lset from 'lodash/set';
import ltoString from 'lodash/toString';
import ltoArray from 'lodash/toArray';
import ltoObject from 'lodash/toPlainObject';
import lupperFirst from 'lodash/upperFirst';
import llowerCase from 'lodash/lowerCase';
import lgroupBy from 'lodash/groupBy';
import ltake from 'lodash/take';
import lisEqual from 'lodash/isEqual';
import lintersection from 'lodash/intersection';
export var toString = function (arg) {
    if (arg && typeof arg === 'object') {
        return arg.name || arg.id;
    }
    return ltoString(arg);
};
export var toObject = function (arg) { return ltoObject(arg); };
export var toArray = function (arg) { return ltoArray(arg); };
export var intersection = lintersection;
export var get = lget;
export var set = lset;
export var upperFirst = lupperFirst;
export var lowerCase = llowerCase;
export var groupBy = lgroupBy;
export var isEqual = lisEqual;
export var take = ltake;
export var addOrRemove = function (arr, item, shouldAdd) {
    if (arr === void 0) { arr = []; }
    return shouldAdd ? arr.concat([item]) : arr.filter(function (x) { return x !== item; });
};
//# sourceMappingURL=toolbelt.js.map
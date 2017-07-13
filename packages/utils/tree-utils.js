import groupBy from 'lodash/groupBy';
import reduce from 'lodash/reduce';
export var makeTree = function (items, propertyName) {
    var results = items
        ? reduce(groupBy(items, propertyName), function (array, children, key) {
            array.push({ id: key + " (" + children.length + ")", name: '', children: children });
            return array;
        }, [])
        : null;
    return results;
};
//# sourceMappingURL=tree-utils.js.map
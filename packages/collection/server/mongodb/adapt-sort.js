export default function (obj) {
    if (obj.skipSort) {
        return {};
    }
    delete obj.skipSort;
    Object.keys(obj).forEach(function (key) {
        obj[key] = obj[key] === 'DESC' ? -1 : 1;
    });
    return obj;
};
//# sourceMappingURL=adapt-sort.js.map
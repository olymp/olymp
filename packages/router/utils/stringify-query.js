import { memoize } from 'olymp-utils';
export default memoize(function (obj) {
    return obj
        ? Object.keys(obj)
            .sort()
            .map(function (key) {
            var val = obj[key];
            if (val === undefined) {
                return '';
            }
            if (val === null) {
                return key;
            }
            if (Array.isArray(val)) {
                var result_1 = [];
                val.slice().forEach(function (val2) {
                    if (val2 === undefined) {
                        return;
                    }
                    if (val2 === null) {
                        result_1.push(key);
                    }
                    else {
                        result_1.push(key + "=" + encodeURIComponent(val2));
                    }
                });
                return result_1.join('&');
            }
            return key + "=" + encodeURIComponent(val);
        })
            .filter(function (x) { return x.length > 0; })
            .join('&')
        : '';
});
//# sourceMappingURL=stringify-query.js.map
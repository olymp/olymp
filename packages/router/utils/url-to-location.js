import { memoize } from 'olymp-utils';
import parseQuery from './parse-query';
import stringifyQuery from './stringify-query';
export default memoize(function (urlOrString) {
    if (urlOrString === void 0) { urlOrString = ''; }
    var url = {};
    if (typeof urlOrString === 'string') {
        var _a = urlOrString.split('?'), pathname = _a[0], search = _a.slice(1);
        search = search.join('?');
        url = {
            pathname: pathname,
            search: search,
            query: parseQuery(search),
        };
    }
    else if (typeof urlOrString === 'object') {
        url = urlOrString;
        if (url.query) {
            url.search = stringifyQuery(url.query);
        }
        else if (url.search) {
            url.query = parseQuery(url.search);
        }
    }
    return url;
});
//# sourceMappingURL=url-to-location.js.map
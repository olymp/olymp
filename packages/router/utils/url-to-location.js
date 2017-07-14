import { memoize } from 'olymp-utils';
export default memoize(function (url) {
    if (url === void 0) { url = ''; }
    var index = url.indexOf('?');
    var pathname = url.substr(0);
    return {
        pathname: pathname,
        search: search.join('?'),
    };
});
//# sourceMappingURL=url-to-location.js.map
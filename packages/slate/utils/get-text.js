import shortId from 'shortid';
var map = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
};
export var getHeaders = function (nodes) {
    var headers = [];
    var getHeadersNested = function (_a) {
        var kind = _a.kind, type = _a.type, nodes = _a.nodes;
        if (type && type.indexOf('heading-') === 0) {
            var size = map[type.split('-')[1]];
            var text = getText(nodes);
            var slug = text
                .toLowerCase()
                .replace(/[\s!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '-');
            headers.push({ id: shortId.generate(), text: text, slug: slug, children: [] });
        }
        (nodes || []).map(getHeadersNested);
    };
    (nodes || []).map(getHeadersNested);
    var newHeaders = [];
    var currentPath = [];
    headers.forEach(function (header) {
        var lastItem = currentPath.length && currentPath[currentPath.length - 1];
        var mod = (lastItem && header.size - lastItem.size) || 0;
        if (mod > 0) {
            currentPath = currentPath.concat([header]);
        }
        else {
            currentPath = currentPath.slice(0, currentPath.length - 1 + mod).concat([
                header,
            ]);
        }
        var parent = currentPath.length > 1 && currentPath[currentPath.length - 2];
        if (parent && parent !== header) {
            parent.children.push(header);
        }
        else {
            newHeaders.push(header);
        }
    });
    return newHeaders;
};
export var getText = function (children) {
    var res = '';
    if (!children) {
        return '';
    }
    if (Array.isArray(children)) {
        return children.map(function (x) { return getText(x); }).join();
    }
    if (typeof children === 'object') {
        if (children.nodes) {
            res += getText(children.nodes);
        }
        else if (children.text) {
            res += children.text;
        }
    }
    return res;
};
export var getId = function (x) { return getText(x)
    .toLowerCase()
    .replace(/[\s!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '-'); };
export default getText;
//# sourceMappingURL=get-text.js.map
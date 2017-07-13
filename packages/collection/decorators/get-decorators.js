var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export default function (description) {
    var specialFields = {};
    if (!description)
        return specialFields;
    description.replace(/\@\w+(\[[0-9]+\])?(\(.+\))?/gi, function (match, text, urlId) {
        if (!match)
            return;
        var _a = match.split('('), split0 = _a[0], values = _a[1];
        var _b = split0.split('['), name = _b[0], _c = _b[1], index = _c === void 0 ? null : _c;
        name = name.substr(1);
        if (index) {
            try {
                index = parseInt(index.substr(index, index.length - 1), 10);
            }
            catch (err) {
                index = null;
            }
        }
        var specialValues = {};
        try {
            values.substr(0, values.length - 1).split(',').forEach(function (x, i) {
                specialValues["value" + (i || '')] = JSON.parse(x);
            });
        }
        catch (err) { }
        var specialField = __assign({}, specialValues);
        if (index || index === 0) {
            if (!specialFields[name])
                specialFields[name] = [];
            specialFields[name].splice(index >= specialFields[name].length
                ? specialFields[name].length
                : index, 0, specialField);
        }
        else {
            specialFields[name] = specialField;
        }
    });
    return specialFields;
};
//# sourceMappingURL=get-decorators.js.map
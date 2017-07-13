var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
export var parseComponent = function (raw) {
    var _a = raw.split('@'), text = _a[0], decos = _a.slice(1);
    var _b = text.split(' '), type = _b[0], rest = _b.slice(1);
    var decorators = decos.map(parseComponent);
    var args = {};
    var currentKey = 'value';
    rest.forEach(function (frag) {
        if (!frag) {
            return;
        }
        if (frag.indexOf('=') !== -1) {
            var key = frag.substr(0, frag.indexOf('='));
            currentKey = key;
            frag = frag.substr(frag.indexOf('=') + 1);
        }
        if (!args[currentKey]) {
            args[currentKey] = frag;
        }
        else {
            args[currentKey] += " " + frag;
        }
    });
    var value = args.value, props = __rest(args, ["value"]);
    return { type: type, value: value, props: props, decorators: decorators, raw: raw };
};
export var processLines = function (lines, result) {
    if (result === void 0) { result = []; }
    if (!lines || lines.length === 0) {
        return { lines: lines, result: result };
    }
    var line = lines[0], rest = lines.slice(1);
    var split = line.split('#');
    var equalLength = line && line.length === split.length - 1;
    if (equalLength) {
        if (line.length > 1) {
            rest.splice(0, 0, '#');
        }
        return { lines: rest, result: result };
    }
    else if (!split[0] && split.length === 2) {
        var arg = processLines(rest);
        rest = arg.lines;
        result.push(__assign({}, parseComponent(split[1]), { children: arg.result }));
    }
    else {
        if (result.length) {
            result.push({ type: 'paragraph' });
        }
        split.forEach(function (frag, i) {
            if (!frag) {
                return;
            }
            var isEven = i % 2;
            if (isEven) {
                result.push(__assign({}, parseComponent(frag), { inline: true, children: [] }));
            }
            else {
                result.push({ value: frag, type: 'paragraph' });
            }
        });
    }
    return processLines(rest, result);
};
export default function (text) {
    if (!text) {
        return [];
    }
    return processLines(text.split('\n')).result;
};
//# sourceMappingURL=text-to-ast.js.map
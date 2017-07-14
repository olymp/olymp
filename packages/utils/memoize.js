export default function (func) {
    var result = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = args.slice().reduce(function (prev, curr) {
            return prev + JSON.stringify(curr);
        }, 'undefined-');
        if (!result.hasOwnProperty(key)) {
            result[key] = func.apply(void 0, args);
        }
        return result[key];
    };
};
//# sourceMappingURL=memoize.js.map
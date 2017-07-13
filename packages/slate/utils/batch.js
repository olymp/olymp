export var batch = function (limit) {
    if (limit === void 0) { limit = 500; }
    var _callback = null;
    return function (callback) {
        _callback = callback;
        setTimeout(function () {
            if (_callback === callback) {
                callback();
            }
        }, limit);
    };
};
//# sourceMappingURL=batch.js.map
export var getRangeClientRectsChrome = function (range) {
    var tempRange = range.cloneRange();
    var clientRects = [];
    for (var ancestor = range.endContainer; ancestor != null; ancestor = ancestor.parentNode) {
        var atCommonAncestor = ancestor === range.commonAncestorContainer;
        if (atCommonAncestor) {
            tempRange.setStart(range.startContainer, range.startOffset);
        }
        else {
            tempRange.setStart(tempRange.endContainer, 0);
        }
        var rects = Array.from(tempRange.getClientRects());
        clientRects.push(rects);
        if (atCommonAncestor) {
            clientRects.reverse();
            return [].concat.apply([], clientRects);
        }
        tempRange.setEndBefore(ancestor);
    }
    throw new Error('Found an unexpected detached subtree when getting range client rects.');
};
export var isChrome = typeof navigator !== 'undefined' &&
    /Chrome/.test(navigator.userAgent) &&
    /Google Inc/.test(navigator.vendor);
export var getRangeClientRects = isChrome
    ? getRangeClientRectsChrome
    : function (range) {
        return Array.from(range.getClientRects());
    };
export var getRangeBoundingClientRect = function (range) {
    var rects = getRangeClientRects(range);
    var top = 0;
    var right = 0;
    var bottom = 0;
    var left = 0;
    if (rects.length) {
        (_a = rects[0], top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left);
        for (var ii = 1; ii < rects.length; ii++) {
            var rect = rects[ii];
            if (rect.height !== 0 || rect.width !== 0) {
                top = Math.min(top, rect.top);
                right = Math.max(right, rect.right);
                bottom = Math.max(bottom, rect.bottom);
                left = Math.min(left, rect.left);
            }
        }
    }
    return {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: right - left,
        height: bottom - top,
    };
    var _a;
};
export var getVisibleSelectionRect = function () {
    if (typeof window === 'undefined') {
        return null;
    }
    var selection = window.getSelection();
    if (!selection.rangeCount) {
        return null;
    }
    var range = selection.getRangeAt(0);
    var boundingRect = getRangeBoundingClientRect(range);
    var top = boundingRect.top, right = boundingRect.right, bottom = boundingRect.bottom, left = boundingRect.left;
    if (top === 0 && right === 0 && bottom === 0 && left === 0) {
        return null;
    }
    return boundingRect;
};
export var getCollapsedClientRect = function () {
    var selection = document.getSelection();
    if (selection.rangeCount === 0 ||
        !selection.getRangeAt ||
        !selection.getRangeAt(0) ||
        !selection.getRangeAt(0).startContainer ||
        !selection.getRangeAt(0).startContainer.getBoundingClientRect) {
        return null;
    }
    var node = selection.getRangeAt(0).startContainer;
    var rect = node.getBoundingClientRect();
    return rect;
};
//# sourceMappingURL=range.js.map
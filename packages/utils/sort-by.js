export default function (array, attrib) {
    if (attrib === void 0) { attrib = 'name'; }
    array = array.slice();
    var getAttrib = function (x) {
        if (attrib && typeof attrib === 'string') {
            return x[attrib];
        }
        if (attrib && typeof attrib === 'function') {
            return attrib(x);
        }
        return '';
    };
    array.sort(function (a, b) { return compare(getAttrib(a), getAttrib(b)); });
    return array;
};
var compare = function (left, right, idx) {
    idx = idx === undefined ? 0 : idx++;
    var run = right.length <= left.length
        ? idx < right.length - 1
        : idx < left.length - 1;
    if (!run) {
        if (left[0].localeCompare(right[0]) === 0) {
            return left.localeCompare(right);
        }
        return left[0].localeCompare(right[0]);
    }
    if (left.localeCompare(right) !== left[0].localeCompare(right[0])) {
        var myLeft = left.slice(1, left.length);
        var myRight = right.slice(1, right.length);
        if (myLeft.localeCompare(myRight) !== myLeft[0].localeCompare(myRight[0])) {
            return compare(myLeft, myRight, idx);
        }
        if (left[0].localeCompare(right[0]) === 0) {
            return compare(myLeft, myRight, idx);
        }
        return left[0].localeCompare(right[0]);
    }
    return left.localeCompare(right);
};
//# sourceMappingURL=sort-by.js.map
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
import React from 'react';
import PropTypes from 'prop-types';
var ImageAmp = function (_a) {
    var width = _a.width, height = _a.height, src = _a.src, alt = _a.alt, layout = _a.layout, children = _a.children, rest = __rest(_a, ["width", "height", "src", "alt", "layout", "children"]);
    return (React.createElement("amp-img", __assign({ layout: layout || 'responsive', src: src, alt: alt, width: width, height: height }, rest),
        React.createElement("noscript", null, children)));
};
ImageAmp.displayName = 'Image.Amp';
ImageAmp.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
ImageAmp.defaultProps = {
    alt: '',
};
export default ImageAmp;
//# sourceMappingURL=amp.js.map
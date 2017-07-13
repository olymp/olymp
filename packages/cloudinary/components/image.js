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
import { Image } from 'olymp-fela';
export var cloudinaryUrl = function (value, options) {
    var newOptions = __assign({ c: 'fill', f: 'auto', q: 'auto:eco', fl: 'lossy', dpr: 2 }, options);
    if (!value || !value.url) {
        return '';
    }
    var newUrl = value.url
        .split('ttp://res.cloudinary.com/')
        .join('ttps://res.cloudinary.com/');
    var crop = value.crop && value.crop.length
        ? "w_" + value.crop[0] + ",h_" + value.crop[1] + ",x_" + value.crop[2] + ",y_" + value
            .crop[3] + ",c_crop/"
        : '';
    var query = '';
    Object.keys(newOptions).forEach(function (key) { return (query = "" + query + key + "_" + newOptions[key] + ","); });
    return newUrl.replace('/upload/', "/upload/" + crop + query + "/");
};
var CloudinaryImage = function (_a) {
    var options = _a.options, value = _a.value, ratio = _a.ratio, avatar = _a.avatar, alt = _a.alt, maxResolution = _a.maxResolution, rest = __rest(_a, ["options", "value", "ratio", "avatar", "alt", "maxResolution"]);
    if (!value) {
        return React.createElement("div", null);
    }
    var width = (value.crop && value.crop[0]) || value.width;
    var height = (value.crop && value.crop[1]) || value.height;
    return (React.createElement(Image, __assign({}, rest, { maxResolution: maxResolution > 6000000 ? 6000000 : maxResolution, src: function (w, h) {
            return cloudinaryUrl(value, __assign({ w: w,
                h: h, g: avatar ? 'face' : 'center' }, options));
        }, alt: alt || value.caption, ratio: ratio || height / width, srcRatio: height / width })));
};
CloudinaryImage.propTypes = {
    value: PropTypes.shape({
        url: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }),
    ratio: PropTypes.number,
    options: PropTypes.shape({
        w: PropTypes.number,
        h: PropTypes.number,
        c: PropTypes.string,
        f: PropTypes.string,
        q: PropTypes.string,
        fl: PropTypes.string,
        dpr: PropTypes.number,
    }),
    avatar: PropTypes.bool,
    alt: PropTypes.string,
};
CloudinaryImage.defaultProps = {
    value: undefined,
    ratio: undefined,
    options: {},
    avatar: false,
    alt: undefined,
};
export default CloudinaryImage;
//# sourceMappingURL=image.js.map
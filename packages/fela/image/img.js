import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
var ImageImg = createComponent(function (_a) {
    var theme = _a.theme, width = _a.width, height = _a.height;
    return ({
        width: width,
        height: height,
    });
}, function (_a) {
    var width = _a.width, height = _a.height, src = _a.src, alt = _a.alt, onClick = _a.onClick, className = _a.className;
    return (React.createElement("img", { src: src, alt: alt, className: className, width: width, height: height, onClick: onClick }));
}, function (p) { return Object.keys(p); });
ImageImg.displayName = 'Image.Img';
ImageImg.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClick: PropTypes.func,
};
ImageImg.defaultProps = {
    alt: '',
    onClick: function () { },
};
export default ImageImg;
//# sourceMappingURL=img.js.map
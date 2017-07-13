var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'olymp-fela';
import { cloudinaryUrl } from './image';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
var StyledCrop = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        '> .ReactCrop--crop-wrapper': {
            backgroundColor: 'white',
        },
    });
}, function (p) { return React.createElement(ReactCrop, __assign({}, p)); }, function (p) { return Object.keys(p); });
var Crop = (function (_super) {
    __extends(Crop, _super);
    function Crop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: true,
        };
        return _this;
    }
    Crop.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        var crop = value.crop || [value.width, value.height, 0, 0];
        var aspect = this.props.aspect || (this.state.isSquare && 1);
        var width = crop[0] / value.width * 100;
        var height = crop[1] / value.height * 100;
        var x = crop[2] / value.width * 100;
        var y = crop[3] / value.height * 100;
        if (!value) {
            return React.createElement("div", null);
        }
        return (React.createElement("div", { onKeyDown: function (e) { return _this.setState({ isSquare: e && e.shiftKey }); }, onKeyUp: function (e) { return _this.setState({ isSquare: false }); } },
            React.createElement(StyledCrop, { src: cloudinaryUrl(__assign({}, value, { crop: undefined })), onChange: function (p, _a) {
                    var width = _a.width, height = _a.height, x = _a.x, y = _a.y;
                    return onChange([width, height, x, y]);
                }, crop: crop
                    ? {
                        width: width,
                        height: height,
                        x: x,
                        y: y,
                        aspect: aspect,
                    }
                    : { aspect: aspect } })));
    };
    return Crop;
}(Component));
Crop.propTypes = {
    value: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        crop: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    aspect: PropTypes.number,
    onChange: PropTypes.func,
};
Crop.defaultProps = {
    aspect: 0,
    onChange: function () { },
};
export default Crop;
//# sourceMappingURL=crop.js.map
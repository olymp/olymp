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
import styled from '../styled';
var icon = function (_a) {
    var color = _a.color, width = _a.width, height = _a.height, size = _a.size, rest = __rest(_a, ["color", "width", "height", "size"]);
    return (React.createElement("svg", __assign({ fill: color, width: size || width, height: size || height }, rest, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" }),
        React.createElement("path", { d: "M615.554 509.393L4.534 27.657c-5.188-4.124-6.051-11.673-1.927-16.861l4.978-6.263c4.124-5.188 11.673-6.051 16.861-1.927l611.021 481.736c5.188 4.124 6.051 11.673 1.927 16.861l-4.978 6.263c-4.125 5.189-11.674 6.051-16.862 1.927zM407.172 126.221C450.902 152.963 480 201.134 480 256c0 19.945-3.861 38.996-10.856 56.463l26.002 20.5C505.972 309.488 512 283.404 512 256c0-66.099-34.976-124.573-88.133-157.079-7.538-4.611-17.388-2.235-21.997 5.302-4.61 7.539-2.236 17.387 5.302 21.998zm-171.913 1.844L256 107.328v37.089l32 25.229v-81.63c0-21.466-25.963-31.979-40.97-16.971l-37.075 37.068 25.304 19.952zm221.925-83.804C528.548 87.899 576 166.532 576 256c0 42.442-10.685 82.442-29.529 117.428l25.467 20.078C594.94 352.775 608 305.811 608 256c0-100.587-53.23-189.576-134.123-239.04-7.541-4.61-17.389-2.235-21.997 5.304-4.609 7.539-2.235 17.387 5.304 21.997zM357.159 208.178c13.422 8.213 22.517 21.271 25.639 36.209l32.141 25.341a89.491 89.491 0 0 0 1.06-13.728c0-30.891-15.753-58.972-42.14-75.117-7.538-4.615-17.388-2.239-21.998 5.297-4.611 7.537-2.24 17.386 5.298 21.998zm128.318 239.41a248.52 248.52 0 0 1-28.293 20.151c-7.539 4.609-9.913 14.458-5.304 21.997 4.612 7.544 14.465 9.91 21.997 5.304a280.708 280.708 0 0 0 37.246-27.233l-25.646-20.219zM256 266.666V404.67l-77.659-77.643a24 24 0 0 0-16.969-7.028H64V192h97.296l-40.588-32H56c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h102.059l88.971 88.952c15.029 15.028 40.97 4.465 40.97-16.971V291.895l-32-25.229zm151.123 119.147c-7.498 4.624-9.853 14.443-5.253 21.965 4.611 7.541 14.462 9.911 21.997 5.302a184.087 184.087 0 0 0 9.738-6.387l-26.482-20.88z" })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=fa-volume-mute.js.map
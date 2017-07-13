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
    return (React.createElement("svg", __assign({ width: size || width, height: size || height, viewBox: "0 0 1792 1792" }, rest),
        React.createElement("path", { d: "M415 933h-13q-47 0-47 32 0 22 20 22 17 0 28-15t12-39zm395-36h62v-3q1-4 .5-6.5t-1-7-2-8-4.5-6.5-7.5-5-11.5-2q-28 0-36 38zm540 36h-12q-48 0-48 32 0 22 20 22 17 0 28-15t12-39zm319-26q0-41-30-41-19 0-31 20t-12 51q0 42 28 42 20 0 32.5-20t12.5-52zm-1445-141h87l-44 262h-56l32-201-71 201h-39l-4-200-34 200h-53l44-262h81l2 163zm253 107q0 6-4 42-16 101-17 113h-47l1-22q-20 26-58 26-23 0-37.5-16t-14.5-42q0-39 26-60.5t73-21.5q14 0 23 1 0-3 .5-5.5t1-4.5.5-3q0-20-36-20-29 0-59 10 0-4 7-48 38-11 67-11 74 0 74 62zm156-58l-8 49q-22-3-41-3-27 0-27 17 0 8 4.5 12t21.5 11q40 19 40 60 0 72-87 71-34 0-58-6 0-2 7-49 29 8 51 8 32 0 32-19 0-7-4.5-11.5t-21.5-12.5q-43-20-43-59 0-72 84-72 30 0 50 4zm88 0h28l-7 52h-29q-2 17-6.5 40.5t-7 38.5-2.5 18q0 16 19 16 8 0 16-2l-8 47q-21 7-40 7-43 0-45-47 0-12 8-56 3-20 25-146h55zm203 73q0 23-7 52h-111q-3 22 10 33t38 11q30 0 58-14l-9 54q-30 8-57 8-95 0-95-95 0-55 27.5-90.5t69.5-35.5q35 0 55.5 21t20.5 56zm139-74q-13 23-22 62-22-2-31 24t-25 128h-56l3-14q22-130 29-199h51l-3 33q14-21 25.5-29.5t28.5-4.5zm187-41l-9 57q-28-14-50-14-31 0-51 27.5t-20 70.5q0 30 13.5 47t38.5 17q21 0 48-13l-10 59q-28 8-50 8-45 0-71.5-30.5t-26.5-82.5q0-70 35.5-114.5t91.5-44.5q26 0 61 13zm162 100q0 18-4 42-13 79-17 113h-46l1-22q-20 26-59 26-23 0-37-16t-14-42q0-39 25.5-60.5t72.5-21.5q15 0 23 1 2-7 2-13 0-20-36-20-29 0-59 10 0-4 8-48 38-11 67-11 73 0 73 62zm141-59q-14 24-21 62-23-2-31.5 23t-25.5 129h-56l3-14q19-104 29-199h52q0 11-4 33 15-21 26.5-29.5t27.5-4.5zm141-48h56l-43 262h-53l3-19q-23 23-52 23-31 0-49.5-24t-18.5-64q0-53 27.5-92t64.5-39q31 0 53 29zm111 130q0-148-72.5-273t-198-198-273.5-73q-181 0-328 110 127 116 171 284h-50q-44-150-158-253-114 103-158 253h-50q44-168 171-284-147-110-328-110-148 0-273.5 73t-198 198-72.5 273 72.5 273 198 198 273.5 73q181 0 328-110-120-111-165-264h50q46 138 152 233 106-95 152-233h50q-45 153-165 264 147 110 328 110 148 0 273.5-73t198-198 72.5-273zm243-640v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z", fill: color })));
};
icon.defaultProps = { width: 100, height: 100 };
export default styled(icon);
//# sourceMappingURL=cc-mastercard.js.map
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
import { createComponent } from 'olymp-fela';
export var H = createComponent(function (_a) {
    var fontSize = _a.fontSize, theme = _a.theme, padding = _a.padding, marginBottom = _a.marginBottom, marginTop = _a.marginTop, textAlign = _a.textAlign, light = _a.light, colored = _a.colored, color = _a.color, center = _a.center;
    return ({
        color: (colored || color) && theme.color,
        fontWeight: light && 200,
        textAlign: center ? 'center' : textAlign,
        padding: padding,
        fontSize: fontSize,
        lineHeight: fontSize ? fontSize + "px" : undefined,
        marginTop: marginTop !== undefined ? marginTop : undefined,
        marginBottom: marginBottom !== undefined ? marginBottom : 15,
        '& .ant-checkbox-inner': {
            width: 21,
            height: 21,
            onAfter: {
                left: 7,
                top: 5,
            },
        },
    });
}, function (_a) {
    var level = _a.level, children = _a.children, rest = __rest(_a, ["level", "children"]);
    if (!level) {
        level = 1;
    }
    return React.createElement("h" + level, rest, children);
}, ['level', 'itemProp']);
export var SectionH = function (_a) {
    var title = _a.title, description = _a.description;
    return key = { 0:  } >
        marginBottom;
},  = (textAlign = "center")[0], level = { 3:  }, light = color >
    { title: title }
    < /H>;
{
    description &&
        marginTop;
    {
        0;
    }
    textAlign = "center";
    level = { 5:  };
    fontSize = { 12:  };
    light >
        { description: description }
        < /H>}
        < /div>);;
}
//# sourceMappingURL=h.js.map
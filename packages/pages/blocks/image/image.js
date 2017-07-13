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
import { LightboxImage, Image } from 'olymp-cloudinary';
export default {
    key: 'Pages.Media.ImageBlock.Image',
    label: 'Bild',
    category: 'Medien',
    component: function (_a) {
        var getData = _a.getData, setActive = _a.setActive, className = _a.className, editor = _a.editor;
        var Img = editor.props.readOnly === true ? LightboxImage : Image;
        return className = { className: className };
        onClick = { setActive: setActive };
        width = (_b = ["", "%"], _b.raw = ["", "%"], {}(_b, 100 / getData('size', 4)));
        var _b;
    },
    value: value
};
{
    url: 'https://lorempixel.com/400/300/cats/',
        width;
    400,
        height;
    300,
    ;
}
/>;
;
styles: (function (_a) {
    var theme = _a.theme, getData = _a.getData;
    var alignment = getData('float', 'none');
    var normalized = alignment.replace('+', '');
    return {
        float: normalized,
        margin: alignment === 'none' && '0 auto',
        marginTop: alignment === 'none' && theme.space3,
        marginBottom: theme.space3,
        zIndex: 1,
        extend: [
            {
                condition: normalized === 'left',
                style: { marginRight: theme.space3 },
            },
            {
                condition: alignment === 'left+',
                style: { marginLeft: -75 },
            },
            {
                condition: normalized === 'right',
                style: { marginLeft: theme.space3 },
            },
            {
                condition: alignment === 'right+',
                style: { marginRight: -75 },
            },
        ],
    };
},
    actions);
[
    {
        tooltip: function (getData) { return "Bild " + (getData('value') ? 'wechseln' : 'wählen'); },
        component: function (_a) {
            var setData = _a.setData, getData = _a.getData, p = __rest(_a, ["setData", "getData"]);
            return (__assign({}, p));
        },
        onChange: onChange,
        value: value
    }, {},
    multi = { false:  }
        /  > , ,
    toggle, function () { },
    ,
    {
        label: />,,
        tooltip: 'Links anordnen',
        active: function (_a) {
            var getData = _a.getData;
            return getData('float', 'none').indexOf('left') === 0;
        },
        toggle: function (_a) {
            var setData = _a.setData, getData = _a.getData;
            var alignment = getData('float', 'none');
            if (alignment === 'none') {
                setData({ float: 'left' });
            }
            else if (alignment === 'left') {
                setData({ float: 'left+' });
            }
            else {
                setData({ float: null });
            }
        },
    },
    {
        label: />,,
        tooltip: 'Rechts anordner',
        active: function (_a) {
            var getData = _a.getData;
            return getData('float', 'none').indexOf('right') === 0;
        },
        toggle: function (_a) {
            var setData = _a.setData, getData = _a.getData;
            var alignment = getData('float', 'none');
            if (alignment === 'none') {
                setData({ float: 'right' });
            }
            else if (alignment === 'right') {
                setData({ float: 'right+' });
            }
            else {
                setData({ float: null });
            }
        },
    },
    {
        label: />,,
        tooltip: 'Größer',
        toggle: function (_a) {
            var setData = _a.setData, getData = _a.getData;
            var size = getData('size', 4);
            setData({
                size: size > 1 ? size - 1 : 1,
            });
        },
    },
    {
        label: />,,
        tooltip: 'Kleiner',
        toggle: function (_a) {
            var setData = _a.setData, getData = _a.getData;
            var size = getData('size', 4);
            setData({
                size: size < 8 ? size + 1 : 8,
            });
        },
    },
],
;
;
//# sourceMappingURL=image.js.map
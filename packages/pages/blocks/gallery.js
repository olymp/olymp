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
import { Image, SimpleImageEdit } from 'olymp-cloudinary';
import { createComponent } from 'olymp-fela';
import { FaPlus, FaMinus } from 'olymp-icons';
var Container = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingY: theme.space3,
        hasFlex: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        clearfix: true,
    });
}, 'div', function (p) { return Object.keys(p); });
var ImageContainer = createComponent(function (_a) {
    var theme = _a.theme, size = _a.size;
    var style = {
        paddingRight: theme.space3,
        paddingBottom: theme.space3,
        float: 'left',
        width: 100 / size + "%",
        minWidth: 100 / size + "%",
        hasFlex: {
            display: 'flex',
        },
    };
    style[":nth-child(" + size + "n)"] = { paddingRight: 0 };
    return style;
}, 'div', function (_a) {
    var size = _a.size, p = __rest(_a, ["size"]);
    return Object.keys(p);
});
export default {
    key: 'Pages.Media.Gallery',
    label: 'Galerie',
    category: 'Medien',
    component: function (_a) {
        var getData = _a.getData, setActive = _a.setActive, className = _a.className, attributes = _a.attributes;
        return React.createElement(Container, __assign({}, attributes), getData('value', [
            {
                url: 'https://lorempixel.com/400/300/cats/',
                width: 400,
                height: 300,
            },
        ]).map(function (image, i) {
            return React.createElement(ImageContainer, { size: getData('size', 4), key: image.id || i },
                React.createElement(Image, { className: className, onClick: setActive, width: "100%", value: image }));
        }));
    },
    styles: function (_a) {
        var getData = _a.getData;
        return ({
            float: getData('float', 'none'),
        });
    },
    actions: [
        {
            tooltip: function (getData) { return "Bilder " + (getData('value') ? 'wechseln' : 'wählen'); },
            component: function (_a) {
                var setData = _a.setData, getData = _a.getData, p = __rest(_a, ["setData", "getData"]);
                return React.createElement(SimpleImageEdit, __assign({}, p, { onChange: function (value) { return setData({ value: value }); }, value: getData('value', []), multi: true }));
            },
            toggle: function () { },
        },
        {
            label: React.createElement(FaPlus, null),
            tooltip: 'Spalte hinzufügen',
            toggle: function (_a) {
                var setData = _a.setData, getData = _a.getData;
                var size = getData('size', 4);
                setData({
                    size: size < 8 ? size + 1 : 8,
                });
            },
        },
        {
            label: React.createElement(FaMinus, null),
            tooltip: 'Spalte entfernen',
            toggle: function (_a) {
                var setData = _a.setData, getData = _a.getData;
                var size = getData('size', 4);
                setData({
                    size: size > 1 ? size - 1 : 1,
                });
            },
        },
    ],
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9nYWxsZXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFOUMsSUFBTSxTQUFTLEdBQUcsZUFBZSxDQUMvQixVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUFPLE9BQUEsQ0FBQztRQUNkLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTTtRQUN0QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxNQUFNO1NBQ2pCO1FBQ0QsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0FBUGEsQ0FPYixFQUNGLEtBQUssRUFDTCxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsZUFBZSxDQUNwQyxVQUFDLEVBQWU7UUFBYixnQkFBSyxFQUFFLGNBQUk7SUFDWixJQUFNLEtBQUssR0FBRztRQUNaLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTTtRQUMxQixhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU07UUFDM0IsS0FBSyxFQUFFLE1BQU07UUFDYixLQUFLLEVBQUssR0FBRyxHQUFHLElBQUksTUFBRztRQUN2QixRQUFRLEVBQUssR0FBRyxHQUFHLElBQUksTUFBRztRQUMxQixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsTUFBTTtTQUNoQjtLQUNGLENBQUM7SUFDRixLQUFLLENBQUMsZ0JBQWMsSUFBSSxPQUFJLENBQUMsR0FBRyxFQUFFLFlBQVks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QkFDOUIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltYWdlLCBTaW1wbGVJbWFnZUVkaXQgfSBmcm9tICdvbHltcC1jbG91ZGluYXJ5JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRmFQbHVzLCBGYU1pbnVzIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuXG5jb25zdCBDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZ1k6IHRoZW1lLnNwYWNlMyxcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIH0sXG4gICAgY2xlYXJmaXg6IHRydWUsXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBzaXplIH0pID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2UzLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2UzLFxuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgIHdpZHRoOiBgJHsxMDAgLyBzaXplfSVgLFxuICAgICAgbWluV2lkdGg6IGAkezEwMCAvIHNpemV9JWAsXG4gICAgICBoYXNGbGV4OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBzdHlsZVtgOm50aC1jaGlsZCgke3NpemV9bilgXSA9IHsgcGFkZGluZ1JpZ2h0OiAwIH07XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH0sXG4gICdkaXYnLFxuICAoeyBzaXplLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGtleTogJ1BhZ2VzLk1lZGlhLkdhbGxlcnknLFxuICBsYWJlbDogJ0dhbGVyaWUnLFxuICBjYXRlZ29yeTogJ01lZGllbicsXG4gIGNvbXBvbmVudDogKHsgZ2V0RGF0YSwgc2V0QWN0aXZlLCBjbGFzc05hbWUsIGF0dHJpYnV0ZXMgfSkgPT5cbiAgICA8Q29udGFpbmVyIHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIHtnZXREYXRhKCd2YWx1ZScsIFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbG9yZW1waXhlbC5jb20vNDAwLzMwMC9jYXRzLycsXG4gICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgfSxcbiAgICAgIF0pLm1hcCgoaW1hZ2UsIGkpID0+XG4gICAgICAgIDxJbWFnZUNvbnRhaW5lciBzaXplPXtnZXREYXRhKCdzaXplJywgNCl9IGtleT17aW1hZ2UuaWQgfHwgaX0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFjdGl2ZX1cbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICB2YWx1ZT17aW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9Db250YWluZXI+LFxuICBzdHlsZXM6ICh7IGdldERhdGEgfSkgPT4gKHtcbiAgICBmbG9hdDogZ2V0RGF0YSgnZmxvYXQnLCAnbm9uZScpLFxuICB9KSxcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIHRvb2x0aXA6IGdldERhdGEgPT4gYEJpbGRlciAke2dldERhdGEoJ3ZhbHVlJykgPyAnd2VjaHNlbG4nIDogJ3fDpGhsZW4nfWAsXG4gICAgICBjb21wb25lbnQ6ICh7IHNldERhdGEsIGdldERhdGEsIC4uLnAgfSkgPT5cbiAgICAgICAgPFNpbXBsZUltYWdlRWRpdFxuICAgICAgICAgIHsuLi5wfVxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXREYXRhKHsgdmFsdWUgfSl9XG4gICAgICAgICAgdmFsdWU9e2dldERhdGEoJ3ZhbHVlJywgW10pfVxuICAgICAgICAgIG11bHRpXG4gICAgICAgIC8+LFxuICAgICAgdG9nZ2xlOiAoKSA9PiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFQbHVzIC8+LFxuICAgICAgdG9vbHRpcDogJ1NwYWx0ZSBoaW56dWbDvGdlbicsXG4gICAgICB0b2dnbGU6ICh7IHNldERhdGEsIGdldERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBzaXplID0gZ2V0RGF0YSgnc2l6ZScsIDQpO1xuICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICBzaXplOiBzaXplIDwgOCA/IHNpemUgKyAxIDogOCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IDxGYU1pbnVzIC8+LFxuICAgICAgdG9vbHRpcDogJ1NwYWx0ZSBlbnRmZXJuZW4nLFxuICAgICAgdG9nZ2xlOiAoeyBzZXREYXRhLCBnZXREYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdldERhdGEoJ3NpemUnLCA0KTtcbiAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgc2l6ZTogc2l6ZSA+IDEgPyBzaXplIC0gMSA6IDEsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==

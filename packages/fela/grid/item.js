var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
var GridItem = createComponent(function (_a) {
    var gridSize = _a.gridSize, offsetMini = _a.offsetMini, offsetSmall = _a.offsetSmall, offsetMedium = _a.offsetMedium, offsetLarge = _a.offsetLarge, offsetHuge = _a.offsetHuge, mini = _a.mini, small = _a.small, medium = _a.medium, large = _a.large, huge = _a.huge, paddingMini = _a.paddingMini, paddingSmall = _a.paddingSmall, paddingMedium = _a.paddingMedium, paddingLarge = _a.paddingLarge, paddingHuge = _a.paddingHuge, height = _a.height;
    return ({
        float: 'left',
        height: height,
        width: 100 / gridSize * (mini || gridSize) + "%",
        marginLeft: 100 / gridSize * (offsetMini || 0) + "%",
        ifMini: {
            display: (mini === 0 || mini === false) && 'none',
            padding: paddingMini,
        },
        ifSmall: {
            display: (small === 0 || small === false) && 'none',
            padding: paddingSmall || paddingMini,
        },
        ifSmallUp: small
            ? {
                width: 100 / gridSize * small + "%",
                marginLeft: 100 / gridSize * (offsetSmall || 0) + "%",
            }
            : {},
        ifMedium: {
            display: (medium === 0 || medium === false) && 'none',
            padding: paddingMedium || paddingSmall || paddingMini,
        },
        ifMediumUp: medium
            ? {
                width: 100 / gridSize * medium + "%",
                marginLeft: 100 / gridSize * (offsetMedium || 0) + "%",
            }
            : {},
        ifLarge: {
            display: (large === 0 || large === false) && 'none',
            padding: paddingLarge || paddingMedium || paddingSmall || paddingMini,
        },
        ifLargeUp: large
            ? {
                width: 100 / gridSize * large + "%",
                marginLeft: 100 / gridSize * (offsetLarge || 0) + "%",
            }
            : {},
        ifHuge: {
            display: (huge === 0 || huge === false) && 'none',
            padding: paddingHuge ||
                paddingLarge ||
                paddingMedium ||
                paddingSmall ||
                paddingMini,
        },
        ifHugeUp: huge
            ? {
                width: 100 / gridSize * huge + "%",
                marginLeft: 100 / gridSize * (offsetHuge || 0) + "%",
            }
            : {},
    });
}, 'div', function (_a) {
    var gridSize = _a.gridSize, offsetMini = _a.offsetMini, offsetSmall = _a.offsetSmall, offsetMedium = _a.offsetMedium, offsetLarge = _a.offsetLarge, offsetHuge = _a.offsetHuge, mini = _a.mini, small = _a.small, medium = _a.medium, large = _a.large, huge = _a.huge, paddingMini = _a.paddingMini, paddingSmall = _a.paddingSmall, paddingMedium = _a.paddingMedium, paddingLarge = _a.paddingLarge, paddingHuge = _a.paddingHuge, height = _a.height, p = __rest(_a, ["gridSize", "offsetMini", "offsetSmall", "offsetMedium", "offsetLarge", "offsetHuge", "mini", "small", "medium", "large", "huge", "paddingMini", "paddingSmall", "paddingMedium", "paddingLarge", "paddingHuge", "height"]);
    return Object.keys(p);
});
GridItem.propTypes = {
    gridSize: PropTypes.number,
    mini: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    huge: PropTypes.number,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
GridItem.defaultProps = {
    gridSize: 12,
    offsetMini: 0,
    offsetSmall: 0,
    offsetMedium: 0,
    offsetLarge: 0,
    offsetHuge: 0,
    mini: undefined,
    small: undefined,
    medium: undefined,
    large: undefined,
    huge: undefined,
    height: undefined,
};
GridItem.displayName = 'GridItem';
export default GridItem;
//# sourceMappingURL=item.js.map
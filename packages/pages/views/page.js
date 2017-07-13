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
import { object, func, bool } from 'prop-types';
import { withBlockTypes } from 'olymp-slate';
import { queryPage } from '../gql';
import { mapProps } from 'recompose';
var Page = withBlockTypes(function (props) {
    return isLoading = { props: .isLoading } >
        __assign({}, props);
}, showUndo, key = { props: .id + (props.bindingId || '') } >
    { props: .children }
    < /SlateMate>
    < /ContentLoader>));
Page.propTypes = {
    item: object,
    onChange: func,
    readOnly: bool,
};
Page.defaultProps = {
    item: {},
    readOnly: true,
};
Page.WithData = queryPage(mapProps(function (_a) {
    var item = _a.item, data = _a.data, rest = __rest(_a, ["item", "data"]);
    return (__assign({ value: item && item.blocks, isLoading: data.loading, item: item }, rest));
})(Page));
export default Page;
//# sourceMappingURL=page.js.map
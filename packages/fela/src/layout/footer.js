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
import WithContainer from './with-container';
var Footer = createComponent(function () { return ({
    flex: 'none',
}); }, WithContainer, function (_a) {
    var affix = _a.affix, p = __rest(_a, ["affix"]);
    return Object.keys(p);
});
Footer.displayName = 'Layout.Footer';
Footer.propTypes = {
    container: PropTypes.bool,
};
Footer.defaultProps = {
    container: false,
};
export default Footer;
//# sourceMappingURL=footer.js.map
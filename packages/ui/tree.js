import { Tree as AntTree } from 'antd';
import { createComponent } from 'olymp-fela';
var Tree = createComponent(function () { return ({
    paddingRight: 8,
    paddingLeft: 13,
    paddingY: 0,
    '& .anticon': {
        marginLeft: 3,
    },
    '& li': {
        padding: 0,
        paddingTop: '0.7rem !important',
        '> .ant-tree-switcher': {
            position: 'absolute',
            onAfter: {
                left: -8,
                top: 2,
                position: 'absolute',
            },
        },
        '> .ant-tree-node-content-wrapper': {
            width: '100%',
            paddingLeft: 10,
        },
    },
}); }, AntTree, function (p) { return Object.keys(p); });
Tree.Title = createComponent(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return ({
        display: 'flex',
        '> a:first-child': {
            flex: '1 1 0%',
        },
        '> a': {
            color: disabled ? theme.dark3 : theme.dark1,
        },
    });
}, function (_a) {
    var className = _a.className, children = _a.children;
    return className = { className: className } >
        { children: children }
        < /span>),;
}, function (p) { return Object.keys(p); });
Tree.Node = AntTree.TreeNode;
export default Tree;
//# sourceMappingURL=tree.js.map
import { createBlockList } from 'olymp-slate';
import Image from './image';
import Label from './label';
export default {
    key: 'Pages.Media.ImageBlock',
    defaultNodes: function () { return createBlockList([Image, Label]); },
    label: 'Bild mit Text',
    category: 'Medien',
    editable: true,
    component: function (_a) {
        var className = _a.className, children = _a.children, attributes = _a.attributes;
        return className;
    }
};
{
    className;
}
{
    attributes;
}
 > { children: children } < /div>,;
;
//# sourceMappingURL=block.js.map
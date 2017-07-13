import React from 'react';
import { Cloudinary } from 'olymp-cloudinary';
import { Modal } from 'olymp-fela';
import { withState } from 'recompose';
var transform = function (_a) {
    var id = _a.id, url = _a.url, crop = _a.crop, width = _a.width, height = _a.height, caption = _a.caption, source = _a.source;
    return ({
        id: id,
        url: url,
        crop: crop,
        width: width,
        height: height,
        caption: caption,
        source: source,
    });
};
export default function (renderFn) {
    return withState('isOpen', 'setOpen', false)(function (_a) {
        var onChange = _a.onChange, value = _a.value, isOpen = _a.isOpen, setOpen = _a.setOpen, multi = _a.multi;
        var v = [];
        if (!multi && value) {
            v = [value];
        }
        if (multi && value) {
            v = value;
        }
        return (React.createElement("div", { onClick: function () { return setOpen(true); } },
            renderFn(v),
            React.createElement(Modal, { open: isOpen, onClose: function () { return setOpen(false); } },
                React.createElement(Cloudinary, { multi: multi, onSelect: onChange ? function (value) {
                        if (value === void 0) { value = []; }
                        var v = value.map(transform);
                        onChange(multi ? v : v[0]);
                        setOpen(false);
                    } : undefined, onClose: function () { return setOpen(false); }, selected: v.map(function (_a) {
                        var id = _a.id, crop = _a.crop;
                        return ({ id: id, crop: crop });
                    }) }))));
    });
};
//# sourceMappingURL=edit.js.map
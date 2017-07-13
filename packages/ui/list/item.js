import { createComponent } from 'olymp-fela';
var ImgContainer = createComponent(function (_a) {
    var disabled = _a.disabled;
    return ({
        marginRight: 8,
        maxWidth: 37,
        maxHeight: 37,
        opacity: disabled ? 0.667 : 1,
        overflow: 'hidden',
        '> *': {
            margin: '0 auto',
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var Content = createComponent(function (_a) {
    var active = _a.active, disabled = _a.disabled, theme = _a.theme;
    return ({
        display: 'flex',
        alignItems: 'center',
        padding: '5px 6px',
        width: '100%',
        minHeight: 51,
        color: disabled ? theme.dark3 : theme.dark1,
        background: active && 'rgba(0, 0, 0, 0.03)',
        lineHeight: '20px',
        borderBottom: '1px solid rgb(233, 233, 233)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        '> img': {
            marginRight: 8,
            width: 37,
            height: 37,
            borderRadius: 500,
            opacity: disabled ? 0.667 : 1,
        },
        '> div': {
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
        },
        onHover: !active &&
            !disabled && {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            color: 'rgba(0, 0, 0, 0.85)',
        },
        onActive: {
            color: 'rgba(0, 0, 0, 0.85)',
        },
        onFocus: {
            color: 'rgba(0, 0, 0, 0.85)',
            boxShadow: '0 0 3px 1px rgba(63, 81, 181, 0.19)',
        },
    });
}, function (_a) {
    var image = _a.image, label = _a.label, description = _a.description, className = _a.className, disabled = _a.disabled, icon = _a.icon;
    return className = { className: className } >
        { image:  &&
                { image:  &&
                        typeof image === 'string' &&
                        src } };
}, { image: image }, width = { 37:  }, height = { 37:  } /  > );
{
    image && typeof image !== 'string' && image;
}
/ImgContainer>}
    < div >
    { label: label }
    < /strong>;
{
    description;
}
/div>;
{
    !disabled ? type :  = { icon:  || 'right' } /  > ;
    null;
}
/div>),;
(function (p) { return Object.keys(p); });
;
export default function (_a) {
    var className = _a.className, image = _a.image, label = _a.label, description = _a.description, to = _a.to, onClick = _a.onClick, active = _a.active, disabled = _a.disabled, icon = _a.icon;
    return onClick || disabled
        ? className :  = { className: className };
};
href = "javascript:;";
onClick = { disabled: function () { } };
{ }
onClick;
    >
        image;
{
    image;
}
label = { label: label };
description = { description: description };
active = { active: active };
disabled = { disabled: disabled };
icon = { icon: icon }
    /  >
    /a>;
className;
{
    className;
}
to = { to: to };
disabled = { disabled: disabled } >
    image;
{
    image;
}
label = { label: label };
description = { description: description };
active = { active: active };
disabled = { disabled: disabled };
icon = { icon: icon }
    /  >
    /Link>;;
//# sourceMappingURL=item.js.map
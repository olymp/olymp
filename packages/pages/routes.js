var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { createComponent, } from 'olymp-fela';
import { Error404 } from './views';
import { lowerFirst } from 'lodash';
var Button = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: theme.borderRadius,
        opacity: 0.85,
        margin: '0 -15px',
        onHover: {
            opacity: 1,
            backgroundColor: theme.color + " !important",
            color: theme.light + " !important",
        },
    });
}, function (p) { return (__assign({}, p) /  > ); }, function (p) { return Object.keys(p); });
var renderGateway = function (_a, _b) {
    var _c = _a === void 0 ? {} : _a, auth = _c.auth, pathname = _c.pathname, collectionList = _c.collectionList, query = _c.query;
    var _d = _b === void 0 ? {} : _b, binding = _d.binding, bindingId = _d.bindingId;
    if (!auth.user) {
        return null;
    }
    var deviceWidth = query['@deviceWidth'];
    var isEditPage = query['@page'] !== undefined;
    var hasBinding = binding && binding.type;
    return into = "quick" >
        title;
    {
        type;
        "primary" >
            type;
        "plus";
        style = {};
        {
            marginRight: 0;
        }
    }
    />
        < /Button>;
};
    >
        key;
"page-plus" >
    to;
{
    {
        pathname,
            query;
        {
            query, '@page';
            'new';
        }
    }
}
    >
        type;
"plus";
style = {};
{
    marginRight: 0;
}
/> Seite
    < /Link>
    < /Menu.Item>;
{
    collectionList.map(function (collection) {
        return key = (_a = ["@", ""], _a.raw = ["@", ""], {}(_a, collection.name.toLowerCase()));
        var _a;
    });
}
 >
    to;
{
    {
        query: {
            ["@" + collection.name.toLowerCase()];
            null,
            ;
        }
    }
}
    >
        type;
"plus";
style = {};
{
    marginRight: 0;
}
/> {get(collection, 'decorators.label.value', collection.name)}
    < /Link>
    < /Menu.Item>);
/Menu.SubMenu>;
{
    hasBinding &&
        key;
    "save" >
        to;
    {
        {
            pathname,
                query;
            {
                ["@" + lowerFirst(binding.type)];
                bindingId;
            }
        }
    }
        >
            type;
    "primary" >
        { binding: .type };
    bearbeiten;
    {
        ' ';
    }
    type;
    "arrow-right";
    style = {};
    {
        marginRight: 0;
    }
}
/>
    < /Button>
    < /Link>
    < /Menu.Item>};
{
    !isEditPage &&
        !hasBinding &&
        key;
    "@page" >
        to;
    {
        {
            query: {
                '@page';
                null, '@deviceWidth';
                deviceWidth;
            }
        }
    }
        >
            type;
    "primary" >
        Seite;
    bearbeiten;
    {
        ' ';
    }
    type;
    "arrow-right";
    style = {};
    {
        marginRight: 0;
    }
}
/>
    < /Button>
    < /Link>
    < /Menu.Item>}
    < /Gateway>;
;
;
export var EditablePageRoute = function (props) {
    var Wrapped = props.Wrapped, flatNavigation = props.flatNavigation, query = props.query, pathname = props.pathname, loading = props.loading;
    var match = flatNavigation.find(function (item) { return pathname === item.pathname; });
    var _a = match || {}, id = _a.id, binding = _a.binding, pageId = _a.pageId, aliasId = _a.aliasId, bindingId = _a.bindingId;
    var deviceWidth = query['@deviceWidth'];
    if (!match) {
        return height = { 600:  };
        isLoading = { loading: loading } >
            __assign({}, props);
        deviceWidth = { deviceWidth: deviceWidth };
        render = { match: function () {
                return disabled = {};
            }, deviceWidth: deviceWidth } >
            __assign({}, props) >
            {}
            < Error404 /  >
            /Wrapped>
            < /IFrame>)}
                /  >
            /ContentLoader>;
    }
};
;
return height = { 600:  };
isLoading = { loading: loading } >
    __assign({}, props);
deviceWidth = { deviceWidth: deviceWidth };
id = { pageId:  || aliasId || id };
bindingId = { bindingId: bindingId };
binding = { binding: binding };
render = { children: function () {
        return disabled = {};
    }, deviceWidth: deviceWidth } >
    __assign({}, props);
match = { match: match } >
    {};
{
    renderGateway(props, match);
}
{
    children;
}
/Wrapped>
    < /IFrame>)}
        /  >
    /ContentLoader>;
;
;
export var PageRoute = function (props) {
    var Wrapped = props.Wrapped, flatNavigation = props.flatNavigation, pathname = props.pathname, loading = props.loading;
    var match = flatNavigation.find(function (item) { return pathname === item.pathname; });
    var _a = match || {}, id = _a.id, binding = _a.binding, pageId = _a.pageId, aliasId = _a.aliasId, bindingId = _a.bindingId;
    return __assign({}, props);
    match = { match: match } >
        {};
    {
        renderGateway(props, match);
    }
    height;
    {
        600;
    }
    isLoading = { loading: loading } >
        __assign({ match: function () { } }, props);
    key = { id: id };
    id = { pageId:  || aliasId || id };
    bindingId = { bindingId: bindingId };
    binding = { binding: binding }
        /  >
    ;
};
/>}
    < /PageTransition>
    < /ContentLoader>
    < /Wrapped>;
;
;
//# sourceMappingURL=routes.js.map
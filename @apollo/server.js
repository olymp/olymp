"use strict";
var react_1 = require('react');
var ReactDOM = require('react-dom/server');
var assign = require('object-assign');
var flatten = require('lodash.flatten');
function getPropsFromChild(child) {
    var props = child.props, type = child.type;
    var ownProps = assign({}, props);
    if (type && type.defaultProps)
        ownProps = assign({}, type.defaultProps, props);
    return ownProps;
}
exports.getPropsFromChild = getPropsFromChild;
function getChildFromComponent(component) {
    if (component && component.render)
        return component.render();
    return component;
}
exports.getChildFromComponent = getChildFromComponent;
var contextStore = {};
function getQueriesFromTree(_a, fetch) {
    var component = _a.component, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.queries, queries = _c === void 0 ? [] : _c;
    if (fetch === void 0) { fetch = true; }
    contextStore = assign({}, contextStore, context);
    if (!component)
        return;
    if (typeof component === 'function')
        component = { type: component };
    var type = component.type, props = component.props;
    if (typeof type === 'function') {
        var ComponentClass = type;
        var ownProps = getPropsFromChild(component);
        var Component_1 = new ComponentClass(ownProps, context);
        try {
            Component_1.props = ownProps;
            Component_1.context = context;
            Component_1.setState = function (newState) {
                Component_1.state = assign({}, Component_1.state, newState);
            };
        }
        catch (e) { }
        if (Component_1.componentWillMount)
            Component_1.componentWillMount();
        var newContext = context;
        if (Component_1.getChildContext)
            newContext = assign({}, context, Component_1.getChildContext());
        if (typeof type.fetchData === 'function' && fetch) {
            var query = type.fetchData(ownProps, newContext);
            console.log('QUERIES', component.type.displayName, !!query);
            
            if (query)
                queries.push({ query: query, component: component });
        }
        getQueriesFromTree({
            component: getChildFromComponent(Component_1),
            context: newContext,
            queries: queries,
        });
    }
    else if (props && props.children) {
        react_1.Children.forEach(props.children, function (child) { return getQueriesFromTree({
            component: child,
            context: context,
            queries: queries,
        }); });
    }
    return { queries: queries, context: contextStore };
}
function getDataFromTree(app, ctx, fetch) {
    if (ctx === void 0) { ctx = {}; }
    if (fetch === void 0) { fetch = true; }
    contextStore = {};
    var _a = getQueriesFromTree({ component: app, context: ctx }, fetch), context = _a.context, queries = _a.queries;
    contextStore = {};
    if (!queries.length)
        return Promise.resolve(context);
    var mappedQueries = flatten(queries).map(function (y) { return y.query.then(function (x) { return y; }); });
    return Promise.all(mappedQueries)
        .then(function (trees) { return Promise.all(trees.filter(function (x) { return !!x; }).map(function (x) {
        return getDataFromTree(x.component, context, false);
    })); })
        .then(function () { return (context); });
}
exports.getDataFromTree = getDataFromTree;
function renderToStringWithData(renderInApollo, currentState, pass) {
    console.log('render pass', pass || 1);
    const ROOT_QUERY = currentState && currentState.ROOT_QUERY;
    const component = renderInApollo(currentState ? { apollo: { data: currentState } } : null);
    return getDataFromTree(component).then(function (_a) {
        var client = _a.client;
        var markup = ReactDOM.renderToString(component);
        var apolloState = client.store.getState().apollo.data;
        console.log(ROOT_QUERY);
        if (ROOT_QUERY) console.log(Object.keys(apolloState.ROOT_QUERY).length, Object.keys(ROOT_QUERY).length);
        if (!ROOT_QUERY || Object.keys(apolloState.ROOT_QUERY).length !== Object.keys(ROOT_QUERY).length) 
            return renderToStringWithData(renderInApollo, apolloState, (pass || 1) + 1);
        return { markup: markup, initialState: apolloState };
    });
    }
exports.renderToStringWithData = renderToStringWithData;
//# sourceMappingURL=server.js.map
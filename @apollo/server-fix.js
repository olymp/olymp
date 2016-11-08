"use strict";
var react_1 = require('react');
var ReactDOM = require('react-dom/server');
var assign = require('object-assign');
function walkTree(element, context, visitor) {
    var shouldContinue = visitor(element, context);
    if (shouldContinue === false) {
        return;
    }
    var Component = element.type;
    if (typeof Component === 'function') {
        var props = assign({}, Component.defaultProps, element.props);
        var childContext = context;
        var child = void 0;
        if (Component.prototype && Component.prototype.isReactComponent) {
            var instance_1 = new Component(props, context);
            instance_1.props = props;
            instance_1.context = context;
            instance_1.setState = function (newState) {
                instance_1.state = assign({}, instance_1.state, newState);
            };
            if (instance_1.componentWillMount) {
                instance_1.componentWillMount();
            }
            if (instance_1.getChildContext) {
                childContext = assign({}, context, instance_1.getChildContext());
            }
            child = instance_1.render();
        }
        else {
            child = Component(props, context);
        }
        if (child) walkTree(child, childContext, visitor);
    }
    else {
        if (element.props && element.props.children) {
            react_1.Children.forEach(element.props.children, function (child) {
              if (child) walkTree(child, context, visitor);
            });
        }
    }
}
exports.walkTree = walkTree;
function getQueriesFromTree(_a, fetchRoot) {
    var rootElement = _a.rootElement, _b = _a.rootContext, rootContext = _b === void 0 ? {} : _b;
    if (fetchRoot === void 0) { fetchRoot = true; }
    var queries = [];
    walkTree(rootElement, rootContext, function (element, context) {
        var Component = element.type || element;
        var skipRoot = !fetchRoot && (element === rootElement);
        if (typeof Component.fetchData === 'function' && !skipRoot) {
            var props = assign({}, Component.defaultProps, element.props);
            var query = Component.fetchData(props, context);
            if (query) {
                queries.push({ query: query, element: element, context: context });
                return false;
            }
        }
    });
    return queries;
}
function getDataFromTree(rootElement, rootContext, fetchRoot) {
    if (rootContext === void 0) { rootContext = {}; }
    if (fetchRoot === void 0) { fetchRoot = true; }
    var queries = getQueriesFromTree({ rootElement: rootElement, rootContext: rootContext }, fetchRoot);
    if (!queries.length)
        return Promise.resolve();
    var mappedQueries = queries.map(function (_a) {
        var query = _a.query, element = _a.element, context = _a.context;
        return query.then(function (_) { return getDataFromTree(element, context, false); });
    });
    return Promise.all(mappedQueries).then(function (_) { return null; });
}
exports.getDataFromTree = getDataFromTree;
function renderToStringWithData(component) {
    return getDataFromTree(component)
        .then(function () { return ReactDOM.renderToString(component); });
}
exports.renderToStringWithData = renderToStringWithData;
function cleanupApolloState(apolloState) {
    for (var queryId in apolloState.queries) {
        var fieldsToNotShip = ['minimizedQuery', 'minimizedQueryString'];
        for (var _i = 0, fieldsToNotShip_1 = fieldsToNotShip; _i < fieldsToNotShip_1.length; _i++) {
            var field = fieldsToNotShip_1[_i];
            delete apolloState.queries[queryId][field];
        }
    }
}
exports.cleanupApolloState = cleanupApolloState;
//# sourceMappingURL=server.js.map
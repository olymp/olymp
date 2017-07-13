var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { graphql } from 'react-apollo';
import { onSuccess, onError } from 'olymp-ui';
import { omit } from 'olymp';
import { lowerFirst } from 'lodash';
import gql from 'graphql-tag';
var ok = function (props) { return function () {
    var form = props.form, item = props.item, router = props.router, query = props.query, pathname = props.pathname, mutate = props.mutate, typeName = props.typeName;
    form.validateFields(function (err, values) {
        if (err) {
            return onError(err);
        }
        mutate({
            variables: {
                id: item && item.id,
                input: omit(values),
            },
            updateQueries: !item || !item.id
                ? (_a = {},
                    _a[typeName.toLowerCase() + "List"] = function (prev, _a) {
                        var mutationResult = _a.mutationResult;
                        return (__assign({}, prev, { items: [mutationResult.data.item].concat(prev.items) }));
                    },
                    _a) : undefined,
        })
            .then(function (_a) {
            var item = _a.data.item;
            onSuccess('Gespeichert');
            form.resetFields();
            router.push({
                pathname: pathname,
                query: __assign({}, query, (_b = {}, _b["@" + lowerFirst(typeName)] = item.id, _b)),
            });
            var _b;
        })
            .catch(onError);
        var _a;
    });
}; };
var clone = function (props) { return function () {
    var form = props.form, item = props.item, router = props.router, query = props.query, pathname = props.pathname, mutate = props.mutate, typeName = props.typeName;
    var cloneItem = omit(item);
    delete cloneItem.id;
    mutate({
        variables: {
            input: cloneItem,
        },
        updateQueries: (_a = {},
            _a[typeName.toLowerCase() + "List"] = function (prev, _a) {
                var mutationResult = _a.mutationResult;
                return (__assign({}, prev, { items: [mutationResult.data.item].concat(prev.items) }));
            },
            _a)
    })
        .then(function (_a) {
        var item = _a.data.item;
        onSuccess('Kopiert');
        form.resetFields();
        router.push({
            pathname: pathname,
            query: __assign({}, query, (_b = {}, _b["@" + lowerFirst(typeName)] = item.id, _b)),
        });
        var _b;
    })
        .catch(onError);
    var _a;
}; };
var del = function (props) { return function () {
    var form = props.form, item = props.item, router = props.router, query = props.query, pathname = props.pathname, mutate = props.mutate, typeName = props.typeName;
    return mutate({
        variables: {
            id: item && item.id,
            type: 'REMOVE',
        },
        updateQueries: (_a = {},
            _a[typeName.toLowerCase() + "List"] = function (prev) { return (__assign({}, prev, { items: prev.items.filter(function (x) { return x.id !== item.id; }) })); },
            _a),
    })
        .then(function (_a) {
        var data = _a.data;
        onSuccess('Gelöscht');
        form.resetFields();
        router.push({
            pathname: pathname,
            query: __assign({}, query, (_b = {}, _b["@" + lowerFirst(typeName)] = null, _b)),
        });
        var _b;
    })
        .catch(onError);
    var _a;
}; };
export default function (WrappedComponent) {
    var cache = {};
    var bound = function (_a) {
        var typeName = _a.typeName, fieldNames = _a.fieldNames;
        var mutation = graphql((_b = ["\n    mutation ", "($id: String, $input: ", "Input, $type: MUTATION_TYPE) {\n      item: ", "(id: $id, input: $input, type: $type) {\n        ", "\n      }\n    }\n  "], _b.raw = ["\n    mutation ",
            "($id: String, $input: ", "Input, $type: MUTATION_TYPE) {\n      item: ", "(id: $id, input: $input, type: $type) {\n        ", "\n      }\n    }\n  "], gql(_b, lowerFirst(typeName), typeName, lowerFirst(typeName), fieldNames)));
        var query = graphql((_c = ["\n      query ", "($id: String!) {\n        item: ", "(query: { id: {eq: $id} }) {\n          ", "\n        }\n      }\n    "], _c.raw = ["\n      query ", "($id: String!) {\n        item: ", "(query: { id: {eq: $id} }) {\n          ", "\n        }\n      }\n    "], gql(_c, lowerFirst(typeName), lowerFirst(typeName), fieldNames)), {
            props: function (_a) {
                var ownProps = _a.ownProps, data = _a.data;
                return (__assign({}, ownProps, { item: data.item }));
            },
            options: function (_a) {
                var id = _a.id;
                return ({
                    fetchPolicy: !id ? 'cache-only' : undefined,
                    variables: {
                        id: id,
                    },
                });
            },
        });
        return query(mutation(function (props) {
            return React.createElement(WrappedComponent, __assign({}, props, { x: props.form, onSave: ok(props), onClone: clone(props), onDelete: del(props) }));
        }));
        var _b, _c;
    };
    return function (props) {
        if (props.typeName && props.fieldNames && props.collection) {
            var name = props.typeName + "|" + props.fieldNames;
            var Bound = cache[name] || bound(props);
            cache[name] = Bound;
            return React.createElement(Bound, __assign({}, props));
        }
        return null;
    };
};
//# sourceMappingURL=with-item.js.map
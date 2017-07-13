var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withApollo, graphql } from 'react-apollo';
import capitalize from 'lodash/upperFirst';
import gql from 'graphql-tag';
var imageFields = "\n  id\n  url\n  crop\n  width\n  height\n  caption\n  source\n";
var userFields = "\n  id\n  email\n  token\n  name\n";
export default function (WrappedComponent) {
    var WithCollectionComponent = (function (_super) {
        __extends(WithCollectionComponent, _super);
        function WithCollectionComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getAttributes = function (col) {
                var collection = col ||
                    (_this.props.data && _this.props.data.type) ||
                    _this.props.collection ||
                    null;
                return "" + collection.fields
                    .map(function (field) {
                    if (field.type.kind === 'NON_NULL')
                        field = __assign({}, field, { type: field.type.ofType });
                    if (field.type.kind === 'ENUM' || field.type.kind === 'SCALAR')
                        return field.name;
                    else if (field.type.kind === 'LIST' &&
                        field.type.ofType &&
                        (field.type.ofType.kind === 'ENUM' ||
                            field.type.ofType.kind === 'SCALAR'))
                        return field.name;
                    else if (field.type.kind === 'LIST' &&
                        field.type.ofType &&
                        field.type.ofType.kind === 'OBJECT' &&
                        field.type.ofType.fields)
                        return field.name + " { " + _this.getAttributes({
                            fields: field.type.ofType.fields,
                        }) + " }";
                    else if (field.type.kind === 'OBJECT' && field.type.name === 'Image')
                        return field.name + " { " + imageFields + " }";
                    else if (field.type.kind === 'OBJECT' && field.type.name === 'User')
                        return field.name + " { " + userFields + " }";
                    else if (field.type.kind === 'OBJECT' && field.type.fields)
                        return field.name + " { " + _this.getAttributes({
                            fields: field.type.fields,
                        }) + " }";
                    return field.name + " { id, name }";
                })
                    .filter(function (x) { return x; })
                    .join(', ');
            };
            _this.getWithSpecialFields = function (collection) {
                if (!collection)
                    return;
                var specialFields = {};
                var fields = collection.fields.map(function (item) {
                    var field = __assign({}, item, { '@': {} });
                    if (!field.description)
                        return field;
                    field.description.replace(/\@\w+(\[[0-9]+\])?(\(.+\))?/gi, function (match, text, urlId) {
                        if (!match)
                            return;
                        var _a = match.split('('), split0 = _a[0], values = _a[1];
                        var _b = split0.split('['), name = _b[0], _c = _b[1], index = _c === void 0 ? null : _c;
                        name = name.substr(1);
                        if (index) {
                            try {
                                index = parseInt(index.substr(index, index.length - 1));
                            }
                            catch (err) {
                                index = null;
                            }
                        }
                        var specialValues = {};
                        try {
                            values.substr(0, values.length - 1).split(',').forEach(function (x, i) {
                                specialValues["arg" + i] = JSON.parse(x);
                            });
                        }
                        catch (err) { }
                        field['@'][name] = specialValues;
                        var specialField = __assign({}, specialValues, { field: field.name });
                        if (index || index === 0) {
                            if (!specialFields[name])
                                specialFields[name] = [];
                            specialFields[name].splice(index >= specialFields[name].length
                                ? specialFields[name].length
                                : index, 0, specialField);
                        }
                        else {
                            specialFields[name] = specialField;
                        }
                    });
                    return field;
                });
                return __assign({}, collection, { fields: fields, specialFields: specialFields });
            };
            return _this;
        }
        WithCollectionComponent.prototype.render = function () {
            var _a = this.props, data = _a.data, rest = __rest(_a, ["data"]);
            var collection = (this.props.data && this.props.data.type) ||
                this.props.collection ||
                null;
            return (React.createElement(WrappedComponent, __assign({}, rest, { collection: collection && this.getWithSpecialFields(collection), fieldNames: collection && this.getAttributes() })));
        };
        WithCollectionComponent.propTypes = {
            client: PropTypes.object,
            fieldNames: PropTypes.string,
            typeName: PropTypes.string,
            includeStamps: PropTypes.bool,
        };
        WithCollectionComponent = __decorate([
            withApollo,
            graphql((_a = ["\n      query getType($name: String!) {\n        type: __type(name: $name) {\n          name\n          description\n          fields {\n            description\n            name\n            type {\n              description\n              kind\n              name\n              enumValues {\n                name\n              }\n              fields {\n                description\n                name\n                type {\n                  description\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n              ofType {\n                description\n                kind\n                name\n                fields {\n                  description\n                  name\n                  type {\n                    description\n                    kind\n                    name\n                    fields {\n                      description\n                      name\n                      type {\n                        description\n                        kind\n                        name\n                        ofType {\n                          kind\n                          name\n                        }\n                      }\n                    }\n                    ofType {\n                      kind\n                      name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    "], _a.raw = ["\n      query getType($name: String!) {\n        type: __type(name: $name) {\n          name\n          description\n          fields {\n            description\n            name\n            type {\n              description\n              kind\n              name\n              enumValues {\n                name\n              }\n              fields {\n                description\n                name\n                type {\n                  description\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n              ofType {\n                description\n                kind\n                name\n                fields {\n                  description\n                  name\n                  type {\n                    description\n                    kind\n                    name\n                    fields {\n                      description\n                      name\n                      type {\n                        description\n                        kind\n                        name\n                        ofType {\n                          kind\n                          name\n                        }\n                      }\n                    }\n                    ofType {\n                      kind\n                      name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    "], gql(_a)), {
                options: function (_a) {
                    var _b = _a.routeParams, routeParams = _b === void 0 ? {} : _b, collection = _a.collection, typeName = _a.typeName;
                    return ({
                        skip: !!collection,
                        variables: {
                            name: capitalize(routeParams.model || typeName),
                        },
                    });
                },
            })
        ], WithCollectionComponent);
        return WithCollectionComponent;
    }(Component));
    return WithCollectionComponent;
    var _a;
};
//# sourceMappingURL=with-collection.js.map
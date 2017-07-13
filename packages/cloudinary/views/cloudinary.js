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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { isEqual } from 'lodash';
import { SplitView } from 'olymp-ui';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import { Dragzone, Gallery } from '../components';
import ListSidebar from './list';
import SelectionSidebar from './selection';
var CloudinaryView = (function (_super) {
    __extends(CloudinaryView, _super);
    function CloudinaryView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selected: [],
            selection: 0,
            uploading: [],
            search: undefined,
            filter: [],
            filteredItems: null,
        };
        _this.componentWillReceiveProps = function (props) {
            var stateSelected = _this.state.selected;
            var selected = props.selected;
            if (!isEqual(stateSelected.map(function (item) { return item.id; }).sort(), selected.map(function (item) { return item.id; }).sort())) {
                _this.setState({ selected: selected });
            }
        };
        _this.getUploadPops = function () {
            var _a = _this.props, data = _a.data, done = _a.done, refetchKey = _a.refetchKey;
            var uploading = _this.state.uploading;
            var saveProgress = function (file) {
                return _this.setState({
                    uploading: _this.state.uploading.filter(function (x) { return x.name !== file.name; }).concat([
                        {
                            name: file.name,
                            percent: file.percent,
                            size: file.size,
                            status: file.status,
                            response: file.response,
                        },
                    ]),
                });
            };
            if (!data || !data.cloudinaryRequest) {
                return {};
            }
            var _b = data.cloudinaryRequest, apiKey = _b.apiKey, signature = _b.signature, timestamp = _b.timestamp, url = _b.url;
            return {
                showUploadList: false,
                multiple: true,
                data: {
                    api_key: apiKey,
                    signature: signature,
                    timestamp: timestamp,
                },
                action: url,
                onChange: function (_a) {
                    var file = _a.file, fileList = _a.fileList, event = _a.event;
                    if (file.status === 'uploading') {
                        saveProgress(file);
                    }
                    else if (file.status === 'done') {
                        if (uploading.find(function (x) { return x.name === file.name; }) !== file.status) {
                            saveProgress(file);
                            message.success(file.name + " erfolgreich hochgeladen.");
                        }
                        if (!uploading.find(function (file) { return file.percent < 100; })) {
                            uploading.forEach(function (f) {
                                var response = __assign({}, file.response);
                                response.id = response.public_id;
                                done({ id: response.id, token: signature }).then(function (_a) {
                                    var data = _a.data;
                                    _this.setState({
                                        uploading: uploading.filter(function (x) { return x.name !== file.name; }),
                                    });
                                    if (data && data.cloudinaryRequestDone) {
                                        _this.onSelect([
                                            { id: data.cloudinaryRequestDone.id, crop: undefined },
                                        ]);
                                        refetchKey();
                                    }
                                });
                            });
                        }
                    }
                    else if (file.status === 'error') {
                        console.log('error');
                        message.error(file.name + " file upload failed.");
                    }
                },
            };
        };
        _this.onSelect = function (selections, index, e) {
            var _a = _this.props, multi = _a.multi, handleSelection = _a.handleSelection;
            var selected = _this.state.selected.slice();
            selections.forEach(function (_a) {
                var selectionId = _a.id;
                var itemIndex = selected.findIndex(function (_a) {
                    var id = _a.id;
                    return id === selectionId;
                });
                if (itemIndex < 0) {
                    if (multi && e && e.shiftKey) {
                        selected.push({ id: selectionId, crop: undefined });
                    }
                    else {
                        selected = [{ id: selectionId, crop: undefined }];
                    }
                }
                else {
                    selected.splice(itemIndex, 1);
                }
            });
            handleSelection(selected, _this);
        };
        _this.onClick = function (id, i, e) {
            var handleSelection = _this.props.handleSelection;
            var selected = _this.state.selected;
            var index = selected.findIndex(function (_a) {
                var selectedId = _a.id;
                return selectedId === id;
            });
            if (index < 0) {
                _this.setState({ selection: selected.length });
                _this.onSelect([{ id: id, crop: undefined }], i, e);
            }
            else {
                _this.setState({ selection: index });
                handleSelection([{ id: id, crop: undefined }], _this);
            }
        };
        _this.onRemove = function (id) {
            var _a = _this.state, selected = _a.selected, selection = _a.selection;
            var index = selected.findIndex(function (_a) {
                var itemId = _a.id;
                return itemId === id;
            });
            if (index < selection ||
                (index === selection && index === selected.length - 1)) {
                _this.setState({ selection: selection - 1 });
            }
            _this.onSelect([{ id: id, crop: undefined }]);
        };
        return _this;
    }
    CloudinaryView.prototype.render = function () {
        var _this = this;
        var _a = this.props, onClose = _a.onClose, deviceWidth = _a.deviceWidth, format = _a.format, onSelect = _a.onSelect;
        var _b = this.state, selected = _b.selected, search = _b.search, filter = _b.filter, uploading = _b.uploading;
        var selection = this.state.selection >= 0 && this.state.selection < selected.length
            ? this.state.selection
            : 0;
        var items = !format
            ? this.props.items
            : this.props.items.filter(function (x) { return x.format === format; });
        var filteredItems = this.state.filteredItems || items;
        return (React.createElement(SplitView, { deviceWidth: deviceWidth, background: true },
            React.createElement(ListSidebar, { items: items, upload: this.getUploadPops(), onClose: onClose, filter: filter, onFilter: function (filter, filteredItems) {
                    return _this.setState({ filter: filter, filteredItems: filteredItems });
                }, search: search, onSearch: function (search) { return _this.setState({ search: search }); } }),
            React.createElement(Dragzone, __assign({ uploading: uploading, clickable: false }, this.getUploadPops()),
                React.createElement(Gallery, { onClick: this.onClick, onRemove: this.onRemove, selected: selected, items: filteredItems })),
            React.createElement(SelectionSidebar, { items: selected
                    .map(function (x) { return items.find(function (item) { return item.id === x.id; }); })
                    .filter(function (x) { return x; }), activeItem: selected[selection], onClick: function (index) { return _this.setState({ selection: index }); }, onRemove: this.onRemove, onCancel: function () { return _this.onSelect(selected); }, onSelect: onSelect })));
    };
    CloudinaryView = __decorate([
        queryMedias,
        cloudinaryRequest,
        cloudinaryRequestDone
    ], CloudinaryView);
    return CloudinaryView;
}(Component));
CloudinaryView.propTypes = {
    onClose: PropTypes.func,
    handleSelection: PropTypes.func,
    onSelect: PropTypes.func,
    selected: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        crop: PropTypes.arrayOf(PropTypes.number),
    })),
    format: PropTypes.string,
    multi: PropTypes.bool,
};
CloudinaryView.defaultProps = {
    handleSelection: function (selected, x) { return x.setState({ selected: selected }); },
    onSelect: undefined,
    onClose: undefined,
    selected: [],
    items: [],
    multi: true,
    format: undefined,
};
export default CloudinaryView;
//# sourceMappingURL=cloudinary.js.map
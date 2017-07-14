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
import { withRouter } from 'olymp-router';
import { Menu, Icon, Button } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import { withItem } from '../decorators';
import { DetailForm } from '../components';
var getFormSchema = function (_a) {
    var fields = _a.fields;
    return fields.reduce(function (result, field) {
        var label = !!field['@'] && !!field['@'].label && field['@'].label.arg0;
        if (field.type.name === 'Blocks') {
            result[label || upperFirst(field.name)] = [field];
        }
        else if (field.type.name === 'Image') {
            result[label || upperFirst(field.name)] = [field];
        }
        else {
            var group = field['@'].detail ? field['@'].detail.arg0 : 'Allgemein';
            if (!result[group]) {
                result[group] = [];
            }
            result[group].push(field);
        }
        return result;
    }, {});
};
var Flex = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.space3,
        paddingX: theme.space3,
        '> ul': {
            zIndex: 1,
        },
        '> form': {
            overflow: 'auto',
        },
    });
}, 'div', []);
var HiddenForm = createComponent(function (_a) {
    var visible = _a.visible;
    return ({
        display: visible ? 'block' : 'none',
    });
}, function (p) { return React.createElement(DetailForm, __assign({}, p)); }, function (p) { return Object.keys(p); });
var CollectionDetail = (function (_super) {
    __extends(CollectionDetail, _super);
    function CollectionDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { tab: null };
        return _this;
    }
    CollectionDetail.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, item = _a.item, collection = _a.collection, onSave = _a.onSave, onClone = _a.onClone, pathname = _a.pathname, query = _a.query;
        var schema = getFormSchema(collection);
        var keys = Object.keys(schema);
        var currentTab = this.state.tab || Object.keys(schema)[0];
        return (React.createElement(ContentLoader, { isLoading: id && !item },
            React.createElement(Flex, null,
                React.createElement(Gateway, { into: "navigation" },
                    React.createElement(Menu.Item, { key: "save" },
                        React.createElement("a", { href: "javascript:;", onClick: onSave },
                            React.createElement(Button, { type: "primary", style: { margin: '0 -15px' } },
                                React.createElement(Icon, { type: "save" }),
                                " Speichern"))),
                    React.createElement(Menu.Item, { key: "clone" },
                        React.createElement("a", { href: "javascript:;", onClick: onClone },
                            React.createElement(Button, { type: "primary", style: { margin: '0 -15px' } },
                                React.createElement(Icon, { type: "copy" })))),
                    keys.map(function (tab) {
                        return React.createElement(Menu.Item, { key: tab, className: tab === currentTab && 'ant-menu-item-selected' },
                            React.createElement("a", { onClick: function () { return _this.setState({ tab: tab }); } }, tab));
                    })),
                Object.keys(schema).map(function (tab) {
                    return React.createElement(HiddenForm, __assign({}, _this.props, { item: item || {}, fields: schema[tab], key: tab, visible: tab === currentTab, onCreate: onSave }));
                }))));
    };
    CollectionDetail = __decorate([
        withRouter,
        withItem
    ], CollectionDetail);
    return CollectionDetail;
}(Component));
export default CollectionDetail;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdmlld3MvZGV0YWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLEVBQVEsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLElBQU0sYUFBYSxHQUFHLFVBQUMsRUFBVTtRQUFSLGtCQUFNO0lBQzdCLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1FBQzFCLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFMUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFBQyxJQUFJLENBQUMs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Q1YsUUFBUTtPQUNZLGdCQUFnQixDQTJEcEM7SUFBRCx1QkFBQztDQTNERCxBQTJEQyxDQTNENkMsU0FBUyxHQTJEdEQ7ZUEzRG9CLGdCQUFnQiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3ZpZXdzL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IE1lbnUsIEljb24sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQ29udGVudExvYWRlciwgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyB1cHBlckZpcnN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEdhdGV3YXkgfSBmcm9tICdyZWFjdC1nYXRld2F5JztcbmltcG9ydCB7IHdpdGhJdGVtIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBEZXRhaWxGb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldEZvcm1TY2hlbWEgPSAoeyBmaWVsZHMgfSkgPT5cbiAgZmllbGRzLnJlZHVjZSgocmVzdWx0LCBmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gISFmaWVsZFsnQCddICYmICEhZmllbGRbJ0AnXS5sYWJlbCAmJiBmaWVsZFsnQCddLmxhYmVsLmFyZzA7XG5cbiAgICBpZiAoZmllbGQudHlwZS5uYW1lID09PSAnQmxvY2tzJykge1xuICAgICAgLy8gaWYgc2xhdGUgPT4gb3duIGdyb3VwXG4gICAgICByZXN1bHRbbGFiZWwgfHwgdXBwZXJGaXJzdChmaWVsZC5uYW1lKV0gPSBbZmllbGRdO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5uYW1lID09PSAnSW1hZ2UnKSB7XG4gICAgICAvLyBpZiBpbWFnZSA9PiBvd24gZ3JvdXBcbiAgICAgIHJlc3VsdFtsYWJlbCB8fCB1cHBlckZpcnN0KGZpZWxkLm5hbWUpXSA9IFtmaWVsZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEdyb3VwXG4gICAgICBjb25zdCBncm91cCA9IGZpZWxkWydAJ10uZGV0YWlsID8gZmllbGRbJ0AnXS5kZXRhaWwuYXJnMCA6ICdBbGxnZW1laW4nO1xuXG4gICAgICBpZiAoIXJlc3VsdFtncm91cF0pIHtcbiAgICAgICAgcmVzdWx0W2dyb3VwXSA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2dyb3VwXS5wdXNoKGZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xuXG5jb25zdCBGbGV4ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjZTMsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICAnPiB1bCc6IHtcbiAgICAgIHpJbmRleDogMSxcbiAgICB9LFxuICAgICc+IGZvcm0nOiB7XG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgW11cbik7XG5cbmNvbnN0IEhpZGRlbkZvcm0gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHZpc2libGUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiB2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgfSksXG4gIHAgPT4gPERldGFpbEZvcm0gey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5Ad2l0aFJvdXRlclxuQHdpdGhJdGVtXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHRhYjogbnVsbCB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIG9uU2F2ZSxcbiAgICAgIG9uQ2xvbmUsXG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNjaGVtYSA9IGdldEZvcm1TY2hlbWEoY29sbGVjdGlvbik7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRoaXMuc3RhdGUudGFiIHx8IE9iamVjdC5rZXlzKHNjaGVtYSlbMF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRMb2FkZXIgaXNMb2FkaW5nPXtpZCAmJiAhaXRlbX0+XG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgIDxHYXRld2F5IGludG89XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNhdmVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9e29uU2F2ZX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogJzAgLTE1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInNhdmVcIiAvPiBTcGVpY2hlcm5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNsb25lXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXtvbkNsb25lfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luOiAnMCAtMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiY29weVwiIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAge2tleXMubWFwKHRhYiA9PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0YWIgPT09IGN1cnJlbnRUYWIgJiYgJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRhYiB9KX0+XG4gICAgICAgICAgICAgICAgICB7dGFifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR2F0ZXdheT5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoc2NoZW1hKS5tYXAodGFiID0+XG4gICAgICAgICAgICA8SGlkZGVuRm9ybVxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgaXRlbT17aXRlbSB8fCB7fX1cbiAgICAgICAgICAgICAgZmllbGRzPXtzY2hlbWFbdGFiXX1cbiAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgIHZpc2libGU9e3RhYiA9PT0gY3VycmVudFRhYn1cbiAgICAgICAgICAgICAgb25DcmVhdGU9e29uU2F2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Db250ZW50TG9hZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

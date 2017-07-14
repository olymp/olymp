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
        paddingTop: theme.space3,
        paddingX: theme.space3,
        hasFlex: {
            display: 'flex',
            flexDirection: 'column',
        },
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdmlld3MvZGV0YWlsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLEVBQVEsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLElBQU0sYUFBYSxHQUFHLFVBQUMsRUFBVTtRQUFSLGtCQUFNO0lBQzdCLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1FBQzFCLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFMUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFBQyxJQUFJLENBQUMs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Z0JBQWdCO1FBRnBDLFVBQVU7UUFDVixRQUFRO09BQ1ksZ0JBQWdCLENBMkRwQztJQUFELHVCQUFDO0NBM0RELEFBMkRDLENBM0Q2QyxTQUFTLEdBMkR0RDtlQTNEb0IsZ0JBQWdCIiwiZmlsZSI6InBhY2thZ2VzL2NvbGxlY3Rpb24vdmlld3MvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgTWVudSwgSWNvbiwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBDb250ZW50TG9hZGVyLCBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IHVwcGVyRmlyc3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgR2F0ZXdheSB9IGZyb20gJ3JlYWN0LWdhdGV3YXknO1xuaW1wb3J0IHsgd2l0aEl0ZW0gfSBmcm9tICcuLi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IERldGFpbEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuY29uc3QgZ2V0Rm9ybVNjaGVtYSA9ICh7IGZpZWxkcyB9KSA9PlxuICBmaWVsZHMucmVkdWNlKChyZXN1bHQsIGZpZWxkKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSAhIWZpZWxkWydAJ10gJiYgISFmaWVsZFsnQCddLmxhYmVsICYmIGZpZWxkWydAJ10ubGFiZWwuYXJnMDtcblxuICAgIGlmIChmaWVsZC50eXBlLm5hbWUgPT09ICdCbG9ja3MnKSB7XG4gICAgICAvLyBpZiBzbGF0ZSA9PiBvd24gZ3JvdXBcbiAgICAgIHJlc3VsdFtsYWJlbCB8fCB1cHBlckZpcnN0KGZpZWxkLm5hbWUpXSA9IFtmaWVsZF07XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlLm5hbWUgPT09ICdJbWFnZScpIHtcbiAgICAgIC8vIGlmIGltYWdlID0+IG93biBncm91cFxuICAgICAgcmVzdWx0W2xhYmVsIHx8IHVwcGVyRmlyc3QoZmllbGQubmFtZSldID0gW2ZpZWxkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR3JvdXBcbiAgICAgIGNvbnN0IGdyb3VwID0gZmllbGRbJ0AnXS5kZXRhaWwgPyBmaWVsZFsnQCddLmRldGFpbC5hcmcwIDogJ0FsbGdlbWVpbic7XG5cbiAgICAgIGlmICghcmVzdWx0W2dyb3VwXSkge1xuICAgICAgICByZXN1bHRbZ3JvdXBdID0gW107XG4gICAgICB9XG4gICAgICByZXN1bHRbZ3JvdXBdLnB1c2goZmllbGQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG5cbmNvbnN0IEZsZXggPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2UzLFxuICAgIHBhZGRpbmdYOiB0aGVtZS5zcGFjZTMsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICAnPiB1bCc6IHtcbiAgICAgIHpJbmRleDogMSxcbiAgICB9LFxuICAgICc+IGZvcm0nOiB7XG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgW11cbik7XG5cbmNvbnN0IEhpZGRlbkZvcm0gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHZpc2libGUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiB2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgfSksXG4gIHAgPT4gPERldGFpbEZvcm0gey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5Ad2l0aFJvdXRlclxuQHdpdGhJdGVtXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHRhYjogbnVsbCB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIG9uU2F2ZSxcbiAgICAgIG9uQ2xvbmUsXG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNjaGVtYSA9IGdldEZvcm1TY2hlbWEoY29sbGVjdGlvbik7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRoaXMuc3RhdGUudGFiIHx8IE9iamVjdC5rZXlzKHNjaGVtYSlbMF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRMb2FkZXIgaXNMb2FkaW5nPXtpZCAmJiAhaXRlbX0+XG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgIDxHYXRld2F5IGludG89XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInNhdmVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9e29uU2F2ZX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogJzAgLTE1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInNhdmVcIiAvPiBTcGVpY2hlcm5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNsb25lXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXtvbkNsb25lfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luOiAnMCAtMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiY29weVwiIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAge2tleXMubWFwKHRhYiA9PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0YWIgPT09IGN1cnJlbnRUYWIgJiYgJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRhYiB9KX0+XG4gICAgICAgICAgICAgICAgICB7dGFifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR2F0ZXdheT5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoc2NoZW1hKS5tYXAodGFiID0+XG4gICAgICAgICAgICA8SGlkZGVuRm9ybVxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgaXRlbT17aXRlbSB8fCB7fX1cbiAgICAgICAgICAgICAgZmllbGRzPXtzY2hlbWFbdGFiXX1cbiAgICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICAgIHZpc2libGU9e3RhYiA9PT0gY3VycmVudFRhYn1cbiAgICAgICAgICAgICAgb25DcmVhdGU9e29uU2F2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Db250ZW50TG9hZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

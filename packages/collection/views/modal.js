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
import { Link, withRouter } from 'olymp-router';
import { Menu, Icon } from 'antd';
import { Modal, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import { withItem } from '../decorators';
import { DetailForm } from '../components';
var getFormSchema = function (_a) {
    var fields = _a.fields;
    return fields.reduce(function (result, field) {
        if (field.type.name === 'Blocks') {
            result[upperFirst(field.name)] = [field];
        }
        else if (field.type.name === 'Image') {
            result[upperFirst(field.name)] = [field];
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
var CollectionDetail = (function (_super) {
    __extends(CollectionDetail, _super);
    function CollectionDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionDetail.prototype.render = function () {
        var _a = this.props, item = _a.item, collection = _a.collection, onSave = _a.onSave, pathname = _a.pathname, query = _a.query;
        var schema = getFormSchema(collection);
        var keys = Object.keys(schema);
        var currentTab = query.tab || Object.keys(schema)[0];
        return (React.createElement(Modal, null,
            React.createElement(Gateway, { into: "navigation" },
                React.createElement(Menu.Item, { key: "save" },
                    React.createElement("a", { href: "javascript:;", onClick: onSave },
                        React.createElement(Icon, { type: "save" }),
                        " Speichern")),
                keys.map(function (tab) {
                    return React.createElement(Menu.Item, { key: tab },
                        React.createElement(Link, { to: { pathname: pathname, query: __assign({}, query, { tab: tab }) } }, tab));
                })),
            React.createElement(DetailForm, __assign({}, this.props, { item: item || {}, fields: schema[currentTab], onCreate: onSave }))));
    };
    CollectionDetail = __decorate([
        withRouter,
        withItem
    ], CollectionDetail);
    return CollectionDetail;
}(Component));
export default CollectionDetail;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdmlld3MvbW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsSUFBTSxhQUFhLEdBQUcsVUFBQyxFQUFVO1FBQVIsa0JBQU07SUFDN0IsT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLEtBQUs7UUFDMUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXZDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFFTixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUV2RSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQWpCTixDQWlCTSxDQUFDO0FBRVQsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUMxQixVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUFPLE9BQUEsQ0FBQztRQUNkLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTTtRQUN4QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsTUFBTTtZQUNmLGFBQWEsRUFBRSxRQUFRO1NBQ3hCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNELFFBQVEsRUFBRTtZQUNSLFFBQVEsRUFBRSxNQUFNO1NBQ2pCO0tBQ0YsQ0FBQztBQVphLENBWWIsRUFDRixLQUFLLEVBQ0wsRUFBRSxDQUNILENBQUM7QUFJRjtJQUE4QyxvQ0FBUztJQUF2RDs7SUFnQ0EsQ0FBQztJQS9CQyxpQ0FBTSxHQUFOO1FBQ1EsSUFBQSxlQUEwRCxFQUF4RCxjQUFJLEVBQUUsMEJBQVUsRUFBRSxrQkFBTSxFQUFFLHNCQUFRLEVBQUUsZ0JBQUssQ0FBZ0I7UUFDakUsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxDQUNMLG9CQUFDLEtBQUs7WUFDSixvQkFBQyxPQUFPLElBQUMsSUFBSSxFQUFDLFlBQVk7Z0JBQ3hCLG9CQUFDLElBQUksQ0FBQyxJQUFJLElBQUMsR0FBRyxFQUFDLE1BQU07b0JBQ25CLDJCQUFHLElBQUksRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ3BDLG9CQUFDLElBQUksSUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFHO3FDQUNsQixDQUNNO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO29CQUNYLE9BQUEsb0JBQUMsSUFBSSxDQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsR0FBRzt3QkFDakIsb0JBQUMsSUFBSSxJQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLEtBQUssZUFBTyxLQUFLLElBQUUsR0FBRyxLQUFBLEdBQUUsRUFBRSxJQUM3QyxHQUFHLENBQ0MsQ0FDRztnQkFKWixDQUlZLENBQ2IsQ0FDTztZQUVWLG9CQUFDLFVBQVUsZUFDTCxJQUFJLENBQUMsS0FBSyxJQUNkLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUNoQixNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUMxQixRQUFRLEVBQUUsTUFBTSxJQUNoQixDQUNJLENBQ1QsQ0FBQztJQUNKLENBQUM7SUEvQmtCLGdCQUFnQjtRQUZwQyxVQUFVO1FBQ1YsUUFBUTtPQUNZLGdCQUFnQixDQWdDcEM7SUFBRCx1QkFBQztDQWhDRCxBQWdDQyxDQWhDNkMsU0FBUyxHQWdDdEQ7ZUFoQ29CLGdCQUFnQiIsImZpbGUiOiJwYWNrYWdlcy9jb2xsZWN0aW9uL3ZpZXdzL21vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgTWVudSwgSWNvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgTW9kYWwsIGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgdXBwZXJGaXJzdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBHYXRld2F5IH0gZnJvbSAncmVhY3QtZ2F0ZXdheSc7XG5pbXBvcnQgeyB3aXRoSXRlbSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgRGV0YWlsRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5jb25zdCBnZXRGb3JtU2NoZW1hID0gKHsgZmllbGRzIH0pID0+XG4gIGZpZWxkcy5yZWR1Y2UoKHJlc3VsdCwgZmllbGQpID0+IHtcbiAgICBpZiAoZmllbGQudHlwZS5uYW1lID09PSAnQmxvY2tzJykge1xuICAgICAgLy8gaWYgc2xhdGUgPT4gb3duIGdyb3VwXG4gICAgICByZXN1bHRbdXBwZXJGaXJzdChmaWVsZC5uYW1lKV0gPSBbZmllbGRdO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZS5uYW1lID09PSAnSW1hZ2UnKSB7XG4gICAgICAvLyBpZiBpbWFnZSA9PiBvd24gZ3JvdXBcbiAgICAgIHJlc3VsdFt1cHBlckZpcnN0KGZpZWxkLm5hbWUpXSA9IFtmaWVsZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEdyb3VwXG4gICAgICBjb25zdCBncm91cCA9IGZpZWxkWydAJ10uZGV0YWlsID8gZmllbGRbJ0AnXS5kZXRhaWwuYXJnMCA6ICdBbGxnZW1laW4nO1xuXG4gICAgICBpZiAoIXJlc3VsdFtncm91cF0pIHtcbiAgICAgICAgcmVzdWx0W2dyb3VwXSA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2dyb3VwXS5wdXNoKGZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xuXG5jb25zdCBGbGV4ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNlMyxcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgICc+IHVsJzoge1xuICAgICAgekluZGV4OiAxLFxuICAgIH0sXG4gICAgJz4gZm9ybSc6IHtcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbXVxuKTtcblxuQHdpdGhSb3V0ZXJcbkB3aXRoSXRlbVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvbkRldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGNvbGxlY3Rpb24sIG9uU2F2ZSwgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNjaGVtYSA9IGdldEZvcm1TY2hlbWEoY29sbGVjdGlvbik7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IHF1ZXJ5LnRhYiB8fCBPYmplY3Qua2V5cyhzY2hlbWEpWzBdO1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWw+XG4gICAgICAgIDxHYXRld2F5IGludG89XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzYXZlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17b25TYXZlfT5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cInNhdmVcIiAvPiBTcGVpY2hlcm5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICB7a2V5cy5tYXAodGFiID0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT17dGFifT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e3sgcGF0aG5hbWUsIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCB0YWIgfSB9fT5cbiAgICAgICAgICAgICAgICB7dGFifVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0dhdGV3YXk+XG5cbiAgICAgICAgPERldGFpbEZvcm1cbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBpdGVtPXtpdGVtIHx8IHt9fVxuICAgICAgICAgIGZpZWxkcz17c2NoZW1hW2N1cnJlbnRUYWJdfVxuICAgICAgICAgIG9uQ3JlYXRlPXtvblNhdmV9XG4gICAgICAgIC8+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

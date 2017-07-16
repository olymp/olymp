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
import { Tabs, Form, Button } from 'antd';
import { Prompt } from 'olymp-router';
import { Sidebar, Panel, onError, onSuccess } from 'olymp-ui';
import { InputEdit } from 'olymp-collection';
import { mutateTemplate } from '../gql';
var SelectionSidebar = (function (_super) {
    __extends(SelectionSidebar, _super);
    function SelectionSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ok = function () {
            var _a = _this.props, form = _a.form, item = _a.item, mutate = _a.mutate;
            var id = item.id;
            form.validateFields(function (err, input) {
                if (err) {
                    return onError(err);
                }
                mutate({
                    variables: {
                        id: id,
                        input: input,
                    },
                    updateQueries: !id
                        ? {
                            templateList: function (prev, _a) {
                                var mutationResult = _a.mutationResult;
                                return (__assign({}, prev, { items: prev.items.filter(function (item) { return item.id !== id; }).concat([
                                        mutationResult.data.item,
                                    ]) }));
                            },
                        }
                        : undefined,
                })
                    .then(function (_a) {
                    var item = _a.data.item;
                    onSuccess('Gespeichert', 'Das Template wurde gespeichert');
                    form.resetFields();
                })
                    .catch(onError);
            });
        };
        return _this;
    }
    SelectionSidebar.prototype.render = function () {
        var _a = this.props, item = _a.item, form = _a.form, onCancel = _a.onCancel, setText = _a.setText;
        return (React.createElement(Sidebar, { title: item.name || 'Neu', subtitle: item.id ? 'Template bearbeiten' : 'Template erstellen', footer: React.createElement("div", null,
                React.createElement(Button, { onClick: this.ok, type: "primary" }, "Speichern"),
                React.createElement(Button, { onClick: onCancel, disabled: !item.id }, "Abbrechen")), right: true },
            React.createElement(Prompt, { when: form.isFieldsTouched(), message: function (location) { return 'Änderungen verwerfen?'; } }),
            React.createElement(Tabs, { defaultActiveKey: "1", size: "small" },
                React.createElement(Tabs.TabPane, { tab: "Template", key: "1" },
                    React.createElement(Panel, { paddingX: 16, alignLabel: "left" },
                        React.createElement(InputEdit, { form: form, item: item, field: "name", label: "Name", rules: ['required'], type: "text", size: "large" }))),
                React.createElement(Tabs.TabPane, { tab: "Text", key: "2" }, "Text"))));
    };
    SelectionSidebar = __decorate([
        Form.create(),
        mutateTemplate
    ], SelectionSidebar);
    return SelectionSidebar;
}(Component));
SelectionSidebar.propTypes = {
    item: PropTypes.object,
};
export default SelectionSidebar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS90ZW1wbGF0ZXMvdmlld3Mvc2VsZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUl4QztJQUErQixvQ0FBUztJQUZ4QztRQUFBLHFFQWlGQztRQTlFQyxRQUFFLEdBQUc7WUFDRyxJQUFBLGdCQUFtQyxFQUFqQyxjQUFJLEVBQUUsY0FBSSxFQUFFLGtCQUFNLENBQWdCO1lBQzFDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNSLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDO29CQUNMLFNBQVMsRUFBRTt3QkFDVCxFQUFFLElBQUE7d0JBQ0YsS0FBSyxPQUFBO3FCQUNOO29CQUNELGFBQWEsRUFBRSxDQUFDLEVBQUU7MEJBQ2Q7NEJBQ0UsWUFBWSxFQUFFLFVBQUMsSUFBSSxFQUFFLEVBQWtCO29DQUFoQixrQ0FBYztnQ0FBTyxPQUFBLGNBQ3ZDLElBQUksSUFDUCxLQUFLLEVBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUM7d0NBQzVDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSTswQ0FFMUI7NEJBTjBDLENBTTFDO3lCQUNIOzBCQUNELFNBQVM7aUJBQ2QsQ0FBQztxQkFDQyxJQUFJLENBQUMsVUFBQyxFQUFrQjt3QkFBUixtQkFBSTtvQkFDbkIsU0FBUyxDQUFDLGFBQWEsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7O0lBK0NKLENBQUM7SUE3Q0MsaUNBQU0sR0FBTjtRQUNRLElBQUEsZUFBOEMsRUFBNUMsY0FBSSxFQUFFLGNBQUksRUFBRSxzQkFBUSxFQUFFLG9CQUFPLENBQWdCO1FBRXJELE1BQU0sQ0FBQyxDQUNMLG9CQUFDLE9BQU8sSUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFxQixHQUFHLG9CQUFvQixFQUNoRSxNQUFNLEVBQ0o7Z0JBQ0Usb0JBQUMsTUFBTSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxTQUFTLGdCQUUvQjtnQkFDVCxvQkFBQyxNQUFNLElBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxnQkFFcEMsQ0FDTCxFQUVSLEtBQUs7WUFFTCxvQkFBQyxNQUFNLElBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFDNUIsT0FBTyxFQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsdUJBQXVCLEVBQXZCLENBQXVCLEdBQzVDO1lBRUYsb0JBQUMsSUFBSSxJQUFDLGdCQUFnQixFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsT0FBTztnQkFDckMsb0JBQUMsSUFBSSxDQUFDLE9BQU8sSUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBQyxHQUFHO29CQUNsQyxvQkFBQyxLQUFLLElBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUMsTUFBTTt3QkFDcEMsb0JBQUMsU0FBUyxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUMsTUFBTSxFQUNaLEtBQUssRUFBQyxNQUFNLEVBQ1osS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQ25CLElBQUksRUFBQyxNQUFNLEVBQ1gsSUFBSSxFQUFDLE9BQU8sR0FDWixDQUNJLENBQ0s7Z0JBQ2Ysb0JBQUMsSUFBSSxDQUFDLE9BQU8sSUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLFdBRWpCLENBQ1YsQ0FDQyxDQUNYLENBQUM7SUFDSixDQUFDO0lBOUVHLGdCQUFnQjtRQUZyQixJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2IsY0FBYztPQUNULGdCQUFnQixDQStFckI7SUFBRCx1QkFBQztDQS9FRCxBQStFQyxDQS9FOEIsU0FBUyxHQStFdkM7QUFDRCxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUc7SUFDM0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO0NBQ3ZCLENBQUM7QUFHRixlQUFlLGdCQUFnQixDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2F0aGVuYS90ZW1wbGF0ZXMvdmlld3Mvc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUYWJzLCBGb3JtLCBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFByb21wdCB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBTaWRlYmFyLCBQYW5lbCwgb25FcnJvciwgb25TdWNjZXNzIH0gZnJvbSAnb2x5bXAtdWknO1xuaW1wb3J0IHsgSW5wdXRFZGl0IH0gZnJvbSAnb2x5bXAtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBtdXRhdGVUZW1wbGF0ZSB9IGZyb20gJy4uL2dxbCc7XG5cbkBGb3JtLmNyZWF0ZSgpXG5AbXV0YXRlVGVtcGxhdGVcbmNsYXNzIFNlbGVjdGlvblNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvayA9ICgpID0+IHtcbiAgICBjb25zdCB7IGZvcm0sIGl0ZW0sIG11dGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpZCA9IGl0ZW0uaWQ7XG5cbiAgICBmb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIGlucHV0KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgICB9XG4gICAgICBtdXRhdGUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUXVlcmllczogIWlkXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlTGlzdDogKHByZXYsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAuLi5wcmV2Lml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKSxcbiAgICAgICAgICAgICAgICAgIG11dGF0aW9uUmVzdWx0LmRhdGEuaXRlbSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKCh7IGRhdGE6IHsgaXRlbSB9IH0pID0+IHtcbiAgICAgICAgICBvblN1Y2Nlc3MoJ0dlc3BlaWNoZXJ0JywgJ0RhcyBUZW1wbGF0ZSB3dXJkZSBnZXNwZWljaGVydCcpO1xuICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGZvcm0sIG9uQ2FuY2VsLCBzZXRUZXh0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIHRpdGxlPXtpdGVtLm5hbWUgfHwgJ05ldSd9XG4gICAgICAgIHN1YnRpdGxlPXtpdGVtLmlkID8gJ1RlbXBsYXRlIGJlYXJiZWl0ZW4nIDogJ1RlbXBsYXRlIGVyc3RlbGxlbid9XG4gICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5va30gdHlwZT1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgU3BlaWNoZXJuXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DYW5jZWx9IGRpc2FibGVkPXshaXRlbS5pZH0+XG4gICAgICAgICAgICAgIEFiYnJlY2hlblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcmlnaHRcbiAgICAgID5cbiAgICAgICAgPFByb21wdFxuICAgICAgICAgIHdoZW49e2Zvcm0uaXNGaWVsZHNUb3VjaGVkKCl9XG4gICAgICAgICAgbWVzc2FnZT17bG9jYXRpb24gPT4gJ8OEbmRlcnVuZ2VuIHZlcndlcmZlbj8nfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCIgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCJUZW1wbGF0ZVwiIGtleT1cIjFcIj5cbiAgICAgICAgICAgIDxQYW5lbCBwYWRkaW5nWD17MTZ9IGFsaWduTGFiZWw9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxJbnB1dEVkaXRcbiAgICAgICAgICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgZmllbGQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbJ3JlcXVpcmVkJ119XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwiVGV4dFwiIGtleT1cIjJcIj5cbiAgICAgICAgICAgIFRleHRcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgPC9UYWJzPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICk7XG4gIH1cbn1cblNlbGVjdGlvblNpZGViYXIucHJvcFR5cGVzID0ge1xuICBpdGVtOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbi8qIFNlbGVjdGlvblNpZGViYXIuZGVmYXVsdFByb3BzID0ge1xufTsgKi9cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvblNpZGViYXI7XG4iXX0=

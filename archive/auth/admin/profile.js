import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/checkbox/style';
import _Checkbox from 'antd/lib/checkbox';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createComponent, Grid, Avatar, SectionHeading, Container } from 'olymp-fela';
import FaEnvelope from 'olymp-icons/lib/fa-envelope';

import { onError, onSuccess, onEnterFocus, layout } from 'olymp-utils';
import withAuth from '../with-auth';

export var FormItem = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    marginY: theme.space3,
    '& .ant-form-item-control': {
      '> *': {
        width: '100%'
      }
    }
  };
}, _Form.Item, function (p) {
  return Object.keys(p);
});

var _ref4 = React.createElement(FaEnvelope, { size: 10 });

var AuthProfile = (_dec = _Form.create(), withAuth(_class = _dec(_class = function (_Component) {
  _inherits(AuthProfile, _Component);

  function AuthProfile() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthProfile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AuthProfile.__proto__ || Object.getPrototypeOf(AuthProfile)).call.apply(_ref2, [this].concat(args))), _this), _this.ok = function () {
      var _this$props = _this.props,
          form = _this$props.form,
          auth = _this$props.auth;

      var user = _this.props.user || auth.user;

      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        var newUser = _extends({}, user, values);
        delete newUser.__typename;

        auth.save(newUser).then(function (_ref3) {
          var name = _ref3.name;

          onSuccess('Das Profil wurde gespeichert');
          // form.resetFields(); // Workaround
          // form.setFields({ name, email: newUser.email });
        }).catch(onError);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthProfile, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          form = _props.form,
          extraFields = _props.extraFields,
          auth = _props.auth;

      var user = auth.user.isAdmin && this.props.user || auth.user;

      return React.createElement(
        Container,
        { size: 'small' },
        React.createElement(
          SectionHeading,
          { description: 'Profil bearbeiten' },
          user.name
        ),
        React.createElement(
          _Form,
          { onSubmit: this.ok },
          React.createElement(
            FormItem,
            _extends({ key: 'name', label: 'Name' }, layout),
            form.getFieldDecorator('name', {
              initialValue: user.name,
              rules: [{
                required: true,
                message: 'Bitte geben Sie Ihren Namen an'
              }]
            })(React.createElement(_Input, {
              type: 'text',
              placeholder: 'Name',
              onKeyPress: onEnterFocus(function () {
                return _this2.mail;
              })
            }))
          ),
          React.createElement(
            FormItem,
            _extends({ key: 'email', label: 'E-Mail' }, layout),
            form.getFieldDecorator('email', {
              initialValue: user.email,
              rules: [{
                required: true,
                message: 'Bitte geben Sie Ihre E-Mail an!'
              }]
            })(React.createElement(_Input, {
              type: 'email',
              placeholder: 'E-Mail',
              ref: function ref(x) {
                return _this2.mail = x;
              },
              addonAfter: _ref4
            }))
          ),
          React.createElement(
            FormItem,
            _extends({ key: 'avatar', label: 'Avatar' }, layout),
            React.createElement(
              'a',
              {
                href: 'https://en.gravatar.com',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              React.createElement(Avatar, {
                email: user.email,
                name: user.name,
                size: 100,
                'default': 'blank'
              })
            )
          ),
          auth.user.isAdmin && React.createElement(
            FormItem,
            _extends({ key: 'isAdmin', label: 'Administrator' }, layout),
            React.createElement(
              _Checkbox,
              { checked: user.isAdmin, disabled: true },
              user.isAdmin ? 'ist Administrator' : 'ist kein Administrator'
            )
          ),
          extraFields ? extraFields({
            layout: layout,
            getFieldDecorator: form.getFieldDecorator,
            state: this.state,
            setState: this.setState
          }) : null,
          React.createElement(
            Grid,
            { size: 24 },
            React.createElement(
              Grid.Item,
              { offsetMedium: 7, medium: 17 },
              React.createElement(
                _Button,
                { type: 'primary', onClick: this.ok },
                'Speichern'
              ),
              '\xA0',
              auth.user.id !== user.id && React.createElement(
                _Button,
                { disabled: true, onClick: this.ok },
                'L\xF6schen'
              )
            )
          )
        )
      );
    }
  }]);

  return AuthProfile;
}(Component)) || _class) || _class);
export { AuthProfile as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvYWRtaW4vcHJvZmlsZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJHcmlkIiwiQXZhdGFyIiwiU2VjdGlvbkhlYWRpbmciLCJDb250YWluZXIiLCJvbkVycm9yIiwib25TdWNjZXNzIiwib25FbnRlckZvY3VzIiwibGF5b3V0Iiwid2l0aEF1dGgiLCJGb3JtSXRlbSIsInRoZW1lIiwibWFyZ2luWSIsInNwYWNlMyIsIndpZHRoIiwiSXRlbSIsIk9iamVjdCIsImtleXMiLCJwIiwiQXV0aFByb2ZpbGUiLCJjcmVhdGUiLCJvayIsInByb3BzIiwiZm9ybSIsImF1dGgiLCJ1c2VyIiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJ2YWx1ZXMiLCJuZXdVc2VyIiwiX190eXBlbmFtZSIsInNhdmUiLCJ0aGVuIiwibmFtZSIsImNhdGNoIiwiZXh0cmFGaWVsZHMiLCJpc0FkbWluIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJpbml0aWFsVmFsdWUiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm1haWwiLCJlbWFpbCIsIngiLCJzdGF0ZSIsInNldFN0YXRlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsU0FDRUMsZUFERixFQUVFQyxJQUZGLEVBR0VDLE1BSEYsRUFJRUMsY0FKRixFQUtFQyxTQUxGLFFBTU8sWUFOUDs7O0FBU0EsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkJDLFlBQTdCLEVBQTJDQyxNQUEzQyxRQUF5RCxhQUF6RDtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsY0FBckI7O0FBRUEsT0FBTyxJQUFNQyxXQUFXVixnQkFDdEI7QUFBQSxNQUFHVyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxhQUFTRCxNQUFNRSxNQUREO0FBRWQsZ0NBQTRCO0FB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RlQ7QUFHRSxxQkFBSTtBQUhOO0FBS0Usa0NBQUMsTUFBRDtBQUNFLHVCQUFPaUIsS0FBS2tCLEtBRGQ7QUFFRSxzQkFBTWxCLEtBQUtRLElBRmI7QUFHRSxzQkFBTSxHQUhSO0FBSUUsMkJBQVE7QUFKVjtBQUxGO0FBREYsV0FwQ0Y7QUFrREdULGVBQUtDLElBQUwsQ0FBVVcsT0FBVixJQUNDO0FBQUMsb0JBQUQ7QUFBQSx1QkFBVSxLQUFJLFNBQWQsRUFBd0IsT0FBTSxlQUE5QixJQUFrRDVCLE1BQWxEO0FBQ0U7QUFBQTtBQUFBLGdCQUFVLFNBQVNpQixLQUFLVyxPQUF4QixFQUFpQyxjQUFqQztBQUNHWCxtQkFBS1csT0FBTCxHQUFlLG1CQUFmLEdBQXFDO0FBRHhDO0FBREYsV0FuREo7QUF5REdELHdCQUNHQSxZQUFZO0FBQ1YzQiwwQkFEVTtBQUVWNkIsK0JBQW1CZCxLQUFLYyxpQkFGZDtBQUdWUSxtQkFBTyxLQUFLQSxLQUhGO0FBSVZDLHNCQUFVLEtBQUtBO0FBSkwsV0FBWixDQURILEdBT0csSUFoRU47QUFrRUU7QUFBQyxnQkFBRDtBQUFBLGNBQU0sTUFBTSxFQUFaO0FBQ0U7QUFBQyxrQkFBRCxDQUFNLElBQU47QUFBQSxnQkFBVyxjQUFjLENBQXpCLEVBQTRCLFFBQVEsRUFBcEM7QUFDRTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxTQUFiLEVBQXVCLFNBQVMsS0FBS3pCLEVBQXJDO0FBQUE7QUFBQSxlQURGO0FBQUE7QUFJR0csbUJBQUtDLElBQUwsQ0FBVXNCLEVBQVYsS0FBaUJ0QixLQUFLc0IsRUFBdEIsSUFDQztBQUFBO0FBQUEsa0JBQVEsY0FBUixFQUFpQixTQUFTLEtBQUsxQixFQUEvQjtBQUFBO0FBQUE7QUFMSjtBQURGO0FBbEVGO0FBTEYsT0FERjtBQXVGRDs7OztFQWxIc0N0QixTO1NBQXBCb0IsVyIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL2FkbWluL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQ29tcG9uZW50LFxuICBHcmlkLFxuICBBdmF0YXIsXG4gIFNlY3Rpb25IZWFkaW5nLFxuICBDb250YWluZXIsXG59IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZhRW52ZWxvcGUgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBvbkVycm9yLCBvblN1Y2Nlc3MsIG9uRW50ZXJGb2N1cywgbGF5b3V0IH0gZnJvbSAnb2x5bXAtdXRpbHMnO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL3dpdGgtYXV0aCc7XG5cbmV4cG9ydCBjb25zdCBGb3JtSXRlbSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW5ZOiB0aGVtZS5zcGFjZTMsXG4gICAgJyYgLmFudC1mb3JtLWl0ZW0tY29udHJvbCc6IHtcbiAgICAgICc+IConOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBGb3JtLkl0ZW0sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5Ad2l0aEF1dGhcbkBGb3JtLmNyZWF0ZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9rID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybSwgYXV0aCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyIHx8IGF1dGgudXNlcjtcblxuICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdVc2VyID0geyAuLi51c2VyLCAuLi52YWx1ZXMgfTtcbiAgICAgIGRlbGV0ZSBuZXdVc2VyLl9fdHlwZW5hbWU7XG5cbiAgICAgIGF1dGhcbiAgICAgICAgLnNhdmUobmV3VXNlcilcbiAgICAgICAgLnRoZW4oKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgICAgb25TdWNjZXNzKCdEYXMgUHJvZmlsIHd1cmRlIGdlc3BlaWNoZXJ0Jyk7XG4gICAgICAgICAgLy8gZm9ybS5yZXNldEZpZWxkcygpOyAvLyBXb3JrYXJvdW5kXG4gICAgICAgICAgLy8gZm9ybS5zZXRGaWVsZHMoeyBuYW1lLCBlbWFpbDogbmV3VXNlci5lbWFpbCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGV4dHJhRmllbGRzLCBhdXRoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVzZXIgPSAoYXV0aC51c2VyLmlzQWRtaW4gJiYgdGhpcy5wcm9wcy51c2VyKSB8fCBhdXRoLnVzZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBzaXplPVwic21hbGxcIj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nIGRlc2NyaXB0aW9uPVwiUHJvZmlsIGJlYXJiZWl0ZW5cIj5cbiAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICA8L1NlY3Rpb25IZWFkaW5nPlxuXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9rfT5cbiAgICAgICAgICA8Rm9ybUl0ZW0ga2V5PVwibmFtZVwiIGxhYmVsPVwiTmFtZVwiIHsuLi5sYXlvdXR9PlxuICAgICAgICAgICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoJ25hbWUnLCB7XG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0JpdHRlIGdlYmVuIFNpZSBJaHJlbiBOYW1lbiBhbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbkVudGVyRm9jdXMoKCkgPT4gdGhpcy5tYWlsKX1cbiAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgPEZvcm1JdGVtIGtleT1cImVtYWlsXCIgbGFiZWw9XCJFLU1haWxcIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0JpdHRlIGdlYmVuIFNpZSBJaHJlIEUtTWFpbCBhbiEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KShcbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtTWFpbFwiXG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+ICh0aGlzLm1haWwgPSB4KX1cbiAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8RmFFbnZlbG9wZSBzaXplPXsxMH0gLz59XG4gICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDxGb3JtSXRlbSBrZXk9XCJhdmF0YXJcIiBsYWJlbD1cIkF2YXRhclwiIHsuLi5sYXlvdXR9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZW4uZ3JhdmF0YXIuY29tXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICBlbWFpbD17dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgc2l6ZT17MTAwfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ9XCJibGFua1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICB7YXV0aC51c2VyLmlzQWRtaW4gJiYgKFxuICAgICAgICAgICAgPEZvcm1JdGVtIGtleT1cImlzQWRtaW5cIiBsYWJlbD1cIkFkbWluaXN0cmF0b3JcIiB7Li4ubGF5b3V0fT5cbiAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3VzZXIuaXNBZG1pbn0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAge3VzZXIuaXNBZG1pbiA/ICdpc3QgQWRtaW5pc3RyYXRvcicgOiAnaXN0IGtlaW4gQWRtaW5pc3RyYXRvcid9XG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2V4dHJhRmllbGRzXG4gICAgICAgICAgICA/IGV4dHJhRmllbGRzKHtcbiAgICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgICAgZ2V0RmllbGREZWNvcmF0b3I6IGZvcm0uZ2V0RmllbGREZWNvcmF0b3IsXG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgc2V0U3RhdGU6IHRoaXMuc2V0U3RhdGUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAgICA8R3JpZCBzaXplPXsyNH0+XG4gICAgICAgICAgICA8R3JpZC5JdGVtIG9mZnNldE1lZGl1bT17N30gbWVkaXVtPXsxN30+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9rfT5cbiAgICAgICAgICAgICAgICBTcGVpY2hlcm5cbiAgICAgICAgICAgICAgPC9CdXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgIHthdXRoLnVzZXIuaWQgIT09IHVzZXIuaWQgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQgb25DbGljaz17dGhpcy5va30+XG4gICAgICAgICAgICAgICAgICBMw7ZzY2hlblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9HcmlkLkl0ZW0+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=

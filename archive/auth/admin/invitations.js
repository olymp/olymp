import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2, _dec2, _dec3, _class3;

var _templateObject = _taggedTemplateLiteral(['\n    query invitationList {\n      items: invitationList {\n        id\n        name\n        email\n      }\n    }\n  '], ['\n    query invitationList {\n      items: invitationList {\n        id\n        name\n        email\n      }\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    query invitation($id: String) {\n      item: invitation(id: $id) {\n        id\n        name\n        email\n      }\n    }\n  '], ['\n    query invitation($id: String) {\n      item: invitation(id: $id) {\n        id\n        name\n        email\n      }\n    }\n  ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import FaEnvelope from 'olymp-icons/lib/fa-envelope';

import { Panel } from 'olymp-fela';
import { onError, onSuccess, onEnterFocus, layout } from 'olymp-utils';
import withAuth from '../with-auth';
import Modal from '../modal';

var AuthInvitations = (_dec = graphql(gql(_templateObject), {
  options: function options(_ref) {
    var isOpen = _ref.isOpen;
    return { skip: !isOpen };
  }
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(AuthInvitations, _Component);

  function AuthInvitations() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthInvitations);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AuthInvitations.__proto__ || Object.getPrototypeOf(AuthInvitations)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { search: '' }, _this.ok = function () {
      var _this$props = _this.props,
          auth = _this$props.auth,
          onClose = _this$props.onClose,
          form = _this$props.form;

      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        var user = _extends({}, values);
        auth.save(user).then(function (_ref3) {
          var name = _ref3.name;

          onSuccess('Das Profil wurde gespeichert');
          onClose();
        }).catch(onError);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthInvitations, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          isOpen = _props.isOpen,
          pathname = _props.pathname,
          onClose = _props.onClose,
          data = _props.data;
      var search = this.state.search;


      var items = data.items || [];
      if (search) {
        items = items.filter(function (_ref4) {
          var name = _ref4.name;
          return name && name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
      }

      return React.createElement(
        Modal,
        {
          isOpen: isOpen,
          onClose: onClose,
          width: 'auto',
          padding: 0,
          title: 'Einladungen',
          subtitle: 'Einladungen sehen und verschicken'
        },
        _ref5
      );
    }
  }]);

  return AuthInvitations;
}(Component), _class2.defaultProps = { data: {} }, _temp2)) || _class);
export { AuthInvitations as default };

var _ref9 = React.createElement(FaEnvelope, { size: 10 });

var AuthInviationDetail = (_dec2 = graphql(gql(_templateObject2), {
  options: function options(_ref6) {
    var id = _ref6.id;
    return {
      fetchPolicy: !id ? 'cache-only' : undefined,
      variables: { id: id }
    };
  }
}), _dec3 = _Form.create(), withAuth(_class3 = _dec2(_class3 = _dec3(_class3 = function (_Component2) {
  _inherits(AuthInviationDetail, _Component2);

  function AuthInviationDetail() {
    var _ref7;

    var _temp3, _this2, _ret2;

    _classCallCheck(this, AuthInviationDetail);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp3 = (_this2 = _possibleConstructorReturn(this, (_ref7 = AuthInviationDetail.__proto__ || Object.getPrototypeOf(AuthInviationDetail)).call.apply(_ref7, [this].concat(args))), _this2), _this2.ok = function () {
      var _this2$props = _this2.props,
          auth = _this2$props.auth,
          form = _this2$props.form,
          data = _this2$props.data;

      var item = data.item || {};
      form.validateFields(function (err, values) {
        if (err) {
          return onError(err);
        }
        var invitation = _extends({}, item, values);
        delete invitation.__typename;
        auth.invitation(invitation).then(function (_ref8) {
          var name = _ref8.name;

          onSuccess('Das Profil wurde gespeichert');
        }).catch(onError);
      });
    }, _temp3), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(AuthInviationDetail, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          form = _props2.form,
          saving = _props2.saving,
          pathname = _props2.pathname,
          data = _props2.data;
      var getFieldDecorator = form.getFieldDecorator;

      var item = data.item || {};

      return React.createElement(
        Panel,
        { minWidth: 560, margin: '0 30px', padding: 16 },
        React.createElement(
          _Form.Item,
          _extends({ key: 'name', label: 'Name' }, layout),
          getFieldDecorator('name', {
            initialValue: item.name,
            rules: [{ required: true, message: 'Bitte geben Sie Ihren Namen an' }]
          })(React.createElement(_Input, {
            type: 'text',
            placeholder: 'Name',
            onKeyPress: onEnterFocus(function () {
              return _this3.mail;
            })
          }))
        ),
        React.createElement(
          _Form.Item,
          _extends({ key: 'email', label: 'E-Mail' }, layout),
          getFieldDecorator('email', {
            initialValue: item.email,
            rules: [{ required: true, message: 'Bitte geben Sie Ihre E-Mail an!' }]
          })(React.createElement(_Input, {
            type: 'email',
            placeholder: 'E-Mail',
            onKeyPress: onEnterFocus(function () {
              return _this3.pw1;
            }),
            ref: function ref(x) {
              return _this3.mail = x;
            },
            addonAfter: _ref9
          }))
        ),
        React.createElement(
          _Button,
          { onClick: this.ok },
          'Speichern'
        )
      );
    }
  }]);

  return AuthInviationDetail;
}(Component)) || _class3) || _class3) || _class3);

var _ref5 = React.createElement(AuthInviationDetail, { id: null });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvYWRtaW4vaW52aXRhdGlvbnMuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ3FsIiwiZ3JhcGhxbCIsIlBhbmVsIiwib25FcnJvciIsIm9uU3VjY2VzcyIsIm9uRW50ZXJGb2N1cyIsImxheW91dCIsIndpdGhBdXRoIiwiTW9kYWwiLCJBdXRoSW52aXRhdGlvbnMiLCJvcHRpb25zIiwiaXNPcGVuIiwic2tpcCIsInN0YXRlIiwic2VhcmNoIiwib2siLCJwcm9wcyIsImF1dGgiLCJvbkNsb3NlIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwidXNlciIsInNhdmUiLCJ0aGVuIiwibmFtZSIsImNhdGNoIiwiaWQiLCJwYXRobmFtZSIsImRhdGEiLCJpdGVtcyIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImRlZmF1bHRQcm9wcyIsIkF1dGhJbnZpYXRpb25EZXRhaWwiLCJmZXRjaFBvbGljeSIsInVuZGVmaW5lZCIsInZhcmlhYmxlcyIsImNyZWF0ZSIsIml0ZW0iLCJpbnZpdGF0aW9uIiwiX190eXBlbmFtZSIsInNhdmluZyIsImdldEZpZWxkRGVjb3JhdG9yIiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtYWlsIiwiZW1haWwiLCJwdzEiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsYUFBaEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGNBQXhCOzs7QUFHQSxTQUFTQyxLQUFULFFBQXNCLFlBQXRCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsRUFBNkJDLFlBQTdCLEVBQTJDQyxNQUEzQyxRQUF5RCxhQUF6RDtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsY0FBckI7QUFDQSxPQUFPQyxLQUFQ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QztBQUNHdUMsNEJBQWtCLE9BQWxCLEVBQTJCO0FBQzFCQywwQkFBY0wsS0FBS1UsS0FETztBQUUxQkosbUJBQU8sQ0FDTCxFQUFFQyxVQUFVLElBQVosRUFBa0JDLFNBQVMsaUNBQTNCLEVBREs7QUFGbUIsV0FBM0IsRUFNQztBQUNFLGtCQUFLLE9BRFA7QUFFRSx5QkFBWSxRQUZkO0FBR0Usd0JBQVk1QyxhQUFhO0FBQUEscUJBQU0sT0FBSytDLEdBQVg7QUFBQSxhQUFiLENBSGQ7QUFJRSxpQkFBSztBQUFBLHFCQUFNLE9BQUtGLElBQUwsR0FBWUcsQ0FBbEI7QUFBQSxhQUpQO0FBS0U7QUFMRixZQU5EO0FBREgsU0FmRjtBQStCRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUt0QyxFQUF0QjtBQUFBO0FBQUE7QUEvQkYsT0FERjtBQW1DRDs7OztFQTNEK0JoQixTOztZQXpCMUIsb0JBQUMsbUJBQUQsSUFBcUIsSUFBSSxJQUF6QixHIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvYWRtaW4vaW52aXRhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZhRW52ZWxvcGUgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgb25FcnJvciwgb25TdWNjZXNzLCBvbkVudGVyRm9jdXMsIGxheW91dCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi93aXRoLWF1dGgnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFsJztcblxuQGdyYXBocWwoXG4gIGdxbGBcbiAgICBxdWVyeSBpbnZpdGF0aW9uTGlzdCB7XG4gICAgICBpdGVtczogaW52aXRhdGlvbkxpc3Qge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGVtYWlsXG4gICAgICB9XG4gICAgfVxuICBgLFxuICB7XG4gICAgb3B0aW9uczogKHsgaXNPcGVuIH0pID0+ICh7IHNraXA6ICFpc09wZW4gfSksXG4gIH0sXG4pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoSW52aXRhdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0geyBkYXRhOiB7fSB9O1xuICBzdGF0ZSA9IHsgc2VhcmNoOiAnJyB9O1xuICBvayA9ICgpID0+IHtcbiAgICBjb25zdCB7IGF1dGgsIG9uQ2xvc2UsIGZvcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLCB2YWx1ZXMpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG9uRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXIgPSB7IC4uLnZhbHVlcyB9O1xuICAgICAgYXV0aFxuICAgICAgICAuc2F2ZSh1c2VyKVxuICAgICAgICAudGhlbigoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgICBvblN1Y2Nlc3MoJ0RhcyBQcm9maWwgd3VyZGUgZ2VzcGVpY2hlcnQnKTtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChvbkVycm9yKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpZCwgaXNPcGVuLCBwYXRobmFtZSwgb25DbG9zZSwgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlYXJjaCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBpdGVtcyA9IGRhdGEuaXRlbXMgfHwgW107XG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoXG4gICAgICAgICh7IG5hbWUgfSkgPT5cbiAgICAgICAgICBuYW1lICYmIG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT0gLTEsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgIHdpZHRoPVwiYXV0b1wiXG4gICAgICAgIHBhZGRpbmc9ezB9XG4gICAgICAgIHRpdGxlPVwiRWlubGFkdW5nZW5cIlxuICAgICAgICBzdWJ0aXRsZT1cIkVpbmxhZHVuZ2VuIHNlaGVuIHVuZCB2ZXJzY2hpY2tlblwiXG4gICAgICA+XG4gICAgICAgIDxBdXRoSW52aWF0aW9uRGV0YWlsIGlkPXtudWxsfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbkB3aXRoQXV0aFxuQGdyYXBocWwoXG4gIGdxbGBcbiAgICBxdWVyeSBpbnZpdGF0aW9uKCRpZDogU3RyaW5nKSB7XG4gICAgICBpdGVtOiBpbnZpdGF0aW9uKGlkOiAkaWQpIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBlbWFpbFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIG9wdGlvbnM6ICh7IGlkIH0pID0+ICh7XG4gICAgICBmZXRjaFBvbGljeTogIWlkID8gJ2NhY2hlLW9ubHknIDogdW5kZWZpbmVkLFxuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gICAgfSksXG4gIH0sXG4pXG5ARm9ybS5jcmVhdGUoKVxuY2xhc3MgQXV0aEludmlhdGlvbkRldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9rID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYXV0aCwgZm9ybSwgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpdGVtID0gZGF0YS5pdGVtIHx8IHt9O1xuICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgICB9XG4gICAgICBjb25zdCBpbnZpdGF0aW9uID0geyAuLi5pdGVtLCAuLi52YWx1ZXMgfTtcbiAgICAgIGRlbGV0ZSBpbnZpdGF0aW9uLl9fdHlwZW5hbWU7XG4gICAgICBhdXRoXG4gICAgICAgIC5pbnZpdGF0aW9uKGludml0YXRpb24pXG4gICAgICAgIC50aGVuKCh7IG5hbWUgfSkgPT4ge1xuICAgICAgICAgIG9uU3VjY2VzcygnRGFzIFByb2ZpbCB3dXJkZSBnZXNwZWljaGVydCcpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gob25FcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybSwgc2F2aW5nLCBwYXRobmFtZSwgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSBmb3JtO1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhLml0ZW0gfHwge307XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsIG1pbldpZHRoPXs1NjB9IG1hcmdpbj1cIjAgMzBweFwiIHBhZGRpbmc9ezE2fT5cbiAgICAgICAgPEZvcm0uSXRlbSBrZXk9XCJuYW1lXCIgbGFiZWw9XCJOYW1lXCIgey4uLmxheW91dH0+XG4gICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCduYW1lJywge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQml0dGUgZ2ViZW4gU2llIElocmVuIE5hbWVuIGFuJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KShcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uRW50ZXJGb2N1cygoKSA9PiB0aGlzLm1haWwpfVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDxGb3JtLkl0ZW0ga2V5PVwiZW1haWxcIiBsYWJlbD1cIkUtTWFpbFwiIHsuLi5sYXlvdXR9PlxuICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcignZW1haWwnLCB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWU6IGl0ZW0uZW1haWwsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnQml0dGUgZ2ViZW4gU2llIElocmUgRS1NYWlsIGFuIScgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSkoXG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFLU1haWxcIlxuICAgICAgICAgICAgICBvbktleVByZXNzPXtvbkVudGVyRm9jdXMoKCkgPT4gdGhpcy5wdzEpfVxuICAgICAgICAgICAgICByZWY9e3ggPT4gKHRoaXMubWFpbCA9IHgpfVxuICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8RmFFbnZlbG9wZSBzaXplPXsxMH0gLz59XG4gICAgICAgICAgICAvPixcbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9rfT5TcGVpY2hlcm48L0J1dHRvbj5cbiAgICAgIDwvUGFuZWw+XG4gICAgKTtcbiAgfVxufVxuIl19

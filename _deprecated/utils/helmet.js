import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';

var getURL = function getURL() {
  var url = void 0;
  if (process.env.URL) {
    url = process.env.URL;
  } else if (typeof window !== 'undefined') {
    url = window.location.protocol + '//' + window.location.host;
  }
  if (url && url.endsWith('/')) {
    url = url.substr(0, url.length - 1);
  }
  return url;
};
export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var pth = arguments[1];

  var name = _ref.name,
      title = _ref.title,
      description = _ref.description,
      image = _ref.image,
      tags = _ref.tags,
      keywords = _ref.keywords,
      pathname = _ref.pathname,
      rest = _objectWithoutProperties(_ref, ['name', 'title', 'description', 'image', 'tags', 'keywords', 'pathname']);

  if (pth && !pathname) {
    pathname = pth;
  }
  if (image && (typeof image === 'undefined' ? 'undefined' : _typeof(image)) === 'object' && image.url) {
    image = image.url;
  }
  if (image && (typeof image === 'undefined' ? 'undefined' : _typeof(image)) === 'object' && image.src) {
    image = image.src;
  }
  var meta = [];
  var link = [];
  name = name || title;
  if (image) {
    meta.push({
      property: 'og:image',
      content: image
    });
    meta.push({
      property: 'twitter:image',
      content: image
    });
    meta.push({
      property: 'twitter:card',
      content: image
    });
  }
  if (name) {
    meta.push({
      property: 'og:title',
      content: name
    });
    meta.push({
      property: 'twitter:title',
      content: name
    });
    meta.push({
      property: 'og:type',
      content: 'article'
    });
  }
  if (description) {
    meta.push({
      name: 'description',
      content: description
    });
    meta.push({
      property: 'og:description',
      content: description
    });
    meta.push({
      property: 'twitter:description',
      content: description
    });
  }
  tags = tags || keywords;
  if (tags) {
    meta.push({
      name: 'keywords',
      content: tags ? tags.join(',') : undefined
    });
  }
  var url = getURL();
  if (url && pathname) {
    link.push({
      rel: 'amphtml',
      href: url + pathname + '?amp'
    });
    link.push({
      rel: 'canonical',
      href: url + pathname
    });
    meta.push({
      property: 'og:url',
      content: url + pathname
    });
  }

  return React.createElement(Helmet, { title: name, meta: meta, link: link });
});

export var OlympHelmet = (_temp = _class = function (_Component) {
  _inherits(OlympHelmet, _Component);

  function OlympHelmet() {
    _classCallCheck(this, OlympHelmet);

    return _possibleConstructorReturn(this, (OlympHelmet.__proto__ || Object.getPrototypeOf(OlympHelmet)).apply(this, arguments));
  }

  _createClass(OlympHelmet, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          meta = _props.meta,
          link = _props.link,
          rest = _objectWithoutProperties(_props, ['meta', 'link']);

      var theme = this.context.theme;


      return React.createElement(Helmet, _extends({
        meta: [{ name: 'theme-color', content: _get(theme, 'color', '#8e44ad') }, {
          name: 'msapplication-TileColor',
          content: _get(theme, 'color', '#8e44ad')
        }].concat(_toConsumableArray(meta || [])),
        link: [{
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: _get(theme, 'color', '#8e44ad')
        }].concat(_toConsumableArray(link || []))
      }, rest));
    }
  }]);

  return OlympHelmet;
}(Component), _class.contextTypes = {
  theme: PropTypes.object
}, _temp);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2hlbG1ldC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJIZWxtZXQiLCJQcm9wVHlwZXMiLCJnZXRVUkwiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJlbmRzV2l0aCIsInN1YnN0ciIsImxlbmd0aCIsInB0aCIsIm5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwia2V5d29yZHMiLCJwYXRobmFtZSIsInJlc3QiLCJzcmMiLCJtZXRhIiwibGluayIsInB1c2giLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJqb2luIiwidW5kZWZpbmVkIiwicmVsIiwiaHJlZiIsIk9seW1wSGVsbWV0IiwicHJvcHMiLCJ0aGVtZSIsImNvbnRleHQiLCJjb2xvciIsImNvbnRleHRUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLE1BQVQsUUFBdUIsY0FBdkI7O0FBRUEsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsUUFBUUMsR0FBUixDQUFZQyxHQUFoQixFQUFxQjtBQUNuQkgsVUFBTUMsUUFBUUMsR0FBUixDQUFZQyxHQUFsQjtBQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDeENKLFVBQVNJLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQXpCLFVBQXNDRixPQUFPQyxRQUFQLENBQWdCRSxJQUF0RDtBQUNEO0FBQ0QsTUFBSVAsT0FBT0EsSUFBSVEsUUFBSixDQUFhLEdBQWIsQ0FBWCxFQUE4QjtBQUM1QlIsVUFBTUEsSUFBSVMsTUFBSixDQUFXLENBQVgs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Q0FsRkQ7O0FBb0ZBLFdBQWFRLFdBQWI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUtXO0FBQUEsbUJBQ3lCLEtBQUtDLEtBRDlCO0FBQUEsVUFDQ1YsSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT0MsSUFEUCxVQUNPQSxJQURQO0FBQUEsVUFDZ0JILElBRGhCOztBQUFBLFVBRUNhLEtBRkQsR0FFVyxLQUFLQyxPQUZoQixDQUVDRCxLQUZEOzs7QUFJUCxhQUNFLG9CQUFDLE1BQUQ7QUFDRSxlQUNFLEVBQUVwQixNQUFNLGFBQVIsRUFBdUJhLFNBQVMsS0FBSU8sS0FBSixFQUFXLE9BQVgsRUFBb0IsU0FBcEIsQ0FBaEMsRUFERixFQUVFO0FBQ0VwQixnQkFBTSx5QkFEUjtBQUVFYSxtQkFBUyxLQUFJTyxLQUFKLEVBQVcsT0FBWCxFQUFvQixTQUFwQjtBQUZYLFNBRkYsNEJBTU1YLFFBQVEsRUFOZCxFQURGO0FBU0UsZUFDRTtBQUNFTyxlQUFLLFdBRFA7QUFFRUMsZ0JBQU0sd0JBRlI7QUFHRUssaUJBQU8sS0FBSUYsS0FBSixFQUFXLE9BQVgsRUFBb0IsU0FBcEI7QUFIVCxTQURGLDRCQU1NVixRQUFRLEVBTmQ7QUFURixTQWlCTUgsSUFqQk4sRUFERjtBQXFCRDtBQTlCSDs7QUFBQTtBQUFBLEVBQWlDdkIsU0FBakMsVUFDU3VDLFlBRFQsR0FDd0I7QUFDcEJILFNBQU9sQyxVQUFVc0M7QUFERyxDQUR4QiIsImZpbGUiOiJwYWNrYWdlcy91dGlscy9oZWxtZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBnZXRVUkwgPSAoKSA9PiB7XG4gIGxldCB1cmw7XG4gIGlmIChwcm9jZXNzLmVudi5VUkwpIHtcbiAgICB1cmwgPSBwcm9jZXNzLmVudi5VUkw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fWA7XG4gIH1cbiAgaWYgKHVybCAmJiB1cmwuZW5kc1dpdGgoJy8nKSkge1xuICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtIDEpO1xuICB9XG4gIHJldHVybiB1cmw7XG59O1xuZXhwb3J0IGRlZmF1bHQgKFxuICB7IG5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHRhZ3MsIGtleXdvcmRzLCBwYXRobmFtZSwgLi4ucmVzdCB9ID0ge30sXG4gIHB0aFxuKSA9PiB7XG4gIGlmIChwdGggJiYgIXBhdGhuYW1lKSB7XG4gICAgcGF0aG5hbWUgPSBwdGg7XG4gIH1cbiAgaWYgKGltYWdlICYmIHR5cGVvZiBpbWFnZSA9PT0gJ29iamVjdCcgJiYgaW1hZ2UudXJsKSB7XG4gICAgaW1hZ2UgPSBpbWFnZS51cmw7XG4gIH1cbiAgaWYgKGltYWdlICYmIHR5cGVvZiBpbWFnZSA9PT0gJ29iamVjdCcgJiYgaW1hZ2Uuc3JjKSB7XG4gICAgaW1hZ2UgPSBpbWFnZS5zcmM7XG4gIH1cbiAgY29uc3QgbWV0YSA9IFtdO1xuICBjb25zdCBsaW5rID0gW107XG4gIG5hbWUgPSBuYW1lIHx8IHRpdGxlO1xuICBpZiAoaW1hZ2UpIHtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICdvZzppbWFnZScsXG4gICAgICBjb250ZW50OiBpbWFnZSxcbiAgICB9KTtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICd0d2l0dGVyOmltYWdlJyxcbiAgICAgIGNvbnRlbnQ6IGltYWdlLFxuICAgIH0pO1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ3R3aXR0ZXI6Y2FyZCcsXG4gICAgICBjb250ZW50OiBpbWFnZSxcbiAgICB9KTtcbiAgfVxuICBpZiAobmFtZSkge1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ29nOnRpdGxlJyxcbiAgICAgIGNvbnRlbnQ6IG5hbWUsXG4gICAgfSk7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiAndHdpdHRlcjp0aXRsZScsXG4gICAgICBjb250ZW50OiBuYW1lLFxuICAgIH0pO1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ29nOnR5cGUnLFxuICAgICAgY29udGVudDogJ2FydGljbGUnLFxuICAgIH0pO1xuICB9XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSk7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSk7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiAndHdpdHRlcjpkZXNjcmlwdGlvbicsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9KTtcbiAgfVxuICB0YWdzID0gdGFncyB8fCBrZXl3b3JkcztcbiAgaWYgKHRhZ3MpIHtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgbmFtZTogJ2tleXdvcmRzJyxcbiAgICAgIGNvbnRlbnQ6IHRhZ3MgPyB0YWdzLmpvaW4oJywnKSA6IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cmwgPSBnZXRVUkwoKTtcbiAgaWYgKHVybCAmJiBwYXRobmFtZSkge1xuICAgIGxpbmsucHVzaCh7XG4gICAgICByZWw6ICdhbXBodG1sJyxcbiAgICAgIGhyZWY6IGAke3VybCArIHBhdGhuYW1lfT9hbXBgLFxuICAgIH0pO1xuICAgIGxpbmsucHVzaCh7XG4gICAgICByZWw6ICdjYW5vbmljYWwnLFxuICAgICAgaHJlZjogdXJsICsgcGF0aG5hbWUsXG4gICAgfSk7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiAnb2c6dXJsJyxcbiAgICAgIGNvbnRlbnQ6IHVybCArIHBhdGhuYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIDxIZWxtZXQgdGl0bGU9e25hbWV9IG1ldGE9e21ldGF9IGxpbms9e2xpbmt9IC8+O1xufTtcblxuZXhwb3J0IGNsYXNzIE9seW1wSGVsbWV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXRhLCBsaW5rLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHJldHVybiAoXG4gICAgICA8SGVsbWV0XG4gICAgICAgIG1ldGE9e1tcbiAgICAgICAgICB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6IGdldCh0aGVtZSwgJ2NvbG9yJywgJyM4ZTQ0YWQnKSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicsXG4gICAgICAgICAgICBjb250ZW50OiBnZXQodGhlbWUsICdjb2xvcicsICcjOGU0NGFkJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi4obWV0YSB8fCBbXSksXG4gICAgICAgIF19XG4gICAgICAgIGxpbms9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWw6ICdtYXNrLWljb24nLFxuICAgICAgICAgICAgaHJlZjogJy9zYWZhcmktcGlubmVkLXRhYi5zdmcnLFxuICAgICAgICAgICAgY29sb3I6IGdldCh0aGVtZSwgJ2NvbG9yJywgJyM4ZTQ0YWQnKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLihsaW5rIHx8IFtdKSxcbiAgICAgICAgXX1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

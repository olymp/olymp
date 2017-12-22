var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUpdateQuery } from 'olymp-router';
import { createComponent } from 'react-fela';
import { lightboxActions } from './lightbox-redux';
import cloudinaryUrl from './cloudinary-url';
import Image from './image';

var Img = createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    cursor: 'pointer',
    onHover: {
      opacity: 0.85
    }
  };
}, function (p) {
  return React.createElement(Image, p);
}, function (p) {
  return Object.keys(p);
});

var Lightbox = (_dec = connect(null, function (dispatch) {
  return _extends({
    updateQuery: createUpdateQuery(dispatch)
  }, lightboxActions(dispatch));
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Lightbox, _Component);

  function Lightbox() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Lightbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call.apply(_ref2, [this].concat(args))), _this), _this.onClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          updateQuery = _this$props.updateQuery;

      updateQuery({ lightbox: _this.ref });
      if (onClick) {
        onClick(e);
      }
    }, _this.add = function (value) {
      var addToLightbox = _this.props.addToLightbox;
      var gallery = _this.context.gallery;

      var width = 800;
      var getSrcSet = function getSrcSet(w) {
        return cloudinaryUrl(value, {
          w: Math.floor(w)
        }) + ' ' + Math.floor(w) + 'w';
      };

      addToLightbox({
        ref: _this.ref,
        origin: value.url,
        src: cloudinaryUrl(value, { w: width }),
        srcset: [getSrcSet(width), getSrcSet(width / 4 * 3), getSrcSet(width / 2), getSrcSet(width / 4)],
        thumbnail: cloudinaryUrl(value, {
          w: 50,
          h: 50
        }),
        width: value.width,
        height: value.height,
        caption: value.caption && value.source ? value.caption + ' - ' + value.source : value.caption || value.source || ''
      }, gallery);
    }, _this.ref = Math.random().toString(36).substr(2, 9), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lightbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.props.value;


      if (value) {
        this.add(value);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref3) {
      var value = _ref3.value;
      var removeFromLightbox = this.props.removeFromLightbox;
      var gallery = this.context.gallery;

      if (value.id !== this.props.value.id) {
        removeFromLightbox(this.ref, gallery);
        this.add(value);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var removeFromLightbox = this.props.removeFromLightbox;
      var gallery = this.context.gallery;

      removeFromLightbox(this.ref, gallery);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onClick = _props.onClick,
          search = _props.search,
          dispatch = _props.dispatch,
          updateQuery = _props.updateQuery,
          addToLightbox = _props.addToLightbox,
          removeFromLightbox = _props.removeFromLightbox,
          rest = _objectWithoutProperties(_props, ['value', 'onClick', 'search', 'dispatch', 'updateQuery', 'addToLightbox', 'removeFromLightbox']);

      if (!value || !value.url) {
        return React.createElement(Img, _extends({}, rest, { value: value }));
      }

      return React.createElement(Img, _extends({}, rest, { onClick: this.onClick, value: value }));
    }
  }]);

  return Lightbox;
}(Component), _class2.contextTypes = {
  gallery: PropTypes.string
}, _class2.defaultProps = {
  attributes: {}
}, _temp2)) || _class);
export { Lightbox as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvbGlnaHRib3gtaW1hZ2UuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY29ubmVjdCIsImNyZWF0ZVVwZGF0ZVF1ZXJ5IiwiY3JlYXRlQ29tcG9uZW50IiwibGlnaHRib3hBY3Rpb25zIiwiY2xvdWRpbmFyeVVybCIsIkltYWdlIiwiSW1nIiwidGhlbWUiLCJjdXJzb3IiLCJvbkhvdmVyIiwib3BhY2l0eSIsInAiLCJPYmplY3QiLCJrZXlzIiwiTGlnaHRib3giLCJ1cGRhdGVRdWVyeSIsImRpc3BhdGNoIiwib25DbGljayIsInByb3BzIiwibGlnaHRib3giLCJyZWYiLCJlIiwiYWRkIiwiYWRkVG9MaWdodGJveCIsImdhbGxlcnkiLCJjb250ZXh0Iiwid2lkdGgiLCJnZXRTcmNTZXQiLCJ2YWx1ZSIsInciLCJNYXRoIiwiZmxvb3IiLCJvcmlnaW4iLCJ1cmwiLCJzcmMiLCJzcmNzZXQiLCJ0aHVtYm5haWwiLCJoIiwiaGVpZ2h0IiwiY2FwdGlvbiIsInNvdXJjZSIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwicmVtb3ZlRnJvbUxpZ2h0Ym94IiwiaWQiLCJzZWFyY2giLCJyZXN0IiwiY29udGV4dFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGFBQXhCO0FBQ0EsU0FBU0MsaUJBQVQsUUFBa0MsY0FBbEM7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxrQkFBaEM7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGtCQUExQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7O0FBRUEsSUFBTUMs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S0YsR0FBTCxDQUFTTSxLQUFUO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUFBLFVBQ2JnQixrQkFEYSxHQUNVLEtBQUsxQixLQURmLENBQ2IwQixrQkFEYTtBQUFBLFVBRWJwQixPQUZhLEdBRUQsS0FBS0MsT0FGSixDQUViRCxPQUZhOztBQUdyQm9CLHlCQUFtQixLQUFLeEIsR0FBeEIsRUFBNkJJLE9BQTdCO0FBQ0Q7Ozs2QkFpRFE7QUFBQSxtQkFVSCxLQUFLTixLQVZGO0FBQUEsVUFFTFUsS0FGSyxVQUVMQSxLQUZLO0FBQUEsVUFHTFgsT0FISyxVQUdMQSxPQUhLO0FBQUEsVUFJTDZCLE1BSkssVUFJTEEsTUFKSztBQUFBLFVBS0w5QixRQUxLLFVBS0xBLFFBTEs7QUFBQSxVQU1MRCxXQU5LLFVBTUxBLFdBTks7QUFBQSxVQU9MUSxhQVBLLFVBT0xBLGFBUEs7QUFBQSxVQVFMcUIsa0JBUkssVUFRTEEsa0JBUks7QUFBQSxVQVNGRyxJQVRFOztBQVlQLFVBQUksQ0FBQ25CLEtBQUQsSUFBVSxDQUFDQSxNQUFNSyxHQUFyQixFQUEwQjtBQUN4QixlQUFPLG9CQUFDLEdBQUQsZUFBU2MsSUFBVCxJQUFlLE9BQU9uQixLQUF0QixJQUFQO0FBQ0Q7O0FBRUQsYUFBTyxvQkFBQyxHQUFELGVBQVNtQixJQUFULElBQWUsU0FBUyxLQUFLOUIsT0FBN0IsRUFBc0MsT0FBT1csS0FBN0MsSUFBUDtBQUNEOzs7O0VBaEdtQzlCLFMsV0FDN0JrRCxZLEdBQWU7QUFDcEJ4QixXQUFTekIsVUFBVWtEO0FBREMsQyxVQUlmQyxZLEdBQWU7QUFDcEJDLGNBQVk7QUFEUSxDO1NBTEhyQyxRIiwiZmlsZSI6InBhY2thZ2VzL2Nsb3VkaW5hcnkvbGlnaHRib3gtaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVVcGRhdGVRdWVyeSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGxpZ2h0Ym94QWN0aW9ucyB9IGZyb20gJy4vbGlnaHRib3gtcmVkdXgnO1xuaW1wb3J0IGNsb3VkaW5hcnlVcmwgZnJvbSAnLi9jbG91ZGluYXJ5LXVybCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5cbmNvbnN0IEltZyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBvbkhvdmVyOiB7XG4gICAgICBvcGFjaXR5OiAwLjg1LFxuICAgIH0sXG4gIH0pLFxuICBwID0+IDxJbWFnZSB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5AY29ubmVjdChudWxsLCBkaXNwYXRjaCA9PiAoe1xuICB1cGRhdGVRdWVyeTogY3JlYXRlVXBkYXRlUXVlcnkoZGlzcGF0Y2gpLFxuICAuLi5saWdodGJveEFjdGlvbnMoZGlzcGF0Y2gpLFxufSkpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgZ2FsbGVyeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFkZCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHZhbHVlIH0pIHtcbiAgICBjb25zdCB7IHJlbW92ZUZyb21MaWdodGJveCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGdhbGxlcnkgfSA9IHRoaXMuY29udGV4dDtcbiAgICBpZiAodmFsdWUuaWQgIT09IHRoaXMucHJvcHMudmFsdWUuaWQpIHtcbiAgICAgIHJlbW92ZUZyb21MaWdodGJveCh0aGlzLnJlZiwgZ2FsbGVyeSk7XG4gICAgICB0aGlzLmFkZCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyByZW1vdmVGcm9tTGlnaHRib3ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBnYWxsZXJ5IH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgcmVtb3ZlRnJvbUxpZ2h0Ym94KHRoaXMucmVmLCBnYWxsZXJ5KTtcbiAgfVxuXG4gIG9uQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCB7IG9uQ2xpY2ssIHVwZGF0ZVF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIHVwZGF0ZVF1ZXJ5KHsgbGlnaHRib3g6IHRoaXMucmVmIH0pO1xuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKGUpO1xuICAgIH1cbiAgfTtcblxuICBhZGQgPSB2YWx1ZSA9PiB7XG4gICAgY29uc3QgeyBhZGRUb0xpZ2h0Ym94IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZ2FsbGVyeSB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHdpZHRoID0gODAwO1xuICAgIGNvbnN0IGdldFNyY1NldCA9IHcgPT5cbiAgICAgIGAke2Nsb3VkaW5hcnlVcmwodmFsdWUsIHtcbiAgICAgICAgdzogTWF0aC5mbG9vcih3KSxcbiAgICAgIH0pfSAke01hdGguZmxvb3Iodyl9d2A7XG5cbiAgICBhZGRUb0xpZ2h0Ym94KFxuICAgICAge1xuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBvcmlnaW46IHZhbHVlLnVybCxcbiAgICAgICAgc3JjOiBjbG91ZGluYXJ5VXJsKHZhbHVlLCB7IHc6IHdpZHRoIH0pLFxuICAgICAgICBzcmNzZXQ6IFtcbiAgICAgICAgICBnZXRTcmNTZXQod2lkdGgpLFxuICAgICAgICAgIGdldFNyY1NldCh3aWR0aCAvIDQgKiAzKSxcbiAgICAgICAgICBnZXRTcmNTZXQod2lkdGggLyAyKSxcbiAgICAgICAgICBnZXRTcmNTZXQod2lkdGggLyA0KSxcbiAgICAgICAgXSxcbiAgICAgICAgdGh1bWJuYWlsOiBjbG91ZGluYXJ5VXJsKHZhbHVlLCB7XG4gICAgICAgICAgdzogNTAsXG4gICAgICAgICAgaDogNTAsXG4gICAgICAgIH0pLFxuICAgICAgICB3aWR0aDogdmFsdWUud2lkdGgsXG4gICAgICAgIGhlaWdodDogdmFsdWUuaGVpZ2h0LFxuICAgICAgICBjYXB0aW9uOlxuICAgICAgICAgIHZhbHVlLmNhcHRpb24gJiYgdmFsdWUuc291cmNlXG4gICAgICAgICAgICA/IGAke3ZhbHVlLmNhcHRpb259IC0gJHt2YWx1ZS5zb3VyY2V9YFxuICAgICAgICAgICAgOiB2YWx1ZS5jYXB0aW9uIHx8IHZhbHVlLnNvdXJjZSB8fCAnJyxcbiAgICAgIH0sXG4gICAgICBnYWxsZXJ5LFxuICAgICk7XG4gIH07XG5cbiAgcmVmID0gTWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygzNilcbiAgICAuc3Vic3RyKDIsIDkpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzZWFyY2gsXG4gICAgICBkaXNwYXRjaCxcbiAgICAgIHVwZGF0ZVF1ZXJ5LFxuICAgICAgYWRkVG9MaWdodGJveCxcbiAgICAgIHJlbW92ZUZyb21MaWdodGJveCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnVybCkge1xuICAgICAgcmV0dXJuIDxJbWcgey4uLnJlc3R9IHZhbHVlPXt2YWx1ZX0gLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIDxJbWcgey4uLnJlc3R9IG9uQ2xpY2s9e3RoaXMub25DbGlja30gdmFsdWU9e3ZhbHVlfSAvPjtcbiAgfVxufVxuIl19

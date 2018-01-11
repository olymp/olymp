'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _faExternalLink = require('olymp-icons/lib/fa-external-link');

var _faExternalLink2 = _interopRequireDefault(_faExternalLink);

var _faLink = require('olymp-icons/lib/fa-link');

var _faLink2 = _interopRequireDefault(_faLink);

var _faUnlink = require('olymp-icons/lib/fa-unlink');

var _faUnlink2 = _interopRequireDefault(_faUnlink);

var _prefetchLink = require('../prefetch-link');

var _prefetchLink2 = _interopRequireDefault(_prefetchLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkContainer = function LinkContainer(_ref) {
  var node = _ref.node,
      attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      editor = _ref.editor;

  var href = node.data.get('href');
  if (!editor.props.readOnly) {
    return _react2.default.createElement(
      'a',
      _extends({}, attributes, { className: className }),
      children
    );
  }
  if (href && href.indexOf('/') === 0) {
    return _react2.default.createElement(
      _prefetchLink2.default,
      _extends({}, attributes, { to: href, className: className }),
      children
    );
  }
  return _react2.default.createElement(
    'a',
    _extends({}, attributes, {
      href: href,
      className: className,
      target: '_blank',
      rel: 'noopener noreferrer'
    }),
    children
  );
};

var setLink = function setLink(onChange, value, node) {
  var href = window.prompt('Link', node.data.get('href') || '');
  if (href) {
    onChange(value.change().setNodeByKey(node.key, {
      data: node.data.set('href', href)
    }));
  }
};

var _ref3 = _react2.default.createElement(_faExternalLink2.default, null);

exports.default = {
  type: 'link',
  isVoid: false,
  kind: 'inline',
  component: LinkContainer,
  actions: [{
    type: 'small',
    component: function component(_ref2) {
      var node = _ref2.node;
      return _react2.default.createElement(
        LinkContainer,
        {
          node: node,
          attributes: {},
          editor: { props: { readOnly: true } }
        },
        _ref3
      );
    },
    tooltip: 'Öffnen'
  }, {
    type: 'small',
    component: function component(_ref4) {
      var onChange = _ref4.onChange,
          value = _ref4.value,
          node = _ref4.node;
      return _react2.default.createElement(_faLink2.default, { onClick: function onClick() {
          return setLink(onChange, value, node);
        } });
    },
    tooltip: 'Neu verlinken'
  }, {
    type: 'small',
    component: function component(_ref5) {
      var onChange = _ref5.onChange,
          value = _ref5.value;
      return _react2.default.createElement(_faUnlink2.default, {
        onClick: function onClick() {
          return onChange(value.change().unwrapInline('link'));
        }
      });
    },
    tooltip: 'Link entfernen'
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvbGluay5lczYiXSwibmFtZXMiOlsiTGlua0NvbnRhaW5lciIsIm5vZGUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJlZGl0b3IiLCJocmVmIiwiZGF0YSIsImdldCIsInByb3BzIiwicmVhZE9ubHkiLCJpbmRleE9mIiwic2V0TGluayIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ3aW5kb3ciLCJwcm9tcHQiLCJjaGFuZ2UiLCJzZXROb2RlQnlLZXkiLCJrZXkiLCJzZXQiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImNvbXBvbmVudCIsImFjdGlvbnMiLCJ0b29sdGlwIiwidW53cmFwSW5saW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsT0FBdUQ7QUFBQSxNQUFwREMsSUFBb0QsUUFBcERBLElBQW9EO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUMzRSxNQUFNQyxPQUFPTCxLQUFLTSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxNQUFkLENBQWI7QUFDQSxNQUFJLENBQUNILE9BQU9JLEtBQVAsQ0FBYUMsUUFBbEIsRUFBNEI7QUFDMUIsV0FDRTtBQUFBO0FBQUEsbUJBQU9SLFVBQVAsSUFBbUIsV0FBV0UsU0FBOUI7QUFDR0Q7QUFESCxLQURGO0FBS0Q7QUFDRCxNQUFJRyxRQUFRQSxLQUFLSyxPQUFMLENBQWEsR0FBYixNQUFzQixDQUFsQyxFQUFxQztBQUNuQyxXQUNFO0FBQUE7QUFBQSxtQkFBa0JULFVBQWxCLElBQThCLElBQUlJLElBQWxDLEVBQXdDLFdBQVdGLFNBQW5EO0FBQ0dEO0FBREgsS0FERjtBQUtEO0FBQ0QsU0FDRTtBQUFBO0FBQUEsaUJBQ01ELFVBRE47QUFFRSxZQUFNSSxJQUZSO0FBR0UsaUJBQVdGLFNBSGI7QUFJRSxjQUFPLFFBSlQ7QUFLRSxXQUFJO0FBTE47QUFPR0Q7QUFQSCxHQURGO0FBV0QsQ0EzQkQ7O0FBNkJBLElBQU1TLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBa0JiLElBQWxCLEVBQTJCO0FBQ3pDLE1BQU1LLE9BQU9TLE9BQU9DLE1BQVAsQ0FBYyxNQUFkLEVBQXNCZixLQUFLTSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxNQUFkLEtBQXlCLEVBQS9DLENBQWI7QUFDQSxNQUFJRixJQUFKLEVBQVU7QUFDUk8sYUFDRUMsTUFBTUcsTUFBTixHQUFlQyxZQUFmLENBQTRCakIsS0FBS2tCLEdBQWpDLEVBQXNDO0FBQ3BDWixZQUFNTixLQUFLTSxJQUFMLENBQVVhLEdBQVYsQ0FBYyxNQUFkLEVBQXNCZCxJQUF0QjtBQUQ4QixLQUF0QyxDQURGO0FBS0Q7QUFDRixDQVREOztZQXlCVSw2RDs7a0JBZEs7QUFDYmUsUUFBTSxNQURPO0FBRWJDLFVBQVEsS0FGSztBQUdiQyxRQUFNLFFBSE87QUFJYkMsYUFBV3hCLGFBSkU7QUFLYnlCLFdBQVMsQ0FDUDtBQUNFSixVQUFNLE9BRFI7QUFFRUcsZUFBVztBQUFBLFVBQUd2QixJQUFILFNBQUdBLElBQUg7QUFBQSxhQUNUO0FBQUMscUJBQUQ7QUFBQTtBQUNFLGdCQUFNQSxJQURSO0FBRUUsc0JBQVksRUFGZDtBQUdFLGtCQUFRLEVBQUVRLE9BQU8sRUFBRUMsVUFBVSxJQUFaLEVBQVQ7QUFIVjtBQUFBO0FBQUEsT0FEUztBQUFBLEtBRmI7QUFXRWdCLGFBQVM7QUFYWCxHQURPLEVBY1A7QUFDRUwsVUFBTSxPQURSO0FBRUVHLGVBQVc7QUFBQSxVQUFHWCxRQUFILFNBQUdBLFFBQUg7QUFBQSxVQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxVQUFvQmIsSUFBcEIsU0FBb0JBLElBQXBCO0FBQUEsYUFDVCxrREFBUSxTQUFTO0FBQUEsaUJBQU1XLFFBQVFDLFFBQVIsRUFBa0JDLEtBQWxCLEVBQXlCYixJQUF6QixDQUFOO0FBQUEsU0FBakIsR0FEUztBQUFBLEtBRmI7QUFLRXlCLGFBQVM7QUFMWCxHQWRPLEVBcUJQO0FBQ0VMLFVBQU0sT0FEUjtBQUVFRyxlQUFXO0FBQUEsVUFBR1gsUUFBSCxTQUFHQSxRQUFIO0FBQUEsVUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsYUFDVDtBQUNFLGlCQUFTO0FBQUEsaUJBQU1ELFNBQVNDLE1BQU1HLE1BQU4sR0FBZVUsWUFBZixDQUE0QixNQUE1QixDQUFULENBQU47QUFBQTtBQURYLFFBRFM7QUFBQSxLQUZiO0FBT0VELGFBQVM7QUFQWCxHQXJCTztBQUxJLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9saW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhRXh0ZXJuYWxMaW5rLCBGYUxpbmssIEZhVW5saW5rIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IFByZWZldGNoTGluayBmcm9tICcuLi9wcmVmZXRjaC1saW5rJztcblxuY29uc3QgTGlua0NvbnRhaW5lciA9ICh7IG5vZGUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBjbGFzc05hbWUsIGVkaXRvciB9KSA9PiB7XG4gIGNvbnN0IGhyZWYgPSBub2RlLmRhdGEuZ2V0KCdocmVmJyk7XG4gIGlmICghZWRpdG9yLnByb3BzLnJlYWRPbmx5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG4gIGlmIChocmVmICYmIGhyZWYuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQcmVmZXRjaExpbmsgey4uLmF0dHJpYnV0ZXN9IHRvPXtocmVmfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUHJlZmV0Y2hMaW5rPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICBocmVmPXtocmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmNvbnN0IHNldExpbmsgPSAob25DaGFuZ2UsIHZhbHVlLCBub2RlKSA9PiB7XG4gIGNvbnN0IGhyZWYgPSB3aW5kb3cucHJvbXB0KCdMaW5rJywgbm9kZS5kYXRhLmdldCgnaHJlZicpIHx8ICcnKTtcbiAgaWYgKGhyZWYpIHtcbiAgICBvbkNoYW5nZShcbiAgICAgIHZhbHVlLmNoYW5nZSgpLnNldE5vZGVCeUtleShub2RlLmtleSwge1xuICAgICAgICBkYXRhOiBub2RlLmRhdGEuc2V0KCdocmVmJywgaHJlZiksXG4gICAgICB9KSxcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdsaW5rJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2lubGluZScsXG4gIGNvbXBvbmVudDogTGlua0NvbnRhaW5lcixcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdzbWFsbCcsXG4gICAgICBjb21wb25lbnQ6ICh7IG5vZGUgfSkgPT4gKFxuICAgICAgICA8TGlua0NvbnRhaW5lclxuICAgICAgICAgIG5vZGU9e25vZGV9XG4gICAgICAgICAgYXR0cmlidXRlcz17e319XG4gICAgICAgICAgZWRpdG9yPXt7IHByb3BzOiB7IHJlYWRPbmx5OiB0cnVlIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGYUV4dGVybmFsTGluayAvPlxuICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICApLFxuICAgICAgdG9vbHRpcDogJ8OWZmZuZW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3NtYWxsJyxcbiAgICAgIGNvbXBvbmVudDogKHsgb25DaGFuZ2UsIHZhbHVlLCBub2RlIH0pID0+IChcbiAgICAgICAgPEZhTGluayBvbkNsaWNrPXsoKSA9PiBzZXRMaW5rKG9uQ2hhbmdlLCB2YWx1ZSwgbm9kZSl9IC8+XG4gICAgICApLFxuICAgICAgdG9vbHRpcDogJ05ldSB2ZXJsaW5rZW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ3NtYWxsJyxcbiAgICAgIGNvbXBvbmVudDogKHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IChcbiAgICAgICAgPEZhVW5saW5rXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkudW53cmFwSW5saW5lKCdsaW5rJykpfVxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICAgIHRvb2x0aXA6ICdMaW5rIGVudGZlcm5lbicsXG4gICAgfSxcbiAgXSxcbn07XG4iXX0=

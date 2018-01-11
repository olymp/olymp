'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n      query tags {\n        tags {\n          id\n        }\n      }\n    '], ['\n      query tags {\n        tags {\n          id\n        }\n      }\n    ']);

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var enhance = (0, _recompose.compose)((0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        data = _ref.data;
    return _extends({}, ownProps, {
      tags: (data.tags || []).map(function (x) {
        return x.id;
      })
    });
  }
}), _recompose.toClass);

exports.default = {
  rule: function rule(_ref2) {
    var type = _ref2.type,
        name = _ref2.name;
    return name === 'tags' && type.kind === 'LIST' && type.ofType.name === 'String';
  },
  form: enhance(function (_ref3) {
    var _ref3$tags = _ref3.tags,
        tags = _ref3$tags === undefined ? [] : _ref3$tags,
        props = _objectWithoutProperties(_ref3, ['tags']);

    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(
        _select2.default,
        _extends({}, props, { mode: 'tags', style: { width: '100%' } }),
        tags.map(function (tag) {
          return _react2.default.createElement(
            _select2.default.Option,
            { key: tag },
            tag
          );
        })
      )
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtdGFncy5lczYiXSwibmFtZXMiOlsiZW5oYW5jZSIsInByb3BzIiwib3duUHJvcHMiLCJkYXRhIiwidGFncyIsIm1hcCIsIngiLCJpZCIsInJ1bGUiLCJ0eXBlIiwibmFtZSIsImtpbmQiLCJvZlR5cGUiLCJmb3JtIiwid2lkdGgiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLHdCQUNkLHNFQVFFO0FBQ0VDLFNBQU87QUFBQSxRQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxRQUFhQyxJQUFiLFFBQWFBLElBQWI7QUFBQSx3QkFDRkQsUUFERTtBQUVMRSxZQUFNLENBQUNELEtBQUtDLElBQUwsSUFBYSxFQUFkLEVBQWtCQyxHQUFsQixDQUFzQjtBQUFBLGVBQUtDLEVBQUVDLEVBQVA7QUFBQSxPQUF0QjtBQUZEO0FBQUE7QUFEVCxDQVJGLENBRGMscUJBQWhCOztrQkFtQmU7QUFDYkMsUUFBTTtBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsU0FBU0EsSUFBVDtBQUFBLFdBQ0pBLFNBQVMsTUFBVCxJQUFtQkQsS0FBS0UsSUFBTCxLQUFjLE1BQWpDLElBQTJDRixLQUFLRyxNQUFMLENBQVlGLElBQVosS0FBcUIsUUFENUQ7QUFBQSxHQURPO0FBR2JHLFFBQU1iLFFBQVE7QUFBQSwyQkFBR0ksSUFBSDtBQUFBLFFBQUdBLElBQUgsOEJBQVUsRUFBVjtBQUFBLFFBQWlCSCxLQUFqQjs7QUFBQSxXQUNaO0FBQUE7QUFBY0EsV0FBZDtBQUNFO0FBQUE7QUFBQSxxQkFBWUEsS0FBWixJQUFtQixNQUFLLE1BQXhCLEVBQStCLE9BQU8sRUFBRWEsT0FBTyxNQUFULEVBQXRDO0FBQ0dWLGFBQUtDLEdBQUwsQ0FBUztBQUFBLGlCQUFPO0FBQUEsNkJBQVEsTUFBUjtBQUFBLGNBQWUsS0FBS1UsR0FBcEI7QUFBMEJBO0FBQTFCLFdBQVA7QUFBQSxTQUFUO0FBREg7QUFERixLQURZO0FBQUEsR0FBUjtBQUhPLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vZWRpdC10YWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIHRvQ2xhc3MgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGdyYXBocWwoXG4gICAgZ3FsYFxuICAgICAgcXVlcnkgdGFncyB7XG4gICAgICAgIHRhZ3Mge1xuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHtcbiAgICAgIHByb3BzOiAoeyBvd25Qcm9wcywgZGF0YSB9KSA9PiAoe1xuICAgICAgICAuLi5vd25Qcm9wcyxcbiAgICAgICAgdGFnczogKGRhdGEudGFncyB8fCBbXSkubWFwKHggPT4geC5pZCksXG4gICAgICB9KSxcbiAgICB9LFxuICApLFxuICB0b0NsYXNzLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyB0eXBlLCBuYW1lIH0pID0+XG4gICAgbmFtZSA9PT0gJ3RhZ3MnICYmIHR5cGUua2luZCA9PT0gJ0xJU1QnICYmIHR5cGUub2ZUeXBlLm5hbWUgPT09ICdTdHJpbmcnLFxuICBmb3JtOiBlbmhhbmNlKCh7IHRhZ3MgPSBbXSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxGb3JtSXRlbSB7Li4ucHJvcHN9PlxuICAgICAgPFNlbGVjdCB7Li4ucHJvcHN9IG1vZGU9XCJ0YWdzXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAge3RhZ3MubWFwKHRhZyA9PiA8U2VsZWN0Lk9wdGlvbiBrZXk9e3RhZ30+e3RhZ308L1NlbGVjdC5PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuICAgIDwvRm9ybUl0ZW0+XG4gICkpLFxufTtcbiJdfQ==

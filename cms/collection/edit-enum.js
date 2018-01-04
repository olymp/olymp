'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  REMOVED: 'Papierkorb'
};

exports.default = {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.kind === 'ENUM' && innerType.enumValues;
  },
  form: (0, _recompose.toClass)(function (_ref2) {
    var innerType = _ref2.innerType,
        specialFields = _ref2.specialFields,
        props = _objectWithoutProperties(_ref2, ['innerType', 'specialFields']);

    return _react2.default.createElement(
      _formItem2.default,
      props,
      _react2.default.createElement(
        _select2.default,
        _extends({}, props, { value: props.value || innerType.enumValues[0].name }),
        innerType.enumValues.map(function (x) {
          return _react2.default.createElement(
            _select2.default.Option,
            { key: x.name, value: x.name },
            innerType.name === 'DOCUMENT_STATE' ? states[x.name] : x.label
          );
        })
      )
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtZW51bS5lczYiXSwibmFtZXMiOlsic3RhdGVzIiwiUFVCTElTSEVEIiwiRFJBRlQiLCJSRU1PVkVEIiwicnVsZSIsImlubmVyVHlwZSIsImtpbmQiLCJlbnVtVmFsdWVzIiwiZm9ybSIsInNwZWNpYWxGaWVsZHMiLCJwcm9wcyIsInZhbHVlIiwibmFtZSIsIm1hcCIsIngiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVM7QUFDYkMsYUFBVyxZQURFO0FBRWJDLFNBQU8sU0FGTTtBQUdiQyxXQUFTO0FBSEksQ0FBZjs7a0JBTWU7QUFDYkMsUUFBTTtBQUFBLFFBQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFdBQW1CQSxVQUFVQyxJQUFWLEtBQW1CLE1BQW5CLElBQTZCRCxVQUFVRSxVQUExRDtBQUFBLEdBRE87QUFFYkMsUUFBTSx3QkFBUTtBQUFBLFFBQUdILFNBQUgsU0FBR0EsU0FBSDtBQUFBLFFBQWNJLGFBQWQsU0FBY0EsYUFBZDtBQUFBLFFBQWdDQyxLQUFoQzs7QUFBQSxXQUNaO0FBQUE7QUFBY0EsV0FBZDtBQUNFO0FBQUE7QUFBQSxxQkFBWUEsS0FBWixJQUFtQixPQUFPQSxNQUFNQyxLQUFOLElBQWVOLFVBQVVFLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0JLLElBQWpFO0FBQ0dQLGtCQUFVRSxVQUFWLENBQXFCTSxHQUFyQixDQUF5QjtBQUFBLGlCQUN4QjtBQUFBLDZCQUFRLE1BQVI7QUFBQSxjQUFlLEtBQUtDLEVBQUVGLElBQXRCLEVBQTRCLE9BQU9FLEVBQUVGLElBQXJDO0FBQ0dQLHNCQUFVTyxJQUFWLEtBQW1CLGdCQUFuQixHQUFzQ1osT0FBT2MsRUFBRUYsSUFBVCxDQUF0QyxHQUF1REUsRUFBRUM7QUFENUQsV0FEd0I7QUFBQSxTQUF6QjtBQURIO0FBREYsS0FEWTtBQUFBLEdBQVI7QUFGTyxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2VkaXQtZW51bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuY29uc3Qgc3RhdGVzID0ge1xuICBQVUJMSVNIRUQ6ICfDlmZmZW50bGljaCcsXG4gIERSQUZUOiAnRW50d3VyZicsXG4gIFJFTU9WRUQ6ICdQYXBpZXJrb3JiJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVsZTogKHsgaW5uZXJUeXBlIH0pID0+IGlubmVyVHlwZS5raW5kID09PSAnRU5VTScgJiYgaW5uZXJUeXBlLmVudW1WYWx1ZXMsXG4gIGZvcm06IHRvQ2xhc3MoKHsgaW5uZXJUeXBlLCBzcGVjaWFsRmllbGRzLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEZvcm1JdGVtIHsuLi5wcm9wc30+XG4gICAgICA8U2VsZWN0IHsuLi5wcm9wc30gdmFsdWU9e3Byb3BzLnZhbHVlIHx8IGlubmVyVHlwZS5lbnVtVmFsdWVzWzBdLm5hbWV9PlxuICAgICAgICB7aW5uZXJUeXBlLmVudW1WYWx1ZXMubWFwKHggPT4gKFxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17eC5uYW1lfSB2YWx1ZT17eC5uYW1lfT5cbiAgICAgICAgICAgIHtpbm5lclR5cGUubmFtZSA9PT0gJ0RPQ1VNRU5UX1NUQVRFJyA/IHN0YXRlc1t4Lm5hbWVdIDogeC5sYWJlbH1cbiAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9TZWxlY3Q+XG4gICAgPC9Gb3JtSXRlbT5cbiAgKSksXG59O1xuIl19

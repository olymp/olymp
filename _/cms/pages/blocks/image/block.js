'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'imageWithLabel',
  isVoid: false,
  kind: 'block',
  defaultNodes: function defaultNodes() {
    return [_image2.default, _label2.default];
  },
  label: 'Bild mit Text',
  category: 'Bilder',
  styles: function styles() {
    return {
      position: 'relative'
    };
  },
  component: function component(_ref) {
    var className = _ref.className,
        children = _ref.children,
        attributes = _ref.attributes;
    return _react2.default.createElement(
      'div',
      _extends({ className: (0, _classnames2.default)(className, 'image-with-label-block') }, attributes),
      children
    );
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvaW1hZ2UvYmxvY2suZXM2Il0sIm5hbWVzIjpbInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwiZGVmYXVsdE5vZGVzIiwibGFiZWwiLCJjYXRlZ29yeSIsInN0eWxlcyIsInBvc2l0aW9uIiwiY29tcG9uZW50IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYkEsUUFBTSxnQkFETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLGdCQUFjO0FBQUEsV0FBTSxrQ0FBTjtBQUFBLEdBSkQ7QUFLYkMsU0FBTyxlQUxNO0FBTWJDLFlBQVUsUUFORztBQU9iQyxVQUFRO0FBQUEsV0FBTztBQUNiQyxnQkFBVTtBQURHLEtBQVA7QUFBQSxHQVBLO0FBVWJDLGFBQVc7QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxRQUFjQyxRQUFkLFFBQWNBLFFBQWQ7QUFBQSxRQUF3QkMsVUFBeEIsUUFBd0JBLFVBQXhCO0FBQUEsV0FDVDtBQUFBO0FBQUEsaUJBQUssV0FBVywwQkFBR0YsU0FBSCxFQUFjLHdCQUFkLENBQWhCLElBQTZERSxVQUE3RDtBQUNHRDtBQURILEtBRFM7QUFBQTtBQVZFLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9pbWFnZS9ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9sYWJlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2ltYWdlV2l0aExhYmVsJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgZGVmYXVsdE5vZGVzOiAoKSA9PiBbSW1hZ2UsIExhYmVsXSxcbiAgbGFiZWw6ICdCaWxkIG1pdCBUZXh0JyxcbiAgY2F0ZWdvcnk6ICdCaWxkZXInLFxuICBzdHlsZXM6ICgpID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0pLFxuICBjb21wb25lbnQ6ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGF0dHJpYnV0ZXMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdpbWFnZS13aXRoLWxhYmVsLWJsb2NrJyl9IHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKSxcbn07XG4iXX0=

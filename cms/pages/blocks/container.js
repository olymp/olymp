var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Container } from 'olymp-fela';

export default {
  type: 'container',
  isVoid: false,
  kind: 'block',
  label: 'Container',
  category: 'Layout',
  defaultNodes: function defaultNodes() {
    return ['paragraph'];
  },
  component: function component(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        children = _ref.children;
    return React.createElement(
      Container,
      _extends({}, attributes, { className: className }),
      children
    );
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9jb250YWluZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiZGVmYXVsdE5vZGVzIiwiY29tcG9uZW50IiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLFlBQTFCOztBQUVBLGVBQWU7QUFDYkMsUUFBTSxXQURPO0FBRWJDLFVBQVEsS0FGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxXQUpNO0FBS2JDLFlBQVUsUUFMRztBQU1iQyxnQkFBYztBQUFBLFdBQU0sQ0FBQyxXQUFELENBQU47QUFBQSxHQU5EO0FBT2JDLGFBQVc7QUFBQSxRQUFHQyxVQUFILFFBQUdBLFVBQUg7QUFBQSxRQUFlQyxTQUFmLFFBQWVBLFNBQWY7QUFBQSxRQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsV0FDVDtBQUFDLGVBQUQ7QUFBQSxtQkFBZUYsVUFBZixJQUEyQixXQUFXQyxTQUF0QztBQUNHQztBQURILEtBRFM7QUFBQTtBQVBFLENBQWYiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvYmxvY2tzL2NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdvbHltcC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnY29udGFpbmVyJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdDb250YWluZXInLFxuICBjYXRlZ29yeTogJ0xheW91dCcsXG4gIGRlZmF1bHROb2RlczogKCkgPT4gWydwYXJhZ3JhcGgnXSxcbiAgY29tcG9uZW50OiAoeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IChcbiAgICA8Q29udGFpbmVyIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gICksXG59O1xuIl19

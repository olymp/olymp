import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query page($id: String) {\n    page(id: $id) {\n      id\n      children {\n        id\n        slug\n        name\n        description\n        blocks {\n          extract\n          image {\n            url\n            width\n            height\n            caption\n          }\n        }\n      }\n    }\n  }\n'], ['\n  query page($id: String) {\n    page(id: $id) {\n      id\n      children {\n        id\n        slug\n        name\n        description\n        blocks {\n          extract\n          image {\n            url\n            width\n            height\n            caption\n          }\n        }\n      }\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Container, Grid } from 'olymp-fela';
import Panorama from 'olymp-fela/panorama';
import { Image } from 'olymp-cloudinary';

import { createPushPathname } from 'olymp-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


export var page = gql(_templateObject);

var enhance = compose(graphql(page, {
  options: function options(_ref) {
    var editor = _ref.editor;
    return {
      variables: { id: editor.props.id }
    };
  }
}), connect(function (_ref2) {
  var location = _ref2.location;
  return {
    pathname: location.pathname
  };
}, function (dispatch) {
  return {
    push: createPushPathname(dispatch)
  };
}));
var BannerBlock = enhance(function (_ref3) {
  var attributes = _ref3.attributes,
      className = _ref3.className,
      children = _ref3.children,
      data = _ref3.data,
      push = _ref3.push,
      pathname = _ref3.pathname;
  return React.createElement(
    'div',
    _extends({ className: className }, attributes),
    React.createElement(
      Container,
      null,
      children,
      React.createElement(Panorama, { items: _get(data.page, 'children', []).map(function (x) {
          return {
            id: x.id,
            image: _get(x.blocks, 'image'),
            name: x.name
          };
        })
      })
    )
  );
});

export default {
  type: 'children',
  isVoid: true,
  kind: 'block',
  label: 'Unterseiten',
  category: 'Media',
  styles: function styles(_ref4) {
    var theme = _ref4.theme;
    return {
      width: '100%',
      marginBottom: 20,
      paddingY: theme.space3
    };
  },
  component: BannerBlock
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9jaGlsZHJlbi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjb21wb3NlIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIkdyaWQiLCJQYW5vcmFtYSIsIkltYWdlIiwiY3JlYXRlUHVzaFBhdGhuYW1lIiwiZ3FsIiwiZ3JhcGhxbCIsInBhZ2UiLCJlbmhhbmNlIiwib3B0aW9ucyIsImVkaXRvciIsInZhcmlhYmxlcyIsImlkIiwicHJvcHMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsImRpc3BhdGNoIiwiQmFubmVyQmxvY2siLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkYXRhIiwibWFwIiwieCIsImltYWdlIiwiYmxvY2tzIiwibmFtZSIsInR5cGUiLCJpc1ZvaWQiLCJraW5kIiwibGFiZWwiLCJjYXRlZ29yeSIsInN0eWxlcyIsInRoZW1lIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nWSIsInNwYWNlMyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixXQUF4QjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxJQUFwQixRQUFnQyxZQUFoQztBQUNBLE9BQU9DLFFBQVAsTUFBcUIscUJBQXJCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixrQkFBdEI7O0FBRUEsU0FBU0Msa0JBQVQsUUFBbUMsY0FBbkM7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGFBQWhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixjQUF4Qjs7O0FBR0EsT0FBTyxJQUFNQyxPQUFPRixHQUFQLGlCQUFOOztBQXVCUCxJQUFNRyxVQUFVVixRQUNkUSxRQUFRQyxJQUFSLEVBQWM7QUFDWkUsV0FBUztBQUFBLFFBQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFdBQWlCO0FBQ3hCQyxpQkFBVyxFQUFFQyxJQUFJRixPQUFPRyxLQUFQLENBQWFELEVBQW5CO0FBRGEsS0FBakI7QUFBQTtBQURHLENBQWQsQ0FEYyxFQU1kYixRQUNFO0FBQUEsTUFBR2UsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBbUI7QUFDakJDLGNBQVVELFNBQVNDO0FBREYsR0FBbkI7QUFBQSxDQURGLEVBSUU7QUFBQSxTQUFhO0FBQ1hDLFVBQU1aLG1CQUFtQmEsUUFBbkI7QUFESyxHQUFiO0FBQUEsQ0FKRixDQU5jLENBQWhCO0FBZUEsSUFBTUMsY0FBY1YsUUFDbEI7QUFBQSxNQUFHVyxVQUFILFNBQUdBLFVBQUg7QUFBQSxNQUFlQyxTQUFmLFNBQWVBLFNBQWY7QUFBQSxNQUEwQkMsUUFBMUIsU0FBMEJBLFFBQTFCO0FBQUEsTUFBb0NDLElBQXBDLFNBQW9DQSxJQUFwQztBQUFBLE1BQTBDTixJQUExQyxTQUEwQ0EsSUFBMUM7QUFBQSxNQUFnREQsUUFBaEQsU0FBZ0RBLFFBQWhEO0FBQUEsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXSyxTQUFoQixJQUErQkQsVUFBL0I7QUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNHRSxjQURIO0FBRUUsMEJBQUMsUUFBRCxJQUFVLE9BQ1IsS0FBSUMsS0FBS2YsSUFBVCxFQUFlLFVBQWYsRUFBMkIsRUFBM0IsRUFBK0JnQixHQUEvQixDQUFtQztBQUFBLGlCQUFNO0FBQ3ZDWCxnQkFBSVksRUFBRVosRUFEaUM7QUFFdkNhLG1CQUFPLEtBQUlELEVBQUVFLE1BQU4sRUFBYyxPQUFkLENBRmdDO0FBR3ZDQyxrQkFBTUgsRUFBRUc7QUFIK0IsV0FBTjtBQUFBLFNBQW5DO0FBREY7QUFGRjtBQURGLEdBREY7QUFBQSxDQURrQixDQUFwQjs7QUFpQkEsZUFBZTtBQUNiQyxRQUFNLFVBRE87QUFFYkMsVUFBUSxJQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLGFBSk07QUFLYkMsWUFBVSxPQUxHO0FBTWJDLFVBQVE7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QkMsYUFBTyxNQURlO0FBRXRCQyxvQkFBYyxFQUZRO0FBR3RCQyxnQkFBVUgsTUFBTUk7QUFITSxLQUFoQjtBQUFBLEdBTks7QUFXYkMsYUFBV3JCO0FBWEUsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9ibG9ja3MvY2hpbGRyZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgUGFub3JhbWEgZnJvbSAnb2x5bXAtZmVsYS9wYW5vcmFtYSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ29seW1wLWNsb3VkaW5hcnknO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgY3JlYXRlUHVzaFBhdGhuYW1lIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgcGFnZSA9IGdxbGBcbiAgcXVlcnkgcGFnZSgkaWQ6IFN0cmluZykge1xuICAgIHBhZ2UoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIGNoaWxkcmVuIHtcbiAgICAgICAgaWRcbiAgICAgICAgc2x1Z1xuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGJsb2NrcyB7XG4gICAgICAgICAgZXh0cmFjdFxuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgY2FwdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGdyYXBocWwocGFnZSwge1xuICAgIG9wdGlvbnM6ICh7IGVkaXRvciB9KSA9PiAoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkOiBlZGl0b3IucHJvcHMuaWQgfSxcbiAgICB9KSxcbiAgfSksXG4gIGNvbm5lY3QoXG4gICAgKHsgbG9jYXRpb24gfSkgPT4gKHtcbiAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICB9KSxcbiAgICBkaXNwYXRjaCA9PiAoe1xuICAgICAgcHVzaDogY3JlYXRlUHVzaFBhdGhuYW1lKGRpc3BhdGNoKSxcbiAgICB9KSxcbiAgKSxcbik7XG5jb25zdCBCYW5uZXJCbG9jayA9IGVuaGFuY2UoXG4gICh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIGRhdGEsIHB1c2gsIHBhdGhuYW1lIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4uYXR0cmlidXRlc30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxQYW5vcmFtYSBpdGVtcz17XG4gICAgICAgICAgZ2V0KGRhdGEucGFnZSwgJ2NoaWxkcmVuJywgW10pLm1hcCh4ID0+ICh7XG4gICAgICAgICAgICBpZDogeC5pZCxcbiAgICAgICAgICAgIGltYWdlOiBnZXQoeC5ibG9ja3MsICdpbWFnZScpLFxuICAgICAgICAgICAgbmFtZTogeC5uYW1lXG4gICAgICAgICAgfSkpfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdjaGlsZHJlbicsXG4gIGlzVm9pZDogdHJ1ZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdVbnRlcnNlaXRlbicsXG4gIGNhdGVnb3J5OiAnTWVkaWEnLFxuICBzdHlsZXM6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBhZGRpbmdZOiB0aGVtZS5zcGFjZTMsXG4gIH0pLFxuICBjb21wb25lbnQ6IEJhbm5lckJsb2NrLFxufTtcbiJdfQ==

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import List from '../list';
import Context from './context';
import Item from './item';

var getListStyle = function getListStyle(isDraggingOver) {
  return {
    backgroundColor: isDraggingOver ? '#88888878' : undefined,
    borderRadius: 5
  };
};

var list = function list(_ref) {
  var children = _ref.children,
      _ref$group = _ref.group,
      group = _ref$group === undefined ? 'dnd' : _ref$group,
      props = _objectWithoutProperties(_ref, ['children', 'group']);

  return React.createElement(
    Droppable,
    { droppableId: group },
    function (provided, snapshot) {
      return React.createElement(
        List,
        _extends({
          _ref: provided.innerRef,
          style: getListStyle(snapshot.isDraggingOver)
        }, props),
        children,
        provided.placeholder
      );
    }
  );
};

list.Item = Item;
list.Context = Context;
export default list;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbWVudS9kbmQvbGlzdC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJEcm9wcGFibGUiLCJMaXN0IiwiQ29udGV4dCIsIkl0ZW0iLCJnZXRMaXN0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpc0RyYWdnaW5nT3ZlciIsInVuZGVmaW5lZCIsImJvcmRlclJhZGl1cyIsImxpc3QiLCJjaGlsZHJlbiIsImdyb3VwIiwicHJvcHMiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiaW5uZXJSZWYiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLHFCQUExQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsU0FBakI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFdBQXBCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFtQjtBQUN0Q0MscUJBQWlCQyxpQkFBaUIsV0FBakIsR0FBK0JDLFNBRFY7QUFFdENDLGtCQUFjO0FBRndCLEdBQW5CO0FBQUEsQ0FBckI7O0FBS0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsd0JBQWFDLEtBQWI7QUFBQSxNQUFhQSxLQUFiLDhCQUFxQixLQUFyQjtBQUFBLE1BQStCQyxLQUEvQjs7QUFBQSxTQUNYO0FBQUMsYUFBRDtBQUFBLE1BQVcsYUFBYUQsS0FBeEI7QUFDRyxjQUFDRSxRQUFELEVBQVdDLFFBQVg7QUFBQSxhQUNDO0FBQUMsWUFBRDtBQUFBO0FBQ0UsZ0JBQU1ELFNBQVNFLFFBRGpCO0FBRUUsaUJBQU9YLGFBQWFVLFNBQVNSLGNBQXRCO0FBRlQsV0FHTU0sS0FITjtBQUtHRixnQkFMSDtBQU1HRyxpQkFBU0c7QUFOWixPQUREO0FBQUE7QUFESCxHQURXO0FBQUEsQ0FBYjs7QUFlQVAsS0FBS04sSUFBTCxHQUFZQSxJQUFaO0FBQ0FNLEtBQUtQLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGVBQWVPLElBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9tZW51L2RuZC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyb3BwYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vbGlzdCc7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pdGVtJztcblxuY29uc3QgZ2V0TGlzdFN0eWxlID0gaXNEcmFnZ2luZ092ZXIgPT4gKHtcbiAgYmFja2dyb3VuZENvbG9yOiBpc0RyYWdnaW5nT3ZlciA/ICcjODg4ODg4NzgnIDogdW5kZWZpbmVkLFxuICBib3JkZXJSYWRpdXM6IDUsXG59KTtcblxuY29uc3QgbGlzdCA9ICh7IGNoaWxkcmVuLCBncm91cCA9ICdkbmQnLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9e2dyb3VwfT5cbiAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgPExpc3RcbiAgICAgICAgX3JlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgIHN0eWxlPXtnZXRMaXN0U3R5bGUoc25hcHNob3QuaXNEcmFnZ2luZ092ZXIpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgPC9MaXN0PlxuICAgICl9XG4gIDwvRHJvcHBhYmxlPlxuKTtcblxubGlzdC5JdGVtID0gSXRlbTtcbmxpc3QuQ29udGV4dCA9IENvbnRleHQ7XG5leHBvcnQgZGVmYXVsdCBsaXN0O1xuIl19

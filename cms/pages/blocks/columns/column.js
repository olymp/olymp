var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { Grid } from 'olymp-fela';
import FaSquare from 'olymp-icons/lib/fa-square';

import Image from '../image/image';

export default {
  type: 'Pages.Template.Columns.Column',
  isVoid: false,
  kind: 'block',
  label: 'Spalte',
  defaultNodes: function defaultNodes() {
    return [Image, 'paragraph'];
  },
  styles: function styles(_ref) {
    var theme = _ref.theme;
    return {
      '> div': {
        paddingY: 10,
        '& .image-block': {
          marginTop: -10
        },
        '> [data-key]': {
          paddingX: 10
        },
        '> [data-slate-void]': {
          paddingX: 0
        },
        backgroundColor: theme.dark5,
        borderRadius: theme.borderRadius,
        overflow: 'hidden',
        height: '100%'
      }
    };
  },
  component: function component(_ref2) {
    var node = _ref2.node,
        children = _ref2.children,
        attributes = _ref2.attributes,
        className = _ref2.className;
    return React.createElement(
      Grid.Item,
      _extends({
        medium: 1,
        padding: node.data.get('bordered', true) ? '0 16px 24px 16px' : 0,
        className: className,
        gridSize: 4
      }, attributes),
      React.createElement(
        'div',
        null,
        children
      )
    );
  },
  actions: [{
    label: React.createElement(FaSquare, null),
    tooltip: 'Rahmen/Rahmenlos',
    toggle: function toggle(_ref3) {
      var node = _ref3.node,
          onChange = _ref3.onChange,
          value = _ref3.value;

      onChange(value.change().setNodeByKey(node.key, {
        data: node.data.set('bordered', node.data.get('bordered') === false)
      }));
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL2Jsb2Nrcy9jb2x1bW5zL2NvbHVtbi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJHcmlkIiwiSW1hZ2UiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiZGVmYXVsdE5vZGVzIiwic3R5bGVzIiwidGhlbWUiLCJwYWRkaW5nWSIsIm1hcmdpblRvcCIsInBhZGRpbmdYIiwiYmFja2dyb3VuZENvbG9yIiwiZGFyazUiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsImhlaWdodCIsImNvbXBvbmVudCIsIm5vZGUiLCJjaGlsZHJlbiIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJkYXRhIiwiZ2V0IiwiYWN0aW9ucyIsInRvb2x0aXAiLCJ0b2dnbGUiLCJvbkNoYW5nZSIsInZhbHVlIiwiY2hhbmdlIiwic2V0Tm9kZUJ5S2V5Iiwia2V5Iiwic2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCOzs7QUFFQSxPQUFPQyxLQUFQLE1BQWtCLGdCQUFsQjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU0sK0JBRE87QUFFYkMsVUFBUSxLQUZLO0FBR2JDLFFBQU0sT0FITztBQUliQyxTQUFPLFFBSk07QUFLYkMsZ0JBQWM7QUFBQSxXQUFNLENBQUNMLEtBQUQsRUFBUSxXQUFSLENBQU47QUFBQSxHQUxEO0FBTWJNLFVBQVE7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QixlQUFTO0FBQ1BDLGtCQUFVLEVBREg7QUFFUCwwQkFBa0I7QUFDaEJDLHFCQUFXLENBQUM7QUFESSxTQUZYO0FBS1Asd0JBQWdCO0FBQ2RDLG9CQUFVO0FBREksU0FMVDtBQVFQLCtCQUF1QjtBQUNyQkEsb0JBQVU7QUFEVyxTQVJoQjtBQVdQQyx5QkFBaUJKLE1BQU1LLEtBWGhCO0FBWVBDLHNCQUFjTixNQUFNTSxZQVpiO0FBYVBDLGtCQUFVLFFBYkg7QUFjUEMsZ0JBQVE7QUFkRDtBQURhLEtBQWhCO0FBQUEsR0FOSztBQXdCYkMsYUFBVztBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLFFBQVQsU0FBU0EsUUFBVDtBQUFBLFFBQW1CQyxVQUFuQixTQUFtQkEsVUFBbkI7QUFBQSxRQUErQkMsU0FBL0IsU0FBK0JBLFNBQS9CO0FBQUEsV0FDVDtBQUFDLFVBQUQsQ0FBTSxJQUFOO0FBQUE7QUFDRSxnQkFBUSxDQURWO0FBRUUsaUJBQVNILEtBQUtJLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQWQsRUFBMEIsSUFBMUIsSUFBa0Msa0JBQWxDLEdBQXVELENBRmxFO0FBR0UsbUJBQVdGLFNBSGI7QUFJRSxrQkFBVTtBQUpaLFNBS01ELFVBTE47QUFPRTtBQUFBO0FBQUE7QUFBTUQ7QUFBTjtBQVBGLEtBRFM7QUFBQSxHQXhCRTtBQW1DYkssV0FBUyxDQUNQO0FBQ0VuQixXQUFPLG9CQUFDLFFBQUQsT0FEVDtBQUVFb0IsYUFBUyxrQkFGWDtBQUdFQyxZQUFRLHVCQUErQjtBQUFBLFVBQTVCUixJQUE0QixTQUE1QkEsSUFBNEI7QUFBQSxVQUF0QlMsUUFBc0IsU0FBdEJBLFFBQXNCO0FBQUEsVUFBWkMsS0FBWSxTQUFaQSxLQUFZOztBQUNyQ0QsZUFDRUMsTUFBTUMsTUFBTixHQUFlQyxZQUFmLENBQTRCWixLQUFLYSxHQUFqQyxFQUFzQztBQUNwQ1QsY0FBTUosS0FBS0ksSUFBTCxDQUFVVSxHQUFWLENBQ0osVUFESSxFQUVKZCxLQUFLSSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFkLE1BQThCLEtBRjFCO0FBRDhCLE9BQXRDLENBREY7QUFRRDtBQVpILEdBRE87QUFuQ0ksQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9wYWdlcy9ibG9ja3MvY29sdW1ucy9jb2x1bW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRmFTcXVhcmUgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1hZ2UvaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdQYWdlcy5UZW1wbGF0ZS5Db2x1bW5zLkNvbHVtbicsXG4gIGlzVm9pZDogZmFsc2UsXG4gIGtpbmQ6ICdibG9jaycsXG4gIGxhYmVsOiAnU3BhbHRlJyxcbiAgZGVmYXVsdE5vZGVzOiAoKSA9PiBbSW1hZ2UsICdwYXJhZ3JhcGgnXSxcbiAgc3R5bGVzOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgICc+IGRpdic6IHtcbiAgICAgIHBhZGRpbmdZOiAxMCxcbiAgICAgICcmIC5pbWFnZS1ibG9jayc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAtMTAsXG4gICAgICB9LFxuICAgICAgJz4gW2RhdGEta2V5XSc6IHtcbiAgICAgICAgcGFkZGluZ1g6IDEwLFxuICAgICAgfSxcbiAgICAgICc+IFtkYXRhLXNsYXRlLXZvaWRdJzoge1xuICAgICAgICBwYWRkaW5nWDogMCxcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms1LFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB9LFxuICB9KSxcbiAgY29tcG9uZW50OiAoeyBub2RlLCBjaGlsZHJlbiwgYXR0cmlidXRlcywgY2xhc3NOYW1lIH0pID0+IChcbiAgICA8R3JpZC5JdGVtXG4gICAgICBtZWRpdW09ezF9XG4gICAgICBwYWRkaW5nPXtub2RlLmRhdGEuZ2V0KCdib3JkZXJlZCcsIHRydWUpID8gJzAgMTZweCAyNHB4IDE2cHgnIDogMH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZ3JpZFNpemU9ezR9XG4gICAgICB7Li4uYXR0cmlidXRlc31cbiAgICA+XG4gICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L0dyaWQuSXRlbT5cbiAgKSxcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFTcXVhcmUgLz4sXG4gICAgICB0b29sdGlwOiAnUmFobWVuL1JhaG1lbmxvcycsXG4gICAgICB0b2dnbGU6ICh7IG5vZGUsIG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgIHZhbHVlLmNoYW5nZSgpLnNldE5vZGVCeUtleShub2RlLmtleSwge1xuICAgICAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldChcbiAgICAgICAgICAgICAgJ2JvcmRlcmVkJyxcbiAgICAgICAgICAgICAgbm9kZS5kYXRhLmdldCgnYm9yZGVyZWQnKSA9PT0gZmFsc2UsXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==

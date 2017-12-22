import React from 'react';
import { createComponent } from 'react-fela';

export default createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    marginTop: 3,
    marginBottom: -3,
    display: 'block',
    '> svg': {
      fill: theme.light2
    },
    onHover: {
      '> svg': {
        fill: theme.light
      }
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      Icon = _ref2.icon;
  return React.createElement(
    'span',
    { className: className },
    React.createElement(Icon, { size: 14, color: '' })
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2NvbXBvbmVudHMvaWNvbi5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb21wb25lbnQiLCJ0aGVtZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJmaWxsIiwibGlnaHQyIiwib25Ib3ZlciIsImxpZ2h0IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJPYmplY3QiLCJrZXlzIiwicCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsZUFBZUEsZ0JBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxlQUFXLENBREc7QUFFZEMsa0JBQWMsQ0FBQyxDQUZEO0FBR2RDLGFBQVMsT0FISztBQUlkLGFBQVM7QUFDUEMsWUFBTUosTUFBTUs7QUFETCxLQUpLO0FBT2RDLGFBQVM7QUFDUCxlQUFTO0FBQ1BGLGNBQU1KLE1BQU1PO0FBREw7QUFERjtBQVBLLEdBQWhCO0FBQUEsQ0FEYSxFQWNiO0FBQUEsTUFBR0MsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBb0JDLElBQXBCLFNBQWNDLElBQWQ7QUFBQSxTQUNHO0FBQUE7QUFBQSxNQUFNLFdBQVdGLFNBQWpCO0FBQ0Msd0JBQUMsSUFBRCxJQUFNLE1BQU0sRUFBWixFQUFnQixPQUFNLEVBQXRCO0FBREQsR0FESDtBQUFBLENBZGEsRUFrQmI7QUFBQSxTQUFLRyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBbEJhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvY29tcG9uZW50cy9pY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgbWFyZ2luVG9wOiAzLFxuICAgIG1hcmdpbkJvdHRvbTogLTMsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnPiBzdmcnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5saWdodDIsXG4gICAgfSxcbiAgICBvbkhvdmVyOiB7XG4gICAgICAnPiBzdmcnOiB7XG4gICAgICAgIGZpbGw6IHRoZW1lLmxpZ2h0LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBpY29uOiBJY29uIH0pID0+XG4gICAgKDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxJY29uIHNpemU9ezE0fSBjb2xvcj1cIlwiIC8+XG4gICAgPC9zcGFuPiksXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG4iXX0=

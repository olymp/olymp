import { createComponent } from 'react-fela';

export default (function (Wrapped) {
  return createComponent(function (_ref) {
    var theme = _ref.theme,
        color = _ref.color,
        width = _ref.width,
        height = _ref.height,
        size = _ref.size,
        onClick = _ref.onClick,
        margin = _ref.margin,
        marginLeft = _ref.marginLeft,
        marginRight = _ref.marginRight,
        marginTop = _ref.marginTop,
        marginBottom = _ref.marginBottom;
    return {
      margin: margin,
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginTop: marginTop,
      marginBottom: marginBottom,
      fill: color === true ? theme.color : typeof color === 'string' ? theme[color] || color : theme.inverted ? theme.light : theme.dark
    };
  }, Wrapped, ['width', 'height', 'size', 'onClick', 'onMouseEnter', 'onMouseLeave', 'onMouseOver', 'onMouseDown']);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL3N0eWxlZC5lczYiXSwibmFtZXMiOlsiY3JlYXRlQ29tcG9uZW50IiwidGhlbWUiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZSIsIm9uQ2xpY2siLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmaWxsIiwiaW52ZXJ0ZWQiLCJsaWdodCIsImRhcmsiLCJXcmFwcGVkIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxlQUFULFFBQWdDLFlBQWhDOztBQUVBLGdCQUFlO0FBQUEsU0FDYkEsZ0JBQ0U7QUFBQSxRQUNFQyxLQURGLFFBQ0VBLEtBREY7QUFBQSxRQUVFQyxLQUZGLFFBRUVBLEtBRkY7QUFBQSxRQUdFQyxLQUhGLFFBR0VBLEtBSEY7QUFBQSxRQUlFQyxNQUpGLFFBSUVBLE1BSkY7QUFBQSxRQUtFQyxJQUxGLFFBS0VBLElBTEY7QUFBQSxRQU1FQyxPQU5GLFFBTUVBLE9BTkY7QUFBQSxRQU9FQyxNQVBGLFFBT0VBLE1BUEY7QUFBQSxRQVFFQyxVQVJGLFFBUUVBLFVBUkY7QUFBQSxRQVNFQyxXQVRGLFFBU0VBLFdBVEY7QUFBQSxRQVVFQyxTQVZGLFFBVUVBLFNBVkY7QUFBQSxRQVdFQyxZQVhGLFFBV0VBLFlBWEY7QUFBQSxXQVlPO0FBQ0xKLG9CQURLO0FBRUxDLDRCQUZLO0FBR0xDLDhCQUhLO0FBSUxDLDBCQUpLO0FBS0xDLGdDQUxLO0FBTUxDLFlBQ0VWLFVBQVUsSUFBVixHQUNJRCxNQUFNQyxLQURWLEdBRUksT0FBT0EsS0FBUCxLQUFpQixRQUFqQixHQUNFRCxNQUFNQyxLQUFOLEtBQWdCQSxLQURsQixHQUVFRCxNQUFNWSxRQUFOLEdBQWlCWixNQUFNYSxLQUF2QixHQUErQmIsTUFBTWM7QUFYeEMsS0FaUDtBQUFBLEdBREYsRUEwQkVDLE9BMUJGLEVBMkJFLENBQ0UsT0FERixFQUVFLFFBRkYsRUFHRSxNQUhGLEVBSUUsU0FKRixFQUtFLGNBTEYsRUFNRSxjQU5GLEVBT0UsYUFQRixFQVFFLGFBUkYsQ0EzQkYsQ0FEYTtBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvaWNvbnMvc3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWQgPT5cbiAgY3JlYXRlQ29tcG9uZW50KFxuICAgICh7XG4gICAgICB0aGVtZSxcbiAgICAgIGNvbG9yLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBzaXplLFxuICAgICAgb25DbGljayxcbiAgICAgIG1hcmdpbixcbiAgICAgIG1hcmdpbkxlZnQsXG4gICAgICBtYXJnaW5SaWdodCxcbiAgICAgIG1hcmdpblRvcCxcbiAgICAgIG1hcmdpbkJvdHRvbSxcbiAgICB9KSA9PiAoe1xuICAgICAgbWFyZ2luLFxuICAgICAgbWFyZ2luTGVmdCxcbiAgICAgIG1hcmdpblJpZ2h0LFxuICAgICAgbWFyZ2luVG9wLFxuICAgICAgbWFyZ2luQm90dG9tLFxuICAgICAgZmlsbDpcbiAgICAgICAgY29sb3IgPT09IHRydWVcbiAgICAgICAgICA/IHRoZW1lLmNvbG9yXG4gICAgICAgICAgOiB0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IHRoZW1lW2NvbG9yXSB8fCBjb2xvclxuICAgICAgICAgICAgOiB0aGVtZS5pbnZlcnRlZCA/IHRoZW1lLmxpZ2h0IDogdGhlbWUuZGFyayxcbiAgICB9KSxcbiAgICBXcmFwcGVkLFxuICAgIFtcbiAgICAgICd3aWR0aCcsXG4gICAgICAnaGVpZ2h0JyxcbiAgICAgICdzaXplJyxcbiAgICAgICdvbkNsaWNrJyxcbiAgICAgICdvbk1vdXNlRW50ZXInLFxuICAgICAgJ29uTW91c2VMZWF2ZScsXG4gICAgICAnb25Nb3VzZU92ZXInLFxuICAgICAgJ29uTW91c2VEb3duJyxcbiAgICBdLFxuICApO1xuIl19

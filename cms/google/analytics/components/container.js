import { createComponent } from 'react-fela';

export default createComponent(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    },
    '> div': {
      flex: '1 1 0%',
      overflow: 'auto'
    },
    '> div:not(:first-of-type)': {
      marginTop: theme.space2
    }
  };
}, 'div', []);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy9jb250YWluZXIuZXM2Il0sIm5hbWVzIjpbImNyZWF0ZUNvbXBvbmVudCIsInRoZW1lIiwicG9zaXRpb24iLCJoYXNGbGV4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImZsZXgiLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsInNwYWNlMiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBVCxRQUFnQyxZQUFoQzs7QUFFQSxlQUFlQSxnQkFDYjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGNBQVUsVUFESTtBQUVkQyxhQUFTO0FBQ1BDLGVBQVMsTUFERjtBQUVQQyxxQkFBZSxRQUZSO0FBR1BDLHNCQUFnQixlQUhUO0FBSVBDLGNBQVE7QUFKRCxLQUZLO0FBUWQsYUFBUztBQUNQQyxZQUFNLFFBREM7QUFFUEMsZ0JBQVU7QUFGSCxLQVJLO0FBWWQsaUNBQTZCO0FBQzNCQyxpQkFBV1QsTUFBTVU7QUFEVTtBQVpmLEdBQWhCO0FBQUEsQ0FEYSxFQWlCYixLQWpCYSxFQWtCYixFQWxCYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgIH0sXG4gICAgJz4gZGl2Jzoge1xuICAgICAgZmxleDogJzEgMSAwJScsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIH0sXG4gICAgJz4gZGl2Om5vdCg6Zmlyc3Qtb2YtdHlwZSknOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNlMixcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIFtdXG4pO1xuIl19

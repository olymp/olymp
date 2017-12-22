import React from 'react';
import { Container } from 'olymp-fela';
import { createComponent } from 'react-fela';

export default createComponent(function () {
  return {
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column'
    },
    '> div': {
      flex: '1 1 0%',
      height: 'auto !important',
      overflow: 'auto'
    }
  };
}, function (p) {
  return React.createElement(Container, p);
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvY29tcG9uZW50cy9mbGV4LWNvbnRhaW5lci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJjcmVhdGVDb21wb25lbnQiLCJwb3NpdGlvbiIsImhhc0ZsZXgiLCJkaXNwbGF5IiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJvdmVyZmxvdyIsInAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsZUFBZUEsZ0JBQ2I7QUFBQSxTQUFPO0FBQ0xDLGNBQVUsVUFETDtBQUVMQyxhQUFTO0FBQ1BDLGVBQVMsTUFERjtBQUVQQyxZQUFNLFFBRkM7QUFHUEMscUJBQWU7QUFIUixLQUZKO0FBT0wsYUFBUztBQUNQRCxZQUFNLFFBREM7QUFFUEUsY0FBUSxpQkFGRDtBQUdQQyxnQkFBVTtBQUhIO0FBUEosR0FBUDtBQUFBLENBRGEsRUFjYjtBQUFBLFNBQUssb0JBQUMsU0FBRCxFQUFlQyxDQUFmLENBQUw7QUFBQSxDQWRhLEVBZWI7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBZmEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9nb29nbGUvYW5hbHl0aWNzL2NvbXBvbmVudHMvZmxleC1jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXg6ICcxIDEgMCUnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICAnPiBkaXYnOiB7XG4gICAgICBmbGV4OiAnMSAxIDAlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8gIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIH0sXG4gIH0pLFxuICBwID0+IDxDb250YWluZXIgey4uLnB9IC8+LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbiJdfQ==

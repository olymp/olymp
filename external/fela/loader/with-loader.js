import React from 'react';
import Loader from './content';

export default (function (Wrapped) {
  return function (props) {
    return React.createElement(
      Loader,
      { height: 600, isLoading: props.isLoading },
      React.createElement(Wrapped, props)
    );
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbG9hZGVyL3dpdGgtbG9hZGVyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxvYWRlciIsInByb3BzIiwiaXNMb2FkaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7QUFFQSxnQkFBZTtBQUFBLFNBQVc7QUFBQSxXQUN4QjtBQUFDLFlBQUQ7QUFBQSxRQUFRLFFBQVEsR0FBaEIsRUFBcUIsV0FBV0MsTUFBTUMsU0FBdEM7QUFDRSwwQkFBQyxPQUFELEVBQWFELEtBQWI7QUFERixLQUR3QjtBQUFBLEdBQVg7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbG9hZGVyL3dpdGgtbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb250ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZCA9PiBwcm9wcyA9PiAoXG4gIDxMb2FkZXIgaGVpZ2h0PXs2MDB9IGlzTG9hZGluZz17cHJvcHMuaXNMb2FkaW5nfT5cbiAgICA8V3JhcHBlZCB7Li4ucHJvcHN9IC8+XG4gIDwvTG9hZGVyPlxuKTtcbiJdfQ==

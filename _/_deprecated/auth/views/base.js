function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Children } from 'react';
import { createComponent } from 'olymp-fela';
import { withTheme } from 'react-fela';
import { Link } from 'olymp-router';
import Form from 'olymp-ui/form';
import Modal from '../modal';

var def = withTheme(function (_ref) {
  var showLogo = _ref.showLogo,
      isOpen = _ref.isOpen,
      title = _ref.title,
      pathname = _ref.pathname,
      onCancel = _ref.onCancel,
      onOk = _ref.onOk,
      cancelText = _ref.cancelText,
      okText = _ref.okText,
      loading = _ref.loading,
      saving = _ref.saving,
      theme = _ref.theme,
      version = _ref.version,
      props = _objectWithoutProperties(_ref, ['showLogo', 'isOpen', 'title', 'pathname', 'onCancel', 'onOk', 'cancelText', 'okText', 'loading', 'saving', 'theme', 'version']);

  var links = null;
  var children = Children.toArray(props.children).filter(function (child) {
    if (child.type && child.type === def.Links) {
      links = child;
      return false;
    }

    return true;
  });

  return React.createElement(
    Modal,
    {
      showLogo: showLogo !== false,
      isOpen: isOpen,
      title: title,
      onCancel: onCancel,
      maskClosable: false,
      loading: loading,
      noPortal: true
    },
    React.createElement(
      Form,
      null,
      children
    ),
    React.createElement(
      Modal.Footer,
      null,
      React.createElement(
        Modal.Button,
        { onClick: onCancel },
        cancelText || 'Abbruch'
      ),
      onOk && React.createElement(
        Modal.Button,
        { type: 'primary', onClick: onOk, loading: saving },
        okText || title
      )
    ),
    React.createElement(
      Modal.Copyright,
      null,
      links && React.createElement(
        def.Links,
        null,
        links
      ),
      React.createElement(
        Link,
        { to: { pathname: pathname, query: { register: null, login: undefined } } },
        theme.copyright || 'made with ❤ by olymp'
      )
    )
  );
});
def.Links = createComponent(function (_ref2) {
  var theme = _ref2.theme;
  return {
    textAlign: 'center',
    '& a': {
      display: 'inline-block',
      minWidth: 200,
      paddingBottom: theme.space2,
      color: 'white',
      opacity: 0.3,
      onHover: {
        opacity: 1
      }
    }
  };
}, 'div');

export default def;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3MvYmFzZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNyZWF0ZUNvbXBvbmVudCIsIndpdGhUaGVtZSIsIkxpbmsiLCJGb3JtIiwiTW9kYWwiLCJkZWYiLCJzaG93TG9nbyIsImlzT3BlbiIsInRpdGxlIiwicGF0aG5hbWUiLCJvbkNhbmNlbCIsIm9uT2siLCJjYW5jZWxUZXh0Iiwib2tUZXh0IiwibG9hZGluZyIsInNhdmluZyIsInRoZW1lIiwidmVyc2lvbiIsInByb3BzIiwibGlua3MiLCJjaGlsZHJlbiIsInRvQXJyYXkiLCJmaWx0ZXIiLCJjaGlsZCIsInR5cGUiLCJMaW5rcyIsInF1ZXJ5IiwicmVnaXN0ZXIiLCJsb2dpbiIsInVuZGVmaW5lZCIsImNvcHlyaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsInBhZGRpbmdCb3R0b20iLCJzcGFjZTIiLCJjb2xvciIsIm9wYWNpdHkiLCJvbkhvdmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLFNBQVQsUUFBMEIsWUFBMUI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixlQUFqQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsVUFBbEI7O0FBRUEsSUFBTUMsTUFBTUosVUFDVixnQkFjTTtBQUFBLE1BYkpLLFFBYUksUUFiSkEsUUFhSTtBQUFBLE1BWkpDLE1BWUksUUFaSkEsTUFZSTtBQUFBLE1BWEpDLEtBV0ksUUFYSkEsS0FXSTtBQUFBLE1BVkpDLFFBVUksUUFWSkEsUUFVSTtBQUFBLE1BVEpDLFFBU0ksUUFUSkEsUUFTSTtBQUFBLE1BUkpDLElBUUksUUFSSkEsSUFRSTtBQUFBLE1BUEpDLFVBT0ksUUFQSkEsVUFPSTtBQUFBLE1BTkpDLE1BTUksUUFOSkEsTUFNSTtBQUFBLE1BTEpDLE9BS0ksUUFMSkEsT0FLSTtBQUFBLE1BSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLE1BSEpDLEtBR0ksUUFISkEsS0FHSTtBQUFBLE1BRkpDLE9BRUksUUFGSkEsT0FFSTtBQUFBLE1BRERDLEtBQ0M7O0FBQ0osTUFBSUMsUUFBUSxJQUFaO0FBQ0EsTUFBTUMsV0FBV3JCLFNBQVNzQixPQUFULENBQWlCSCxNQUFNRSxRQUF2QixFQUFpQ0UsTUFBakMsQ0FBd0MsaUJBQVM7QUFDaEUsUUFBSUMsTUFBTUMsSUFBTixJQUFjRCxNQUFNQyxJQUFOLEtBQWVuQixJQUFJb0IsS0FBckMsRUFBNEM7QUFDMUNOLGNBQVFJLEtBQVI7QUFDQSxhQUFPLEtBQVA7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHQVBnQixDQUFqQjs7QUFTQSxTQUNFO0FBQUMsU0FBRDtBQUFBO0FBQ0UsZ0JBQVVqQixhQUFhLEtBRHpCO0FBRUUsY0FBUUMsTUFGVjtBQUdFLGFBQU9DLEtBSFQ7QUFJRSxnQkFBVUUsUUFKWjtBQUtFLG9CQUFjLEtBTGhCO0FBTUUsZUFBU0ksT0FOWDtBQU9FO0FBUEY7QUFTRTtBQUFDLFVBQUQ7QUFBQTtBQUFPTTtBQUFQLEtBVEY7QUFVRTtBQUFDLFdBQUQsQ0FBTyxNQUFQO0FBQUE7QUFDRTtBQUFDLGFBQUQsQ0FBTyxNQUFQO0FBQUEsVUFBYyxTQUFTVixRQUF2QjtBQUNHRSxzQkFBYztBQURqQixPQURGO0FBSUdELGNBQ0M7QUFBQyxhQUFELENBQU8sTUFBUDtBQUFBLFVBQWMsTUFBSyxTQUFuQixFQUE2QixTQUFTQSxJQUF0QyxFQUE0QyxTQUFTSSxNQUFyRDtBQUNHRixrQkFBVUw7QUFEYjtBQUxKLEtBVkY7QUFvQkU7QUFBQyxXQUFELENBQU8sU0FBUDtBQUFBO0FBQ0dXLGVBQVM7QUFBQyxXQUFELENBQUssS0FBTDtBQUFBO0FBQVlBO0FBQVosT0FEWjtBQUVFO0FBQUMsWUFBRDtBQUFBLFVBQU0sSUFBSSxFQUFFVixrQkFBRixFQUFZaUIsT0FBTyxFQUFFQyxVQUFVLElBQVosRUFBa0JDLE9BQU9DLFNBQXpCLEVBQW5CLEVBQVY7QUFDR2IsY0FBTWMsU0FBTixJQUFtQjtBQUR0QjtBQUZGO0FBcEJGLEdBREY7QUE2QkQsQ0F2RFMsQ0FBWjtBQXlEQXpCLElBQUlvQixLQUFKLEdBQVl6QixnQkFDVjtBQUFBLE1BQUdnQixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkZSxlQUFXLFFBREc7QUFFZCxXQUFPO0FBQ0xDLGVBQVMsY0FESjtBQUVMQyxnQkFBVSxHQUZMO0FBR0xDLHFCQUFlbEIsTUFBTW1CLE1BSGhCO0FBSUxDLGFBQU8sT0FKRjtBQUtMQyxlQUFTLEdBTEo7QUFNTEMsZUFBUztBQUNQRCxpQkFBUztBQURGO0FBTko7QUFGTyxHQUFoQjtBQUFBLENBRFUsRUFjVixLQWRVLENBQVo7O0FBaUJBLGVBQWVoQyxHQUFmIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvdmlld3MvYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJ29seW1wLXVpL2Zvcm0nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFsJztcblxuY29uc3QgZGVmID0gd2l0aFRoZW1lKFxuICAoe1xuICAgIHNob3dMb2dvLFxuICAgIGlzT3BlbixcbiAgICB0aXRsZSxcbiAgICBwYXRobmFtZSxcbiAgICBvbkNhbmNlbCxcbiAgICBvbk9rLFxuICAgIGNhbmNlbFRleHQsXG4gICAgb2tUZXh0LFxuICAgIGxvYWRpbmcsXG4gICAgc2F2aW5nLFxuICAgIHRoZW1lLFxuICAgIHZlcnNpb24sXG4gICAgLi4ucHJvcHNcbiAgfSkgPT4ge1xuICAgIGxldCBsaW5rcyA9IG51bGw7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBDaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKS5maWx0ZXIoY2hpbGQgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZSA9PT0gZGVmLkxpbmtzKSB7XG4gICAgICAgIGxpbmtzID0gY2hpbGQ7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIHNob3dMb2dvPXtzaG93TG9nbyAhPT0gZmFsc2V9XG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgbWFza0Nsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgbm9Qb3J0YWxcbiAgICAgID5cbiAgICAgICAgPEZvcm0+e2NoaWxkcmVufTwvRm9ybT5cbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8TW9kYWwuQnV0dG9uIG9uQ2xpY2s9e29uQ2FuY2VsfT5cbiAgICAgICAgICAgIHtjYW5jZWxUZXh0IHx8ICdBYmJydWNoJ31cbiAgICAgICAgICA8L01vZGFsLkJ1dHRvbj5cbiAgICAgICAgICB7b25PayAmJiAoXG4gICAgICAgICAgICA8TW9kYWwuQnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17b25Pa30gbG9hZGluZz17c2F2aW5nfT5cbiAgICAgICAgICAgICAge29rVGV4dCB8fCB0aXRsZX1cbiAgICAgICAgICAgIDwvTW9kYWwuQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICA8TW9kYWwuQ29weXJpZ2h0PlxuICAgICAgICAgIHtsaW5rcyAmJiA8ZGVmLkxpbmtzPntsaW5rc308L2RlZi5MaW5rcz59XG4gICAgICAgICAgPExpbmsgdG89e3sgcGF0aG5hbWUsIHF1ZXJ5OiB7IHJlZ2lzdGVyOiBudWxsLCBsb2dpbjogdW5kZWZpbmVkIH0gfX0+XG4gICAgICAgICAgICB7dGhlbWUuY29weXJpZ2h0IHx8ICdtYWRlIHdpdGgg4p2kIGJ5IG9seW1wJ31cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTW9kYWwuQ29weXJpZ2h0PlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9LFxuKTtcbmRlZi5MaW5rcyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICcmIGEnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1pbldpZHRoOiAyMDAsXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjZTIsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmO1xuIl19

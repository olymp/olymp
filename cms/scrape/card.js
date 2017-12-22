var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    query scrape($url: String) {\n      scrape(url: $url) {\n        id\n        description\n        origin\n        favicon {\n          url\n          width\n          height\n          caption\n        }\n        image {\n          url\n          width\n          height\n          caption\n        }\n        title\n        url\n      }\n    }\n  '], ['\n    query scrape($url: String) {\n      scrape(url: $url) {\n        id\n        description\n        origin\n        favicon {\n          url\n          width\n          height\n          caption\n        }\n        image {\n          url\n          width\n          height\n          caption\n        }\n        title\n        url\n      }\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { createComponent, ContentLoader } from 'olymp-fela';

var styles = function styles(props) {
  return {
    '> .card-img': {
      float: 'left',
      position: 'relative',
      height: 180,
      width: 150,
      marginRight: 10,
      display: 'inline-block'
    },
    '> article': {
      paddingX: 10,
      '> h3 > a': {
        color: '#022d5e'
      },
      '> div > a': {
        color: '#022d5e'
      },
      '> a': {
        color: '#022d5e',
        '> img': {
          marginTop: 7,
          marginRight: 5,
          float: 'left',
          width: 16,
          height: 16
        },
        fontSize: 12
      }
    },
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
    borderRadius: 5,
    maxHeight: 180,
    minWidth: '100%',
    display: 'inline-block',
    ':hover': {
      transform: 'scale(1.03, 1.03)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
    }
  };
};

var _ref2 = React.createElement('br', null);

var component = function component(_ref) {
  var loading = _ref.loading,
      data = _ref.data,
      _ref$scrape = _ref.scrape,
      image = _ref$scrape.image,
      title = _ref$scrape.title,
      description = _ref$scrape.description,
      url = _ref$scrape.url,
      origin = _ref$scrape.origin,
      favicon = _ref$scrape.favicon,
      error = _ref.error,
      children = _ref.children,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ['loading', 'data', 'scrape', 'error', 'children', 'value']);

  return React.createElement(
    ContentLoader,
    { height: 177, isLoading: loading },
    React.createElement(
      'div',
      rest,
      children,
      error ? console.error(error) : null,
      !!image && React.createElement('img', { src: image.url, alt: image.caption, className: 'card-img' }),
      React.createElement(
        'article',
        null,
        React.createElement(
          'a',
          { target: '_blank', href: origin },
          favicon && React.createElement('img', { src: favicon.url, alt: favicon.caption }),
          origin
        ),
        React.createElement(
          'h3',
          null,
          React.createElement(
            'a',
            { target: '_blank', href: url },
            title
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'span',
            null,
            description
          ),
          '\xA0',
          React.createElement(
            'a',
            { target: '_blank', href: url },
            '>',
            '\xA0Weiterlesen'
          ),
          _ref2
        )
      )
    )
  );
};

var card = graphql(gql(_templateObject), {
  options: function options(_ref3) {
    var value = _ref3.value;
    return {
      fetchPolicy: !value ? 'cache-only' : 'network-only',
      variables: {
        url: value
      }
    };
  },
  props: function props(_ref4) {
    var ownProps = _ref4.ownProps,
        data = _ref4.data;
    return _extends({}, ownProps, {
      loading: data.loading && !data.error,
      value: ownProps.value,
      error: data.error,
      scrape: data.scrape || {}
    });
  }
})(createComponent(styles, component, function (p) {
  return Object.keys(p);
}));

export default card;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NjcmFwZS9jYXJkLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsImdxbCIsImdyYXBocWwiLCJjcmVhdGVDb21wb25lbnQiLCJDb250ZW50TG9hZGVyIiwic3R5bGVzIiwiZmxvYXQiLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwicGFkZGluZ1giLCJjb2xvciIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwib3ZlcmZsb3ciLCJjdXJzb3IiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwibWF4SGVpZ2h0IiwibWluV2lkdGgiLCJ0cmFuc2Zvcm0iLCJjb21wb25lbnQiLCJsb2FkaW5nIiwiZGF0YSIsInNjcmFwZSIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsIm9yaWdpbiIsImZhdmljb24iLCJlcnJvciIsImNoaWxkcmVuIiwidmFsdWUiLCJyZXN0IiwiY29uc29sZSIsImNhcHRpb24iLCJjYXJkIiwib3B0aW9ucyIsImZldGNoUG9saWN5IiwidmFyaWFibGVzIiwicHJvcHMiLCJvd25Qcm9wcyIsIk9iamVjdCIsImtleXMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGFBQWhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixjQUF4QjtBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLGFBQTFCLFFBQStDLFlBQS9DOztBQUVBLElBQU1DLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDdkIsbUJBQWU7QUFDYkMsYUFBTyxNQURNO0FBRWJDLGdCQUFVLFVBRkc7QUFHYkMsY0FBUSxHQUhLO0FBSWJDLGFBQU8sR0FKTTtBQUtiQyxtQkFBYSxFQUxBO0FBTWJDLGVBQVM7QUFOSSxLQURRO0FBU3ZCLGlCQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWCxrQkFBWTtBQUNWQyxl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TEUsYUFBT1MsU0FBU1QsS0FIWDtBQUlMRixhQUFPUixLQUFLUSxLQUpQO0FBS0xQLGNBQVFELEtBQUtDLE1BQUwsSUFBZTtBQUxsQjtBQUFBO0FBUFQsQ0F4QlcsRUF1Q1h4QixnQkFBZ0JFLE1BQWhCLEVBQXdCbUIsU0FBeEIsRUFBbUM7QUFBQSxTQUFLc0IsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQUFuQyxDQXZDVyxDQUFiOztBQXlDQSxlQUFlUixJQUFmIiwiZmlsZSI6InBhY2thZ2VzL3NjcmFwZS9jYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIENvbnRlbnRMb2FkZXIgfSBmcm9tICdvbHltcC1mZWxhJztcblxuY29uc3Qgc3R5bGVzID0gcHJvcHMgPT4gKHtcbiAgJz4gLmNhcmQtaW1nJzoge1xuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgaGVpZ2h0OiAxODAsXG4gICAgd2lkdGg6IDE1MCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIH0sXG4gICc+IGFydGljbGUnOiB7XG4gICAgcGFkZGluZ1g6IDEwLFxuICAgICc+IGgzID4gYSc6IHtcbiAgICAgIGNvbG9yOiAnIzAyMmQ1ZScsXG4gICAgfSxcbiAgICAnPiBkaXYgPiBhJzoge1xuICAgICAgY29sb3I6ICcjMDIyZDVlJyxcbiAgICB9LFxuICAgICc+IGEnOiB7XG4gICAgICBjb2xvcjogJyMwMjJkNWUnLFxuICAgICAgJz4gaW1nJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IDcsXG4gICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICB3aWR0aDogMTYsXG4gICAgICAgIGhlaWdodDogMTYsXG4gICAgICB9LFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgIH0sXG4gIH0sXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjZzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICBib3JkZXJSYWRpdXM6IDUsXG4gIG1heEhlaWdodDogMTgwLFxuICBtaW5XaWR0aDogJzEwMCUnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgJzpob3Zlcic6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAzLCAxLjAzKScsXG4gICAgYm94U2hhZG93OiAnMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyknLFxuICB9LFxufSk7XG5jb25zdCBjb21wb25lbnQgPSAoe1xuICBsb2FkaW5nLFxuICBkYXRhLFxuICBzY3JhcGU6IHsgaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsLCBvcmlnaW4sIGZhdmljb24gfSxcbiAgZXJyb3IsXG4gIGNoaWxkcmVuLFxuICB2YWx1ZSxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Q29udGVudExvYWRlciBoZWlnaHQ9ezE3N30gaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICA8ZGl2IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtlcnJvciA/IGNvbnNvbGUuZXJyb3IoZXJyb3IpIDogbnVsbH1cbiAgICAgIHshIWltYWdlICYmIChcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gYWx0PXtpbWFnZS5jYXB0aW9ufSBjbGFzc05hbWU9XCJjYXJkLWltZ1wiIC8+XG4gICAgICApfVxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e29yaWdpbn0+XG4gICAgICAgICAge2Zhdmljb24gJiYgPGltZyBzcmM9e2Zhdmljb24udXJsfSBhbHQ9e2Zhdmljb24uY2FwdGlvbn0gLz59XG4gICAgICAgICAge29yaWdpbn1cbiAgICAgICAgPC9hPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17dXJsfT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXt1cmx9PlxuICAgICAgICAgICAgeyc+J30mbmJzcDtXZWl0ZXJsZXNlblxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9kaXY+XG4gIDwvQ29udGVudExvYWRlcj5cbik7XG5cbmNvbnN0IGNhcmQgPSBncmFwaHFsKFxuICBncWxgXG4gICAgcXVlcnkgc2NyYXBlKCR1cmw6IFN0cmluZykge1xuICAgICAgc2NyYXBlKHVybDogJHVybCkge1xuICAgICAgICBpZFxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBvcmlnaW5cbiAgICAgICAgZmF2aWNvbiB7XG4gICAgICAgICAgdXJsXG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICBjYXB0aW9uXG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgY2FwdGlvblxuICAgICAgICB9XG4gICAgICAgIHRpdGxlXG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIG9wdGlvbnM6ICh7IHZhbHVlIH0pID0+ICh7XG4gICAgICBmZXRjaFBvbGljeTogIXZhbHVlID8gJ2NhY2hlLW9ubHknIDogJ25ldHdvcmstb25seScsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgdXJsOiB2YWx1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIGxvYWRpbmc6IGRhdGEubG9hZGluZyAmJiAhZGF0YS5lcnJvcixcbiAgICAgIHZhbHVlOiBvd25Qcm9wcy52YWx1ZSxcbiAgICAgIGVycm9yOiBkYXRhLmVycm9yLFxuICAgICAgc2NyYXBlOiBkYXRhLnNjcmFwZSB8fCB7fSxcbiAgICB9KSxcbiAgfSxcbikoY3JlYXRlQ29tcG9uZW50KHN0eWxlcywgY29tcG9uZW50LCBwID0+IE9iamVjdC5rZXlzKHApKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhcmQ7XG4iXX0=

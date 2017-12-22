import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/form/style';
import _Form3 from 'antd/lib/form';
import 'antd/lib/form/style';
import _Form2 from 'antd/lib/form';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { DateRangeEditor } from 'olymp-ui';
import { Sidebar, Drawer } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import FaBarChart from 'olymp-icons/lib/fa-bar-chart';
import FaCogs from 'olymp-icons/lib/fa-cogs';
import FaClockO from 'olymp-icons/lib/fa-clock-o';
import FaCube from 'olymp-icons/lib/fa-cube';
import FaUsers from 'olymp-icons/lib/fa-users';
import FaNeuter from 'olymp-icons/lib/fa-neuter';
import FaMobile from 'olymp-icons/lib/fa-mobile';
import subDays from 'date-fns/subDays';

import { compose, withState } from 'recompose';
import { Charts } from './views';
import { MetricSelect } from './components';

var initState = {
  metrics: ['PAGEVIEWS', 'SESSIONS'],
  range: [subDays(new Date(), 180).getUTCDate(), new Date().getUTCDate()],
  dimensions: ['YEAR_MONTH'],
  sorts: ['YEAR_MONTH_ASC'],
  chart: 'line',
  dimensions2: ['PAGE_PATH'],
  sorts2: ['PAGEVIEWS_DESC'],
  chart2: 'barVertical'
};

var enhance = compose(withRouter, withState('settings', 'setSettings'), _Form.create());

var _ref2 = React.createElement(
  Menu.Item,
  { icon: React.createElement(FaBarChart, null), large: true },
  'Statistik',
  React.createElement(
    'small',
    null,
    'Google-Analytics-Daten auswerten'
  )
);

var _ref3 = React.createElement(FaCube, null);

var _ref4 = React.createElement(FaClockO, null);

var _ref5 = React.createElement(FaUsers, null);

var _ref6 = React.createElement(FaNeuter, null);

var _ref7 = React.createElement(FaMobile, null);

var _ref8 = React.createElement(Menu.Divider, null);

var _ref9 = React.createElement(FaCogs, null);

var _ref10 = React.createElement(
  Menu.Item,
  { icon: React.createElement(FaCogs, null), large: true },
  'Einstellungen',
  React.createElement(
    'small',
    null,
    'Einstellungen f\xFCr alle Charts'
  )
);

var _ref11 = React.createElement(MetricSelect, null);

var _ref12 = React.createElement(DateRangeEditor, { format: 'DD.MM.YYYY' });

var Analytics = enhance(_class = function (_Component) {
  _inherits(Analytics, _Component);

  function Analytics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Analytics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Analytics.__proto__ || Object.getPrototypeOf(Analytics)).call.apply(_ref, [this].concat(args))), _this), _this.ok = function () {
      var _this$props = _this.props,
          router = _this$props.router,
          pathname = _this$props.pathname,
          query = _this$props.query,
          form = _this$props.form,
          setSettings = _this$props.setSettings;


      form.validateFields(function (err, values) {
        if (!err) {
          setSettings(false);
          router.push({
            pathname: pathname,
            query: _extends({}, query, values)
          });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Analytics, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          router = _props.router,
          pathname = _props.pathname,
          query = _props.query,
          form = _props.form,
          settings = _props.settings,
          setSettings = _props.setSettings;
      var getFieldDecorator = form.getFieldDecorator;


      var data = _extends({}, initState, query);
      if (!Array.isArray(data.metrics)) {
        data.metrics = [data.metrics];
      }
      if (!Array.isArray(data.dimensions)) {
        data.dimensions = [data.dimensions];
      }
      if (!Array.isArray(data.dimensions2)) {
        data.dimensions2 = [data.dimensions2];
      }
      if (!Array.isArray(data.sorts)) {
        data.sorts = [data.sorts];
      }
      if (!Array.isArray(data.sorts2)) {
        data.sorts2 = [data.sorts2];
      }
      data.range = [parseInt(data.range[0], 10), parseInt(data.range[1], 10)];

      return React.createElement(
        Sidebar,
        {
          left: 72,
          menu: React.createElement(
            Menu,
            {
              header: _ref2
            },
            React.createElement(
              Menu.Item,
              {
                icon: _ref3,
                onClick: function onClick() {
                  return router.push({
                    pathname: pathname,
                    query: _extends({ '@analytics': null }, initState)
                  });
                },
                active: !query['@analytics']
              },
              'Seitenaufrufe'
            ),
            React.createElement(
              Menu.Item,
              {
                icon: _ref4,
                onClick: function onClick() {
                  return router.push({
                    pathname: pathname,
                    query: _extends({
                      '@analytics': 'duration'
                    }, initState, {
                      metrics: ['TIME_ON_PAGE', 'AVG_TIME_ON_PAGE'],
                      sorts2: ['TIME_ON_PAGE_DESC']
                    })
                  });
                },
                active: query['@analytics'] === 'duration'
              },
              'Verweildauer'
            ),
            React.createElement(
              Menu.Item,
              {
                icon: _ref5,
                active: query['@analytics'] === 'visitors',
                onClick: function onClick() {
                  return router.push({
                    pathname: pathname,
                    query: _extends({
                      '@analytics': 'visitors'
                    }, initState, {
                      metrics: ['USERS', 'NEW_USERS'],
                      sorts2: ['USERS_DESC']
                    })
                  });
                },
                key: 'visitors'
              },
              'Besucher'
            ),
            React.createElement(
              Menu.Item,
              {
                icon: _ref6,
                active: query['@analytics'] === 'location',
                onClick: function onClick() {
                  return router.push({
                    pathname: pathname,
                    query: _extends({
                      '@analytics': 'location'
                    }, initState, {
                      metrics: ['USERS'],
                      dimensions: ['REGION'],
                      dimensions2: ['CITY'],
                      sorts: ['USERS_DESC'],
                      sorts2: ['USERS_DESC'],
                      chart: 'pie',
                      chart2: 'barVertical'
                    })
                  });
                },
                key: 'location'
              },
              'Herkunft'
            ),
            React.createElement(
              Menu.Item,
              {
                icon: _ref7,
                active: query['@analytics'] === 'devices',
                onClick: function onClick() {
                  return router.push({
                    pathname: pathname,
                    query: _extends({
                      '@analytics': 'devices'
                    }, initState, {
                      metrics: ['USERS'],
                      dimensions: ['DEVICE_CATEGORY'],
                      sorts: ['USERS_DESC'],
                      chart: 'pie',
                      chart2: 'none'
                    })
                  });
                }
              },
              'Ger\xE4te'
            ),
            _ref8,
            React.createElement(
              Menu.Item,
              {
                icon: _ref9,
                active: query['@analytics'] === 'devices',
                onClick: function onClick() {
                  return setSettings(true);
                }
              },
              'Einstellungen'
            )
          )
        },
        React.createElement(Charts, data),
        React.createElement(
          Drawer,
          { open: !!settings, onClose: function onClose() {
              return setSettings(false);
            }, right: true },
          React.createElement(
            Menu,
            {
              header: _ref10,
              headerColor: true,
              headerInverted: true
            },
            React.createElement(
              _Form2.Item,
              { key: 'metrics', label: 'Messwerte' },
              getFieldDecorator('metrics', {
                initialValue: data.metrics,
                rules: [{
                  required: true,
                  message: 'Bitte geben Sie mindestens einen Messwert an'
                }]
              })(_ref11)
            ),
            React.createElement(
              _Form3.Item,
              { key: 'range', label: 'Zeitraum' },
              getFieldDecorator('range', {
                initialValue: data.range,
                rules: [{
                  required: true,
                  message: 'Bitte geben Sie einen Zeitraum an'
                }]
              })(_ref12)
            ),
            React.createElement(
              _Button,
              { type: 'primary', size: 'large', onClick: this.ok },
              'Werte \xFCbernehmen'
            )
          )
        )
      );
    }
  }]);

  return Analytics;
}(Component)) || _class;

export { Analytics as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3MvaW5kZXguZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFJvdXRlciIsIkRhdGVSYW5nZUVkaXRvciIsIlNpZGViYXIiLCJEcmF3ZXIiLCJNZW51IiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsIkNoYXJ0cyIsIk1ldHJpY1NlbGVjdCIsImluaXRTdGF0ZSIsIm1ldHJpY3MiLCJyYW5nZSIsInN1YkRheXMiLCJEYXRlIiwiZ2V0VVRDRGF0ZSIsImRpbWVuc2lvbnMiLCJzb3J0cyIsImNoYXJ0IiwiZGltZW5zaW9uczIiLCJzb3J0czIiLCJjaGFydDIiLCJlbmhhbmNlIiwiY3JlYXRlIiwiQW5hbHl0aWNzIiwib2siLCJwcm9wcyIsInJvdXRlciIsInBhdGhuYW1lIiwicXVlcnkiLCJmb3JtIiwic2V0U2V0dGluZ3MiLCJ2YWxpZGF0ZUZpZWxkcyIsImVyciIsInZhbHVlcyIsInB1c2giLCJzZXR0aW5ncyIsImdldEZpZWxkRGVjb3JhdG9yIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsVUFBaEM7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxNQUFsQixRQUFnQyxZQUFoQztBQUNBLE9BQU9DLElBQVAsTUFBaUIsaUJBQWpCOzs7Ozs7Ozs7O0FBWUEsU0FBU0MsT0FBVCxFQUFrQkMsU0FBbEIsUUFBbUMsV0FBbkM7QUFDQSxTQUFTQyxNQUFULFFBQXVCLFNBQXZCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixjQUE3Qjs7QUFFQSxJQUFNQyxZQUFZO0FBQ2hCQyxXQUFTLENBQUMs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QXJCRjtBQWlDRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxTQUFiLEVBQXVCLE1BQUssT0FBNUIsRUFBb0MsU0FBUyxLQUFLcEIsRUFBbEQ7QUFBQTtBQUFBO0FBakNGO0FBREY7QUFsSEYsT0FERjtBQTRKRDs7OztFQWpNb0N6QixTOztTQUFsQndCLFMiLCJmaWxlIjoicGFja2FnZXMvZ29vZ2xlL2FuYWx5dGljcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IERhdGVSYW5nZUVkaXRvciB9IGZyb20gJ29seW1wLXVpJztcbmltcG9ydCB7IFNpZGViYXIsIERyYXdlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IE1lbnUgZnJvbSAnb2x5bXAtZmVsYS9tZW51JztcbmltcG9ydCB7XG4gIEZhQmFyQ2hhcnQsXG4gIEZhQ29ncyxcbiAgRmFDbG9ja08sXG4gIEZhQ3ViZSxcbiAgRmFVc2VycyxcbiAgRmFOZXV0ZXIsXG4gIEZhTW9iaWxlLFxufSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHN1YkRheXMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgQ2hhcnRzIH0gZnJvbSAnLi92aWV3cyc7XG5pbXBvcnQgeyBNZXRyaWNTZWxlY3QgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIG1ldHJpY3M6IFsnUEFHRVZJRVdTJywgJ1NFU1NJT05TJ10sXG4gIHJhbmdlOiBbc3ViRGF5cyhuZXcgRGF0ZSgpLCAxODApLmdldFVUQ0RhdGUoKSwgbmV3IERhdGUoKS5nZXRVVENEYXRlKCldLFxuICBkaW1lbnNpb25zOiBbJ1lFQVJfTU9OVEgnXSxcbiAgc29ydHM6IFsnWUVBUl9NT05USF9BU0MnXSxcbiAgY2hhcnQ6ICdsaW5lJyxcbiAgZGltZW5zaW9uczI6IFsnUEFHRV9QQVRIJ10sXG4gIHNvcnRzMjogWydQQUdFVklFV1NfREVTQyddLFxuICBjaGFydDI6ICdiYXJWZXJ0aWNhbCcsXG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbiAgd2l0aFN0YXRlKCdzZXR0aW5ncycsICdzZXRTZXR0aW5ncycpLFxuICBGb3JtLmNyZWF0ZSgpLFxuKTtcblxuQGVuaGFuY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9rID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcm91dGVyLCBwYXRobmFtZSwgcXVlcnksIGZvcm0sIHNldFNldHRpbmdzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgZm9ybS52YWxpZGF0ZUZpZWxkcygoZXJyLCB2YWx1ZXMpID0+IHtcbiAgICAgIGlmICghZXJyKSB7XG4gICAgICAgIHNldFNldHRpbmdzKGZhbHNlKTtcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5OiB7IC4uLnF1ZXJ5LCAuLi52YWx1ZXMgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBwYXRobmFtZSwgcXVlcnksIGZvcm0sIHNldHRpbmdzLCBzZXRTZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSBmb3JtO1xuXG4gICAgY29uc3QgZGF0YSA9IHsgLi4uaW5pdFN0YXRlLCAuLi5xdWVyeSB9O1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLm1ldHJpY3MpKSB7XG4gICAgICBkYXRhLm1ldHJpY3MgPSBbZGF0YS5tZXRyaWNzXTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGltZW5zaW9ucykpIHtcbiAgICAgIGRhdGEuZGltZW5zaW9ucyA9IFtkYXRhLmRpbWVuc2lvbnNdO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5kaW1lbnNpb25zMikpIHtcbiAgICAgIGRhdGEuZGltZW5zaW9uczIgPSBbZGF0YS5kaW1lbnNpb25zMl07XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnNvcnRzKSkge1xuICAgICAgZGF0YS5zb3J0cyA9IFtkYXRhLnNvcnRzXTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuc29ydHMyKSkge1xuICAgICAgZGF0YS5zb3J0czIgPSBbZGF0YS5zb3J0czJdO1xuICAgIH1cbiAgICBkYXRhLnJhbmdlID0gW3BhcnNlSW50KGRhdGEucmFuZ2VbMF0sIDEwKSwgcGFyc2VJbnQoZGF0YS5yYW5nZVsxXSwgMTApXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZWJhclxuICAgICAgICBsZWZ0PXs3Mn1cbiAgICAgICAgbWVudT17XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj17PEZhQmFyQ2hhcnQgLz59IGxhcmdlPlxuICAgICAgICAgICAgICAgIFN0YXRpc3Rpa1xuICAgICAgICAgICAgICAgIDxzbWFsbD5Hb29nbGUtQW5hbHl0aWNzLURhdGVuIGF1c3dlcnRlbjwvc21hbGw+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17PEZhQ3ViZSAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7ICdAYW5hbHl0aWNzJzogbnVsbCwgLi4uaW5pdFN0YXRlIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhY3RpdmU9eyFxdWVyeVsnQGFuYWx5dGljcyddfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZWl0ZW5hdWZydWZlXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17PEZhQ2xvY2tPIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0BhbmFseXRpY3MnOiAnZHVyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAuLi5pbml0U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIG1ldHJpY3M6IFsnVElNRV9PTl9QQUdFJywgJ0FWR19USU1FX09OX1BBR0UnXSxcbiAgICAgICAgICAgICAgICAgICAgc29ydHMyOiBbJ1RJTUVfT05fUEFHRV9ERVNDJ10sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVsnQGFuYWx5dGljcyddID09PSAnZHVyYXRpb24nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWZXJ3ZWlsZGF1ZXJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBpY29uPXs8RmFVc2VycyAvPn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVsnQGFuYWx5dGljcyddID09PSAndmlzaXRvcnMnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0BhbmFseXRpY3MnOiAndmlzaXRvcnMnLFxuICAgICAgICAgICAgICAgICAgICAuLi5pbml0U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIG1ldHJpY3M6IFsnVVNFUlMnLCAnTkVXX1VTRVJTJ10sXG4gICAgICAgICAgICAgICAgICAgIHNvcnRzMjogWydVU0VSU19ERVNDJ10sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAga2V5PVwidmlzaXRvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCZXN1Y2hlclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGljb249ezxGYU5ldXRlciAvPn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtxdWVyeVsnQGFuYWx5dGljcyddID09PSAnbG9jYXRpb24nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0BhbmFseXRpY3MnOiAnbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAuLi5pbml0U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIG1ldHJpY3M6IFsnVVNFUlMnXSxcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uczogWydSRUdJT04nXSxcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uczI6IFsnQ0lUWSddLFxuICAgICAgICAgICAgICAgICAgICBzb3J0czogWydVU0VSU19ERVNDJ10sXG4gICAgICAgICAgICAgICAgICAgIHNvcnRzMjogWydVU0VSU19ERVNDJ10sXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiAncGllJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQyOiAnYmFyVmVydGljYWwnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGtleT1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSGVya3VuZnRcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBpY29uPXs8RmFNb2JpbGUgLz59XG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbJ0BhbmFseXRpY3MnXSA9PT0gJ2RldmljZXMnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0BhbmFseXRpY3MnOiAnZGV2aWNlcycsXG4gICAgICAgICAgICAgICAgICAgIC4uLmluaXRTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbWV0cmljczogWydVU0VSUyddLFxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiBbJ0RFVklDRV9DQVRFR09SWSddLFxuICAgICAgICAgICAgICAgICAgICBzb3J0czogWydVU0VSU19ERVNDJ10sXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiAncGllJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2Vyw6R0ZVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5EaXZpZGVyIC8+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGljb249ezxGYUNvZ3MgLz59XG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbJ0BhbmFseXRpY3MnXSA9PT0gJ2RldmljZXMnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZXR0aW5ncyh0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRWluc3RlbGx1bmdlblxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxDaGFydHMgey4uLmRhdGF9IC8+XG5cbiAgICAgICAgPERyYXdlciBvcGVuPXshIXNldHRpbmdzfSBvbkNsb3NlPXsoKSA9PiBzZXRTZXR0aW5ncyhmYWxzZSl9IHJpZ2h0PlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxGYUNvZ3MgLz59IGxhcmdlPlxuICAgICAgICAgICAgICAgIEVpbnN0ZWxsdW5nZW5cbiAgICAgICAgICAgICAgICA8c21hbGw+RWluc3RlbGx1bmdlbiBmw7xyIGFsbGUgQ2hhcnRzPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJDb2xvclxuICAgICAgICAgICAgaGVhZGVySW52ZXJ0ZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGtleT1cIm1ldHJpY3NcIiBsYWJlbD1cIk1lc3N3ZXJ0ZVwiPlxuICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ21ldHJpY3MnLCB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBkYXRhLm1ldHJpY3MsXG4gICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdCaXR0ZSBnZWJlbiBTaWUgbWluZGVzdGVucyBlaW5lbiBNZXNzd2VydCBhbicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0pKDxNZXRyaWNTZWxlY3QgLz4pfVxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGtleT1cInJhbmdlXCIgbGFiZWw9XCJaZWl0cmF1bVwiPlxuICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3JhbmdlJywge1xuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogZGF0YS5yYW5nZSxcbiAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0JpdHRlIGdlYmVuIFNpZSBlaW5lbiBaZWl0cmF1bSBhbicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0pKDxEYXRlUmFuZ2VFZGl0b3IgZm9ybWF0PVwiREQuTU0uWVlZWVwiIC8+KX1cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCIgb25DbGljaz17dGhpcy5va30+XG4gICAgICAgICAgICAgIFdlcnRlIMO8YmVybmVobWVuXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

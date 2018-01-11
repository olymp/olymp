'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/lib/button/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympRouter = require('olymp-router');

var _olympUi = require('olymp-ui');

var _olympFela = require('olymp-fela');

var _menu = require('olymp-fela/menu');

var _menu2 = _interopRequireDefault(_menu);

var _faBarChart = require('olymp-icons/lib/fa-bar-chart');

var _faBarChart2 = _interopRequireDefault(_faBarChart);

var _faCogs = require('olymp-icons/lib/fa-cogs');

var _faCogs2 = _interopRequireDefault(_faCogs);

var _faClockO = require('olymp-icons/lib/fa-clock-o');

var _faClockO2 = _interopRequireDefault(_faClockO);

var _faCube = require('olymp-icons/lib/fa-cube');

var _faCube2 = _interopRequireDefault(_faCube);

var _faUsers = require('olymp-icons/lib/fa-users');

var _faUsers2 = _interopRequireDefault(_faUsers);

var _faNeuter = require('olymp-icons/lib/fa-neuter');

var _faNeuter2 = _interopRequireDefault(_faNeuter);

var _faMobile = require('olymp-icons/lib/fa-mobile');

var _faMobile2 = _interopRequireDefault(_faMobile);

var _subDays = require('date-fns/subDays');

var _subDays2 = _interopRequireDefault(_subDays);

var _recompose = require('recompose');

var _views = require('./views');

var _components = require('./components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initState = {
  metrics: ['PAGEVIEWS', 'SESSIONS'],
  range: [(0, _subDays2.default)(new Date(), 180).getUTCDate(), new Date().getUTCDate()],
  dimensions: ['YEAR_MONTH'],
  sorts: ['YEAR_MONTH_ASC'],
  chart: 'line',
  dimensions2: ['PAGE_PATH'],
  sorts2: ['PAGEVIEWS_DESC'],
  chart2: 'barVertical'
};

var enhance = (0, _recompose.compose)(_olympRouter.withRouter, (0, _recompose.withState)('settings', 'setSettings'), _form2.default.create());

var _ref2 = _react2.default.createElement(
  _menu2.default.Item,
  { icon: _react2.default.createElement(_faBarChart2.default, null), large: true },
  'Statistik',
  _react2.default.createElement(
    'small',
    null,
    'Google-Analytics-Daten auswerten'
  )
);

var _ref3 = _react2.default.createElement(_faCube2.default, null);

var _ref4 = _react2.default.createElement(_faClockO2.default, null);

var _ref5 = _react2.default.createElement(_faUsers2.default, null);

var _ref6 = _react2.default.createElement(_faNeuter2.default, null);

var _ref7 = _react2.default.createElement(_faMobile2.default, null);

var _ref8 = _react2.default.createElement(_menu2.default.Divider, null);

var _ref9 = _react2.default.createElement(_faCogs2.default, null);

var _ref10 = _react2.default.createElement(
  _menu2.default.Item,
  { icon: _react2.default.createElement(_faCogs2.default, null), large: true },
  'Einstellungen',
  _react2.default.createElement(
    'small',
    null,
    'Einstellungen f\xFCr alle Charts'
  )
);

var _ref11 = _react2.default.createElement(_components.MetricSelect, null);

var _ref12 = _react2.default.createElement(_olympUi.DateRangeEditor, { format: 'DD.MM.YYYY' });

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

      return _react2.default.createElement(
        _olympFela.Sidebar,
        {
          left: 72,
          menu: _react2.default.createElement(
            _menu2.default,
            {
              header: _ref2
            },
            _react2.default.createElement(
              _menu2.default.Item,
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
            _react2.default.createElement(
              _menu2.default.Item,
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
            _react2.default.createElement(
              _menu2.default.Item,
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
            _react2.default.createElement(
              _menu2.default.Item,
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
            _react2.default.createElement(
              _menu2.default.Item,
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
            _react2.default.createElement(
              _menu2.default.Item,
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
        _react2.default.createElement(_views.Charts, data),
        _react2.default.createElement(
          _olympFela.Drawer,
          { open: !!settings, onClose: function onClose() {
              return setSettings(false);
            }, right: true },
          _react2.default.createElement(
            _menu2.default,
            {
              header: _ref10,
              headerColor: true,
              headerInverted: true
            },
            _react2.default.createElement(
              _form2.default.Item,
              { key: 'metrics', label: 'Messwerte' },
              getFieldDecorator('metrics', {
                initialValue: data.metrics,
                rules: [{
                  required: true,
                  message: 'Bitte geben Sie mindestens einen Messwert an'
                }]
              })(_ref11)
            ),
            _react2.default.createElement(
              _form2.default.Item,
              { key: 'range', label: 'Zeitraum' },
              getFieldDecorator('range', {
                initialValue: data.range,
                rules: [{
                  required: true,
                  message: 'Bitte geben Sie einen Zeitraum an'
                }]
              })(_ref12)
            ),
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', size: 'large', onClick: this.ok },
              'Werte \xFCbernehmen'
            )
          )
        )
      );
    }
  }]);

  return Analytics;
}(_react.Component)) || _class;

exports.default = Analytics;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL2luZGV4LmVzNiJdLCJuYW1lcyI6WyJpbml0U3RhdGUiLCJtZXRyaWNzIiwicmFuZ2UiLCJEYXRlIiwiZ2V0VVRDRGF0ZSIsImRpbWVuc2lvbnMiLCJzb3J0cyIsImNoYXJ0IiwiZGltZW5zaW9uczIiLCJzb3J0czIiLCJjaGFydDIiLCJlbmhhbmNlIiwiY3JlYXRlIiwiQW5hbHl0aWNzIiwib2siLCJwcm9wcyIsInJvdXRlciIsInBhdGhuYW1lIiwicXVlcnkiLCJmb3JtIiwic2V0U2V0dGluZ3MiLCJ2YWxpZGF0ZUZpZWxkcyIsImVyciIsInZhbHVlcyIsInB1c2giLCJzZXR0aW5ncyIsImdldEZpZWxkRGVjb3JhdG9yIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDaEJDLFdBQVMsQ0FBQyxXQUFELEVBQWMsVUFBZCxDQURPO0FBRWhCQyxTQUFPLENBQUMsdUJBQVEsSUFBSUMsSUFBSixFQUFSLEVBQW9CLEdBQXBCLEVBQXlCQyxVQUF6QixFQUFELEVBQXdDLElBQUlELElBQUosR0FBV0MsVUFBWCxFQUF4QyxDQUZTO0FBR2hCQyxjQUFZLENBQUMsWUFBRCxDQUhJO0FBSWhCQyxTQUFPLENBQUMsZ0JBQUQsQ0FKUztBQUtoQkMsU0FBTyxNQUxTO0FBTWhCQyxlQUFhLENBQUMsV0FBRCxDQU5HO0FBT2hCQyxVQUFRLENBQUMsZ0JBQUQsQ0FQUTtBQVFoQkMsVUFBUTtBQVJRLENBQWxCOztBQVdBLElBQU1DLFVBQVUsaURBRWQsMEJBQVUsVUFBVixFQUFz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O0FBUUU7QUFSRjtBQVVFO0FBQUEsNkJBQU0sSUFBTjtBQUFBLGdCQUFXLEtBQUksU0FBZixFQUF5QixPQUFNLFdBQS9CO0FBQ0dNLGdDQUFrQixTQUFsQixFQUE2QjtBQUM1QkssOEJBQWNKLEtBQUsxQixPQURTO0FBRTVCK0IsdUJBQU8sQ0FDTDtBQUNFQyw0QkFBVSxJQURaO0FBRUVDLDJCQUFTO0FBRlgsaUJBREs7QUFGcUIsZUFBN0I7QUFESCxhQVZGO0FBcUJFO0FBQUEsNkJBQU0sSUFBTjtBQUFBLGdCQUFXLEtBQUksT0FBZixFQUF1QixPQUFNLFVBQTdCO0FBQ0dSLGdDQUFrQixPQUFsQixFQUEyQjtBQUMxQkssOEJBQWNKLEtBQUt6QixLQURPO0FBRTFCOEIsdUJBQU8sQ0FDTDtBQUNFQyw0QkFBVSxJQURaO0FBRUVDLDJCQUFTO0FBRlgsaUJBREs7QUFGbUIsZUFBM0I7QUFESCxhQXJCRjtBQWlDRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxTQUFiLEVBQXVCLE1BQUssT0FBNUIsRUFBb0MsU0FBUyxLQUFLcEIsRUFBbEQ7QUFBQTtBQUFBO0FBakNGO0FBREY7QUFsSEYsT0FERjtBQTRKRDs7Ozs7O2tCQWpNa0JELFMiLCJmaWxlIjoiY21zL2dvb2dsZS9hbmFseXRpY3MvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBEYXRlUmFuZ2VFZGl0b3IgfSBmcm9tICdvbHltcC11aSc7XG5pbXBvcnQgeyBTaWRlYmFyLCBEcmF3ZXIgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQge1xuICBGYUJhckNoYXJ0LFxuICBGYUNvZ3MsXG4gIEZhQ2xvY2tPLFxuICBGYUN1YmUsXG4gIEZhVXNlcnMsXG4gIEZhTmV1dGVyLFxuICBGYU1vYmlsZSxcbn0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IENoYXJ0cyB9IGZyb20gJy4vdmlld3MnO1xuaW1wb3J0IHsgTWV0cmljU2VsZWN0IH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICBtZXRyaWNzOiBbJ1BBR0VWSUVXUycsICdTRVNTSU9OUyddLFxuICByYW5nZTogW3N1YkRheXMobmV3IERhdGUoKSwgMTgwKS5nZXRVVENEYXRlKCksIG5ldyBEYXRlKCkuZ2V0VVRDRGF0ZSgpXSxcbiAgZGltZW5zaW9uczogWydZRUFSX01PTlRIJ10sXG4gIHNvcnRzOiBbJ1lFQVJfTU9OVEhfQVNDJ10sXG4gIGNoYXJ0OiAnbGluZScsXG4gIGRpbWVuc2lvbnMyOiBbJ1BBR0VfUEFUSCddLFxuICBzb3J0czI6IFsnUEFHRVZJRVdTX0RFU0MnXSxcbiAgY2hhcnQyOiAnYmFyVmVydGljYWwnLFxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4gIHdpdGhTdGF0ZSgnc2V0dGluZ3MnLCAnc2V0U2V0dGluZ3MnKSxcbiAgRm9ybS5jcmVhdGUoKSxcbik7XG5cbkBlbmhhbmNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvayA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJvdXRlciwgcGF0aG5hbWUsIHF1ZXJ5LCBmb3JtLCBzZXRTZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICBpZiAoIWVycikge1xuICAgICAgICBzZXRTZXR0aW5ncyhmYWxzZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeTogeyAuLi5xdWVyeSwgLi4udmFsdWVzIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgcGF0aG5hbWUsIHF1ZXJ5LCBmb3JtLCBzZXR0aW5ncywgc2V0U2V0dGluZ3MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBnZXRGaWVsZERlY29yYXRvciB9ID0gZm9ybTtcblxuICAgIGNvbnN0IGRhdGEgPSB7IC4uLmluaXRTdGF0ZSwgLi4ucXVlcnkgfTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5tZXRyaWNzKSkge1xuICAgICAgZGF0YS5tZXRyaWNzID0gW2RhdGEubWV0cmljc107XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmRpbWVuc2lvbnMpKSB7XG4gICAgICBkYXRhLmRpbWVuc2lvbnMgPSBbZGF0YS5kaW1lbnNpb25zXTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZGltZW5zaW9uczIpKSB7XG4gICAgICBkYXRhLmRpbWVuc2lvbnMyID0gW2RhdGEuZGltZW5zaW9uczJdO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5zb3J0cykpIHtcbiAgICAgIGRhdGEuc29ydHMgPSBbZGF0YS5zb3J0c107XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnNvcnRzMikpIHtcbiAgICAgIGRhdGEuc29ydHMyID0gW2RhdGEuc29ydHMyXTtcbiAgICB9XG4gICAgZGF0YS5yYW5nZSA9IFtwYXJzZUludChkYXRhLnJhbmdlWzBdLCAxMCksIHBhcnNlSW50KGRhdGEucmFuZ2VbMV0sIDEwKV07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGViYXJcbiAgICAgICAgbGVmdD17NzJ9XG4gICAgICAgIG1lbnU9e1xuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICA8TWVudS5JdGVtIGljb249ezxGYUJhckNoYXJ0IC8+fSBsYXJnZT5cbiAgICAgICAgICAgICAgICBTdGF0aXN0aWtcbiAgICAgICAgICAgICAgICA8c21hbGw+R29vZ2xlLUFuYWx5dGljcy1EYXRlbiBhdXN3ZXJ0ZW48L3NtYWxsPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGljb249ezxGYUN1YmUgLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeTogeyAnQGFuYWx5dGljcyc6IG51bGwsIC4uLmluaXRTdGF0ZSB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWN0aXZlPXshcXVlcnlbJ0BhbmFseXRpY3MnXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VpdGVuYXVmcnVmZVxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgIGljb249ezxGYUNsb2NrTyAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICdAYW5hbHl0aWNzJzogJ2R1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgLi4uaW5pdFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBtZXRyaWNzOiBbJ1RJTUVfT05fUEFHRScsICdBVkdfVElNRV9PTl9QQUdFJ10sXG4gICAgICAgICAgICAgICAgICAgIHNvcnRzMjogWydUSU1FX09OX1BBR0VfREVTQyddLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbJ0BhbmFseXRpY3MnXSA9PT0gJ2R1cmF0aW9uJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmVyd2VpbGRhdWVyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17PEZhVXNlcnMgLz59XG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbJ0BhbmFseXRpY3MnXSA9PT0gJ3Zpc2l0b3JzJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICdAYW5hbHl0aWNzJzogJ3Zpc2l0b3JzJyxcbiAgICAgICAgICAgICAgICAgICAgLi4uaW5pdFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBtZXRyaWNzOiBbJ1VTRVJTJywgJ05FV19VU0VSUyddLFxuICAgICAgICAgICAgICAgICAgICBzb3J0czI6IFsnVVNFUlNfREVTQyddLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGtleT1cInZpc2l0b3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQmVzdWNoZXJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBpY29uPXs8RmFOZXV0ZXIgLz59XG4gICAgICAgICAgICAgIGFjdGl2ZT17cXVlcnlbJ0BhbmFseXRpY3MnXSA9PT0gJ2xvY2F0aW9uJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICdAYW5hbHl0aWNzJzogJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgLi4uaW5pdFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBtZXRyaWNzOiBbJ1VTRVJTJ10sXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IFsnUkVHSU9OJ10sXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMyOiBbJ0NJVFknXSxcbiAgICAgICAgICAgICAgICAgICAgc29ydHM6IFsnVVNFUlNfREVTQyddLFxuICAgICAgICAgICAgICAgICAgICBzb3J0czI6IFsnVVNFUlNfREVTQyddLFxuICAgICAgICAgICAgICAgICAgICBjaGFydDogJ3BpZScsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0MjogJ2JhclZlcnRpY2FsJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBrZXk9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhlcmt1bmZ0XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17PEZhTW9iaWxlIC8+fVxuICAgICAgICAgICAgICBhY3RpdmU9e3F1ZXJ5WydAYW5hbHl0aWNzJ10gPT09ICdkZXZpY2VzJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICdAYW5hbHl0aWNzJzogJ2RldmljZXMnLFxuICAgICAgICAgICAgICAgICAgICAuLi5pbml0U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIG1ldHJpY3M6IFsnVVNFUlMnXSxcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uczogWydERVZJQ0VfQ0FURUdPUlknXSxcbiAgICAgICAgICAgICAgICAgICAgc29ydHM6IFsnVVNFUlNfREVTQyddLFxuICAgICAgICAgICAgICAgICAgICBjaGFydDogJ3BpZScsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0MjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdlcsOkdGVcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuRGl2aWRlciAvPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICBpY29uPXs8RmFDb2dzIC8+fVxuICAgICAgICAgICAgICBhY3RpdmU9e3F1ZXJ5WydAYW5hbHl0aWNzJ10gPT09ICdkZXZpY2VzJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2V0dGluZ3ModHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVpbnN0ZWxsdW5nZW5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8Q2hhcnRzIHsuLi5kYXRhfSAvPlxuXG4gICAgICAgIDxEcmF3ZXIgb3Blbj17ISFzZXR0aW5nc30gb25DbG9zZT17KCkgPT4gc2V0U2V0dGluZ3MoZmFsc2UpfSByaWdodD5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPXs8RmFDb2dzIC8+fSBsYXJnZT5cbiAgICAgICAgICAgICAgICBFaW5zdGVsbHVuZ2VuXG4gICAgICAgICAgICAgICAgPHNtYWxsPkVpbnN0ZWxsdW5nZW4gZsO8ciBhbGxlIENoYXJ0czwvc21hbGw+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyQ29sb3JcbiAgICAgICAgICAgIGhlYWRlckludmVydGVkXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uSXRlbSBrZXk9XCJtZXRyaWNzXCIgbGFiZWw9XCJNZXNzd2VydGVcIj5cbiAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdtZXRyaWNzJywge1xuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogZGF0YS5tZXRyaWNzLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQml0dGUgZ2ViZW4gU2llIG1pbmRlc3RlbnMgZWluZW4gTWVzc3dlcnQgYW4nLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9KSg8TWV0cmljU2VsZWN0IC8+KX1cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPEZvcm0uSXRlbSBrZXk9XCJyYW5nZVwiIGxhYmVsPVwiWmVpdHJhdW1cIj5cbiAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdyYW5nZScsIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6IGRhdGEucmFuZ2UsXG4gICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdCaXR0ZSBnZWJlbiBTaWUgZWluZW4gWmVpdHJhdW0gYW4nLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9KSg8RGF0ZVJhbmdlRWRpdG9yIGZvcm1hdD1cIkRELk1NLllZWVlcIiAvPil9XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e3RoaXMub2t9PlxuICAgICAgICAgICAgICBXZXJ0ZSDDvGJlcm5laG1lblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvU2lkZWJhcj5cbiAgICApO1xuICB9XG59XG4iXX0=

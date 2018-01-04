'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fela = require('fela');

var _felaPluginExtend = require('fela-plugin-extend');

var _felaPluginExtend2 = _interopRequireDefault(_felaPluginExtend);

var _felaPluginCustomProperty = require('fela-plugin-custom-property');

var _felaPluginCustomProperty2 = _interopRequireDefault(_felaPluginCustomProperty);

var _felaPluginPrefixer = require('fela-plugin-prefixer');

var _felaPluginPrefixer2 = _interopRequireDefault(_felaPluginPrefixer);

var _felaPluginFallbackValue = require('fela-plugin-fallback-value');

var _felaPluginFallbackValue2 = _interopRequireDefault(_felaPluginFallbackValue);

var _felaPluginUnit = require('fela-plugin-unit');

var _felaPluginUnit2 = _interopRequireDefault(_felaPluginUnit);

var _felaPluginRemoveUndefined = require('fela-plugin-remove-undefined');

var _felaPluginRemoveUndefined2 = _interopRequireDefault(_felaPluginRemoveUndefined);

var _felaPluginFriendlyPseudoClass = require('fela-plugin-friendly-pseudo-class');

var _felaPluginFriendlyPseudoClass2 = _interopRequireDefault(_felaPluginFriendlyPseudoClass);

var _felaPluginNamedKeys = require('fela-plugin-named-keys');

var _felaPluginNamedKeys2 = _interopRequireDefault(_felaPluginNamedKeys);

var _felaMonolithic = require('fela-monolithic');

var _felaMonolithic2 = _interopRequireDefault(_felaMonolithic);

var _felaPluginEmbedded = require('fela-plugin-embedded');

var _felaPluginEmbedded2 = _interopRequireDefault(_felaPluginEmbedded);

var _normalize = require('./normalize');

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ua) {
  var browser = ua && ua.getBrowser && ua.getBrowser();
  var isBrowser = function isBrowser(type, maxVersion, minVersion) {
    if (!browser) {
      return false;
    }
    if (minVersion) {
      return browser.name === type && parseInt(browser.major, 10) <= maxVersion && parseInt(browser.major, 10) >= minVersion;
    }

    return browser.name === type && parseInt(browser.major, 10) <= maxVersion;
  };

  var renderer = (0, _fela.createRenderer)({
    // / selectorPrefix: 'o-',
    plugins: [(0, _felaPluginExtend2.default)(), (0, _felaPluginEmbedded2.default)(), (0, _felaPluginPrefixer2.default)(), (0, _felaPluginFallbackValue2.default)(), (0, _felaPluginUnit2.default)(), (0, _felaPluginNamedKeys2.default)({
      // From
      ifHugeUp: '@media (min-width: 1200px)',
      ifLargeUp: '@media (min-width: 992px)',
      ifMediumUp: '@media (min-width: 768px)',
      ifSmallUp: '@media (min-width: 480px)',
      // To
      ifLargeDown: '@media (max-width: 1199px)',
      ifMediumDown: '@media (max-width: 991px)',
      ifSmallDown: '@media (max-width: 767px)',
      // On
      ifHuge: '@media (min-width: 1200px)',
      ifLarge: '@media (max-width: 1199px, min-width: 992)',
      ifMedium: '@media (max-width: 991px, min-width: 768)',
      ifSmall: '@media (max-width: 767px, min-width: 480)',
      ifMini: '@media (max-width: 479px)'
    }), (0, _felaPluginFriendlyPseudoClass2.default)(), (0, _felaPluginCustomProperty2.default)({
      size: function size(_size) {
        return {
          width: _size,
          height: _size
        };
      },
      paddingX: function paddingX(padding) {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      },
      paddingY: function paddingY(padding) {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      },
      marginX: function marginX(margin) {
        return {
          marginLeft: margin,
          marginRight: margin
        };
      },
      marginY: function marginY(margin) {
        return {
          marginTop: margin,
          marginBottom: margin
        };
      },
      borderX: function borderX(border) {
        return {
          borderLeft: border,
          borderRight: border
        };
      },
      borderY: function borderY(border) {
        return {
          borderTop: border,
          borderBottom: border
        };
      },
      ellipsis: function ellipsis(_ellipsis) {
        return _ellipsis === true ? {
          whiteSpace: 'nowrap',
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%'
        } : {};
      },
      clearfix: function clearfix(_clearfix) {
        return _clearfix === true ? {
          ':after': {
            content: '""',
            clear: 'both',
            display: 'block',
            visibility: 'hidden',
            height: 0
          }
        } : {};
      },
      center: function center(_center) {
        return _center === true ? _extends({
          position: 'absolute'
        }, isBrowser('IE', 10) ? {
          margin: 'auto',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        } : {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }) : {};
      },
      centerX: function centerX(center) {
        return center === true ? _extends({
          position: 'absolute'
        }, isBrowser('IE', 10) ? {
          marginLeft: 'auto',
          left: 0,
          marginRight: 'auto',
          right: 0
        } : {
          left: '50%',
          transform: 'translateX(-50%)'
        }) : {};
      },
      centerY: function centerY(center) {
        return center === true ? _extends({
          position: 'absolute'
        }, isBrowser('IE', 10) ? {
          marginTop: 'auto',
          top: 0,
          marginBottom: 'auto',
          bottom: 0
        } : {
          top: '50%',
          transform: 'translateY(-50%)'
        }) : {};
      },
      hasFlex: function hasFlex(styles) {
        if (!isBrowser('IE', 10)) {
          return styles;
        }

        return { display: 'block' };
      }
    }), (0, _felaPluginRemoveUndefined2.default)()],
    enhancers: [(0, _felaMonolithic2.default)()]
    // enhancers: process.env.NODE_ENV === 'production' ? [] : [require('fela-monolithic').default()],
  });
  renderer.renderStatic(_normalize2.default);
  renderer.renderStatic('\n    .with-portal {\n      overflow: hidden;\n    }\n  ');
  return renderer;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvdXRpbHMvY3JlYXRlLWZlbGEuZXM2Il0sIm5hbWVzIjpbImJyb3dzZXIiLCJ1YSIsImdldEJyb3dzZXIiLCJpc0Jyb3dzZXIiLCJ0eXBlIiwibWF4VmVyc2lvbiIsIm1pblZlcnNpb24iLCJuYW1lIiwicGFyc2VJbnQiLCJtYWpvciIsInJlbmRlcmVyIiwicGx1Z2lucyIsImlmSHVnZVVwIiwiaWZMYXJnZVVwIiwiaWZNZWRpdW1VcCIsImlmU21hbGxVcCIsImlmTGFyZ2VEb3duIiwiaWZNZWRpdW1Eb3duIiwiaWZTbWFsbERvd24iLCJpZkh1Z2UiLCJpZkxhcmdlIiwiaWZNZWRpdW0iLCJpZlNtYWxsIiwiaWZNaW5pIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1giLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nWSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luWCIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpblkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJYIiwiYm9yZGVyTGVmdCIsImJvcmRlciIsImJvcmRlclJpZ2h0IiwiYm9yZGVyWSIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsImVsbGlwc2lzIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93WCIsInRleHRPdmVyZmxvdyIsIm1heFdpZHRoIiwiY2xlYXJmaXgiLCJjb250ZW50IiwiY2xlYXIiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSIsImNlbnRlciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidHJhbnNmb3JtIiwiY2VudGVyWCIsImNlbnRlclkiLCJoYXNGbGV4Iiwic3R5bGVzIiwiZW5oYW5jZXJzIiwicmVuZGVyU3RhdGljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFD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ZSI6ImV4dGVybmFsL2ZlbGEvdXRpbHMvY3JlYXRlLWZlbGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZW5kZXJlciB9IGZyb20gJ2ZlbGEnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICdmZWxhLXBsdWdpbi1leHRlbmQnO1xuaW1wb3J0IGN1c3RvbVByb3BlcnR5IGZyb20gJ2ZlbGEtcGx1Z2luLWN1c3RvbS1wcm9wZXJ0eSc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnZmVsYS1wbHVnaW4tcHJlZml4ZXInO1xuaW1wb3J0IGZhbGxiYWNrVmFsdWUgZnJvbSAnZmVsYS1wbHVnaW4tZmFsbGJhY2stdmFsdWUnO1xuaW1wb3J0IHVuaXQgZnJvbSAnZmVsYS1wbHVnaW4tdW5pdCc7XG5pbXBvcnQgcmVtb3ZlVW5kZWZpbmVkIGZyb20gJ2ZlbGEtcGx1Z2luLXJlbW92ZS11bmRlZmluZWQnO1xuaW1wb3J0IGZyaWVuZGx5UHNldWRvQ2xhc3MgZnJvbSAnZmVsYS1wbHVnaW4tZnJpZW5kbHktcHNldWRvLWNsYXNzJztcbmltcG9ydCBuYW1lZEtleXMgZnJvbSAnZmVsYS1wbHVnaW4tbmFtZWQta2V5cyc7XG5pbXBvcnQgbW9ub2xpdGhpYyBmcm9tICdmZWxhLW1vbm9saXRoaWMnO1xuaW1wb3J0IGVtYmVkZGVkIGZyb20gJ2ZlbGEtcGx1Z2luLWVtYmVkZGVkJztcbmltcG9ydCBub3JtYWxpemUgZnJvbSAnLi9ub3JtYWxpemUnO1xuXG5leHBvcnQgZGVmYXVsdCB1YSA9PiB7XG4gIGNvbnN0IGJyb3dzZXIgPSB1YSAmJiB1YS5nZXRCcm93c2VyICYmIHVhLmdldEJyb3dzZXIoKTtcbiAgY29uc3QgaXNCcm93c2VyID0gKHR5cGUsIG1heFZlcnNpb24sIG1pblZlcnNpb24pID0+IHtcbiAgICBpZiAoIWJyb3dzZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG1pblZlcnNpb24pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGJyb3dzZXIubmFtZSA9PT0gdHlwZSAmJlxuICAgICAgICBwYXJzZUludChicm93c2VyLm1ham9yLCAxMCkgPD0gbWF4VmVyc2lvbiAmJlxuICAgICAgICBwYXJzZUludChicm93c2VyLm1ham9yLCAxMCkgPj0gbWluVmVyc2lvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnJvd3Nlci5uYW1lID09PSB0eXBlICYmIHBhcnNlSW50KGJyb3dzZXIubWFqb3IsIDEwKSA8PSBtYXhWZXJzaW9uO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlcmVyID0gY3JlYXRlUmVuZGVyZXIoe1xuICAgIC8vIC8gc2VsZWN0b3JQcmVmaXg6ICdvLScsXG4gICAgcGx1Z2luczogW1xuICAgICAgZXh0ZW5kKCksXG4gICAgICBlbWJlZGRlZCgpLFxuICAgICAgcHJlZml4ZXIoKSxcbiAgICAgIGZhbGxiYWNrVmFsdWUoKSxcbiAgICAgIHVuaXQoKSxcbiAgICAgIG5hbWVkS2V5cyh7XG4gICAgICAgIC8vIEZyb21cbiAgICAgICAgaWZIdWdlVXA6ICdAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KScsXG4gICAgICAgIGlmTGFyZ2VVcDogJ0BtZWRpYSAobWluLXdpZHRoOiA5OTJweCknLFxuICAgICAgICBpZk1lZGl1bVVwOiAnQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KScsXG4gICAgICAgIGlmU21hbGxVcDogJ0BtZWRpYSAobWluLXdpZHRoOiA0ODBweCknLFxuICAgICAgICAvLyBUb1xuICAgICAgICBpZkxhcmdlRG93bjogJ0BtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpJyxcbiAgICAgICAgaWZNZWRpdW1Eb3duOiAnQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KScsXG4gICAgICAgIGlmU21hbGxEb3duOiAnQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KScsXG4gICAgICAgIC8vIE9uXG4gICAgICAgIGlmSHVnZTogJ0BtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgICAgICAgaWZMYXJnZTogJ0BtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgsIG1pbi13aWR0aDogOTkyKScsXG4gICAgICAgIGlmTWVkaXVtOiAnQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4LCBtaW4td2lkdGg6IDc2OCknLFxuICAgICAgICBpZlNtYWxsOiAnQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4LCBtaW4td2lkdGg6IDQ4MCknLFxuICAgICAgICBpZk1pbmk6ICdAbWVkaWEgKG1heC13aWR0aDogNDc5cHgpJyxcbiAgICAgIH0pLFxuICAgICAgZnJpZW5kbHlQc2V1ZG9DbGFzcygpLFxuICAgICAgY3VzdG9tUHJvcGVydHkoe1xuICAgICAgICBzaXplOiBzaXplID0+ICh7XG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICB9KSxcbiAgICAgICAgcGFkZGluZ1g6IHBhZGRpbmcgPT4gKHtcbiAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcsXG4gICAgICAgIH0pLFxuICAgICAgICBwYWRkaW5nWTogcGFkZGluZyA9PiAoe1xuICAgICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmcsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZyxcbiAgICAgICAgfSksXG4gICAgICAgIG1hcmdpblg6IG1hcmdpbiA9PiAoe1xuICAgICAgICAgIG1hcmdpbkxlZnQ6IG1hcmdpbixcbiAgICAgICAgICBtYXJnaW5SaWdodDogbWFyZ2luLFxuICAgICAgICB9KSxcbiAgICAgICAgbWFyZ2luWTogbWFyZ2luID0+ICh7XG4gICAgICAgICAgbWFyZ2luVG9wOiBtYXJnaW4sXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBtYXJnaW4sXG4gICAgICAgIH0pLFxuICAgICAgICBib3JkZXJYOiBib3JkZXIgPT4gKHtcbiAgICAgICAgICBib3JkZXJMZWZ0OiBib3JkZXIsXG4gICAgICAgICAgYm9yZGVyUmlnaHQ6IGJvcmRlcixcbiAgICAgICAgfSksXG4gICAgICAgIGJvcmRlclk6IGJvcmRlciA9PiAoe1xuICAgICAgICAgIGJvcmRlclRvcDogYm9yZGVyLFxuICAgICAgICAgIGJvcmRlckJvdHRvbTogYm9yZGVyLFxuICAgICAgICB9KSxcbiAgICAgICAgZWxsaXBzaXM6IGVsbGlwc2lzID0+XG4gICAgICAgICAgZWxsaXBzaXMgPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIGNsZWFyZml4OiBjbGVhcmZpeCA9PlxuICAgICAgICAgIGNsZWFyZml4ID09PSB0cnVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAnOmFmdGVyJzoge1xuICAgICAgICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgICAgICAgY2xlYXI6ICdib3RoJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBjZW50ZXI6IGNlbnRlciA9PlxuICAgICAgICAgIGNlbnRlciA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgLi4uKGlzQnJvd3NlcignSUUnLCAxMClcbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgY2VudGVyWDogY2VudGVyID0+XG4gICAgICAgICAgY2VudGVyID09PSB0cnVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAuLi4oaXNCcm93c2VyKCdJRScsIDEwKVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBjZW50ZXJZOiBjZW50ZXIgPT5cbiAgICAgICAgICBjZW50ZXIgPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIC4uLihpc0Jyb3dzZXIoJ0lFJywgMTApXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgaGFzRmxleDogc3R5bGVzID0+IHtcbiAgICAgICAgICBpZiAoIWlzQnJvd3NlcignSUUnLCAxMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHsgZGlzcGxheTogJ2Jsb2NrJyB9O1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICByZW1vdmVVbmRlZmluZWQoKSxcbiAgICBdLFxuICAgIGVuaGFuY2VyczogW21vbm9saXRoaWMoKV0sXG4gICAgLy8gZW5oYW5jZXJzOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gW10gOiBbcmVxdWlyZSgnZmVsYS1tb25vbGl0aGljJykuZGVmYXVsdCgpXSxcbiAgfSk7XG4gIHJlbmRlcmVyLnJlbmRlclN0YXRpYyhub3JtYWxpemUpO1xuICByZW5kZXJlci5yZW5kZXJTdGF0aWMoYFxuICAgIC53aXRoLXBvcnRhbCB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgYCk7XG4gIHJldHVybiByZW5kZXJlcjtcbn07XG4iXX0=

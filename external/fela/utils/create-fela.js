var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedKeys from 'fela-plugin-named-keys';
import monolithic from 'fela-monolithic';
import embedded from 'fela-plugin-embedded';
import normalize from './normalize';

export default (function (ua) {
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

  var renderer = createRenderer({
    // / selectorPrefix: 'o-',
    plugins: [extend(), embedded(), prefixer(), fallbackValue(), unit(), namedKeys({
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
    }), friendlyPseudoClass(), customProperty({
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
    }), removeUndefined()],
    enhancers: [monolithic()]
    // enhancers: process.env.NODE_ENV === 'production' ? [] : [require('fela-monolithic').default()],
  });
  renderer.renderStatic(normalize);
  renderer.renderStatic('\n    .with-portal {\n      overflow: hidden;\n    }\n  ');
  return renderer;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvdXRpbHMvY3JlYXRlLWZlbGEuZXM2Il0sIm5hbWVzIjpbImNyZWF0ZVJlbmRlcmVyIiwiZXh0ZW5kIiwiY3VzdG9tUHJvcGVydHkiLCJwcmVmaXhlciIsImZhbGxiYWNrVmFsdWUiLCJ1bml0IiwicmVtb3ZlVW5kZWZpbmVkIiwiZnJpZW5kbHlQc2V1ZG9DbGFzcyIsIm5hbWVkS2V5cyIsIm1vbm9saXRoaWMiLCJlbWJlZGRlZCIsIm5vcm1hbGl6ZSIsImJyb3dzZXIiLCJ1YSIsImdldEJyb3dzZXIiLCJpc0Jyb3dzZXIiLCJ0eXBlIiwibWF4VmVyc2lvbiIsIm1pblZlcnNpb24iLCJuYW1lIiwicGFyc2VJbnQiLCJtYWpvciIsInJlbmRlcmVyIiwicGx1Z2lucyIsImlmSHVnZVVwIiwiaWZMYXJnZVVwIiwiaWZNZWRpdW1VcCIsImlmU21hbGxVcCIsImlmTGFyZ2VEb3duIiwiaWZNZWRpdW1Eb3duIiwiaWZTbWFsbERvd24iLCJpZkh1Z2UiLCJpZkxhcmdlIiwiaWZNZWRpdW0iLCJpZlNtYWxsIiwiaWZNaW5pIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1giLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nWSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luWCIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpblkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJYIiwiYm9yZGVyTGVmdCIsImJvcmRlciIsImJvcmRlclJpZ2h0IiwiYm9yZGVyWSIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsImVsbGlwc2lzIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93WCIsInRleHRPdmVyZmxvdyIsIm1heFdpZHRoIiwiY2xlYXJmaXgiLCJjb250ZW50IiwiY2xlYXIiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSIsImNlbnRlciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidHJhbnNmb3JtIiwiY2VudGVyWCIsImNlbnRlclkiLCJoYXNGbGV4Iiwic3R5bGVzIiwiZW5oYW5jZXJzIiwicmVuZGVyU3RhdGljIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGNBQVQsUUFBK0IsTUFBL0I7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsNkJBQTNCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixzQkFBckI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLDRCQUExQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsa0JBQWpCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0Qiw4QkFBNUI7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyxtQ0FBaEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHdCQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixzQkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCOztBQUVBLGdCQUFlLGNBQU07QUFDbkIsTUFBTUMsVUFBVUMsTUFBTUEsR0FBR0MsVUFBVCxJQUF1QkQsR0FBR0MsVUFBSCxFQUF2QztBQUNBLE1BQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFVBQVAsRUFBbUJDLFVBQW5CLEVBQWtDO0FBQ2xELFFBQUksQ0FBQ04sT0FBTCxFQUFjO0FBQ1osYUFBTyxLQUFQO0FBQ0Q7QUFDRCxRQUFJTSxVQUFKLEVBQWdCO0FBQ2QsYUFDRU4sUUFBUU8sSUFBUixLQUFpQkgsSUFBakIsSUFDQUksU0FBU1IsUUFBUVMsS0FBakIsRUFBd0IsRUFBeEIsS0FBK0JKLFVBRC9CLElBRUFHLFNBQVNSLFFBQVFTLEtBQWpCLEVBQXdCLEVBQXhCLEtBQStCSCxVQUhqQztBQUtEOztBQUVELFdBQU9OLFFBQVFPLElBQVIsS0FBaUJILElBQWpCLElBQXlCSSxTQUFTUixRQUFRUyxLQUFqQixFQUF3QixF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QUFDRW9DLHFCQUFXLE1BRGI7QUFFRXFCLGVBQUssQ0FGUDtBQUdFcEIsd0JBQWMsTUFIaEI7QUFJRXNCLGtCQUFRO0FBSlYsU0FEQSxHQU9BO0FBQ0VGLGVBQUssS0FEUDtBQUVFSSxxQkFBVztBQUZiLFNBVlYsSUFlSSxFQWhCRztBQUFBLE9BdEZJO0FBdUdiRyxlQUFTLHlCQUFVO0FBQ2pCLFlBQUksQ0FBQ2hFLFVBQVUsSUFBVixFQUFnQixFQUFoQixDQUFMLEVBQTBCO0FBQ3hCLGlCQUFPaUUsTUFBUDtBQUNEOztBQUVELGVBQU8sRUFBRVosU0FBUyxPQUFYLEVBQVA7QUFDRDtBQTdHWSxLQUFmLENBeEJPLEVBdUlQOUQsaUJBdklPLENBRnFCO0FBMkk5QjJFLGVBQVcsQ0FBQ3hFLFlBQUQ7QUFDWDtBQTVJOEIsR0FBZixDQUFqQjtBQThJQWEsV0FBUzRELFlBQVQsQ0FBc0J2RSxTQUF0QjtBQUNBVyxXQUFTNEQsWUFBVDtBQUtBLFNBQU81RCxRQUFQO0FBQ0QsQ0F0S0QiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS91dGlscy9jcmVhdGUtZmVsYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJlbmRlcmVyIH0gZnJvbSAnZmVsYSc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJ2ZlbGEtcGx1Z2luLWV4dGVuZCc7XG5pbXBvcnQgY3VzdG9tUHJvcGVydHkgZnJvbSAnZmVsYS1wbHVnaW4tY3VzdG9tLXByb3BlcnR5JztcbmltcG9ydCBwcmVmaXhlciBmcm9tICdmZWxhLXBsdWdpbi1wcmVmaXhlcic7XG5pbXBvcnQgZmFsbGJhY2tWYWx1ZSBmcm9tICdmZWxhLXBsdWdpbi1mYWxsYmFjay12YWx1ZSc7XG5pbXBvcnQgdW5pdCBmcm9tICdmZWxhLXBsdWdpbi11bml0JztcbmltcG9ydCByZW1vdmVVbmRlZmluZWQgZnJvbSAnZmVsYS1wbHVnaW4tcmVtb3ZlLXVuZGVmaW5lZCc7XG5pbXBvcnQgZnJpZW5kbHlQc2V1ZG9DbGFzcyBmcm9tICdmZWxhLXBsdWdpbi1mcmllbmRseS1wc2V1ZG8tY2xhc3MnO1xuaW1wb3J0IG5hbWVkS2V5cyBmcm9tICdmZWxhLXBsdWdpbi1uYW1lZC1rZXlzJztcbmltcG9ydCBtb25vbGl0aGljIGZyb20gJ2ZlbGEtbW9ub2xpdGhpYyc7XG5pbXBvcnQgZW1iZWRkZWQgZnJvbSAnZmVsYS1wbHVnaW4tZW1iZWRkZWQnO1xuaW1wb3J0IG5vcm1hbGl6ZSBmcm9tICcuL25vcm1hbGl6ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHVhID0+IHtcbiAgY29uc3QgYnJvd3NlciA9IHVhICYmIHVhLmdldEJyb3dzZXIgJiYgdWEuZ2V0QnJvd3NlcigpO1xuICBjb25zdCBpc0Jyb3dzZXIgPSAodHlwZSwgbWF4VmVyc2lvbiwgbWluVmVyc2lvbikgPT4ge1xuICAgIGlmICghYnJvd3Nlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobWluVmVyc2lvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYnJvd3Nlci5uYW1lID09PSB0eXBlICYmXG4gICAgICAgIHBhcnNlSW50KGJyb3dzZXIubWFqb3IsIDEwKSA8PSBtYXhWZXJzaW9uICYmXG4gICAgICAgIHBhcnNlSW50KGJyb3dzZXIubWFqb3IsIDEwKSA+PSBtaW5WZXJzaW9uXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBicm93c2VyLm5hbWUgPT09IHR5cGUgJiYgcGFyc2VJbnQoYnJvd3Nlci5tYWpvciwgMTApIDw9IG1heFZlcnNpb247XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyZXIgPSBjcmVhdGVSZW5kZXJlcih7XG4gICAgLy8gLyBzZWxlY3RvclByZWZpeDogJ28tJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBleHRlbmQoKSxcbiAgICAgIGVtYmVkZGVkKCksXG4gICAgICBwcmVmaXhlcigpLFxuICAgICAgZmFsbGJhY2tWYWx1ZSgpLFxuICAgICAgdW5pdCgpLFxuICAgICAgbmFtZWRLZXlzKHtcbiAgICAgICAgLy8gRnJvbVxuICAgICAgICBpZkh1Z2VVcDogJ0BtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgICAgICAgaWZMYXJnZVVwOiAnQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KScsXG4gICAgICAgIGlmTWVkaXVtVXA6ICdAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgICAgICAgaWZTbWFsbFVwOiAnQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KScsXG4gICAgICAgIC8vIFRvXG4gICAgICAgIGlmTGFyZ2VEb3duOiAnQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCknLFxuICAgICAgICBpZk1lZGl1bURvd246ICdAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpJyxcbiAgICAgICAgaWZTbWFsbERvd246ICdAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpJyxcbiAgICAgICAgLy8gT25cbiAgICAgICAgaWZIdWdlOiAnQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCknLFxuICAgICAgICBpZkxhcmdlOiAnQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCwgbWluLXdpZHRoOiA5OTIpJyxcbiAgICAgICAgaWZNZWRpdW06ICdAbWVkaWEgKG1heC13aWR0aDogOTkxcHgsIG1pbi13aWR0aDogNzY4KScsXG4gICAgICAgIGlmU21hbGw6ICdAbWVkaWEgKG1heC13aWR0aDogNzY3cHgsIG1pbi13aWR0aDogNDgwKScsXG4gICAgICAgIGlmTWluaTogJ0BtZWRpYSAobWF4LXdpZHRoOiA0NzlweCknLFxuICAgICAgfSksXG4gICAgICBmcmllbmRseVBzZXVkb0NsYXNzKCksXG4gICAgICBjdXN0b21Qcm9wZXJ0eSh7XG4gICAgICAgIHNpemU6IHNpemUgPT4gKHtcbiAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIH0pLFxuICAgICAgICBwYWRkaW5nWDogcGFkZGluZyA9PiAoe1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZyxcbiAgICAgICAgfSksXG4gICAgICAgIHBhZGRpbmdZOiBwYWRkaW5nID0+ICh7XG4gICAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZyxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nLFxuICAgICAgICB9KSxcbiAgICAgICAgbWFyZ2luWDogbWFyZ2luID0+ICh7XG4gICAgICAgICAgbWFyZ2luTGVmdDogbWFyZ2luLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBtYXJnaW4sXG4gICAgICAgIH0pLFxuICAgICAgICBtYXJnaW5ZOiBtYXJnaW4gPT4gKHtcbiAgICAgICAgICBtYXJnaW5Ub3A6IG1hcmdpbixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IG1hcmdpbixcbiAgICAgICAgfSksXG4gICAgICAgIGJvcmRlclg6IGJvcmRlciA9PiAoe1xuICAgICAgICAgIGJvcmRlckxlZnQ6IGJvcmRlcixcbiAgICAgICAgICBib3JkZXJSaWdodDogYm9yZGVyLFxuICAgICAgICB9KSxcbiAgICAgICAgYm9yZGVyWTogYm9yZGVyID0+ICh7XG4gICAgICAgICAgYm9yZGVyVG9wOiBib3JkZXIsXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBib3JkZXIsXG4gICAgICAgIH0pLFxuICAgICAgICBlbGxpcHNpczogZWxsaXBzaXMgPT5cbiAgICAgICAgICBlbGxpcHNpcyA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgY2xlYXJmaXg6IGNsZWFyZml4ID0+XG4gICAgICAgICAgY2xlYXJmaXggPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICc6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICAgICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIGNlbnRlcjogY2VudGVyID0+XG4gICAgICAgICAgY2VudGVyID09PSB0cnVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAuLi4oaXNCcm93c2VyKCdJRScsIDEwKVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBjZW50ZXJYOiBjZW50ZXIgPT5cbiAgICAgICAgICBjZW50ZXIgPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIC4uLihpc0Jyb3dzZXIoJ0lFJywgMTApXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIGNlbnRlclk6IGNlbnRlciA9PlxuICAgICAgICAgIGNlbnRlciA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgLi4uKGlzQnJvd3NlcignSUUnLCAxMClcbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBoYXNGbGV4OiBzdHlsZXMgPT4ge1xuICAgICAgICAgIGlmICghaXNCcm93c2VyKCdJRScsIDEwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4geyBkaXNwbGF5OiAnYmxvY2snIH07XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHJlbW92ZVVuZGVmaW5lZCgpLFxuICAgIF0sXG4gICAgZW5oYW5jZXJzOiBbbW9ub2xpdGhpYygpXSxcbiAgICAvLyBlbmhhbmNlcnM6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBbXSA6IFtyZXF1aXJlKCdmZWxhLW1vbm9saXRoaWMnKS5kZWZhdWx0KCldLFxuICB9KTtcbiAgcmVuZGVyZXIucmVuZGVyU3RhdGljKG5vcm1hbGl6ZSk7XG4gIHJlbmRlcmVyLnJlbmRlclN0YXRpYyhgXG4gICAgLndpdGgtcG9ydGFsIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICBgKTtcbiAgcmV0dXJuIHJlbmRlcmVyO1xufTtcbiJdfQ==

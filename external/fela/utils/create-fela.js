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
  return renderer;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvY3JlYXRlLWZlbGEuZXM2Il0sIm5hbWVzIjpbImNyZWF0ZVJlbmRlcmVyIiwiZXh0ZW5kIiwiY3VzdG9tUHJvcGVydHkiLCJwcmVmaXhlciIsImZhbGxiYWNrVmFsdWUiLCJ1bml0IiwicmVtb3ZlVW5kZWZpbmVkIiwiZnJpZW5kbHlQc2V1ZG9DbGFzcyIsIm5hbWVkS2V5cyIsIm1vbm9saXRoaWMiLCJlbWJlZGRlZCIsIm5vcm1hbGl6ZSIsImJyb3dzZXIiLCJ1YSIsImdldEJyb3dzZXIiLCJpc0Jyb3dzZXIiLCJ0eXBlIiwibWF4VmVyc2lvbiIsIm1pblZlcnNpb24iLCJuYW1lIiwicGFyc2VJbnQiLCJtYWpvciIsInJlbmRlcmVyIiwicGx1Z2lucyIsImlmSHVnZVVwIiwiaWZMYXJnZVVwIiwiaWZNZWRpdW1VcCIsImlmU21hbGxVcCIsImlmTGFyZ2VEb3duIiwiaWZNZWRpdW1Eb3duIiwiaWZTbWFsbERvd24iLCJpZkh1Z2UiLCJpZkxhcmdlIiwiaWZNZWRpdW0iLCJpZlNtYWxsIiwiaWZNaW5pIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1giLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nWSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luWCIsIm1hcmdpbkxlZnQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpblkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJYIiwiYm9yZGVyTGVmdCIsImJvcmRlciIsImJvcmRlclJpZ2h0IiwiYm9yZGVyWSIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsImVsbGlwc2lzIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93WCIsInRleHRPdmVyZmxvdyIsIm1heFdpZHRoIiwiY2xlYXJmaXgiLCJjb250ZW50IiwiY2xlYXIiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSIsImNlbnRlciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidHJhbnNmb3JtIiwiY2VudGVyWCIsImNlbnRlclkiLCJoYXNGbGV4Iiwic3R5bGVzIiwiZW5oYW5jZXJzIiwicmVuZGVyU3RhdGljIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGNBQVQsUUFBK0IsTUFBL0I7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsNkJBQTNCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixzQkFBckI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLDRCQUExQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsa0JBQWpCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0Qiw4QkFBNUI7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyxtQ0FBaEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHdCQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixzQkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCOztBQUVBLGdCQUFlLGNBQU07QUFDbkIsTUFBTUMsVUFBVUMsTUFBTUEsR0FBR0MsVUFBVCxJQUF1QkQsR0FBR0MsVUFBSCxFQUF2QztBQUNBLE1BQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFVBQVAsRUFBbUJDLFVBQW5CLEVBQWtDO0FBQ2xELFFBQUksQ0FBQ04sT0FBTCxFQUFjO0FBQ1osYUFBTyxLQUFQO0FBQ0Q7QUFDRCxRQUFJTSxVQUFKLEVBQWdCO0FBQ2QsYUFDRU4sUUFBUU8sSUFBUixLQUFpQkgsSUFBakIsSUFDQUksU0FBU1IsUUFBUVMsS0FBakIsRUFBd0IsRUFBeEIsS0FBK0JKLFVBRC9CLElBRUFHLFNBQVNSLFFBQVFTLEtBQWpCLEVBQXdCLEVBQXhCLEtBQStCSCxVQUhqQztBQUtEOztBQUVELFdBQU9OLFFBQVFPLElBQVIsS0FBaUJILElBQWpCLElBQXlCSSxTQUFTUixRQUFRUyxLQUFqQixFQUF3QixF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QUFDRW9DLHFCQUFXLE1BRGI7QUFFRXFCLGVBQUssQ0FGUDtBQUdFcEIsd0JBQWMsTUFIaEI7QUFJRXNCLGtCQUFRO0FBSlYsU0FEQSxHQU9BO0FBQ0VGLGVBQUssS0FEUDtBQUVFSSxxQkFBVztBQUZiLFNBVlYsSUFlSSxFQWhCRztBQUFBLE9BdEZJO0FBdUdiRyxlQUFTLHlCQUFVO0FBQ2pCLFlBQUksQ0FBQ2hFLFVBQVUsSUFBVixFQUFnQixFQUFoQixDQUFMLEVBQTBCO0FBQ3hCLGlCQUFPaUUsTUFBUDtBQUNEOztBQUVELGVBQU8sRUFBRVosU0FBUyxPQUFYLEVBQVA7QUFDRDtBQTdHWSxLQUFmLENBeEJPLEVBdUlQOUQsaUJBdklPLENBRnFCO0FBMkk5QjJFLGVBQVcsQ0FBQ3hFLFlBQUQ7QUFDWDtBQTVJOEIsR0FBZixDQUFqQjtBQThJQWEsV0FBUzRELFlBQVQsQ0FBc0J2RSxTQUF0QjtBQUNBLFNBQU9XLFFBQVA7QUFDRCxDQWpLRCIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3V0aWxzL2NyZWF0ZS1mZWxhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVuZGVyZXIgfSBmcm9tICdmZWxhJztcbmltcG9ydCBleHRlbmQgZnJvbSAnZmVsYS1wbHVnaW4tZXh0ZW5kJztcbmltcG9ydCBjdXN0b21Qcm9wZXJ0eSBmcm9tICdmZWxhLXBsdWdpbi1jdXN0b20tcHJvcGVydHknO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJ2ZlbGEtcGx1Z2luLXByZWZpeGVyJztcbmltcG9ydCBmYWxsYmFja1ZhbHVlIGZyb20gJ2ZlbGEtcGx1Z2luLWZhbGxiYWNrLXZhbHVlJztcbmltcG9ydCB1bml0IGZyb20gJ2ZlbGEtcGx1Z2luLXVuaXQnO1xuaW1wb3J0IHJlbW92ZVVuZGVmaW5lZCBmcm9tICdmZWxhLXBsdWdpbi1yZW1vdmUtdW5kZWZpbmVkJztcbmltcG9ydCBmcmllbmRseVBzZXVkb0NsYXNzIGZyb20gJ2ZlbGEtcGx1Z2luLWZyaWVuZGx5LXBzZXVkby1jbGFzcyc7XG5pbXBvcnQgbmFtZWRLZXlzIGZyb20gJ2ZlbGEtcGx1Z2luLW5hbWVkLWtleXMnO1xuaW1wb3J0IG1vbm9saXRoaWMgZnJvbSAnZmVsYS1tb25vbGl0aGljJztcbmltcG9ydCBlbWJlZGRlZCBmcm9tICdmZWxhLXBsdWdpbi1lbWJlZGRlZCc7XG5pbXBvcnQgbm9ybWFsaXplIGZyb20gJy4vbm9ybWFsaXplJztcblxuZXhwb3J0IGRlZmF1bHQgdWEgPT4ge1xuICBjb25zdCBicm93c2VyID0gdWEgJiYgdWEuZ2V0QnJvd3NlciAmJiB1YS5nZXRCcm93c2VyKCk7XG4gIGNvbnN0IGlzQnJvd3NlciA9ICh0eXBlLCBtYXhWZXJzaW9uLCBtaW5WZXJzaW9uKSA9PiB7XG4gICAgaWYgKCFicm93c2VyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChtaW5WZXJzaW9uKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBicm93c2VyLm5hbWUgPT09IHR5cGUgJiZcbiAgICAgICAgcGFyc2VJbnQoYnJvd3Nlci5tYWpvciwgMTApIDw9IG1heFZlcnNpb24gJiZcbiAgICAgICAgcGFyc2VJbnQoYnJvd3Nlci5tYWpvciwgMTApID49IG1pblZlcnNpb25cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gdHlwZSAmJiBwYXJzZUludChicm93c2VyLm1ham9yLCAxMCkgPD0gbWF4VmVyc2lvbjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyKHtcbiAgICAvLyAvIHNlbGVjdG9yUHJlZml4OiAnby0nLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIGV4dGVuZCgpLFxuICAgICAgZW1iZWRkZWQoKSxcbiAgICAgIHByZWZpeGVyKCksXG4gICAgICBmYWxsYmFja1ZhbHVlKCksXG4gICAgICB1bml0KCksXG4gICAgICBuYW1lZEtleXMoe1xuICAgICAgICAvLyBGcm9tXG4gICAgICAgIGlmSHVnZVVwOiAnQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCknLFxuICAgICAgICBpZkxhcmdlVXA6ICdAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpJyxcbiAgICAgICAgaWZNZWRpdW1VcDogJ0BtZWRpYSAobWluLXdpZHRoOiA3NjhweCknLFxuICAgICAgICBpZlNtYWxsVXA6ICdAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpJyxcbiAgICAgICAgLy8gVG9cbiAgICAgICAgaWZMYXJnZURvd246ICdAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KScsXG4gICAgICAgIGlmTWVkaXVtRG93bjogJ0BtZWRpYSAobWF4LXdpZHRoOiA5OTFweCknLFxuICAgICAgICBpZlNtYWxsRG93bjogJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjdweCknLFxuICAgICAgICAvLyBPblxuICAgICAgICBpZkh1Z2U6ICdAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KScsXG4gICAgICAgIGlmTGFyZ2U6ICdAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4LCBtaW4td2lkdGg6IDk5MiknLFxuICAgICAgICBpZk1lZGl1bTogJ0BtZWRpYSAobWF4LXdpZHRoOiA5OTFweCwgbWluLXdpZHRoOiA3NjgpJyxcbiAgICAgICAgaWZTbWFsbDogJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjdweCwgbWluLXdpZHRoOiA0ODApJyxcbiAgICAgICAgaWZNaW5pOiAnQG1lZGlhIChtYXgtd2lkdGg6IDQ3OXB4KScsXG4gICAgICB9KSxcbiAgICAgIGZyaWVuZGx5UHNldWRvQ2xhc3MoKSxcbiAgICAgIGN1c3RvbVByb3BlcnR5KHtcbiAgICAgICAgc2l6ZTogc2l6ZSA9PiAoe1xuICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHBhZGRpbmdYOiBwYWRkaW5nID0+ICh7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nLFxuICAgICAgICB9KSxcbiAgICAgICAgcGFkZGluZ1k6IHBhZGRpbmcgPT4gKHtcbiAgICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmcsXG4gICAgICAgIH0pLFxuICAgICAgICBtYXJnaW5YOiBtYXJnaW4gPT4gKHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBtYXJnaW4sXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IG1hcmdpbixcbiAgICAgICAgfSksXG4gICAgICAgIG1hcmdpblk6IG1hcmdpbiA9PiAoe1xuICAgICAgICAgIG1hcmdpblRvcDogbWFyZ2luLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogbWFyZ2luLFxuICAgICAgICB9KSxcbiAgICAgICAgYm9yZGVyWDogYm9yZGVyID0+ICh7XG4gICAgICAgICAgYm9yZGVyTGVmdDogYm9yZGVyLFxuICAgICAgICAgIGJvcmRlclJpZ2h0OiBib3JkZXIsXG4gICAgICAgIH0pLFxuICAgICAgICBib3JkZXJZOiBib3JkZXIgPT4gKHtcbiAgICAgICAgICBib3JkZXJUb3A6IGJvcmRlcixcbiAgICAgICAgICBib3JkZXJCb3R0b206IGJvcmRlcixcbiAgICAgICAgfSksXG4gICAgICAgIGVsbGlwc2lzOiBlbGxpcHNpcyA9PlxuICAgICAgICAgIGVsbGlwc2lzID09PSB0cnVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBjbGVhcmZpeDogY2xlYXJmaXggPT5cbiAgICAgICAgICBjbGVhcmZpeCA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgJzphZnRlcic6IHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICAgICAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgY2VudGVyOiBjZW50ZXIgPT5cbiAgICAgICAgICBjZW50ZXIgPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIC4uLihpc0Jyb3dzZXIoJ0lFJywgMTApXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIGNlbnRlclg6IGNlbnRlciA9PlxuICAgICAgICAgIGNlbnRlciA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgLi4uKGlzQnJvd3NlcignSUUnLCAxMClcbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgY2VudGVyWTogY2VudGVyID0+XG4gICAgICAgICAgY2VudGVyID09PSB0cnVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAuLi4oaXNCcm93c2VyKCdJRScsIDEwKVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIGhhc0ZsZXg6IHN0eWxlcyA9PiB7XG4gICAgICAgICAgaWYgKCFpc0Jyb3dzZXIoJ0lFJywgMTApKSB7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7IGRpc3BsYXk6ICdibG9jaycgfTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgcmVtb3ZlVW5kZWZpbmVkKCksXG4gICAgXSxcbiAgICBlbmhhbmNlcnM6IFttb25vbGl0aGljKCldLFxuICAgIC8vIGVuaGFuY2VyczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IFtdIDogW3JlcXVpcmUoJ2ZlbGEtbW9ub2xpdGhpYycpLmRlZmF1bHQoKV0sXG4gIH0pO1xuICByZW5kZXJlci5yZW5kZXJTdGF0aWMobm9ybWFsaXplKTtcbiAgcmV0dXJuIHJlbmRlcmVyO1xufTtcbiJdfQ==

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';
import embedded from 'fela-plugin-embedded';
import normalize from './normalize';
export default function (ua) {
    var browser = ua && ua.getBrowser && ua.getBrowser();
    var isBrowser = function (type, maxVersion, minVersion) {
        if (!browser) {
            return false;
        }
        if (minVersion) {
            return (browser.name === type &&
                parseInt(browser.major, 10) <= maxVersion &&
                parseInt(browser.major, 10) >= minVersion);
        }
        return browser.name === type && parseInt(browser.major, 10) <= maxVersion;
    };
    var renderer = createRenderer({
        selectorPrefix: 'o',
        plugins: [
            extend(),
            embedded(),
            prefixer(),
            fallbackValue(),
            unit(),
            namedMediaQuery({
                ifLargeUp: '@media (min-width: 992px)',
                ifMediumUp: '@media (min-width: 768px)',
                ifSmallUp: '@media (min-width: 480px)',
                ifLargeDown: '@media (max-width: 1199px)',
                ifMediumDown: '@media (max-width: 991px)',
                ifSmallDown: '@media (max-width: 767px)',
                ifHuge: '@media (min-width: 1200px)',
                ifLarge: '@media (max-width: 1199px, min-width: 992)',
                ifMedium: '@media (max-width: 991px, min-width: 768)',
                ifSmall: '@media (max-width: 767px, min-width: 480)',
                ifMini: '@media (max-width: 479px)',
            }),
            friendlyPseudoClass(),
            customProperty({
                size: function (size) { return ({
                    width: size,
                    height: size,
                }); },
                paddingX: function (padding) { return ({
                    paddingLeft: padding,
                    paddingRight: padding,
                }); },
                paddingY: function (padding) { return ({
                    paddingTop: padding,
                    paddingBottom: padding,
                }); },
                marginX: function (margin) { return ({
                    marginLeft: margin,
                    marginRight: margin,
                }); },
                marginY: function (margin) { return ({
                    marginTop: margin,
                    marginBottom: margin,
                }); },
                borderX: function (border) { return ({
                    borderLeft: border,
                    borderRight: border,
                }); },
                borderY: function (border) { return ({
                    borderTop: border,
                    borderBottom: border,
                }); },
                ellipsis: function (ellipsis) {
                    return ellipsis === true
                        ? {
                            whiteSpace: 'nowrap',
                            overflowX: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                        }
                        : {};
                },
                clearfix: function (clearfix) {
                    return clearfix === true
                        ? {
                            ':after': {
                                content: '""',
                                clear: 'both',
                                display: 'block',
                                visibility: 'hidden',
                                height: 0,
                            },
                        }
                        : {};
                },
                center: function (center) {
                    return center === true
                        ? __assign({ position: 'absolute' }, isBrowser('IE', 10)
                            ? {
                                margin: 'auto',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }
                            : {
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }) : {};
                },
                centerX: function (center) {
                    return center === true
                        ? __assign({ position: 'absolute' }, isBrowser('IE', 10)
                            ? {
                                marginLeft: 'auto',
                                left: 0,
                                marginRight: 'auto',
                                right: 0,
                            }
                            : {
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }) : {};
                },
                centerY: function (center) {
                    return center === true
                        ? __assign({ position: 'absolute' }, isBrowser('IE', 10)
                            ? {
                                marginTop: 'auto',
                                top: 0,
                                marginBottom: 'auto',
                                bottom: 0,
                            }
                            : {
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }) : {};
                },
                hasFlex: function (styles) {
                    if (!isBrowser('IE', 10)) {
                        return styles;
                    }
                    return {};
                },
            }),
            removeUndefined(),
        ],
    });
    renderer.renderStatic(normalize);
    return renderer;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvY3JlYXRlLWZlbGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLE1BQU0sTUFBTSxvQkFBb0IsQ0FBQztBQUN4QyxPQUFPLGNBQWMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLGFBQWEsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLGVBQWUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLG1CQUFtQixNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sZUFBZSxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sUUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUVwQyxlQUFlLFVBQUEsRUFBRTtJQUNmLElBQU0sT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RCxJQUFNLFNBQVMsR0FBRyxVQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVTtRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsQ0FDTCxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUk7Z0JBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFVBQVU7Z0JBQ3pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FDMUMsQ0FBQztRQUNK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SSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDaEIsQ0FBQztvQkFFRCxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNaLENBQUM7YUFDRixDQUFDO1lBQ0YsZUFBZSxFQUFFO1NBQ2xCO0tBRUYsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL2NyZWF0ZS1mZWxhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVuZGVyZXIgfSBmcm9tICdmZWxhJztcbmltcG9ydCBleHRlbmQgZnJvbSAnZmVsYS1wbHVnaW4tZXh0ZW5kJztcbmltcG9ydCBjdXN0b21Qcm9wZXJ0eSBmcm9tICdmZWxhLXBsdWdpbi1jdXN0b20tcHJvcGVydHknO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJ2ZlbGEtcGx1Z2luLXByZWZpeGVyJztcbmltcG9ydCBmYWxsYmFja1ZhbHVlIGZyb20gJ2ZlbGEtcGx1Z2luLWZhbGxiYWNrLXZhbHVlJztcbmltcG9ydCB1bml0IGZyb20gJ2ZlbGEtcGx1Z2luLXVuaXQnO1xuaW1wb3J0IHJlbW92ZVVuZGVmaW5lZCBmcm9tICdmZWxhLXBsdWdpbi1yZW1vdmUtdW5kZWZpbmVkJztcbmltcG9ydCBmcmllbmRseVBzZXVkb0NsYXNzIGZyb20gJ2ZlbGEtcGx1Z2luLWZyaWVuZGx5LXBzZXVkby1jbGFzcyc7XG5pbXBvcnQgbmFtZWRNZWRpYVF1ZXJ5IGZyb20gJ2ZlbGEtcGx1Z2luLW5hbWVkLW1lZGlhLXF1ZXJ5JztcbmltcG9ydCBlbWJlZGRlZCBmcm9tICdmZWxhLXBsdWdpbi1lbWJlZGRlZCc7XG5pbXBvcnQgbm9ybWFsaXplIGZyb20gJy4vbm9ybWFsaXplJztcblxuZXhwb3J0IGRlZmF1bHQgdWEgPT4ge1xuICBjb25zdCBicm93c2VyID0gdWEgJiYgdWEuZ2V0QnJvd3NlciAmJiB1YS5nZXRCcm93c2VyKCk7XG4gIGNvbnN0IGlzQnJvd3NlciA9ICh0eXBlLCBtYXhWZXJzaW9uLCBtaW5WZXJzaW9uKSA9PiB7XG4gICAgaWYgKCFicm93c2VyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChtaW5WZXJzaW9uKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBicm93c2VyLm5hbWUgPT09IHR5cGUgJiZcbiAgICAgICAgcGFyc2VJbnQoYnJvd3Nlci5tYWpvciwgMTApIDw9IG1heFZlcnNpb24gJiZcbiAgICAgICAgcGFyc2VJbnQoYnJvd3Nlci5tYWpvciwgMTApID49IG1pblZlcnNpb25cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gdHlwZSAmJiBwYXJzZUludChicm93c2VyLm1ham9yLCAxMCkgPD0gbWF4VmVyc2lvbjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyKHtcbiAgICBzZWxlY3RvclByZWZpeDogJ28nLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIGV4dGVuZCgpLFxuICAgICAgZW1iZWRkZWQoKSxcbiAgICAgIHByZWZpeGVyKCksXG4gICAgICBmYWxsYmFja1ZhbHVlKCksXG4gICAgICB1bml0KCksXG4gICAgICBuYW1lZE1lZGlhUXVlcnkoe1xuICAgICAgICAvLyBGcm9tXG4gICAgICAgIGlmTGFyZ2VVcDogJ0BtZWRpYSAobWluLXdpZHRoOiA5OTJweCknLFxuICAgICAgICBpZk1lZGl1bVVwOiAnQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KScsXG4gICAgICAgIGlmU21hbGxVcDogJ0BtZWRpYSAobWluLXdpZHRoOiA0ODBweCknLFxuICAgICAgICAvLyBUb1xuICAgICAgICBpZkxhcmdlRG93bjogJ0BtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpJyxcbiAgICAgICAgaWZNZWRpdW1Eb3duOiAnQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KScsXG4gICAgICAgIGlmU21hbGxEb3duOiAnQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KScsXG4gICAgICAgIC8vIE9uXG4gICAgICAgIGlmSHVnZTogJ0BtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgICAgICAgaWZMYXJnZTogJ0BtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgsIG1pbi13aWR0aDogOTkyKScsXG4gICAgICAgIGlmTWVkaXVtOiAnQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4LCBtaW4td2lkdGg6IDc2OCknLFxuICAgICAgICBpZlNtYWxsOiAnQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4LCBtaW4td2lkdGg6IDQ4MCknLFxuICAgICAgICBpZk1pbmk6ICdAbWVkaWEgKG1heC13aWR0aDogNDc5cHgpJyxcbiAgICAgIH0pLFxuICAgICAgZnJpZW5kbHlQc2V1ZG9DbGFzcygpLFxuICAgICAgY3VzdG9tUHJvcGVydHkoe1xuICAgICAgICBzaXplOiBzaXplID0+ICh7XG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICB9KSxcbiAgICAgICAgcGFkZGluZ1g6IHBhZGRpbmcgPT4gKHtcbiAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcsXG4gICAgICAgIH0pLFxuICAgICAgICBwYWRkaW5nWTogcGFkZGluZyA9PiAoe1xuICAgICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmcsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZyxcbiAgICAgICAgfSksXG4gICAgICAgIG1hcmdpblg6IG1hcmdpbiA9PiAoe1xuICAgICAgICAgIG1hcmdpbkxlZnQ6IG1hcmdpbixcbiAgICAgICAgICBtYXJnaW5SaWdodDogbWFyZ2luLFxuICAgICAgICB9KSxcbiAgICAgICAgbWFyZ2luWTogbWFyZ2luID0+ICh7XG4gICAgICAgICAgbWFyZ2luVG9wOiBtYXJnaW4sXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBtYXJnaW4sXG4gICAgICAgIH0pLFxuICAgICAgICBib3JkZXJYOiBib3JkZXIgPT4gKHtcbiAgICAgICAgICBib3JkZXJMZWZ0OiBib3JkZXIsXG4gICAgICAgICAgYm9yZGVyUmlnaHQ6IGJvcmRlcixcbiAgICAgICAgfSksXG4gICAgICAgIGJvcmRlclk6IGJvcmRlciA9PiAoe1xuICAgICAgICAgIGJvcmRlclRvcDogYm9yZGVyLFxuICAgICAgICAgIGJvcmRlckJvdHRvbTogYm9yZGVyLFxuICAgICAgICB9KSxcbiAgICAgICAgZWxsaXBzaXM6IGVsbGlwc2lzID0+XG4gICAgICAgICAgZWxsaXBzaXMgPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIGNsZWFyZml4OiBjbGVhcmZpeCA9PlxuICAgICAgICAgIGNsZWFyZml4ID09PSB0cnVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAnOmFmdGVyJzoge1xuICAgICAgICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgICAgICAgY2xlYXI6ICdib3RoJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBjZW50ZXI6IGNlbnRlciA9PlxuICAgICAgICAgIGNlbnRlciA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgLi4uaXNCcm93c2VyKCdJRScsIDEwKVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIGNlbnRlclg6IGNlbnRlciA9PlxuICAgICAgICAgIGNlbnRlciA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgLi4uaXNCcm93c2VyKCdJRScsIDEwKVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIGNlbnRlclk6IGNlbnRlciA9PlxuICAgICAgICAgIGNlbnRlciA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgLi4uaXNCcm93c2VyKCdJRScsIDEwKVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgaGFzRmxleDogc3R5bGVzID0+IHtcbiAgICAgICAgICBpZiAoIWlzQnJvd3NlcignSUUnLCAxMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICByZW1vdmVVbmRlZmluZWQoKSxcbiAgICBdLFxuICAgIC8vIGVuaGFuY2VyczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IFtdIDogW3JlcXVpcmUoJ2ZlbGEtbW9ub2xpdGhpYycpLmRlZmF1bHQoKV0sXG4gIH0pO1xuICByZW5kZXJlci5yZW5kZXJTdGF0aWMobm9ybWFsaXplKTtcbiAgcmV0dXJuIHJlbmRlcmVyO1xufTtcbiJdfQ==

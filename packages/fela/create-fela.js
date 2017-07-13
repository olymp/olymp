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
                        ? __assign({ position: 'absolute' }, (isBrowser('IE', 10)
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
                            })) : {};
                },
                centerX: function (center) {
                    return center === true
                        ? __assign({ position: 'absolute' }, (isBrowser('IE', 10)
                            ? {
                                marginLeft: 'auto',
                                left: 0,
                                marginRight: 'auto',
                                right: 0,
                            }
                            : {
                                left: '50%',
                                transform: 'translateX(-50%)',
                            })) : {};
                },
                centerY: function (center) {
                    return center === true
                        ? __assign({ position: 'absolute' }, (isBrowser('IE', 10)
                            ? {
                                marginTop: 'auto',
                                top: 0,
                                marginBottom: 'auto',
                                bottom: 0,
                            }
                            : {
                                top: '50%',
                                transform: 'translateY(-50%)',
                            })) : {};
                },
            }),
            removeUndefined(),
        ],
    });
    renderer.renderStatic(normalize);
    return renderer;
};
//# sourceMappingURL=create-fela.js.map
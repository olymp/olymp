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
import { getUA } from 'olymp';
import normalize from './normalize';

export default (ua) => {
  const browser = getUA(ua).getBrowser();
  const isBrowser = (type, maxVersion, minVersion) => {
    if (minVersion) {
      return (
        browser.name === type &&
        parseInt(browser.major, 10) < maxVersion &&
        parseInt(browser.major, 10) > minVersion
      );
    }

    return browser.name === type && parseInt(browser.major, 10) < maxVersion;
  };

  const renderer = createRenderer({
    selectorPrefix: 'o',
    plugins: [
      extend(),
      embedded(),
      prefixer(),
      fallbackValue(),
      unit(),
      namedMediaQuery({
        // From
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
        ifMini: '@media (max-width: 479px)',
      }),
      friendlyPseudoClass(),
      customProperty({
        size: size => ({
          width: size,
          height: size,
        }),
        paddingX: padding => ({
          paddingLeft: padding,
          paddingRight: padding,
        }),
        paddingY: padding => ({
          paddingTop: padding,
          paddingBottom: padding,
        }),
        marginX: margin => ({
          marginLeft: margin,
          marginRight: margin,
        }),
        marginY: margin => ({
          marginTop: margin,
          marginBottom: margin,
        }),
        borderX: border => ({
          borderLeft: border,
          borderRight: border,
        }),
        borderY: border => ({
          borderTop: border,
          borderBottom: border,
        }),
        ellipsis: ellipsis =>
          ellipsis === true
            ? {
              whiteSpace: 'nowrap',
              overflowX: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            }
            : {},
        clearfix: clearfix =>
          clearfix === true
            ? {
              ':after': {
                content: '""',
                clear: 'both',
                display: 'block',
                visibility: 'hidden',
                height: 0,
              },
            }
            : {},
        center: center =>
          center === true
            ? {
              position: 'absolute',
              ...(isBrowser('IE', 10)
                  ? {
                    right: 0,
                    bottom: 0,
                    marginLeft: '-50%',
                    marginTop: '-50%',
                  }
                  : {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }),
            }
            : {},
        centerX: center =>
          center === true
            ? {
              position: 'absolute',
              ...(isBrowser('IE', 10)
                  ? {
                    right: 0,
                    marginLeft: '-50%',
                  }
                  : {
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }),
            }
            : {},
        centerY: center =>
          center === true
            ? {
              position: 'absolute',
              ...(isBrowser('IE', 10)
                  ? {
                    bottom: 0,
                    marginTop: '-50%',
                  }
                  : {
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }),
            }
            : {},
      }),
      removeUndefined(),
    ],
    // enhancers: process.env.NODE_ENV === 'production' ? [] : [require('fela-monolithic').default()],
  });
  renderer.renderStatic(normalize);
  return renderer;
};

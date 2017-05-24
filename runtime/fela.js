import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';

// todo: Helfer für gradient, box-Shadows (mit Level) und inner-Shadows
// color, colorAccent, colorSuccess, colorInfo, colorWarning, colorDanger, colorMuted
// colorText, colorTextSecondary, colorTextMuted https://material.io/guidelines/style/color.html#color-usability
// colorTextLight, colorTextLightSecondary, colorTextLightMuted ??? (für dunklen Hintergrund)
// für jeden Farbe: color, colorLight, colorDark, colorInv
// fontSize, fontSizeSmall, fontSizeLarge
// space0, space1, ..., space5 https://v4-alpha.getbootstrap.com/utilities/spacing/

export default () => {
  const renderer = createRenderer({
    selectorPrefix: 'o',
    plugins: [
      extend(),
      prefixer(),
      fallbackValue(),
      unit(),
      namedMediaQuery({
        // From
        ifHugeUp: '@media (min-width: 1200px)',
        ifLargeUp: '@media (min-width: 992px)',
        ifMediumUp: '@media (min-width: 768px)',
        ifSmallUp: '@media (min-width: 480px)',
        // To
        ifLargeDown: '@media (max-width: 1199px)',
        ifMediumDown: '@media (max-width: 991px)',
        ifSmallDown: '@media (max-width: 767px)',
        ifMiniDown: '@media (max-width: 479px)',
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
      }),
      removeUndefined()
    ],
    enhancers: process.env.NODE_ENV === 'production' ? [] : [require('fela-monolithic')()],
  });

  return renderer;
};

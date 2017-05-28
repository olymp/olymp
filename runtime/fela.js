import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';

// todo
// color: {primary, accent, success, info, warning, danger, muted}
  // color.primary.getPrimaryText() = Gibt je nach Hintergrund (hier primary) helle oder dunkle Schriftfarbe zurück https://material.io/guidelines/style/color.html#color-usability
  // color.primary.getSecondaryText() = Gibt je nach Hintergrund (hier primary) helle oder dunkle Schriftfarbe zurück https://material.io/guidelines/style/color.html#color-usability
  // color.primary.getMutedText() = Gibt je nach Hintergrund (hier primary) helle oder dunkle Schriftfarbe zurück https://material.io/guidelines/style/color.html#color-usability
  // color.primary.getLight(percent = 4%) = Gibt hellere Farbe zurück
  // color.primary.getDark(percent = 4%) = Gibt dunklere Farbe zurück
  // color.primary.getNuance(grad = 180°) = Gibt spin der Farbe zurück
  // color.primary.getGradient(grad = 45°, color = undefined) = Gibt Gradient der Farbe zurück
// space: {d0, d1, d2 ... d5} (d = dynamisch = x rem) https://v4-alpha.getbootstrap.com/utilities/spacing/
// fontSize: {primary, small}
// boxShadows: normal und inner
// textColorLight/Dark
// borderWidth/Style/Radius => getBorder(color) => `${theme.borderWidth} ${theme.borderStyle} ${color}`

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
        borderX: border => ({
          borderLeft: border,
          borderRight: border,
        }),
        borderY: border => ({
          borderTop: border,
          borderBottom: border,
        }),
      }),
      removeUndefined()
    ],
    enhancers: process.env.NODE_ENV === 'production' ? [] : [require('fela-monolithic')()],
  });

  return renderer;
};

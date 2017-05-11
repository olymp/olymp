import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';

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
        fromWide: '@media (min-width: 1200px)',
        fromDesktop: '@media (min-width: 992px)',
        fromTablet: '@media (min-width: 768px)',
        fromPhone: '@media (min-width: 480px)',
        // To
        toDesktop: '@media (max-width: 1199px)',
        toTablet: '@media (max-width: 991px)',
        toPhone: '@media (max-width: 767px)',
        toMini: '@media (max-width: 479px)',
        // On
        onWide: '@media (min-width: 1200px)',
        onDesktop: '@media (max-width: 1199px, min-width: 992)',
        onTablet: '@media (max-width: 991px, min-width: 768)',
        onPhone: '@media (max-width: 767px, min-width: 480)',
        onMini: '@media (max-width: 479px)',
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

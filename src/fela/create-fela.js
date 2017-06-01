import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';

const createFela = () => {
  const renderer = createRenderer({
    selectorPrefix: 'o',
    plugins: [
      extend(),
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
        overflow: overflow => (overflow === 'ellipsis' ? ({
          whiteSpace: 'nowrap',
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
        }) : ({ overflow })),
      }),
      removeUndefined()
    ],
    enhancers: process.env.NODE_ENV === 'production' ? [] : [require('fela-monolithic')()],
  });

  return renderer;
};
export default createFela;

import { createRenderer } from 'fela';
import extend from 'fela-plugin-extend';
import customProperty from 'fela-plugin-custom-property';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import removeUndefined from 'fela-plugin-remove-undefined';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import namedMediaQuery from 'fela-plugin-named-media-query';
import { ThemeProvider as FelaThemeProvider } from 'react-fela';
import React from 'react';

const getTheme = theme => ({
  color: '#8e44ad',
  colorSecondary: '#e67e22',
  colorSuccess: '#2ecc71',
  colorInfo: '#3498db',
  colorWarning: '#f39c12',
  colorDanger: '#e74c3c',
  colorMuted: '#bdc3c7',
  textColor: '#333333',
  textColorLight: '#FFFFFF',
  textColorDark: '#000000',
  space0: 0,
  space1: '0.25rem',
  space2: '0.5rem',
  space3: '1rem',
  space4: '2rem',
  space5: '4rem',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 3,
  fontSize: '1rem',
  fontSizeSmall: '1rem',
  fontSizeH1: '1rem',
  fontSizeH2: '1rem',
  fontSizeH3: '1rem',
  fontSizeH4: '1rem',
  fontSizeH5: '1rem',
  fontSizeH6: '1rem',
  ...theme,
});

export const ThemeProvider = ({ theme, ...rest }) => (
  <FelaThemeProvider theme={getTheme(theme)} {...rest} />
);

export const createFela = () => {
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

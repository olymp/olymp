import React from 'react';
import tinycolor from 'tinycolor2';
import { withTheme } from 'react-fela';
import shortId from 'shortid';

const getColor = (theme, color) => {
  if (color === true) {
    return theme.color;
  } else if (typeof color === 'string') {
    return theme[color] || color;
  }
  return theme.inverted ? theme.light : theme.dark;
};

export default withTheme(
  ({ width, height, size, theme, color: col, className }) => {
    const color = getColor(theme, col);
    const id = shortId();

    return (
      <svg
        width={width || size || 100}
        height={height || Math.round(size / 1001 * 790) || 79}
        viewBox="0 0 1001 790"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="99.273%"
            id={`linearGradient-${id}-1`}
          >
            <stop
              stopColor={tinycolor(color)
                .lighten(8)
                .spin(6)
                .toRgbString()}
              stopOpacity=".617"
              offset="0%"
            />
            <stop
              stopColor={tinycolor(color)
                .darken(4)
                .spin(-3)
                .toRgbString()}
              stopOpacity=".863"
              offset="100%"
            />
          </linearGradient>
          <linearGradient
            x1="15.734%"
            y1="1.293%"
            x2="49.318%"
            y2="94.09%"
            id={`linearGradient-${id}-2`}
          >
            <stop
              stopColor={tinycolor(color)
                .lighten(8)
                .spin(6)
                .toRgbString()}
              stopOpacity=".587"
              offset="0%"
            />
            <stop
              stopColor={tinycolor(color)
                .darken(4)
                .spin(-3)
                .toRgbString()}
              stopOpacity=".651"
              offset="100%"
            />
          </linearGradient>
          <linearGradient
            x1="82.681%"
            y1="29.971%"
            x2="50%"
            y2="70.029%"
            id={`linearGradient-${id}-3`}
          >
            <stop
              stopColor={tinycolor(color)
                .lighten(8)
                .spin(6)
                .toRgbString()}
              offset="0%"
            />
            <stop
              stopColor={tinycolor(color)
                .darken(4)
                .spin(-3)
                .toRgbString()}
              offset="100%"
            />
          </linearGradient>
          <linearGradient
            x1="8.793%"
            y1="13.73%"
            x2="50%"
            y2="89.257%"
            id={`linearGradient-${id}-4`}
          >
            <stop
              stopColor={tinycolor(color)
                .lighten(8)
                .spin(6)
                .toRgbString()}
              stopOpacity=".502"
              offset="0%"
            />
            <stop
              stopColor={tinycolor(color)
                .darken(4)
                .spin(-3)
                .toRgbString()}
              stopOpacity=".758"
              offset="100%"
            />
          </linearGradient>
        </defs>
        <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="Artboard">
            <g id="logo">
              <g id="Page-1">
                <polygon
                  id="left"
                  fill={`url(#linearGradient-${id}-1)`}
                  opacity=".7"
                  points="1 580 301.446897 60 501 790"
                />
                <polygon
                  id="inner-left"
                  fill={`url(#linearGradient-${id}-2)`}
                  points="1001 580 301 60 501 790"
                />
                <polygon
                  id="right"
                  fill={`url(#linearGradient-${id}-3)`}
                  opacity=".7"
                  transform="matrix(-1 0 0 1 1502 0)"
                  points="501 580 801 0 1001 790"
                />
                <polygon
                  id="inner-right"
                  fill={`url(#linearGradient-${id}-4)`}
                  transform="matrix(-1 0 0 1 701.997 0)"
                  points="701 579.999802 0.997192 0 200.997192 790"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  },
);

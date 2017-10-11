import React from 'react';

export default ({ width = 100, height = 100 }) => (
  <svg width={width} height={height} viewBox="0 0 1001 790" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="99.273%" id="linearGradient-1">
        <stop stopColor="#FFF" stopOpacity=".617" offset="0%" />
        <stop stopColor="#FFF" stopOpacity=".863" offset="100%" />
      </linearGradient>
      <linearGradient x1="15.734%" y1="1.293%" x2="49.318%" y2="94.09%" id="linearGradient-2">
        <stop stopColor="#FFF" stopOpacity=".587" offset="0%" />
        <stop stopColor="#FFF" stopOpacity=".651" offset="100%" />
      </linearGradient>
      <linearGradient x1="82.681%" y1="29.971%" x2="50%" y2="70.029%" id="linearGradient-3">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient x1="8.793%" y1="13.73%" x2="50%" y2="89.257%" id="linearGradient-4">
        <stop stopColor="#FFF" stopOpacity=".502" offset="0%" />
        <stop stopColor="#FFF" stopOpacity=".758" offset="100%" />
      </linearGradient>
    </defs>
    <g id="Page-1" fill="none" fillRule="evenodd">
      <g id="Artboard">
        <g id="logo">
          <g id="Page-1">
            <polygon
              id="left"
              fill="url(#linearGradient-1)"
              opacity=".7"
              points="1 580 301.446897 60 501 790"
            />
            <polygon
              id="inner-left"
              fill="url(#linearGradient-2)"
              points="1001 580 301 60 501 790"
            />
            <polygon
              id="right"
              fill="url(#linearGradient-3)"
              opacity=".7"
              transform="matrix(-1 0 0 1 1502 0)"
              points="501 580 801 0 1001 790"
            />
            <polygon
              id="inner-right"
              fill="url(#linearGradient-4)"
              transform="matrix(-1 0 0 1 701.997 0)"
              points="701 579.999802 0.997192 0 200.997192 790"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

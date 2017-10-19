import React from 'react';
import { createComponent } from 'olymp-fela';
import SVG from './svg';

export default createComponent(
  ({ theme, level, room, levelStyles, pathStyles, entryStyles }) => {
    const neben = !!room && room.includes('n');

    return {
      width: '100%',
      marginTop: theme.space2,
      '> #gzk': {
        '& text': {
          fontSize: 64,
          fontFamily: theme.fontFamily,
        },
        '> #l0': {
          display: 'none',
        },
        '> #l1': {
          display: 'none',
        },
        '> #l2': {
          display: 'none',
        },
        '> #l3': {
          display: 'none',
        },
        [`> #${level}`]: {
          display: 'block',
          ...levelStyles,
        },
        '> #top': {
          display: level === 'l0' && 'none',
          '> #stairs': {
            opacity: room ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          },
        },
        '> #top_l0': {
          display: level !== 'l0' && 'none',
        },
        '> #stuff': {
          '> #textBuilding1': {
            fill: room && !neben ? theme.color : theme.dark,
          },
          '> #textBuilding2': {
            fill: room && neben ? theme.color : theme.dark,
          },
          '> #standort > text': {
            opacity: room ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          },
        },
        '> #entry': {
          '> circle': {
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            fill: theme.color,
          },
          ...entryStyles,
        },
        '> #path': {
          '> *': {
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            stroke: theme.color,
            '> path': {
              stroke: theme.color,
            },
            '> polyline': {
              stroke: theme.color,
            },
            '> polygon': {
              fill: theme.color,
            },
          },
          ...pathStyles,
        },
      },
    };
  },
  ({ className, setActiveItem }) => (
    <SVG className={className} setActiveItem={setActiveItem} />
  ),
  p => Object.keys(p),
);

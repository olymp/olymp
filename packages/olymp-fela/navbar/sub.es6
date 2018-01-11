import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { border } from 'olymp-fela';

export default createComponent(
  ({ theme, fill, vertically, right }) => ({
    float: right ? 'right' : 'left',
    width: fill && '100%',
    height: !vertically && '100%',
    minWidth: vertically ? '100%' : 'auto',
    marginLeft: right && 'auto',
    borderTop: vertically && border(theme, theme.dark4),
    ifMini: {
      float: 'none',
      width: '100%',
      borderRight: 0,
      // borderTop: border(theme, theme.dark4),
      clear: 'both',
    },
    ifMediumUp: {
      display: vertically ? 'none' : 'block',
      hasFlex: {
        display: vertically ? 'none' : 'flex',
        flex: fill && '1 1 auto',
        alignItems: 'stretch',
        flexDirection: vertically ? 'column' : 'row',
      },
    },
  }),
  ({ className, pages, children, ...props }) => (
    <div className={className}>
      {pages.map(({ children: childPages, ...page }, i) =>
        props.renderItem({
          ...page,
          title: page.name,
          pages: childPages,
          key: page.id || i,
          ...props,
        }),
      )}

      {Children.map(children, child => cloneElement(child, props))}
    </div>
  ),
  p => Object.keys(p),
);

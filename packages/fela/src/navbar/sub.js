import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { border } from 'olymp-fela';

export default createComponent(
  ({ theme, fill, vertically, right, inverse }) => ({
    float: right ? 'right' : 'left',
    width: fill && '100%',
    minWidth: vertically ? '100%' : 'auto',
    display: fill && 'flex',
    flex: fill && '1 1',
    marginLeft: right && 'auto',
    // borderRight: inverse && !right && !vertically && border(theme, theme.dark4),
    // borderLeft: inverse && right && !vertically && border(theme, theme.dark4),
    borderTop: vertically && border(theme, theme.dark4),
    ifMini: {
      float: 'none',
      width: '100%',
      borderRight: 0,
      borderTop: border(theme, theme.dark4),
      clear: 'both',
    },
  }),
  ({ className, pages, children, ...props }) =>
    (<div className={className}>
      {pages.map(({ children: childPages, ...page }, i) =>
        props.renderItem({
          ...page,
          title: page.name,
          pages: childPages,
          key: page.id || i,
          ...props,
        })
      )}

      {Children.map(children, child => cloneElement(child, props))}
    </div>),
  p => Object.keys(p)
);

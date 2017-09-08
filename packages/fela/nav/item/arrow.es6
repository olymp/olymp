import React from 'react';
import { createComponent } from 'react-fela';
import { FaAngleDown, FaAngleLeft, FaAngleRight } from 'olymp-icons';

export default createComponent(
  ({ theme, isLight }) => ({
    fill: `${isLight ? theme.light2 : theme.color}`,
    centerY: true,
    right: theme.space3,
  }),
  ({ className, direction }) => {
    switch (direction) {
      case 'down':
        return <FaAngleDown className={className} size={15} />;

      case 'left':
        return <FaAngleLeft className={className} size={15} />;

      default:
        return <FaAngleRight className={className} size={15} />;
    }
  },
  p => Object.keys(p)
);

import React, { Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import Label from './label';

export default createComponent(() => ({
  position: 'relative',
  display: 'block',
  '& label.drop-icon': {
    position: 'absolute',
    right: '1.5em',
    top: '1.25em',
  },
}), ({
  className,
  style,
  children,
  title,
  level = 0,
  ...rest
}) => (
  <li className={className} style={style}>
    <Label {...rest}>
      {title}
      <span className="drop-icon">▾</span>
      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm2">
        ▾
      </label>
    </Label>
    <input type="checkbox" className="sm2" />
    <ul className="sub-menu">
      {Children.map(children, child =>
        cloneElement(child, { level: level + 1 }),
      )}
    </ul>
  </li>
), p => Object.keys(p));

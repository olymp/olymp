import React from 'react';
import { createComponent } from 'olymp-fela';
import { FaPencil } from 'olymp-icons';
import { Link } from 'olymp-router';

const Button = createComponent(
  ({ theme, size = 30 }) => ({
    borderRadius: '50%',
    backgroundColor: theme.color,
    width: size,
    height: size,
    color: theme.light,
    '> svg': {
      fill: theme.light,
      stroke: theme.light,
    },
    '> *': {
      center: true,
    },
  }),
  ({ className, children, to, updateQuery }) => (
    <Link updateQuery={updateQuery} to={to}>
      <div className={className}>{children}</div>
    </Link>
  ),
  ['className', 'to', 'updateQuery'],
);

Button.Edit = props => (
  <Button {...props}>
    <FaPencil size={12} />
  </Button>
);

export default Button;

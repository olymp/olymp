import React from 'react';
import { createComponent } from 'olymp-fela';
import { FaPen } from 'olymp-icons';
import { Link } from 'olymp-router';

const Button = createComponent(
  ({ theme, size = 30 }) => ({
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: theme.color,
    color: theme.light,
    position: 'relative',
    '> div': {
      center: true,
      '> svg': {
        fill: theme.light,
        stroke: theme.light,
      },
    },
  }),
  ({ className, children, to, updateQuery }) => (
    <Link className={className} updateQuery={updateQuery} to={to}>
      <div>{children}</div>
    </Link>
  ),
  ['className', 'to', 'updateQuery'],
);

Button.Edit = props => (
  <Button {...props}>
    <FaPen size={12} />
  </Button>
);

export default Button;

import React from 'react';
import { createComponent, border } from 'olymp-fela';
import { withQueryParam, Link } from 'olymp-router';
import { Icon } from 'antd';

const Label = createComponent(
  ({ theme, readOnly }) => ({
    width: '100%',
    display: 'inline-block',
    // color: `${theme.color} !important`,
    borderBottom: border(theme),
    onHover: {
      borderBottom: border(theme, theme.color),
    },
    '> h2': {
      '> span': {
        float: 'left',
        cursor: readOnly && 'pointer',
      },
      '> i': {
        float: 'right',
        cursor: 'pointer',
      },
    },
    clearfix: true,
  }),
  ({ children, ...props }) => (
    <Link {...props}>
      <h2>{children}</h2>
    </Link>
  ),
  p => Object.keys(p),
);

export default {
  type: 'accordionLabel',
  isVoid: false,
  kind: 'block',
  label: 'Überschrift',
  component: withQueryParam(
    'accordion',
  )(({ attributes, className, children, accordion, readOnly, parent }) => (
    <Label
      className={className}
      readOnly={readOnly}
      updateQuery={{ accordion: accordion !== parent.key ? parent.key : null }}
      {...attributes}
    >
      <span>{children}</span>
      <Icon
        contentEditable={false}
        type={accordion === parent.key ? 'down-square-o' : 'left-square-o'}
      />
    </Label>
  )),
};

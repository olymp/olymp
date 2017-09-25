import React from 'react';
import { createComponent, border } from 'olymp-fela';
import { withQueryState } from 'olymp-router';
import { Icon } from 'antd';

const Label = createComponent(
  ({ theme, readOnly }) => ({
    width: '100%',
    // color: `${theme.color} !important`,
    borderBottom: border(theme),
    onHover: {
      borderBottom: border(theme, theme.color),
    },
    '> span:nth-child(1)': {
      float: 'left',
      cursor: readOnly && 'pointer',
    },
    '> span:nth-child(2)': {
      float: 'right',
      cursor: 'pointer',
    },
    clearfix: true,
  }),
  'h2',
  p => Object.keys(p),
);

export default {
  type: 'Pages.Template.Accordion.Label',
  isVoid: false,
  kind: 'block',
  label: 'Überschrift',
  component: withQueryState(
    'accordion',
  )(({ attributes, className, children, accordion, updateAccordion, readOnly, parent }) => (
    <Label className={className} readOnly={readOnly} {...attributes}>
      <span
        onClick={() => readOnly && updateAccordion(accordion !== parent.key ? parent.key : null)}
      >
        {children}
      </span>
      <span contentEditable={false}>
        <Icon
          onClick={() => updateAccordion(accordion !== parent.key ? parent.key : null)}
          type={accordion === parent.key ? 'down-square-o' : 'left-square-o'}
        />
      </span>
    </Label>
  )),
};

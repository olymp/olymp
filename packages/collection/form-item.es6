import React from 'react';
import Form, { defaultLayout } from 'olymp-ui/form';
import { createComponent } from 'olymp-fela';

const Div = createComponent(
  ({ theme, isActive }) => ({
    paddingY: theme.space2,
    paddingX: theme.space2,
    // cursor: 'pointer',
    // backgroundColor: isActive && theme.dark5,
    onHover: {
      // backgroundColor: theme.dark5,
    },
    '> div.ant-form-item.ant-row.ant-form-item.ant-form-item-no-colon': {
      marginBottom: 0,
    },
  }),
  'div',
  ['onClick'],
);

export default ({
  setActiveField,
  children,
  isActive,
  field,
  full,
  ...props
}) => (
  <Div
    isActive={isActive}
    onClick={setActiveField ? x => setActiveField(field.name) : null}
  >
    <Form.Item {...defaultLayout} {...props}>
      {children}
    </Form.Item>
  </Div>
);

import React from 'react';
import Form, { defaultLayout } from 'olymp-ui/form';
import { createComponent, border } from 'olymp-fela';
import { FaAngleRight } from 'olymp-icons';

const Div = createComponent(
  ({ theme, isActive }) => ({
    borderBottom: border(theme),
    paddingY: theme.space2,
    paddingX: theme.space2,
    cursor: 'pointer',
    backgroundColor: isActive ? theme.dark5 : theme.light,
    onHover: {
      backgroundColor: theme.dark5,
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
      {full && (
        <FaAngleRight
          size={18}
          color={isActive ? true : undefined}
          style={{
            position: 'absolute',
            right: -3,
            top: 7,
          }}
        />
      )}
    </Form.Item>
  </Div>
);

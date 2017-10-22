import React from 'react';
import Form, { defaultLayout } from 'olymp-ui/form';
import { createComponent } from 'react-fela';
import { FaAngleRight } from 'olymp-icons';

const Div = createComponent(
  ({ isActive }) => ({
    borderBottom: '1px solid #eeeeee',
    paddingY: 5,
    marginBottom: 0,
    paddingX: 8,
    cursor: 'pointer',
    backgroundColor: isActive ? '#f3f3f3' : undefined,
    onHover: {
      backgroundColor: '#f3f3f3',
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
  <Div isActive={isActive} onClick={x => setActiveField(field.name)}>
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

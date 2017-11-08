import React from 'react';
import Form, { defaultLayout } from 'olymp-ui/form';
import { createComponent } from 'olymp-fela';
import { get } from 'lodash';

const Div = createComponent(
  ({ theme }) => ({
    paddingY: theme.space2,
    paddingX: theme.space2,
    '> div.ant-form-item.ant-row.ant-form-item.ant-form-item-no-colon': {
      marginBottom: 0,
    },
  }),
  'div',
  ['onClick'],
);

export default ({ children, field, ...props }) => {
  const label = get(field, 'specialFields.label');

  return (
    <Div>
      <Form.Item {...defaultLayout} {...props} label={label}>
        {children}
      </Form.Item>
    </Div>
  );
};

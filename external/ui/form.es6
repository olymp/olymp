import React from 'react';
import { Form as AntForm } from 'antd';
import { createComponent } from 'react-fela';

const Form = createComponent(
  ({ theme }) => ({
    '& .ant-form-item-label': {
      textAlign: 'left',
      '> label': {
        fontWeight: 400,
        color: theme.dark2,
      },
    },
  }),
  props => <AntForm {...props} />,
  []
);
Form.create = AntForm.create;
Form.Item = AntForm.Item;
Form.Panel = createComponent(
  ({ theme }) => ({
    borderTop: `1px solid ${theme.dark4}`,
    paddingTop: theme.space3,
    marginTop: theme.space4,
    position: 'relative',
    '> label': {
      fontWeight: 'bold',
      position: 'absolute',
      top: -14,
      padding: '1px 8px',
      marginLeft: -8,
      color: '#777',
      borderRadius: '4px 4px 0 0',
      background: '#fff',
      transition: 'background-color .4s',
    },
  }),
  ({ title, children, ...props }) => (
    <div {...props}>
      {title && <label>{title}</label>}
      {children}
    </div>
  ),
  ['title', 'onPaste']
);

export default Form;

export const defaultLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
  colon: false,
};

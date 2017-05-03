import React from 'react';
import { styled } from 'olymp';
import { Button as AntButton } from 'antd';

const Button = styled(({ theme }) => ({
  display: 'block!important',
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
  paddingTop: 1,
}), AntButton, p => p);

export default Button;

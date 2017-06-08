import { createComponent } from 'olymp-fela';
import { Button as AntButton } from 'antd';

const Button = createComponent(({ theme }) => ({
  display: 'block!important',
  // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
  paddingTop: 1,
}), AntButton, p => Object.keys(p));

export default Button;

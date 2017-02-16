import React from 'react';
import { Form } from 'antd';

export default WrappedComponent => Form.create()(props => <WrappedComponent {...props} />);

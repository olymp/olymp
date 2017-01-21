import React from 'react';
import { Input } from 'antd';

export default ({ url, ...props }) => {
  return (
    <span className="slug-editor">{url}<Input {...props} /></span>
  );
};

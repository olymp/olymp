import React, { Component } from 'react';
import { Spin } from 'antd';

export default (View, key) => props => {
  const { data, ...rest } = props;
  if (!data || !data[key]) return <Spin />;
  const moreProps = { [key]: data[key] };
  return (
    <View {...rest} {...moreProps} />
  );
}

import React from 'react';
import { Spin } from 'antd';

export default (hasContent, placeholder = 'Keine Daten vorhanden') => (Block) => {
  let hasContentFn;
  switch (typeof hasContent) {
    case 'string':
      hasContentFn = props => props.data[hasContent] && props.data[hasContent];
      break;

    case 'object':
      hasContentFn = hasContent.reduce(
        (result, type) => result && props.data[type] && props.data[type].length, true
      );
      break;

    case 'function':
      hasContentFn = hasContent;
      break;

    default:
      hasContentFn = () => true;
  }

  // if (typeof dataType === 'function') return dataType(this.props);
  // else if (typeof dataType === 'string') return this.props[dataType];

  const LoaderDecorator = (props) => {
    if (!props.data || hasContentFn(props)) {
      return <Block {...props} />;
    }

    const text = (
      <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
        {placeholder}
      </h1>
    );
    const style = { margin: '1.5em 0', width: '100%', minHeight: 100, ...props.style };

    return props.data.loading ? (
      <Spin style={style}>
        {text}
      </Spin>
    ) : (
      <div style={style}>
        {text}
      </div>
    );
  };

  return LoaderDecorator;
};

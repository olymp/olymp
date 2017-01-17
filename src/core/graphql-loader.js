import React from 'react';
import { GenericBlock } from '../cms';

export default (dataType, useGeneric = false, placeholder = 'Keine Daten vorhanden') => (Block) => {
  const types = typeof dataType === 'string' ? [dataType] : dataType;

  // if (typeof dataType === 'function') return dataType(this.props);
  // else if (typeof dataType === 'string') return this.props[dataType];

  const LoaderDecorator = (props) => {
    const genericWrapper = children => useGeneric ? (
      <GenericBlock {...props}>
        {children}
      </GenericBlock>
     ) : children;

    if (!props.data || types.reduce(
      (result, type) => result && props.data[type] && props.data[type].length, true
    )) {
      return <Block {...props} />;
    }

    return genericWrapper(props.data.loading ? (
      <div style={{ margin: '1.5em 0', width: '100%', ...props.style }}>
        <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem' }}>
          <i className="fa fa-refresh fa-spin fa-fw" />
        </h1>
      </div>
    ) : (
      <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
        {placeholder}
      </h1>
    ));
  };

  return LoaderDecorator;
};

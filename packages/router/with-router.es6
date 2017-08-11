import React from 'react';
import { inject, observer } from 'mobx-react';

export default (WrappedComponent) => {
  const inner = (props, context) => {
    const { $history, ...rest } = props;
    return (
      <WrappedComponent
        {...rest}
        $history={$history}
        history={$history}
        router={$history}
        pathname={$history.location.pathname}
        location={$history.location}
        query={$history.location.query}
      />
    );
  };
  return inject('$history')(observer(inner));
};

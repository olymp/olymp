import React from 'react';
import { inject, observer } from 'mobx-react';

export default (WrappedComponent) => {
  const inner = (props) => {
    const { $history, ...rest } = props;
    return (
      <WrappedComponent
        {...rest}
        $history={$history}
        history={$history}
        router={$history}
        location={$history.location}
        pathname={$history.location.pathname}
        query={$history.location.query}
      />
    );
  };
  return inject('$history')(observer(inner));
};

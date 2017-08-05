import React from 'react';
import { connect } from 'olymp-utils/mobx';
import { observer } from 'mobx-react';

export default (WrappedComponent) => {
  const inner = (props, context) => {
    const { history, ...rest } = props;
    return (
      <WrappedComponent
        {...rest}
        history={history}
        router={history}
        pathname={history.pathname}
        location={history.location}
        query={history.query}
      />
    );
  };
  return connect('history')(observer(inner));
};

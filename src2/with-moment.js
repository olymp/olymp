import React, { Component } from 'react';
import invariant from 'invariant';
import hoistStatics from 'hoist-non-react-statics';
import { routerContext } from 'react-router-v4-decode-uri/PropTypes';
import { LocationSubscriber } from 'react-router-v4-decode-uri/Broadcasts';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withRouter = (options) => {
  const hoc = (WrappedComponent) => {
    const withRef = options && options.withRef;

    class WithRouter extends Component {
      static contextTypes = {
        router: routerContext,
      }

      getWrappedInstance() {
        invariant(
          withRef,
          'To access the wrapped instance, you need to specify ' +
          '`{ withRef: true }` as an option to withRouter - ' +
          '@withRouter(opts) OR withRouter(opts)(Component)'
        );

        return this.wrappedInstance;
      }

      render() {
        const { router } = this.context;
        router.push = router.transitionTo;
        const props = {
          ...this.props,
          router,
        };
        if (withRef) {
          props.ref = (c) => { this.wrappedInstance = c; };
        }

        return (
          <LocationSubscriber>
            {locationContext => (
              <WrappedComponent
                {...props}
                location={locationContext}
              />
            )}
          </LocationSubscriber>
        );
      }
    }

    WithRouter.displayName = `withRouter(${getDisplayName(WrappedComponent)})`;
    WithRouter.WrappedComponent = WrappedComponent;

    return hoistStatics(WithRouter, WrappedComponent);
  };

  // Allow using decorator with or without options
  // @withRouter **OR** @withRouter(opts)
  // withRouter(Component) **OR** withRouter(opts)(Component)
  if (typeof options === 'function') {
    // Calling like: withRouter(Component)
    return hoc(options);
  } return hoc;
};

export default withRouter;

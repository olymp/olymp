import {
  createAsyncContext,
  AsyncComponentProvider,
} from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import serialize from 'serialize-javascript';

export { asyncComponent as default } from 'react-async-component';

export const plugin = () => {
  if (typeof window !== 'undefined') {
    const asyncContext = createAsyncContext();
    return {
      bootstrap: app => asyncBootstrapper(app),
      decorate: App => props => (
        <AsyncComponentProvider rehydrateState={window.ASYNC_STATE}>
          <App {...props} />
        </AsyncComponentProvider>
      ),
    };
  } else {
    const asyncContext = createAsyncContext();
    return {
      decorate: App => props => (
        <AsyncComponentProvider asyncContext={asyncContext}>
          <App {...props} />
        </AsyncComponentProvider>
      ),
      bootstrap: app => asyncBootstrapper(app),
      template: template => {
        const state = asyncContext.getState();
        template.body.push(`
          <script type="text/javascript">
            window.ASYNC_STATE = ${serialize(state)}
          </script>
        `);
        return template;
      },
    };
  }
};

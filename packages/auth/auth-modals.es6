import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  name: 'auth',
  resolve: () => System.import('./views'),
});

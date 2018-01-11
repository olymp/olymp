import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      // Webpack's code splitting API w/naming
      require.ensure(
        [],
        require => {
          resolve(require('./cloudinary'));
        },
        'cloudinary',
      ),
    ),
});

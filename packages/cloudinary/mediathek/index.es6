import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  name: 'cloudinary',
  resolve: () => System.import('./cloudinary'),
});

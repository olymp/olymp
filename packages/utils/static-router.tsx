import { StaticRouter } from 'react-router';
import { urlToLocation } from '../utils';

export default ({ location, ...rest }) =>
  <StaticRouter {...rest} location={urlToLocation(location)} />;

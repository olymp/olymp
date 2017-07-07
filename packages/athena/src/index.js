export { default } from './cms';

// todo: MONKEY PATCH GATEWAY
import { Gateway } from 'react-gateway';
import { node } from 'prop-types';
Gateway.propTypes = {
  ...Gateway.propTypes,
  children: node,
};

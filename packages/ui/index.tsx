export { default as List } from './list';
export * from './containers';
export * from './modal-utils';
export * from './badge';
export { default as Modal } from './modal';
export { default as Transitions } from './transitions';
export { default as Sidebar } from './sidebar';
export { default as Dropdown } from './dropdown';
export * from './h';
export * from './edits';
export { default as Tree } from './tree';
export { default as getRules } from './rules';
export { default as Countdown } from './countdown';
export { default as Navigation } from './navigation';

import 'antd/dist/antd.css';
// todo: MONKEY PATCH GATEWAY
import { Gateway } from 'react-gateway';
import { node } from 'prop-types';
Gateway.propTypes = {
  ...Gateway.propTypes,
  children: node,
};
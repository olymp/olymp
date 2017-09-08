import React from 'react';
import ReactDOM from 'react-dom';
import Notification from 'rc-notification';

export { default as List } from './list';
export * from './containers';
export * from './modal-utils';
export * from './badge';
export { default as Modal } from './modal';
export { default as Sidebar } from './sidebar';
export { default as Dropdown } from './dropdown';
export * from './h';
export * from './edits';
export { default as Tree } from './tree';
export { default as getRules } from './rules';
export { default as Countdown } from './countdown';
export { default as Hotjar } from './hotjar';
export { default as withGateway } from './gateway';

// import 'antd/dist/antd.less';

// todo: MONKEY PATCH GATEWAY
import { Gateway } from 'react-gateway';
import { node } from 'prop-types';

Gateway.propTypes = {
  ...Gateway.propTypes,
  children: node,
};

Notification.newInstance = function newNotificationInstance(properties) {
  const { getContainer, ...props } = properties || {};
  let div;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  let notification;
  ReactDOM.render(
    <Notification
      ref={(x) => {
        notification = x;
      }}
      {...props}
    />,
    div,
  );
  return {
    notice(noticeProps) {
      if (notification) {
        notification.add(noticeProps);
      }
    },
    removeNotice(key) {
      if (notification) {
        notification.remove(key);
      }
    },
    component: notification,
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      if (!getContainer) {
        document.body.removeChild(div);
      }
    },
  };
};

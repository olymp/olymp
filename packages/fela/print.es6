import React from 'react';
import createComponent from './utils/create-component';
import Portal from 'react-portal';

const Print = createComponent(
  () => ({
    backgroundColor: 'white',
    minHeight: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    zIndex: 10000,
  }),
  ({ children, className, onClose }) =>
    (<Portal
      isOpened
      onOpen={() => {
        setTimeout(() => {
          window.print();
          setTimeout(onClose, 1);
        }, 200);
      }}
    >
      <div className={className}>
        {children}
      </div>
    </Portal>),
  p => Object.keys(p),
);
export default Print;

Print.Break = createComponent(
  () => ({
    pageBreakBefore: 'always',
  }),
  ({ tag = 'div', ...rest }) => React.createElement(tag, rest),
  ['tag'],
);

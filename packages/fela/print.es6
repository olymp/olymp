import React from 'react';
import createComponent from './utils/create-component';
import IFrame from './iframe';

export default createComponent(
  () => ({
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    display: 'none',
  }),
  ({ children, className, onClose }) =>
    (<div className={className}>
      <IFrame
        css={`
          body {
            -ms-zoom: 1.665;

            margin: 10px auto;
            padding: 10mm;
            page-break-after: always;
            background: white;

            width: 276mm;
            height: 190mm;
            border: none;

            transform: rotate(270deg) translate(-276mm, 0);
            transform-origin: 0 0;
          }`}
        mounted={({ window }) => {
          window.print();
          onClose();
        }}
      >
        {children}
      </IFrame>
    </div>),
  p => Object.keys(p),
);

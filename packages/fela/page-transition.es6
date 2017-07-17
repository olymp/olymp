import React from 'react';

export default ({ children }) => children;

/*import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { createComponent } from 'react-fela';

const duration = 5000;
const PageTransition = createComponent(
  () => ({
    position: 'relative',
    '> *': {
      opacity: 1,
      // transform: 'translate3d(0px, 40px, 0px)',
    },
    '> .page-transition-enter': {
      opacity: 0.01,
      // transform: 'translate3d(0px, 40px, 0px)',
    },
    '> .page-transition-enter-active': {
      opacity: 1,
      // transform: 'translate3d(0,0,0)',
      transition: `opacity ${duration}ms ease-out, transform 100ms ease-out`,
    },
    '> .page-transition-exit': {
      opacity: 1,
    },
    '> .page-transition-exit-active': {
      opacity: 0.01,
      // transform: 'translate3d(0,0,0)',
      transition: `opacity 0ms ease-out, transform 100ms ease-out`,
    },
  }),
  ({ children, className, innerKey }) =>
    <TransitionGroup className={className} component="div">
      <CSSTransition
        key={innerKey}
        classNames={{
          enter: 'page-transition-enter',
          enterActive: 'page-transition-enter-active',
          exit: 'page-transition-exit',
          exitActive: 'page-transition-exit-active',
        }}
        enter
        exit
        timeout={{ enter: duration, exit: 0 }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>,
  []
);
PageTransition.displayName = 'PageTransition';
export default PageTransition;
*/

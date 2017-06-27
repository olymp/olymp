import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { createComponent } from 'react-fela';

export default createComponent(
  () => ({
    position: 'relative',
    '> .page-transition-enter': {
      opacity: 0.01,
      // transform: 'translate3d(0px, 40px, 0px)',
    },
    '> .page-transition-enter-active': {
      opacity: 1,
      // transform: 'translate3d(0,0,0)',
      transition: 'opacity 600ms ease-out, transform 100ms ease-out',
    },
    '> .page-transition-appear': {
      opacity: 0.01,
      // transform: 'translate3d(0px, 40px, 0px)',
    },
    '> .page-transition-appear-active': {
      opacity: 1,
      // transform: 'translate3d(0,0,0)',
      transition: 'opacity 600ms ease-out, transform 100ms ease-out',
    },
  }),
  ({ children, className }) =>
    (<CSSTransitionGroup
      transitionName={{
        enter: 'page-transition-enter',
        enterActive: 'page-transition-enter-active',
        appear: 'page-transition-appear',
        appearActive: 'page-transition-appear-active',
      }}
      className={className}
      transitionEnter
      transitionAppear
      transitionLeave={false}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
    >
      {children}
    </CSSTransitionGroup>),
  []
);

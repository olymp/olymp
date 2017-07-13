import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { createComponent } from 'react-fela';
export default createComponent(function () { return ({
    position: 'relative',
    '> .page-transition-enter': {
        opacity: 0.01,
    },
    '> .page-transition-enter-active': {
        opacity: 1,
        transition: 'opacity 600ms ease-out, transform 100ms ease-out',
    },
    '> .page-transition-appear': {
        opacity: 0.01,
    },
    '> .page-transition-appear-active': {
        opacity: 1,
        transition: 'opacity 600ms ease-out, transform 100ms ease-out',
    },
}); }, function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement(CSSTransitionGroup, { component: "div", transitionName: {
            enter: 'page-transition-enter',
            enterActive: 'page-transition-enter-active',
            appear: 'page-transition-appear',
            appearActive: 'page-transition-appear-active',
        }, className: className, transitionEnter: true, transitionAppear: true, transitionLeave: false, transitionAppearTimeout: 600, transitionEnterTimeout: 600 }, children));
}, []);
//# sourceMappingURL=page-transition.js.map
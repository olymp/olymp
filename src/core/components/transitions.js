import React, { Component, Children, cloneElement } from 'react';
import { createComponent } from 'react-fela';
import { cn } from 'olymp';
import { GatewayRegistry } from 'react-gateway';
import ReactTransitionGroup from 'react-addons-transition-group';

const delay = t => new Promise(yay => setTimeout(yay, t));
const state = (t, args) => new Promise(yay => t.setState(args, yay));
const FirstChild = props => Children.toArray(props.children)[0] || null;

const withTransition = (Transition, { delayLeave } = {}) => {
  class TransitionManager extends Component {
    static contextTypes = {
      gatewayRegistry: React.PropTypes.instanceOf(GatewayRegistry).isRequired
    };
    static defaultProps = {
      speed: 300,
      appear: false,
      enter: true,
      leave: true,
    };
    state = { animation: null };
    delay = () => {
      const { speed } = this.props;
      return delayLeave && Object.keys(this.context.gatewayRegistry._children.modal).find(key => {
        const { isOpen } = this.context.gatewayRegistry._children.modal[key].props;
        return isOpen !== false;
      }) ? (speed * 2) : speed;
    }
    componentWillAppear(callback) {
      const { speed, enter, appear } = this.props;
      if (enter === false || appear === false) return callback();
      state(this, { animation: 'enter', active: false })
        .then(() => delay(1))
        .then(() => state(this, { active: true, delay: this.delay() }))
        .then(() => delay(this.state.delay))
        .then(() => state(this, { animation: null }))
        .then(callback);
    }
    componentWillEnter(callback) {
      const { speed, enter } = this.props;
      if (enter === false) return callback();
      state(this, { animation: 'enter', active: false })
        .then(() => delay(1))
        .then(() => state(this, { active: true, delay: this.delay() }))
        .then(() => delay(this.state.delay))
        .then(() => state(this, { animation: null }))
        .then(callback);
    }
    componentWillLeave(callback) {
      const { speed, leave } = this.props;
      if (leave === false) return callback();
      state(this, { animation: 'leave', active: false })
        .then(() => delay(1))
        .then(() => state(this, { active: true, delay: this.delay() }))
        .then(() => delay(this.state.delay))
        //.then(() => state(this, { animation: null }))
        .then(callback);
    }
    render() {
      const { speed } = this.props;
      const { animation, active, delay } = this.state;
      const type = `${animation}${active ? '-active' : ''}`;
      return <Transition {...this.props} type={type} phase={animation} state={active} delay={this.props.delay === false ? 0 : ((delay || speed) - speed)} />;
    }
  }
  return props => {
    const { isOpen } = props;
    const opened = isOpen === undefined ? true : !!isOpen;
    return (
      <ReactTransitionGroup component={FirstChild}>
        {opened ? <TransitionManager {...props} /> :null}
      </ReactTransitionGroup>
    )
  };
}

export const createTransition = (fn, options) => {
  const Inner = withTransition(
    createComponent(fn, ({ className, children }) => {
      const child = Children.only(children);
      return cloneElement(child, { className: cn(child.props.className, className) });
    }, p => p), options
  );
  const component = (props, { theme }) => {
    if (!theme.transition) {
      const { isOpen } = props;
      const opened = isOpen === undefined ? true : !!isOpen;
      return opened ? Children.only(props.children) : null;
    }
    return <Inner {...props} />
  };
  component.contextTypes = { theme: React.PropTypes.object };
  return component;
}

export const TransitionFade = createTransition(({ type, delay, speed }) => {
  if (type === 'enter') {
    return {
      opacity: 0,
      zIndex: 99999,
    };
  } else if (type === 'enter-active') {
    return {
      opacity: 1,
      zIndex: 99999,
      transition: `opacity ${speed}ms ease-in-out`,
      willChange: 'transform',
    };
  } else if (type === 'leave') {
    return {
      opacity: 1,
      position: 'absolute',
      width: '100%',
      pointerEvents: 'none',
    };
  } else if (type === 'leave-active') {
    return {
      opacity: 0,
      pointerEvents: 'none',
      position: 'absolute',
      width: '100%',
      transition: `opacity ${speed}ms ease-in-out`,
      transitionDelay: `${delay}ms`,
      willChange: 'transform',
    };
  }
}, { delayLeave: true });

export const TransitionSlide = createTransition(({ type, delay, speed }) => {
  if (type === 'enter') {
    return {
      transform: 'translateX(100%)',
      zIndex: 99999,
    };
  } else if (type === 'enter-active') {
    return {
      transform: 'translateX(0%)',
      transition: `transform ${speed}ms ease-in-out, opacity ${speed}ms ease-in-out`,
      willChange: 'transform',
      zIndex: 99999,
    };
  } else if (type === 'leave') {
    return {
      pointerEvents: 'none',
      position: 'absolute',
      width: '100%',
      transform: 'translateX(0%)',
    };
  } else if (type === 'leave-active') {
    return {
      transform: 'translateX(-100%)',
      position: 'absolute',
      width: '100%',
      pointerEvents: 'none',
      transition: `transform ${speed}ms ease-in-out, opacity ${speed}ms ease-in-out`,
      willChange: 'transform',
    };
  }
});

export const Transition = (props, { theme }) => {
  if (!theme.transition) theme.transition = 'fade';
  if (theme.transition === 'fade') return <TransitionFade {...props} speed={theme.transitionSpeed || 250} />;
  if (theme.transition === 'slide') return <TransitionSlide {...props} speed={theme.transitionSpeed || 500} />;
  const { isOpen } = props;
  const opened = isOpen === undefined ? true : !!isOpen;
  return opened ? Children.only(props.children) : null;
};
Transition.contextTypes = { theme: React.PropTypes.object };

export default Transition;

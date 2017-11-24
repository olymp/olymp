import React, { Component, Children } from 'react';
import { createComponent } from 'react-fela';
import Menu from '../menu';

const SlideIn = createComponent(
  ({ isBack }) => ({
    // height: '100%',
    position: 'relative',
    overflow: 'hidden',
    '> :nth-child(1)': {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
    },
    '> :nth-child(2)': {
      position: 'absolute',
      zIndex: 1,
      animationDuration: '200ms',
      animationTimingFunction: 'ease-out',
      animationName: {
        '0%': {
          transform: isBack ? 'translateX(-100%)' : 'translateX(100%)',
        },
        '100%': {
          transform: 'translateX(0)',
        },
      },
    },
  }),
  p => <Menu {...p} />,
  ({ isBack, ...p }) => Object.keys(p),
);

export default class StackedMenu extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.keys !== this.props.keys) {
      this.isBack = newProps.keys.length < this.props.keys.length;
      this.oldKeys = this.props.keys;
    }
  }
  render() {
    const { renderMenu, keys, children } = this.props;
    if (renderMenu) {
      return (
        <SlideIn key={keys} isBack={this.isBack}>
          {this.oldKeys && renderMenu(this.oldKeys)}
          {renderMenu(keys, this.oldKeys)}
        </SlideIn>
      );
    }
    return (
      <SlideIn key={keys} isBack={this.isBack}>
        {children}
      </SlideIn>
    );
  }
}

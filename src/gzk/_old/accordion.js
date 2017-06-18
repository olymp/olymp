import React, { Component, PropTypes, Children } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import './accordion.less';

export class AccordionItem extends Component {
  render() {
    return null;
  }
}

export default class Accordion extends Component {
  static Item = AccordionItem;
  static defaultProps = {
    items: [],
    type: 'div',
  };
  constructor(props) {
    super();
    this.state = { active: props.initialIndex };
  }

  componentWillReceiveProps(props) {
    const { children } = this.props;
    if (Children.count(props.children) > Children.count(this.props.children)) {
      this.state.active = Children.count(props.children) - 1;
    }
  }

  setActive(active) {
    this.setState({
      active: this.state.active === active ? undefined : active,
    });
  }

  remove(e, index) {
    const { children, remove } = this.props;
    remove(index);
  }

  render() {
    const { active } = this.state;
    const {
      children,
      remove,
      className,
      itemClassName,
      style,
      containerClassName,
      tab,
      type,
    } = this.props;

    let content = null;

    const items = Children.toArray(children).map((item, index) => {
      const isActive = index === active;
      const itemChildren = [
        <i
          key={1}
          className={cn(
            'fa pull-right',
            isActive ? 'fa-caret-down' : 'fa-caret-up'
          )}
          style={{ paddingTop: '4px' }}
        />,
        remove
          ? <i
              key={2}
              className="fa fa-trash pull-right"
              style={{ paddingTop: '4px' }}
              onMouseDown={e => this.remove(e, index)}
            />
          : null,
      ];
      const inner = typeof item.props.label === 'function'
        ? item.props.label({
            active: index === active,
            onClick: () => this.setActive(index),
            children: itemChildren,
          })
        : <AccordionItem onClick={() => this.setActive(index)}>
            {itemChildren}
          </AccordionItem>;

      if (tab) {
        if (isActive) content = React.Children.only(item.props.children);
        return inner;
      }
      return (
        <div className={item.props.className} key={index} style={style}>
          {inner}
          {isActive ? React.Children.only(item.props.children) : null}
        </div>
      );
    });

    if (items.length === 0) return null;

    let inner = items;
    if (tab) {
      inner = React.createElement(
        type,
        {
          className,
        },
        [items]
      );
    }

    return (
      <div>
        {inner}
        {content}
      </div>
    );
  }
}

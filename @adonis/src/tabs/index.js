import React, { Component, PropTypes, Children } from 'react';
import ReactDOM from 'react-dom';

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
  }
  constructor(props) {
    super();
    this.state = { active: props.initialIndex || undefined };
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
    const { children, remove, className, itemClassName, style, containerClassName } = this.props;

    const items = Children.toArray(children).map((item, index) => {
      const itemChildren = [
        <i key={1} className="fa fa-caret-up pull-right" style={{ paddingTop: '4px' }} />,
        remove ? <i key={2} className="fa fa-trash pull-right" style={{ paddingTop: '4px' }} onMouseDown={e => this.remove(e, index)} /> : null,
      ];
      const inner = typeof item.props.label === 'function' ? item.props.label({
        onClick: () => this.setActive(index),
        children: itemChildren,
      }) : <AccordionItem onClick={() => this.setActive(index)}>{itemChildren}</AccordionItem>;
      return (
        <div className={item.props.className} key={index} style={style}>
          {inner}
          {index === active ? React.Children.only(item.props.children) : null}
        </div>
      );
    });

    if (items.length === 0) return null;

    return (
      <div className={className}>
        {items}
      </div>
    );
  }
}

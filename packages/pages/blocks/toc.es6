import React, { Component } from 'react';
import createTOC from 'olymp-slate/create-toc';
// import withScroll from 'olymp-fela/scroll-top';
import { withProps, withPropsOnChange } from 'recompose';
import Sticky from 'react-stickynode';
import cn from 'classnames';
import scrollMonitor from 'scrollmonitor';

const onClick = id => e => {
  document.querySelector(`[data-key="${id}"]`).scrollIntoView({
    behavior: 'smooth',
  });
  e.stopPropagation();
};

class Item extends Component {
  state = {};
  componentDidMount(){
    const {item} = this.props;
    const element = document.querySelector(`[data-key="${item.key}"]`);
    const elementWatcher = scrollMonitor.create(element);

    elementWatcher.fullyEnterViewport(() => {
      this.setState({visible: true});
    });
    elementWatcher.partiallyExitViewport(() => {
       this.setState({visible: false});
    });
  }
  render(){
    const { visible } = this.state;
    const { key, text, children = [] } = this.props.item;
    return (
      <a key={key} onClick={onClick(key)}>
        <h5 className={cn('item', visible && 'active')}>
          {text}
        </h5>
        {children.map(({ key, text }) => (
          <a key={key} onClick={onClick(key)}>
            <h6>&nbsp;&nbsp;&nbsp;{text}</h6>
          </a>
        ))}
      </a>
    )
  }
}

@withProps(({ editor, node }) => ({
  value: editor.props.value,
  parentEl: `[data-key="${node.key}"]`,
}))
@withPropsOnChange(['value'], ({ value }) => {
  const toc = createTOC(value);
  return {
    toc
  };
})
class Com extends Component {
  render() {
    const {
      toc,
      attributes,
      children,
      className,
      scrollTop,
    } = this.props;
    console.log(scrollTop);
    return (
      <Sticky enabled top={90}>
        <div
          className={className}
          {...attributes}
          style={{ left: -248, top: 0 }}
        >
          {children}
          {toc.map(item => (
            <Item item={item} key={item.key} />
          ))}
        </div>
      </Sticky>
    );
  }
}

export default {
  label: 'Scroller',
  category: 'Sonstiges',
  type: 'scroller',
  isVoid: true,
  component: Com,
  styles: ({ theme }) => ({
    position: 'fixed',
    '& .item.active': {
      color: 'black',
      transform: 'scale(1.1)',
    },
    '& .item:hover': {
      color: 'black',
    },
    '& .item': {
      color: 'gray',
      transition: 'all 0.5s ease-in-out',
    },
    animationName: {
      from: {
        opacity: 0,
        transform: 'translateX(-60px)',
      },
      to: {
        opacity: 1,
        transform: 'translateX(0px)',
      },
    },
    animationIterationCount: 1,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    animationFillMode: 'both',
  }),
};

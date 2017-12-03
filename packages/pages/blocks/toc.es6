import React, { Component } from 'react';
import createTOC, { getVisible } from 'olymp-slate/create-toc';
// import withScroll from 'olymp-fela/scroll-top';
import { withProps, withPropsOnChange } from 'recompose';

@withProps(({ editor, node }) => ({
  value: editor.props.value,
  parentEl: `[data-key="${node.key}"]`,
}))
@withPropsOnChange(['value'], ({ value }) => ({ toc: createTOC(value) }))
@withPropsOnChange(['scrollTop'], ({ toc }) => ({
  first: getVisible(toc),
}))
class Com extends Component {
  render() {
    const {
      toc,
      attributes,
      children,
      className,
      scrollTop,
      value,
      first,
    } = this.props;
    console.log(value);
    const top = 140 - scrollTop > 0 ? 240 - scrollTop : 102;
    return (
      <div
        className={className}
        {...attributes}
        style={{ transform: `translate(10px, ${top}px)`, top: 0 }}
      >
        {children}
        {toc.map(({ key, text, children = [] }) => (
          <a key={key} onClick={onClick(key)}>
            <h5 style={{ fontWeight: key === first ? 'bold' : null }}>
              {text}
            </h5>
            {children.map(({ key, text }) => (
              <a key={key} onClick={onClick(key)}>
                <h6>&nbsp;&nbsp;&nbsp;{text}</h6>
              </a>
            ))}
          </a>
        ))}
      </div>
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
    '& .active': {
      color: 'black',
    },
  }),
};

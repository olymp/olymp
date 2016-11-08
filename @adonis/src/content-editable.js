import React from 'react';

export default class ContentEditable extends React.Component {
  constructor() {
    super();
    this.emitChange = this.emitChange.bind(this);
  }

  render() {
    return React.createElement(
      this.props.tagName || 'div',
      Object.assign({}, this.props, {
        ref: e => this.htmlEl = e,
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        onKeyDown: e => e.stopPropagation(),
        onKeyUp: e => e.stopPropagation(),
        onKeyPress: e => e.stopPropagation(),
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: {__html: this.props.value}
      }),
      this.props.children);
  }

  shouldComponentUpdate(nextProps) {
    return !this.htmlEl || nextProps.html !== this.htmlEl.innerHTML ||
      this.props.disabled !== nextProps.disabled;
  }

  componentDidUpdate() {
    if ( this.htmlEl && this.props.html !== this.htmlEl.innerHTML ) {
      this.htmlEl.innerHTML = this.props.html;
    }
  }

  emitChange(evt) {
    if (!this.htmlEl) return;
    var html = this.htmlEl.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      evt.target = { value: html };
      this.props.onChange(evt);
    }
    this.lastHtml = html;
  }
}

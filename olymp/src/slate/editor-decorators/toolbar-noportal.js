import React, { Component, Children, PropTypes } from 'react';
import { getVisibleSelectionRect } from '../utils/range';
import { hasBlock, hasMark } from '../utils/has';
import addBlock from '../utils/add-block';

export default (options = {}) => {
  let { defaultNode, toolbarTypes, toolbarMarks } = options;
  if (!defaultNode) defaultNode = 'paragraph';
  if (!toolbarTypes) toolbarTypes = [];
  if (!toolbarMarks) toolbarMarks = [];

  return Editor => class SlateToolbarDecorator extends Component {
    static propTypes = {
      toolbarMarks: PropTypes.array,
      toolbarTypes: PropTypes.array,
      children: PropTypes.node,
      value: PropTypes.object,
      onChange: PropTypes.func,
    }
    static defaultProps = {
      toolbarMarks: [],
      toolbarTypes: [],
      children: [],
    }
    componentDidMount() {
      const menu = this.gwRef;
      const { value } = this.props;
      if (!menu) return;

      if (value.isBlurred || value.isCollapsed) {
        menu.removeAttribute('style');
        return;
      }

      const rect = getVisibleSelectionRect();
      const parentRect = menu.parentNode.parentNode.getBoundingClientRect();
      const top = rect.top - parentRect.top - menu.offsetHeight;
      const left = rect.left - parentRect.left - menu.offsetWidth / 2 + rect.width / 2 - window.scrollX;
      if (!rect) return;
      menu.style.opacity = 1;
      menu.style.top = `${top}px`;
      menu.style.left = `${left}px`;
    }
    componentDidUpdate() {
      this.componentDidMount();
    }
    onClickBlock = (e, props) => {
      const { value, onChange } = this.props;
      e.preventDefault();
      onChange(addBlock(value, props, defaultNode));
    }
    renderBlockButton = (props) => {
      const { value } = this.props;
      const isActive = hasBlock(value, props.type);
      const onMouseDown = e => this.onClickBlock(e, props);

      return (
        <span key={props.type} className="slate-toolbar-item" onMouseDown={onMouseDown} data-active={isActive}>
          <i className={`fa fa-${props.icon}`} />
        </span>
      );
    }
    onClickMark = (e, type) => {
      e.stopPropagation();
      e.preventDefault();
      let { value } = this.props;

      value = value
        .transform()
        .toggleMark(type)
        .apply();

      this.props.onChange(value);
    }
    renderMarkButton = (props) => {
      const { value } = this.props;
      const isActive = hasMark(value, props.type);
      const onMouseDown = e => this.onClickMark(e, props);

      return (
        <span key={props.type} className="slate-toolbar-item" onMouseDown={onMouseDown} data-active={isActive}>
          <i className={`fa fa-${props.icon}`} />
        </span>
      );
    }
    renderMenu = () => {
      const theToolbarMarks = [...toolbarMarks, ...this.props.toolbarMarks];
      const theToolbarTypes = [...toolbarTypes, ...this.props.toolbarTypes];
      return (
        <div className="slate-toolbar slate-text-toolbar" ref={ref => this.gwRef = ref} key="gw-sidebar">
          {theToolbarMarks.map(this.renderMarkButton)}
          {theToolbarTypes.map(this.renderBlockButton)}
        </div>
      );
    }
    render() {
      const children = [
        ...Children.toArray(this.props.children),
        this.renderMenu(),
      ];
      return (
        <Editor {...this.props} children={children} />
      );
    }
  };
};

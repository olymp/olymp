import React, { Component, Children, PropTypes } from 'react';
import { getCollapsedClientRect } from '../utils/range';
import addBlock from '../utils/add-block';
import { hasBlock } from '../utils/has';

export default (options = {}) => {
  let { sidebarTypes, defaultNode } = options;
  if (!defaultNode) defaultNode = 'paragraph';
  if (!sidebarTypes) sidebarTypes = [];

  return Editor => class SlateSidebarDecorator extends Component {
    static propTypes = {
      sidebarTypes: PropTypes.array,
      children: PropTypes.node,
      value: PropTypes.object,
      onChange: PropTypes.func,
    }
    static defaultProps = {
      sidebarTypes: [],
      children: [],
    }
    componentDidMount() {
      const sideBarMenu = this.gwRef;
      const { value } = this.props;
      if (!sideBarMenu) return;

      if (value.isBlurred || !value.isCollapsed) {
        sideBarMenu.removeAttribute('style');
        return;
      }

      const rect = getCollapsedClientRect();
      if (!rect) {
        sideBarMenu.style.opacity = 0;
        sideBarMenu.style.top = '-10000px';
        sideBarMenu.style.left = '-10000px';
        return;
      }
      const parentRect = sideBarMenu.parentNode.parentNode.getBoundingClientRect();
      const top = rect.top - parentRect.top - sideBarMenu.offsetHeight / 2 + rect.height / 2;
      const left = rect.left - parentRect.left - sideBarMenu.offsetWidth;

      sideBarMenu.style.opacity = 1;
      //const top = rect.top + window.scrollY - sideBarMenu.offsetHeight / 2 + rect.height / 2; // eslint-disable-line
      //const left = (rect.left + window.scrollX) - sideBarMenu.offsetWidth;
      sideBarMenu.style.top = `${top}px`;
      sideBarMenu.style.left = `${left}px`;
    }
    componentDidUpdate() {
      this.componentDidMount();
    }
    onClickBlock = (e, props) => {
      const { value, onChange } = this.props;
      e.preventDefault();
      onChange(addBlock(value, props, { defaultNode, ...this.props }));
    }
    renderButton = props => {
      const { value } = this.props;
      const isActive = hasBlock(value, props.type);
      const onMouseDown = e => this.onClickBlock(e, props);

      return (
        <div onMouseDown={onMouseDown} data-active={isActive} key={props.type} className="slate-sidebar-item">
          {props.icon ? <i className={`fa fa-${props.icon}`} /> : null}{props.icon ? ' ' : null}{props.label || props.type}
        </div>
      );
    }
    renderSidebar = () => {
      const theSidebarTypes = [...sidebarTypes, ...this.props.sidebarTypes];
      return (
        <div className="slate-sidebar" ref={ref => this.gwRef = ref} key="gw-sidebar">
          <i className="fa fa-plus slate-sidebar-icon" />
          <div className="slate-sidebar-menu">
            {theSidebarTypes.map(this.renderButton)}
          </div>
        </div>
      );
    }
    render() {
      const children = [
        ...Children.toArray(this.props.children),
        this.renderSidebar(),
      ];
      return (
        <Editor {...this.props} children={children} />
      );
    }
  };
};

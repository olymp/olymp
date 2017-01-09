import React, { Component, Children, PropTypes } from 'react';
import { sortBy } from 'lodash';
import { Dropdown, Menu, Icon } from 'antd';
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
        <Menu.Item key={props.type} style={{ minWidth: '150px' }}>
          <a href="javascript:;" onMouseDown={onMouseDown} data-active={isActive} style={{ display: 'block' }}>
            {props.icon ? <i className={`fa fa-${props.icon}`} /> : null}{props.icon ? ' ' : null}{props.label || props.type}
          </a>
        </Menu.Item>
      );
    }

    renderSidebar = () => {
      const theSidebarTypes = [...sidebarTypes, ...this.props.sidebarTypes];
      const categories = {};
      const menuItems = [];

      sortBy(theSidebarTypes, ['category', 'label']).forEach((x) => {
        if (x.category) {
          if (!categories[x.category]) categories[x.category] = [];
          categories[x.category].push(this.renderButton(x));
        } else {
          menuItems.push(this.renderButton(x));
        }
      });

      const menu = (
        <Menu>
          {Object.keys(categories).map(key => (
            <Menu.SubMenu title={key} key={key}>
              {categories[key].map(x => x)}
            </Menu.SubMenu>
          ))}
          <Menu.Divider />
          {menuItems.map(x => x)}
        </Menu>
      );

      return (
        <div className="slate-sidebar" ref={ref => this.gwRef = ref} key="gw-sidebar">
          <Dropdown overlay={menu}>
            <Icon type="plus" className="slate-sidebar-icon" />
          </Dropdown>
        </div>
      );
    }

    render() {
      const children = this.props.readOnly ? this.props.children : [
        ...Children.toArray(this.props.children),
        this.renderSidebar(),
      ];
      return (
        <Editor {...this.props}>
          {children}
        </Editor>
      );
    }
  };
};

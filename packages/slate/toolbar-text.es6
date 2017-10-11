import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import Toolbar, { Button } from './toolbar';
import hasMark from './utils/has-mark';
import hasBlock from './utils/has-block';

export default class ToolbarText extends Component {
  onClickBlock = (e, props) => {
    const { state, onChange } = this.props;
    e.preventDefault();
    onChange(state.change().setBlock(props.type));
  };
  renderBlockButton = props => this.renderOptionButton(props, hasBlock, this.onClickBlock);
  onClickMark = (e, type) => {
    e.stopPropagation();
    e.preventDefault();
    const { state, onChange } = this.props;
    onChange(state.change().toggleMark(type));
  };
  renderMarkButton = props => this.renderOptionButton(props, hasMark, this.onClickMark);
  renderActionButton = (props) => {
    const isActive = props.isActive ? props.isActive(this.props) : false;
    const isActiveFn = () => isActive;
    const fn = e => props.onClick(this.props, isActive, e);

    return this.renderOptionButton(props, isActiveFn, fn);
  };
  renderOptionButton = (props, isActiveFn, onMouseDownFn, label) => {
    const { state } = this.props;
    const { type } = props;
    const isActive = isActiveFn(state, type);
    const onMouseDown = e => onMouseDownFn(e, props);

    const icon = label || props.label || <Icon type={props.icon} />;
    if (type && Array.isArray(type)) {
      return (
        <Menu.SubMenu key={type.join('-')} title={<Button>{icon}</Button>}>
          {type.map((subType, index) => {
            const subLabel =
              props.description && props.description[index]
                ? props.description[index]
                : label || subType;

            return this.renderOptionButton(
              { ...props, type: subType },
              isActiveFn,
              Array.isArray(onMouseDownFn) ? onMouseDownFn[index] : onMouseDownFn,
              subLabel,
            );
          })}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={type} className={isActive && 'ant-menu-item-selected'}>
        <Button onMouseDown={onMouseDown}>{icon}</Button>
      </Menu.Item>
    );
  };
  onOpen = ({ firstChild: menu }) => {
    this.setState({ menu });
  };
  render() {
    const { state, toolbarMarks, toolbarTypes, toolbarActions, show } = this.props;
    const display = !state.isBlurred && !state.isCollapsed;

    let node = null;
    if (state.blocks.size) {
      node = state.blocks.get(0);
    } else if (state.inlines.size) {
      node = state.inlines.get(0);
    }

    if (!node) {
      return null;
    }

    return (
      <Toolbar isOpened={!!display} show={show} parent={`[data-key="${node.key}"]`}>
        {toolbarMarks.map(this.renderMarkButton)}
        {toolbarTypes.map(this.renderBlockButton)}
        {toolbarActions.map(this.renderActionButton)}
      </Toolbar>
    );
  }
}

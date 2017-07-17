import React, { Component } from 'react';
import Toolbar, { Button } from './toolbar';
import { Icon, Menu } from 'antd';
import { hasMark, hasBlock } from './utils/has';
import addBlock from './utils/add-block';

export default class ToolbarText extends Component {
  onClickBlock = (e, props) => {
    const { state, onChange, defaultNode } = this.props;
    e.preventDefault();
    onChange(addBlock(state, props, defaultNode));
  };
  renderBlockButton = props =>
    this.renderOptionButton(props, hasBlock, this.onClickBlock);
  onClickMark = (e, type) => {
    e.stopPropagation();
    e.preventDefault();
    const { state, onChange } = this.props;
    onChange(state.transform().toggleMark(type).apply());
  };
  renderMarkButton = props =>
    this.renderOptionButton(props, hasMark, this.onClickMark);
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
        <Menu.SubMenu
          key={type.join('-')}
          title={
            <Button>
              {icon}
            </Button>
          }
        >
          {type.map((subType, index) => {
            const subLabel =
              props.description && props.description[index]
                ? props.description[index]
                : label || subType;

            return this.renderOptionButton(
              { ...props, type: subType },
              isActiveFn,
              Array.isArray(onMouseDownFn)
                ? onMouseDownFn[index]
                : onMouseDownFn,
              subLabel
            );
          })}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={type} className={isActive && 'ant-menu-item-selected'}>
        <Button onMouseDown={onMouseDown}>
          {icon}
        </Button>
      </Menu.Item>
    );
  };
  onOpen = ({ firstChild: menu }) => {
    this.setState({ menu });
  };
  render() {
    const { state, toolbarMarks, toolbarTypes, toolbarActions, show } = this.props;
    const display = !state.isBlurred && !state.isCollapsed;

    return (
      <Toolbar isOpened={!!display} show={show}>
        {toolbarMarks.map(this.renderMarkButton)}
        {toolbarTypes.map(this.renderBlockButton)}
        {toolbarActions.map(this.renderActionButton)}
      </Toolbar>
    );
  }
}


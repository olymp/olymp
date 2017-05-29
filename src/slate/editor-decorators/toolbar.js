import React, { Component, Children, PropTypes } from 'react';
import Portal from 'react-portal';
import { Menu, Icon } from 'antd';
import { getVisibleSelectionRect } from '../utils/range';
import { hasBlock, hasMark } from '../utils/has';
import addBlock from '../utils/add-block';

export default (options = {}) => {
  let { defaultNode, toolbarTypes, toolbarMarks, toolbarActions } = options;
  if (!defaultNode) defaultNode = 'paragraph';
  if (!toolbarActions) toolbarActions = [];
  if (!toolbarTypes) toolbarTypes = [];
  if (!toolbarMarks) toolbarMarks = [];

  return Editor => class SlateToolbarDecorator extends Component {
    static propTypes = {
      toolbarMarks: PropTypes.array,
      toolbarTypes: PropTypes.array,
      toolbarActions: PropTypes.array,
      children: PropTypes.node,
      value: PropTypes.object,
      onChange: PropTypes.func,
    }
    static defaultProps = {
      toolbarMarks: [],
      toolbarTypes: [],
      toolbarActions: [],
      children: [],
    }
    state = { menu: null };
    componentDidMount() {
      const { menu } = this.state;
      const { value } = this.props;
      if (!menu) return;

      if (value.isBlurred || value.isCollapsed) {
        menu.removeAttribute('style');
        return;
      }

      const rect = getVisibleSelectionRect();
      if (!rect) return;
      const height = 45; // menu.offsetHeight
      const width = 402; // menu.offsetWidth
      const top = (rect.top + window.scrollY) - height;
      const left = rect.left + window.scrollX - width / 2 + rect.width / 2; // eslint-disable-line

      menu.style.display = 'block';
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
      return this.renderOptionButton(props, hasBlock, this.onClickBlock);
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
      return this.renderOptionButton(props, hasMark, this.onClickMark);
    }
    renderActionButton = (props) => {
      const isActive = props.isActive ? props.isActive(this.props) : false;
      const isActiveFn = () => isActive;
      const fn = e => props.onClick(this.props, isActive, e);

      return this.renderOptionButton(props, isActiveFn, fn);
    }
    renderOptionButton = (props, isActiveFn, onMouseDownFn, label) => {
      const { value } = this.props;
      const { type } = props;
      const isActive = isActiveFn(value, type);
      const onMouseDown = e => onMouseDownFn(e, props);

      if (type && Array.isArray(type)) {
        return (
          <Menu.SubMenu key={type.join('-')} title={<Icon type={props.icon} />}>
            {type.map((subType, index) => {
              const subLabel = props.description && props.description[index] ?
                props.description[index] :
                  label || subType;

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
        <Menu.Item key={type} className={isActive ? 'active' : ''} data-active={isActive}>
          <div style={{ margin: '0 -20px', padding: '0 20px', textAlign: 'center' }} onMouseDown={onMouseDown}>
            {label || <Icon type={props.icon} />}
          </div>
        </Menu.Item>
      );
    };
    onOpen = ({ firstChild: menu }) => {
      this.setState({ menu });
    }
    renderMenu = () => {
      const theToolbarMarks = [...toolbarMarks, ...this.props.toolbarMarks];
      const theToolbarTypes = [...toolbarTypes, ...this.props.toolbarTypes];
      const theToolbarActions = [...toolbarActions, ...this.props.toolbarActions];

      return (
        <Portal isOpened onOpen={this.onOpen} key="toolbar-0">
          <Menu
            mode="horizontal"
            theme="dark"
            className="slate-toolbar slate-text-toolbar"
          >
            {theToolbarMarks.map(this.renderMarkButton)}
            {theToolbarTypes.map(this.renderBlockButton)}
            {theToolbarActions.map(this.renderActionButton)}
          </Menu>
        </Portal>
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

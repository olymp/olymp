import React, { Component, PropTypes } from 'react';
import Portal from 'react-portal';
import ReactDOM from 'react-dom';
import { Raw } from 'slate';
import { Dropdown, Menu, Button, Icon, Modal, Table } from 'antd';
import { sortBy } from 'lodash';
import classNames from 'classnames';
import capitalize from 'capitalize';

export default (options = {}) => Block => {
  let { actions, manual, remove, move, type, add } = options;
  if (!actions) actions = () => [];
  return class BlockToolbarDecorator extends Component {
    static slate = Block.slate;
    static propTypes = {
      isFocused: PropTypes.bool,
      children: PropTypes.node,
      actions: PropTypes.array,
    }
    static defaultProps = {
      actions: [],
    }

    state = { menu: null, modal: {} };

    componentDidMount() {
      if (manual) return;
      const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
      this.setToolbarPosition(rect);
    }

    componentDidUpdate() {
      this.componentDidMount();
    }

    setToolbarPosition = (rect) => {
      const { menu } = this.state;
      if (!menu) return;
      if (!rect) return;
      const top = (rect.top + window.scrollY) - menu.offsetHeight;
      const left = rect.left + window.scrollX - menu.offsetWidth / 2 + rect.width / 2; // eslint-disable-line
      menu.style.opacity = 1;
      menu.style.top = `${top - 3}px`;
      menu.style.left = `${left}px`;
    }

    onOpen = ({ firstChild: menu }) => {
      this.setState({ menu });
    }

    onClick = action => e => {
      e.preventDefault();
      action();
    }

    renderAction = (props) => {
      const { toggle, type, active, icon, separated, options, right, multi, showModal } = props;
      const { modal } = this.state;

      if (options && options.length < 10 && !multi && !showModal) {
        const menu = (
          <Menu onClick={toggle}>
            {options.map(({ value, label, active }) => active ? (
              <Menu.Item key={value} style={{ fontWeight: 'bold' }}><Icon type="check" /> {label}</Menu.Item>
            ) : (
              <Menu.Item key={value}>{label}</Menu.Item>
            )
            )}
          </Menu>
        );

        return (
          <Dropdown overlay={menu} key={type}>
            <Button key={type} type="ghost" size="small" className={classNames('slate-toolbar-button', { separated, right })} data-active={active}>
              <i className={`fa fa-${icon}`} /> <i className="fa fa-caret-down" />
            </Button>
          </Dropdown>
        );
      } else if (options) {
        let attributes;
        const selectedRowKeys = [];
        const data = options.map(({ value, label, active, ...rest }) => {
          attributes = rest;

          if (active) {
            selectedRowKeys.push(value);
          }

          return {
            key: value,
            name: label,
            ...rest
          };
        });
        delete attributes.disabled;
        const columns = Object.keys(attributes).map(key => ({
          title: capitalize(key),
          dataIndex: key,
        }));
        const rowSelection = multi ? {
          type: 'select',
          selectedRowKeys,
          onChange: (selectedRowKeys, selectedRows) => toggle(selectedRows),
        } : {
          type: 'radio',
          selectedRowKeys,
          onChange: (selectedRowKeys, selectedRows) => toggle(selectedRows[0]),
        };
        rowSelection.getCheckboxProps = record => ({
          disabled: record.disabled,
        });

        return (
          <div key={type}>
            <Button key={type} type="ghost" size="small" className={classNames('slate-toolbar-button', { separated, right })} onClick={() => this.setState({ modal: { ...modal, [type]: true } })} data-active={active}>
              <i className={`fa fa-${icon}`} />
            </Button>

            <Modal
              title="Bitte wählen"
              visible={modal[type]}
              onOk={() => this.setState({ modal: { ...modal, [type]: false } })}
              onCancel={() => this.setState({ modal: { ...modal, [type]: false } })}
            >
              <Table
                dataSource={data}
                columns={[{
                  title: 'Name',
                  dataIndex: 'name',
                },
                  ...columns,
                ]}
                rowSelection={rowSelection}
                size="middle"
                pagination={false}
              />
            </Modal>
          </div>
        );
      }

      return (
        <Button key={type} type="ghost" size="small" className={classNames('slate-toolbar-button', { separated, right })} onMouseDown={this.onClick(toggle)} data-active={active}>
          <i className={`fa fa-${icon}`} />
        </Button>
      );
    }

    onChangeType = ({ key }) => {
      const { editor, readOnly, node, state } = this.props;
      const blockTypes = editor.props.sidebarTypes || [];
      const newBlock = (blockTypes.find(({ type }) => type === key) || node);
      editor.onChange(
        state
          .transform()
          .setNodeByKey(node.key, { type: newBlock.type, isVoid: newBlock.isVoid })
          .apply()
      );
    }

    renderToolbar = (styles = {}) => {
      const { editor, readOnly, node } = this.props;
      if (readOnly) return null;
      // Get actions from props and from decorator arguments
      const allActions = [...this.props.actions, ...actions(this.props)];
      // Add remove action if (remove = true)
      if (remove) allActions.push(removeAction(this.props));
      if (add) allActions.push(addAction(this.props));
      // Add move up/down actions if (move = true)

      if (type === 'fix') {
        const blockTypes = editor.props.sidebarTypes || [];
        const block = blockTypes.find(({ type }) => type === node.type) || node;
        const categories = {};
        const menuItems = [];

        sortBy(blockTypes, ['category', 'label']).forEach(({ type, label, category }) => {
          const element = <Menu.Item key={type}>{label || type}</Menu.Item>;

          if (category) {
            if (!categories[category]) categories[category] = [];
            categories[category].push(element);
          } else {
            menuItems.push(element);
          }
        });

        const menu = (
          <Menu onClick={this.onChangeType}>
            {Object.keys(categories).map(key => (
              <Menu.SubMenu title={key} key={key}>
                {categories[key].map(item => item)}
              </Menu.SubMenu>
            ))}
            {menuItems.map(item => item)}
          </Menu>
        );
        return (
          <div className="slate-fix-toolbar" style={styles} contentEditable={false}>
            {move && moveActions(this.props).map(this.renderAction)}
            <Dropdown overlay={menu}>
              <Button type="ghost" size="small" className="slate-toolbar-type">
                {block.label || block.type} <i className="fa fa-caret-down" />
              </Button>
            </Dropdown>
            {allActions.map(this.renderAction)}
            {/* <span className="slate-toolbar-type">
              {this.props.node.type}
            </span> */}
            <div style={{ clear: 'both' }} />
          </div>
        );
      }
      return (
        <Portal onOpen={this.onOpen} isOpened={!!allActions.length} key="toolbar-0">
          <div className="slate-toolbar" style={styles}>
            {allActions.map(({ toggle, type, active, icon, separated }) => (
              <span key={type} className={classNames('slate-toolbar-item', { separated })} onMouseDown={this.onClick(toggle)} data-active={active}>
                <i className={`fa fa-${icon}`} />
              </span>
            ))}
          </div>
        </Portal>
      );
    }
    render() {
      const { isFocused } = this.props;
      const children = isFocused && type !== 'fix'
        ? [...this.props.children, this.renderToolbar()]
        : this.props.children;

      return (
        <Block
          {...this.props}
          children={children}
          renderToolbar={this.renderToolbar}
          toolbarType={type}
          setToolbarPosition={this.setToolbarPosition}
        />
      );
    }
  };
};

const addAction = ({ editor, state, node }) => {
  const prev = state.document.getPreviousSibling(node.key);
  const next = state.document.getNextSibling(node.key);
  const first = node.nodes.first();
  const last = node.nodes.last();
  const options = [];
  if (!prev || prev.type !== 'paragraph') options.push({ label: 'Neuer Paragraph darüber', value: '+<<' });
  else options.push({ label: 'Paragraph darüber löschen', value: '-<<' });

  if (!node.isVoid) {
    if (!first || first.type !== 'paragraph') options.push({ label: 'An Anfang', value: '+<' });
    else options.push({ label: 'Anfang löschen', value: '-<' });
    if (!last || last.type !== 'paragraph') options.push({ label: 'Ans Ende', value: '+>' });
    else options.push({ label: 'Ende löschen', value: '->' });
  }

  if (!next || next.type !== 'paragraph') options.push({ label: 'Neuer Paragraph darunter', value: '+>>' });
  else options.push({ label: 'Paragraph darunter löschen', value: '->>' });
  return {
    type: 'block.add',
    icon: 'paragraph',
    right: true,
    separated: true,
    options,
    toggle: ({ key }) => {
      const p = Raw.deserializeNode({ kind: 'block', type: 'paragraph', nodes: [{ kind: 'text', text: '', ranges: [] }] });
      if (key === '+<<') {
        const parent = state.document.getParent(node.key) || node;
        editor.onChange(
          state.transform()
            .insertNodeByKey(parent.key, parent.nodes.indexOf(node), p)
            .apply()
        );
      } else if (key === '-<<') {
        editor.onChange(
          state.transform()
            .removeNodeByKey(prev.key)
            .apply()
        );
      } else if (key === '+>>') {
        const parent = state.document.getParent(node.key) || node;
        editor.onChange(
          state.transform()
            .insertNodeByKey(parent.key, parent.nodes.indexOf(node) + 1, p)
            .apply()
        );
      } else if (key === '->>') {
        editor.onChange(
          state.transform()
            .removeNodeByKey(next.key)
            .apply()
        );
      } else if (key === '+<') {
        editor.onChange(
          state.transform()
            .insertNodeByKey(node.key, 0, p)
            .apply()
        );
      } else if (key === '-<') {
        editor.onChange(
          state.transform()
            .removeNodeByKey(first.key)
            .apply()
        );
      } else if (key === '+>') {
        editor.onChange(
          state.transform()
            .insertNodeByKey(node.key, node.nodes.size, p)
            .apply()
        );
      } else if (key === '->') {
        editor.onChange(
          state.transform()
            .removeNodeByKey(last.key)
            .apply()
        );
      }
    },
  };
};
// Toolbar action to remove a block
const removeAction = ({ editor, state, node }) => ({
  type: 'block.remove',
  icon: 'trash-o',
  right: true,
  separated: true,
  toggle: () => {
    let newState = state.transform().unsetSelection();
    editor.onChange(
      newState.removeNodeByKey(node.key).apply()
    );
  },
});

// Toolbar actions to move a block up/down
const moveActions = ({ editor, state, node }) => ([{
  type: 'block.moveUp',
  icon: 'arrow-up',
  right: true,
  separated: true,
  toggle: () => {
    const { document } = state;
    const parent = document.getParent(node.key);
    const index = parent.nodes.indexOf(node) - 1;
    let newState = state
      .transform()
      .moveNodeByKey(node.key, parent.key, index === -1 ? 0 : index)
      .apply();
    editor.onChange(newState);
  },
}, {
  type: 'block.moveDown',
  icon: 'arrow-down',
  right: true,
  toggle: () => {
    const { document } = state;
    const parent = document.getParent(node.key);
    const index = parent.nodes.indexOf(node) + 1;
    let newState = state
      .transform()
      .moveNodeByKey(node.key, parent.key, index > parent.nodes.count() ? parent.nodes.count() : index)
      .apply();
    editor.onChange(newState);
  },
}]);

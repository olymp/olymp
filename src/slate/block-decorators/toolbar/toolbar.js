import React, { Component } from 'react';
import { Dropdown, Menu, Button, Tooltip } from 'antd';
import { Raw } from 'slate';
import sortBy from 'lodash/sortBy';
import Action from './action';

const addAction = ({ editor, state, node }) => {
  const prev = state.document.getPreviousSibling(node.key);
  const next = state.document.getNextSibling(node.key);
  const first = node.nodes.first();
  const last = node.nodes.last();

  const options = [];
  if (!prev || prev.type !== 'paragraph')
    options.push({ label: 'Neuer Paragraph darüber', value: '+<<' });
  else options.push({ label: 'Paragraph darüber löschen', value: '-<<' });

  if (!node.isVoid) {
    if (!first || first.type !== 'paragraph')
      options.push({ label: 'An Anfang', value: '+<' });
    else options.push({ label: 'Anfang löschen', value: '-<' });
    if (!last || last.type !== 'paragraph')
      options.push({ label: 'Ans Ende', value: '+>' });
    else options.push({ label: 'Ende löschen', value: '->' });
  }

  if (!next || next.type !== 'paragraph')
    options.push({ label: 'Neuer Paragraph darunter', value: '+>>' });
  else options.push({ label: 'Paragraph darunter löschen', value: '->>' });

  return {
    type: 'block.add',
    icon: 'paragraph',
    right: true,
    separated: true,
    options,
    tooltip: 'Absätze um Block hinzufügen/entfernen',
    toggle: ({ key }) => {
      const p = Raw.deserializeNode({
        kind: 'block',
        type: 'paragraph',
        nodes: [{ kind: 'text', text: '', ranges: [] }],
      });
      if (key === '+<<') {
        const parent = state.document.getParent(node.key) || node;
        editor.onChange(
          state
            .transform()
            .insertNodeByKey(parent.key, parent.nodes.indexOf(node), p)
            .apply()
        );
      } else if (key === '-<<') {
        editor.onChange(
          state
            .transform()
            .removeNodeByKey(prev.key)
            .apply()
        );
      } else if (key === '+>>') {
        const parent = state.document.getParent(node.key) || node;
        editor.onChange(
          state
            .transform()
            .insertNodeByKey(parent.key, parent.nodes.indexOf(node) + 1, p)
            .apply()
        );
      } else if (key === '->>') {
        editor.onChange(
          state
            .transform()
            .removeNodeByKey(next.key)
            .apply()
        );
      } else if (key === '+<') {
        editor.onChange(
          state
            .transform()
            .insertNodeByKey(node.key, 0, p)
            .apply()
        );
      } else if (key === '-<') {
        editor.onChange(
          state
            .transform()
            .removeNodeByKey(first.key)
            .apply()
        );
      } else if (key === '+>') {
        editor.onChange(
          state
            .transform()
            .insertNodeByKey(node.key, node.nodes.size, p)
            .apply()
        );
      } else if (key === '->') {
        editor.onChange(
          state
            .transform()
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
  icon: 'trash-alt',
  right: true,
  separated: true,
  tooltip: 'Block löschen',
  toggle: () => {
    const newState = state.transform().unsetSelection();

    editor.onChange(newState.removeNodeByKey(node.key).apply());
  },
});

// Toolbar actions to move a block up/down
const moveActions = ({ editor, state, node }) => [
  {
    type: 'block.moveUp',
    icon: 'arrow-up',
    right: true,
    separated: true,
    tooltip: 'Block um eine Stelle nach oben verschieben',
    toggle: () => {
      const { document } = state;
      const parent = document.getParent(node.key);
      const index = parent.nodes.indexOf(node) - 1;
      const newState = state
        .transform()
        .moveNodeByKey(node.key, parent.key, index === -1 ? 0 : index)
        .apply();
      editor.onChange(newState);
    },
  },
  {
    type: 'block.moveDown',
    icon: 'arrow-down',
    right: true,
    tooltip: 'Block um eine Stelle nach unten verschieben',
    toggle: () => {
      const { document } = state;
      const parent = document.getParent(node.key);
      const index = parent.nodes.indexOf(node) + 1;
      const newState = state
        .transform()
        .moveNodeByKey(
          node.key,
          parent.key,
          index > parent.nodes.count() ? parent.nodes.count() : index
        )
        .apply();
      editor.onChange(newState);
    },
  },
];

export default class Toolbar extends Component {
  onChangeType = ({ key }) => {
    const { editor, readOnly, node, state } = this.props;
    const blockTypes = editor.props.sidebarTypes || [];
    const newBlock = blockTypes.find(({ type }) => type === key) || node;
    editor.onChange(
      state
        .transform()
        .setNodeByKey(node.key, {
          type: newBlock.type,
          isVoid: newBlock.isVoid,
        })
        .apply()
    );
  };

  render() {
    const { editor, node, readOnly, style, remove, add, move } = this.props;
    const actions = [...this.props.actions];

    if (readOnly) return null;

    // Add remove action if (remove = true)
    if (remove) actions.push(removeAction(this.props));
    if (add) actions.push(addAction(this.props));

    const blockTypes = editor.props.sidebarTypes || [];
    const block = blockTypes.find(({ type }) => type === node.type) || node;
    const categories = {};
    const menuItems = [];

    sortBy(blockTypes, ['category', 'label']).forEach(
      ({ type, label, category }) => {
        const element = <Menu.Item key={type}>{label || type}</Menu.Item>;

        if (category) {
          if (!categories[category]) categories[category] = [];
          categories[category].push(element);
        } else {
          menuItems.push(element);
        }
      }
    );

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
      <div className="slate-fix-toolbar" style={style} contentEditable={false}>
        {move &&
          moveActions(this.props).map((action, index) => (
            <Action {...action} key={index} />
          ))}

        <Tooltip placement="top" overlay={<span>Typ des Blockes ändern</span>}>
          <Dropdown overlay={menu}>
            <Button type="ghost" size="small" className="slate-toolbar-type">
              {block.label || block.type} <i className="fa fa-caret-down" />
            </Button>
          </Dropdown>
        </Tooltip>

        {actions.map((action, index) => <Action {...action} key={index} />)}

        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}

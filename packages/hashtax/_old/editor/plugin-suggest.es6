import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Select } from 'antd';
import Raw from 'slate/lib/serializers/raw';

import position from './utils/caret-position';
import typeOf from 'type-of';
import GroupBy from 'lodash/groupBy';
import shortID from 'shortid';

const createP = () =>
  Raw.deserializeNode({
    kind: 'block',
    type: 'paragraph',
    nodes: [{ kind: 'text', text: '', ranges: [] }],
  });
export default ({ fetch, trigger, onInsert, renderItems, renderItem, groupBy }) => {
  if (!trigger) {
    trigger = '@';
  }
  if (!fetch) {
    fetch = value => [];
  }
  if (!renderItem) {
    renderItem = item => <Select.Option key={item.key}>{item.key}</Select.Option>;
  }
  class suggest extends Component {
    state = {
      data: [],
      value: '',
    };
    handleKeyDown = (e) => {
      const { state, editor, node } = this.props;
      const isBackspaceAndEmpty = e.keyCode === 8 && !this.state.value;
      const isEsc = e.keyCode === 27;
      const isUndo = e.ctrlKey && e.keyCode == 90;
      const isUndoMac = e.metaKey && e.keyCode == 90;
      if (isBackspaceAndEmpty || isEsc || isUndo || isUndoMac) {
        editor.props.onChange(state.transform().removeNodeByKey(node.key));
        e.stopPropagation();
        e.preventDefault();
      }
    };
    handleSelect = (value, v2) => {
      const { state, editor, node } = this.props;
      const item = this.state.data.find(x => x.key === value);
      const key = item.value || item.key;
      if (onInsert && item) {
        editor.props.onChange(
          state
            .transform()
            .removeNodeByKey(node.key)
            .call(onInsert, { ...this.props, item }),
        );
      } else if (item.type) {
        const fn = item.kind === 'inline' ? 'insertInline' : 'insertBlock';
        const transform = state.transform().removeNodeByKey(node.key);
        if (item.isVoid) {
          transform[fn]({
            isVoid: true,
            type: item.type,
            data: { key, id: shortID.generate() },
          }).collapseToStartOfNextText();
        } else if (item.kind === 'inline') {
          transform
            .insertText(key)
            .extend(0 - key.length)
            .wrapInline({ type: item.type, data: { key, id: shortID.generate() } })
            .collapseToStartOfNextText();
        } else {
          transform
            .insertText('\n')
            .move(-1)
            [fn]({
              isVoid: false,
              type: item.type,
              nodes: [createP()],
              data: { key, id: shortID.generate() },
            });
        }
        editor.props.onChange(transform.focus());
      } else if (item) {
        editor.props.onChange(
          state
            .transform()
            .removeNodeByKey(node.key)
            .insertText(key)
            .collapseToStartOfNextText()
            .focus(),
        );
      }
    };
    handleChange = (value) => {
      const data = fetch(value);
      if (!data || !data.then) {
        this.setState({ value, data });
      } else {
        this.setState({ value });
        data.then((data) => {
          this.setState({ data });
        });
      }
    };
    componentDidMount() {
      const input = ReactDOM.findDOMNode(this.refs.select).getElementsByTagName('input')[0];
      input.focus();
      input.addEventListener('keydown', this.handleKeyDown, false);
    }
    render() {
      const { node, mark, attributes } = this.props;
      const { data } = this.state;
      let children;
      if (renderItems) {
        children = renderItems(data);
      } else if (groupBy) {
        const groups = GroupBy(data, groupBy);
        children = Object.keys(groups).map(key => (
          <Select.OptGroup key={key} label={key}>
            {groups[key].map(renderItem)}
          </Select.OptGroup>
        ));
      } else {
        children = data.map(renderItem);
      }

      return (
        <span>
          <Select
            {...attributes}
            combobox
            showArrow
            dropdownMatchSelectWidth={false}
            defaultActiveFirstOption
            value={this.state.value}
            placeholder="Suche ..."
            notFoundContent=""
            filterOption={false}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            ref="select"
            style={{ minWidth: 180, width: 11 * this.state.value.length }}
          >
            {children}
          </Select>
        </span>
      );
    }
  }
  return {
    onBeforeInput(e, data, state, editor) {
      if (e.data !== trigger) {
        return;
      }
      e.preventDefault();
      return state.transform().insertInline({ type: 'suggest', isVoid: true });
    },
    schema: {
      nodes: {
        suggest,
      },
    },
  };
};

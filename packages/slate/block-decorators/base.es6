import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import { Dropdown, Menu } from 'antd';
import { FaCog, FaChevronDown, FaChevronUp } from 'olymp-icons';
import Toolbar, { Button } from '../toolbar';
// import dnd from './dnd';

const Action = ({ node, state, onChange, blockTypes }) => (
  { toggle, active, label, component, ...rest },
  i,
) => {
  const setData = (data) => {
    const transform = state
      .change()
      .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } });
    onChange(transform);
    return Promise.resolve();
  };

  const getData = (name, defaultValue) => node.data.get(name) || defaultValue;

  const tooltip = typeof rest.tooltip === 'function' ? rest.tooltip(getData) : rest.tooltip;

  const onClick = (e) => {
    e.preventDefault();
    if (toggle) {
      toggle({ setData, getData, state, onChange, blockTypes, node });
    }
  };

  if (component) {
    const Com = component;
    return (
      <Menu.Item key={i}>
        <Button onMouseDown={onClick} tooltip={tooltip}>
          <Com setData={setData} getData={getData} state={state} onChange={onChange} node={node} />
        </Button>
      </Menu.Item>
    );
  }
  return (
    <Menu.Item key={i}>
      <Button
        active={!!active && active({ getData, state })}
        onMouseDown={onClick}
        tooltip={tooltip}
      >
        {label}
      </Button>
    </Menu.Item>
  );
};

export default options => (Block) => {
  const StyledBlock = createComponent(
    ({ isSelected }) => ({
      outline: isSelected && options.category && '2px solid rgba(48, 48, 48, 0.67)',
    }),
    p => <Block {...p} />,
    p => Object.keys(p),
  );

  // @dnd
  class BaseDecorator extends Component {
    static slate = options;

    getActions = () => {
      const actions = [...(options.actions || [])];
      const { editor, node } = this.props;
      const state = editor.getState();
      if (options.category) {
        actions.push({
          component: ({ onChange, state, node }) => (
            <div>
              <FaChevronUp
                onMouseDown={(e) => {
                  onChange(
                    state
                      .change()
                      .moveNodeByKey(
                        node.key,
                        state.document.getParent(node.key).key,
                        state.document.getParent(node.key).nodes.indexOf(node) - 1,
                      ),
                  );
                  e.preventDefault();
                }}
              />
              <FaChevronDown
                onMouseDown={(e) => {
                  onChange(
                    state
                      .change()
                      .moveNodeByKey(
                        node.key,
                        state.document.getParent(node.key).key,
                        state.document.getParent(node.key).nodes.indexOf(node) + 1,
                      ),
                  );
                  e.preventDefault();
                }}
              />
            </div>
          ),
        });
        /* if (state.document.getParent(node.key).nodes.indexOf(node) > 0) {
          actions.push({
            label: <FaArrowUp />,
            toggle: ({ onChange, state, node }) =>
              onChange(
                state
                  .change()
                  .moveNodeByKey(
                    node.key,
                    state.document.getParent(node.key).key,
                    state.document.getParent(node.key).nodes.indexOf(node) - 1,
                  ),
              ),
          });
        }
        if (
          state.document.getParent(node.key).nodes.size >
          state.document.getParent(node.key).nodes.indexOf(node)
        ) {
          actions.push({
            label: <FaArrowDown />,
            toggle: ({ onChange, state, node }) =>
              onChange(
                state
                  .change()
                  .moveNodeByKey(
                    node.key,
                    state.document.getParent(node.key).key,
                    state.document.getParent(node.key).nodes.indexOf(node) + 1,
                  ),
              ),
          });
        } */
        actions.push({
          component: ({ state, onChange, node }) => (
            <Dropdown
              overlay={
                <Menu style={{ minWidth: 200 }}>
                  <Menu.Item>
                    <span
                      onMouseDown={(e) => {
                        onChange(state.change().removeNodeByKey(node.key));
                        e.preventDefault();
                      }}
                    >
                      Löschen
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <span
                      onMouseDown={(e) => {
                        onChange(
                          state
                            .change()
                            .moveToRangeOf(node)
                            .focus(),
                        );
                        setTimeout(() => document.execCommand('copy'), 1);
                        e.preventDefault();
                      }}
                    >
                      Kopieren
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <span
                      onMouseDown={(e) => {
                        onChange(
                          state
                            .change()
                            .moveToRangeOf(node)
                            .focus(),
                        );
                        setTimeout(() => document.execCommand('cut'), 1);
                        e.preventDefault();
                      }}
                    >
                      Ausschneiden
                    </span>
                  </Menu.Item>
                  <Menu.Divider />
                  {node.kind === 'block' && (
                    <Menu.Item>
                      <span
                        onMouseDown={(e) => {
                          onChange(state.change().unwrapBlockByKey(node.key));
                          e.preventDefault();
                        }}
                      >
                        Auspacken
                      </span>
                    </Menu.Item>
                  )}
                  <Menu.Divider />
                  <Menu.Item>
                    <span
                      onMouseDown={(e) => {
                        onChange(
                          state.change().insertNodeByKey(node.key, node.nodes.size, {
                            type: 'paragraph',
                            kind: 'block',
                          }),
                        );
                        e.preventDefault();
                      }}
                    >
                      Leere Zeile (Ende)
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <span
                      onMouseDown={(e) => {
                        onChange(
                          state
                            .change()
                            .insertNodeByKey(
                              state.document.getParent(node.key).key,
                              state.document.getParent(node.key).nodes.indexOf(node) + 1,
                              {
                                type: 'paragraph',
                                kind: 'block',
                              },
                            ),
                        );
                        e.preventDefault();
                      }}
                    >
                      Leere Zeile (Nach)
                    </span>
                  </Menu.Item>
                </Menu>
              }
            >
              <FaCog />
            </Dropdown>
          ),
        });
      }
      return actions;
    };

    setData = (data) => {
      const { node, editor } = this.props;
      const transform = editor
        .getState()
        .change()
        .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } });
      editor.onChange(transform);
    };

    getData = (name, defaultValue) => {
      const { node } = this.props;
      return node.data.get(name) || defaultValue;
    };

    setActive = () => {
      const { node, editor } = this.props;
      const transform = editor
        .getState()
        .change()
        .moveToRangeOf(node);
      editor.onChange(transform);
    };

    render() {
      const { editor, children, isSelected, node } = this.props;
      const actions = this.getActions();

      return (
        <StyledBlock
          {...this.props}
          getData={this.getData}
          setData={this.setData}
          setActive={this.setActive}
          readOnly={editor.props.readOnly}
        >
          {isSelected &&
            !!actions &&
            !!actions.length && (
              <Toolbar show isOpened parent={`[data-key="${node.key}"]`}>
                {actions.map(
                  Action({ state: editor.props.value, onChange: editor.props.onChange, node }),
                )}
              </Toolbar>
            )}
          {options.isVoid === false ? [children] : []}
        </StyledBlock>
      );
    }
  }
  return BaseDecorator;
};

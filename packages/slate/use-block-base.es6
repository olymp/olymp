import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import { Dropdown, Menu } from 'antd';
import { FaCog, FaChevronDown, FaChevronUp } from 'olymp-icons';
import Toolbar, { Button } from './toolbar';

const setLink = (onChange, value, node) => {
  const newContext = window.prompt('Context', JSON.stringify({}));
  if (newContext) {
    const obj = JSON.parse(newContext);
    onChange(
      value.change().setNodeByKey(node.key, {
        data: Object.keys(obj).reduce(
          (data, key) => data.set(key, { boundTo: obj[key] }),
          node.data,
        ),
      }),
    );
  }
};

const Action = ({ node, value, onChange, schema }) => (
  { toggle, active, label, component, ...rest },
  i,
) => {
  const setData = data => {
    const transform = value
      .change()
      .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } });
    onChange(transform);
    return Promise.resolve();
  };

  const getData = (name, defaultValue) => node.data.get(name) || defaultValue;

  const tooltip =
    typeof rest.tooltip === 'function' ? rest.tooltip(getData) : rest.tooltip;

  const onClick = e => {
    e.preventDefault();
    if (toggle) {
      toggle({
        setData,
        getData,
        value,
        onChange,
        schema,
        node,
      });
    }
  };

  if (component) {
    const Com = component;
    return (
      <Menu.Item key={i}>
        <Button onMouseDown={onClick} tooltip={tooltip}>
          <Com
            setData={setData}
            getData={getData}
            value={value}
            onChange={onChange}
            node={node}
          />
        </Button>
      </Menu.Item>
    );
  }

  return (
    <Menu.Item key={i}>
      <Button
        active={!!active && active({ getData, value })}
        onMouseDown={onClick}
        tooltip={tooltip}
      >
        {label}
      </Button>
    </Menu.Item>
  );
};

export default options => Block => {
  const StyledBlock = createComponent(
    ({ isSelected, theme, node }) => ({
      outline: isSelected && options.category && `2px solid ${theme.color}`,
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
      if (options.category) {
        actions.push({
          component: ({ onChange, value, node }) => (
            <div>
              <FaChevronUp
                onMouseDown={e => {
                  onChange(
                    value
                      .change()
                      .moveNodeByKey(
                        node.key,
                        value.document.getParent(node.key).key,
                        value.document.getParent(node.key).nodes.indexOf(node) -
                          1,
                      ),
                  );
                  e.preventDefault();
                }}
              />
              <FaChevronDown
                onMouseDown={e => {
                  onChange(
                    value
                      .change()
                      .moveNodeByKey(
                        node.key,
                        value.document.getParent(node.key).key,
                        value.document.getParent(node.key).nodes.indexOf(node) +
                          1,
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
          component: ({ value, onChange, node }) => (
            <Dropdown
              overlay={
                <Menu style={{ minWidth: 200 }}>
                  <Menu.Item>
                    <span
                      onMouseDown={e => {
                        setLink(onChange, value, node);
                        e.preventDefault();
                      }}
                    >
                      Datenanbindung
                    </span>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>
                    <span
                      onMouseDown={e => {
                        onChange(value.change().removeNodeByKey(node.key));
                        e.preventDefault();
                      }}
                    >
                      Löschen
                    </span>
                  </Menu.Item>
                  <Menu.Item>
                    <span
                      onMouseDown={e => {
                        onChange(
                          value
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
                      onMouseDown={e => {
                        onChange(
                          value
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
                        onMouseDown={e => {
                          onChange(value.change().unwrapBlockByKey(node.key));
                          e.preventDefault();
                        }}
                      >
                        Entpacken
                      </span>
                    </Menu.Item>
                  )}
                  <Menu.Divider />
                  <Menu.Item>
                    <span
                      onMouseDown={e => {
                        onChange(
                          value
                            .change()
                            .insertNodeByKey(node.key, node.nodes.size, {
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
                      onMouseDown={e => {
                        onChange(
                          value
                            .change()
                            .insertNodeByKey(
                              value.document.getParent(node.key).key,
                              value.document
                                .getParent(node.key)
                                .nodes.indexOf(node) + 1,
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

    setData = data => {
      const { editor } = this.props;
      const transform = editor.value
        .change()
        .setNodeByKey(this.n.key, { data: { ...this.n.data.toJS(), ...data } });
      editor.onChange(transform);
    };

    getData = (name, defaultValue) => this.n.data.get(name) || defaultValue;

    setActive = () => {
      const { node, editor } = this.props;
      const transform = editor.value.change().moveToRangeOf(node);
      editor.onChange(transform);
    };

    render() {
      const { editor, children, isSelected } = this.props;
      let { node } = this.props;
      const actions = this.getActions();
      if (editor.props.binding) {
        node = node.set(
          'data',
          node.data.keySeq().reduce((data, key) => {
            const value = node.data.get(key);
            if (value && value.boundTo) {
              return data.set(key, editor.props.binding[value.boundTo]);
            }
            return data;
          }, node.data),
        );
      }
      this.n = node;

      return (
        <StyledBlock
          {...this.props}
          node={node}
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
                  Action({
                    value: editor.props.value,
                    onChange: editor.props.onChange,
                    node,
                    schema: options.schema,
                  }),
                )}
              </Toolbar>
            )}
          {options.isVoid === false ? children : []}
        </StyledBlock>
      );
    }
  }
  return BaseDecorator;
};

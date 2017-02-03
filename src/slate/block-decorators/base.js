import React, { Component } from 'react';

export default (options = {}) => Block => {
  const { isVoid, isAtomic, sidebar, label, category, icon, defaultNodes, props } = options;

  return class BaseDecorator extends Component {
    static slate = { isVoid: isVoid !== false, isAtomic: isAtomic !== false, sidebar, label, category, icon, defaultNodes };
    render() {
      const { node, editor, state } = this.props;

      const setData = data => {
        const transform = editor
          .getState()
          .transform()
          .setNodeByKey(node.key, { data: { ...node.data.toJS(), ...data } })
          .apply();
        editor.onChange(transform);
      };
      const getData = (name, defaultValue) => {
        return node.data.get(name) || defaultValue;
      };
      const blockProps = (props || []).reduce((state, prop) => {
        if (getData(prop) !== undefined) state[prop] = getData(prop);
        return state;
      }, {});
      const children = isVoid === false ? [this.props.children] : [];
      // Empty children!!
      return (
        <Block {...this.props} getData={getData} setData={setData} readOnly={editor.props.readOnly} {...blockProps}>
          {children}
        </Block>
      );
    }
  };
};

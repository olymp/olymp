import React, { Component } from 'react';

export default class StackedMenu extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.keys !== this.props.keys) {
      this.oldKeys = this.props.keys;
    }
  }
  render() {
    const { renderMenu, keys } = this.props;
    return (
      <div style={{ height: '100%' }}>
        {renderMenu(keys, this.oldKeys)}
        {/* this.oldKeys && renderMenu(this.oldKeys) */}
      </div>
    );
  }
}

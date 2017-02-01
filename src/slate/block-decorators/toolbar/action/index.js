import React, { Component } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import Modal from './modal';
import Select from './select';

export default class ToolbarAction extends Component {
  onMouseDown = action => (e) => {
    e.preventDefault();
    action();
  }

  render() {
    const { toggle, type, active, icon, separated, options, right, multi, excluding, showModal } = this.props;

    if (options && options.length < 10 && !multi && !showModal && !excluding) {
      return <Select {...this.props} />;
    } else if (options) {
      return <Modal {...this.props} />;
    }

    return (
      <Button key={type} type="ghost" size="small" className={classNames('slate-toolbar-button', { separated, right })} onMouseDown={this.onMouseDown(toggle)} data-active={active}>
        <i className={`fa fa-${icon}`} />
      </Button>
    );
  }
}

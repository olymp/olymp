import React, { Component } from 'react';
import { Button, Tooltip } from 'antd';
import classNames from 'classnames';
import Modal from './modal';
import Select from './select';

export default class ToolbarAction extends Component {
  onMouseDown = action => (e) => {
    e.preventDefault();
    action();
  }

  render() {
    const { toggle, type, active, icon, separated, options, exceptions, right, multi, showModal, tooltip } = this.props;

    if (options && options.length < 10 && !multi && !showModal && !exceptions) {
      return <Select {...this.props} />;
    } else if (options) {
      return <Modal {...this.props} />;
    }

    return (
      <Tooltip placement="top" title={tooltip}>
        <Button key={type} type="ghost" size="small" className={classNames('slate-toolbar-button', { separated, right })} onMouseDown={this.onMouseDown(toggle)} data-active={active}>
          <i className={`fa fa-${icon}`} />
        </Button>
      </Tooltip>
    );
  }
}

import React, { Component } from 'react';
import { Button, Modal, Table, Tooltip } from 'antd';
import classNames from 'classnames';
import capitalize from 'lodash/upperFirst';

export default class ToolbarActionModal extends Component {
  state = {
    modal: {},
  };

  changeSelection = (value, type) => {
    const { toggle, exceptions } = this.props;

    if (exceptions) {
      toggle({
        [type]: value,
      });
    } else {
      toggle(value);
    }
  }

  renderTable = (options = [], multi, exception) => {
    const { toggle } = this.props;
    const modus = !exception ? 'include' : 'exclude';

    let attributes = {};
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
    if (attributes.disabled) delete attributes.disabled;

    if (!this[modus]) this[modus] = selectedRowKeys;

    const columns = Object.keys(attributes).map(key => ({
      title: capitalize(key),
      dataIndex: key,
    }));

    const rowSelection = multi ? {
      type: 'select',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => this.changeSelection(selectedRows, modus),
    } : {
      type: 'radio',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => toggle(selectedRows[0]),
    };
    rowSelection.getCheckboxProps = record => ({
      disabled: record.disabled,
    });

    const tableProps = {
      dataSource: data,
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        ...columns,
      ],
      rowSelection,
      size: 'middle',
      pagination: false,
    };
    if (exception) tableProps.title = () => 'Mit Ausnahme von';

    return <Table {...tableProps} />;
  }

  render() {
    const { toggle, type, active, icon, separated, options, exceptions, right, multi, label } = this.props;
    const { modal } = this.state;

    return (
      <div key={type}>
        <Tooltip placement="top" overlay={<span>{label}</span>}>
          <Button key={type} type="ghost" size="small" className={classNames('slate-toolbar-button', { separated, right })} onClick={() => this.setState({ modal: { ...modal, [type]: true } })} data-active={active}>
            <i className={`fa fa-${icon}`} />
          </Button>
        </Tooltip>

        <Modal
          title="Bitte wählen"
          visible={modal[type]}
          onOk={() => {
            this.include = undefined;
            this.exclude = undefined;
            this.setState({ modal: { ...modal, [type]: false } });
          }}
          onCancel={() => {
            if (exceptions) {
              toggle({
                include: this.include.map(key => ({ key })),
                exclude: this.exclude.map(key => ({ key })),
              });
            } else {
              toggle(this.include);
            }
            this.include = undefined;
            this.exclude = undefined;

            this.setState({ modal: { ...modal, [type]: false } });
          }}
        >
          {this.renderTable(options, multi || !!exceptions)}
          {this.renderTable(exceptions, true, true)}
        </Modal>
      </div>
    );
  }
}

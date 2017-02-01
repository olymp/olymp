import React, { Component } from 'react';
import { Button, Modal, Table } from 'antd';
import classNames from 'classnames';
import capitalize from 'lodash/upperFirst';

export default class ToolbarActionModal extends Component {
  state = {
    modal: {},
    include: [],
    exclude: [],
  };

  changeSelection = (value, type) => {
    const { toggle, excluding } = this.props;
    const { include, exclude } = this.state;

    if (excluding) {
      this.setState({ [type]: value })

      toggle({
        include,
        exclude,
      });
    } else {
      toggle(value);
    }
  }

  render() {
    const { toggle, type, active, icon, separated, options, right, multi } = this.props;
    const excluding = this.props.excluding && multi; // es macht keinen Sinn, excluding ohne muli zu benutzen
    const { modal } = this.state;

    let attributes;
    const selectedRowKeys = [];
    const excludedRowKeys = [];
    const data = options.map(({ value, label, active, excluded, ...rest }) => {
      attributes = rest;

      if (active) {
        selectedRowKeys.push(value);
      }

      if (excluded) {
        excludedRowKeys.push(value);
      }

      return {
        key: value,
        name: label,
        ...rest
      };
    });
    delete attributes.disabled;

    // Alten Wert speichern, für den Fall das Cancel gedrückt wird
    if (!this.selection) this.selection = selectedRowKeys;

    const columns = Object.keys(attributes).map(key => ({
      title: capitalize(key),
      dataIndex: key,
    }));

    const rowSelection = multi ? {
      type: 'select',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => this.changeSelection(selectedRows, 'include'),
    } : {
      type: 'radio',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => toggle(selectedRows[0]),
    };
    rowSelection.getCheckboxProps = record => ({
      disabled: record.disabled,
    });

    const exRowSelection = {
      type: 'select',
      selectedRowKeys: excludedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => this.changeSelection(selectedRows, 'exclude'),
      getCheckboxProps: record => ({
        disabled: record.disabled,
      })
    };

    const includeTable = (
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
    );

    const excludeTable = excluding && (
      <Table
        dataSource={data}
        columns={[{
          title: 'Name',
          dataIndex: 'name',
        },
          ...columns,
        ]}
        rowSelection={exRowSelection}
        size="middle"
        pagination={false}
        title={() => 'Mit Ausnahme von'}
      />
    );

    return (
      <div key={type}>
        <Button key={type} type="ghost" size="small" className={classNames('slate-toolbar-button', { separated, right })} onClick={() => this.setState({ modal: { ...modal, [type]: true } })} data-active={active}>
          <i className={`fa fa-${icon}`} />
        </Button>

        <Modal
          title="Bitte wählen"
          visible={modal[type]}
          onOk={() => {
            this.selection = undefined;
            this.setState({ modal: { ...modal, [type]: false } });
          }}
          onCancel={() => {
            toggle(data.find(item => this.selection.findIndex(key => key === item.key) !== -1));
            this.selection = undefined;
            this.setState({ modal: { ...modal, [type]: false } });
          }}
        >
          {includeTable}
          {excludeTable}
        </Modal>
      </div>
    );
  }
}

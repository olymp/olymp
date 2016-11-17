import React, { Component, PropTypes } from 'react';
import { withApollo } from 'react-apollo';
import capitalize from 'capitalize';
import gql from 'graphql-tag';
import { Table, Menu, Icon } from 'antd';
import { Link } from 'react-router-v4-decode-uri';

import { withRouter, withCollection } from '../../decorators';
import columnHelper from './columns.js';

@withCollection
@withApollo
@withRouter
export default class MainList extends Component {
  static propTypes = {
    collection: PropTypes.object, // todo: shape statt object
    client: PropTypes.object, // todo: shape statt object
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.items = null;
    this.state = {
      selectedRowKeys: [],
    };
  }

  componentWillMount() {
    this.update(this.props);
  }

  componentWillReceiveProps(props) {
    this.update(props, this.props);
  }

  componentWillUnmount() {
    if (this.subscription) this.subscription.unsubscribe();
    this.unmount = true;
  }

  update = (nextProps, lastProps) => {
    if (!lastProps || nextProps.collection !== lastProps.collection) {
      if (this.subscription) this.subscription.unsubscribe();
      const { client, collection, attributes } = nextProps;
      this.items = null;

      const query = client.watchQuery({
        /* eslint-disable no-undef */
        query: gql`
          query ${collection.name}List {
            items: ${collection.name}List {
              ${attributes}
            }
          }
        `, /* eslint-disable */
      });
      this.subscription = query.subscribe({
        next: ({data}) => {
          if (this.unmount) return;
          this.items = data.items;
          this.setState({});
        },
        error: (error) => {
          console.log('there was an error sending the query', error);
        },
      });
    }
  }

  render() {
    const {onClick, collection, name, removeCollectionItem, pathname} = this.props;
    const {selectedRowKeys} = this.state;
    const {items} = this;

    const fields = collection.fields.filter(({description}) => description.indexOf('list:') !== -1);

    const columns = fields.map((meta) => {
      const { name } = meta;

      return {
        title: capitalize(name),
        dataIndex: name,
        key: name,
        ...columnHelper(meta, items)
      }
    });

    // Status hinzufügen, todo: nur bei "Alle"
    columns.push({
      title: 'Status',
      sorter: (a, b) => (a < b ? -1 : (a > b ? 1 : 0)),
      dataIndex: '#status#',
      key: '#status#',
      render: text => <span>{text}</span>,
      filters: [
        {
          text: `Veröffentlicht (${'...'})`,
          value: '#veröffentlicht#'
        },
        {
          text: `Archiviert (${'...'})`,
          value: '#archiviert#'
        },
        {
          text: `Gelöscht (${'...'})`,
          value: '#gelöscht#'
        }
      ],
      onFilter: (value, record) => value === record.status,
    });

    const pagination = items ? {
      total: items.length,
      // showSizeChanger: true,
      defaultPageSize: 30,
      pageSize: 30,
      // showQuickJumper: true,
      onShowSizeChange(current, pageSize) {
        console.log('Aktuell: ', current, '; Seitengröße: ', pageSize);
      },
      onChange(current) {
        console.log('Aktuell: ', current);
      },
    } : undefined;

    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({ selectedRowKeys });
      },
      onSelect: (record, selected, selectedRows) => {
        //console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        //console.log(selected, selectedRows, changeRows);
      },
    };

    const onTableChange = (pagination, filters, sorter) => {
      // Nach Änderung an Pagination, Sortierung oder Filter wird Selektion enternt, da es für Benutzer irreführend ist und zu Fehlern führen kann (bei Filterung ändern sich keys!)
      // todo: Sortierung ausschließen
      this.setState({ selectedRowKeys: [] });
    };

    return (
      <div style={{ paddingTop: '38px' }}>
        <Menu
          selectedKeys={['0']}
          mode="horizontal"
          theme="dark"
          style={{ fontSize: '13px', lineHeight: '38px', position: 'fixed', top: '48px', left: 0, width: '100%', zIndex: 1 }}
          >
          <Menu theme="dark" style={{ width: '80%', maxWidth: '1600px', minWidth: '1200px', margin: '0 auto', lineHeight: '38px' }}>
            <Menu.Item key="0">{capitalize(name)}</Menu.Item>
            <Menu.Item key="1">Veröffentlicht</Menu.Item>
            <Menu.Item key="3">Archiv</Menu.Item>
            <Menu.Item key="4">Gelöscht</Menu.Item>

            <Menu.Item style={{ float: 'right' }} key="14">
              <Icon type="download" />Exportieren ({selectedRowKeys.length})
            </Menu.Item>
            <Menu.Item style={{ float: 'right' }} key="13"><span onClick={() => removeCollectionItem(selectedRowKeys[0])}>Löschen ({selectedRowKeys.length})</span></Menu.Item>
            <Menu.Item style={{ float: 'right' }} key="12">Archivieren ({selectedRowKeys.length})</Menu.Item>
            <Menu.Item style={{ float: 'right' }} key="11">Veröffentlichen ({selectedRowKeys.length})</Menu.Item>
            <Menu.Item style={{ float: 'right' }} key="10">
              <Link to={{ pathname, query: { [name]: null } }}>
                <Icon type="plus" /> {capitalize(name)}hinzufügen
              </Link>
            </Menu.Item>
          </Menu>
        </Menu>

        <Table
          rowSelection={rowSelection}
          size="middle"
          rowKey="id"
          onRowClick={onClick}
          loading={!items}
          columns={columns}
          dataSource={items}
          pagination={pagination}
          onChange={onTableChange}
          style={{ clear: 'both' }}
          />
      </div>
    );
  }
}

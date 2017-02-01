import React, { Component, PropTypes } from 'react';
import capitalize from 'lodash/upperFirst';
import { Table, Menu, Icon, Affix } from 'antd';
import find from 'lodash/find';
import sortBy from 'lodash/sortBy';

import { withRouter, withCollection, Link, gql, withApollo } from 'olymp';
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
      const { client, collection, fieldNames, location } = nextProps;
      this.items = null;

      const lname = collection.name[0].toLowerCase() + collection.name.substr(1);
      const query = client.watchQuery({
        /* eslint-disable no-undef */
        query: gql`
          query ${lname}List($state: [DOCUMENT_STATE]) {
            items: ${lname}List(query: {state: {in: $state}}) {
              ${fieldNames}
            }
          }
        `, /* eslint-disable */
        variables: {
          state: location.query && location.query.state ? location.query.state.split('-') : []
        }
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
    const {onClick, collection, name, saveCollectionItem, removeCollectionItem, location} = this.props;
    const {pathname, query} = location;
    const {selectedRowKeys} = this.state;
    const {items} = this;

    // Sortierung nach #list
    let fields = [];
    collection.fields.forEach((field) => {
      const { name, description } = field;
      const index = description && description.indexOf('list:') !== -1 ? description.split('list:')[1].split('\n')[0] : undefined;

      if (index !== undefined || name === 'updatedAt' || name === 'updatedBy') {
        fields.push({
          ...field,
          index,
        });
      }
    });
    fields = sortBy(fields, 'index');

    const columns = fields.map((meta) => {
      const { name, description } = meta;

      return {
        title: description && description.indexOf('title:') !== -1 ? description.split('title:')[1].split('\n')[0] : capitalize(name),
        dataIndex: name,
        key: name,
        ...columnHelper(meta, items)
      }
    });

    // Status hinzufügen
    columns.push({
      title: 'Status',
      sorter: (a, b) => (a < b ? -1 : (a > b ? 1 : 0)),
      dataIndex: 'state',
      key: 'state',
      render: text => <span>{text || 'PUBLISHED'}</span>,
      filters: [
        {
          text: `Veröffentlicht (${(items || []).filter(item => !item.state || item.state === 'PUBLISHED').length})`,
          value: 'PUBLISHED'
        },
        {
          text: `Entworfen (${(items || []).filter(item => item.state === 'DRAFT').length})`,
          value: 'DRAFT'
        },
        {
          text: `Archiviert (${(items || []).filter(item => item.state === 'ARCHIVED').length})`,
          value: 'ARCHIVED'
        },
        {
          text: `Gelöscht (${(items || []).filter(item => item.state === 'REMOVED').length})`,
          value: 'REMOVED'
        }
      ],
      onFilter: (value, record) => value === record.state || !record.state && value === 'PUBLISHED',
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

    const changeState = (state) =>
      selectedRowKeys.forEach(key => saveCollectionItem(
        {
          ...find(items, obj => obj.id === key),
          state,
        }
      ))

    return (
      <div>
        <Affix offsetTop={48}>
          <Menu
            selectedKeys={query && query.state ? [query.state] : []}
            mode="horizontal"
            theme="dark"
            className="olymp-submenu"
            >
            <Menu theme="dark">
              <Menu.Item key="PUBLISHED">
                <Link to={{ pathname, query: { state: 'PUBLISHED' }}}>
                  Veröffentlichte
                </Link>
              </Menu.Item>
              <Menu.Item key="DRAFT">
                <Link to={{ pathname, query: { state: 'DRAFT' }}}>
                  Entwürfe
                </Link>
              </Menu.Item>
              <Menu.Item key="ARCHIVED">
                <Link to={{ pathname, query: { state: 'ARCHIVED' }}}>
                  Archivierte
                </Link>
              </Menu.Item>
              <Menu.Item key="REMOVED">
                <Link to={{ pathname, query: { state: 'REMOVED' }}}>
                  Gelöschte
                </Link>
              </Menu.Item>
              <Menu.Item key="PUBLISHED-DRAFT-ARCHIVED-REMOVED">
                <Link to={{ pathname, query: { state: 'PUBLISHED-DRAFT-ARCHIVED-REMOVED' }}}>
                  Alle
                </Link>
              </Menu.Item>

              { selectedRowKeys.length && location.query && location.query.state === 'REMOVED' ? <Menu.Item style={{ float: 'right' }} key="14"><span onClick={() => selectedRowKeys.forEach(key => removeCollectionItem(key))}>Dauerhaft löschen ({selectedRowKeys.length})</span></Menu.Item> : undefined }
              { selectedRowKeys.length && location.query && location.query.state !== 'REMOVED' ? <Menu.Item style={{ float: 'right' }} key="14"><span onClick={() => changeState('REMOVED')}>Papierkorb ({selectedRowKeys.length})</span></Menu.Item> : undefined }
              { selectedRowKeys.length ? <Menu.Item style={{ float: 'right' }} key="13"><span onClick={() => changeState('ARCHIVED')}>Archiv ({selectedRowKeys.length})</span></Menu.Item> : undefined }
              { selectedRowKeys.length ? <Menu.Item style={{ float: 'right' }} key="12"><span onClick={() => changeState('DRAFT')}>Entwurf ({selectedRowKeys.length})</span></Menu.Item> : undefined }
              { selectedRowKeys.length ? <Menu.Item style={{ float: 'right' }} key="11"><span onClick={() => changeState('PUBLISHED')}>Veröffentlicht ({selectedRowKeys.length})</span></Menu.Item> : undefined }
              { selectedRowKeys.length ? <Menu.Item style={{ float: 'right' }} key="16"><Icon type="download" />Exportieren ({selectedRowKeys.length})</Menu.Item> : undefined }
              <Menu.Item style={{ float: 'right' }} key="15">
                <Icon type="upload" />Importieren
              </Menu.Item>
              <Menu.Item style={{ float: 'right' }} key="10">
                <Link to={{ pathname, query: { ...query, [`@${name}`]: null } }}>
                  <Icon type="plus" />Hinzufügen
                </Link>
              </Menu.Item>
            </Menu>
          </Menu>
        </Affix>

        <div className="olymp-container">
          <Table
            rowSelection={rowSelection}
            size="small"
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
      </div>
    );
  }
}

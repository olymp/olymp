import React, { Component } from 'react';
import { Button, Tabs, Input, Col, Select, Form, Pagination } from 'antd';
import { withRouter, withCollections } from 'olymp';
import { createComponent } from 'react-fela';
import capitalize from 'lodash/upperFirst';
import Filter from './filter';

const states = {
  PUBLISHED: 'Öffentlich',
  DRAFT: 'Entwurf',
  ARCHIVED: 'Archiv',
  REMOVED: 'Papierkorb',
};

const StyledForm = createComponent(() => ({
  padding: '20px!important',
  borderWidth: '0!important',
  marginLeft: '53px',
}), props => <Form {...props} />, ['inline']);

const StyledButtonGroup = createComponent(() => ({
  // borderWidth: '0!important',
}), props => <Button.Group {...props} />);

const Panel = createComponent(({ seperator, align, padding, background }) => ({
  padding: padding || '5px 10px',
  borderTop: seperator ? '1px solid #e6e6e6' : 0,
  textAlign: align,
  backgroundColor: background,
}));

@withRouter
@withCollections
export default class SidebarHeader extends Component {
  getCollectionLink = (collection) => {
    const { location } = this.props;
    const { pathname } = location;

    return { pathname, query: { [`@${collection.toLowerCase()}`]: null } };
  }

  renderSelect() {
    const { collectionTree, router, activePage } = this.props;

    return (
      <Select
        defaultValue={activePage}
        style={{ width: '159px' }}
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        showSearch
        onSelect={value => router.push(this.getCollectionLink(value))}
      >
        {Object.keys(collectionTree).map((key) => {
          const group = collectionTree[key];

          return (
            <Select.OptGroup label={capitalize(key)} key={key}>
              {group.map(item => (
                <Select.Option value={item.name} key={item.name}>
                  {item.description && item.description.indexOf('title:') !== -1 ? item.description.split('title:')[1].split('\n')[0] : item.name}
                </Select.Option>
              ))}
            </Select.OptGroup>
          );
        })}
        <Select.Option value={'media'}>Mediathek</Select.Option>
        <Select.Option value={'user'} disabled>User</Select.Option>
      </Select>
    );
  }

  render() {
    const { items, page, pageSize, setPage, searchFn, searchText, filtering, setQuery, setQueryToState, children } = this.props;

    /* const filter = filtering ? (
      <Button onClick={e => setQueryToState()} style={{ width: '100%' }}>Reset</Button>
    ) : (
      <Filter onFilter={setQuery} collection={collection} style={{ width: '100%' }} />
    ); */

    return (
      <div>
        <StyledForm inline>
          <Form.Item>
            {this.renderSelect()}
          </Form.Item>
          <Form.Item>
            <StyledButtonGroup>
              {children}
            </StyledButtonGroup>
          </Form.Item>
        </StyledForm>

        <Panel seperator>
          <Input.Group>
            <Col span="18">
              <Input onChange={searchFn} value={searchText} placeholder="Suche ..." />
            </Col>
            <Col span="6" className="pr-0">
              {/* filter */}
            </Col>
          </Input.Group>
        </Panel>

        {!filtering && (
          <Panel seperator>
            <Tabs onChange={eq => setQueryToState(eq)} style={{ marginBottom: -16 }}>
              {Object.keys(states).map(name => <Tabs.TabPane tab={states[name]} key={name} />)}
            </Tabs>
          </Panel>
        )}

        {!!(page > 1 || (items || []).length > pageSize) && (
          <Panel>
            <Pagination size="small" current={page} onChange={setPage} defaultPageSize={pageSize} total={items && items.length} />
          </Panel>
        )}
      </div>
    );
  }
}

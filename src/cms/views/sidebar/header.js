import React, { Component } from 'react';
import { Button, Tabs, Input, Col, Select, Form, Pagination, Dropdown, Menu } from 'antd';
import { withRouter, withCollections, Link } from 'olymp';
import { createComponent } from 'react-fela';
import capitalize from 'lodash/upperFirst';

const StyledHeader = createComponent(() => ({
  marginBottom: '0px',
  marginTop: '6px',
  fontSize: '1.25rem'
}), props => <h5 {...props} />);
const StyledForm = createComponent(() => ({
  padding: '20px!important',
  paddingBottom: '14px!important',
  borderWidth: '0!important',
}), props => <div {...props} />);

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
      <Menu>
        {Object.keys(collectionTree).map((key) => {
          const group = collectionTree[key];

          return (
            <Menu.SubMenu title={capitalize(key)} key={key}>
              {group.map(item => (
                <Menu.Item key={item.name}>
                  <Link to={this.getCollectionLink(item.name)}>
                    {item.description && item.description.indexOf('title:') !== -1 ? item.description.split('title:')[1].split('\n')[0] : item.name}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          );
        })}
        <Menu.Item key="media">
          <Link to={this.getCollectionLink('media')}>Mediathek</Link>
        </Menu.Item>
        <Menu.Item key="user" disabled>
          <Link to={this.getCollectionLink('user')}>User</Link>
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    const { items, page, pageSize, setPage, searchFn, searchText, filter, filtering, setQueryToState, actions, states } = this.props;

    return (
      <div>
        <StyledForm>
          <Input.Group>
            <Col span="4" />
            <Col span="15">
              <Dropdown overlay={this.renderSelect()}>
                <a className="ant-dropdown-link" href="javascript:;">
                  <StyledHeader>
                    Mediathek
                  </StyledHeader>
                </a>
              </Dropdown>
            </Col>
            <Col span="5">
              <StyledButtonGroup>
                {actions}
              </StyledButtonGroup>
            </Col>
          </Input.Group>
        </StyledForm>

        <Panel seperator>
          <Input.Group>
            <Col span="18">
              <Input onChange={searchFn} value={searchText} placeholder="Suche ..." />
            </Col>
            <Col span="6" className="pr-0">
              {filter && (filtering ? (
                <Button onClick={e => setQueryToState()} style={{ width: '100%' }}>Reset</Button>
              ) : (
                <Dropdown overlay={filter}>
                  <Button style={{ width: '100%' }}>Filter</Button>
                </Dropdown>
              ))}
            </Col>
          </Input.Group>
        </Panel>

        {!filtering && !!states && (
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

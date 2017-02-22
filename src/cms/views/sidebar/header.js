import React, { Component } from 'react';
import { Button, Input, Col, Pagination, Dropdown, Menu } from 'antd';
import { withRouter, withCollections } from 'olymp';
import { createComponent } from 'react-fela';
import capitalize from 'lodash/upperFirst';
import { CmsAction } from '../../components';

const StyledHeader = createComponent(() => ({
  marginBottom: '0px',
  marginTop: '0px',
}), props => <h5 {...props} />);

const StyledSubheader = createComponent(() => ({
  marginBottom: '0px',
  marginTop: '0px',
  opacity: 0.7,
}), props => <h6 {...props} />);

const StyledForm = createComponent(() => ({
  padding: '20px!important',
  paddingBottom: '14px!important',
  borderTop: '0!important',
  borderLeft: '0!important',
  borderRight: '0!important',
  borderBottom: '1px solid #e6e6e6',
}), props => <div {...props} />);

const StyledButtonGroup = createComponent(() => ({
  // borderWidth: '0!important',
}), props => <Button.Group {...props} />);

const Panel = createComponent(() => ({
  padding: '5px 10px',
  borderBottom: '1px solid #e6e6e6',
}));

@withRouter
@withCollections
export default class SidebarHeader extends Component {
  renderStateMenu() {
    const { states, setQueryToState } = this.props;

    return (
      <Menu onClick={state => setQueryToState(state.key)} style={{ minWidth: 150 }}>
        {Object.keys(states).map(name => <Menu.Item key={name}>{states[name]}</Menu.Item>)}
      </Menu>
    );
  }

  render() {
    const { items, page, pageSize, setPage, searchFn, searchText, filter, filtering, actions, activePage, states, query, setQueryToState, noChangeAllowed, collectionTree } = this.props;

    return (
      <div>
        <StyledForm>
          <Input.Group style={{ height: 48 }}>
            <Col span="4" />
            <Col span="15" style={{ marginTop: -3 }}>
              <Dropdown overlay={!noChangeAllowed && <CmsAction collections={collectionTree} />}>
                <a className="ant-dropdown-link" href="javascript:;" style={noChangeAllowed ? { cursor: 'not-allowed' } : {}}>
                  <StyledHeader>
                    {capitalize(activePage)} {!noChangeAllowed && <i className="fa fa-angle-down" />}
                  </StyledHeader>
                </a>
              </Dropdown>
              {!!states && Object.keys(states).length > 1 && (
                <Dropdown overlay={this.renderStateMenu()}>
                  <a className="ant-dropdown-link" href="javascript:;">
                    <StyledSubheader>
                      {states[query.state.eq || (!query.state.null && 'ALL')]} <i className="fa fa-angle-down" />
                    </StyledSubheader>
                  </a>
                </Dropdown>
              )}
            </Col>
            <Col span="5">
              <StyledButtonGroup>
                {actions}
              </StyledButtonGroup>
            </Col>
          </Input.Group>
          {!!(page > 1 || (items || []).length > pageSize) && (
            <Input.Group>
              <Col span="4" />
              <Col span="15">
                <Pagination size="small" current={page} onChange={setPage} defaultPageSize={pageSize} total={items && items.length} />
              </Col>
              <Col span="5" />
            </Input.Group>
          )}
        </StyledForm>

        {(!!searchFn || !!filter) && (
          <Panel>
            <Input.Group>
              {searchFn && (
                <Col span="18">
                  <Input size="large" onChange={searchFn} value={searchText} placeholder="Suche ..." />
                </Col>
              )}
              {filter && (
                <Col span="6" className="pr-0">
                  {filtering ? (
                    <Button onClick={e => setQueryToState()} style={{ width: '100%' }}>Reset</Button>
                  ) : (
                    <Dropdown overlay={filter}>
                      <Button style={{ width: '100%' }}>Filter</Button>
                    </Dropdown>
                  )}
                </Col>
              )}
            </Input.Group>
          </Panel>
        )}
      </div>
    );
  }
}

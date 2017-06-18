import React, { Component } from 'react';
import { Gateway } from 'react-gateway';
import { Button, Input, Col, Pagination, Dropdown, Menu } from 'antd';
import { withRouter, withCollections } from 'olymp';
import { createComponent } from 'react-fela';
import capitalize from 'lodash/upperFirst';
import { CmsAction } from '../../components';

const StyledHeader = createComponent(
  () => ({
    marginBottom: '0px',
    marginTop: '0px',
  }),
  props => <h5 {...props} />
);

const StyledSubheader = createComponent(
  () => ({
    marginBottom: '0px',
    marginTop: '2px',
    marginRight: '1px',
    opacity: 0.7,
  }),
  props => <h6 {...props} />
);

const StyledForm = createComponent(
  () => ({
    minHeight: '80px',
    padding: '20px!important',
    paddingBottom: '0!important',
    borderTop: '0!important',
    borderLeft: '0!important',
    borderRight: '0!important',
    borderBottom: '1px solid #e6e6e6',
  }),
  props => <div {...props} />
);

const StyledPagination = createComponent(() => ({
  float: 'right',
  clear: 'both',
  margin: '.75rem 0',
}));

const DropdownGroup = createComponent(() => ({
  float: 'right',
  textAlign: 'right',
}));

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
      <Menu
        onClick={state => setQueryToState(state.key)}
        style={{ minWidth: 150 }}
      >
        {Object.keys(states).map(name =>
          <Menu.Item key={name}>{states[name]}</Menu.Item>
        )}
      </Menu>
    );
  }

  render() {
    const {
      items,
      page,
      pageSize,
      setPage,
      searchFn,
      searchText,
      filter,
      filtering,
      actions,
      activePage,
      states,
      gqlQuery,
      setQueryToState,
      noChangeAllowed,
      collectionTree,
    } = this.props;

    return (
      <div>
        <Gateway into="cms-action">
          {actions}
        </Gateway>

        <StyledForm>
          <DropdownGroup>
            <Dropdown
              overlay={
                !noChangeAllowed && <CmsAction collections={collectionTree} />
              }
            >
              <a
                className="ant-dropdown-link"
                href="javascript:;"
                style={noChangeAllowed ? { cursor: 'not-allowed' } : {}}
              >
                <StyledHeader>
                  {capitalize(activePage)}{' '}
                  {!noChangeAllowed && <i className="fa fa-angle-down" />}
                </StyledHeader>
              </a>
            </Dropdown>
            {!!states &&
              Object.keys(states).length > 1 &&
              <Dropdown overlay={this.renderStateMenu()}>
                <a className="ant-dropdown-link" href="javascript:;">
                  <StyledSubheader>
                    {
                      states[
                        gqlQuery.state.eq || (!gqlQuery.state.null && 'ALL')
                      ]
                    }{' '}
                    ({(items || []).length}) <i className="fa fa-angle-down" />
                  </StyledSubheader>
                </a>
              </Dropdown>}
          </DropdownGroup>

          {!!(page > 1 || (items || []).length > pageSize) &&
            <StyledPagination>
              <Pagination
                size="small"
                current={page}
                onChange={setPage}
                defaultPageSize={pageSize}
                total={(items || []).length}
              />
            </StyledPagination>}

          <div style={{ clear: 'both' }} />
        </StyledForm>

        {(!!searchFn || !!filter) &&
          <Panel>
            <Input.Group>
              {searchFn &&
                <Col span="18">
                  <Input
                    size="large"
                    onChange={searchFn}
                    value={searchText}
                    placeholder="Suche ..."
                  />
                </Col>}
              {filter &&
                <Col span="6" className="pr-0">
                  {filtering
                    ? <Button
                        onClick={e => setQueryToState()}
                        style={{ width: '100%' }}
                      >
                        Reset
                      </Button>
                    : <Dropdown overlay={filter}>
                        <Button style={{ width: '100%' }}>Filter</Button>
                      </Dropdown>}
                </Col>}
            </Input.Group>
          </Panel>}
      </div>
    );
  }
}

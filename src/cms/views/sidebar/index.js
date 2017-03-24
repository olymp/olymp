import React, { Component } from 'react';
import { Spin } from 'antd';
import { throttleInput } from 'olymp';
import { createComponent } from 'react-fela';
import SidebarHeader from './header';
import SidebarCard from './card';

const PAGE_SIZE = 25;

const Sidebar = createComponent(() => ({
  left: 0,
  top: 0,
  width: '340px',
  bottom: 0,
  position: 'fixed',
  backgroundColor: '#f9f9f9',
  borderRight: '1px solid #e0e0e0',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
}));

const Panel = createComponent(() => ({
  padding: '0 10px',
  overflowY: 'auto',
  overflowX: 'hidden',
}));

const SubPanel = createComponent(({ seperator }) => ({
  padding: '5px 0',
  borderBottom: seperator ? '1px solid #e6e6e6' : 0,
}));

export default class SidebarComponent extends Component {
  state = {
    gqlQuery: { state: { eq: 'PUBLISHED' } },
    filtering: false,
    searchText: '',
    page: 1,
  };
  throttle = throttleInput();

  setQuery = (gqlQuery) => {
    const { refetch } = this.props;

    refetch({
      ...this.state.gqlQuery,
      ...gqlQuery
    });
    this.setState({
      filtering: true,
      searchText: '',
      gqlQuery: {
        ...this.state.gqlQuery,
        ...gqlQuery
      },
    });
  }

  setQueryToState = (eq = 'PUBLISHED') => {
    const { refetch } = this.props;

    const gqlQuery = {
      state: (eq === 'ALL') ? { null: false } : { eq }
    };

    refetch(gqlQuery);
    this.setState({
      filtering: false,
      gqlQuery,
      searchText: '',
    });
  }

  search = (e) => {
    const { refetch } = this.props;
    const { searchText } = this.state;

    if (!e.target.value) return this.setQueryToState();

    const gqlQuery = {
      ...this.state.gqlQuery,
      name: { contains: searchText },
    };

    this.setState({
      searchText: e.target.value,
    });
    this.throttle(() => {
      if (!searchText) return;
      refetch(gqlQuery);
      this.setState({
        filtering: true,
        gqlQuery,
      });
    });
  }

  render() {
    const { items = [], isLoading, filter, multi, refetch } = this.props;
    const { page } = this.state;

    const activeItems = items.filter(item => item.isActive);
    const unactiveItems = multi ? items.filter(item => !item.isActive) : items;

    return (
      <Sidebar>
        <SidebarHeader
          {...this.props}
          {...this.state}
          searchFn={!!refetch && this.search}
          setPage={page => this.setState({ page })}
          pageSize={PAGE_SIZE}
          filter={typeof filter === 'function' ? filter(this.setQuery) : undefined}
          setQueryToState={this.setQueryToState}
        />

        {isLoading ? (
          <Panel>
            <Spin size="large" />
          </Panel>
          ) : (
            <Panel>
              {!!activeItems && !!multi && !!activeItems.length && (
                <SubPanel seperator>
                  {activeItems.map((item, index) => <SidebarCard {...item} key={index} />)}
                </SubPanel>
              )}
              <SubPanel>
                {unactiveItems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((item, index) =>
                  <SidebarCard {...item} key={index} />)}
              </SubPanel>
            </Panel>
        )}
      </Sidebar>
    );
  }
}

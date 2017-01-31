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
    query: { state: { eq: 'PUBLISHED' } },
    filtering: false,
    searchText: '',
    page: 1,
  };
  throttle = throttleInput();

  setQuery = (query) => {
    const { refetch } = this.props;

    refetch(query);
    this.setState({
      filtering: true,
      searchText: '',
      query,
    });
  }

  setQueryToState = (eq = 'PUBLISHED') => {
    const { refetch } = this.props;

    refetch({ state: { eq } });
    this.setState({
      filtering: false,
      query: { state: { eq } },
      searchText: '',
    });
  }

  search = (e) => {
    const { refetch } = this.props;

    if (!e.target.value) return this.setQueryToState();

    const searchText = e.target.value;
    this.setState({
      searchText,
    });
    this.throttle(() => {
      if (!this.state.searchText) return;
      refetch({ name: { contains: this.state.searchText } });
      this.setState({
        filtering: true,
        query: { name: { contains: this.state.searchText } },
      });
    });
  }

  render() {
    const { items, isLoading, filter, multi } = this.props;
    const { page } = this.state;

    const activeItems = items.filter(item => item.isActive);
    const unactiveItems = multi ? items.filter(item => !item.isActive) : items;

    return (
      <Sidebar>
        <SidebarHeader
          {...this.props}
          {...this.state}
          searchFn={this.search}
          setPage={page => this.setState({ page })}
          pageSize={PAGE_SIZE}
          filter={typeof filter === 'function' ? filter(this.setQuery) : undefined}
          setQueryToState={this.setQueryToState}
        />

        {isLoading ? (
          <Panel>
            <Spin />
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

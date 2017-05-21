import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { Icon, Button } from 'antd';
import Sidebar from '../sidebar';

const states = {
  ALL: 'Alle',
  PUBLISHED: 'Öffentlich',
  REMOVED: 'Papierkorb',
};

@withRouter
export default class PagesListSidebar extends Component {
  render() {
    const { router, location } = this.props;
    const { query } = location;

    const items = (this.props.items || []).map((item) => {
      return {
        name: item.name,
        description: item.slug,
        onClick: () => router.push({ location, query: { ...query, '@page': item.id }}),
      };
    });

    const actions = (
      <Button shape="circle" size="large" onClick={() => router.push({ location, query: { ...query, '@new-page': null }})}>
        <Icon type="plus" />
      </Button>
    );

    return (
      <Sidebar
        {...this.props}
        activePage="Seiten"
        items={items}
        actions={actions}
        filter={undefined}
        states={states}
      />
    );
  }
}

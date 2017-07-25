import React, { Component } from 'react';
import { AltSwitch, AltRoute, withRouter } from 'olymp-router';
import { SplitView, Sidebar, List } from 'olymp-ui';
import { PageViews } from './views';

@withRouter
class AnalyticsRoute extends Component {
  render() {
    const { router, pathname, query } = this.props;

    return (
      <SplitView background>
        <Sidebar
          isOpen
          padding={0}
          title="Statistik"
          subtitle="Google-Analytics-Daten auswerten"
        >
          <List.Item
            active={!query['@analytics']}
            label="Seitenaufrufe"
            onClick={() =>
              router.push({
                pathname,
                query: { ...query, ['@analytics']: null },
              })}
            key="page-views"
          />
          <List.Item
            active={query['@analytics'] === 'duration'}
            label="Verweildauer"
            onClick={() =>
              router.push({
                pathname,
                query: { ...query, ['@analytics']: 'duration' },
              })}
            key="duration"
          />
          <List.Item
            active={query['@analytics'] === 'visitors'}
            label="Besucher"
            onClick={() =>
              router.push({
                pathname,
                query: { ...query, ['@analytics']: 'visitors' },
              })}
            key="visitors"
          />
          <List.Item
            active={query['@analytics'] === 'location'}
            label="Herkunft"
            onClick={() =>
              router.push({
                pathname,
                query: { ...query, ['@analytics']: 'location' },
              })}
            key="location"
          />
          <List.Item
            active={query['@analytics'] === 'individual'}
            label="Individuell"
            onClick={() =>
              router.push({
                pathname,
                query: { ...query, ['@analytics']: 'individual' },
              })}
            key="individual"
          />
        </Sidebar>
        <AltSwitch>
          <AltRoute
            match={query['@user'] !== undefined}
            render={() => <PageViews />}
          />
          <AltRoute render={() => <PageViews />} />
        </AltSwitch>
      </SplitView>
    );
  }
}
export default AnalyticsRoute;

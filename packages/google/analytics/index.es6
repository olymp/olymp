import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { SplitView, Sidebar, List, DateRangeEditor } from 'olymp-ui';
import { Form, Button } from 'antd';
import { subDays } from 'date-fns';
import { Charts } from './views';
import { PaddingContainer, MetricSelect } from './components';

const initState = {
  metrics: ['PAGEVIEWS', 'SESSIONS'],
  range: [subDays(new Date(), 180).getUTCDate(), new Date().getUTCDate()],
  dimensions: ['YEAR_MONTH'],
  sorts: ['YEAR_MONTH_ASC'],
  chart: 'line',
  dimensions2: ['PAGE_PATH'],
  sorts2: ['PAGEVIEWS_DESC'],
  chart2: 'barVertical',
};

@withRouter
@Form.create()
export default class Analytics extends Component {
  ok = () => {
    const { router, pathname, query, form } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        router.push({
          pathname,
          query: { ...query, ...values },
        });
      }
    });
  };

  render() {
    const { router, pathname, query, form } = this.props;
    const { getFieldDecorator } = form;

    const data = { ...initState, ...query };
    if (!Array.isArray(data.metrics)) {
      data.metrics = [data.metrics];
    }
    if (!Array.isArray(data.dimensions)) {
      data.dimensions = [data.dimensions];
    }
    if (!Array.isArray(data.dimensions2)) {
      data.dimensions2 = [data.dimensions2];
    }
    if (!Array.isArray(data.sorts)) {
      data.sorts = [data.sorts];
    }
    if (!Array.isArray(data.sorts2)) {
      data.sorts2 = [data.sorts2];
    }
    data.range = [parseInt(data.range[0], 10), parseInt(data.range[1], 10)];

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
                query: { '@analytics': null, ...initState },
              })}
            key="page-views"
          />
          <List.Item
            active={query['@analytics'] === 'duration'}
            label="Verweildauer"
            onClick={() =>
              router.push({
                pathname,
                query: {
                  '@analytics': 'duration',
                  ...initState,
                  metrics: ['TIME_ON_PAGE', 'AVG_TIME_ON_PAGE'],
                  sorts2: ['TIME_ON_PAGE_DESC'],
                },
              })}
            key="duration"
          />
          <List.Item
            active={query['@analytics'] === 'visitors'}
            label="Besucher"
            onClick={() =>
              router.push({
                pathname,
                query: {
                  '@analytics': 'visitors',
                  ...initState,
                  metrics: ['USERS', 'NEW_USERS'],
                  sorts2: ['USERS_DESC'],
                },
              })}
            key="visitors"
          />
          <List.Item
            active={query['@analytics'] === 'location'}
            label="Herkunft"
            onClick={() =>
              router.push({
                pathname,
                query: {
                  '@analytics': 'location',
                  ...initState,
                  metrics: ['USERS'],
                  dimensions: ['REGION'],
                  dimensions2: ['CITY'],
                  sorts: ['USERS_DESC'],
                  sorts2: ['USERS_DESC'],
                  chart: 'pie',
                  chart2: 'barVertical',
                },
              })}
            key="location"
          />
          <List.Item
            active={query['@analytics'] === 'devices'}
            label="Geräte"
            onClick={() =>
              router.push({
                pathname,
                query: {
                  '@analytics': 'devices',
                  ...initState,
                  metrics: ['USERS'],
                  dimensions: ['DEVICE_CATEGORY'],
                  sorts: ['USERS_DESC'],
                  chart: 'pie',
                  chart2: 'none',
                },
              })}
            key="devices"
          />
        </Sidebar>

        <Charts {...data} />

        <Sidebar
          right
          title="Einstellungen"
          subtitle="Einstellungen für alle Charts"
        >
          <PaddingContainer>
            <Form.Item key="metrics" label="Messwerte">
              {getFieldDecorator('metrics', {
                initialValue: data.metrics,
                rules: [
                  {
                    required: true,
                    message: 'Bitte geben Sie mindestens einen Messwert an',
                  },
                ],
              })(<MetricSelect />)}
            </Form.Item>
            <Form.Item key="range" label="Zeitraum">
              {getFieldDecorator('range', {
                initialValue: data.range,
                rules: [
                  {
                    required: true,
                    message: 'Bitte geben Sie einen Zeitraum an',
                  },
                ],
              })(<DateRangeEditor format="DD.MM.YYYY" />)}
            </Form.Item>

            <Button type="primary" size="large" onClick={this.ok}>
              Werte übernehmen
            </Button>
          </PaddingContainer>
        </Sidebar>
      </SplitView>
    );
  }
}

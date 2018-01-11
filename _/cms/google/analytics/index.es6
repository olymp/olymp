import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { DateRangeEditor } from 'olymp-ui';
import { Sidebar, Drawer } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import {
  FaBarChart,
  FaCogs,
  FaClockO,
  FaCube,
  FaUsers,
  FaNeuter,
  FaMobile,
} from 'olymp-icons';
import { Form, Button } from 'antd';
import { subDays } from 'date-fns';
import { compose, withState } from 'recompose';
import { Charts } from './views';
import { MetricSelect } from './components';

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

const enhance = compose(
  withRouter,
  withState('settings', 'setSettings'),
  Form.create(),
);

@enhance
export default class Analytics extends Component {
  ok = () => {
    const { router, pathname, query, form, setSettings } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        setSettings(false);
        router.push({
          pathname,
          query: { ...query, ...values },
        });
      }
    });
  };

  render() {
    const { router, pathname, query, form, settings, setSettings } = this.props;
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
      <Sidebar
        left={72}
        menu={
          <Menu
            header={
              <Menu.Item icon={<FaBarChart />} large>
                Statistik
                <small>Google-Analytics-Daten auswerten</small>
              </Menu.Item>
            }
          >
            <Menu.Item
              icon={<FaCube />}
              onClick={() =>
                router.push({
                  pathname,
                  query: { '@analytics': null, ...initState },
                })
              }
              active={!query['@analytics']}
            >
              Seitenaufrufe
            </Menu.Item>
            <Menu.Item
              icon={<FaClockO />}
              onClick={() =>
                router.push({
                  pathname,
                  query: {
                    '@analytics': 'duration',
                    ...initState,
                    metrics: ['TIME_ON_PAGE', 'AVG_TIME_ON_PAGE'],
                    sorts2: ['TIME_ON_PAGE_DESC'],
                  },
                })
              }
              active={query['@analytics'] === 'duration'}
            >
              Verweildauer
            </Menu.Item>
            <Menu.Item
              icon={<FaUsers />}
              active={query['@analytics'] === 'visitors'}
              onClick={() =>
                router.push({
                  pathname,
                  query: {
                    '@analytics': 'visitors',
                    ...initState,
                    metrics: ['USERS', 'NEW_USERS'],
                    sorts2: ['USERS_DESC'],
                  },
                })
              }
              key="visitors"
            >
              Besucher
            </Menu.Item>
            <Menu.Item
              icon={<FaNeuter />}
              active={query['@analytics'] === 'location'}
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
                })
              }
              key="location"
            >
              Herkunft
            </Menu.Item>
            <Menu.Item
              icon={<FaMobile />}
              active={query['@analytics'] === 'devices'}
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
                })
              }
            >
              Geräte
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              icon={<FaCogs />}
              active={query['@analytics'] === 'devices'}
              onClick={() => setSettings(true)}
            >
              Einstellungen
            </Menu.Item>
          </Menu>
        }
      >
        <Charts {...data} />

        <Drawer open={!!settings} onClose={() => setSettings(false)} right>
          <Menu
            header={
              <Menu.Item icon={<FaCogs />} large>
                Einstellungen
                <small>Einstellungen für alle Charts</small>
              </Menu.Item>
            }
            headerColor
            headerInverted
          >
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
          </Menu>
        </Drawer>
      </Sidebar>
    );
  }
}

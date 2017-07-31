import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { SplitView, Sidebar, List, DateRangeEditor } from 'olymp-ui';
import { Form, Button } from 'antd';
import moment from 'moment';
import { Charts } from './views';
import { PaddingContainer, MetricSelect } from './components';

const initState = {
  metrics: ['PAGEVIEWS', 'SESSIONS'],
  range: [moment().subtract(180, 'days').valueOf(), moment().valueOf()],
  dimensions: ['YEAR_MONTH'],
  sorts: ['YEAR_MONTH_ASC'],
  chart: 'line',
  dimensions2: ['PAGE_PATH'],
  sorts2: ['PAGEVIEWS_DESC'],
  chart2: 'barVertical',
  active: 'pageviews',
};

@withRouter
@Form.create()
export default class Analytics extends Component {
  state = initState;

  ok = () => {
    const { form } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        this.setState(values);
      }
    });
  };

  render() {
    const { router, pathname, query, form } = this.props;
    const { metrics, range, active } = this.state;
    const { getFieldDecorator } = form;

    return (
      <SplitView background>
        <Sidebar
          isOpen
          padding={0}
          title="Statistik"
          subtitle="Google-Analytics-Daten auswerten"
        >
          <List.Item
            active={active === 'pageviews'}
            label="Seitenaufrufe"
            onClick={() => this.setState(initState)}
            key="page-views"
          />
          <List.Item
            active={active === 'duration'}
            label="Verweildauer"
            onClick={() =>
              this.setState({
                ...initState,
                metrics: ['TIME_ON_PAGE', 'AVG_TIME_ON_PAGE'],
                sorts2: ['TIME_ON_PAGE_DESC'],
                active: 'duration',
              })}
            key="duration"
          />
          <List.Item
            active={active === 'visitors'}
            label="Besucher"
            onClick={() =>
              this.setState({
                ...initState,
                metrics: ['USERS', 'NEW_USERS'],
                sorts2: ['USERS_DESC'],
                active: 'visitors',
              })}
            key="visitors"
          />
        </Sidebar>

        <Charts {...this.state} />

        <Sidebar
          right
          title="Einstellungen"
          subtitle="Einstellungen für alle Charts"
        >
          <PaddingContainer>
            <Form.Item key="metrics" label="Messwerte">
              {getFieldDecorator('metrics', {
                initialValue: metrics,
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
                initialValue: range,
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

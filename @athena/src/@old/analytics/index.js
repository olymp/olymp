import React, {Component, PropTypes} from 'react';
import moment from "moment";
import Static from './static';
import {DateRange} from './../../edits';
import Editors from './main.less';
var firstRun = true;

export default class Analytics extends Component {
  static contextTypes = {
    apiClient: React.PropTypes.object.isRequired
  };

  state = {
    loaded: false,
    query: {},
    chart: {}
  };

  componentDidMount() {
    this.setQuery();
  }

  componentDidUpdate() {
    if (firstRun) {
      // Embed API laden
      (function (w, d, s, g, js, fs) {
        g = w.gapi || (w.gapi = {});
        g.analytics = {
          q: [], ready: function (f) {
            this.q.push(f);
          }
        };
        js = d.createElement(s);
        fs = d.getElementsByTagName(s)[0];
        js.src = 'https://apis.google.com/js/platform.js';
        fs.parentNode.insertBefore(js, fs);
        js.onload = function () {
          g.load('analytics');
        };
      }(window, document, 'script'));

      // Auth
      this.auth();
    }

    firstRun = false;
  }

  auth() {
    const {apiClient} = this.context;

    apiClient.get('/google-analytics').then(response=> {
      gapi.analytics.ready(()=> {
        gapi.analytics.auth.authorize({
          'serverAuth': {
            'access_token': response.token
          }
        });

        this.setState({
          loaded: true
        });
      })
    })
  }

  _(value) {
    let obj = {
      label: value,
      format: x=>x
    };

    switch (value) {
      case 'ga:date':
        obj.label = 'Datum';
        obj.format = x=>moment(x).format('DD.MM.YYYY');
        break;

      case 'ga:sessions':
        obj.label = 'Sitzungen';
        break;

      case 'ga:users':
        obj.label = 'Benutzer';
        break;

      case 'ga:pageviews':
        obj.label = 'Seitenaufrufe';
        break;

      case 'ga:pagePathLevel1':
        obj.label = 'Rubrik';
        break;
    }

    return obj;
  }

  setQuery(metrics) {
    const {query} = this.state;
    let _query, chart = {};

    switch (metrics) {
      case('ga:sessions'):
        _query = {
          metrics: ['ga:sessions'],
          dimensions: ['ga:date']
        };
        chart.type = 'LINE';
        break;

      case('ga:users'):
        _query = {
          metrics: ['ga:users'],
          dimensions: ['ga:date']
        };
        chart.type = 'LINE';
        break;

      default:
        _query = {
          metrics: ['ga:pageviews'],
          sort: '-ga:pageviews',
          dimensions: ['ga:pagePathLevel1'],
          filters: 'ga:pagePathLevel1!=/',
          maxResults: 10
        };
        chart.type = 'PIE';
        break;
    }

    _query.ids = 'ga:121893883';
    _query['start-date'] = query['start-date'] || moment().subtract(30, 'days').format('YYYY-MM-DD');
    _query['end-date'] = query['end-date'] || moment().subtract(1, 'days').format('YYYY-MM-DD');

    this.setState({query: _query, chart: chart});
  }

  updateDates(date) {
    const {query} = this.state;

    this.setState({
      query: {
        ...query,
        'start-date': date && date.dateStart ? moment(date.dateStart).format('YYYY-MM-DD') : query['start-date'],
        'end-date': date && date.dateEnd ? moment(date.dateEnd).format('YYYY-MM-DD') : query['end-date']
      }
    });
  }

  render() {
    const {loaded, query, chart} = this.state;

    return (
      <div className="ui divided equal height grid full-h" style={{margin: 0}}>
        <div className="two wide column full-h" style={{padding: 0, backgroundColor: '#F6F7F9', left: 0}}>
          <div className="ui basic segment full-h">
            <a className="ui red big fluid label">Under Construction</a>

            <div className="ui vertical fluid menu">
              <MenuItem setQuery={x=>this.setQuery(x)} metric={'ga:pageviews'} _={x=>this._(x)}/>
              <MenuItem setQuery={x=>this.setQuery(x)} metric={'ga:sessions'} _={x=>this._(x)}/>
              <MenuItem setQuery={x=>this.setQuery(x)} metric={'ga:users'} _={x=>this._(x)}/>
            </div>

            <div className="ui vertical fluid menu">
              <DateRange
                value={{dateStart: moment(query['start-date']).toDate(), dateEnd: moment(query['end-date']).toDate()}}
                updateValue={x=>this.updateDates(x)}/>
            </div>

            <div className="ui vertical fluid menu">
              <a className={"teal item" + (chart.type == 'PIE' ? ' active' : '')}
                 onClick={()=>this.setState({chart: {type: 'PIE'}})}>Kuchendiagramm</a>
              <a className={"teal item" + (chart.type == 'LINE' ? ' active' : '')}
                 onClick={()=>this.setState({chart: {type: 'LINE'}})}>Liniendiagramm</a>
            </div>

            <a className="ui red big fluid label">Under Construction</a>
          </div>
        </div>
        <div className="fourteen wide column no-spacing full-h"
             style={{padding: 0, overflowY:'scroll'}}>
          <div className="ui container">
            {loaded ? (
              <Static query={query} chart={chart} _={x=>this._(x)}/>
            ) : (
              <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class MenuItem extends Component {
  state = {
    active: false
  };

  setQuery() {
    const {setQuery, metric} = this.props;
    const {active} = this.state;

    setQuery(metric);
    this.setState({active: !active});
  }

  render() {
    const {_, metric} = this.props;
    const {active} = this.state;

    return (
      <div className={"teal item" + (active ? ' active' : '')}>
        <a href="javascript:;" onClick={()=>this.setQuery()}>{_(metric).label}</a>

        {false && active ? (
          <div className="menu">
            <a className="item">ga:users</a>
            <a className="item">ga:newUsers</a>
            <a className="item">ga:percentNewSessions</a>
            <span className="item" style={{textDecoration: 'line-through'}}>ga:1dayUsers</span>
            <span className="item" style={{textDecoration: 'line-through'}}>ga:7dayUsers</span>
            <span className="item" style={{textDecoration: 'line-through'}}>ga:14dayUsers</span>
            <span className="item" style={{textDecoration: 'line-through'}}>ga:30dayUsers</span>
            <a className="item">ga:sessionsPerUser</a>
          </div>
        ) : null}
      </div>
    );
  }
}

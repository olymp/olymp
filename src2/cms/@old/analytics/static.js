import React, {Component, PropTypes} from 'react';
import moment from "moment";
import {isEqual} from 'lodash';

class Stats extends Component {
  state = {
    header: undefined,
    data: undefined,
    sortBy: undefined,
    sortAsc: true
  };

  componentDidMount() {
    this.change()
  }

  componentDidUpdate(prevProps, prevState) {
    const {query} = this.props;
    const {sortBy, sortAsc} = this.state;

    if (!isEqual(prevProps.query, query) || sortBy != prevState.sortBy || sortAsc != prevState.sortAsc) {
      this.change()
    }
  }

  change() {
    const {sortBy, sortAsc} = this.state;
    const {query, chart} = this.props;

    gapi.analytics.ready(()=> {
      new gapi.analytics.googleCharts.DataChart({
        query: query,
        chart: {
          'container': 'stats-container',
          'type': chart.type || 'PIE',
          'options': {
            'width': '100%',
            ...chart.options
          }
        }
      }).execute();


      // NEU
      const _sort = sortBy && (query.metrics.indexOf(sortBy) >= 0 || query.dimensions.indexOf(sortBy) >= 0) ? sortBy : query.metrics[0];
      var report = new gapi.analytics.report.Data({
        query: {
          ...query,
          sort: (!sortAsc ? '' : '-') + _sort
        }
      });

      report.on('success', (res)=> {
        this.setState({
          header: res.columnHeaders,
          data: res.rows,
          sortBy: _sort
        });
      });

      report.execute();
    })
  }

  changeSort(field) {
    const {sortBy, sortAsc} = this.state;

    this.setState({
      sortBy: field,
      sortAsc: sortBy != field ? true : !sortAsc
    });
  }

  render() {
    const {header, data, sortBy, sortAsc} = this.state;
    const {_} = this.props;

    return <div>
      <div id="stats-container"></div>

      <table className="ui celled table">
        <thead>
        <tr>
          {(header || []).map(item=>(
            <th key={item.name}>
              <a href="javascript:;" onClick={()=>this.changeSort(item.name)}>
                {_(item.name).label}
                {sortBy == item.name ? <i className={"caret icon" + ( !sortAsc ? " up" : " down" )}></i> : null}
              </a>
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {(data || []).map((items, index)=><tr key={index}>{items.map((item, index)=>(
          <td key={item}>
            {_(header[index].name).format(item)}
          </td>
        ))}</tr>)}
        </tbody>
      </table>
    </div>;
  }
}

export default Stats;

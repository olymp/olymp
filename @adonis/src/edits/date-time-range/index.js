import React from "react";
import moment from "moment";
import Date from "../date";
import Time from "../time";

export default class DateRange extends React.Component {
  setDateStart = dateStart => {
    const {value} = this.props;

    this.props.updateValue({...value, dateStart})
  };

  setDateStartDate = dateStart => {
    const {value} = this.props;

    var newDate = !value.dateStart && dateStart ? moment(dateStart).startOf('day').add(moment().hours(), 'hours').format() : dateStart;
    this.setDateStart(newDate);
  };

  setDateEnd = dateEnd => {
    const {value} = this.props;

    this.props.updateValue({...value, dateEnd});
  };

  setDateEndDate = dateEnd => {
    const {value} = this.props;

    var newDate = !value.dateEnd && dateEnd ? moment(dateEnd).startOf('day').add(23, 'hours').add(59, 'minutes').format() : dateEnd;
    this.setDateEnd(newDate);
  };

  render() {
    const {value} = this.props;
    const dateStart = value ? value.dateStart : undefined;
    const dateEnd = value ? value.dateEnd : undefined;

    return (
      <div style={{position: 'relative'}}>
        <Date value={dateStart} updateValue={this.setDateStartDate}
              style={{float: 'left', width: '30%', paddingRight: '5px'}}/>
        <Time value={dateStart} updateValue={this.setDateStart} style={{float: 'left', width: '15%'}}/>
        <span style={{float: 'left', width: '10%', textAlign: 'center', paddingTop: '12px'}}>bis</span>
        <Time value={dateEnd} updateValue={this.setDateEnd} style={{float: 'left', width: '15%', paddingRight: '5px'}}
              anchor={dateStart}/>
        <Date value={dateEnd} updateValue={this.setDateEndDate} style={{float: 'left', width: '30%'}} anchor={dateStart}/>
      </div>
    );
  }
}

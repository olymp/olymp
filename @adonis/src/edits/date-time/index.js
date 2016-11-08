import React from "react";
import Date from "../date";
import Time from "../time";

export default class DateTime extends React.Component {
  setDateStart = dateStart => {
    const {value} = this.props;
    this.props.updateValue(dateStart)
  };

  render() {
    const {value} = this.props;

    return (
      <div style={{position: 'relative'}}>
        <Date value={value} updateValue={this.setDateStart} style={{float: 'left', width: '65%', paddingRight: '5px'}} />
        <Time value={value} updateValue={this.setDateStart} style={{float: 'left', width: '35%'}} />
      </div>
    );
  }

}

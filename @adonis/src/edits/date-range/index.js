import React from "react";
import Date from "../date";

export default class DateRange extends React.Component {
  setDateStart = dateStart => {
    const {value, updateValue} = this.props;

    updateValue({...value, dateStart});
  };

  setDateEnd = dateEnd => {
    const {value, updateValue} = this.props;

    updateValue({...value, dateEnd});
  };

  render() {
    const {value} = this.props;
    const dateStart = value ? value.dateStart : undefined;
    const dateEnd = value ? value.dateEnd : undefined;

    return (
      <div style={{position: 'relative'}}>
        <Date value={dateStart} placeholder="Von" updateValue={this.setDateStart}
              style={{float: 'left', width: '50%', padding: '.25em'}}/>
        <Date value={dateEnd} placeholder="Bis" updateValue={this.setDateEnd} style={{float: 'left', width: '50%', padding: '.25em'}} anchor={dateStart}/>
      </div>
    );
  }
}

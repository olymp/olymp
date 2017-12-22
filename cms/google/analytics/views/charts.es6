import React, { Component } from 'react';
import { Container } from '../components';
import Chart from './chart-wrapper';

export default class ChartsView extends Component {
  state = {
    dimensions: undefined,
    selected: [],
  };

  setSelection = selection => {
    const { selected } = this.state;

    if (selection === false) {
      this.setState({ selected: [] });
    } else {
      const index = selected.findIndex(s => s === selection);

      if (index === -1) {
        this.setState({ selected: [...selected, selection] });
      } else {
        selected.splice(index, 1);
        this.setState({ selected });
      }
    }
  };

  render() {
    const {
      metrics,
      range,
      dimensions,
      sorts,
      chart,
      sorts2,
      chart2,
    } = this.props;
    const { selected } = this.state;
    const dimensions2 = this.state.dimensions || this.props.dimensions2;
    const data = {
      metrics,
      range,
      selected,
      changeRange: range => this.setState({ range }),
    };

    return (
      <Container>
        {chart !== 'none' &&
          <Chart
            {...data}
            dimensions={[
              ...dimensions,
              ...(selected && selected.length ? dimensions2 : []),
            ]}
            sorts={sorts}
            chart={chart}
            fullSize={chart2 === 'none'}
          />}

        {chart2 !== 'none' &&
          <Chart
            {...data}
            dimensions={dimensions2}
            changeDimensions={dimensions => this.setState({ dimensions })}
            sorts={sorts2}
            chart={chart2}
            onSelect={this.setSelection}
            fullSize={chart === 'none'}
          />}
      </Container>
    );
  }
}

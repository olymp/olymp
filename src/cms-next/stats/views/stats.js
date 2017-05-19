import React, { Component } from 'react';
import { Container, Placeholder, Sidebar, SplitView } from 'olymp/ui';

class Stats extends Component {
  render() {
    const { deviceWidth } = this.props;

    return (
      <SplitView deviceWidth={deviceWidth}>
        <Sidebar
          title="links"
          subtitle="links"
        >
        </Sidebar>

        <Container>
          {/* <Placeholder>Vorschau</Placeholder> */}
        </Container>

        <Sidebar
          right
          title="rechts"
          subtitle="rechts"
        >
        </Sidebar>
      </SplitView>
    );
  }
}
export default Stats;

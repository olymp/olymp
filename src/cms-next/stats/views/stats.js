import React, { Component } from 'react';
import { Container, Placeholder, Sidebar } from 'olymp/ui';
// import { SplitView } from '../../style';

class Templates extends Component {
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
export default Templates;

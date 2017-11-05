import React, { Component } from 'react';
import { Container, Placeholder, Sidebar, SplitView, List } from 'olymp-ui';

class Settings extends Component {
  render() {
    const { pathname } = this.props;

    return (
      <SplitView>
        <Sidebar title="Einstellungen" borderLess>
          <List.Item
            to={{ pathname, query: { '@totp': null } }}
            label="Profil"
          />
          <List.Item
            to={{ pathname, query: { '@totp': null } }}
            label="Zwei-Faktor-Authentifizierung"
          />
        </Sidebar>

        <Container>
          <Placeholder>Einstellungen</Placeholder>
        </Container>

        <Sidebar right title="rechts" subtitle="rechts" />
      </SplitView>
    );
  }
}
export default Settings;

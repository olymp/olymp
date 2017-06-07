import React from 'react';
import { SplitView, Sidebar, Container, List } from 'olymp-ui';
import AuthProfile from '../components';

const AuthProfileSplitView = ({ onClose, form, onOk, auth, extraFields, pathname, deviceWidth }) => (
  <SplitView deviceWidth={deviceWidth}>
    <Sidebar
      title="links"
      subtitle="links"
    >
      <List.Item to={{ pathname, query: { '@totp': null } }} label="Allgemeine Informationen" />
      <List.Item to={{ pathname, query: { '@totp': null } }} label="Zwei-Faktor-Authentifizierung" />
    </Sidebar>

    <Container>
      <AuthProfile.Extra pathname={pathname} />
    </Container>

    <Sidebar
      right
      title={auth.user.name}
      subtitle="Profil bearbeiten"
      padding="1rem"
    >
      <AuthProfile.Form form={form} extraFields={extraFields} auth={auth} />
    </Sidebar>
  </SplitView>
);
export default AuthProfile(AuthProfileSplitView);

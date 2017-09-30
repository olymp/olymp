import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { SplitView, Sidebar, List } from 'olymp-ui';
import AuthProfile from './profile';

@graphql(
  gql`
    query userList {
      users: userList {
        id
        name
        email
        isAdmin
      }
    }
  `,
)
export default class AuthUsers extends Component {
  state = { user: undefined };

  render() {
    const { extraFields, data } = this.props;
    const { user } = this.state;
    const users = data.users || [];

    return (
      <SplitView>
        <Sidebar title="Benutzer" subtitle="Benutzer bearbeiten">
          {users.map(user => (
            <List.Item
              onClick={() => this.setState({ user })}
              label={user.name}
              description={user.isAdmin ? 'Administrator' : 'Benutzer'}
              key={user.id}
            />
          ))}
        </Sidebar>

        <AuthProfile user={user} extraFields={extraFields} />
      </SplitView>
    );
  }
}

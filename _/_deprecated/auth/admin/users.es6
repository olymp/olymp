import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Sidebar, Menu, Avatar, Container } from 'olymp-fela';
import { FaUsers } from 'olymp-icons';
import { compose, withState } from 'recompose';
import AuthProfile from './profile';

const enhance = compose(
  graphql(
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
  ),
  withState('user', 'setUser', {}),
);

@enhance
export default class AuthUsers extends Component {
  render() {
    const { extraFields, data, query, user, setUser } = this.props;
    const users = data.users || [];

    return (
      <Sidebar
        left={72}
        menu={
          <Menu
            header={
              <Menu.Item icon={<FaUsers />} large>
                Benutzerverwaltung
              </Menu.Item>
            }
          >
            {users.map(u => (
              <Menu.Item
                key={u.id}
                onClick={() => setUser(u)}
                icon={
                  <Avatar
                    email={u.email}
                    name={u.name}
                    size={40}
                    default="blank"
                  />
                }
                active={u.id === (user.id || query['@users'])}
                large
              >
                {u.name}
                <small>{u.isAdmin ? 'Administrator' : 'Benutzer'}</small>
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <AuthProfile
          user={user.id ? user : undefined}
          extraFields={extraFields}
        />
      </Sidebar>
    );
  }
}

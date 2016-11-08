import React, { Component, PropTypes } from 'react';
import { Check } from '../../../edits';
import { Link } from 'react-router';
import { observer } from 'mobx-react';

class User extends Component {
  state = {
    willDelete: false,
  };

  del() {
    this.setState({ willDelete: false });
    this.props.del();
  }

  render() {
    const { id, image, name, description, isAdmin, isActive, isMyself, patch, del } = this.props;
    const { willDelete } = this.state;

    return (
      <tr key={id} className={isMyself ? 'warning' : ''}>
        <td>
          <h4 className="ui image header">
            {image ? <img src={image.url} className="ui mini rounded image" /> : null}

            <div className="content">
              {name}
              <div className="sub header">
                {description}
              </div>
            </div>
          </h4>
        </td>
        <td className="center aligned">
          <Check value={isAdmin} updateValue={(value) => patch({ isAdmin: value })}
            disabled={isMyself}
          />
        </td>
        <td className="center aligned">
          <Check value={isActive} updateValue={(value) => patch({ isActive: value })}
            disabled={isMyself}
          />
        </td>
        <td className="right aligned">
          <Link to={'/c/user/' + id} className="ui icon primary button">
            <i className="edit icon"></i>
          </Link>
        </td>
        {!isMyself ?
          (
            <td>
              {!willDelete ? (
                <button className="ui icon red button" onClick={() => this.setState({ willDelete: true })}>
                  <i className="trash icon"></i>
                </button>
              ) : (
                <button className="ui red button" onClick={::this.del}>
                  Wirklich?
                </button>
              )}
            </td>
          ) : <td />}
      </tr>
    );
  }
}

export default class Users extends Component {
  render() {
    const { children, users, userId, edit, del } = this.props;

    if (!users) {
      return <div className="ui vertical segment loading" />;
    }
    var userMap = users.map(user => <User {...user} isMyself={userId == user.id} del={() => del(user)}
      patch={patch => edit({ ...user, ...patch })} key={user.id}
    />);

    return (
      <div className="ui container">
        <div className="ui vertical segment">
          <table className="ui very basic table">
            <thead>
            <tr>
              <th></th>
              <th className="center aligned">Admin</th>
              <th className="center aligned">Aktiv</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {userMap}
            </tbody>
            <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th width={50}></th>
              <th width={150}>
                <Link to={"/c/user/new"} className="ui icon green button">
                  <i className="plus icon"></i>
                </Link>
              </th>
            </tr>
            </tfoot>
          </table>
          {children}
        </div>
      </div>
    );
  }
}

//export default observer(Users);

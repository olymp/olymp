import React, {Component, PropTypes} from "react";
import UserDetail from './../detail/detail-modal';
import AddDetail from './../../auth/register-modal';
import View from './list';
import {observer} from 'mobx-react';

class UsersWrapper extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  static onEnter(next, transition, store) {
    if (!store.auth.user.isAdmin) {
      transition("/error");
    }
  }

  componentDidMount() {
    this.context.store.auth.loadUsers();
  }

  edit = user => {
    const {auth} = this.context.store;

    auth.save(user).then(newUser => {
      window.addNotification({
        message: "Die Änderungen an " + newUser.name + " wurden gespeichert.",
        level: "success",
        title: "Änderungen gespeichert"
      });
    }).catch(error=>console.error(error));

    this.close();
  };

  add = user => {
    const {store, router} = this.context;

    const name = user.name;
    const email = user.email;
    const password = user.password;
    const password2 = user.password2;

    if (password != password2) {
      window.addNotification({
        message: "Die Passwörter stimmen nicht überein.",
        level: "danger",
        title: "Fehler bei Registrierung"
      });
    } else if (!password) {
      window.addNotification({
        message: "Es wurde kein Passwort angegeben.",
        level: "danger",
        title: "Fehler bei Registrierung"
      });
    } else if (!email) {
      window.addNotification({
        message: "Es wurde keine E-Mail-Adresse angegeben.",
        level: "danger",
        title: "Fehler bei Registrierung"
      });
    } else if (!name) {
      window.addNotification({
        message: "Es wurde kein Name angegeben.",
        level: "danger",
        title: "Fehler bei Registrierung"
      });
    } else {
      store.auth.register(name, email, password, true).then(user=> {
        router.push('/c/users');
        window.addNotification({
          message: "Erfolgreich angelegt!",
          level: "success",
          title: "User-Anlegen erfolgreich"
        });


      }).catch(err=> {
        window.addNotification({
          message: "User konnte nicht angelegt werden, bitte erneut versuchen!",
          level: "danger",
          title: "User-Anlegen fehlgeschlagen"
        });
      });
    }

    this.close();
  };

  del = user => {
    const {auth} = this.context.store;

    auth.del(user.id).then(() => {
      window.addNotification({
        message: "Benutzer " + user.name + " wurde gelöscht.",
        level: "success",
        title: "Benutzer gelöscht!"
      });
    }).catch(error=>console.error(error));
  };

  close = ()=> {
    const {push} = this.context.router;

    push({pathname: '/c/users', query: {...this.props.location.query}});
  };

  render() {
    const {auth} = this.context.store;
    const {params} = this.props;

    return auth.user && auth.user.id ? (
      <View users={auth.users} userId={auth.user.id} edit={this.edit} del={this.del}>
        {params.id && params.id !== "new" ?
          <UserDetail {...this.props}
            save={this.edit}
            close={this.close}/> :
          null
        }
        {params.id === "new" ?
          <AddDetail {...this.props}
            save={this.add}
            close={this.close}/> :
          null
        }
      </View>
    ) : <div />;
  }
}

export default observer(UsersWrapper);

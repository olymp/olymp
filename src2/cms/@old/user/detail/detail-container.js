import React, {Component, PropTypes, Children} from 'react';
import User from "./detail";

export default class App extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.context.store.auth.loadOne(this.context.store.auth.user.id).then(user => {
      this.setState({user});
    });
  }

  patch(patch) {
    const {user} = this.state;
    this.setState({user: {...user, ...patch}});
  }

  save() {
    const {user} = this.state;
    const {store} = this.context;

    if (user.password && user.password != user.password2) {
      window.addNotification({
        message: "Die Passwörter stimmen nicht überein.",
        level: "danger",
        title: "Fehler bei Änderung"
      });
    } else {
      delete user.password2;
      store.auth.save(user).then(newUser => {
        window.addNotification({
          message: "Die Änderungen an " + newUser.name + " wurden gespeichert.",
          level: "success",
          title: "Änderungen gespeichert"
        });
      }).catch(error=>console.error(error));
    }
  }

  render() {
    const {user, loading} = this.state;

    return (
      <div className={"ui container" + (loading ? " loading" : "")}>
        <User {...user} patch={::this.patch}>
          <button className={"ui large green fluid button" + (loading ? ' loading' : '')} onClick={::this.save}>
            Speichern
          </button>
        </User>
      </div>
    );
  }
}

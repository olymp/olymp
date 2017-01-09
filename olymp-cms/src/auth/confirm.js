import React, { Component } from 'react';

export default class AuthLogin extends Component {
  state = {
    email: null,
    password: null
  };
  confirm = key => {
    this.props.auth.confirm(key).then(user => {
      window.addSuccess('Registrierung abgeschlossen', 'Sie können sich jetzt anmelden');
      this.props.onDone({ email: user.email });
    }).catch(err => {
      window.addDanger('Fehler', err.message);
    })
  }
  componentDidMount() {
    if (this.props.activationKey){
      this.confirm(this.props.activationKey);
    }
  }
  componentWillUpdate(props) {
    if (props.activationKey && !this.props.activationKey){
      this.confirm(props.activationKey);
    }
  }
  render() {
    const { onClose, activationKey } = this.props;

    return (
      <Modal title={'Bestätigen'} onClose={onClose}>
        {activationKey ? <p>
          Wird bestätigt ...
        </p> : null}
        {!activationKey ? <p>
          Eine E-Mail wurde von diego.one an Sie verschickt. Mit einem Klick auf den Link in dieser E-Mail bestätigen Sie die Registrierung, dann können Sie loslegen.
        </p> : null}
      </Modal>
    );
  }
}

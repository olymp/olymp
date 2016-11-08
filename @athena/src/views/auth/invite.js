import React, {Component, PropTypes} from 'react';

export default class AuthInvite extends Component {
  state = {
    email: null
  };
  save = () => {
    const { email, password } = this.state;
    this.props.auth.login(email, password).then(user => {
      window.addSuccess('Erfolgreich angemeldet', `Wilkommen, ${user.displayName}`);
      this.props.onClose();
      this.props.limits();
    }).catch(err => window.addDanger('Anmeldung fehlgeschlagen', err.message))
  }
  render() {
    const { onClose } = this.props;
    const { email } = this.state;

    return (
      <Modal title="Einladung verschicken" onClose={onClose}>
        <form className="uk-form uk-form-horizontal">
          <div className="uk-form-row">
            <label className="uk-form-label" for="email">E-Mail</label>
            <div className="uk-form-controls">
              <input id="email" type="text" name="email" placeholder="max@mustermann.de" value={email||''} onChange={v => this.setState({email: v.target.value || null})} className="uk-width-1-1"/>
            </div>
          </div>
        </form>
        <div className="uk-modal-footer uk-text-right">
          <button type="button" className="uk-button" onClick={onClose}>Abbruch</button>
          <button type="button" disabled={!email} className="uk-button uk-button-primary uk-margin-small-left" onClick={this.save}>Einladen</button>
        </div>
      </Modal>
    );
  }
}

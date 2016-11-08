import React, { Component, PropTypes } from 'react';
/*import { observer, LoadingSpinner, Modal, Recaptcha, GeoSuggest, Select2, purify } from 'components';
import { FACHGEBIETE, TITEL, EINRICHTUNGSARTEN } from 'constants';
import humanparser from '../../utils/humanparser';*/

const mandatory = [
  'name',
  'displayName',
  'email',
  'password',
];

const nicknames = {
  Standart: name => {
    const human = humanparser.parseName(name);
    if (human.prefixes && human.lastname) {
      return human.prefixes + ' ' + human.lastname;
    } else if (human.firstname && human.lastname) {
      return human.firstname[0] + '. ' + human.lastname;
    } return human.lastname || human.firstname || human.fullname;
  }, Unförmlich: name => {
    const human = humanparser.parseName(name);
    return human.firstname || human.lastname || human.fullname;
  }
};

export default props => <div></div>;
/*
@observer(({ account }) => ({ user: account.user, register: account.register }))
@purify
export default class AccountRegister extends Component {
  state = {
    valid: false,
    tokenValid: null,
    usernameType: 'Standart',
    user: { },
  };
  componentDidMount() {
    const { token, apiClient } = this.props;
    if (token) {
      apiClient.get(`/account/resolve-token/${token}`).then(result => {
        this.setState({
          user: { ...this.state.user, email: result.email, token },
          tokenValid: !!result.email,
        });
      }).catch(err => {
        console.error(err);
        this.setState({ tokenValid: false });
      });
    } else {
      this.setState({ tokenValid: false });
    }
  }
  save = () => {
    this.props.register(this.state.user).then(user => {
      window.addSuccess('Registrierung abgeschickt', 'Bestätigen Sie jetzt die E-Mail.');
      this.props.onDone();
    }).catch(err => {
      window.addDanger('Fehler', err.message);
    });
  }
  patch = patch => {
    if (patch.displayName) {
      this.setState({ displayNameSet: true, usernameType: '' });
    } else if (patch.displayName === '' || patch.displayName === null) {
      this.setState({ displayNameSet: false });
    }
    if (patch.name && !this.state.displayNameSet && nicknames[this.state.usernameType]) {
      patch.displayName = nicknames[this.state.usernameType](patch.name);
    }

    const user = {
      ...this.state.user,
      ...patch,
    };

    console.log(user);

    const valid = mandatory.filter(field => !user[field]).length === 0
      && user.name && user.name.split(' ').length > 1
      && user.password && user.password2 && user.password === user.password2 && user.password.length >= 3;

    this.setState({
      user,
      valid,
    });
  }
  changeUsernameType = value => {
    this.setState({ usernameType: value }, () => {
      this.patch({ name: this.state.user.name });
    });
  }
  render() {
    const { children, title, onClose } = this.props;
    const { user, valid, usernameType, displayNameSet, tokenValid } = this.state;

    if (tokenValid === null) {
      return (
        <Modal title={'Registrierung nicht möglich'} onClose={onClose}>
          <p>Prüfe Gültigkeit der Einladung ...</p>
        </Modal>
      );
    } else if (tokenValid === false) {
      return (
        <Modal title={'Registrierung nicht möglich'} onClose={onClose}>
          <div className="uk-alert uk-alert-danger">
            <i className="uk-icon-exclamation uk-margin-small-right" />
            Einladung ist ungültig/abgelaufen! Einladungen sind maximal 1 Woche lang gültig.
          </div>
        </Modal>
      );
    }

    return (
      <Modal title={title || 'Registrierung'} onClose={onClose}>
        <div className="uk-alert uk-alert-success">
          <i className="uk-icon-check uk-margin-small-right" />
          Die Einladung wurde geprüft und ist gültig, Sie können sich jetzt registrieren.
        </div>
        {children}
        <form className="uk-form uk-form-horizontal">
          <div className="uk-form-row">
            <label className="uk-form-label">Vollständiger Name</label>
            <div className="uk-form-controls">
              <input type="text" placeholder="Dr. Max Mustermann" value={user.name || ''} onChange={v => this.patch({ name: v.target.value || null })} className="uk-width-3-4" />
              <label className="uk-width-1-4">
                <input className="uk-margin-left" type="checkbox" value={user.arzt} onChange={v => this.patch({ arzt: v.target.checked })} /> Arzt
              </label>
            </div>
          </div>
          <div className="uk-form-row">
            <label className="uk-form-label">Kurzfassung</label>
            <div className="uk-form-controls">
              <select value={usernameType} onChange={e => this.changeUsernameType(e.target.value)} disabled={displayNameSet}>
                <option key={''} value={''}>Individuell</option>
                {Object.keys(nicknames).map(name => <option key={name} value={name}>{name}</option>)}
              </select>
              &nbsp;
              <input type="text" value={user.displayName || ''} onChange={v => this.patch({ displayName: v.target.value || null })} />
            </div>
          </div>
          <legend className="uk-margin-top">Benutzerkonto</legend>
          <div className="uk-form-row">
            <label className="uk-form-label">E-Mail</label>
            <div className="uk-form-controls">
              <input type="text" placeholder="max@muster.de" className="uk-width-1-1" value={user.email || ''} onChange={v => this.patch({ email: v.target.value || null })} />
            </div>
          </div>
          <div className="uk-form-row">
            <label className="uk-form-label">
              Passwort
              &nbsp;
              {user.password && user.password.length < 3 ? <div className="uk-badge uk-badge-danger">Passwort zu kurz!</div> : null}
              {user.password && user.password2 && user.password !== user.password2 ? <div className="uk-badge uk-badge-danger">Passwörter nicht gleich!</div> : null}
            </label>
            <div className="uk-form-controls">
              <input type="password" placeholder="Passwort" value={user.password || ''} onChange={v => this.patch({ password: v.target.value || null })} />
              &nbsp;
              <input type="password" placeholder="Wiederholung" value={user.password2 || ''} onChange={v => this.patch({ password2: v.target.value || null })} />
            </div>
          </div>
          <legend className="uk-margin-top">Weitere Angaben (freiwillig)</legend>
          <div className="uk-form-row">
            <label className="uk-form-label">Interessen</label>
            <div className="uk-form-controls">
              <Select2
                name="form-field-name"
                value={user.fields || []}
                multi
                options={FACHGEBIETE.map(item => ({ value: item, label: item }))}
                onChange={v => this.patch({ fields: v.map(x => x.value || x) })}
              />
            </div>
          </div>
          <div className="uk-form-row">
            <label className="uk-form-label">Einrichtung</label>
            <div className="uk-form-controls">
              <select value={user.org || ''} onChange={e => this.patch({ org: !e.target.value ? null : e.target.value })}>
                <option value="">Keine</option>
                  {EINRICHTUNGSARTEN.map(org => <option key={org} value={org}>{org}</option>)}
                <option value="Andere">Andere</option>
              </select>
            </div>
          </div>
          {user.org ? <div className="uk-form-row">
            <label className="uk-form-label">Name</label>
            <div className="uk-form-controls">
              <input type="text" placeholder="Name der Einrichtung" className="uk-width-1-1" value={user.einrichtung} onChange={v => this.patch({ einrichtung: v.target.value || null })} />
            </div>
          </div> : null}
          <div className="uk-form-row">
            <label className="uk-form-label">Adresse</label>
            <div className="uk-form-controls">
              <GeoSuggest value={user.address} placeholder="Musterstraße 12, 55555 Musterstadt, DE" onChange={v => this.patch({ address: v })} />
            </div>
          </div>
           <div className="uk-form-row">
            <label className="uk-form-label">
              Bot-Schutz
            </label>
            <div className="uk-form-controls">
              <Recaptcha center={false} />
            </div>
          </div>
        </form>
        <div className="uk-modal-footer uk-text-right">
          <button type="button" className="uk-button" onClick={onClose}>Abbruch</button>
          &nbsp;
          <button type="button" disabled={!valid} className="uk-button uk-button-primary" onClick={this.save}>Speichern</button>
        </div>
      </Modal>
    );
  }
}
*/

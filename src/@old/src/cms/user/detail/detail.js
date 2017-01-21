import React, {Component, PropTypes} from 'react';
import {Input, Checkbox} from '../../../edits';
import Image from "../../../edits/image";

class User extends Component {
  render() {
    const {children, newEmail, image, name, description, email, password, password2, patch} = this.props;

    const hint = (!newEmail) ? null : (
      <div className="ui left pointing red basic label">
        Änderung an E-Mail muss bestätigt werden!
      </div>
    );

    return (
      <div className="ui vertical segment">
        <div className="ui middle aligned center aligned grid full" style={{margin: 0}}>
          <div className="column" style={{ maxWidth: "500px"}}>
            <div className="ui center aligned grid">
              <div className="four wide middle aligned column">

                <Image value={image} height={100} width={100} updateValue={(v)=>patch({image: v})}/>

              </div>
              <div className="twelve wide column">
                <form className="ui large form" action="javascript:void(0)" method="post">
                  <div className="ui horizontal divider">Persönliche Daten</div>

                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon"></i>
                      <Input placeholder="Dein Name" value={name} updateValue={v=>patch({name: v})}/>
                    </div>
                  </div>

                  <div className="field">
                    <Input lines="2" placeholder="Beschreibung" value={description}
                           updateValue={v=>patch({description: v})}/>
                  </div>

                  <div className="ui horizontal divider">Zugangsdaten</div>

                  <div className="field">
                    <div className="ui left icon input">
                      <i className="mail icon"></i>
                      <Input type="email" placeholder="Deine E-Mail"
                             value={(newEmail) ? newEmail : email}
                             updateValue={v=>patch({newEmail: v})}/>
                      {hint}
                    </div>
                  </div>

                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <Input type="password" placeholder="Dein Passwort" value={password} updateValue={v=>patch({password: v})}/>
                    </div>
                  </div>

                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <Input type="password" placeholder="Passwort wiederholen" value={password2}
                             updateValue={v=>patch({password2: v})}/>
                    </div>
                  </div>

                  <div className="ui error message"></div>
                </form>
              </div>

              {children}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;

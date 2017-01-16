import React, { Component } from 'react';
import { Image, useItemEdit } from 'olymp/cms';
import './vcard.less';

@useItemEdit
export default class VCardBlock extends Component {
  render() {
    const { vcard, id } = this.props;

    if (!vcard) {
      return (
        <div className="vcard-block vcard block" style={{ textAlign: 'center', padding: '1.5em 0' }}>
          <i className="fa fa-refresh fa-spin fa-fw" />
        </div>
      );
    }

    const { name, bild, ort, telefon, mobil, fax, email, website } = vcard;

    return (
      <div className="vcard-block block">
        <div className="vcard" style={{ margin: 0 }}>
          <div>
            {bild ? <Image value={bild} width="100%" cloudinary={{ width: 300 }} /> : null}

            <div className="text">
              <h3>{name}</h3>
              {ort ? <div>{ort}</div> : null}
              {telefon ? <div>Tel: {telefon}</div> : null}
              {mobil ? <div>Mobil: {mobil}</div> : null}
              {fax ? <div>Fax: {fax}</div> : null}
              {email ? <div><a href={"mailto:%20" + email}>{email}</a></div> : null}
              {website ? <div><a href={website}>{website}</a></div> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

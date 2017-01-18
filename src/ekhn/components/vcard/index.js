import React from 'react';
import { DataLoader, cn } from 'olymp';
import { Image, useItemEdit } from 'olymp/cms';
import './vcard.less';

export default useItemEdit(({ children, className, vcard = {} }) => {
  const { name, bild, ort, telefon, mobil, fax, email, website } = vcard;

  return (
    <DataLoader className={cn('vcard-block block', className)} trigger={!!vcard} placeholder="Keine Visitenkarte vorhanden">
      {children}

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
    </DataLoader>
  );
});

import React from 'react';
import { cn, Image } from 'olymp';
import { DataLoader } from 'olymp/cms-core';
import { useItemEdit } from 'olymp/slate';

const VCard = useItemEdit()(({ name, bild, ort, telefon, mobil, fax, email, homepage, children, className }) => (
  <div className={cn(className, 'vcard')} style={{ margin: 0 }}>
    {children}

    {bild ? <Image value={bild} width="100%" lightbox cloudinary={{ width: 300 }} /> : null}

    <div className="text">
      <h3>{name}</h3>
      {ort ? <div>{ort}</div> : null}
      {telefon ? <div>Tel: {telefon}</div> : null}
      {mobil ? <div>Mobil: {mobil}</div> : null}
      {fax ? <div>Fax: {fax}</div> : null}
      {email ? <div><a href={"mailto:%20" + email}>{email.split('@')[0]}@&shy;{email.split('@')[1]}</a></div> : null}
      {homepage ? <div><a href={homepage}>{homepage}</a></div> : null}
    </div>
  </div>
));

export default ({ style, className, children, vcard }) => {
  console.log(vcard);
  return (
  <DataLoader style={style} className={cn('vcard-block', className)} isEmpty={vcard} placeholder="Keine Visitenkarte vorhanden" loading="Visitenkarte wird geladen">
    {children}

    <VCard __typename="Vcard" {...vcard} />
  </DataLoader>
);}

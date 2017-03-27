import React from 'react';
import { Image } from 'olymp';

export default ({ bild, className }) =>  {
  if (!bild || !bild.url) return null;

  return (
    <Image value={bild} className={className} asImg lightbox cloudinary={{ width: 400 }} style={{ width: '100%', maxWidth: 400, margin: '0 auto 0' }}>
      {bild.caption || bild.source ? (
        <div className="athena-img-title">{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
      ) : undefined}
    </Image>
  );
};

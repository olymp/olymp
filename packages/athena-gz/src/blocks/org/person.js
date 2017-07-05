import React from 'react';
import { createComponent, border } from 'olymp-fela';
import { LightboxImage } from 'olymp-cloudinary';

const Avatar = createComponent(
  ({ theme }) => ({
    float: 'right',
    margin: theme.space2,
    marginRight: `-${theme.space3}`,
  }),
  ({ className, value }) =>
    (<LightboxImage
      className={className}
      value={value}
      width={100}
      ratio={1}
      avatar
      rounded
    />),
  p => Object.keys(p)
);

const H3 = createComponent(
  ({ theme, farbe }) => ({
    borderBottom: border(theme, farbe),
    display: 'inline',
    paddingRight: theme.space1,
  }),
  'h3',
  ({ farbe, ...p }) => Object.keys(p)
);

export default createComponent(
  ({ theme }) => ({
    marginTop: theme.space3,
    marginBottom: theme.space4,
    display: 'block',
    clear: 'both',
    hyphens: 'auto',
    textAlign: 'justify',
  }),
  ({ className, name, bild, beschreibung, farbe }) =>
    (<div className={className}>
      <Avatar value={bild} />
      <H3 farbe={farbe}>
        {name}
      </H3>
      <p>
        {beschreibung}
      </p>
    </div>),
  p => Object.keys(p)
);

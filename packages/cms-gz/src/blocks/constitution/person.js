import React from 'react';
import { createComponent, border } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';

const Avatar = createComponent(
  ({ theme }) => ({
    float: 'right',
    margin: theme.space2,
    marginRight: 0,
  }),
  p =>
    <Image {...p} width={100} height={100} mode="fill" retina lazy={false} />,
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
    marginY: theme.space3,
    display: 'block',
    clear: 'both',
  }),
  ({ className, name, bild, beschreibung, farbe }) =>
    (<div className={className}>
      <Avatar value={bild} />
      <H3 farbe={farbe}>{name}</H3>
      <p>{beschreibung}</p>
    </div>),
  p => Object.keys(p)
);

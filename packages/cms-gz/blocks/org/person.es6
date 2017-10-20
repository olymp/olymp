import React from 'react';
import { createComponent, border } from 'olymp-fela';
import { LightboxImage } from 'olymp-cloudinary';

const Avatar = createComponent(
  ({ theme }) => ({
    float: 'right',
    margin: theme.space2,
    marginRight: `-${theme.space3}`,
  }),
  ({ className, value }) => (
    <LightboxImage
      className={className}
      value={value}
      width={100}
      ratio={1}
      avatar
      circle
    />
  ),
  p => Object.keys(p),
);

const H3 = createComponent(
  ({ theme, color }) => ({
    borderBottom: border(theme, color),
    display: 'inline',
    paddingRight: theme.space1,
  }),
  'h3',
  ({ color, ...p }) => Object.keys(p),
);

export default createComponent(
  ({ theme }) => ({
    marginTop: theme.space3,
    marginBottom: theme.space4,
    display: 'block',
    clear: 'both',
    hyphens: 'auto',
    '> p': {
      textAlign: 'justify',
    },
  }),
  ({ className, name, image, description, color }) => (
    <div className={className}>
      {!!image && <Avatar value={image} />}
      <H3 color={color}>{name}</H3>
      <p>{description}</p>
    </div>
  ),
  p => Object.keys(p),
);

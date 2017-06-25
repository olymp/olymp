import React from 'react';
import { createComponent, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { H2 } from '../../components';
import Accordion from './accordion';
import Person from './person';

const niceTime = (time) => {
  if (!time) {
    return 'Geschlossen';
  }
  return `${time.replace(/-/g, ' - ').replace(/,/g, ' Uhr, ')} Uhr`;
};

const List = createComponent(
  ({ theme }) => ({
    width: '100%',
    display: 'block',
  }),
  ({ className, label, children }) =>
    (<Grid size={3} className={className}>
      <ListLabel>{label}</ListLabel>
      <ListContent>{children}</ListContent>
    </Grid>),
  p => Object.keys(p)
);

const ListLabel = createComponent(
  ({ theme }) => ({
    paddingLeft: theme.space2,
    color: theme.dark2,
    fontWeight: 'bold',
  }),
  ({ children, ...rest }) =>
    <Grid.Item {...rest} medium={1}>{children}:</Grid.Item>,
  p => Object.keys(p)
);

const ListContent = createComponent(
  ({ theme }) => ({
    textAlign: 'right',
    ifSmallDown: {
      paddingLeft: theme.space2,
      textAlign: 'left',
    },
  }),
  p => <Grid.Item {...p} medium={2} />,
  p => Object.keys(p)
);

const Text = createComponent(
  ({ theme }) => ({
    paddingY: theme.space3,
    color: theme.dark2,
  }),
  'p',
  p => Object.keys(p)
);

const Logo = createComponent(
  ({ theme }) => ({
    width: '100%',
    marginTop: theme.space2,
  }),
  ({ children, className }) =>
    <Image className={className} value={children} width="100%" retina />,
  p => Object.keys(p)
);

export default createComponent(
  ({ theme }) => ({
    width: '100%',
    padding: theme.space3,
    paddingTop: theme.space1,
  }),
  ({
    className,
    constitution: {
      farbe,
      name,
      etage,
      eMail,
      fax,
      telefon,
      telefonPrivat,
      website,
      zeiten,
      freifeld,
      logo,
      vorsorgen,
      aesthetik,
      leistungen,
      personen,
    },
  }) =>
    (<div>
      <Logo>{logo}</Logo>

      <div className={className}>
        <H2 color={farbe}>{name}</H2>
        {etage && <List label="Etage">{etage}</List>}
        {telefon &&
          <List label="Telefon"><a href={`tel:${telefon}`}>{telefon}</a></List>}
        {telefonPrivat && <List label="Privatpatienten">{telefonPrivat}</List>}
        {fax && <List label="Fax">{fax}</List>}
        {eMail &&
          <List label="E-Mail"><a href={`mailto:${eMail}`}>{eMail}</a></List>}
        {website &&
          <List label="Homepage"><a href={website}>{website}</a></List>}

        <H2 color={farbe}>Öffnungszeiten</H2>
        <List label="Montag">{niceTime(zeiten[0])}</List>
        <List label="Dienstag">{niceTime(zeiten[1])}</List>
        <List label="Mittwoch">{niceTime(zeiten[2])}</List>
        <List label="Donnerstag">{niceTime(zeiten[3])}</List>
        <List label="Freitag">{niceTime(zeiten[4])}</List>
        <List label="Samstag">{niceTime(zeiten[5])}</List>
        <Text>{freifeld}</Text>

        {leistungen &&
          !!leistungen.length &&
          <H2 color={farbe}>Leistungsangebot</H2>}
        {leistungen.map((item, i) =>
          <Accordion {...item} farbe={farbe} key={item.id || i} />
        )}

        {vorsorgen && !!vorsorgen.length && <H2 color={farbe}>Vorsorge</H2>}
        {vorsorgen.map((item, i) =>
          <Accordion {...item} farbe={farbe} key={item.id || i} />
        )}

        {aesthetik && !!aesthetik.length && <H2 color={farbe}>Ästethik</H2>}
        {aesthetik.map((item, i) =>
          <Accordion {...item} farbe={farbe} key={item.id || i} />
        )}

        {personen && !!personen.length && <H2 color={farbe}>Personen</H2>}
        {personen.map((item, i) =>
          <Person {...item} farbe={farbe} key={item.id || i} />
        )}
      </div>
    </div>),
  p => Object.keys(p)
);

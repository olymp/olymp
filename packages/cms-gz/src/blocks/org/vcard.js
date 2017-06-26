import React from 'react';
import { createComponent, Grid } from 'olymp-fela';
import { Img } from 'olymp-cloudinary';
import { H2 } from '../../components';
import Accordion from './accordion';
import Person from './person';
import moment from 'moment';

const niceTime = (times) => {
  if (times.length === 0) {
    return 'Geschlossen';
  }
  return times.map(time => time.join('-')).join(', ');
};

const List = createComponent(
  () => ({
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
    marginTop: theme.space2,
    marginX: 'auto',
  }),
  ({ value, className }) =>
    (<Img
      className={className}
      value={value}
      width={400}
      maxWidth={value && value.width}
      maxHeight={160}
    />),
  p => Object.keys(p)
);
const weekdays = moment.weekdays();
weekdays.push(weekdays.splice(0, 1)[0]);
export default createComponent(
  ({ theme }) => ({
    width: '100%',
    padding: theme.space3,
    paddingTop: theme.space1,
  }),
  ({
    className,
    org: {
      farbe,
      name,
      etage,
      eMail,
      fax,
      telefon,
      telefonPrivat,
      website,
      openings,
      freifeld,
      logo,
      vorsorgen,
      aesthetik,
      leistungen,
      personen,
    },
  }) =>
    (<div>
      <Logo value={logo} />
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

        {openings &&
          <div>
            <H2 color={farbe}>Öffnungszeiten</H2>
            {openings.map((value, index) =>
              <List label={weekdays[index]}>{niceTime(value)}</List>
            )}
            <Text>{freifeld}</Text>
          </div>}

        {leistungen &&
          !!leistungen.length &&
          <H2 color={farbe}>Leistungsangebot</H2>}
        {leistungen &&
          leistungen.map((item, i) =>
            <Accordion {...item} farbe={farbe} key={item.id || i} />
          )}

        {vorsorgen && !!vorsorgen.length && <H2 color={farbe}>Vorsorge</H2>}
        {vorsorgen &&
          vorsorgen.map((item, i) =>
            <Accordion {...item} farbe={farbe} key={item.id || i} />
          )}

        {aesthetik && !!aesthetik.length && <H2 color={farbe}>Ästethik</H2>}
        {aesthetik &&
          aesthetik.map((item, i) =>
            <Accordion {...item} farbe={farbe} key={item.id || i} />
          )}

        {personen && !!personen.length && <H2 color={farbe}>Personen</H2>}
        {personen &&
          personen.map((item, i) =>
            <Person {...item} farbe={farbe} key={item.id || i} />
          )}
      </div>
    </div>),
  p => Object.keys(p)
);

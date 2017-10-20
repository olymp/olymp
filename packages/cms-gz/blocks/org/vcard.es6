import React from 'react';
import { createComponent, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Link } from 'olymp-router';
import moment from 'moment';
import { H2 } from '../../components';
import Accordion from './accordion';
import Person from './person';

const niceTime = times => {
  if (times.length === 0 || !Array.isArray(times)) {
    return 'Geschlossen';
  }
  return times
    .map(time =>
      time
        .map(t =>
          moment()
            .startOf('day')
            .add(t, 'minutes')
            .format('HH:mm')
            .replace('00:00', ''),
        )
        .join('-'),
    )
    .join(', ');
};

const Container = createComponent(
  ({ theme }) => ({
    paddingBottom: theme.space1,
  }),
  'div',
  p => Object.keys(p),
);

const List = createComponent(
  () => ({
    width: '100%',
    display: 'block',
  }),
  ({ className, label, children }) => (
    <Grid size={3} className={className}>
      <ListLabel>{label}</ListLabel>
      <ListContent>{children}</ListContent>
    </Grid>
  ),
  p => Object.keys(p),
);

const ListLabel = createComponent(
  ({ theme }) => ({
    paddingLeft: theme.space2,
    color: theme.dark2,
    fontWeight: 'bold',
  }),
  ({ children, ...rest }) => (
    <Grid.Item {...rest} medium={1}>
      {children}:
    </Grid.Item>
  ),
  p => Object.keys(p),
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
  p => Object.keys(p),
);

const Text = createComponent(
  ({ theme }) => ({
    paddingY: theme.space3,
    color: theme.dark2,
  }),
  'p',
  p => Object.keys(p),
);

const Logo = createComponent(
  ({ theme }) => ({
    marginTop: theme.space2,
    marginX: 'auto',
    ifSmallDown: {
      marginX: theme.space2,
      marginY: 0,
      width: 'calc(100% - 1rem)',
    },
  }),
  ({ value, className, title }) => (
    <Image
      className={className}
      value={value}
      width="100%"
      maxWidth={value && value.width}
      maxResolution={64000}
      alt={title}
    />
  ),
  p => Object.keys(p),
);

const weekdays = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
  'Sonntag',
];

export default createComponent(
  ({ theme }) => ({
    width: '100%',
    padding: theme.space3,
    paddingTop: theme.space1,
  }),
  ({
    className,
    org: {
      color,
      name,
      titel,
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
      persons,
      lageplan,
    },
  }) => (
    <div>
      <Logo value={logo} title={name || titel} />
      <div className={className}>
        <H2 color={color}>{name}</H2>
        <Container>
          {etage && (
            <List label="Etage">
              {lageplan ? (
                <Link
                  to={{
                    pathname: '/wegfindung',
                    query: { '@room': lageplan.toLowerCase() },
                  }}
                >
                  {etage}
                </Link>
              ) : (
                <span>{etage}</span>
              )}
            </List>
          )}
          {telefon && (
            <List label="Telefon">
              <a href={`tel:${telefon}`}>{telefon}</a>
            </List>
          )}
          {telefonPrivat && (
            <List label="Privatpatienten">
              <a href={`tel:${telefon}`}>{telefonPrivat}</a>
            </List>
          )}
          {fax && (
            <List label="Fax">
              <a href={`fax:${telefon}`}>{fax}</a>
            </List>
          )}
          {eMail && (
            <List label="E-Mail">
              <a href={`mailto:${eMail}`}>{eMail}</a>
            </List>
          )}
          {website && (
            <List label="Homepage">
              <a href={website}>{website}</a>
            </List>
          )}
        </Container>

        {(openings || freifeld) && (
          <div>
            <H2 color={color}>Öffnungszeiten</H2>
            <Container>
              {(openings || []).map((value, index) => (
                <List key={index} label={weekdays[index]}>
                  {niceTime(value)}
                </List>
              ))}
              <Text>{freifeld}</Text>
            </Container>
          </div>
        )}

        {leistungen &&
          !!leistungen.length && <H2 color={color}>Leistungsangebot</H2>}
        {leistungen &&
          !!leistungen.length && (
            <Container>
              {leistungen.map((item, i) => (
                <Accordion {...item} color={color} key={item.id || i} />
              ))}
            </Container>
          )}

        {vorsorgen && !!vorsorgen.length && <H2 color={color}>Vorsorge</H2>}
        {vorsorgen &&
          !!vorsorgen.length && (
            <Container>
              {vorsorgen.map((item, i) => (
                <Accordion {...item} color={color} key={item.id || i} />
              ))}
            </Container>
          )}

        {aesthetik && !!aesthetik.length && <H2 color={color}>Ästethik</H2>}
        {aesthetik &&
          !!aesthetik.length && (
            <Container>
              {aesthetik.map((item, i) => (
                <Accordion {...item} color={color} key={item.id || i} />
              ))}
            </Container>
          )}

        {persons && !!persons.length && <H2 color={color}>Personen</H2>}
        {persons &&
          !!persons.length && (
            <Container>
              {persons.map((item, i) => (
                <Person {...item} color={color} key={item.id || i} />
              ))}
            </Container>
          )}
      </div>
    </div>
  ),
  p => Object.keys(p),
);

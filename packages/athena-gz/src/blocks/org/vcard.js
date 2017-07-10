import React from 'react';
import { createComponent, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { H2 } from '../../components';
import Accordion from './accordion';
import Person from './person';
import moment from 'moment';

const niceTime = (times) => {
  if (times.length === 0 || !Array.isArray(times)) {
    return 'Geschlossen';
  }
  return times
    .map(time =>
      time
        .map(t => moment().startOf('day').add(t, 'minutes').format('HH:mm'))
        .join('-')
    )
    .join(', ');
};

const Container = createComponent(
  ({ theme }) => ({
    paddingBottom: theme.space1,
  }),
  'div',
  p => Object.keys(p)
);

const List = createComponent(
  () => ({
    width: '100%',
    display: 'block',
  }),
  ({ className, label, children }) =>
    (<Grid size={3} className={className}>
      <ListLabel>
        {label}
      </ListLabel>
      <ListContent>
        {children}
      </ListContent>
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
    (<Grid.Item {...rest} medium={1}>
      {children}:
    </Grid.Item>),
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
    ifSmallDown: {
      marginX: theme.space2,
      marginY: 0,
      width: 'calc(100% - 1rem)',
    },
  }),
  ({ value, className, title }) =>
    (<Image
      className={className}
      value={value}
      width="100%"
      maxWidth={value && value.width}
      maxHeight={160}
      maxResolution={64000}
      alt={title}
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
      personen,
    },
  }) =>
    (<div>
      <Logo value={logo} title={name || titel} />
      <div className={className}>
        <H2 color={farbe}>
          {name}
        </H2>
        <Container>
          {etage &&
            <List label="Etage">
              {etage}
            </List>}
          {telefon &&
            <List label="Telefon">
              <a href={`tel:${telefon}`}>
                {telefon}
              </a>
            </List>}
          {telefonPrivat &&
            <List label="Privatpatienten">
              <a href={`tel:${telefon}`}>
                {telefonPrivat}
              </a>
            </List>}
          {fax &&
            <List label="Fax">
              <a href={`fax:${telefon}`}>
                {fax}
              </a>
            </List>}
          {eMail &&
            <List label="E-Mail">
              <a href={`mailto:${eMail}`}>
                {eMail}
              </a>
            </List>}
          {website &&
            <List label="Homepage">
              <a href={website}>
                {website}
              </a>
            </List>}
        </Container>

        {openings &&
          <div>
            <H2 color={farbe}>Öffnungszeiten</H2>
            <Container>
              {openings.map((value, index) =>
                (<List key={index} label={weekdays[index]}>
                  {niceTime(value)}
                </List>)
              )}
              <Text>
                {freifeld}
              </Text>
            </Container>
          </div>}

        {leistungen &&
          !!leistungen.length &&
          <H2 color={farbe}>Leistungsangebot</H2>}
        {leistungen &&
          !!leistungen.length &&
          <Container>
            {leistungen.map((item, i) =>
              <Accordion {...item} farbe={farbe} key={item.id || i} />
            )}
          </Container>}

        {vorsorgen && !!vorsorgen.length && <H2 color={farbe}>Vorsorge</H2>}
        {vorsorgen &&
          !!vorsorgen.length &&
          <Container>
            {vorsorgen.map((item, i) =>
              <Accordion {...item} farbe={farbe} key={item.id || i} />
            )}
          </Container>}

        {aesthetik && !!aesthetik.length && <H2 color={farbe}>Ästethik</H2>}
        {aesthetik &&
          !!aesthetik.length &&
          <Container>
            {aesthetik.map((item, i) =>
              <Accordion {...item} farbe={farbe} key={item.id || i} />
            )}
          </Container>}

        {personen && !!personen.length && <H2 color={farbe}>Personen</H2>}
        {personen &&
          !!personen.length &&
          <Container>
            {personen.map((item, i) =>
              <Person {...item} farbe={farbe} key={item.id || i} />
            )}
          </Container>}
      </div>
    </div>),
  p => Object.keys(p)
);

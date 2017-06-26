import React from 'react';
import { createComponent, Container, Grid, border } from 'olymp-fela';
import { H2, Panel } from '../components';
import { graphql, gql, Link } from 'olymp';

const Image = createComponent(
  ({ theme }) => ({
    marginRight: theme.space2,
    width: 100,
    height: 'auto',
    float: 'left',
  }),
  ({ className, url }) => <img className={className} src={url} alt="" />,
  p => Object.keys(p)
);

const H5 = createComponent(
  ({ theme }) => ({
    marginTop: theme.space3,
  }),
  ({ className, children }) => <h5 className={className}>{children}</h5>,
  p => Object.keys(p)
);

const Li = createComponent(
  ({ theme }) => ({
    paddingTop: theme.space2,
    borderBottom: border(theme),
    ':last-of-type': {
      marginBottom: theme.space3,
    },
  }),
  'li',
  p => Object.keys(p)
);

const component = graphql(
  gql`
  query terminList {
    items: terminList {
      id
      date
      art
      name
      extrakt
      slug
      bild { width height url crop }
    }
  }
`,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      items: data.items || [],
    }),
  }
)(({ attributes, getData, items, ...props }) =>
  (<Container {...attributes}>
    <Grid>
      <Grid.Item medium={8}>
        {items.map(item =>
          (<Panel id={item.id} title={item.name} bordered="Vertreterversammlung">
            <Image value={item.bild} />
            <p>
              {item.extrakt}
            </p>
            <Link to={item.slug || '/'}>Mehr erfahren...</Link>
            <H5>{item.art} vom {item.date}</H5>
          </Panel>)
        )}
      </Grid.Item>
      <Grid.Item medium={4} paddingMini="0.5rem 1rem" paddingMedium="0 1rem">
        <H2>Vorträge & Veranstaltungen</H2>
        <ul>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>
              Ursachen und aktuelle Behandlungsmöglichkeiten von
              Schulterschmerzen
            </p>
          </Li>
          <Li>
            <b>21. März 2017, 18:00 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>
              Ursachen und aktuelle Behandlungsmöglichkeiten von
              Schulterschmerzen
            </p>
          </Li>
          <Li>
            <b>21. März 2017, 18:00 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>MAXIMAL 5 ITEMS!</p>
          </Li>
        </ul>

        <H2>Publikationen</H2>
        <ul>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>
              Ursachen und aktuelle Behandlungsmöglichkeiten von
              Schulterschmerzen
            </p>
          </Li>
          <Li>
            <b>21. März 2017, 18:00 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>
              Ursachen und aktuelle Behandlungsmöglichkeiten von
              Schulterschmerzen
            </p>
          </Li>
          <Li>
            <b>21. März 2017, 18:00 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>MAXIMAL 5 ITEMS!</p>
          </Li>
        </ul>

        <H2>Presse</H2>
        <ul>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>
              Ursachen und aktuelle Behandlungsmöglichkeiten von
              Schulterschmerzen
            </p>
          </Li>
          <Li>
            <b>21. März 2017, 18:00 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>
              Ursachen und aktuelle Behandlungsmöglichkeiten von
              Schulterschmerzen
            </p>
          </Li>
          <Li>
            <b>21. März 2017, 18:00 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
          <Li>
            <b>25. April 2017, 18:00 Uhr</b>
            <p>MAXIMAL 5 ITEMS!</p>
          </Li>
        </ul>
      </Grid.Item>
    </Grid>
  </Container>)
);

export default {
  key: 'GZK.Collections.NewsBlock',
  label: 'Neuigkeiten',
  category: 'Collections',
  editable: false,
  component,
};

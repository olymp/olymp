import React from 'react';
import {
  createComponent,
  Container,
  Grid,
  border,
  SchemaLoader,
} from 'olymp-fela';
import { graphql, gql, Link } from 'olymp';
import { Image } from 'olymp-cloudinary';
import moment from 'moment';
import { H2, Panel } from '../components';
import { range } from 'lodash';

const loaderSchema = [
  {
    height: 0,
  },
  {
    width: 'container',
    grid: [
      {
        medium: 7,
        children: range(9).map(() => ({
          height: 180,
          width: '100%',
        })),
      },
      {
        medium: 5,
        height: 500,
      },
    ],
  },
];

const Column = createComponent(
  ({ theme }) => ({
    textAlign: 'right',
  }),
  p => <Grid.Item {...p} />,
  p => Object.keys(p)
);

const Img = createComponent(
  ({ theme }) => ({
    float: 'left',
    marginRight: theme.space3,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const H5 = createComponent(
  ({ theme }) => ({
    marginTop: theme.space3,
  }),
  ({ className, children }) =>
    (<h5 className={className}>
      {children}
    </h5>),
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
        bild {
          width
          height
          url
          crop
        }
      }
    }
  `,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      isLoading: data.loading,
      items: data.items || [],
    }),
  }
)(({ attributes, items, isLoading }) =>
  (<SchemaLoader isLoading={isLoading} schema={loaderSchema}>
    <Container {...attributes}>
      <Grid>
        <Grid.Item medium={7} paddingMedium="0 0 0 0.5rem">
          {items.map(item =>
            (<Panel id={item.id} title={item.name} key={item.id} paddingLeft={0}>
              <Img value={item.bild} width={100} ratio={1} avatar />
              <div>
                <p>
                  {item.extrakt}
                </p>
                <Link to={item.slug || '/'}>Mehr erfahren...</Link>
                <H5>
                  {item.art} vom {moment(item.date).format('DD.MM.YYYY')}
                </H5>
              </div>
            </Panel>)
          )}
        </Grid.Item>
        <Column
          medium={4}
          offsetMedium={1}
          offsetLarge={1}
          offsetHuge={1}
          paddingMini="1rem 1rem 0 1rem"
          paddingMedium="0 1rem"
        >
          <H2 right>Vorträge & Veranstaltungen</H2>
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

          <H2 right>Publikationen</H2>
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

          <H2 right>Presse</H2>
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
        </Column>
      </Grid>
    </Container>
  </SchemaLoader>)
);

export default {
  key: 'GZK.Collections.NewsBlock',
  label: 'Neuigkeiten',
  category: 'Collections',
  editable: false,
  component,
};

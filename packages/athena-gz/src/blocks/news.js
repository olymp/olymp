import React from 'react';
import { Container, Grid, SchemaLoader } from 'olymp-fela';
import { graphql, gql } from 'olymp';
import moment from 'moment';
import { sortBy, range } from 'lodash';
import { H2, Panel } from '../components';
import { Column, Content, Li, Img, More } from './magazin';

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

const getItems = (items, filter, title) =>
  sortBy(items.filter(filter), ['date']).reverse().slice(0, 5).map(item =>
    (<Li key={item.id}>
      <b>
        {title(item)}
      </b>
      <p>
        {item.name}
      </p>
    </Li>)
  );

const component = graphql(
  gql`
    query terminList {
      items: terminList(sort: { date: DESC }) {
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
            (<Panel
              id={item.id}
              title={item.name}
              subtitle={`${item.art} vom ${moment(item.date).format(
                'DD.MM.YYYY'
              )}`}
              key={item.id}
            >
              <Img value={item.bild} width={100} ratio={1} avatar />
              <Content>
                <p>
                  {item.extrakt}
                </p>
                {item.slug && <More to={item.slug} />}
              </Content>
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
            {getItems(
              items,
              item => item.art === 'VORTRAG' || item.art === 'VERANSTALTUNG',
              item => `${moment(item.date).format('DD. MMMM YYYY, HH:mm')} Uhr`
            )}
          </ul>

          <H2 right>Publikationen</H2>
          <ul>
            {getItems(
              items,
              item => item.art === 'PUBLIKATION',
              item => moment(item.date).format('DD. MMMM YYYY')
            )}
          </ul>

          <H2 right>Presse</H2>
          <ul>
            {getItems(
              items,
              item => item.art === 'PRESSE',
              item => moment(item.date).format('DD. MMMM YYYY')
            )}
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

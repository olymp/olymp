import React, { Component } from 'react';
import { Container, Grid, SchemaLoader } from 'olymp-fela';
import { graphql, gql, Link } from 'olymp';
import moment from 'moment';
import { sortBy, range } from 'lodash';
import { H2, Panel } from '../components';
import { Column, Content, Item, Img } from './magazin';

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
    (<Item key={item.id}>
      <b>
        {title(item)}
      </b>
      <p>
        {item.name}
      </p>
      {item.slug &&
        <Link to={{ pathname: `/news${item.slug}` }}>
          Nähere Informationen
        </Link>}
    </Item>)
  );

const NewsItem = (props) => {
  const { art, date, name, extrakt, org, slug } = props;

  const bild = props.bild ||
  org.logo || {
    url:
      'https://res.cloudinary.com/djyenzorc/image/upload/v1499270971/kdmxe7pl54cqtdfc7ggy.jpg',
    width: 400,
    height: 300,
  };

  return (
    <Panel
      accent={org.farbe}
      title={name}
      subtitle={`${art} vom ${moment(date).format('DD.MM.YYYY')}`}
    >
      <Img value={bild} width={100} avatar />
      <Content>
        <p>
          {extrakt}
        </p>
        {slug && <Link to={{ pathname: `/news${slug}` }}>Weiterlesen...</Link>}
      </Content>
    </Panel>
  );
};

@graphql(
  gql`
    query terminList {
      items: terminList(
        sort: { date: DESC }
        query: { state: { ne: REMOVED } }
      ) {
        id
        date
        art
        name
        extrakt
        text
        slug
        bild {
          id
          width
          height
          url
          crop
        }
        org {
          id
          name
          logo {
            id
            width
            height
            url
            crop
          }
          farbe
        }
        author {
          id
          name
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
)
class News extends Component {
  render() {
    const { attributes, items, isLoading } = this.props;

    return (
      <SchemaLoader isLoading={isLoading} schema={loaderSchema}>
        <Container {...attributes}>
          <Grid>
            <Grid.Item medium={7} paddingMedium="0 0 0 0.5rem">
              {items.map(item =>
                (<NewsItem
                  {...item}
                  onClick={() =>
                    this.setState({
                      open: open === item.id ? undefined : item.id,
                    })}
                  org={item.org || {}}
                  key={item.id}
                />)
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
              {getItems(
                items,
                item => item.art === 'VORTRAG' || item.art === 'VERANSTALTUNG',
                item =>
                  `${moment(item.date).format('DD. MMMM YYYY, HH:mm')} Uhr`
              )}

              <H2 right>Publikationen</H2>
              {getItems(
                items,
                item => item.art === 'PUBLIKATION',
                item => moment(item.date).format('DD. MMMM YYYY')
              )}

              <H2 right>Presse</H2>
              {getItems(
                items,
                item => item.art === 'PRESSE',
                item => moment(item.date).format('DD. MMMM YYYY')
              )}
            </Column>
          </Grid>
        </Container>
      </SchemaLoader>
    );
  }
}

export default {
  key: 'GZK.Collections.NewsBlock',
  label: 'Neuigkeiten',
  category: 'Collections',
  editable: false,
  component: News,
};

import React, { Component } from 'react';
import { Container, Grid, SchemaLoader, createComponent } from 'olymp-fela';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PrefetchLink } from 'olymp-athena';
import { withEdit, withCreate } from 'olymp-collection';
import moment from 'moment';
import { sortBy, range } from 'lodash';
import { H2, Panel, Item } from '../components';
import { Column, Content, Img } from './magazin';

const SubHeader = createComponent(
  () => ({
    fontSize: '80%',
    marginTop: -4,
    marginBottom: 6,
  }),
  'p',
  [],
);

const Link = createComponent(
  ({ theme }) => ({
    color: theme.dark,
    onHover: {
      color: theme.color,
    },
  }),
  x => <PrefetchLink {...x} />,
  [],
);

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

const RightItem = ({ item, title }) => (
  <Link key={item.id} to={{ pathname: `/news${item.slug}` }}>
    <Item key={item.id}>
      <b>{title}</b>
      {item.ort && <SubHeader>{item.ort}</SubHeader>}
      <p>{item.name}</p>
    </Item>
  </Link>
);

const RightNewsItem = withEdit('news')(RightItem);
const RightEventsItem = withEdit('events')(RightItem);

const NewsItem = withEdit(({ type }) => type)((props) => {
  const { art, date, name, description, org, slug } = props;

  const defaultImage = {
    url: 'https://res.cloudinary.com/djyenzorc/image/upload/v1499270971/kdmxe7pl54cqtdfc7ggy.jpg',
    width: 400,
    height: 300,
  };
  const image = props.image || org.logo || defaultImage;

  return (
    <Grid>
      <Panel
        accent={org.color}
        title={<PrefetchLink to={{ pathname: `/news${slug}` }}>{name}</PrefetchLink>}
        subtitle={`${art} vom ${moment(date).format('DD.MM.YYYY')}`}
      >
        <Img value={image} width={100} avatar />
        <Content>
          <p>{description}</p>
        </Content>
      </Panel>
    </Grid>
  );
});

const NewsListing = withCreate('news')(({ children }) => <div>{children}</div>);

const EventsListing = withCreate('events')(({ children }) => <div>{children}</div>);

@graphql(
  gql`
    query newsList {
      news: newsList(sort: { date: DESC }, query: { state: { eq: PUBLISHED } }) {
        id
        date
        art
        name
        description
        text
        slug
        image {
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
          color
        }
        person {
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
      news: data.news || [],
    }),
  },
)
@graphql(
  gql`
    query eventList {
      events: eventList(sort: { date: DESC }, query: { state: { eq: PUBLISHED } }) {
        id
        date
        art
        name
        ort
        description
        text
        slug
        image {
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
          color
        }
        person {
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
      events: data.events || [],
    }),
  },
)
class News extends Component {
  render() {
    const { attributes, isLoading } = this.props;
    const events = this.props.events.map(item => ({ ...item, type: 'events' }));
    const news = this.props.news.map(item => ({ ...item, type: 'news' }));
    const items = sortBy([...events, ...news], 'date').reverse();

    return (
      <SchemaLoader isLoading={isLoading} schema={loaderSchema}>
        <Container {...attributes}>
          <Grid>
            <Grid.Item medium={7} paddingMedium="0 0 0 0.5rem">
              <NewsListing>
                {items.map(item => (
                  <NewsItem
                    {...item}
                    onClick={() =>
                      this.setState({
                        open: open === item.id ? undefined : item.id,
                      })}
                    org={item.org || {}}
                    key={item.id}
                  />
                ))}
              </NewsListing>
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
              <EventsListing>
                {sortBy(events, ['date'])
                  .reverse()
                  .slice(0, 5)
                  .map(item => (
                    <RightEventsItem
                      item={item}
                      id={item.id}
                      key={item.id}
                      title={`${moment(item.date)
                        .format('DD. MMMM YYYY, HH:mm')
                        .replace(', 00:00', '')} Uhr`}
                    />
                  ))}
              </EventsListing>

              <H2 right>Publikationen & Presse</H2>
              <NewsListing>
                {sortBy(news, ['date'])
                  .reverse()
                  .slice(0, 5)
                  .map(item => (
                    <RightNewsItem
                      item={item}
                      id={item.id}
                      key={item.id}
                      title={moment(item.date).format('DD. MMMM YYYY')}
                    />
                  ))}
              </NewsListing>
            </Column>
          </Grid>
        </Container>
      </SchemaLoader>
    );
  }
}

export default {
  type: 'GZK.Collections.NewsBlock',
  label: 'Neuigkeiten',
  category: 'Collections',
  isVoid: true,
  kind: 'block',
  component: News,
};

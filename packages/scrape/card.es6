import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { createComponent, ContentLoader } from 'olymp-fela';

const styles = props => ({
  '> a': {
    '> img': {
      float: 'left',
      marginRight: 10,
      height: '100%',
      maxHeight: 180,
      width: 'auto',
    },
  },
  '> article': {
    padding: 0,
    '> h3 > a': {
      color: '#022d5e',
    },
    '> div > a': {
      color: '#022d5e',
    },
    '> a': {
      color: '#022d5e',
      '> img': {
        marginTop: 7,
        marginRight: 5,
        float: 'left',
        width: 16,
        height: 16,
      },
      fontSize: 12,
    },
  },
  overflow: 'hidden',
  border: '1px solid #d4d3d3',
  borderRadius: 5,
  minHeight: 177,
  minWidth: 20,
  display: 'inline-block',
});
const component = ({
  loading,
  scrape: { image, title, description, url, origin, favicon },
  error,
  children,
  value,
  ...rest
}) => (
  <ContentLoader height={177} isLoading={loading}>
    <div {...rest}>
      {children}
      {error ? console.error(error) : null}
      {image && (
        <a target="_blank" href={url}>
          <img src={image.url} />
        </a>
      )}
      <article>
        <a target="_blank" href={origin}>
          {favicon && <img src={favicon.url} />}
          {origin}
        </a>
        <h3>
          <a target="_blank" href={url}>
            {title}
          </a>
        </h3>
        <div>
          <span>{description}</span>
          &nbsp;
          <a target="_blank" href={url}>
            {'>'}&nbsp;Weiterlesen
          </a>
          <br />
        </div>
      </article>
    </div>
  </ContentLoader>
);

const card = graphql(
  gql`
    query scrape($url: String) {
      scrape(url: $url) {
        id
        author
        date
        description
        origin
        favicon {
          url
          width
          height
        }
        image {
          url
          width
          height
        }
        logo {
          url
          width
          height
        }
        publisher
        title
        url
      }
    }
  `,
  {
    options: ({ value }) => ({
      fetchPolicy: !value ? 'cache-only' : undefined,
      variables: {
        url: value,
      },
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      loading: data.loading,
      value: ownProps.value,
      error: data.error,
      scrape: data.scrape || {},
    }),
  },
)(createComponent(styles, component, p => Object.keys(p)));

export default card;

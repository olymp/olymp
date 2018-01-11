import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { createComponent, ContentLoader } from 'olymp-fela';

const styles = props => ({
  '> .card-img': {
    float: 'left',
    position: 'relative',
    height: 180,
    width: 150,
    marginRight: 10,
    display: 'inline-block',
  },
  '> article': {
    paddingX: 10,
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
  position: 'relative',
  cursor: 'pointer',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
  borderRadius: 5,
  maxHeight: 180,
  minWidth: '100%',
  display: 'inline-block',
  ':hover': {
    transform: 'scale(1.03, 1.03)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
});
const component = ({
  loading,
  data,
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
      {!!image && (
        <img src={image.url} alt={image.caption} className="card-img" />
      )}
      <article>
        <a target="_blank" href={origin}>
          {favicon && <img src={favicon.url} alt={favicon.caption} />}
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
        description
        origin
        favicon {
          url
          width
          height
          caption
        }
        image {
          url
          width
          height
          caption
        }
        title
        url
      }
    }
  `,
  {
    options: ({ value }) => ({
      fetchPolicy: !value ? 'cache-only' : 'network-only',
      variables: {
        url: value,
      },
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      loading: data.loading && !data.error,
      value: ownProps.value,
      error: data.error,
      scrape: data.scrape || {},
    }),
  },
)(createComponent(styles, component, p => Object.keys(p)));

export default card;

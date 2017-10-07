import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { createComponent } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';

const styles = props => ({
  '> a': {
    float: 'left',
    marginRight: 10,
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
      '> div': {
        marginTop: 7,
        marginRight: 5,
        float: 'left',
      },
      fontSize: 12,
    },
  },
  overflow: 'hidden',
  border: '1px solid #d4d3d3',
  borderRadius: 5,
  minHeight: 20,
  minWidth: 20,
  display: 'inline-block',
});
const component = ({
  loading,
  scrape: { image, logo, title, description, url, origin, favicon },
  error,
  children,
  value,
  ...rest
}) => (
  <div {...rest}>
    {children}
    {error ? console.error(error) : null}
    {image && (
      <a target="_blank" href={url}>
        <Image width={150} height={170} value={image} />
      </a>
    )}
    <article>
      <a target="_blank" href={origin}>
        {favicon && <Image width={16} height={16} value={favicon} />}
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
        <a target="_blank" href={origin}>
          Weiterlesen
        </a>
        <br />
      </div>
    </article>
  </div>
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

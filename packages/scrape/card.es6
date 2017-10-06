import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { createComponent } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';

const styles = props => ({
  '> div': {
    float: 'left',
    marginRight: 10,
  },
  '> article': {
    padding: 0,
    '> a': {
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
  scrape: { image, title, description, url },
  error,
  children,
  value,
  ...rest
}) => (
  <div {...rest}>
    {children}
    {error ? console.error(error) : null}
    <Image
      width={150}
      height={150}
      value={{
        width: 300,
        height: 300,
        url: image
          ? `https://res.cloudinary.com/demo/image/fetch/w_300,h_300,c_fill,f_auto/${image}`
          : undefined,
      }}
    />
    <article>
      <a target="_blank" href={url}>
        {url}
      </a>
      <h3>{title}</h3>
      <div>
        <span>{description}</span>
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
        image
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

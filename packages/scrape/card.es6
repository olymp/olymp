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
  minHeight: 20,
  minWidth: 20,
});
const component = ({ className, image, title, loading, description, value }) => (
  <div className={className}>
    {image && (
      <Image
        width={80}
        height={80}
        value={{
          width: 300,
          height: 300,
          url: `https://res.cloudinary.com/demo/image/fetch/w_300,h_300,c_fill,f_auto/${image}`,
        }}
      />
    )}
    <h3>{title}</h3>
    <p>
      {description} <a href={value}>Mehr erfahren ...</a>
    </p>
  </div>
);

// externe bilder:
//
const card = graphql(
  gql`
    query scrape($url: String) {
      item: scrape(url: $url) {
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
    options: ({ value, url }) => ({
      variables: {
        url: value || url,
      },
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      loading: data.loading,
      value: ownProps.url || ownProps.value,
      ...(data.item || {}),
    }),
  },
)(component);

export default createComponent(styles, card, p => Object.keys(p));

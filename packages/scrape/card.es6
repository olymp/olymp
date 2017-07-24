import React from 'react';
import { graphql, gql } from 'olymp-utils';
import { createComponent, SchemaLoader } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';

const styles = props => ({});
const component = ({ className, title, loading }) =>
  (<div className={className}>
    {title}
  </div>);

// externe bilder:
// http://res.cloudinary.com/demo/image/fetch/w_300,h_300,c_fill,g_face,r_max,f_auto/http://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_Césars_2014.jpg

graphql(
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
    options: ({ value }) => ({
      variables: {
        url: value,
      },
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      loading: data.loading,
      ...(data.item || {}),
    }),
  }
)(component);

export default createComponent(styles, component, p => Object.keys(p));

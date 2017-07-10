import React from 'react';
import { graphql, gql } from 'olymp';
import { createComponent, Container, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';

const Img = createComponent(
  ({ theme }) => ({
    marginX: 'auto',
    marginBottom: theme.space3,
    filter: 'grayscale(100%)',
    opacity: 0.3,
    transition: 'opacity .4s ease,filter .4s ease',
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const Link = createComponent(
  ({ theme }) => ({
    onHover: {
      '> div': {
        filter: 'none',
        opacity: 1,
      },
    },
    ifSmallDown: {
      color: theme.dark3,
    },
  }),
  'a',
  p => Object.keys(p)
);

const Content = createComponent(
  ({ theme }) => ({
    ifMediumUp: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      centerY: true,
      backgroundColor: 'rgba(0, 0, 0, 0.67)',
      borderRadius: theme.borderRadius,
      opacity: 0,
    },
  }),
  'div',
  p => Object.keys(p)
);

const Inner = createComponent(
  ({ theme }) => ({
    ifMediumUp: {
      position: 'absolute',
      width: '100%',
      left: 0,
      centerY: true,
      padding: theme.space2,
      '> h3': {
        color: theme.light,
      },
    },
  }),
  'div',
  p => Object.keys(p)
);

const Item = createComponent(
  ({ theme }) => ({
    padding: theme.space2,
    marginY: theme.space2,
    textAlign: 'center',
    position: 'relative',
  }),
  ({ className, website, name, tags, image }) =>
    (<Grid.Item className={className} mini={5} medium={2} gridSize={10}>
      <Link href={website} rel="noopener noreferrer">
        <Img
          value={image}
          maxResolution={40000}
          width="70%"
          ratio={1}
          mode="padded"
        />
        <Content>
          <Inner>
            <h3>
              {name}
            </h3>
            <span>
              {tags.join(', ')}
            </span>
          </Inner>
        </Content>
      </Link>
    </Grid.Item>),
  p => Object.keys(p)
);

const component = graphql(
  gql`
    query awardList {
      items: awardList {
        id
        name
        description
        image {
          url
          crop
          width
          height
          caption
          source
        }
        website
        color
        tags
      }
    }
  `,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      items: data.items || [],
    }),
  }
)(
  createComponent(
    ({ theme }) => ({
      backgroundColor: theme.dark5,
      marginY: theme.space3,
      paddingY: theme.space2,
    }),
    ({ className, attributes, items }) =>
      (<div className={className} {...attributes}>
        <Container>
          <Grid size={10}>
            {items.map(item => <Item {...item} key={item.id} />)}
          </Grid>
        </Container>
      </div>),
    p => Object.keys(p)
  )
  );

export default {
  key: 'GZK.Panel.Network',
  label: 'Netzwerk',
  category: 'Panel',
  editable: false,
  component,
};

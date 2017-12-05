import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Container, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Card } from 'antd';
import { createPushPathname } from 'olymp-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { get } from 'lodash';

export const page = gql`
  query Document($id: ID!) {
    page: Document(id: $id) {
      id
      children {
        id
        slug
        name
        description
        extract
        image
      }
    }
  }
`;

const enhance = compose(
  graphql(page, {
    options: ({ editor }) => ({
      variables: { id: editor.props.id },
    }),
  }),
  connect(
    ({ location }) => ({
      pathname: location.pathname,
    }),
    dispatch => ({
      push: createPushPathname(dispatch),
    }),
  ),
);
const BannerBlock = enhance(
  ({ attributes, className, children, data, push, pathname }) => (
    <div className={className} {...attributes}>
      <Container>
        {children}
        <Grid size={4}>
          {get(data.page, 'children', []).map(x => (
            <Grid.Item padding={5} key={x.id} medium={1}>
              <Card
                onClick={() => push(`${pathname}${x.slug}`)}
                style={{
                  width: '100%',
                  borderBottomRightRadius: 90,
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                cover={
                  <Image
                    width="100%"
                    maxHeight={150}
                    value={x.image}
                  />
                }
              >
                <Card.Meta
                  style={{ maxHeight: 190, overflow: 'hidden' }}
                  avatar={<img src="/favicon.ico" width="14px" height="14px" />}
                  title={x.name}
                  description={x.description || x.extract}
                />
              </Card>
            </Grid.Item>
          ))}
        </Grid>
      </Container>
    </div>
  ),
);

export default {
  type: 'children',
  isVoid: true,
  kind: 'block',
  label: 'Unterseiten',
  category: 'Media',
  styles: ({ theme }) => ({
    width: '100%',
    marginBottom: 20,
    paddingY: theme.space3,
  }),
  component: BannerBlock,
};

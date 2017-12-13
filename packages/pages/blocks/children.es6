import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Container, Grid } from 'olymp-fela';
import Panorama from 'olymp-fela/panorama';
import { Image } from 'olymp-cloudinary';
import { Card } from 'antd';
import { createPushPathname } from 'olymp-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { get } from 'lodash';

export const page = gql`
  query page($id: String) {
    page(id: $id) {
      id
      children {
        id
        slug
        name
        description
        blocks {
          extract
          image {
            url
            width
            height
            caption
          }
        }
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
        <Panorama items={
          get(data.page, 'children', []).map(x => ({
            id: x.id,
            image: get(x.blocks, 'image'),
            name: x.name
          }))}
        />
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

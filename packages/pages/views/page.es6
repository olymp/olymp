import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateMate, withBlockTypes, withJsonState } from 'olymp-slate';
import { withProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import { queryPage } from '../gql';

const Page = withBlockTypes(props => (
  <ContentLoader isLoading={props.isLoading}>
    <SlateMate {...props} showUndo readOnly>
      {props.children}
    </SlateMate>
  </ContentLoader>
));
Page.propTypes = {
  item: object,
  onChange: func,
  readOnly: bool,
};
Page.defaultProps = {
  item: {},
  readOnly: true,
};
Page.WithData = queryPage(
  withProps(({ item, data, ...rest }) => ({
    value: item && item.blocks,
    xy: console.log(1, item, rest),
    isLoading: data.loading,
    item,
  }))(Page),
);
export default Page;

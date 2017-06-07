import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import { queryPage } from './gql';
import { mapProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';

const Page = withBlockTypes(props => (
  <ContentLoader height={200} isLoading={props.isLoading}>
    <SlateMate {...props} showUndo />
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
export default Page;
export const PageGql = queryPage(
  mapProps(({ item, data }) => ({ value: item && item.blocks, isLoading: data.loading }))(Page)
);

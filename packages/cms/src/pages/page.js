import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import { queryPage } from './gql';
import { mapProps } from 'recompose';

const Page = withBlockTypes(props => (
  <SlateMate {...props} showUndo xy={console.log(props)} />
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
  mapProps(({ item }) => ({ value: item && item.blocks }))(Page)
);

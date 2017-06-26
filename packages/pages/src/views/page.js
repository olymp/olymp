import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import { queryPage } from '../gql';
import { mapProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';

const Page = withBlockTypes(props =>
  (<ContentLoader isLoading={props.isLoading}>
    <SlateMate {...props} showUndo key={props.id + (props.bindingId || '')} />
  </ContentLoader>)
);
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
  mapProps(({ item, data, ...rest }) => ({
    value: item && item.blocks,
    isLoading: data.loading,
    ...rest,
  }))(Page)
);
export default Page;

import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import queryPage from '../gql/query';
import { mapProps } from 'recompose';
import { ContentLoader } from 'olymp-fela/loader';

const Page = withBlockTypes(props =>
  (<ContentLoader isLoading={props.isLoading}>
    <SlateMate {...props} showUndo key={props.id + (props.bindingId || '')}>
      {props.children}
    </SlateMate>
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
    item,
    ...rest,
  }))(Page)
);
export default Page;

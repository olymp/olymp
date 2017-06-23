import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import { ContentLoader } from 'olymp-fela';

const Page = withBlockTypes(props =>
  (<ContentLoader height={200} isLoading={props.isLoading}>
    <SlateMate {...props} showUndo />
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
export default Page;

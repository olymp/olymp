import React from 'react';
import { object, func } from 'prop-types';
import { SlateMate, withBlockTypes } from 'olymp/slate';
import { queryPage } from './gql';

const PageSlate = withBlockTypes(({ item, onChange, ...rest }) => (
  <SlateMate {...rest} onChange={onChange} showUndo value={item.blocks || null} />
));
PageSlate.propTypes = {
  item: object,
  onChange: func,
};
PageSlate.defaultProps = {
  item: {},
};
export default PageSlate;
export const PageSlateGql = queryPage(PageSlate);

import React from 'react';
import { object } from 'prop-types';
import { Hashtax } from 'olymp/hashtax';
import { queryPage } from './gql';

export const Page = ({ item, ...rest }) => (
  <Hashtax {...rest} value={item.text} page={item} />
);
Page.propTypes = {
  item: object,
};
Page.defaultProps = {
  item: {},
};
export const PageGql = queryPage(Page);

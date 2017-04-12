import React, { Component, PropTypes } from 'react';
import { Hashtax } from 'olymp/hashtax';
import { queryPage } from './gql';

export const Page = ({ item }) => (
  <Hashtax value={item.text} page={item} />
);
Page.propTypes = {
  item: PropTypes.object,
};
Page.defaultProps = {
  item: {},
};
export const PageGql = queryPage(Page);

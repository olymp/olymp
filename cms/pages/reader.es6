import React from 'react';
import { object, func, bool } from 'prop-types';
import { SlateReader } from 'olymp-slate';
import { withProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import renderHelmet from 'olymp-utils/helmet';
import { get } from 'lodash';
import { queryPage } from './gql/query';

const Page = ({ children, isLoading, pathname, ...props }) => (
  <ContentLoader isLoading={isLoading}>
    <SlateReader {...props} key={props.id + (props.bindingId || '')}>
      {renderHelmet(
        { ...get(props, 'binding.blocks', {}), ...get(props, 'binding', {}) },
        pathname,
      )}
      {children}
    </SlateReader>
  </ContentLoader>
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
  withProps(({ item, data }) => ({
    value: item && item.blocks,
    binding: item,
    readOnly: true,
    isLoading: data.loading,
  }))(Page),
);
export default Page;

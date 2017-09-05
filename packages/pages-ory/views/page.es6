import React from 'react';
import { object, func, bool } from 'prop-types';
import { mapProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import Ory from './ory';
import { queryPage } from '../gql';

const Page = props => (
  <ContentLoader isLoading={props.isLoading}>
    <Ory {...props} showUndo key={props.id + (props.bindingId || '')}>
      {props.children}
    </Ory>
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
  mapProps(({ item, data, ...rest }) => ({
    value: item && item.ory,
    isLoading: data.loading,
    item,
    ...rest,
  }))(Page),
);
export default Page;

import React from 'react';
import { object, func, bool } from 'prop-types';
import { StatelessSlateMate, withBlockTypes, withJsonState } from 'olymp-slate';
import { mapProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import { queryPage } from '../gql';

const Page = withJsonState()(
  withBlockTypes(props => (
    <ContentLoader isLoading={props.isLoading}>
      <StatelessSlateMate {...props} showUndo key={props.id + (props.bindingId || '')}>
        {props.children}
      </StatelessSlateMate>
    </ContentLoader>
  )),
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
  }))(Page),
);
export default Page;

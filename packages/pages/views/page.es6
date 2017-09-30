import React from 'react';
import { object, func, bool } from 'prop-types';
import { StatelessSlateMate, withBlockTypes, withJsonState } from 'olymp-slate';
import { withProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import { queryPage } from '../gql';

const Page = withJsonState()(
  withBlockTypes(props => (
    <ContentLoader isLoading={props.isLoading}>
      <StatelessSlateMate {...props} showUndo key={props.id + (props.bindingId || '')} readOnly>
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
  withProps(({ item, data }) => ({
    value: item && item.blocks,
    isLoading: data.loading,
    item,
  }))(Page),
);
export default Page;

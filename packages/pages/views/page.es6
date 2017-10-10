import React from 'react';
import { object, func, bool } from 'prop-types';
import { StatelessSlateMate, withBlockTypes, withJsonState } from 'olymp-slate';
import { withProps } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import { renderHelmet } from 'olymp-utils';
import { get } from 'lodash';
import { queryPage } from '../gql';

const Page = withJsonState({ debounce: 800 })(
  withBlockTypes(props => (
    <ContentLoader isLoading={props.isLoading}>
      <StatelessSlateMate {...props} showUndo key={props.id + (props.bindingId || '')}>
        {renderHelmet(
          { ...get(props, 'binding.blocks', {}), ...get(props, 'binding', {}) },
          props.pathname,
        )}
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
    binding: item,
    readOnly: true,
    isLoading: data.loading,
  }))(Page),
);
export default Page;

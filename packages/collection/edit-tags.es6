import React from 'react';
import { compose, toClass } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { createComponent } from 'olymp-fela';
import { Tag, Select } from 'antd';
import FormItem from './form-item';

const CheckableTag = createComponent(
  ({ theme, checked, marked }) => ({
    marginBottom: theme.space1,
    ellipsis: true,
    ':not(.ant-tag-checkable-checked)': {
      backgroundColor: !checked && marked ? theme.dark2 : theme.dark5,
      color: !checked && marked && theme.light,
    },
  }),
  p => <Tag.CheckableTag {...p} />,
  ({ marked, ...p }) => Object.keys(p),
);

const enhance = compose(
  graphql(
    gql`
      query tags {
        tags {
          id
        }
      }
    `,
    {
      props: ({ ownProps, data }) => ({
        ...ownProps,
        tags: (data.tags || []).map(x => x.id),
      }),
    },
  ),
  toClass,
);

export default {
  rule: ({ type, name }) =>
    name === 'tags' && type.kind === 'LIST' && type.ofType.name === 'String',
  form: enhance(({ tags = [], ...props }) => (
    <FormItem {...props}>
      <Select {...props} mode="tags" style={{ width: '100%' }}>
        {tags.map(tag => <Select.Option key={tag}>{tag}</Select.Option>)}
      </Select>
    </FormItem>
  )),
};

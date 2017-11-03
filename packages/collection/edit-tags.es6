import React from 'react';
import { compose, toClass } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Sidebar } from 'olymp-ui';
import { createComponent } from 'olymp-fela';
import { Tag } from 'antd';
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
  form: toClass(({ value = [], ...props }) => (
    <FormItem {...props}>{value.length} Ausgewählt</FormItem>
  )),
  full: enhance(({ tags = [], value = [], onChange }) => (
    <Sidebar isOpen padding={15} width={400} title="Schlagworte">
      {(tags || []).map(tag => (
        <CheckableTag
          key={tag}
          checked={(value || []).indexOf(tag) !== -1}
          marked={value.filter(sTag => sTag === tag).length > 0}
          onChange={checked =>
            onChange(checked ? [...value, tag] : value.filter(x => x !== tag))}
        >
          {tag}
        </CheckableTag>
      ))}
    </Sidebar>
  )),
};

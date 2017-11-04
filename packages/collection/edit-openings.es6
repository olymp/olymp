import React from 'react';
import { toClass } from 'recompose';
import { TimeRangesEditor } from 'olymp-ui';
import FormItem from './form-item';

export default {
  rule: ({ innerType }) =>
    innerType.kind === 'LIST' && innerType.ofType.name === 'TimeRange',
  form: toClass(
    ({ 'data-__field': dataField, 'data-__meta': dataMeta, ...p }) => (
      <FormItem {...p}>
        <span data-__field={dataField} data-__meta={dataMeta}>
          Bearbeiten
        </span>
      </FormItem>
    ),
  ),
  full: toClass(p => <TimeRangesEditor style={{ padding: 20 }} {...p} />),
};

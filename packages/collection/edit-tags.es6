import React from 'react';
import { toClass } from 'recompose';
import { Sidebar, List } from 'olymp-ui';
import FormItem from './form-item';

export default {
  selector: ({ type }) => type.kind === 'LIST' && type.ofType.name === 'String',
  form: toClass(p => <FormItem {...p}>Bearbeiten</FormItem>),
  full: toClass(({ items = [] }) => (
    <Sidebar isOpen padding={0} width={400} title="Schlagworte">
      {items.map(tag => <List.Item label={tag} />)}
    </Sidebar>
  )),
};

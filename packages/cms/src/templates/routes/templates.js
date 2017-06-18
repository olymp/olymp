import React from 'react';
import { Templates } from '../views';

export default ({ query, pathname, router }) =>
  <Templates
    handleListClick={template =>
      router.push({ pathname, query: { ...query, '@template': template.id } })}
    id={query[`@template`]}
    onClose={() =>
      router.push({ pathname, query: { ...query, '@template': undefined } })}
  />;

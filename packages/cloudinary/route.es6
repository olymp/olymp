import React from 'react';
import { connect } from 'react-redux';
import { createUpdateQuery } from 'olymp-router';
import Mediathek from './views';

const enhance = connect(
  ({ location }) => ({
    selected: location.query['@media'] || '',
  }),
  dispatch => ({
    updateQuery: createUpdateQuery(dispatch),
  }),
);
const CloudinaryRoute = enhance(({ selected, updateQuery }) => (
  <Mediathek
    selected={selected
      .split(',')
      .filter(x => x)
      .map(x => ({ id: x, crop: undefined }))}
    handleSelection={selected =>
      updateQuery({ '@media': selected.map(item => item.id).join(',') })}
  />
));
CloudinaryRoute.displayName = 'CloudinaryRoute';
export default CloudinaryRoute;

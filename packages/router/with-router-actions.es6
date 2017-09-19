import { connect } from 'react-redux';
import {
  createPush,
  createReplace,
  createPushPathname,
  createUpdateQuery,
  createReplaceQuery,
} from './redux';

export default connect(null, dispatch => ({
  push: createPush(dispatch),
  replace: createReplace(dispatch),
  pushPathname: createPushPathname(dispatch),
  updateQuery: createUpdateQuery(dispatch),
  replaceQuery: createReplaceQuery(dispatch),
}));

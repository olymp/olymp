import React from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/slate';

export default useGenericBlock({
  label: 'OptOutCookie-Link',
  category: 'Media',
  editable: true,
})(({ children, ...rest }) => (
  <GenericBlock {...rest}>
    <a href="javascript:gaOptout();">Datenerfassung durch Google Analytics deaktivieren</a>
  </GenericBlock>
));

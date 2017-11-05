import { FaImage } from 'olymp-icons';
import React from 'react';
import createEdit from './edit';

export default createEdit((v, { multi }) => (
  <FaImage color="white" size={14} />
));

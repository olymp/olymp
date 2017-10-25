import { FaImage, FaImages } from 'olymp-icons';
import React from 'react';
import createEdit from './edit';

export default createEdit((v, multi) => (multi ? <FaImages /> : <FaImage />));

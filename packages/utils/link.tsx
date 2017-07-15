import React from 'react';
import { Link } from 'react-router-dom';
import { urlToLocation } from './utils';

export default ({ to, ...rest }) => <Link {...rest} to={urlToLocation(to)} />;
